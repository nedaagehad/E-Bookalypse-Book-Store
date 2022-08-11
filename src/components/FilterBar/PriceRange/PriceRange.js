import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './PriceRange.css'
import { useDispatch, useSelector } from 'react-redux'
import { priceMax,priceMin } from "../../../store/reducers/filterReducer/filterReducer";
const PriceRange = props =>{
const [minValue, set_minValue] = useState(0);
const [maxValue, set_maxValue] = useState(200);
// const filterState = useSelector(state => state.filter)
const dispatch  = useDispatch();

const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
	dispatch(priceMax(maxValue))
	dispatch(priceMin(minValue))
};
return (
	<div className="App">
		<MultiRangeSlider
			min={0}
			max={200}
			step={5}
			ruler={false}
			label={true}
			preventWheel={false}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
            }}
            baseClassName="multi-range-slider"
		/>
	</div>
	);
}

export default PriceRange;