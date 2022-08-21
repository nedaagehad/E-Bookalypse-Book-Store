import { getDownloadURL, ref } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import storage from '../../Firebase/firebaseImage';
import AddToCardButton from '../AddToCardButton/AddToCardButton';

//CSS Module
import styles from '../HomeSlider/FlashSaleSlider.module.css'

function FlashSaleCard(props) {

    const [image, setImage] = useState();

    useEffect(() => {
        const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
        getDownloadURL(starsRef).then((url) => {
            setImage(url)
        }).catch((error) => { console.log(error) });
    }, []);

    return (
        <div className={`card rounded-3 ${styles.flashCard}`}>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-4 col-12">
                        <Link to={'/books/BookDetails/' + props.book._id} className="w-100">
                            <img src={image} className={`rounded-3 border shadow ${styles.flashImg}`} alt={props.book.title} />
                        </Link>
                    </div>

                    <div className="col-lg-6 offset-lg-1 col-12">
                        <div className="cardBody">
                            <div className='mb-1 row mt-3'>
                                <small className={styles.text_burble + " col-lg-7 col-5 mb-1 card-text text-center"}>{props.book.category[0].title}</small>
                                <div className='col-5 mb-4 text-center align-self-start border rounded'>
                                    <i className="bi bi-star-fill text-warning me-1"></i>
                                    <small className="text-muted">{props.book.rate.toFixed(2)}</small>
                                </div>
                            </div>
                            <Link to={'/books/BookDetails/' + props.book._id}>
                                <p className="card-text my-1 fw-bold text-dark text-center">{props.book.title}</p>
                            </Link>
                            <div className='row'>
                                <p className={`card-text offset-2 col-4 mb-1 mt-1 text-center fw-bold ${styles.text_burble}`}>${props.book.price - props.book.promotion[0].discount_rate * props.book.price}</p>
                                <p className="card-text col-3 mb-1 mt-1 text-center"><small className="text-muted text-decoration-line-through">${props.book.price}</small></p>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <AddToCardButton book={props.book._id} fav={props.fav ? props.fav : false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashSaleCard