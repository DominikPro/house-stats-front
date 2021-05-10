import React from 'react';

 const CostForm =()=> {
    
const voivodships = ["dolnośląskie",
"kujawsko-pomorskie",
"lubelskie",
"lubuskie",
"łódzkie",
"małopolskie",
"mazowieckie",
"opolskie",
"podkarpackie",
"podlaskie",
"pomorskie",
"śląskie",
"świętokrzyskie",
"warmińsko-mazurskie",
"wielkopolskie",
"zachodniopomorskie"]
const stateOfConstructionOptions = ["SSO - stan surowy otwart", "SSZ - stan surowy zamknięty", "DEW - stan deweloperski"]
const workOrderLevel = ["100% - wszystkie prace zostały zlecone", "75% - prac zostało zleconych", "50% - prac zostało zleconych", "25% - prac zostało zleconych", "100% - prac wykonałem samodzielnie" ]


    return(
        <div>
            <form>
                    <div>
                        <h3>Rok rozpoczecia budowy</h3>
                        <input type="text" placeholder="Rok"></input>
                    </div>
                    <div>
                        <h3>Województwo gdzie prowadzona jest inwestycja</h3>
                            <select id = "myList">
                                {voivodships.map(item=>{
                                return <option value = "1">{item.toUpperCase()}</option>
                                })}
                            </select >
                    </div>
                    <div>
                        <h3>Stan robót</h3>
                            {stateOfConstructionOptions.map(item=>{
                                return(
                                <div>
                                    <input type="checkbox" id={item}/>
                                    <label for={item}>{item}}</label>
                                </div>
                                )
                                
                            })}
                    </div>
                    <div>
                        <h3>Poziom zlecanych prac</h3>
                            {workOrderLevel.map(workLevel => {
                                return (
                                <div>
                                    <input name="workorOrd" type="radio" id={workLevel} />
                                    <label for={workLevel} value={workLevel}>{workLevel}</label>
                                </div>
                                )

                            })}
                    </div>
                    <div>
                        <h3>Całkowita powierzchnia domu - wraz z garażem i piwnicą</h3>
                          <input type="text" placeholder="powierzchnia budynku"/> 
                    </div>
                
                    <div>
                        <h3>Całkowity koszt budowy brutto</h3>
                         <input type="text" placeholder="kwota brutto"/> 
                    </div>
                
            </form>
            <button>Wyślij</button>
       </div>

    )

}

export default CostForm;