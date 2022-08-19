import React, { useState,useEffect } from 'react';
import { booksApi } from '../../store/services';

//CSS Module
import classes from './CheckoutHeader.module.css';

//Components
import BookOnCard from '../BookOnCard/BookOnCard';
import CollectionOnCard from '../BookOnCard/CollectionOnCard';

const CheckoutHeader = props => {

    const {bookItems,collectionItems,cart} = props;
    const [books,setBooks]=useState();
    const [collections,setCollections]=useState();
    const {refetch} = booksApi.useGetCartQuery();
    const [removeFromCart] = booksApi.useRemoveFromCartMutation();

    useEffect(() => {
        setBooks(bookItems)
        setCollections(collectionItems)
    }, []);

    const remove= (id)=>{
        removeFromCart({bookIds:id}  ).then((r)=>{
            refetch()             
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