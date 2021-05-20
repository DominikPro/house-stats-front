import  axios from "axios"

const getData =(setDataForStats)=>{
     axios(
        axios.get('http://localhost:3000/costs')
        .then(res=>{
           setDataForStats(res.data)
            console.log(res.data)
        })
    )
   
} 
export default getData

