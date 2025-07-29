import React from 'react'

function Weather() {

const data = {"location":{"city":"Chennai","region":"Tamil Nadu","woeid":"2295424","country":"India","lat":"13.0594","long":"80.2457","timezone_id":"Asia/Kolkata"},"current_observation":{"pubDate":1750705007,"wind":{"chill":93,"direction":"West","speed":14},"atmosphere":{"humidity":66,"visibility":10,"pressure":1004.1},"astronomy":{"sunrise":"5:44 AM","sunset":"6:38 PM"},"condition":{"temperature":88,"text":"Cloudy","code":26}},"forecasts":[{"day":"Tue","date":1750694400,"high":96,"low":83,"text":"Cloudy","code":26},{"day":"Wed","date":1750780800,"high":95,"low":82,"text":"Showers","code":11},{"day":"Thu","date":1750867200,"high":97,"low":82,"text":"Showers","code":11},{"day":"Fri","date":1750953600,"high":98,"low":81,"text":"Mostly Cloudy","code":28},{"day":"Sat","date":1751040000,"high":97,"low":81,"text":"Partly Cloudy","code":30},{"day":"Sun","date":1751126400,"high":97,"low":82,"text":"Cloudy","code":26},{"day":"Mon","date":1751212800,"high":98,"low":83,"text":"Mostly Cloudy","code":28},{"day":"Tue","date":1751299200,"high":97,"low":82,"text":"Partly Cloudy","code":30},{"day":"Wed","date":1751385600,"high":97,"low":81,"text":"Mostly Cloudy","code":28},{"day":"Thu","date":1751472000,"high":99,"low":82,"text":"Showers","code":11},{"day":"Fri","date":1751558400,"high":98,"low":81,"text":"Cloudy","code":26}]}


  //---------Weather API-------------------

document.getElementById('weather_city').innerHTML = data.location.city;
document.getElementById('city_temp').innerHTML = data.current_observation.condition.temperature + ' &deg;F';
document.getElementById('text').innerHTML = data.current_observation.condition.text;
document.getElementById('location').innerHTML = data.location.region + "," + data.location.country;


  return (
    <div>
          <header class="head"> 
            <div class="logo"><h2 >Weather App</h2>

            </div>
            
            
            <div class="head_icons">
                 
             <a href="#" id = 'refresh_btn'><i class="fa fa-refresh"></i></a>

            </div>
        </header>

            <section class="main_section">
                <div class="left_section">
                        <div class="weather_api">
                            <h2 id="weather_city"> City Name</h2>
                            <div class="temp">
                                <h3 id="city_temp">25 <span>&deg;F</span></h3>
                                <p id="text">Text</p>
                            </div>
                            <h4 id="location">City</h4>

                        </div>
                </div>

                <div class="right_section">
                    <div class="gallery"></div>
                    <div class="top_stories"></div>
                    <div class="api_3"></div>
                </div>

            </section>

    </div>
  )
}

export default Weather