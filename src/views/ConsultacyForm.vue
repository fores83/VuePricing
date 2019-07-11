<template>
  <b-form
      ref="consultacy-form"
      @submit.prevent="submitForm()"
  >
      <b-row>
          <b-col>
              <b-form-group label="Title">
                  <b-form-input
                  v-model="data.title"
                  ></b-form-input>
              </b-form-group>
          </b-col>
          <b-col>
              <b-form-group label="First Name">
                  <b-form-input
                  v-model="data.firstName"
                  ></b-form-input>
              </b-form-group>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <b-form-group label="Last Name">
                  <b-form-input
                  v-model="data.lastName"
                  required
                  ></b-form-input>
              </b-form-group>
          </b-col>
          <b-col>
              <b-form-group label="Enter Email">
                  <b-form-input
                  v-model="data.email"
                  type="email"
                  required
                  ></b-form-input>
              </b-form-group>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <b-form-group label="Company (optional)">
                  <b-form-input
                  v-model="data.company"
                  ></b-form-input>
              </b-form-group>
          </b-col>
      </b-row>

      <b-form-group label="Notes">
          <b-form-textarea
          v-model="data.notes"
          rows="3"
          max-rows="6"
          required
          ></b-form-textarea>
      </b-form-group>

      <b-button
          :disabled="!data.valid"
          variant="success"
          type="submit"
      >
          Submit
      </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'ConsultacyForm', 
  props: ['data', 'currency', 'technology'],
  methods: {
      submitForm() {
          this.$axios.post('https://order.brigado.co.uk/contactForm', {
              country: this.data.country,
              email: this.data.email,
              company: this.data.company,
              title: this.data.title,
              message: this.data.notes,
              firstName: this.data.firstName,
              lastName: this.data.lastName
          })
          .then(response => alert('Your order has been successfully submit!'))
          .catch(error => console.log(error));
      }
  }
}
</script>
