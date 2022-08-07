import React from 'react'
import { useSelector } from 'react-redux'
import classes from './FilterBar.module.css'
import PriceRange from './PriceRange/PriceRange'

const FilterBar = props => {

    const theme = useSelector((state) => state.theme.currentTheme);

    return (
        <div className={`col-md-3 col-sm-12 ${theme === "night" ? classes.FilterBarNight : classes.FilterBar}`}>
            <h2 className={classes.title}>Filter</h2>
            <div className={classes.Filters}>
                <h3 className={theme === "night" ? "text-light" : ""}>Categories</h3>
                <div className={classes.cat_Filter}>    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="AllCategories"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="AllCategories">
                            All Categories
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Biography"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="Biography">
                            Biography
                        </label>
                    </div>
                    <div class="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Children"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="Children">
                            Children
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Horror"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="Horror">
                            Horror
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="HistoryAndCulture"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="HistoryAndCulture">
                            History & Culture
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="ScientificResearches"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="ScientificResearches">
                            Scientific Researches
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="Novels"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="Novels">
                            Novels
                        </label>
                    </div>
                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Rates</h3>
                <div className={classes.cat_Rate}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="4StarsOrAbove"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="4StarsOrAbove">
                            4 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="3StarsOrAbove"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="3StarsOrAbove">
                            3 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="2StarsOrAbove"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="2StarsOrAbove">
                            2 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="1StarsORAbove"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="1StarsORAbove">
                            1 stars or above
                        </label>
                    </div>
                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Sort Price</h3>
                <div className={classes.cat_Sort_Price}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="LowToHigh"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="LowToHigh">
                            Low to High
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="HighToLow"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="HighToLow">
                            High to Low
                        </label>
                    </div>
                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Price Range</h3>
                <div className={classes.cat_Price_Range}>
                    <PriceRange/>
                </div>
            </div>
        </div>
    )
}

export default FilterBar;