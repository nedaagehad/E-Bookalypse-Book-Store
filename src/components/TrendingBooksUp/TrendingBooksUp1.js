import React,{useEffect,useState} from 'react'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai'
import styles from './TrendingBooksUp.module.css'
import SwiperCore, { Autoplay, Navigation, Pagination,EffectCoverflow } from "swiper";
import { booksApi } from '../../store/services';
import storage from '../../Firebase/firebaseImage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";



const TrendingBooksUp1 = () => {
  SwiperCore.use([Autoplay])
  const { data, error, isLoading } = booksApi.useGetAllBooksQuery()
  const [books,setBooks] = useState()
  const [ images,setImages] = useState()
  // Create a reference to the file we want to download


  useEffect(() => {
    if(data){
      setBooks(data.data)
      // getDownloadURL(starsRef).then((url)=>{console.log(url)
      //  }).catch((error) => {console.log(error)});
    }

            
    // Get the download URL
  }, [data])
    


  return (
    <div className=' container p-5 mb-5'>
      <div className={styles.head + " mb-5 "}>
        <h5 className={styles.h5}>Trending This Week🚀</h5>
      </div>
      <div className={styles.sliderContainer +" container d-flex justify-content-center align-items-center mb-5 "} >
      
        <div  className={" row d-flex justify-content-center align-items-center"} style={{width:"65%"}}>
          
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            loop={true}
            navigation={{
              nextEl:'.nextTrendBook',
              prevEl: '.prevTrendBook',
            }}
            autoplay={{delay:1000}}
            className={styles.mySwiper}
            >
          {books ? books.map((b)=>{

            // Create a reference to the file we want to download
            // const storageRef = ref();

            // var starsRef = storageRef.child('/uploads/books/poster/'+b.poster);
            
            // Get the download URL
            const starsRef = ref(storage, `/uploads/books/poster/${b.poster}`);
            let imageurl = ' ';
             getDownloadURL(starsRef).then( (url)=>{
              const newUrl = url
           
              setImages(newUrl)
              
            }).catch((error) => {console.log(error)});

            return(
             
              <SwiperSlide key={b._id}
                className='SwiperClasstest'
              >    
                <div className={styles.slideImg}>
                  {/* <h1>{b.title}</h1> */}
                  <img src={images} className={styles.trendBook} />
                </div>
              
              </SwiperSlide>
            )
          }): null}

          </Swiper>
          <div className={styles.navControllers}>
                <div className={styles.prevContainer}  >
                  <div className={styles.prevTrendBook + " prevTrendBook "}>
                    <AiOutlineArrowLeft />
                  </div>
                </div>
                <div className={styles.nextContainer} >
                  <div className={styles.nextTrendBook + " nextTrendBook "} >
                    <AiOutlineArrowRight />
                  </div>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingBooksUp1