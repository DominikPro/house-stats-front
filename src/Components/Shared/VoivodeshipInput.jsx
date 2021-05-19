import React, {createRef} from 'react'
import {voivodships} from "../CostForm/dataForm"
import upDateForm from "../../actions/upDateForm"

 const VoivodeshipInput=(props)=> {
    const voivodeshipInput = createRef();
    return (
        
         <select
          id="myList"
          onClick={(e) => upDateForm(e, voivodeshipInput, props.setStateInParentComponent)}
          name={"voivodeship"}
          ref={voivodeshipInput}
        >
          {voivodships.map((item) => {
            return (
              <option key={item.voivodeship} name={"voivodeship"} value={item}>
                {item}
              </option>
            );
          })}
        </select>
       
    )
}


export default VoivodeshipInput;