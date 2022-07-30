import React from 'react'
import classes from './ViewCategoryPage.module.css'

const ViewCategoryPage = props =>{
    return(
        <div className="container-fluid">
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}

export default ViewCategoryPage;