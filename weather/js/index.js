var allDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"] ;
var allMonths = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
var day = new Date();
var searchInput = document.getElementById("search") ;
var resData ;
var api ;

document.getElementById("day").innerHTML = allDays[day.getDay()] ;
document.getElementById("day1").innerHTML = allDays[day.getDay()] ;
document.getElementById("tomorow").innerHTML = allDays[day.getDay() +1] ;
document.getElementById("month").innerHTML = day.getDay() +  allMonths[day.getMonth()] ;

async function getWeather(city="cairo")
{
     api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=80b424102e364ae2a7d215058240301&q=${city}&days=3`);
     resData = await api.json();
    console.log(resData);
    display() ;
}
getWeather()

function display ()
{
   document.querySelector(".location").innerHTML = resData.location.name ;
   document.querySelector(".num").innerHTML = resData.current.temp_c + "<sup>o</sup>c" ;
   document.getElementById("one").innerHTML =resData.current.condition.text ;
   document.getElementById("firstImg").setAttribute("src" , "https:" + resData.current.condition.icon) ;

   document.getElementById("secImg").setAttribute("src" , "https:" + resData.current.condition.icon) ;
   document.getElementById("two-cabital").innerHTML = resData.forecast.forecastday[1].day.maxtemp_c + "<sup>o</sup>c"  ;
   document.getElementById("two-small").innerHTML = resData.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>c" ;
   document.getElementById("two-text").innerHTML =resData.current.condition.text ;

   document.getElementById("thirdPhoto").setAttribute("src" , "https:" + resData.forecast.forecastday[2].day.condition.icon) ;
   document.getElementById("three-capital").innerHTML = resData.forecast.forecastday[2].day.maxtemp_c + "<sup>o</sup>c"  ;
   document.getElementById("three-small").innerHTML = resData.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>c" ;
   document.getElementById("three-text").innerHTML =  resData.forecast.forecastday[2].day.condition.text ;
}

searchInput.addEventListener("input" , function(){
    getWeather(searchInput.value) ;
})
