<template>
    <div>
        <section class="form-section">
            <b-container v-if="!formdates.isPaymentCompleted" class="pt-5 pb-5">
                <h3 v-if="!formdates.paymentBooleanStatus" class="text-center pb-3">1. Choose a package</h3>
                <div class="form">
                    <div class="d-flex flex-column flex-md-row">
                        <button class="price-plan" :class="{'active': currentitem === item.id}" @click="selectProperty(item)" v-for="(item,index) in items" :key="index" data-trigger="hover" data-html="true" data-toggle="popover" data-content="<strong>Title</strong> And here's some amazing content. It's very engaging. Right?">
                                <h3 class="name">{{ item.name }}</h3>
                                <div v-show="item.name == 'Standard'">
                                    <img src="../assets/img/display.png" style="width: 200px"/>
                                </div>
                                <div v-show="item.name != 'Standard'">
                                    <img src="../assets/img/shopping.png" style="width: 200px"/>
                                </div>
                                <h5 class="description">{{ item.description }}</h5>
                                <h5 class="service" v-for="(service, index) in item.services" :key="index">{{ service }}</h5>
                                <div class="spacer"></div>
                                <PriceInfo
                                    v-if="!formdates.paymentBooleanStatus" 
                                    :price="item.price"
                                    :techcost="item.haveTech ? technologiesinfo.price : 0"
                                    :currency="currencyInfo">
                                </PriceInfo>
                            </button>
                    </div>
                    <div class="text-center slider-container">
                        <div style="display: flex; align-items : center;">
                            <button class="btn btn-primary btn-sm" @click="setSlideValue(0)">
                                <i class="fas fa-minus" aria-hidden="true"></i>
                            </button>
                            <input type="range" min="0" max="50" step="5" class="slider" v-model="quantity">
                            <button class="btn btn-primary btn-sm" @click="setSlideValue(1)">
                                <i class="fas fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div>
                            <span><strong>Quantity:</strong> <span>{{quantity}}</span></span>
                            <span><strong>Total:</strong> <span>{{ getPrice() }}</span></span>
                        </div>
    
                    </div>
                    <div class="mx-0 mx-sm-2 mx-md-5" v-if="showtechnology">
                        <TechnologyInfo :iteminfo="technologiesinfo"></TechnologyInfo>
                        <b-tabs content-class="mt-3" justified>
                            <template slot="tabs">
                                    <b-nav-item
                                        v-model="tabTechnologi"
                                        v-for="(technology, index) in technologies" :key="index"
                                        v-bind:active="checkTechnologyActive(technology.id)"
                                        href="#"
                                        @click="selectTechnology(technology)">
                                        {{ technology.name }}
                                    </b-nav-item>
                                </template>
                        </b-tabs>
                    </div>
                    <SimpleForm
                        v-if="headForm" 
                        :data="formdates"
                        :iteminfo="priceinfo"
                        :currency="currencyInfo"
                        :totalPrice ="totalPrice"
                    ></SimpleForm>

                    <AfterPaymentForm
                        v-if="formdates.afterPaymentForm"
                        :currency="currencyInfo"
                        :data="formdates"
                    >
                    </AfterPaymentForm>
                    <MoreDetailPaymentForm 
                        v-if="otherForm" 
                        :data="formdates"
                        :currency="currencyInfo"
                        :technology="technologiesinfo">
                    </MoreDetailPaymentForm>
                </div>
            </b-container>
            <div v-else class="container text-center payment-container" >
                <h5>Your order is underway. We will be in touch shortly.</h5>
                <img src="../assets/logo-2.svg" alt="Successful Order Image"/>
            </div>
        </section>
        <!-- <div class="container text-center">
            <div id="selector">
                <div v-if="orderPlaced">
                    <v-app>
                        <v-content>
<template>
    <div>
        <v-container grid-list-xs>
            <v-layout row wrap justify-center>
                <v-flex xs12 sm10 lg8 xl6>
                    <v-toolbar color="white" light tabs>
                        <v-toolbar-title class="titleText">What do you need?</v-toolbar-title>
                        <template v-slot:extension>
                                                            <v-tabs v-model="tabItem" grow>
                                                                <v-tabs-slider></v-tabs-slider>
                                                                <v-tab v-for="(item,index) in items" :key="index"
                                                                    @click="selectProperty(item)">{{ item.name }}
                                                                </v-tab>
                                                            </v-tabs>
