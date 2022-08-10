import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { bookTitle, category, priceSort, rate } from '../../store/reducers/filterReducer/filterReducer'
import { booksApi } from '../../store/services'
// import { useSelector } from 'react-redux'
import classes from './FilterBar.module.css'
import PriceRange from './PriceRange/PriceRange'

const FilterBar = props => {
    const theme = useSelector((state) => state.theme.currentTheme);
    const [categories,setCategories] = useState()
    const {data,isLoading,error}= booksApi.useGetAllCategoriesQuery();
    const [checked,setChecked]=useState([]);
    const [filter,setFilter] = useState({
        categories:'',
        rate:"",
        priceSort : "",
        priceMin:"",
        priceMax:""
    })
    const [selectedCategories,setSelectedCategories] = useState([])
    const filterState = useSelector(state => state.filter)
    const dispatch  = useDispatch();
    let params = useParams();

    // console.log(filterState)
    let catList = [...checked]
    let catCheckedParams = ''

    useEffect(() => {
        if(data){
            setCategories(data.categories)
            if(params.id ){
                if(params.id.match(/^\d/)){
                    // console.log("yes")
                    catCheckedParams = data.categories.find((c)=> c._id == params.id);
                    console.log(catCheckedParams)
                    catList = [...checked , catCheckedParams.title]
                    setChecked(catList)
                    dispatch(category(catList))
                }else if(params.id.match(/^\d/) == null ){
                    // console.log(params.id)
                    dispatch(bookTitle(params.id))
                }

        }
       }
       
    
    }, [data]);

    const getCategoriesIn =  (e,cattitle) => {
        
        if(e.target.checked){
            catList = [...checked,e.target.value]
        }
        
        else{
            catList.splice(checked.indexOf(e.target.value),1)
        }
         setChecked(catList)
         
        if(checked ){
            dispatch(category(catList))
        }
    }


    return (
        <div className={`col-md-3 col-sm-12 ${theme === "night" ? classes.FilterBarNight : classes.FilterBar}`}>
            <h2 className={classes.title}>Filter</h2>
            <div className={classes.Filters}>
                <h3 className={theme === "night" ? "text-light" : ""}>Categories</h3>
                <div className={classes.cat_Filter}>    
                
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={""} id="AllCategories"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} for="AllCategories">
                            All Categories
                        </label>
                    </div>

                    {categories !== undefined ? 
                        categories.map((cat)=>{
                            return(
                            <div className="form-check" key={cat._id}>
                                
                                {checked.includes(cat.title)? 
                                
                                
                                <input checked className="form-check-input" type="checkbox" name={cat.title} value={cat.title} onChange={(e)=>getCategoriesIn(e,cat.title)} id="flexCheckDefault"/>
                                
                                :
                                
                                <input  className="form-check-input" type="checkbox" name={cat.title} value={cat.title} onChange={(e)=>getCategoriesIn(e,cat.title)} id="flexCheckDefault"/>
                                
                                }
                                <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`}  htmlFor="flexCheckDefault">
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
                        {/*  onChange={(e,data)=>{setFilter({...filter,rate:e.target.value})}} */}
                        <input className="form-check-input" name="rate" type="radio" value="4" onChange={(e)=>{dispatch(rate(e.target.value))}} id="flexCheckDefault"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`}  htmlFor="flexCheckDefault">

                            4 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="rate" type="radio" value="3" onChange={(e)=>{dispatch(rate(e.target.value))}} id="flexCheckDefault"/>
                        <label  className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`}  htmlFor="flexCheckDefault">

                            3 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input"name="rate"  type="radio" value="2" onChange={(e)=>{dispatch(rate(e.target.value))}} id="flexCheckDefault"/>
                        <label   className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="flexCheckDefault">

                            2 stars or above
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" name="rate" type="radio" value="1"  onChange={(e)=>{dispatch(rate(e.target.value))}} id="flexCheckDefault"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`}  htmlFor="flexCheckDefault">
                            1 stars or above
                        </label>
                    </div>
                </div>
                <h3 className={theme === "night" ? "text-light" : ""}>Sort Price</h3>
                <div className={classes.cat_Sort_Price}>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceSort" onChange={(e)=>{dispatch(priceSort(e.target.value))}} value="lth" id="flexCheckDefault"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`}   htmlFor="flexCheckDefault">

                            Low to High
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="priceSort" onChange={(e)=>{dispatch(priceSort(e.target.value))}} value="htl" id="flexCheckDefault"/>
                        <label className={`form-check-label ${theme === "night" ? classes.filterItem : ""}`} htmlFor="flexCheckDefault">

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