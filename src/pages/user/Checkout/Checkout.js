import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CheckoutHeader from '../../../components/CheckoutHeader/CheckoutHeader'
import CheckoutSummary from '../../../components/CheckoutSummary/CheckoutSummary'
import { booksApi } from '../../../store/services'
import CartEmpty from '../../../components/CartEmpty/CartEmpty'

//loader 
import Preloader from '../../../components/Preloader/Preloader';
function Checkout() {

  const [bookItems, setBookItems] = useState()
  const [collectionItems, setCollectionItems] = useState()
  const [cart, setCart] = useState()
  // eslint-disable-next-line
  const [done, setDone] = useState(false)
  const theme = useSelector((state) => state.theme.currentTheme);

  const [totalPrice, setTotalPrice] = useState()
  // eslint-disable-next-line
  let cartSelector = useSelector(state => state.cart.bookIds)
  // eslint-disable-next-line
  let cartCollectionItems = useSelector(state => state.cart.collectionIds)
  // eslint-disable-next-line
  let cartTotalPrice = useSelector(state => state.cart.price)

  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const { data, isLoading, error } = booksApi.useGetCartQuery()
 
  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    else {
      if (data) {
        setCart(data.cart)
        setTotalPrice(data.finalPrice)
        setBookItems(data.cart.bookItems)
        setCollectionItems(data.cart.collectionItems)
        setLoading(false);
      }
    }

  }, [data])

  return (
    <div className={`content ${theme === "night" ? "bg-dark" : ""} pt-5`}>
      {
        loading ?
          <Preloader />
          :
          <div className="container">
            <div className="row">
              {cart ?
                <>
                  <CheckoutHeader cart={cart} bookItems={bookItems} collectionItems={collectionItems} />
                  <CheckoutSummary Total={totalPrice} />
                </>
                :
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <CartEmpty />
                </div>
              }
            </div>
          </div>
      }
    </div>
  )
}

export default Checkout