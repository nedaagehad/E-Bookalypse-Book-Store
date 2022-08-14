import React, { useState,useEffect } from 'react'
import classes from './CheckoutHeader.module.css'
import BookOnCard from '../BookOnCard/BookOnCard';
import CollectionOnCard from '../BookOnCard/CollectionOnCard';
import { booksApi } from '../../store/services';

const CheckoutHeader = props => {
    const {bookItems,collectionItems,cart} = props
    const [books,setBooks]=useState()
    const [collections,setCollections]=useState()
    // console.log(bookItems)
    useEffect(() => {
        console.log(cart)
        setBooks(bookItems)
        setCollections(collectionItems)
    }, []);
    const {refetch} = booksApi.useGetCartQuery()
    const [removeFromCart ,response] = booksApi.useRemoveFromCartMutation()

    const remove= (id)=>{
        console.log(id)
        removeFromCart({bookIds:id}  ).then((r)=>{

            refetch()
                //    dispatch(removeFromCartReducer({bookIds:bookData}))
             
        })
    }
    return (
    <>
      <div className={`col-12 ${classes.header}`}>
        <div className={`row`}>
            <div className={`col-8`}>
                <h4>Book</h4>
            </div>
            <div className={`col-4`}>
                <h4>Total Price</h4>
            </div>
        </div>  
        </div>
        <div className={`col-12`}>
            <div className={`row`}>
                {
                    bookItems !== undefined ?
                    bookItems.map(item => {
                            return (
                                <BookOnCard  key={item._id} data={item}  />
                            )
                    })  :
                    null
                }

                {collectionItems !== undefined ?
                    collectionItems.map((collection)=>{
                        return ( 
                            <>
                                <h6 className="text-muted mb-2 pb-2">Collections</h6>
                                <CollectionOnCard key={collection._id} data={collection} />

                            </>
                        )
                    })
                    :
                    null
                }
            </div>  
        </div>
        </>
        
    )
}
export default CheckoutHeader;