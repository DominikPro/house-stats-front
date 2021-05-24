const findData =(year, voivodeship, dataForStats)=>{
    let filtredData = 0
if(year !== "" || voivodeship !==""){
  
    filtredData = dataForStats.filter((item)=>{
        console.log(item.year)
        console.log(item.voivodeship)

       return( 
       item.year === year &&
       item.voivodeship === voivodeship)
       
   })
}
console.log(filtredData)
}
export default findData;

 //https://www.geeksforgeeks.org/how-to-filter-object-array-based-on-attributes/