import React from 'react'

function ThemeToggler({ toggled, onClick }) {
  return (
    <div className={`theme-toggler${toggled ? " night" : ""}`} onClick={onClick}>
        <div className='notch'>
            <div className='crater st' />
            <div className='crater nd' />
        </div>
        <div className='shape sm' />
        <div className='shape sm second' />
        <div className='shape md' />
        <div className='shape lg' />
    </div>
  )
}

export default ThemeToggler