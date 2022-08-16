import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutHeader from '../../../components/CheckoutHeader/CheckoutHeader'
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary'
import { addToCartReducer, FillCartFromDb } from '../../../store/reducers/cartReducer/CartReducer'
import { booksApi, selectCartItems } from '../../../store/services'

function Checkout() {

    const [bookItems,setBookItems] = useState()
    const [collectionItems,setCollectionItems]  = useState()
    const [cart,setCart] = useState()
    const [done,setDone] = useState(false)
    const theme = useSelector((state) => state.theme.currentTheme);

    const [totalPrice,setTotalPrice] = useState()
    let  cartSelector = useSelector(state=>state.cart.bookIds)
    let cartCollectionItems = useSelector(state=>state.cart.collectionIds)
    let cartTotalPrice = useSelector(state=>state.cart.price)

    let dispatch  = useDispatch()
    // const [getCartItems , response] = booksApi.useGetCartMutation()
    const {data,isLoading,error} = booksApi.useGetCartQuery()
    
    // useEffect(() => {
    //    getCartItems().then((r)=>{

    //     dispatch(FillCartFromDb(r.data))
  
    //         setDone(true)
    //     // }
          
    //    })
    // }, []);  
    useEffect(()=>{
        // getCartItems().then((r)=>{
        //     console.log(r.data.cart)
        //     // setCart(r.data.cart.cart)
        //     setBookItems(r.data.cart.bookItems)

        // })
        if(data){
            // console.log(data)
            setCart(data.cart)
            setTotalPrice(data.finalPrice)
            setBookItems(data.cart.bookItems)
            setCollectionItems(data.cart.collectionItems)

            // console.log(data.)
        }
    },[data])

    // console.log(selectCartItems())

    // useEffect(() => {
            
    //     setBookItems(cartSelector)
    //     setCollectionItems(cartCollectionItems)
    //     setTotalPrice(cartTotalPrice)
        
    // }, [done,cartSelector,cartCollectionItems,cartTotalPrice]);  







  return (
      <div className={`content ${theme === "night" ? "bg-dark" : ""} pt-5`}>
          <div className="container">
              <div className="row">
                {cart  ? 

                    <>
                        <CheckoutHeader cart={cart} bookItems={bookItems} collectionItems={collectionItems}/>
                        <CheckoutSummary subTotal="30.98" tax="2.25" Total={totalPrice}/>

                    </>                
                :null}
              </div>
          </div>
    </div>
  )
}

export default Checkout