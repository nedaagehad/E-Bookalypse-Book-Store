import React from 'react'
import styles from '../HomeSlider/FlashSaleSlider.module.css'
 
function FlashSaleCard() {
    return (
        <div className="card rounded-3" style={{"maxWidth": "400px"}}>
            <div className="row align-items-center g-0">

                <div className="col-md-5">
                    <img src="http://via.placeholder.com/100x150" className="img-fluid rounded p-3" alt="book poster"/>
                </div>

                <div className="col-md-7">
                    <div className="card-body">
                        <div className='mb-1 d-flex'>
                            <small className={styles.text_burble + " col-6 mb-1 card-text "}>category</small>
                            <div className='col-3 text-center align-self-start border rounded'>
                                <i className="bi bi-star-fill text-warning me-1"></i>
                                <small className="text-muted">3.5</small></div>
                        </div>
                        <p className="card-text mb-0 fw-bold">Book Title</p>
                        <p className="card-text mb-1"><small className="text-muted">writer</small></p>
                        <div className='d-flex gap-4'>
                            <p className="card-text mb-0 mt-1 fw-bold text-burble">$21.99</p>
                            <p className="card-text mb-0 mt-1"><small className="text-muted text-decoration-line-through">$30</small></p>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='col-9'>
                                <div className="progress mt-3" style={{height: "6px"}}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p className="card-text mb-0"><small className="text-muted">45 books left</small></p>
                            </div>
                            <i className={styles.bg_burble + " col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i>
                        </div>                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FlashSaleCard