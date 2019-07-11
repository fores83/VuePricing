<template>
    <div>
        <b-form ref="form" method="post" v-model="data.valid" v-on:submit.prevent="onSubmit">

            <b-form-group>
                <b-form-checkbox v-model="data.checkbox">Use CMS</b-form-checkbox>
            </b-form-group>

            <h3 class="text-center">2. Select a payment method:</h3>

            <b-row class="p-md-4 mx-md-4">
                <div class="paymentBtn text-center">
                    <button
                        class="selectPaymentBtn ma-2"
                        alt="Check out with Stripe"
                        @click="selectStripe()">
                        <img class="btnImage" src="../assets/img/powered-by-stripe-300x139.png">
                    </button>
                </div>
                <div class="paymentBtn text-center">
                    <div id="paypal-button-container" class="selectPaymentBtn1 ma-2" @click="data.paymentMethod = 'paypal' " alt="Check out PayPal"></div>
                </div>
            </b-row>
            <div v-show="data.paymentMethod == 'stripe'" id="payment">
                <div class="container" style="margin:25px 0px;padding:0px;">
                    <div class='row'>
                        <div class='col'>
                            <div class="cell example example2" id="example-2">
                                <form style="width:100%;">
                                    <div class="progress">
                                        <div class="circle" v-show="data.paymentStep == 0">
                                            <span class="label"><i class="fa fa-address-card"></i></span>
                                            <span class="title" style="margin-left: 0;">Address</span>
                                        </div>
                                        <div class="circle active" v-show="data.paymentStep == 1">
                                            <span class="label"><i class="fa fa-address-card"></i></span>
                                            <span class="title" style="margin-left: 0;">Address</span>
                                        </div>
                                        <div class="circle done" v-show="data.paymentStep > 1">
                                            <span class="label"><i class="fa fa-address-card"></i></span>
                                            <span class="title" style="margin-left: 0;">Address</span>
                                        </div>
                                        <span class="bar done"></span>
                                        <div class="circle" v-show="data.paymentStep < 2">
                                            <span class="label"> <i class="fa fa-cc-stripe"></i> </span>
                                            <span class="title1">Payment</span>
                                        </div>
                                        <div class="circle active" v-show="data.paymentStep == 2">
                                            <span class="label"><i class="fa fa-cc-stripe"></i></span>
                                            <span class="title1">Payment</span>
                                        </div>
                                        <div class="circle done" v-show="data.paymentStep > 2">
                                            <span class="label"><i class="fa fa-cc-stripe"></i></span>
                                            <span class="title1">Payment</span>
                                        </div>

                                        <span class="bar done"></span>
                                        <div class="circle" v-show="data.paymentStep < 3">
                                            <span class="label"> <i class="fa fa-check"></i> </span>
                                            <span class="title1">Confirm</span>
                                        </div>
                                        <div class="circle active" v-show="data.paymentStep == 3">
                                            <span class="label"><i class="fa fa-check"></i></span>
                                            <span class="title1">Confirm</span>
                                        </div>
                                        <div class="circle done" v-show="data.paymentStep > 3">
                                            <span class="label"><i class="fa fa-check"></i></span>
                                            <span class="title1">Confirm</span>
                                        </div>
                                    </div>
                                    <div class = "row">
                                        <div class="half-width field" v-show="data.paymentStep > 0">
                                            <input ref="email" id="example2-email" data-tid="elements_examples.form.email_placeholder" class="input empty" type="email" placeholder="john@smith.com" required="true" autocomplete="email-line1">
                                            <label for="example2-email" data-tid="elements_examples.form.email_label">Email</label>
                                            <div class="baseline"></div>
                                        </div>
                                        <div class="half-width field" v-show="data.paymentStep > 0">
                                        <input ref="email2" id="example2-email2" data-tid="elements_examples.form.email_placeholder" class="input empty" type="email" placeholder="john@smith.com" required="true" autocomplete="email-line1">
                                        <label for="example2-email2" data-tid="elements_examples.form.email_label">Confirm Email</label>
                                        <div class="baseline"></div>
                                    </div>
                                    </div>
                                    <div data-locale-reversible>
                                        <div class="row">
                                            <div class="field" v-show="data.paymentStep > 0">
                                                <input id="example2-address" data-tid="elements_examples.form.address_placeholder" class="input empty" type="text" placeholder="185 Berry St" required="" autocomplete="address-line1">
                                                <label for="example2-address" data-tid="elements_examples.form.address_label">Address1</label>
                                                <div class="baseline"></div>
                                            </div>
                                            <div class="field" v-show="data.paymentStep > 0">
                                                <input id="example2-address2" data-tid="elements_examples.form.address_placeholder" class="input empty" type="text" placeholder="185 Berry St" autocomplete="address-line2">
                                                <label for="example2-address2" data-tid="elements_examples.form.address_label">Address2</label>
                                                <div class="baseline"></div>
                                            </div>
                                        </div>
                                        <div class="row" data-locale-reversible v-show="data.paymentStep > 0">
                                            <div class="field quarter-width">
                                                <input id="example2-city" data-tid="elements_examples.form.city_placeholder" class="input empty" type="text" :placeholder="getFormPlaceholder('city')" required="" autocomplete="address-level2">
                                                <label for="example2-city" data-tid="elements_examples.form.city_label">City</label>
                                                <div class="baseline"></div>
                                            </div>
                                            <div class="field quarter-width">
                                                <input id="example2-state" data-tid="elements_examples.form.state_placeholder" class="input empty" type="text" :placeholder="getFormPlaceholder('state')" required="" autocomplete="address-level1">
                                                <label for="example2-state" data-tid="elements_examples.form.state_label">{{state}}</label>
                                                <div class="baseline"></div>
                                            </div>
                                            <div class="field quarter-width">
                                                <input 
                                                id="example2-zip"
                                                data-tid="elements_examples.form.postal_code_placeholder"
                                                class="input empty" type="text" :placeholder="getFormPlaceholder('zip')" required="" autocomplete="postal-code">
                                                <label for="example2-zip" data-tid="elements_examples.form.postal_code_label">{{zip}}</label>
                                                <div class="baseline"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row" v-show="data.paymentStep > 0">
                                        <div class="field disable-margin-field">
                                            <b-form-group class="disable-margin-form">
                                                <b-form-select
                                                    class="form-control payment-form-select"
                                                    id="exampleFormControlSelect1"
                                                    v-model="currency.country"
                                                    :rules="data.requiredRules"
                                                    :options="formattedCountriesList"
                                                    v-on:change= "changeCountry"
                                                ></b-form-select>
                                            </b-form-group>
                                        </div>
                                        <div class="field disable-margin-field">
                                            <b-form-group class="disable-margin-form">
                                                <b-form-select
                                                    class="form-control payment-form-select"
                                                    id="exampleFormControlSelect2"
                                                    v-model="currency.currency_code"
                                                    :rules="data.requiredRules"
                                                    :options="formattedCurrenciesList"
                                                ></b-form-select>
                                            </b-form-group>
                                        </div>
                                    </div>
                                    <div class="row" v-show="data.paymentStep > 1">
                                        <div class="field">
                                        <div id="example2-card-number" class="input empty"></div>
                                        <label for="example2-card-number" data-tid="elements_examples.form.card_number_label">Card number</label>
                                        <div class="baseline"></div>
                                        </div>
                                    </div>
                                    <div class="row" v-show="data.paymentStep > 1">
                                        <div class="field half-width">
                                        <div id="example2-card-expiry" class="input empty"></div>
                                        <label for="example2-card-expiry" data-tid="elements_examples.form.card_expiry_label">Expiration</label>
                                        <div class="baseline"></div>
                                        </div>
                                        <div class="field quarter-width">
                                        <div id="example2-card-cvc" class="input empty"></div>
                                        <label for="example2-card-cvc" data-tid="elements_examples.form.card_cvc_label">CVC</label>
                                        <div class="baseline"></div>
                                        </div>
                                    </div>
                                    <button v-if="data.paymentStep < 2" :disabled="!data.valid" @click="nextStep()">Continue</button>
                                    
                                    <button v-show="data.paymentStep === 2" type="submit" id="submit-payment" :disabled="!data.valid" data-tid="elements_examples.form.pay_button">Pay {{ getTotalPrice }} {{currency.currency_code}}</button>
                                    <div class="error" role="alert">
                                        <span class="message"></span>
                                    </div>
                                </form>
                                <div class="success">
                                    <h3 class="title" data-tid="elements_examples.success.title"></h3>
                                    <p class="message"><span data-tid="elements_examples.success.message"></span><span class="token"></span></p>
                                    <a class="reset" href="#">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-form>
    </div>
