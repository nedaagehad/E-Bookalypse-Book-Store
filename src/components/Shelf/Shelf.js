import React, { useEffect } from 'react'
import { booksApi } from '../../store/services'
import Preloader from '../Preloader/Preloader'
import EachBookShelf from './EachBookShelf'
import classes from './Shelf.module.css'

const Shelf = props => {
    const {data} = props    
    return (
        <div className={`col-12`}>
            <div className={classes.shelfContainer}>
                <div className="row">
                    {
                       
                        data ? data.map((book)=>{
                    
                            return(
                                <EachBookShelf book={book} key={book._id}/>

                            )
                        })
                    :null}
                </div>
            </div>
        </div>
    )
}
export default Shelf;