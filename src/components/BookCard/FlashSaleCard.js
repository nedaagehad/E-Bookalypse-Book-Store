import { getDownloadURL, ref } from 'firebase/storage';
import React, { useState,useEffect } from 'react'
import storage from '../../Firebase/firebaseImage';

//CSS Module
import styles from '../HomeSlider/FlashSaleSlider.module.css'
 
function FlashSaleCard(props) {

    const {book} = props;
    const [image,setImage] = useState();

    useEffect(() => {
        const starsRef = ref(storage, `/uploads/books/poster/${props.book.poster}`);
        getDownloadURL(starsRef).then( (url)=>{
        setImage(url)
       }).catch((error) => {console.log(error)});
    }, []);
    
    return (
        <div className={`card rounded-3 ${styles.flashCard}`}>
            <div className="row align-items-center g-0">

                <div className="col-md-5">
                    <img src={image} className="img-fluid rounded p-3" alt={book.title} />
                </div>

                <div className="col-md-7">
                    <div className="card-body">
                        <div className='mb-1 d-flex'>
                            <small className={styles.text_burble + " col-6 mb-1 card-text "}>{book.category[0].title}</small>
                            <div className='col-3 text-center align-self-start border rounded'>
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                <small className="text-muted">{book.rate}</small></div>
                        </div>
                        <p className="card-text mb-0 fw-bold">{book.title}</p>
                        <div className='d-flex gap-4'>
                            <p className="card-text mb-0 mt-1 fw-bold text-burble">${book.price - book.promotion[0].discount_rate * book.price}</p>
                            <p className="card-text mb-0 mt-1"><small className="text-muted text-decoration-line-through">${book.price}</small></p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='col-9'>
                                <div className="progress mt-3" style={{height: "6px"}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <i className={styles.bg_burble + " col-2 align-self- bi bi-basket2-fill  text-white text-center rounded-circle p-1 mt-1 "}></i>
                        </div>                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlashSaleCard