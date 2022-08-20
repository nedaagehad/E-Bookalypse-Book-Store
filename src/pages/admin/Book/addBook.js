import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import { booksApi } from '../../../store/services';
import { useNavigate } from 'react-router-dom';
import { ReactMultiSearchSelect } from 'react-multi-search-select';

const addBook = () => {

    // eslint-disable-next-line
    const [addNewBooks , response ] = booksApi.useAddNewBookMutation();
    const categoryData = booksApi.useGetAllCategoriesQuery()
    const writersData = booksApi.useGetTotalWritersQuery()
    const promotionsData = booksApi.useGetAllPromotionsQuery();

    const [categories,setCategories] =useState()
    const [writers,setWriters] =useState()
    const [promotions,setPromotions] =useState()
    const [selectedWriters,setSelectedWriters] =useState()
    const [selectedCategories,setSelectedCategories] =useState()
    const [selectedPromotions,setSelectedPromotions] =useState()

    const [BookImage, setBookImage] = useState();
    const [BookPdf, setBookPdf] = useState();

    let navigate = useNavigate()

    const onSelectChange = (e)=>{
        setSelectedWriters(e)
    }

    const onSelectCategoryChange = (e)=>{
        setSelectedCategories(e)
    }

    const onPromotionChange = (e)=>{
        setSelectedPromotions(e)
    }
    
    useEffect(() => {

        if(categoryData){
            if(categoryData.data){

                setCategories(categoryData.data.categories)
            }else if(categoryData.error){
                console.log(writersData.error)
            }
        }
        if(writersData){
            if(writersData.data){
                setWriters(writersData.data)
            }else if(writersData.error){
                console.log(writersData.error)
            }

        }
        if(promotionsData){
            if(promotionsData.data){
                setPromotions(promotionsData.data)
            }else if(promotionsData.error){
                console.log(promotionsData.error)
            }
        }
  
      }, [categoryData,writersData,promotionsData]);

      const BookSchemaValidation = Yup.object().shape({
        booktitle: Yup.string().required("Title is Required"),
        bookprice: Yup.number().required("Price is Required"),
        bookdescription: Yup.string().required("Description is Required"),
      })


      let onFileChange = (e)=>{
        setBookImage(e.target.files[0])
        
      }
    let onPdfChange = (e)=>{
      setBookPdf(e.target.files[0])
    }

  return (
    <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5 text-white">
        <Formik 
        initialValues={{
            booktitle:"",
            bookprice:"",
            bookdescription:"",
            bookdate:"",
            bookpublisher:"",
            booklang:"",
            bookpages:"",
            category:"",
            writer:"",
            promotion:""
         }}
         validationSchema={BookSchemaValidation}
         validate={(values)=>{
            const errors = {};
            if(!BookPdf ){
                errors.pdfErr = "Please Select PDF"
            }
            if(selectedWriters.length === 0){
                errors.writer = "Please Select At least one writer"
            }
            if(selectedCategories.length === 0){
                errors.category = "Please Select At least one category"
            }
            if (selectedPromotions.length > 1){
                errors.promotion = "Please Select only one promotion"
            }
            return errors

          }}
         onSubmit={values =>{
            const data = new FormData()
            data.append('bookimage',BookImage)
            data.append('booksrc',BookPdf)
            data.append("title",values.booktitle)
            data.append("price",values.bookprice)
            data.append("description",values.bookdescription)
            if(values.bookdate){

                data.append("date",values.bookdate)
            }
            if(values.booklang){

                data.append("lang",values.booklang)
            }
            
            data.append("publisher",values.bookpublisher)
            if(values.bookpages){

                data.append("pages",values.bookpages)
            }
            data.append("category",JSON.stringify(selectedCategories))
            data.append("writer",JSON.stringify(selectedWriters))
            if(selectedPromotions[0]){

                data.append("promotion",selectedPromotions[0])
            }

            addNewBooks(data).then((response)=>{
                if(response.data){
                    navigate('/admin/books')
                }
            }).catch((err)=>console.log(err))
         }}
            
        >

    {({errors,touched})=>(

        <Form className="row text-white" >
            <div className="col-md-6 mt-2">
                <label htmlFor="booktitle" className="form-label">Book Title : </label>
                <Field name="booktitle" id="booktitle"  placeholder="Book Title"  className={"form-control " } />
                {errors.booktitle && touched.booktitle ? (
                    <div className="form-text text-danger">{errors.booktitle}</div>
                ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookprice" className="form-label">Book Price : </label>
                <Field name="bookprice" id="bookprice" placeholder="Book Price"  className={"form-control " } />
                {errors.bookprice && touched.bookprice ? (
                    <div className="form-text text-danger">{errors.bookprice}</div>
                ) : null }

            </div>
            <div className='col-md-12 mt-2'>
                <label htmlFor="bookdescription" className="form-label ">Book Description : </label>
                <Field name="bookdescription"  id="bookdescription" as="textarea" className="form-control"  />
                {errors.bookdescription && touched.bookdescription ? (
                    <div className="form-text text-danger">{errors.bookdescription}</div>
                ) : null }

            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                <label htmlFor="bookimage" className="form-label ">Book Image : </label>
                <Field  id="bookimage" name="bookimage" className={"form-control " } type="file" onChange={(e)=>onFileChange(e)} />

            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
                {BookImage? <img  className="border-2" width="50%" height="100%" alt='bookimage' src={URL.createObjectURL(BookImage)}  /> : " There Is No Image Yet"}
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                <label htmlFor="booksrc" className="form-label ">Book PDF : </label>
                <Field  id="booksrc" name="booksrc" className={"form-control " } type="file"   onChange={(e) => onPdfChange(e)}/>
                {errors ? ( <div className="form-text text-danger">{errors.pdfErr}</div>
                ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookdate" className="form-label">Book Release Date : </label>
                <Field className='form-control'  id="bookdate" name="bookdate"   placeholder="Release Date"   type="date" />
                
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookpublisher" className="form-label">Book Publisher : </label>
                <Field  className='form-control'  id="bookpublisher" name="bookpublisher"   placeholder="Book Publisher" />

            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="booklang" className="form-label">Book Language : </label>
                <Field as="select" id="booklang" name="booklang"  className='form-control'  placeholder="Book Language" aria-label="Select Writer" >
                    <option value="none" >None</option>
                    <option value="english" >english</option>
                    <option value="arabic" >عربي</option>
                </Field>
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookpages" className="form-label">Book Pages Number : </label>
                <Field   className='form-control'  id="bookpages" name="bookpages"   placeholder="Book Pages Number" type="number" />

            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="category" className="form-label">Select Category : </label>
            
                        <ReactMultiSearchSelect 
                          className="text-dark"
                          id="category"
                          name="category"
                          options={categories ? categories : []}
                          optionsObject={{key:"_id",value:"title"}}
                          onChange={(e)=>onSelectCategoryChange(e)}
                          />
                            {errors ? ( <div className="form-text text-danger">{errors.category}</div>
                        ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                    <label htmlFor="writer" className="form-label">Select Writer : </label>
                    
                    <ReactMultiSearchSelect 
                          className="text-dark"
                          id="writer"
                          name="writer"
                          options={writers ? writers : []}
                          optionsObject={{key:"_id",value:"name"}}
                          onChange={(e)=>onSelectChange(e)}
                          />
                            {errors ? ( <div className="form-text text-danger">{errors.writer}</div>
                        ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="promotion" className="form-label">Select Promotion : </label>
                    <ReactMultiSearchSelect 
                          className="text-dark"
                          id="promotion"
                          name="promotion"
                          options={promotions ? promotions : []}
                          optionsObject={{key:"_id",value:"title"}}
                          onChange={(e)=>onPromotionChange(e)}
                          selectionLimit={1}
                          />
                            {errors ? ( <div className="form-text text-danger">{errors.promotion}</div>
                        ) : null }
            </div>
            <div className='col-md-12 mt-4'>
                <input type="submit" className='btn btn-success form-control'   value="Add Book" />
            </div>
        </Form>
    )}
        </Formik>
    </div>  
  </div>
  )
}

export default addBook