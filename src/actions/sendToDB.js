import axios from 'axios';
 const sendToDB = (formData)=>{
    axios({
        method: 'post',
        url: 'http://localhost:3000/costs',
        data: formData.info,
      })
        .then((response) => {
          console.log(response)
        }, (error) => console.log(error)
        )
        return alert("Dziękujemy za wypełnienie ankiety")
    }

export default sendToDB;