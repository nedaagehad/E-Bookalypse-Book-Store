import React from 'react'
import classes from './BooksView.module.css'
import BookCard from '../BookCard/BookCard'

const BookView = props =>{
    return(
        <div className={`col-md-9 col-sm-12 ${classes.BookView}`}>
            <h2>Books</h2>
            <div className={`row`}>
                <BookCard />
                <BookCard />
                <BookCard/>
                <BookCard />
                <BookCard />
                <BookCard/>
            </div>
        </div>
    )
}

export default BookView;