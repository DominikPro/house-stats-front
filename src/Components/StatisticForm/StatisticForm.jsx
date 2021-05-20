import React, {useState} from 'react'
import VoivodeshipInput from "../Shared/VoivodeshipInput"
import YearInput from '../Shared/YearInput'
import getData from "../../actions/getData"

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
    const [dataForStats, setDataForStats] = useState([])

    return (
        <div>
            <YearInput setStateInParentComponent={setStatForm}/>
            <h3>{`Wybrany rok budowy:${statForm.info.year}`}</h3>
            <VoivodeshipInput setStateInParentComponent={setStatForm}/>
            <h3>{`Wybrane wojewódtwo: ${statForm.info.voivodeship}`}</h3>        
            <button onClick={()=>{getData(setDataForStats)}}>Get data</button>   
        </div>
    )
}
export default  StatisticForm