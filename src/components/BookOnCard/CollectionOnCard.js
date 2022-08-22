import React, { useEffect, useState } from 'react'
import classes from './BookOnCard.module.css'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import storage from '../../Firebase/firebaseImage'
import { getDownloadURL, ref } from 'firebase/storage'
import { booksApi } from '../../store/services'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CollectionOnCard = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    const [bookImages, setBookImages] = useState()
    const [collectionImage,setCollectionImage] = useState()
    useEffect(() => {
        const starsRef = ref(storage, `/uploads/books/poster/${props.data.poster}`);
        getDownloadURL(starsRef).then((url) => {
            const newUrl = url

            setBookImages(newUrl)

        }).catch((error) => { console.log(error) });


        const collectionImages = ref(storage, `/uploads/books/poster/soffer.png`);
        getDownloadURL(collectionImages).then((url) => {
          const newUrl = url
  
          setCollectionImage(newUrl)
  
        }).catch((error) => { console.log(error) });

    }, []);

    // eslint-disable-next-line
    const [removeFromCart, response] = booksApi.useRemoveFromCartMutation()
    // eslint-disable-next-line
    const { refetch } = booksApi.useGetCartQuery()


    const removeItem = (bookData) => {

        removeFromCart({bookIds:[bookData],collectionIds:[bookData]}).then((r)=>{
                // refetch()
                console.log(r)
                if(r.data){
                    // eslint-disable-next-line
                    const removedFromCart = () =>  toast("Collection Removed from Cart");

                    {removedFromCart()}
                }else{
                    const err = () =>  toast.error(r.error.data.message);

                    {err()}
                }

        }).catch((error) => {console.log(error)})
    

    }

    return (
        <div className={`col-12 ${theme === "night" ? classes.cardNight : classes.card}`}>

            <div className={`row`}>
                <div className={`col-8`}>
                    <div className={`row`}>
                        <div className={`col-3`}>
                            <img src={collectionImage} alt='bookimage' />
                        </div>
                        <div className={`col-9 ${classes.details}`}>
                            <h3 className={theme === "night" ? "text-light" : "text-dark"}>{props.data.title}</h3>
                            <p className={theme === "night" ? classes.lightTxt : "text-dark"}>{props.data.bookAuther}</p>
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