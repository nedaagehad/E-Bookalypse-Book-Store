import React from 'react'
import classes from './BooksView.module.css'
import BookCard from '../BookCard/BookCard'
import Pagination from '@mui/material/Pagination';

const BookView = props =>{
    return(
        <div className={`col-md-9 col-sm-12 ${classes.BookView}`}>
            <h2>Books</h2>
            <div className={`row`}>
                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/2.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/3.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/4.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/1.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
                <BookCard img="../../Images/Books/2.jpg" alt="Harry Potter and the philospher stone" price="$15.50"/>
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