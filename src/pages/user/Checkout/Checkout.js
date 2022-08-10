import { set } from 'mongoose'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutHeader from '../../../components/CheckoutHeader/CheckoutHeader'
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary'
import { addToCartReducer, FillCartFromDb } from '../../../store/reducers/cartReducer/CartReducer'
import { booksApi } from '../../../store/services'
function Checkout() {

    const [bookItems,setBookItems] = useState()
    const [collectionItems,setCollectionItems]  = useState()
    const [cart,setCart] = useState()
    const [done,setDone] = useState(false)

    const [totalPrice,setTotalPrice] = useState()
    let  cartSelector = useSelector(state=>state.cart.bookIds)
    let cartCollectionItems = useSelector(state=>state.cart.collectionIds)
    let cartTotalPrice = useSelector(state=>state.cart.price)

    let dispatch  = useDispatch()
    const [getCartItems , response] = booksApi.useGetCartMutation()
    useEffect(() => {
       getCartItems().then((r)=>{

        dispatch(FillCartFromDb(r.data))
  
            setDone(true)
        // }
          
       })
    }, []);  
    useEffect(() => {
            
        setBookItems(cartSelector)
        setCollectionItems(cartCollectionItems)
        setTotalPrice(cartTotalPrice)
        
    }, [done,cartSelector,cartCollectionItems,cartTotalPrice]);  



  return (
      <div className='content'>
          <div className="container">
              <div className="row">
                {bookItems  ? 

                    <>
                        <CheckoutHeader bookItems={bookItems} collectionItems={collectionItems}/>
                        <CheckoutSummary subTotal="30.98" tax="2.25" Total={totalPrice}/>

                    </>                
                :null}
              </div>
          </div>
    </div>
  )
}

export default Checkout