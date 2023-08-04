 
//  let checkWhether = ()=>{
//  axios.get =('https://api.openweathermap.org/data/2.5/weather?q=islamabad&units=matric&appid=63f86687d03fc8dc10c1d0b47a217a74')
 
//   .then((res)=>{
//         console.log(res); 
//       });
    
 //}

 let apiKey ="63f86687d03fc8dc10c1d0b47a217a74";
 const ApiUrl="https://api.openweathermap.org/data/2.5/weather?units=matric&q=";

 const searchBox = document.querySelector(".search input");
 const searchBtn = document.querySelector(".search button");

 const weatherIcon = document.querySelector(".weather-icon");

async function checkWhether (city){
const response = await fetch( ApiUrl +city+ `&appid=${apiKey}`);
     if (response.status==404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
     }
     else {
         
      var data = await response.json();
   
   
   document.querySelector(".city").innerHTML= data.name;
   document.querySelector(".temp").innerHTML =Math.round (data.main.temp) + "°c";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

   if(data.weather[0].main =="Clouds"){
     weatherIcon.src ="images/clouds.png";
   }
   else if(data.weather[0].main =="clear"){
     weatherIcon.src ="images/clear.png";
   }
   else if(data.weather[0].main =="rain"){
     weatherIcon.src ="images/rain.png";
     
   }
   else if(data.weather[0].main =="Drizzle"){
     weatherIcon.src ="images/.drizzle.png";
   }

   else if(data.weather[0].main == "mist"){
     weatherIcon.src = "images/mist.png";
     }

   
    
   
   
   document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML =Math.round (data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
      weatherIcon.src ="images/clouds.png";
    }
    else if(data.weather[0].main =="clear"){
      weatherIcon.src ="images/clear.png";
    }
    else if(data.weather[0].main =="rain"){
      weatherIcon.src ="images/rain.png";
      
    }
    else if(data.weather[0].main =="Drizzle"){
      weatherIcon.src ="images/.drizzle.png";
    }

    else if(data.weather[0].main == "mist"){
      weatherIcon.src = "images/mist.png";
    }
    document.querySelector(".whether").style.display = "block";
    document.querySelector(".error").style.display = "none";
 }

}

searchBtn.addEventListener("click", ()=>{
 checkWhether(searchBox.value);
   }); 
  