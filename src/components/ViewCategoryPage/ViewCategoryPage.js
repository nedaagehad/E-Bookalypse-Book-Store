import React from 'react'

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