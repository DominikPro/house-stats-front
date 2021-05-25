import React, { useState, useEffect } from "react";

const StatsGenerator = (props) => {
    const filtredData = props.filtredData;
    const [averageCost, setAverageCost] = useState(0);
    const [averageSize, setAverageSize] = useState(0);
  


    return (
        <div>
            <h2>{`Dane na podstawie ${filtredData.length} raportów`}</h2>
            {/* <h3>{`Średnia powierzchnia bodowanego domu ${xx} m2`}</h3>
            <h3>{`Średni koszt budowy dla ${xx}`}</h3> */}
        </div>
    );
};
export default StatsGenerator;
