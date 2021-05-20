import { React, useState, createRef } from "react";
import checkForm from "../../actions/checkForm";
import sendToDB from "../../actions/sendToDB";
import upDateForm from "../../actions/upDateForm.js"
import VoivodeshipInput from "../Shared/VoivodeshipInput"
import YearInput from '../Shared/YearInput'
 
import { year, voivodships, stateOfConstructionOptions, workOrderLevel } from "./dataForm";

const CostForm = () => {
  const [emptyFormData, setEmptyFormData] = useState({
    info: {
      id: "",
      year: "",
      voivodeship: "",
      workStage: "",
      workOrderLevel: "",
      houseArea: 0,
      constructionCost: 0,
    }
  })
  const [formData, setFormData] = useState({
    info: {
      id: "",
      year: "",
      voivodeship: "",
      workStage: "",
      workOrderLevel: "",
      houseArea: 0,
      constructionCost: 0,
    },
  });

  const yearInput = createRef();
  const voivodeshipInput = createRef();
  const workStageInpiut = createRef();
  const workLevelInput = createRef();
  const houseAreaInput = createRef();
  const constructionCostInput = createRef();

  const checkRadio = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      info: {
        ...prevState.info,
        [e.target.name]: e.target.value,
      },
    }));
    console.log(formData);
  };


  return (
    <>
      <div>
        <h3>Rok rozpoczecia budowy {formData.info.year}</h3>
        <YearInput setStateInParentComponent={setFormData}/>
      </div>

      <div>
        <h3>
          Województwo gdzie prowadzona jest inwestycja{" "}
          {formData.info.voivodeship}
        </h3>
        <VoivodeshipInput setStateInParentComponent={setFormData}/>
      </div>

      <div>
        <h3>Stan robót</h3>

        {stateOfConstructionOptions.map((item) => {
          return (
            <div>
              <label onClick={(e) => checkRadio(e)} for={"workStage"}>
                {item}
                <input
                  key={item.workStage}
                  name={"workStage"}
                  type="radio"
                  value={item}
                  ref={workStageInpiut}
                ></input>
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Poziom zlecanych prac</h3>
        {workOrderLevel.map((item) => {
          return (
            <div>
              <label key={"workOrderLevel"} for={"workLevel"}>
                {item}
                <input
                  onClick={(e) => checkRadio(e)}
                  name={"workOrderLevel"}
                  type="radio"
                  value={item}
                  ref={workLevelInput}
                  key={item.workOrderLevel}
                />
              </label>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Całkowita powierzchnia domu - wraz z garażem i piwnicą</h3>
        <input
          onChange={(e) => upDateForm(e, houseAreaInput, setFormData)}
          type="number"
          step="1"
          placeholder="powierzchnia budynku"
          name={"houseArea"}
          ref={houseAreaInput}
        />
      </div>

      <div>
        <h3>Całkowity koszt budowy brutto</h3>
        <input
          onChange={(e) => upDateForm(e, constructionCostInput, setFormData)}
          type="number"
          step="1000"
          placeholder="kwota brutto"
          name={"constructionCost"}
          ref={constructionCostInput}
        />
      </div>
      <button onClick={() => { if(checkForm(formData)) sendToDB(formData) }}>Wyślij</button>
    </>
  );
};

export default CostForm;