</template>
                                                </v-toolbar>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                    <v-container grid-list-xs>
                                        <v-layout row wrap justify-center>
                                            <v-flex xs12 sm10 lg8 xl6>
                                                <v-card>
                                                    <price-info 
                                                        :price="priceinfo"
                                                        :currency="currencyInfo">
                                                    </price-info>
                                                    <technologi-info 
                                                        :iteminfo="technologiesinfo"
                                                        v-if="showtechnology">
                                                    </technologi-info>
                                                    <v-container grid-list-xs>
                                                        <v-layout row wrap justify-center>
                                                            <v-flex xs12 xl10 class="infoContainer">
                                                                <v-card flat>
                                                                    <v-container grid-list-xs>
                                                                        <v-layout row wrap justify-center>
                                                                            <v-flex xs12 xl10>
                                                                                <div v-if="showtechnology">
                                                                                    <v-tabs                 v-model="tabTechnologi" grow>
                                                                                        <v-tab v-for="(technology,index) in technologies"
                                                                                            :key="index"
                                                                                            @click="selectTechnology(technology)">
                                                                                            {{technology.name}}
                                                                                        </v-tab>
                                                                                    </v-tabs>
                                                                                    <br>
                                                                                </div>
                                                                            </v-flex>
                                                                        </v-layout>
                                                                    </v-container>
                                                                    <SimpleForm
                                                                        v-if="headForm" 
                                                                        :data="formdates"
                                                                        :currency="currencyInfo"
                                                                        :iteminfo="priceinfo"
                                                                    >
                                                                    </SimpleForm>
                                                                    <consultacy-form
                                                                        v-if="consultacyForm"
                                                                        :data="formdates"
                                                                        :currency="currencyInfo"
                                                                        :technology="technologiesinfo"
                                                                    >
                                                                    </consultacy-form>
                                                                    <after-payment-form
                                                                        v-if="formdates.afterPaymentForm"
                                                                        :currency="currencyInfo"
                                                                        :data="formdates">
                                                                    </after-payment-form>
                                                                    <moredetailpayment-form 
                                                                        v-if="otherForm"
                                                                        :data="formdates"
                                                                        :currency="currencyInfo"
                                                                        :technology="technologiesinfo">
                                                                    </moredetailpayment-form>
                                                                </v-card>

                                                            </v-flex>
                                                        </v-layout>
                                                    </v-container>


                                                </v-card>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </div>
                            </template>
                        </v-content>
                    </v-app>
                </div>

                <div v-if="!orderPlaced" v-cloak>
                    <div class="container text-center">
                        <br>
                        <h4>Thank you, your order was placed!</h4>
                        <br>
                        <div class="row">
                            <div class="col-12">
                                <form action="#">
                                    <div class="form-group">
                                        <div class="controls third">
                                            <input type="text" class="floatLabel" name="Name">
                                            <label for="name">FirstName</label>
                                        </div>
                                        <div class="controls half">
                                            <input type="text" class="floatLabel" name="Name">
                                            <label for="name">FirstName</label>
                                        </div>
                                        <div class="controls full">
                                            <input type="email" class="floatLabel" name="email">
                                            <label for="email">Email</label>
                                        </div>
                                        <div class="controls full">
                                            <textarea name="message" class="floatLabel"></textarea>
                                            <label for="message">Message</label>
                                            <button class="full">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import PriceInfo from '@/views/PriceInfo'
import TechnologyInfo from '@/views/TechnologyInfo'
import SimpleForm from '@/views/SimpleForm'
import AfterPaymentForm from '@/views/AfterPaymentForm'

