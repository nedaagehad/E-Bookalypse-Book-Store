import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { booksApi } from '../../../../store/services';

const AddCategory = () => {
    const [category, setCategory] = useState({
      title:'',
      icon: ''
    });
    const [addNewCategory,response] = booksApi.useAddNewCategoryMutation();
    const [CatImg,setCatImg] = useState()

    let onInputChange = (e)=>{
        // console.log(e.target.value)
        setCategory({
          ...category,
          [e.target.id] : e.target.value
        })
      }

      
      let onFileChange = (e)=>{
        // console.log(e.target.files[0])
        setCatImg(e.target.files[0])
        
      }
      
      // let addCategory = (e)=>{
      //    e.preventDefault();
      //    const data = new FormData();
      //    data.append('catimage',CatImg)
      //    data.append("cattitle",category.title)
      //     axios.post("http://localhost:5000/api/categories",data).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
 
 
      // }

    

      const categoryValidation = Yup.object().shape({
        title:Yup.string("Must Be a string").required("is Required")
      })

  return (
    
    <div className="container">
      <Formik  
      initialValues={{
        title:"",
        icon:"",
      }}
      validationSchema={categoryValidation}
      onSubmit={values => {
              
        const data = new FormData();
        data.append('catimage',CatImg)
        data.append("catTitle",values.title)
        addNewCategory(data).then(()=>{}).catch((err)=>{console.log(err)})
        //  axios.post("https://e-bookalypse.herokuapp.com/api/admin/categorie",data).then((response)=>{console.log(response)}).catch((error)=>{console.log(error)})
      }}
      >
      {({errors,touched})=>(
        <Form className='row'>
             <div className="col-md-12 mt-2">
                <label htmlFor="title" className="form-label">Category Title : </label>
                <Field className="form-control"   name="title" id="title" placeholder="Category Title" />
              {errors.title && touched.title ? (
                    <div className="form-text text-danger">{errors.title}</div>
                ) : null }
                {/* <input type="text" className='form-control'    name="title" id="title" placeholder="Category Title"  onChange={(e)=>onInputChange(e)}  /> */}
            </div>
            <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
              <label htmlFor="catimage" className="form-label ">Category Image : </label>
              <Field className='form-control'  id="catimage" name="catimage" type="file" onChange={(e)=>onFileChange(e)} />

              {/* <input type="file" className='form-control' id="catimage" name="catimage" onChange={(e) => onFileChange(e)} /> */}
            </div>
            <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
              {CatImg? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(CatImg)}  /> : " There Is No Image Yet"}
            </div>
            <div className="col-md-12 mt-2">
                <input type="submit" className='btn btn-success' value="Add Category"   />
            </div>
        </Form>
      )}
      </Formik>
         
    </div>
  )
}

export default AddCategory