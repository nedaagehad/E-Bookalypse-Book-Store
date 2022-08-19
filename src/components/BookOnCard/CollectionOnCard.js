import React, { useEffect, useState } from 'react'
import classes from './BookOnCard.module.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import storage from '../../Firebase/firebaseImage'
import { getDownloadURL, ref } from 'firebase/storage'
import { booksApi } from '../../store/services'
import { useDispatch, useSelector } from 'react-redux'

const CollectionOnCard = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    const [bookImages, setBookImages] = useState()
    useEffect(() => {
        const starsRef = ref(storage, `/uploads/books/poster/${props.data.poster}`);
        getDownloadURL(starsRef).then((url) => {
            const newUrl = url

            setBookImages(newUrl)

        }).catch((error) => { console.log(error) });




    }, []);

    const [removeFromCart, response] = booksApi.useRemoveFromCartMutation()
    const { refetch } = booksApi.useGetCartQuery()
    let dispatch = useDispatch()


    const removeItem = (bookData) => {
        console.log(bookData)
        // let books = []
        // let collections = []

        // if(bookData.book !== undefined) {

        //     books.push(bookData.book)
        // }
        // if(bookData.collection !== undefined) {
        //     collections.push(bookData.collection)
        // }
        removeFromCart({bookIds:[bookData],collectionIds:[bookData]}).then((r)=>{
                // refetch()
                console.log(r)

        }).catch((error) => {console.log(error)})
    

    }

    return (
        <div className={`col-12 ${theme === "night" ? classes.cardNight : classes.card}`}>
            <div className={`row`}>
                <div className={`col-8`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <img src={bookImages} />
                        </div>
                        <div className={`col-9 ${classes.details}`}>
                            <h3 className={theme === "night" ? "text-light" : ""}>{props.data.title}</h3>
                            <p className={theme === "night" ? classes.lightTxt : ""}>{props.data.bookAuther}</p>
                        </div>
                    </div>
                </div>
                <div className={`col-2 ${classes.price}`}>
                    <h4>${props.data.collectionPrice}</h4>
                </div>
                <div className={`col-2 ${classes.delete}`}>
                    <button onClick={() => removeItem(props.data._id)}><RiDeleteBin5Fill /></button>
                </div>
            </div>
        </div>
    )
}
export default CollectionOnCard;