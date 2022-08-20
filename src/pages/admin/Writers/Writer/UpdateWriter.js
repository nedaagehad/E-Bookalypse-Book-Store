import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import { booksApi } from '../../../../store/services';

const UpdateWriter = () => {

  // eslint-disable-next-line
  const [writer, setWriter] = useState()

  let params = useParams()
  let navigate = useNavigate()

  // eslint-disable-next-line
  const [updateWriter, response] = booksApi.useUpdateWriterMutation();
  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetWriterByIdQuery(params.id)


  const writerSchemaValidation = Yup.object().shape({
    writername: Yup.string("Must Be a string").required("name is required"),
    writergender: Yup.string("Must Be a string").required("gender is required"),
  })

  return (

    <div className="container mt-5 mb-5">

      <Formik
        initialValues={{
          writername: "",
          writergender: "",
        }}

        validationSchema={writerSchemaValidation}
        onSubmit={values => {

          const data = {
            name: values.writername,
            gender: values.writergender
          }
          updateWriter({ writerNewData: data, writerId: params.id }).then((res) => {
            if (res.data) {
              navigate('/admin/writers')

            }

          }).catch((err) => { console.log(err) })
        }}

      >
        {({ errors, touched, setFieldValue }) => {
          useEffect(() => {
            if (data) {
              setWriter(data)
              Object.keys(data).forEach(key => {
                setFieldValue("writer" + key, data[key])
              })
            }


          }, [data]);

          return (
            <Form className="row" >

              <div className="col-md-6 mt-2">
                <label htmlFor="writername" className="form-label">Writer Name : </label>
                <Field name="writername" className="form-control" id="writername" placeholder="Writer Name" />
                {errors.writername && touched.writername ? (
                  <div className="form-text text-danger">{errors.writername}</div>
                ) : null}
              </div>
              <div className='col-md-6 mt-2'>
                <label htmlFor="writergender" className="form-label">Writer Gender : </label>
                <div className='genders d-flex justify-content-evenly'>
                  <div class="form-check">

                    <Field type="radio" class="form-check-input" name="writergender" id="writergender" value="male" />
                    <label class="form-check-label" htmlFor="writergender">
                      Male
                    </label>
                  </div>
                  <div class="form-check">

                    <Field type="radio" class="form-check-input" value="female" name="writergender" id="writergender" />
                    <label class="form-check-label" htmlFor="writergender">
                      Female
                    </label>
                  </div>
                </div>

              </div>

              <div className='col-md-12 mt-4'>
                <input type="submit" className='btn btn-success form-control' value="Update Writer" />
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