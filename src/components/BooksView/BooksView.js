import React from 'react'
import classes from './BooksView.module.css'
import Pagination from '@mui/material/Pagination'; 

const BookView = props =>{
    return(
        <div className={classes.BookView}>
            <h2>{props.title}</h2>
            <div className={`row`}>
                {props.children}
                <div className={`col-12`}>
                    <div className={classes.pagy}>
                        <Pagination count={5} color="secondary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookView;