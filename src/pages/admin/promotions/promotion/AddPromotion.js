import { Formik, Field, Form } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { booksApi } from '../../../../store/services';

const AddPromotion = () => {

    // eslint-disable-next-line
    const [addNewPromotion, response] = booksApi.useAddNewPromotionMutation();

    const PromotionsValidation = Yup.object().shape({
        title: Yup.string("Must Be A string").required("is Required"),
        description: Yup.string("Must Be A string"),
        discount_rate: Yup.number("Must be a number").required("is Required"),
        start_date: Yup.date("Must Be A Date").required("is Required"),
        end_date: Yup.date("Must Be A Date").required("is Required"),
    })

    let navigate = useNavigate()

    return (
        <div className="container mt-5 mb-5">
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    discount_rate: "",
                    start_date: "",
                    end_date: "",

                }}
                validationSchema={PromotionsValidation}

                onSubmit={values => {
                    const promotionData = {
                        title: values.title,
                        description: values.description,
                        discountRate: values.discount_rate,
                        startDate: values.start_date,
                        endDate: values.end_date,
                    }

                    addNewPromotion(promotionData).then((response) => {
                        if (!response.error) {
                            navigate('/admin/promotions')
                        }
                    }).catch((error) => { console.log(error) })
                }}

            >

                {({ errors, touched }) => (

                    <Form className="row" >
                        <div className="col-md-6 mt-2">
                            <label htmlFor="booktitle" className="form-label">Pormotion Title : </label>
                            <Field name="title" id="title" placeholder="Pormotion title" className={"form-control "} />
                            {errors.title && touched.title ? (
                                <div className="form-text text-danger">{errors.title}</div>
                            ) : null}
                        </div>
                        <div className="col-md-6 mt-2">
                            <label htmlFor="booktitle" className="form-label">Pormotion discount rate : </label>
                            <Field name="discount_rate" id="discount_rate" placeholder="Pormotion Discount" type="number" className={"form-control "} />
                            {errors.discount_rate && touched.discount_rate ? (
                                <div className="form-text text-danger">{errors.discount_rate}</div>
                            ) : null}
                        </div>
                        <div className='col-md-6 mt-2'>
                            <label htmlFor="start_date" className="form-label">Pormotion Start date : </label>
                            <Field className='form-control' id="start_date" name="start_date" placeholder="Start date" type="date" />
                            {errors.start_date && touched.start_date ? (
                                <div className="form-text text-danger">{errors.start_date}</div>
                            ) : null}
                        </div>
                        <div className='col-md-6 mt-2'>
                            <label htmlFor="end_date" className="form-label">Pormotion End date : </label>
                            <Field className='form-control' id="end_date" name="end_date" placeholder="End date" type="date" />
                            {errors.end_date && touched.end_date ? (
                                <div className="form-text text-danger">{errors.end_date}</div>
                            ) : null}
                        </div>
                        <div className='col-md-12 mt-2'>
                            <label htmlFor="description" className="form-label ">Pormotion Description : </label>
                            <Field name="description" id="description" as="textarea" className="form-control" />
                            {errors.description && touched.description ? (
                                <div className="form-text text-danger">{errors.description}</div>
                            ) : null}

                        </div>
                        <div className='col-md-12 mt-4'>
                            <input type="submit" className='btn btn-success form-control' value="Add Pormotion" />
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default AddPromotion