export default {
    name: 'OrderForm',
    components: {
        PriceInfo,
        TechnologyInfo,
        AfterPaymentForm,
        SimpleForm
    },
    data: function() {
        return {
            submitted: false,
            //change on true (in you payment function) if you wont show form.
            headForm: true,
            consultacyForm: false,
            otherForm: false,

            //this is tab remember
            tabItem: 'Standard Website',
            tabTechnologi: 'Wordpress',

            //this is show technology form
            showtechnology: false,

            //standart data
            priceinfo: {
                name: 'Standard Website',
                price: 10000,
            },
            technologiesinfo: {
                name: 'Wordpress',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                price: 100,
            },

            currentitem: 1,
            currenttechnology: 1,
            quantity: 0,
            totalPrice: 0,

            //for  moredetailpayment-form component data
            formdates: {
                valid: true,
                valid2: true,
                technology: 'Standard Website',
                title: '',
                firstName: '',
                lastName: '',
                paymentBooleanStatus: '',
                isPaymentCompleted: false,
                email: '',
                company: '',
                domainName: '',
                notes: '',
                currenttime: new Date(),
                checkbox: false,
                paymentMethod: '',
                paymentStep: 1,
                location: '',
                afterPaymentForm: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                requiredRules: [
                    v => !!v || 'Field is empty',
                ],
                loading: false,
            },

            currencyInfo: {
                country: '',
                currency_code: '',
                exchangeRate: 1,
                allExchangeRates: null,
            },

            orderPlaced: true,

            usesCMS: false,
            isLoading: false,

            errorMsg: null,
            userEmail: '',

            style: {
                base: {
                    color: '#32325d',
                    lineHeight: '18px',
                    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                    fontSmoothing: 'antialiased',
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#aab7c4'
                    }
                },
                invalid: {
                    color: '#fa755a',
                    iconColor: '#fa755a'
                }
            },

            items: [{
                    id: 1,
                    name: "Standard",
                    src: "display.png",
                    price: 10000,
                    haveTech: false,
                    description: "Standard plan is blah blah blah balh, and it's awesome",
                    services: [
                        "Responsive Design",
                        "Color Customization",
                        "HTML5 & CSS3",
                        "24/7 Support",
                    ],
                },
                {
                    id: 2,
                    name: "E-Commerce",
                    src: "shopping.png",
                    price: 2000,
                    haveTech: true,
                    description: "E-Commerce plan is blah blah blah balh, and it's about using content management system",
                    services: [
                        "Custom Product Model",
                        "Easy Blog",
                        "Responsive Design",
                        "Color Customization",
                        "HTML5 & CSS3",
                        "24/7 Support",
                    ],
                },
            ],
            technologies: [{
                    id: 1,
                    name: 'Wordpress',
                    description: 'asdfasdfadf asdfasdlfkhjasldkfjl asdlkjasldjaslkdj asldkjasldjaslkdj asdgfaskdjalskdjalskdj asdkjasldkjasld',
                    price: 100,
                },
                {
                    id: 2,
                    name: 'Magento',
                    description: 'asdlajkshdkashdkajshdkashdkajshdkj akjshdkajshdkasjdhaksjdhk askjdhaskjdhaksj dlaksjdlaksjdlasjd ljdoaisjdoasdjoasjdlaskjd alskdjalskdjl asdlkjasdjklasdklasdjklasdjkl adlkasklasdjkladjkld asdklasjdalsd',
                    price: 200,
                },
                {
                    id: 3,
                    name: 'Other',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
                    price: 0,
                },
            ],


            select: null,
            isHidden: false,
        }
    },
    methods: {

        getPrice() {
            let techPrice = this.technologiesinfo.price;
            let item = this.items.find(el => el.id === this.currentitem);
            if (!item.haveTech) {
                techPrice = 0;
            }
            let res = Math.ceil(this.priceinfo.price + techPrice);
            if (this.quantity > 0) {
                res = res + ((Number(this.quantity)) * 100);
            }
            this.totalPrice = res;
            return res
        },
        renderPayPalButton() {
            //   card = elements.create('card', {
            //     style: this.style
            //   });
            //   card.mount('#card');
            var component = this;
            document.getElementById("submit-payment").onclick = () => this.processPayment();
            paypal.Buttons({
                style: {
                    //    layout: 'horizontal',
                    height: 30,
                    tagline: false
                },
                // Set up the transaction
                createOrder: function(data, actions) {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: component.priceinfo.price
                            }
                        }]
                    });
                },

                // Finalize the transaction
                onApprove: function(data, actions) {
                    return actions.order.capture().then(function(details) {
                        // Show a success message to the buyer
                        alert('Transaction completed by ' + details.payer.name.given_name + '!');
                    });
                }

            }).render('#paypal-button-container');
        },
        setSlideValue: function(flag){
            if(flag == 0) this.quantity = this.quantity - 5;
            else this.quantity += 5;
            if(this.quantity < 0) this.quantity = 0;
            if(this.quantity > 50) this.quantity = 50;

        },
        selectProperty: function(item) {

            this.currentitem = item.id;

            switch (true) {
                case item.name === 'E-Commerce':
                    this.showtechnology = true;
                    this.priceinfo.name = item.name;
                    this.priceinfo.price = item.price;
                    this.headForm = true;
                    this.consultacyForm = false;
                    this.otherForm = false;
                    break;
                    // case item.name === 'Consultancy':
                    //     this.showtechnology = false;
                    //     this.priceinfo.name = item.name;
                    //     this.priceinfo.price = item.price;
                    //     this.headForm = false;
                    //     this.consultacyForm = true;
                    //     this.otherForm = false;
                    //     break;
                    // case item.name === 'Other':
                    //     this.showtechnology = false;
                    //     this.priceinfo.name = item.name;
                    //     this.priceinfo.price = item.price;
                    //     this.headForm = false;
                    //     this.consultacyForm = false;
                    //     this.otherForm = true;
                    //     break;
                default:
                    this.showtechnology = false;
                    this.priceinfo.name = item.name;
                    this.priceinfo.price = item.price;
                    this.headForm = true;
                    this.consultacyForm = false;
                    this.otherForm = false;
            }
        },
        selectTechnology: function(variant) {
            this.currenttechnology = variant.id;
            this.formdates.technology = variant.name;
            this.technologiesinfo.name = variant.name;
            this.technologiesinfo.description = variant.description;
            this.technologiesinfo.price = variant.price;
        },


        getCountry: function() {
            let url = "https://api.ipdata.co/?api-key=d57e698daff46ce6a387a558e7b3848fdb914b887d55239401e0efec";
            this.$axios
                .get(url)
                .then(response => {
                    this.currencyInfo.country = response.data.country_name;
                    this.currencyInfo.currency_code = response.data.currency.code;
                    this.getExchangeRate(this.currencyInfo.currency_code);
                })
                .catch(error => console.log(error));
        },

        getExchangeRate: function(currency) {
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let latestlatest = `${year}-${month < 10 ? '0' + month : month}-${day}`;
            let url = `https://api.exchangeratesapi.io/${latestlatest}?base=GBP`;
            this.$axios
                .get(url)
                .then(response => {
                    console.log(response.data, "getExchangeRate");
                    this.currencyInfo.allExchangeRates = response.data.rates;
                    let isCounty = '';

                    // for (let country in response.data.rates) {
                    //     isCounty = currency !== country;
                    // }

                    // if (isCounty) {
                    //     this.currencyInfo.exchangeRate = response.data.rates["USD"];
                    //     this.currencyInfo.currency_code = 'USD';
                    // } else {
                    //     this.currencyInfo.exchangeRate = response.data.rates[currency];
                    // }
                })
                .catch(error => console.log(error));
        },

        isValidEmail: function(email) {
            var re =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        processPayment: function() {
            let vm = this;
            if (!this.isValidEmail(vm.email)) {
                vm.errorMsg = "Invalid email.";
            } else {
                stripe.createToken(card).then(function(result) {
                    if (result.error) {
                        vm.errorMsg = result.error.message;
                    } else {
                        vm.errorMsg = null;
                        vm.isLoading = true;
                        this.$axios.post('https://order.brigado.co.uk/payment/stripe', {
                                stripeToken: result.token.id,
                                stripeEmail: vm.email,
                                OrderDescription: vm.description,
                            }, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                            .then((response) => {
                                console.log('Successful');
                                //success:
                                vm.orderPlaced = true;
                                vm.isLoading = false;
                            })
                            .catch(function(error) {
                                console.log(error);
                                vm.isLoading = false;
                            });
                    }
                });

            }
        },

        validate: function() {
            if (this.$refs.form.validate()) {
                this.snackbar = true;
            }
        },

        updateTime: function() {
            this.formdates.currenttime = new Date();
        },

        validateFunction: function() {
            if (this.email === "") {
                this.validate();
            }
            if (this.orderPlaced === true) {
                this.loading = true;
                setTimeout(
                    function() {
                        if (this.isHidden === true) {
                            this.isHidden = false
                        }
                        this.loading = false

                    }.bind(this),
                    1500
                );
            }
        },

        validateNonPaymentFunction: function() {
            if (this.email == "") {
                this.validate()
            }

            this.loading = true
            setTimeout(
                function() {
                    this.loading = false
                }.bind(this),
                1500
            );
        },

        submitForm: function() {
            this.validateFunction();
            this.$axios.post('https://order.brigado.co.uk/contactForm', {
                    country: this.formdates.country,
                    email: this.formdates.email,
                    company: this.formdates.company,
                    title: this.formdates.title,
                    message: this.formdates.notes,
                    firstName: this.formdates.firstName,
                    lastName: this.formdates.lastName
                })
                .then(response => alert('Your order has been successfully submit!'))
                .catch(error => console.log(error));
        },

        submitNonPayingForm: function() {
            this.validateNonPaymentFunction();
            this.$axios.post('https://order.brigado.co.uk/contactForm', {
                    email: this.formdates.email,
                    firstName: this.formdates.firstName,
                    lastName: this.formdates.lastName,
                    notes: this.formdates.notes
                })
                .then(response => alert('Your message successfully sent!'))
                .catch(error => console.log(error));
        },

        onSubmit() {
            this.validateFunction();
        },

        checkPropertyActive(id) {

            if (this.currentitem === id) {
                return true;
            }

            return false;
        },

        checkTechnologyActive(id) {

            if (this.currenttechnology === id) {
                return true;
            }

            return false;
        }
    },
    computed: {
        /*            description: function () {
                        if (this.selectedOption == "Standard Website") {
                            var desc = this.selectedOption + " - ";
                            if (this.usesCMS) {
                                return desc + "Using CMS";
                            } else {
                                return desc + "Without any CMS"
                            }
                        } else if (this.selectedOption == "E-Commerce Website") {
                            return "E-Commerce Website - Technology: " + this.technology;
                        }
                    },*/

        /*            selectedTechnology() {
                        for (let index = 0; index < this.technologies.length; index++) {
                            if (this.selectedTab == index) {
                                console.log(index)
                                return this.technologies[index]
                            }
                            /!* const element = this.items[index];
                            console.log(index) *!/

                        }
                    },*/
        /*            paymentBooleanStatus() {
                        if (this.orderPlaced == true) {
                            return "Paid"
                        } else return "Unpaid"
                    }*/
    },
    beforeMount() {
        this.getCountry();
    },
    mounted() {
        this.renderPayPalButton();
    },
    watch: {
        'formdates.afterPaymentForm': {
            handler(val) {
                if (!val) return;
                this.headForm = false;
            }
        },
        'currencyInfo.currency_code': {
            handler(val) {
                if (!val || !this.currencyInfo.allExchangeRates) return;
                this.currencyInfo.exchangeRate = this.currencyInfo.allExchangeRates[val];
            }
        },
        headForm(val) {
            if (!val) return;
            this.formdates.afterPaymentForm = false;
            this.formdates.paymentMethod = '';
            var id = setInterval(() => {
                if (!document.getElementById('paypal-button-container')) return;
                this.renderPayPalButton();
                clearInterval(id);
            }, 20);
        }
        /*            orderPlaced: function () {
                        if (this.orderPlaced) {
                            cardPayment.style.display = "none";
                        }
                    },*/

        /*isLoading: function () {
            let btn = document.getElementById("submit-payment");
            this.isLoading ? btn.disabled = true : btn.disabled = false;
        },*/

    }
}
</script>
