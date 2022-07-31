import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { addNewBooks } from '../../../store/reducers/booksReducer.js/BooksReducer';

const addBook = () => {

      const [categories,setCategories] =useState()
      const [writers,setWriters] =useState()
      const [BookImage, setBookImage] = useState();
      const [BookPdf, setBookPdf] = useState();
      let dispatch = useDispatch()
      useEffect(() => {
        axios.get('https://e-bookalypse.herokuapp.com/api/categories')
        .then((res)=>setCategories(res.data.categories))
        .catch((err)=>console.log(err))
        axios.get('https://e-bookalypse.herokuapp.com/api/writers').then((res)=>setWriters(res.data.data)).catch((err)=>console.log(err))
  
      }, []);

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
            console.log(typeof values.category)
            // axios.post("http://localhost:8080/api/admin/book",data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
            dispatch(addNewBooks(data))
         }}
            
        >

    {({errors,touched})=>(

        <Form className="row" >
            <div className="col-md-6 mt-2">
                <label htmlFor="booktitle" className="form-label">Book Title : </label>
                {/* <input type="text" className='form-control'    name="booktitle" id="booktitle" placeholder="Book Title"     /> */}
                <Field name="booktitle" id="booktitle"  placeholder="Book Title"  className={"form-control " } />
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
                {BookImage? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(BookImage)}  /> : " There Is No Image Yet"}
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
                    <Field as="select" id="category"  multiple={true}  name="category"  className="form-select" aria-label="Select Category">

                        {categories ? categories.map((category)=>{
                        return (
                            <option key={category._id} value={category._id}>{category.title}</option>
                            
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
                    <Field as="select" id="writer" name="writer" multiple={true}  className="form-select" aria-label="Select Writer">

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
        </Form>
    )}
        </Formik>
  </div>  
  )
}

export default addBook