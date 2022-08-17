import React from 'react';

//CSS Module
import classes from './CategoryList.module.css';

const CategoryList = props => {

  return (
    <div className={`container`}>
      <div className={`row ${classes.category_list}`}>
        <h1>Categories</h1>
        {props.children}
      </div>
    </div>
  )
}

export default CategoryList;