</template>
<style lang = "css" scoped>
    .paymentBtn{
        width: 50%;
    }
    @media only screen and (max-width: 600px) {
        .paymentBtn{
            margin-top: 10px;
            width: 100%;
        }
        button.selectPaymentBtn,div.selectPaymentBtn1{
            width: 100px;
        }
    }
</style>

<script>
    let stripe = Stripe(`pk_test_IqpBIzfunf07364j2zZX098r`);
    let form;
    import $ from "jquery";
    export default {
        name: 'SimpleForm', 
        props: ['data', 'iteminfo', 'currency', 'totalPrice'],
        data(){
            return{
                paymentError:false,
                state:'State',
                zip:'ZIP',
                countriesList: [
                    {country: 'Australia', code: 'AU'},
                    {country: 'Austria', code: 'AT'},
                    {country: 'Belgium', code: 'BE'},
                    {country: 'Brazil ', code: 'BR'},
                    {country: 'Canada', code: 'CA'},
                    {country: 'Denmark', code: 'DK'},
                    {country: 'Finland', code: 'FI'},
                    {country: 'France', code: 'FR'},
                    {country: 'Germany', code: 'DE'},
                    {country: 'Hong Kong', code: 'HK'},
                    {country: 'Ireland', code: 'IE'},
                    {country: 'Japan', code: 'JP'},
                    {country: 'Luxembourg', code: 'LU'},
                    {country: 'Mexico ', code: 'MX'},
                    {country: 'Netherlands', code: 'NL'},
                    {country: 'New Zealand', code: 'NZ'},
                    {country: 'Norway', code: 'NO'},
                    {country: 'Singapore', code: 'SG'},
                    {country: 'Spain', code: 'ES'},
                    {country: 'Sweden', code: 'SE'},
                    {country: 'Switzerland', code: 'CH'},
                    {country: 'United Kingdom', code: 'GB'},
                    {country: 'United States', code: 'US'},
                    {country: 'Italy', code: 'IT'},
                    {country: 'Portugal', code: 'PT'}
                ],
                currenciesList: [
                    'AUD',
                    'BGN',
                    'BRL',
                    'CAD',
                    'CHF',
                    'CNY',
                    'CZK',
                    'DKK',
                    'EUR',
                    'GBP',
                    'HKD',
                    'HRK',
                    'HUF',
                    'IDR',
                    'ILS',
                    'INR',
                    'ISK',
                    'JPY',
                    'KRW',
                    'MXN',
                    'MYR',
                    'NOK',
                    'NZD',
                    'PHP',
                    'PLN',
                    'RON',
                    'RUB',
                    'SEK',
                    'SGD',
                    'THB',
                    'TRY',
                    'USD',
                    'ZAR',
                ],
            }
        },
        computed: {
            calculatedCurrency() {
                return Math.ceil(this.iteminfo.price * this.currency.exchangeRate);
            },
            getTotalPrice(){
                return Math.ceil(this.totalPrice * this.currency.exchangeRate);
            },
            formattedCountriesList() {
                return this.countriesList.map(country => ({
                    value: country.country,
                    text: country.country
                }));
            },
            formattedCurrenciesList() {
                return this.currenciesList.map(currency => ({
                    value: currency,
                    text: currency
                }));
            }
        },
        mounted(){
            this.getCountry();
            var elements = stripe.elements({
                fonts: [
                    {
                        cssSrc: 'https://fonts.googleapis.com/css?family=Source+Code+Pro',
                    },
                ],
                // Stripe's examples are localized to specific languages, but if
                // you wish to have Elements automatically detect your user's locale,
                // use `locale: 'auto'` instead.
                locale: window.__exampleLocale
            });


    // Floating labels
            var inputs = document.querySelectorAll('.cell.example.example2 .input');
            Array.prototype.forEach.call(inputs, function(input) {
                input.addEventListener('focus', function() {
                input.classList.add('focused');
                });
                input.addEventListener('blur', function() {
                input.classList.remove('focused');
                });
                input.addEventListener('keyup', function() {
                if (input.value.length === 0) {
                    input.classList.add('empty');
                } else {
                    input.classList.remove('empty');
                }
                });
            });

            var elementStyles = {
                base: {
                color: '#32325D',
                fontWeight: 500,
                fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
                fontSize: '16px',
                fontSmoothing: 'antialiased',

                '::placeholder': {
                    color: '#CFD7DF',
                },
                ':-webkit-autofill': {
                    color: '#e39f48',
                },
                },
                invalid: {
                color: '#E25950',

                '::placeholder': {
                    color: '#FFCCA5',
                },
                },
            };

            var elementClasses = {
                focus: 'focused',
                empty: 'empty',
                invalid: 'invalid',
            };

            var cardNumber = elements.create('cardNumber', {
                style: elementStyles,
                classes: elementClasses,
            });
            cardNumber.mount('#example2-card-number');

            var cardExpiry = elements.create('cardExpiry', {
                style: elementStyles,
                classes: elementClasses,
            });
            cardExpiry.mount('#example2-card-expiry');

            var cardCvc = elements.create('cardCvc', {
                style: elementStyles,
                classes: elementClasses,
            });
            cardCvc.mount('#example2-card-cvc');

            this.registerElements([cardNumber, cardExpiry, cardCvc], 'example2');
        },

        methods:{
            changeCountry(country){
                if (country === 'United Kingdom') {
                    this.state = 'Region';
                    this.zip = 'Postcode';
                }
                else{
                    this.state = 'State';
                    this.zip = 'ZIP';
                }
            },
            getFormPlaceholder(type){
                let result = '';
                switch (type){
                    case 'city':
                        result = 'San Francisco';
                        if(this.currency.country=='United Kingdom'){
                            result = 'Dumfries';
                        }
                    break;
                    case 'zip':
                        result = '94107';
                        if(this.currency.country=='United Kingdom'){
                            result = 'DG1 3QH';
                        }
                    break;
                    case 'state':
                        result = 'CA';
                        if(this.currency.country=='United Kingdom'){
                            result = 'Dumfries and Galloway';
                        }
                    break;
                }

                return result;
            },

            selectStripe() {
                // if (!this.isValidEmail(this.data.email)) return;
                this.data.paymentMethod = 'stripe';
                // this.data.paymentStep = 1;
                setTimeout(function () {
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#payment").offset().top
                    }, 1000);
                }, 200)
            },
            nextStep:function(){ 
                this.data.paymentStep ++;
            },
            enableInputs() {
                Array.prototype.forEach.call(
                    form.querySelectorAll(
                        "input[type='text'], input[type='email'], input[type='tel']"
                    ),
                    function(input) {
                        input.removeAttribute('disabled');
                    }
                );
            },
            disableInputs() {
                Array.prototype.forEach.call(
                    form.querySelectorAll(
                        "input[type='text'], input[type='email'], input[type='tel']"
                    ),
                    function(input) {
                        input.setAttribute('disabled', 'true');
                    }
                );
            },
            triggerBrowserValidation() {
                // The only way to trigger HTML5 form validation UI is to fake a user submit
                // event.
                var submit = document.createElement('input');
                submit.type = 'submit';
                submit.style.display = 'none';
                form.appendChild(submit);
                submit.click();
                submit.remove();
            },
            registerElements(elements, exampleName) {
                var formClass = '.' + exampleName;
                var example = document.querySelector(formClass);
                form = example.querySelector('form');
                var resetButton = example.querySelector('a.reset');
                var error = form.querySelector('.error');
                var errorMessage = error.querySelector('.message');
                // Listen for errors from each Element, and show error messages in the UI.
                var savedErrors = {};
                elements.forEach(function(element, idx) {
                    element.on('change', function(event) {
                        if (event.error) {
                            error.classList.add('visible');
                            savedErrors[idx] = event.error.message;
                            errorMessage.innerText = event.error.message;
                        } else {
                            savedErrors[idx] = null;

                            // Loop over the saved errors and find the first one, if any.
                            var nextError = Object.keys(savedErrors)
                                .sort()
                                .reduce(function(maybeFoundError, key) {
                                    return maybeFoundError || savedErrors[key];
                                }, null);

                            if (nextError) {
                                // Now that they've fixed the current error, show another one.
                                errorMessage.innerText = nextError;
                            } else {
                                // The user fixed the last error; no more errors.
                                error.classList.remove('visible');
                            }
                        }
                    });
                });
                // Listen on the form's 'submit' handler...
                form.addEventListener('submit', (e) => {
                    e.preventDefault();

                    // Trigger HTML5 validation UI on the form if any of the inputs fail
                    // validation.
                    var plainInputsValid = true;
                    Array.prototype.forEach.call(form.querySelectorAll('input'), function(
                        input
                    ) {
                        if (input.checkValidity && !input.checkValidity()) {
                            plainInputsValid = false;
                            return;
                        }
                    });
                    if (!plainInputsValid) {
                        this.triggerBrowserValidation();
                        return;
                    }

                    // Show a loading screen...
                    example.classList.add('submitting');

                    // Disable all inputs.
                    this.disableInputs();

                    // Gather additional customer data we may have collected in our form.
                    var name = form.querySelector('#' + exampleName + '-name');
                    var email = form.querySelector('#' + exampleName + '-email');
                    var address1 = form.querySelector('#' + exampleName + '-address');
                    var address2 = form.querySelector('#' + exampleName + '-address2');
                    var city = form.querySelector('#' + exampleName + '-city');
                    var state = form.querySelector('#' + exampleName + '-state');
                    var zip = form.querySelector('#' + exampleName + '-zip');
                    var additionalData = {
                        name: name ? name.value : undefined,
                        email: email ? email.value : undefined,
                        address_country: this.currency ? this.currency.country : undefined,
                        address_line1: address1 ? address1.value : undefined,
                        address_line2: address2 ? address2.value : undefined,
                        address_city: city ? city.value : undefined,
                        address_state: state ? state.value : undefined,
                        address_zip: zip ? zip.value : undefined,
                    };
                    this.data.location = this.currency ? this.currency.county : undefined,

                    // Use Stripe.js to create a token. We only need to pass in one Element
                    // from the Element group in order to create a token. We can also pass
                    // in the additional customer data we collected in our form.
                    stripe.createToken(elements[0], additionalData).then((result) => {
                        // Stop loading!
                        example.classList.remove('submitting');

                        if (result.token) {
                            // If we received a token, show the token ID.
                            this.processPayment();
                            example.classList.add('submitted');
                        } else {
                            // Otherwise, un-disable inputs.
                            this.enableInputs();
                        }
                    });
                });

                resetButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    // Resetting the form (instead of setting the value to `''` for each input)
                    // helps us clear webkit autofill styles.
                    form.reset();

                    // Clear each Element.
                    elements.forEach(function(element) {
                        element.clear();
                    });

                    // Reset error state as well.
                    error.classList.remove('visible');

                    // Resetting the form does not un-disable inputs, so we need to do it separately:
                    component.enableInputs();
                    example.classList.remove('submitted');
                });
            },
            onSubmit(){
            console.log("stop preventing form submit",this.data, this.currency);
            },
            getCountry: function() {
                let url = "https://api.ipdata.co/?api-key=d57e698daff46ce6a387a558e7b3848fdb914b887d55239401e0efec";
                this.$axios
                    .get(url)
                    .then(response => {
                        console.log(response, 'response');
                        var country = response.data.country_name;
                        const countryIncluded = this.countriesList.find(el => el.country === country);
                        const currencyIncluded = this.currenciesList.find(el => el === response.data.currency.code);
                        if (countryIncluded) {
                            this.currency.country = response.data.country_name;
                        } else {
                            this.currency.country = 'United States';
                        }

                        if (currencyIncluded) {
                            this.currency.currency_code = currencyIncluded;
                        } else {
                            this.currency.currency_code = "GBP";
                        }
                        if (country === 'United Kingdom') {
                            this.state = 'Region';
                            this.zip = 'Postcode';
                        }
                    })
                    .catch(error => console.log(error));
            },
            isValidEmail: function(email) {
                var re =
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            processPayment(token) {
                this.data.errorMsg = null;
                this.data.loading = true;
                this.$axios.post('https://order.brigado.co.uk/payment/stripe', {
                    stripeToken: token,
                    stripeEmail: this.email
                }, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then((response) => {
                    console.log('Successful', response);
                    //success:
                    this.paymentError = false;
                    this.data.paymentBooleanStatus = true;
                    this.data.afterPaymentForm = true;
                    this.data.loading = false;
                })
                .catch(function(error) {
                    console.log('ERRRRRRRRRR', error);
                    this.data.paymentBooleanStatus = false;
                    this.paymentError = true;
                    this.data.loading = false;
                });
            },
        }
    }
</script>
