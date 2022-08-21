import React, { useState, useEffect } from 'react';
import storage from '../../Firebase/firebaseImage';
import { getDownloadURL, ref } from 'firebase/storage';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//CSS Module
import classes from './Combination.module.css';

//Component
import AddToCardButton from '../AddToCardButton/AddToCardButton';

const Combination = props => {

    const { collectionData, collectionName, collectionPrice, collectionID } = props;
    const [imageOne, setImageOne] = useState();
    const [imageTwo, setImageTwo] = useState();
    const [imageThree, setImageThree] = useState();

    const theme = useSelector((state) => state.theme.currentTheme);

    if (collectionData.length > 2) {
        useEffect(() => {
            let bookImageOne = ref(storage, `/uploads/books/poster/${collectionData[0].poster}`);
            getDownloadURL(bookImageOne).then((url) => {
                const newUrl = url
                setImageOne(newUrl)
            })

            let bookImageTwo = ref(storage, `/uploads/books/poster/${collectionData[1].poster}`);

            getDownloadURL(bookImageTwo).then((url) => {
                const newUrl = url
                setImageTwo(newUrl)
            })

            let bookImageThree = ref(storage, `/uploads/books/poster/${collectionData[2].poster}`);

            getDownloadURL(bookImageThree).then((url) => {
                const newUrl = url
                setImageThree(newUrl)
            })
        }, []);

        return (
            <div className={`col-md-6 col-sm-12 ${classes.collection}`}>
                <div className={`row justify-content-center`}>
                    <div className={`col-md-12`}>
                        <div className={classes.booksPosters + " position-relative"}>
                            {collectionData.map((book, index) => {
                                return (
                                    <div key={book._id} className={index === 0 ? classes.first : index === 1 ? classes.second : index === 2 ? classes.third : null}>
                                        {index === 1 ?
                                            <div className={classes.ribbon}>
                                                <p>${collectionPrice}</p>
                                            </div>
                                            : null}
                                            <img src={index === 0 ? imageOne : index === 1 ? imageTwo : index === 2 ? imageThree : null} alt={props.collectionimageThree} />
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4 className='text-center'>{collectionName[0].toUpperCase() + collectionName.substring(1)}</h4>
                        {collectionData.map((book) => {
                            return (
                                <Link to={'/books/BookDetails/' + book._id}>
                                    <h6 className={`text-center ${theme === "night" ? classes.detailsDark : ""}`} key={book._id}>{book.title}</h6>
                                </Link>
                            )
                        })}
                        <AddToCardButton bookShelf={props.bookShelf ? true : false}   fav={props.fav ? props.fav : false} collection={{collectionID:collectionID,collectionBooks:collectionData}} />
                    </div>
                </div>
            </div>
        )

    }
}
export default Combination;