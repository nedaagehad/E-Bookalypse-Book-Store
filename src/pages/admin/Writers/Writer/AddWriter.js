import React,{useState,useEffect} from 'react'
import { Formik, Field ,Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const AddWriter = () => {


  
  
      const [writerImage, setWriterImage] = useState();

 
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

const onInputChange = ()=>{

}
  
const addWriter = ()=>{

}

  return (
    <div className="container mt-5 mb-5">
      <Formik
        initialValues={{
          writername:"",
          writergender:"",
          writerbio:"",
          writerdb:"",
          writerpb:"",
        }}
        validationSchema={writerSchemaValidation}
        onSubmit={values => {
              
          const data = new FormData();
          data.append('writerimage',writerImage)
          // data.append('bookData',BookData)
          data.append("name",values.writername)
          data.append("date_birth",values.writerdb)
          data.append("place_birth",values.writerpb)
          data.append("bio",values.writerbio)
          data.append("gender",values.writergender)

          axios.post("https://e-bookalypse.herokuapp.com/api/admin/writer",data).then((r)=>{console.log(r) }).catch((err)=>{console.log(err)})

        }}

      >
      {({errors,touched})=>(
        <Form className='row'>
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
              <Field  className='form-control'  id="writerdb" name="writerdate"  placeholder="Release Date"   type="date" />
              {errors.writerdb && touched.writerdb ? (
                    <div className="form-text text-danger">{errors.writerdb}</div>
                ) : null }
            </div>
            <div className='col-md-6 mt-2'>
              <label htmlFor="writerplace" className="form-label">Place of Birth : </label>
              {/* <input type="text" className='form-control'  id="writerpb" name="writerplace"onChange={(e)=>onInputChange(e)}  placeholder="Book Publisher" /> */}
              <Field  id="writerpb" name="writerplace" placeholder="Book Publisher" className='form-control' />
              {errors.writerpb && touched.writerpb ? (
                    <div className="form-text text-danger">{errors.writerpb}</div>
                ) : null }

            </div>

            <div className='col-md-12 mt-4'>
              <input type="submit" className='btn btn-success form-control'  value="Add Writer" />
            </div>
        </Form>
      )}

      </Formik>

  </div>  
  )
              }

export default AddWriter