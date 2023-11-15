// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const headEl = document.getElementById("weather-head");
headEl.innerText = 'February 10 Weather Forecast, Seattle';


// Change the styling of every element with class "sun" to set the color to "orange"
const sunnyDays = document.querySelectorAll('.sun');
sunnyDays.forEach(sunElement => sunElement.style.color = 'orange');

// // Change the class of the second <li> from to "sun" to "cloudy"
// <li class="cloudy">Tuesday</li>
const sunDays = document.querySelectorAll(".sun");
sunDays[1].classList.remove('sun');
sunDays[1].classList.add('cloudy');