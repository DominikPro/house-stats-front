import React, {createRef} from 'react'
import {year} from "../CostForm/dataForm"
import upDateForm from "../../actions/upDateForm"


const YearInput=(props)=> {
    const yearInput = createRef();
    return (
        <select
        id="myData"  onClick={(e) => upDateForm(e, yearInput, props.setStateInParentComponent)} name={"year"} ref={yearInput}
      >
        {year.map((item) => {
          return (
            <option key={item.year} name={"year"} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    )
}

export default  YearInput;