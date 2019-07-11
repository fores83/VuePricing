<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import anime from 'animejs';
  const logoAnimation = anime.timeline({
          autoplay: true,
          delay: 200
  });
export default {
  name: 'App',
  methods:{
            runAnimation: function(){
                logoAnimation.add({
                    targets: '.logo',
                    translateY: [-100, 0],
                    opacity: [0, 1],
                    elasticity: 600,
                    duration: 1000
                }).add({
                    targets: '.titletext',
                    rotate: [-90, 0],
                    duration: 1200,
                    elasticity: 600,
                    offset: 2750
                }).add({
                    // targets: '.letterB',
                    scale: [0, 1],
                    fill: "#fff",
                    duration: 1200,
                    elasticity: 600,
                    offset: 500
                }).add({
                    targets: '#logo-mask',
                    scale: [0, 1],
                    duration: 1000,
                    elasticity: 600,
                    offset: 550
                }).add({
                    targets: '.flag',
                    translateX: ['-100%', 0],
                    opacity: [0, 1],
                    duration: 1000,
                    easing: 'easeOutExpo',
                    offset: 1000
                })

            }
        },
        mounted(){
            this.runAnimation();
        }

}
</script>
<style lang="css">
  @import "./assets/css/landing-page.css";
  @import "./assets/vendor/fontawesome-free/css/all.min.css";
  @import "https://unpkg.com/bootstrap/dist/css/bootstrap.min.css";
  @import "https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css";
  @import "./assets/vendor/simple-line-icons/css/simple-line-icons.css";
  @import "https://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css";
  @import "https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic|Righteous";
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
    
          label {
            margin: 0 !important;
        }

        .flex {
            padding: 12px !important;
        }

    </style>

<style type="text/css">

  .example.example2 {
    background-color: #fff;
  }
  
.example.example2 * {
 /* font-family: Source Code Pro, Consolas, Menlo, monospace;*/
  font-size: 16px;
  font-weight: 500;
}

.example.example2 .row {
  display: -ms-flexbox;
  display: flex;
  margin: 0 5px 10px;
}

.example.example2 .field {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0 10px;
}


.example.example2 .field.quarter-width {
  width: calc(25% - 10px);
}
.example.example2 .field.half-width {
  width: calc(50% - 20px);
}

@media only screen and (max-width: 600px) {
  .example.example2 .field.quarter-width {
    width: 100%;
  }
  .example.example2 .field.half-width {
    width: 100%;
  }
}

.example.example2 .baseline {
  position: absolute;
  width: 100%;
  height: 1px;
  left: 0;
  bottom: 0;
  background-color: #cfd7df;
  transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 label {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 8px;
  color: #cfd7df;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transform-origin: 0 50%;
  cursor: text;
  transition-property: color, transform;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding-bottom: 7px;
  color: #32325d;
  background-color: transparent;
}

.example.example2 .input::-webkit-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input::-moz-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input:-ms-input-placeholder {
  color: transparent;
  transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.example.example2 .input.StripeElement {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  will-change: opacity;
}

.example.example2 .input.focused,
.example.example2 .input:not(.empty) {
  opacity: 1;
}

.example.example2 .input.focused::-webkit-input-placeholder,
.example.example2 .input:not(.empty)::-webkit-input-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused::-moz-placeholder,
.example.example2 .input:not(.empty)::-moz-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused:-ms-input-placeholder,
.example.example2 .input:not(.empty):-ms-input-placeholder {
  color: #cfd7df;
}

.example.example2 .input.focused + label,
.example.example2 .input:not(.empty) + label {
  color: #aab7c4;
  transform: scale(0.85) translateY(-25px);
  cursor: default;
}

.example.example2 .input.focused + label {
  color: #24b47e;
}

.example.example2 .input.invalid + label {
  color: #ffa27b;
}

.example.example2 .input.focused + label + .baseline {
  background-color: #24b47e;
}

.example.example2 .input.focused.invalid + label + .baseline {
  background-color: #e25950;
}

.example.example2 input, .example.example2 button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  border-style: none;
}

.example.example2 input:-webkit-autofill {
  -webkit-text-fill-color: #e39f48;
  transition: background-color 100000000s;
  -webkit-animation: 1ms void-animation-out;
}

.example.example2 .StripeElement--webkit-autofill {
  background: transparent !important;
}

.example.example2 input, .example.example2 button {
  -webkit-animation: 1ms void-animation-out;
}

.example.example2 button {
  display: block;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: #24b47e;
  border-radius: 4px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

.example.example2 .error svg {
  margin-top: 0 !important;
}

.example.example2 .error svg .base {
  fill: #e25950;
}

.example.example2 .error svg .glyph {
  fill: #fff;
}

.example.example2 .error .message {
  color: #e25950;
}

.example.example2 .success .icon .border {
  stroke: #abe9d2;
}

.example.example2 .success .icon .checkmark {
  stroke: #24b47e;
}

.example.example2 .success .title {
  color: #32325d;
  font-size: 16px !important;
}

.example.example2 .success .message {
  color: #8898aa;
  font-size: 13px !important;
}

.example.example2 .success .reset path {
  fill: #24b47e;
}

  .weather-smile{
      height: 60px;
      margin-top: -5px;
      margin-left: -15px;
  }
  @media only screen and (max-width: 600px) {
      .weather-smile{
          height: 60px;
      }
  }

  .slider {
      -webkit-appearance: none;
      width: 100%;
      height: 2px;
      background: #d3d3d3;
      outline: none;
      opacity: 0.7;
      -webkit-transition: .2s;
      transition: opacity .2s;
  }

  .slider-container .slider:hover {
      opacity: 1;
  }

  .slider-container .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 80px;
      height: 30px;
      border-radius: 20px;
      background: #3498db;
      cursor: pointer;
  }

  .slider-container .slider::-moz-range-thumb {
      width: 80px;
      height: 30px;
      border-radius: 20px;
      background: #3498db;
      cursor: pointer;
  }

    .popover{
        white-space: pre;
        max-width: 500px;
    }
</style>
