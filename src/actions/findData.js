const findData =(year, voivodeship, dataForStats)=>{
    let filtredDataForStatsGenerator = 0
if(year !== "" || voivodeship !==""){
    filtredDataForStatsGenerator = dataForStats.filter((item)=>{
       return( 
       item.year === year &&
       item.voivodeship === voivodeship)    
   })
}

console.log(filtredDataForStatsGenerator)
return filtredDataForStatsGenerator;
}
export default findData;

 //https://www.geeksforgeeks.org/how-to-filter-object-array-based-on-attributes/