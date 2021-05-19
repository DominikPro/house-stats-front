import React, {useState} from 'react'
import VoivodeshipInput from "../Shared/VoivodeshipInput"
import YearInput from '../Shared/YearInput'

const  StatisticForm=()=> {

    const  [statForm, setStatForm]= useState(
        {
            info: {
              id: "",
              year: "",
              voivodeship: "",
            }
          }
    )
    return (
        <div>
            <YearInput setStateInParentComponent={setStatForm}/>
            <h3>{`Wybrany rok budowy:${statForm.info.year}`}</h3>
            <VoivodeshipInput setStateInParentComponent={setStatForm}/>
            <h3>{`Wybrane wojewódtwo: ${statForm.info.voivodeship}`}</h3>           
        </div>
    )
}
export default  StatisticForm