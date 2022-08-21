import React, { useEffect } from 'react';
import ContactUs from '../../../components/ContactUs/ContactUs';
import { useSelector } from 'react-redux';

const Contact = ()=>{

  const theme = useSelector((state) => state.theme.currentTheme);

  useEffect(() => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}, []);

  return (
    <div className={`container-fluid content ${theme === "night" ? "bg-dark" : "bg-white"}`}>
      <div className='flex-grow-1'>
        <ContactUs />
      </div>
    </div>
  )
}

export default Contact