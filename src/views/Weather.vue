<template>
  <div>
    {{currentTemp}} °C  <img class="icon" :src="icon">
    <img class="icon weather-smile" :src=smileIcon alt="">
    {{overcast}}
  </div>
</template>

<script>
export default {
  name: 'Weather', 
  data () {
    return {
      currentTemp: '',
      minTemp: '',
      maxTemp: '',
      sunrise: '',
      sunset: '',
      pressure: '',
      humidity: '',
      wind: '',
      overcast: '',
      icon: '',
      smileIcon: ''
    }
  },
  mounted() {
      let url =
              "https://api.openweathermap.org/data/2.5/weather?q=Dumfries&units=metric&APPID=6bd2eb4abbf3be609a0f69e1e446ddac";
          this.$axios
              .get(url)
              .then(response => {
                  this.currentTemp = response.data.main.temp;
                  this.minTemp = response.data.main.temp_min;
                  this.maxTemp = response.data.main.temp_max;
                  this.pressure = response.data.main.pressure;
                  this.humidity = response.data.main.humidity + '%';
                  this.wind = response.data.wind.speed + 'm/s';
                  this.overcast = response.data.weather[0].description;
                  this.icon = "../../static/img/" + response.data.weather[0].icon.slice(0, 2) + ".svg";
                  this.sunrise = new Date(response.data.sys.sunrise * 1000).toLocaleTimeString("en-GB").slice(0, 4);
                  this.sunset = new Date(response.data.sys.sunset * 1000).toLocaleTimeString("en-GB").slice(0, 4);
                  // get smiley src
                  if(this.currentTemp<=5){
                      this.smileIcon = "../../static/img/weather/cold.svg"
                  }else if(this.currentTemp>5 && this.currentTemp<12){
                      this.smileIcon = "../../static/img/weather/good.svg"
                  }else if(this.currentTemp>12 && this.currentTemp<20){
                      this.smileIcon = "../../static/img/weather/happy.svg"
                  }else if(this.currentTemp>=20){
                      this.smileIcon = "../../static/img/weather/hot.svg"
                  }

                  if(response.data.weather.main=='Rain'){
                      this.smileIcon = "../../static/img/weather/cold.svg"
                  }
              })
              .catch(error => {
                  console.log(error);
              });
  },
}
</script>
