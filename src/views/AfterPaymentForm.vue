<template>
  <b-form
      @submit.prevent="submitForm"
  >
      <b-form-group label="First Name">
          <b-form-input v-model="form.firstName"></b-form-input>
      </b-form-group>
      <b-form-group label="Last Name">
          <b-form-input v-model="form.lastName"></b-form-input>
      </b-form-group>

      <b-form-group label="Company">
          <b-form-input v-model="form.company"></b-form-input>
      </b-form-group>

      <b-form-group label="Domain Name">
          <b-form-input v-model="form.domainName"></b-form-input>
      </b-form-group>

      <b-form-group label="Title">
          <b-form-input v-model="form.title"></b-form-input>
      </b-form-group>

      <b-form-group label="Notes">
          <b-form-textarea
          v-model="form.notes"
          rows="3"
          max-rows="6">
          </b-form-textarea>
      </b-form-group>

      <b-button
          type="submit"
          variant="success"
          :loading="loading">
          Submit
      </b-button>
  </b-form>
</template>

<script>
export default {
  name: 'AfterPaymentForm', 
  data: function () {
      return {
          form: {
              domainName: '',
              company: '',
              title: '',
              notes: '',
              firstName: '',
              lastName: '',
              // from props
              technology: '',
              paymentStatus: '',
              location: '',
              email: ''
          },
          loading: false
      }
  },
  props: {
      data: {
          type: Object,
          required: true
      },
      currency: {
          type: Object, 
          required: true
      },
  },
  methods: {
      setFormDataFromProps() {
          this.form.email = this.data.email;
          this.form.paymentStatus = this.data.paymentBooleanStatus ? 'paid' : 'unpaid';
          this.form.technology = this.data.technology;
          this.form.location = this.currency.country;
      },
      async submitForm() {
          console.log(this.form);
          const res = await this.$axios.post('https://order.brigado.co.uk/register', this.form, { headers: {'content-type': 'application/json'}});
          console.log(res);
          this.data.afterPaymentForm = false;
          this.data.isPaymentCompleted = true;
      }
  },
  created() {
      this.setFormDataFromProps();
  },
}
</script>
