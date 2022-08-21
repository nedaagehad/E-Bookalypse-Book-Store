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
            <div className="row flex-grow-1">

                <div className="col-md-5">
                    <Link to={'/books/BookDetails/' + props.book._id}>
                        <img src={image} className={`rounded-3 border shadow ${styles.flashImg}`} alt={props.book.title} />
                    </Link>
                </div>

                <div className="col-md-7">
                    <div className="card-body">
                        <div className='mb-1 row'>
                            <small className={styles.text_burble + " col-6 mb-1 card-text "}>{props.book.category[0].title}</small>
                            <div className='col-4 offset-1 mb-4 text-center align-self-start border rounded'>
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                <small className="text-muted">{props.book.rate}</small>
                            </div>
                        </div>
                        <Link to={'/books/BookDetails/' + props.book._id}>
                        <p className="card-text my-1 fw-bold">{
                                props.book.title.length > 20 ?

                                props.book.title.substring(0, 20) + "..."
                                :
                                props.book.title
                            }</p>
                        </Link>
                        <div className='d-flex gap-4'>
                            <p className={`card-text mb-1 mt-1 fw-bold ${styles.text_burble}`}>${props.book.price - props.book.promotion[0].discount_rate * props.book.price}</p>
                            <p className="card-text mb-1 mt-1"><small className="text-muted text-decoration-line-through">${props.book.price}</small></p>
                        </div>
                        <div className='position-absolute' style={{ "bottom": "15px" }}>
                            <AddToCardButton book={props.book._id} fav={props.fav ? props.fav : false} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlashSaleCard