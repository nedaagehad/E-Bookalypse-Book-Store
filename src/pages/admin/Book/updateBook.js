import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom'
import { ref, getDownloadURL } from "firebase/storage";
import storage from '../../../Firebase/firebaseImage';

import { booksApi } from '../../../store/services';
import { ReactMultiSearchSelect } from 'react-multi-search-select';

const updateBook = () => {

    // eslint-disable-next-line
    const [updateNewBook, response] = booksApi.useUpdateNewBookMutation()
    const [book, setBook] = useState();
    const [categories, setCategories] = useState()
    const [writers, setWriters] = useState()
    const [selectedCategories, setSelectedCategories] = useState()
    const [selectedWriters, setSelectedWriters] = useState()
    const [selectedPromotions, setSelectPromotions] = useState()

    const [promotions, setPromotions] = useState()
    const [BookImage, setBookImage] = useState();
    const [BookPdf, setBookPdf] = useState();
    const [currentImage, setcurrentImage] = useState();
    let params = useParams()
    let navigate = useNavigate()
    // eslint-disable-next-line
    const { data, isLoading, error } = booksApi.useGetBookByIdQuery(params.id)
    const categoryData = booksApi.useGetAllCategoriesQuery()
    const writersData = booksApi.useGetTotalWritersQuery()
    const promotionsData = booksApi.useGetAllPromotionsQuery();



    const BookSchemaValidation = Yup.object().shape({
        booktitle: Yup.string().required("Title is Required"),
        bookprice: Yup.number().required("Price is Required"),
        bookdescription: Yup.string().required("Description is Required"),
    })


    let onFileChange = (e) => {
        setBookImage(e.target.files[0])

    }
    let onPdfChange = (e) => {
        setBookPdf(e.target.files[0])
    }
    const onSelectCategoryChange = (e) => {
        setSelectedCategories(e)
    }
    const onSelectWritersChange = (e) => {
        setSelectedWriters(e)
    }
    const onSelectPromotions = (e) => {
        setSelectPromotions(e)
    }

    return (
        <div className="page-body-wrapper pt-5">
            <div className="content-wrapper pt-5 text-white">
                <Formik

                    initialValues={{

                        booktitle: '',
                        bookprice: " ",
                        bookdescription: "",
                        bookdate: "",
                        bookpublisher: "",
                        booklang: "",
                        bookpages: "",
                        category: "",
                        writer: "",
                        promotion: "",
                        oldImg: "",
                        oldSrc: ""

                    }}
                    validationSchema={BookSchemaValidation}

                    onSubmit={values => {
                        const data = new FormData()
                        data.append('bookimage', BookImage)
                        data.append('booksrc', BookPdf)
                        data.append("title", values.booktitle)
                        data.append("price", values.bookprice)
                        data.append("description", values.bookdescription)
                        if (values.bookdate) {
                            data.append("date", values.bookdate)
                        }
                        data.append("publisher", values.bookpublisher)
                        if (values.booklang) {
                            data.append("lang", values.booklang)
                        }
                        if (values.bookpages) {

                            data.append("pages", values.bookpages)
                        }

                        data.append("category", JSON.stringify(selectedCategories))
                        data.append("writer", JSON.stringify(selectedWriters))
                        if (selectedPromotions.length > 0) {
                            data.append("promotion", selectedPromotions)
                        } else {
                            data.append("promotion", 'remove')
                        }

                        if (book) {

                            data.append("oldImg", book.poster)
                            data.append("oldSrc", book.source)
                        }

                        updateNewBook({ bookNewData: data, bookid: params.id }).then((res) => {
                            if (res.data) {
                                navigate('/admin/books')
                            }
                        }


                        ).catch((err) => { console.log(err) })
                    }}

                >

                    {({ errors, touched, setFieldValue }) => {
                        useEffect(() => {


                            if (data) {
                                setBook(data)
                                let categories = []
                                let writers = []
                                data[0].category.forEach((c) => {
                                    categories.push(c._id)
                                    setSelectedCategories(categories)
                                })
                                if (data[0].promotion[0]) {

                                    setSelectPromotions(data[0].promotion[0]._id)
                                }
                                data[0].writer.forEach((c) => {
                                    writers.push(c._id)
                                    setSelectedWriters(writers)
                                })
                                if (data[0].source || data[0].poster) {
                                    const starsRef = ref(storage, 'uploads/books/poster/' + data[0].poster);

                                    getDownloadURL(starsRef)
                                        .then((url) => {
                                            setcurrentImage(url)
                                        })

                                }
                                Object.keys(data[0]).forEach(key => {
                                    setFieldValue("book" + key, data[0][key])
                                    if (key === "date_release") {
                                        if (data[0].date_release !== undefined && data[0].date_release !== null) {
                                            const getDate = data[0].date_release.split("T")[0]
                                            setFieldValue("bookdate", getDate)
                                        }
                                    }
                                    if (key === 'n_pages') {
                                        setFieldValue('bookpages', data[0][key])
                                    }
                                })
                            }


                            if (categoryData) {
                                // eslint-disable-next-line
                                const { data, isLoading, error } = categoryData
                                if (data) {
                                    setCategories(data.categories)
                                }
                            }

                            if (writersData) {
                                // eslint-disable-next-line
                                const { data, isLoading, error } = writersData
                                if (data) {
                                    setWriters(data)
                                }
                            }

                            if (promotionsData) {
                                // eslint-disable-next-line
                                const { data, isLoading, error } = promotionsData
                                if (data) {
                                    setPromotions(data)
                                }
                            }
                        }, [data, categoryData, writersData, promotionsData]);

                        return (
                            <Form className="row" >
                                {book ?

                                    <>

                                        <div className="col-md-6 mt-2">
                                            <label htmlFor="booktitle" className="form-label">Book Title : </label>
                                            <Field name="booktitle" id="booktitle" placeholder="Book Title" className={"form-control "} />
                                            {errors.booktitle && touched.booktitle ? (
                                                <div className="form-text text-danger">{errors.booktitle}</div>
                                            ) : null}
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="bookprice" className="form-label">Book Price : </label>
                                            <Field name="bookprice" id="bookprice" placeholder="Book Price" className={"form-control "} />
                                            {errors.bookprice && touched.bookprice ? (
                                                <div className="form-text text-danger">{errors.bookprice}</div>
                                            ) : null}

                                        </div>
                                        <div className='col-md-12 mt-2'>
                                            <label htmlFor="bookdescription" className="form-label ">Book Description : </label>
                                            <Field name="bookdescription" id="bookdescription" as="textarea" className="form-control" />
                                            {errors.bookdescription && touched.bookdescription ? (
                                                <div className="form-text text-danger">{errors.bookdescription}</div>
                                            ) : null}

                                        </div>
                                        <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                                            <label htmlFor="bookimage" className="form-label ">Book Image : </label>
                                            <Field id="bookimage" name="bookimage" className={"form-control "} type="file" onChange={(e) => onFileChange(e)} />

                                        </div>
                                        <div className='col-md-6 d-flex justify-content-center align-items-center mt-2'>
                                            {
                                                BookImage ?
                                                    <img className="border-2" alt='bookimage' width="50%" height="100%" src={URL.createObjectURL(BookImage)} />
                                                    :

                                                    book[0].poster ?
                                                        <img src={currentImage} alt='bookposter' width="50%" />
                                                        :

                                                        null
                                            }
                                        </div>
                                        <div className='col-md-6 d-flex flex-column justify-content-center  mt-2'>
                                            <label htmlFor="booksrc" className="form-label ">Book PDF : </label>
                                            {/* <input type="file" className='form-control' id="booksrc" name="booksrc"  /> */}
                                            <Field id="booksrc" name="booksrc" className={"form-control "} type="file" onChange={(e) => onPdfChange(e)} />
                                            {errors ? (<div className="form-text text-danger">{errors.pdfErr}</div>
                                            ) : null}
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="bookdate" className="form-label">Book Release Date : </label>
                                            <Field className='form-control' id="bookdate" name="bookdate" placeholder="Release Date" type="date" />

                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="bookpublisher" className="form-label">Book Publisher : </label>
                                            <Field className='form-control' id="bookpublisher" name="bookpublisher" placeholder="Book Publisher" />
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="booklang" className="form-label">Book Language : </label>
                                            <Field as="select" id="booklang" name="booklang" className='form-control' placeholder="Book Language" aria-label="Select Writer" >
                                                <option value="none" >None</option>
                                                <option value="english" >english</option>
                                                <option value="arabic" >عربي</option>
                                            </Field>
                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="bookpages" className="form-label">Book Pages Number : </label>
                                            <Field className='form-control' id="bookpages" name="bookpages" placeholder="Book Pages Number" type="number" />

                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="category" className="form-label">Select Category : </label>

                                            {
                                                selectedCategories ?
                                                    <ReactMultiSearchSelect
                                                        className="text-dark"
                                                        id="category"
                                                        name="category"
                                                        defaultValues={selectedCategories}
                                                        options={categories ? categories : []}
                                                        optionsObject={{ key: "_id", value: "title" }}
                                                        onChange={(e) => onSelectCategoryChange(e)}
                                                    />

                                                    : null

                                            }

                                            {errors ? (<div className="form-text text-danger">{errors.category}</div>
                                            ) : null}

                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="writer" className="form-label">Select Writer : </label>

                                            <ReactMultiSearchSelect
                                                className="text-dark"
                                                id="writer"
                                                name="writer"
                                                defaultValues={selectedWriters}

                                                options={writers ? writers : []}
                                                optionsObject={{ key: "_id", value: "name" }}
                                                onChange={(e) => onSelectWritersChange(e)}
                                            />
                                            {errors ? (<div className="form-text text-danger">{errors.writer}</div>
                                            ) : null}

                                        </div>
                                        <div className='col-md-6 mt-2'>
                                            <label htmlFor="promotion" className="form-label">Select promotion : </label>

                                            {

                                                <ReactMultiSearchSelect
                                                    className="text-dark"
                                                    id="promotion"
                                                    name="promotion"
                                                    defaultValues={selectedPromotions ? [selectedPromotions] : []}
                                                    options={promotions ? promotions : []}
                                                    optionsObject={{ key: "_id", value: "title" }}
                                                    onChange={(e) => onSelectPromotions(e)}
                                                    selectionLimit={1}
                                                />

                                            }
                                            {errors ? (<div className="form-text text-danger">{errors.writer}</div>
                                            ) : null}
                                        </div>
                                        <div className='col-md-12 mt-4'>
                                            <input type="submit" className='btn btn-success form-control' value="Updadte Book" />
                                        </div>
                                    </>
                                    : console.log("no data received")}

                            </Form>
                        )

                    }}
                </Formik>
            </div>
        </div>
    )
}

export default updateBook