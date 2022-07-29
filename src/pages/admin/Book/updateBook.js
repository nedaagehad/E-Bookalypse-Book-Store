import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import storage from '../../../Firebase/firebaseImage';




const updateBook = () => {
    
    const [book,setBook] = useState();
    const [categories,setCategories] =useState()
    const [writers,setWriters] =useState()
    const [BookImage, setBookImage] = useState();
    const [BookPdf, setBookPdf] = useState();
    const [currentImage, setcurrentImage] = useState();

    let params = useParams()




    const BookSchemaValidation = Yup.object().shape({
      booktitle: Yup.string().required("Title is Required"),
      bookprice: Yup.number().required("Price is Required"),
      bookdescription: Yup.string().required("Description is Required"),
      category:Yup.array().required("Required"),
      writer:Yup.array().required("Required")
    })


    let onFileChange = (e)=>{
      // console.log(e.target.files[0])
      setBookImage(e.target.files[0])
      
    }
  let onPdfChange = (e)=>{
    setBookPdf(e.target.files[0])
  }

  return (
    <div className="container mt-5 mb-5">
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
            oldImg:"",
            oldSrc:""
        }}
        validationSchema={BookSchemaValidation}
        validate={(values)=>{
            const errors = {};
            if(!BookPdf ){
                errors.pdfErr = "Please Select PDF"
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
            data.append("date",values.bookdate)
            data.append("publisher",values.bookpublisher)
            data.append("lang",values.booklang)
            data.append("pages",values.bookpages)
            data.append("category",JSON.stringify(values.category))
            data.append("writer",JSON.stringify(values.writer))
            if(book){

                data.append("oldImg",book.poster)
                data.append("oldSrc",book.source)
            }

            // console.log( values)
            axios.put(`https://e-bookalypse.herokuapp.com/api/admin/books/${params.id}`,data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})

        }}
            
        >

    {({errors,touched,setFieldValue})=>
    {
        useEffect(() => {
            axios.get(`https://e-bookalypse.herokuapp.com/api/admin/book/${params.id}`).then((res)=>{
              setBook(res.data)
              
              if(res.data[0].source || res.data[0].poster){
                const starsRef = ref(storage, 'uploads/books/poster/'+res.data[0].poster);
      
                getDownloadURL(starsRef)
                .then((url) => {
                    setcurrentImage(url)
                    // console.log(url)
                })
            
            }
                Object.keys(res.data[0]).forEach(key=>{
                        console.log(key)
                        setFieldValue("book"+key,res.data[0][key])
                        // setFieldValue("booktitle",res.data.title)
                        if(key == "date_release"){
                            if(res.data[0].date_release != undefined && res.data[0].date_release != null){
                               const getDate = res.data[0].date_release.split("T")[0]
                                // console.log(getDate)
                            setFieldValue("bookdate",getDate)
                            }
                        }
                        if(key == 'n_pages'){
                            setFieldValue('bookpages',res.data[key])
                        }
                        if(key =='category'){
                            // values.category = res.data.category
                            // console.log(values.category)
                            setFieldValue('category',res.data[0].category.map((w)=>w._id))
                            // console.log(res.data[0].category.map((w)=>w._id))
                        }
                        if(key =='writer'){
                            // values.category = res.data.category
                            // console.log(values.category)
                            setFieldValue('writer',res.data[0].writer.map((w)=>w._id))
                            // console.log('writer',res.data[0].writer.map((w)=>w._id))

                        }
                
                })
                
            }).catch((err) => {console.log(err)})
            axios.get('https://e-bookalypse.herokuapp.com/api/categories')
            .then((res)=>{setCategories(res.data.categories)
                
            })
            .catch((err)=>console.log(err))
            axios.get('https://e-bookalypse.herokuapp.com/api/writers').then((res)=>setWriters(res.data.data)).catch((err)=>console.log(err))
            
      
          }, []);
        //   {console.log(book)}
        return(
        
            <Form className="row" >
            {book? 
                
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
                    {/* book.category.filter((c)=> !categories.some(cat => cat==c)).map((c)=>{ */}
                    <Field as="select" id="category"  multiple={true}   name="category"  className="form-select" aria-label="Select Category">

                     
                        {categories ? categories.map((category)=>{
                        //   console.log(book.category.filter((c)=> !categories.some(cat => cat==c)).map((x)=>x._id))
                        return (
                            <option  key={category._id} value={category._id}>{category.title}</option>
                            
                        )

                        }):null}
                   

            

                    </Field>
                    {errors.category && touched.category ? (
                            <div className="form-text text-danger">{errors.category}</div>
                        ) : null }
            </div>
            <div className='col-md-6 mt-2'>
                    <label htmlFor="writer" className="form-label">Select Writer : </label>
                    {/* <select   id="writer" name="writer" className="form-select" aria-label="Select Writer"> */}
                    <Field as="select" id="writer" name="writer"  multiple={true}  className="form-select" aria-label="Select Writer">

                        {writers ? writers.map((writer)=>{
                        return (
                            <option key={writer._id} value={writer._id}>{writer.name}</option>
                            
                        )

                        }):null}

                    </Field>    
                    {errors.writer && touched.writer ? (
                            <div className="form-text text-danger">{errors.writer}</div>
                        ) : null }  
            </div>
            <div className='col-md-12 mt-4'>
                <input type="submit" className='btn btn-success form-control'   value="Add Book" />
            </div>   
            </>         
            :console.log("no data received")}

        </Form>
    )
    
    }}
        </Formik>
    </div>
  )


}

export default updateBook