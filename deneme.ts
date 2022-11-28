const axios = require("axios").default;

// Make a request for a user with a given ID


const getir = ()=>{
    let count;
    axios
    .get("http://localhost:3000/message")
    .then(function (response) {
      // handle success
      console.log(response.data);
    });
    count += 1 ;
    console.log("istek atildi" + count)
}

setInterval(getir, 5000)