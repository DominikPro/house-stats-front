import React, {useState, useEffect} from 'react'
import VoivodeshipInput from "../Shared/VoivodeshipInput"
import YearInput from '../Shared/YearInput'
import getData from "../../actions/getData"
import findData from "../../actions/findData"
import { voivodships, year } from '../CostForm/dataForm'
import StatsGenerator  from "../GenerateStats/StatsGenerator"

const  StatisticForm=()=> {
    const [dataForStats, setDataForStats] = useState([])
    const [selectedData, setSelectedData] = useState([])
  

    const  [statForm, setStatForm]= useState(
        {
            info: {
              id: "",
              year: "",
              voivodeship: "",
            }
          }
    )

    // useEffect(() => {
        
    //     return () => {
    //         console.log("Siema")
    //         // findData(year, voivodships, dataForStats)
    //     };
    // }, [dataForStats])
    

    return (
        <div>
            <YearInput setStateInParentComponent={setStatForm}/>
            <h3>{`Wybrany rok budowy: ${statForm.info.year}`}</h3>
            <VoivodeshipInput setStateInParentComponent={setStatForm}/>
            <h3>{`Wybrane wojewódtwo: ${statForm.info.voivodeship}`}</h3>        
            <button onClick={()=>{getData(setDataForStats)}}>Get data</button>   

            {/* <p>{findData(statForm.info.year, statForm.info.voivodeship, dataForStats)}</p> */}
            <StatsGenerator filtredData={findData(statForm.info.year, statForm.info.voivodeship, dataForStats)}></StatsGenerator>

        </div>
    )
}
export default  StatisticForm