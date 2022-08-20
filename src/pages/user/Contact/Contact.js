import React from 'react';
import ContactUs from '../../../components/ContactUs/ContactUs';
import { useSelector } from 'react-redux';

const Contact = ()=>{

  const theme = useSelector((state) => state.theme.currentTheme);

  return (
    <div className={`container-fluid content ${theme === "night" ? "bg-dark" : ""}`}>
      <div className='flex-grow-1'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact