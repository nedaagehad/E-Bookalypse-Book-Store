import { Formik,Form,Field } from 'formik'
import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { booksApi } from '../../../../store/services';
import { ReactMultiSearchSelect } from 'react-multi-search-select';

const UpdateCollection = () => {
    const [updateCollection] = booksApi.useUpdateCollectionMutation()
    let params = useParams()
    let navigate = useNavigate()
    const {data,isLoading,error} = booksApi.useGetCollectionByIdQuery(params.id)
    const getAllBooks = booksApi.useGetAllBooksQuery()
    const [books,setBooks] = useState()
    const [selectedBooks,setSelectedBooks] = useState()
    const [collection,setCollection] = useState()
    const collectionValidations = Yup.object().shape({
        title: Yup.string().required("Title is Required"),
        collectionPrice: Yup.number().required("Price is Required"),
        description: Yup.string().required("Description is Required"),
        // startDate:Yup.date().required("Start Date is Required"),
        // endDate:Yup.date().required("End Date is Required"),
      })

      const onSelectChange = (e) =>{
        setSelectedBooks(e)
      
    }
  return (
    <div className="page-body-wrapper p-5" style={{flex:"auto"}}>
        <div className="content-wrapper pt-5">
          <Formik 
                initialValues={{
                    title:'',
                    description:'',
                    collectionPrice:'',
                    collectionBooks:'',
                    // startDate:'',
                    // endDate:''
                }}
                validationSchema={collectionValidations}
                // validate={(values)=>{
                //     const errors = {};
                //     if(selectedBooks.length !== 3  ){
                //         errors.collectionBooks = 'You must have at least 3 books'
                //     }
                    
                //     return errors
        
                //   }}
                onSubmit={values => { 
                    const data = {
                        title:values.title,
                        description:values.description,
                        collectionPrice:values.collectionPrice,
                        collectionBooks:selectedBooks,
                        // startDate:values.startDate,
                        // endDate:values.endDate,
                    }
    
                    // console.log(data)
                    updateCollection({data:data,id:params.id}).then((res)=>{
                        console.log(res)
                        navigate('/admin/collections')

                    }).catch((err)=>{console.log(err) })

                }}
            >
                  {({errors,touched,setFieldValue})=>
                        {   
                            useEffect(() => {
                                if(data){
                                    // console.log(data)
                                    setCollection(data)
                                    setSelectedBooks(data.collectionBooks)
                                    Object.keys(data).forEach(key=>{
                                        if(key !== 'collectionBooks'){

                                            setFieldValue(key,data[key])
                                        }
                                        // if(key == "startDate"){
                                        //     const getDate = data.startDate.split("T")[0]
                                        //     setFieldValue("startDate",getDate)
                                        // }
                                        
                                    })
                                    
                                    if(getAllBooks.data){
                                        setBooks(getAllBooks.data.data)
                                        // console.log(getAllBooks.data.data)
                                    }
                                    

                                }
                            }, [data,getAllBooks.data]);
                            console.log(selectedBooks)
                            if(selectedBooks){

                                return(
                                    <Form className="row text-white">
                                        <div className="col-md-6 mt-2">
                                            <label htmlFor="title" className="form-label">Collection Title : </label>
                                            <Field name="title" id="title"  placeholder="Collection Title"  className={"form-control " } />
                                            {errors.title && touched.title ? (
                                                <div className="form-text text-danger">{errors.title}</div>
                                            ) : null }
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="collectionPrice" className="form-label">Collection Price : </label>
                                            <Field name="collectionPrice" id="collectionPrice" placeholder="Collection Price"  className={"form-control " } />
                                            {errors.collectionPrice && touched.collectionPrice ? (
                                                <div className="form-text text-danger">{errors.collectionPrice}</div>
                                            ) : null }
    
                                        </div>
                                        <div className='col-md-12 mt-2'>
                                            <label htmlFor="description" className="form-label ">Collection Description : </label>
                                            {/* <textarea rows="3" className="form-control"   name="bookdescription"  id="bookdescription"   ></textarea> */}
                                            <Field name="description"  id="description" as="textarea" className="form-control"  />
                                            {errors.description && touched.description ? (
                                                <div className="form-text text-danger">{errors.description}</div>
                                            ) : null }
    
                                        </div>
                                        <div className='col-md-12 mt-2'>
                                            <label htmlFor="collectionBooks" className="form-label ">Collection Books : </label>
                                            <ReactMultiSearchSelect 
                                                className="text-dark"
                                                    id="collectionBooks"
                                                    name="collectionBooks"
                                                    defaultValues={selectedBooks}
                                                    options={books ? books : []}
                                                    optionsObject={{key:"_id",value:"title"}}
                                                    onChange={(e)=>onSelectChange(e)}
                                                    selectionLimit={3}
                                                    />
                                        
                                                {errors ? ( <div className="form-text text-danger">{errors.collectionBooks}</div>
                                                ) : null }
                                                
                                        
    
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                        <label htmlFor="startDate" className="form-label">Collection Start Date : </label>
                                        {/* <input type="date" className='form-control'  id="bookdate" name="bookdate"   placeholder="Release Date"   /> */}
                                        <Field className='form-control'  id="startDate" name="startDate"   placeholder="Release Date"   type="date" />
                                        
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                        <label htmlFor="endDate" className="form-label">Collection End Date : </label>
                                        {/* <input type="date" className='form-control'  id="bookdate" name="bookdate"   placeholder="Release Date"   /> */}
                                        <Field className='form-control'  id="endDate" name="endDate"   placeholder="Release Date"   type="date" />
                                        
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <input type="submit" className='btn btn-success form-control'   value="Add Collection" />
                                        </div>
                            
                                    </Form>
                                )
                            }

                        }
                    }
                
            </Formik>
        </div>
    </div>
  )
}

export default UpdateCollection