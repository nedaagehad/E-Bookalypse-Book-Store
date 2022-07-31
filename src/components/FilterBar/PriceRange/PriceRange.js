import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import './PriceRange.css'
const PriceRange = props =>{
const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

return (
	<div className="App">
		<MultiRangeSlider
			min={0}
			max={100}
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