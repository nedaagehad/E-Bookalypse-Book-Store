import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { booksApi } from '../../../../store/services';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {

  let navigate = useNavigate()
  // eslint-disable-next-line
  const [addNewCategory, response] = booksApi.useAddNewCategoryMutation();
  const [CatImg, setCatImg] = useState()
  let onFileChange = (e) => {
    setCatImg(e.target.files[0])

  }
  const categoryValidation = Yup.object().shape({
    title: Yup.string("Must Be a string").required("is Required")
  })

  return (

    <div className="page-body-wrapper p-5" style={{flex:"auto"}}>
    <div className="content-wrapper pt-5 text-white">
        <Formik
          initialValues={{
            title: "",
            icon: "",
          }}
          validationSchema={categoryValidation}
          onSubmit={values => {

            const data = new FormData();
            data.append('catimage', CatImg)
            data.append("catTitle", values.title)
            addNewCategory(data).then((res) => {
              if (res.data) {
                navigate('/admin/categories')
              }
            }).catch((err) => { console.log(err) })
          }}
        >
          {({ errors, touched }) => (
            <Form className='row text-white'>
              <div className="col-md-12 mt-2">
                <label htmlFor="title" className="form-label">Category Title : </label>
                <Field className="form-control" name="title" id="title" placeholder="Category Title" />
                {errors.title && touched.title ? (
                  <div className="form-text text-danger">{errors.title}</div>
                ) : null}
              </div>
              <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                <label htmlFor="catimage" className="form-label ">Category Image : </label>
                <Field className='form-control' id="catimage" name="catimage" type="file" onChange={(e) => onFileChange(e)} />

              </div>
              <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
                {CatImg ? <img className="border-2" width="50%" height="100%" alt="catimage" src={URL.createObjectURL(CatImg)} /> : " There Is No Image Yet"}
              </div>
              <div className="col-md-12 mt-2">
                <input type="submit" className='btn btn-success' value="Add Category" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default AddCategory