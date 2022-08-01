import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { booksApi } from '../../../../store/services';

const UpdateWriter = () => {
    const [writer,setWriter] = useState()

    let params = useParams()

    const [writerImage, setWriterImage] = useState()

    const [updateWriter,response] = booksApi.useUpdateWriterMutation();
    const {data,isLoading,error}= booksApi.useGetWriterByIdQuery(params.id)
    
    let onFileChange = (e)=>{
        // console.log(e.target.files[0])
        setWriterImage(e.target.files[0])
      
      }
    

    const writerSchemaValidation = Yup.object().shape({
      writername:Yup.string("Must Be a string").required("name is required"),
      writergender:Yup.string("Must Be a string").required("gender is required"),
      writerbio:Yup.string("Must Be a string"),
      writerdb:Yup.date("must be date"),
      writerpb:Yup.string("Must Be a string"),
    })

  return (
    
    <div className="container mt-5 mb-5">

          <Formik 
          initialValues={{
            writername:"",
            writergender:"",
            writerbio:"",
            writerdate:"",
            writerplace:"",
          }}

          validationSchema={writerSchemaValidation}
          onSubmit={values => {
              
            const data = new FormData();
            data.append('writerimage',writerImage)
            // data.append('bookData',BookData)
            data.append("name",values.writername)
            data.append("date_birth",values.writerdate)
            data.append("place_birth",values.writerplace)
            data.append("bio",values.writerbio)
            data.append("gender",values.writergender)
            if(writer){

              data.append("oldIcon",writer.image)
            }

            // console.log(values)
            // axios.put("https://e-bookalypse.herokuapp.com/api/admin/writer/"+params.id,data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
            // axios.put(`http://localhost:8080/api/admin/books/${params.id}`,data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})
            updateWriter({writerNewData:data,writerId:params.id})
          }}
          
          >
          {({errors,touched,setFieldValue})=>{
                useEffect(() => {
                  // console.log(params.id)
                  if(data){
                    // console.log(data)
                    setWriter(data)
                    Object.keys(data).forEach(key=>{
                      if(key !== "image"){
                        setFieldValue("writer"+key,data[key])
                      }
                      if(key == "date_birth"){
                        if(data.date_birth != undefined && data.date_birth != null){
                          const getDate = data.date_birth.split("T")[0]

                          setFieldValue("writerdate",getDate)

                        }
                      }
                      if(key =='place_birth'){
                        setFieldValue("writerplace",data.place_birth)
                      }
                    
                    })
                  }
                  // axios.get(`https://e-bookalypse.herokuapp.com/api/writer/${params.id}`)
                  // .then((res)=>{setWriter(res.data)
                  
                  //   Object.keys(res.data).forEach(key=>{
                  //     if(key !== "image"){
                  //       setFieldValue("writer"+key,res.data[key])
                  //     }
                  //     if(key == "date_birth"){
                  //       if(res.data.date_birth != undefined && res.data.date_birth != null){
                  //         const getDate = res.data.date_birth.split("T")[0]

                  //         setFieldValue("writerdate",getDate)

                  //       }
                  //     }
                  //     if(key =='place_birth'){
                  //       setFieldValue("writerplace",res.data.place_birth)
                  //     }
                    
                  //   })
                  
                  
                  // })
                  
              }, [data]);

              return(
                <Form className="row" >
                      
                  <div className="col-md-6 mt-2">
                      <label htmlFor="writername" className="form-label">Writer Name : </label>
                      <Field  name="writername" className="form-control"  id="writername" placeholder="Writer Name" />
                      {errors.writername && touched.writername ? (
                            <div className="form-text text-danger">{errors.writername}</div>
                        ) : null }
                    </div>
                    <div className='col-md-6 mt-2'>
                      <label htmlFor="writergender" className="form-label">Writer Gender : </label>
                        <div className='genders d-flex justify-content-evenly'>
                        <div class="form-check">
                        {/* <input class="form-check-input" type="radio" value="male"  name="writergender" id="writergender" onChange={(e)=>onInputChange(e)} /> */}

                        <Field type="radio"  class="form-check-input" name="writergender" id="writergender" value="Male" />
                        <label class="form-check-label" htmlFor="writergender">
                          Male
                        </label>
                      </div>
                      <div class="form-check">
                        {/* <input class="form-check-input" type="radio" value="female" name="writergender" id="writergender" onChange={(e)=>onInputChange(e)} /> */}

                        <Field type="radio"  class="form-check-input"  value="Female" name="writergender" id="writergender" />
                        <label class="form-check-label" htmlFor="writergender">
                          Female
                        </label>
                      </div>
                      </div>

                    </div>
                    <div className='col-md-12 mt-2'>
                      <label htmlFor="writerbio" className="form-label ">Writer Bio : </label>
                      <Field name="writerbio"  id="writerbio" as="textarea" className="form-control"  />
                        {errors.writerbio && touched.writerbio ? (
                            <div className="form-text text-danger">{errors.writerbio}</div>
                        ) : null }
                    </div>
                    <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                      <label htmlFor="writerimg" className="form-label ">Writer Image : </label>
                      {/* <input type="file" className='form-control' id="writerimage" name="writerimage" onChange={(e) => onFileChange(e)} /> */}
                      <Field className='form-control' id="writerimage" name="writerimage" type="file" onChange={(e)=>onFileChange(e)} />

                    </div>
                    <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
                      {writerImage? <img  className="border-2" width="50%" height="100%" src={URL.createObjectURL(writerImage)}  /> : " There Is No Image Yet"}
                    </div>
                    <div className='col-md-6 mt-2'>
                      <label htmlFor="writerdate" className="form-label">Date of Birth : </label>
                      <Field  className='form-control'  id="writerdate" name="writerdate"  placeholder="Release Date"   type="date" />
                      {errors.writerdate && touched.writerdate ? (
                            <div className="form-text text-danger">{errors.writerdate}</div>
                        ) : null }
                    </div>
                    <div className='col-md-6 mt-2'>
                      <label htmlFor="writerplace" className="form-label">Place of Birth : </label>
                      {/* <input type="text" className='form-control'  id="writerpb" name="writerplace"onChange={(e)=>onInputChange(e)}  placeholder="Book Publisher" /> */}
                      <Field  id="writerplace" name="writerplace" placeholder="Book Publisher" className='form-control' />
                      {errors.writerplace && touched.writerplace ? (
                            <div className="form-text text-danger">{errors.writerplace}</div>
                        ) : null }

                    </div>

                    <div className='col-md-12 mt-4'>
                      <input type="submit" className='btn btn-success form-control'  value="Update Writer" />
                    </div>
                </Form>
            
              )
          }
        }


 
          </Formik>
        
        
 
    
  </div>  
  )
}

export default UpdateWriter