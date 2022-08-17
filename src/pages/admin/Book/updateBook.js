import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import storage from '../../../Firebase/firebaseImage';

import { booksApi } from '../../../store/services';
import { ReactMultiSearchSelect } from 'react-multi-search-select';



const updateBook = () => {
    const [updateNewBook,response] = booksApi.useUpdateNewBookMutation()
    const [book,setBook] = useState();
    const [categories,setCategories] =useState()
    const [writers,setWriters] =useState()
    const [selectedCategories,setSelectedCategories] =useState()
    const [selectedWriters,setSelectedWriters] =useState()
    const [selectedPromotions, setSelectPromotions] =useState()

    const [promotions,setPromotions] = useState()
    const [BookImage, setBookImage] = useState();
    const [BookPdf, setBookPdf] = useState();
    const [currentImage, setcurrentImage] = useState();
    let params = useParams()
    let navigate= useNavigate()
    const {data,isLoading,error}= booksApi.useGetBookByIdQuery(params.id)
    const categoryData = booksApi.useGetAllCategoriesQuery()
    const writersData = booksApi.useGetTotalWritersQuery()
    const promotionsData = booksApi.useGetAllPromotionsQuery();



    const BookSchemaValidation = Yup.object().shape({
      booktitle: Yup.string().required("Title is Required"),
      bookprice: Yup.number().required("Price is Required"),
      bookdescription: Yup.string().required("Description is Required"),
    //   category:Yup.array().required("Required"),
    //   writer:Yup.array().required("Required")
    })


    let onFileChange = (e)=>{
      // console.log(e.target.files[0])
      setBookImage(e.target.files[0])
      
    }
  let onPdfChange = (e)=>{
    setBookPdf(e.target.files[0])
  }
  const onSelectCategoryChange = (e)=>{
    setSelectedCategories(e)
  }
  const onSelectWritersChange = (e)=>{
    setSelectedWriters(e)
  }
  const onSelectPromotions = (e)=>{
    setSelectPromotions(e)
  }

  return (
    <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5 text-white">
        <Formik 
        
        initialValues= {{
            
            booktitle:'',
            bookprice:" ",
            bookdescription:"",
            bookdate:"",
            bookpublisher:"",
            booklang:"",
            bookpages:"",
            category:"",
            writer:"",
            promotion:"",
            oldImg:"",
            oldSrc:""

        }}
        validationSchema={BookSchemaValidation}
        // validate={(values)=>{
        //     const errors = {};
        //     if(data){

        //         if(!BookPdf && !data[0].source ){
        //             errors.pdfErr = "Please Select PDF"
        //         }
        //     }
        //     return errors

        // }}
        
        onSubmit={values =>{
            const data = new FormData()
            data.append('bookimage',BookImage)
            data.append('booksrc',BookPdf)
            data.append("title",values.booktitle)
            data.append("price",values.bookprice)
            data.append("description",values.bookdescription)
            data.append("date",values.bookdate)
            data.append("publisher",values.bookpublisher)
            data.append("lang",values.booklang)
            data.append("pages",values.bookpages)
            data.append("category",JSON.stringify(selectedCategories))
            data.append("writer",JSON.stringify(selectedWriters))
            data.append("promotion",'62e5298388bd028a85259f70')
            // console.log(selectedCategories)
            // console.log(selectedWriters)
            // console.log(selectedPromotions)

            if(book){

                data.append("oldImg",book.poster)
                data.append("oldSrc",book.source)
            }

            // console.log( values)
            // axios.put(`https://e-bookalypse.herokuapp.com/api/admin/books/${params.id}`,data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
            updateNewBook({bookNewData : data,bookid : params.id}).then((res)=>
            {if(res.data){
                navigate('/admin/books')
                // console.log(res)
            }else{
                console.log(res.err)
            }}
          

            ).catch((err)=>{console.log(err)})
            }}
            
        >

    {({errors,touched,setFieldValue})=>
    {
        useEffect(() => {


            if(data){
                setBook(data)
                let categories = []
                let writers = []
                data[0].category.forEach((c)=>{
                    categories.push(c._id)
                    setSelectedCategories(categories)
                })
                if(data[0].promotion[0]){
                    
                    setSelectPromotions(data[0].promotion[0]._id)
                    // console.log(data[0]._id)
                }
                data[0].writer.forEach((c)=>{
                    writers.push(c._id)
                    setSelectedWriters(writers)
                })
                // setSelectedWriters(data[0].writer)
                if(data[0].source || data[0].poster){
                    const starsRef = ref(storage, 'uploads/books/poster/'+data[0].poster);
          
                    getDownloadURL(starsRef)
                    .then((url) => {
                        setcurrentImage(url)
                        // console.log(url)
                    })
                
                }
                    Object.keys(data[0]).forEach(key=>{
                            // console.log(key)
                            setFieldValue("book"+key,data[0][key])
                            // setFieldValue("booktitle",res.data.title)
                            if(key == "date_release"){
                                if(data[0].date_release != undefined && data[0].date_release != null){
                                   const getDate = data[0].date_release.split("T")[0]
                                    // console.log(getDate)
                                setFieldValue("bookdate",getDate)
                                }
                            }
                            if(key == 'n_pages'){
                                setFieldValue('bookpages',data[key])
                            }

                            
                
                    })
            }

            
            if(categoryData){
                const { data ,isLoading , error} = categoryData
                if(data){
                    setCategories(data.categories)
                }
                // console.log(categoryData)
            }

            if(writersData){
                const {data,isLoading,error} = writersData
                if(data){
                    setWriters(data)
                }
            }

            if(promotionsData){
                const {data,isLoading,error} = promotionsData
                if(data){
                    setPromotions(data)
                    // console.log(data)
                }
            }

            
      
          }, [data,categoryData,writersData,promotionsData]);
        //   {console.log(book)}
        // console.log(selectedCategories)

        console.log(selectedCategories)
        return(
            <Form className="row" >
            {book ? 
                
            <>
            
            <div className="col-md-6 mt-2">
                <label htmlFor="booktitle"  className="form-label">Book Title : </label>
                {/* <input type="text" className='form-control'    name="booktitle" id="booktitle" placeholder="Book Title"     /> */}
                <Field name="booktitle" id="booktitle" placeholder="Book Title"   className={"form-control " } />
                {errors.booktitle && touched.booktitle ? (
                    <div className="form-text text-danger">{errors.booktitle}</div>
                ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookprice" className="form-label">Book Price : </label>
                {/* <input type="text" className='form-control'   name="bookprice" id="bookprice" placeholder="Book Price"    /> */}
                <Field name="bookprice" id="bookprice" placeholder="Book Price"  className={"form-control " } />
                {errors.bookprice && touched.bookprice ? (
                    <div className="form-text text-danger">{errors.bookprice}</div>
                ) : null }

            </div>
            <div className='col-md-12 mt-2'>
                <label htmlFor="bookdescription" className="form-label ">Book Description : </label>
                {/* <textarea rows="3" className="form-control"   name="bookdescription"  id="bookdescription"   ></textarea> */}
                <Field name="bookdescription"  id="bookdescription" as="textarea" className="form-control"  />
                {errors.bookdescription && touched.bookdescription ? (
                    <div className="form-text text-danger">{errors.bookdescription}</div>
                ) : null }

            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                <label htmlFor="bookimage" className="form-label ">Book Image : </label>
                {/* <input type="file" className='form-control' id="bookimage" name="bookimage" /> */}
                <Field  id="bookimage" name="bookimage" className={"form-control " } type="file" onChange={(e)=>onFileChange(e)} />

            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
                {
                  BookImage ? 
                  <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(BookImage)}  />
                  :
                
                book[0].poster ? 
                <img src={currentImage}  width="50%" />
                :
              
                null
                }
                {/* {BookImage? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(BookImage)}  /> : " There Is No Image Yet"} */}
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                <label htmlFor="booksrc" className="form-label ">Book PDF : </label>
                {/* <input type="file" className='form-control' id="booksrc" name="booksrc"  /> */}
                <Field  id="booksrc" name="booksrc" className={"form-control " } type="file"   onChange={(e) => onPdfChange(e)}/>
                {errors ? ( <div className="form-text text-danger">{errors.pdfErr}</div>
                ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookdate" className="form-label">Book Release Date : </label>
                {/* <input type="date" className='form-control'  id="bookdate" name="bookdate"   placeholder="Release Date"   /> */}
                <Field className='form-control'  id="bookdate" name="bookdate"   placeholder="Release Date"   type="date" />
                
            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookpublisher" className="form-label">Book Publisher : </label>
                {/* <input type="text" className='form-control'  id="bookpublisher" name="bookpublisher"   placeholder="Book Publisher" /> */}
                <Field  className='form-control'  id="bookpublisher" name="bookpublisher"   placeholder="Book Publisher" />

            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="booklang" className="form-label">Book Language : </label>
                {/* <input type="text" className='form-control'  id="booklang" name="booklang"   placeholder="Book Language"    /> */}
                <Field   className='form-control'  id="booklang" name="booklang"   placeholder="Book Language"/>

            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="bookpages" className="form-label">Book Pages Number : </label>
                {/* <input type="number" className='form-control'  id="bookpages" name="bookpages"   placeholder="Book Pages Number"    /> */}
                <Field   className='form-control'  id="bookpages" name="bookpages"   placeholder="Book Pages Number" type="number" />

            </div>
            <div className='col-md-6 mt-2'>
                <label htmlFor="category" className="form-label">Select Category : </label>
          
                    {
                        selectedCategories ? 
                        <ReactMultiSearchSelect 
                        className="text-dark"
                        id="category"
                        name="category"
                        defaultValues={selectedCategories}
                        options={categories ? categories : []}
                        optionsObject={{key:"_id",value:"title"}}
                        onChange={(e)=>onSelectCategoryChange(e)}
                        // selectionLimit={3}
                        />
                        
                        : null

                    }

                 
               
                        {errors ? ( <div className="form-text text-danger">{errors.category}</div>
                    ) : null }

            </div>
            <div className='col-md-6 mt-2'>
                    <label htmlFor="writer" className="form-label">Select Writer : </label>
      
                    <ReactMultiSearchSelect 
                          className="text-dark"
                          id="writer"
                          name="writer"
                          defaultValues={selectedWriters}

                          options={writers ? writers : []}
                          optionsObject={{key:"_id",value:"name"}}
                          onChange={(e)=>onSelectWritersChange(e)}
                          // selectionLimit={3}
                          />
                            {errors ? ( <div className="form-text text-danger">{errors.writer}</div>
                        ) : null }
              
            </div>
            <div className='col-md-6 mt-2'>
                    <label htmlFor="promotion" className="form-label">Select promotion : </label>

                    
                    {
                        selectedPromotions ?    
                            <ReactMultiSearchSelect 
                            className="text-dark"
                            id="promotion"
                            name="promotion"
                            defaultValues={[selectedPromotions]}
                            options={promotions ? promotions : []}
                            optionsObject={{key:"_id",value:"title"}}
                            onChange={(e)=>onSelectPromotions(e)}
                            selectionLimit={1}
                            /> 
                        :null
                      }
                    
                
                    
            
                    {errors ? ( <div className="form-text text-danger">{errors.writer}</div>
                        ) : null }
            </div>
            <div className='col-md-12 mt-4'>
                <input type="submit" className='btn btn-success form-control'   value="Updadte Book" />
            </div>   
            </>         
            :console.log("no data received")}

        </Form>
    )
    
    }}
        </Formik>
        </div>
    </div>
  )


}

export default updateBook