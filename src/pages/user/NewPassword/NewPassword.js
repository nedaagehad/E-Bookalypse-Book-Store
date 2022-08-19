import React from 'react'
import NewPassForm from '../../../components/NewPassForm/NewPassForm'

const NewPassword = props => {
  return (
    <div className='content' style={{backgroundImage:"url(../../images/login.jpeg)",backgroundSize:"cover" , padding:"50px"}}>
         <NewPassForm/>
    </div>
  )
}

export default NewPassword