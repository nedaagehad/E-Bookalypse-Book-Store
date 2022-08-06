import React,{useState,useEffect} from 'react'
import classes from './Combination.module.css'
import { BsFillHeartFill } from 'react-icons/bs'
import storage from '../../Firebase/firebaseImage';
import { getDownloadURL, ref } from 'firebase/storage';
const Combination = props => {
    const {collectionData,collectionName,collectionPrice} = props;
    const [imageOne,setImageOne]= useState()
    const [imageTwo,setImageTwo]= useState()
    const [imageThree,setImageThree]= useState()



    console.log(collectionData)
    if(collectionData.length  > 2 ){

        useEffect(() => {
            let bookImageOne = ref(storage, `/uploads/books/poster/${collectionData[0].poster}`);
   

            getDownloadURL(bookImageOne).then( (url)=>{
                const newUrl = url
                setImageOne(newUrl)
                console.log(newUrl)
            })
             
            let bookImageTwo = ref(storage, `/uploads/books/poster/${collectionData[1].poster}`);
           
        
            getDownloadURL(bookImageTwo).then( (url)=>{
                const newUrl = url
                setImageTwo(newUrl)
                console.log(newUrl)
            })
        
            let bookImageThree = ref(storage, `/uploads/books/poster/${collectionData[2].poster}`);
           
        
            getDownloadURL(bookImageThree).then( (url)=>{
                const newUrl = url
                setImageThree(newUrl)
                console.log(newUrl)
            })
        
        }, []);

        return (
         
            <div className={`col-md-6 col-sm-12 ${classes.collection}`}>
                <div className={`row justify-content-center`}>
                    <div className={`col-md-12`}>
                      
                    <div className={classes.booksPosters + " position-relative"}>
                        {
                            collectionData.map((book,index)=>{
                                // console.log(book,index)
                       
                                return(
                                    <div key={book._id} className={index == 0 ? classes.first : index == 1 ? classes.second : index == 2 ? classes.third : null}>
                                        {index == 1 ? 
                                        
                                            <div className={classes.ribbon}>
                                                <p>${props.collectionPrice}</p>
                                            </div>
                                        :null}
                                        <img src={index == 0 ? imageOne : index == 1 ? imageTwo : index == 2 ? imageThree: null} alt={props.collectionimageThree}/>
                                    </div>
                                )
                            })
                        }
                    
                     
                    
                    </div>
                    </div>
                    <div className={`col-md-12`}>
                        <h4>{collectionName}</h4>
                        {collectionData.map((book)=>{
                            return(
    
                                <h6 key={book._id}>{book.title}</h6>
                            )
                        })}
                        {/* <h6>{collectionData.book1.bookName}</h6>
                        <h6>{collectionData.book2.bookName}</h6>
                        <h6>{collectionData.book3.bookName}</h6> */}
                        <div className={classes.action}>
                            <button>Add To Cart <i className={" col-2 align-self-start bi bi-basket2-fill  text-white text-center rounded-circle py-1 mt-1 "}></i></button>
                            <button className={classes.favorite}><BsFillHeartFill/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}
export default Combination;