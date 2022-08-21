import { Formik, Field ,Form } from 'formik';
import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { booksApi } from '../../../../store/services';

const UpdatePromotion = () => {

    // eslint-disable-next-line
    const [updateCurrentPromotion,response]= booksApi.useUpdateCurrentPromotionMutation();
    // eslint-disable-next-line
    const [pormotion,setPormotion] = useState();
    let params = useParams()
    // eslint-disable-next-line
    const {data,isLoading,error} = booksApi.useGetOnePromotionQuery(params.id)


    const PromotionsValidation = Yup.object().shape({
       title:Yup.string("Must Be A string").required("is Required"),
       description:Yup.string("Must Be A string"),
       discount_rate:Yup.number("Must be a number").required("is Required"),
       start_date:Yup.date("Must Be A Date").required("is Required"),
       end_date:Yup.date("Must Be A Date").required("is Required"),
      })


      let navigate= useNavigate()


  return (
    <div className="page-body-wrapper p-5" style={{flex:"auto"}}>
    <div className="content-wrapper pt-5">
        <Formik 
            initialValues={{
                title:"",
                description:"",
                discount_rate:"",
                start_date:"",
                end_date:"",

            }}
            validationSchema={PromotionsValidation}

            onSubmit={values =>{
                const promotionData = {
                    title:values.title,
                    description:values.description,
                    discountRate:values.discount_rate,
                    startDate:values.start_date,
                    endDate:values.end_date,
                }
                updateCurrentPromotion({promtionData:promotionData,promotionId:params.id}).then((response)=>{
                    if(!response.error){
                        navigate('/admin/promotions')
                    }else{
                        console.log(response.error)
                    }
                }).catch((error)=>{
                    console.log(error)
                })

            }}
                
            >

            {({errors,touched,setFieldValue})=>{
                useEffect(() => {
                    if(data){
                        setPormotion(data)
                        Object.keys(data).forEach(key=>{
                            setFieldValue(key,data[key])


                            if(key === "start_date"){
                                if(data.start_date !== undefined && data.start_date != null){
                                   const getDate = data.start_date.split("T")[0]
                                setFieldValue("start_date",getDate)
                                }
                            }
                            if(key === "end_date"){
                                if(data.end_date !== undefined && data.end_date != null){
                                   const getDate = data.end_date.split("T")[0]
                                setFieldValue("end_date",getDate)
                                }
                            }
                        })

                    }
                }, [data]);
                return (

                
                <Form className="row text-white" >
                    <div className="col-md-6 mt-2">
                        <label htmlFor="booktitle" className="form-label">Pormotion Title : </label>
                        <Field name="title" id="title"  placeholder="Pormotion title"  className={"form-control " } />
                        {errors.title && touched.title ? (
                            <div className="form-text text-danger">{errors.title}</div>
                        ) : null }
                    </div>
                    <div className="col-md-6 mt-2">
                        <label htmlFor="booktitle" className="form-label">Pormotion discount rate : </label>
                        <Field name="discount_rate" id="discount_rate"  placeholder="Pormotion Discount" type="number" className={"form-control " } />
                        {errors.discount_rate && touched.discount_rate ? (
                            <div className="form-text text-danger">{errors.discount_rate}</div>
                        ) : null }
                    </div>
                    <div className='col-md-6 mt-2'>
                        <label htmlFor="start_date" className="form-label">Pormotion Start date : </label>
                        <Field className='form-control'  id="start_date" name="start_date"   placeholder="Start date"   type="date" />
                        {errors.start_date && touched.start_date ? (
                            <div className="form-text text-danger">{errors.start_date}</div>
                        ) : null }
                    </div>
                    <div className='col-md-6 mt-2'>
                        <label htmlFor="end_date" className="form-label">Pormotion End date : </label>
                        <Field className='form-control'  id="end_date" name="end_date"   placeholder="End date"   type="date" />
                        {errors.end_date && touched.end_date ? (
                            <div className="form-text text-danger">{errors.end_date}</div>
                        ) : null }
                    </div>
                    <div className='col-md-12 mt-2'>
                        <label htmlFor="description" className="form-label ">Pormotion Description : </label>
                        {/* <textarea rows="3" className="form-control"   name="bookdescription"  id="bookdescription"   ></textarea> */}
                        <Field name="description"  id="description" as="textarea" className="form-control"  />
                        {errors.description && touched.description ? (
                            <div className="form-text text-danger">{errors.description}</div>
                        ) : null }

                    </div>
                    <div className='col-md-12 mt-4'>
                        <input type="submit" className='btn btn-success form-control'   value="Update Pormotion" />
                    </div>
                </Form>
            )}
            }

        </Formik>
    </div>
    </div>

  )
}

export default UpdatePromotion