import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { booksApi } from '../../../../store/services';


const UpdateCategory = () => {
  let params = useParams()
  const [category, setCategory] = useState({
    title:'',
    icon:'',
    oldIcon:''
  });
  const [CatImg,setCatImg] = useState();
  const [updateCategory,response] = booksApi.useUpdateCategoryMutation() 
  const {data,isLoading,error} = booksApi.useGetCategoryByIdQuery(params.id)
  let navigate = useNavigate()
     let onFileChange = (e)=>{
      setCatImg(e.target.files[0])
      
    }
    
   const categoryValidation = Yup.object().shape({
    title:Yup.string("Must Be a string").required("is Required")
  })

   return (
    
    <div className="page-body-wrapper pt-5">
        <div className="content-wrapper pt-5 text-white">
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
            if(category){

              data.append("oldIcon",category.icon)
            }
            updateCategory({categoryNewData : data ,categoryId: params.id}).then((res)=>{
              if(res.data){
                navigate('/admin/categories')
              }else{
                console.log(res)
              }
            }).catch((err)=>{console.log(err)})

          }}
          >
            
          {({errors,touched,setFieldValue})=>
          {
            
            useEffect(() => {
              if(data){
                // console.log(data)
                setCategory(data)
                setFieldValue("title",data.title)

              }

            }, [data]);
            
            return(
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
                      <input type="submit" className='btn btn-success' value="Update Category"   />
                  </div>
              </Form>
            )
            }
          }
          </Formik>
            
        </div>
    </div>

  )
}

export default UpdateCategory