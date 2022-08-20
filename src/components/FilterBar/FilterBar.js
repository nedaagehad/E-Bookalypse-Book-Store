import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { bookTitle, category, priceSort, rate } from '../../store/reducers/filterReducer/filterReducer'
import { booksApi } from '../../store/services'
// import { useSelector } from 'react-redux'
import classes from './FilterBar.module.css'
import PriceRange from './PriceRange/PriceRange'

const FilterBar = props => {
    const theme = useSelector((state) => state.theme.currentTheme);
    const [categories, setCategories] = useState()
    // eslint-disable-next-line
    const { data, isLoading, error } = booksApi.useGetAllCategoriesQuery();
    const [checked, setChecked] = useState([]);
    // eslint-disable-next-line
    const [filter, setFilter] = useState({
        categories: '',
        rate: "",
        priceSort: "",
        priceMin: "",
        priceMax: ""
    })

    // eslint-disable-next-line
    const [selectedCategories, setSelectedCategories] = useState([])
    // eslint-disable-next-line
    const filterState = useSelector(state => state.filter)
    const dispatch = useDispatch();
    let params = useParams();

    let catList = [...checked]
    let catCheckedParams = ''

    useEffect(() => {
        if (data) {
            setCategories(data.categories)
            if (params.id) {
                if (params.id.match(/^\d/)) {
                    catCheckedParams = data.categories.find((c) => c._id === params.id);
                    catList = [...checked, catCheckedParams.title]
                    setChecked(catList)
                    dispatch(category(catList))
                } else if (params.id.match(/^\d/) === null) {
                    dispatch(bookTitle(params.id))
                }

            }
        }


    }, [data]);

    const getCategoriesIn = (e, cattitle) => {

        if (e.target.checked) {
            catList = [...checked, e.target.value]
        }

        else {
            catList.splice(checked.indexOf(e.target.value), 1)
        }
        setChecked(catList)

        if (checked) {
            dispatch(category(catList))
        }
    }


    return (
        <div className={`col-md-3 col-sm-12 pt-5 ${theme === "night" ? classes.FilterBarNight : classes.FilterBar}`}>
            <h2 className={classes.title}>Filter</h2>
            <div className={classes.Filters}>
                <h3 className={theme === "night" ? "text-light" : ""}>Categories</h3>
                <div className={classes.cat_Filter}>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={""} id="AllCategories" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="AllCategories">
                            All Categories
                        </label>
                    </div>

                    {categories !== undefined ?
                        categories.map((cat) => {
                            return (
                                <div className="form-check d-flex align-items-end" key={cat._id}>

                                    {checked.includes(cat.title) ?


                                        <input checked className="form-check-input" type="checkbox" name={cat.title} value={cat.title} onChange={(e) => getCategoriesIn(e, cat.title)} id={cat.title} />

                                        :

                                        <input className="form-check-input" type="checkbox" name={cat.title} value={cat.title} onChange={(e) => getCategoriesIn(e, cat.title)} id={cat.title} />

                                    }
                                    <label className={`form-check-label align-self-center ${theme === "night" ? classes.filterItem : ""}`} htmlFor={cat.title}>
                                        {cat.title}
                                    </label>
                                </div>
                            )
                        })
                        : null}

                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Rates</h3>
                <div className={classes.cat_Rate}>
                    <div className="form-check">
                        <input className="form-check-input" name="rate" type="radio" value="4" onChange={(e) => { dispatch(rate(e.target.value)) }} id="rate4" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="rate4">

                            4 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="rate" type="radio" value="3" onChange={(e) => { dispatch(rate(e.target.value)) }} id="rate3" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="rate3">

                            3 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="rate" type="radio" value="2" onChange={(e) => { dispatch(rate(e.target.value)) }} id="rate2" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="rate2">

                            2 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="rate" type="radio" value="1" onChange={(e) => { dispatch(rate(e.target.value)) }} id="rate1" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="rate1">
                            1 stars or above
                        </label>
                    </div>
                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Sort Price</h3>
                <div className={classes.cat_Sort_Price}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceSort" onChange={(e) => { dispatch(priceSort(e.target.value)) }} value="lth" id="lth" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="lth">

                            Low to High
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceSort" onChange={(e) => { dispatch(priceSort(e.target.value)) }} value="htl" id="htl" />
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="htl">

                            High to Low
                        </label>
                    </div>
                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Price Range</h3>
                <div className={classes.cat_Price_Range}>
                    <PriceRange filter={filter} />
                </div>
            </div>
        </div>
    )
}
export default FilterBar;