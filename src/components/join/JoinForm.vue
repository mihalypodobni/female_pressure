<template>
  <div>
    <b-form class="join-form mx-3 mt-4 mb-2" @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="email*"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          class="join-form-input"
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="your email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="first name*" label-for="input-2">
        <b-form-input
          class="join-form-input"
          id="input-2"
          v-model="form.firstname"
          placeholder="your first name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="last name*" label-for="input-3">
        <b-form-input
          class="join-form-input"
          id="input-3"
          v-model="form.lastname"
          placeholder="your last name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="website" label-for="input-4">
        <b-form-input
          class="join-form-input"
          id="input-4"
          v-model="form.website"
          placeholder="your website"
        ></b-form-input>
      </b-form-group>

    <!-- spacer -->
    <hr class="w-100 m-1 horizontal-line">
      
    <p></p>
    
    <b-form-group label="are you a woman*, AFAB, transgender, transfeminine, transmasculine, intersex (+gender optional), genderqueer, gender nonconforming, a-gender or/and non-binary?*" v-slot="{ ariaDescribedby }">
      <b-form-radio-group
	class="join-form-radio"
        v-model="selected"
        :options="form.options"
        :aria-describedby="ariaDescribedby"
        name="radio-inline"
      ></b-form-radio-group>
    </b-form-group>

      <b-form-group id="input-group-5" label="if no, please detail" label-for="input-5">
        <b-form-textarea
          class="join-form-textarea"
          id="input-5"
          v-model="form.nodetail"
          placeholder=""
        ></b-form-textarea>
      </b-form-group>

    

    <!-- spacer -->
    <hr class="w-100 m-1 horizontal-line">

      <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-6"
          :aria-describedby="ariaDescribedby"
          stacked
        >
          <b-form-checkbox value="faq" class="join-form-checkbox">i have read the <b-link @click=" $router.push({ name: 'FAQ' })" class="f-link">faq</b-link>*</b-form-checkbox>
          <b-form-checkbox value="coc" class="join-form-checkbox">i have read the <b-link @click=" $router.push({ name: 'CoC' })" class="f-link">code of conduct</b-link>*</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button class="f-button" type="submit" variant="primary">request to join!</b-button>
      <!-- <b-button class="f-button" type="reset" variant="danger">Reset</b-button> -->
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
            firstname: '',
            lastname: '',
            website: 'https://',
            nodetail: '',
          food: null,
          checked: [],
            options: [
		{ text: 'yes', value: 'yes' },
		{ text: 'no', value: 'no' },
            ]
	},
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    },
  
  }
</script>

<style lang="sass" scoped>
.join-form

.join-form-input
  width: 300px !important
  border-radius: 0
  border: 3px $searchBorder solid

  &::placeholder
    color: text-normal
    font-style: italic

.join-form-textarea
  border-radius: 0
  border: 3px $searchBorder solid

.join-form-radio

.join-form-checkbox

.horizontal-line
  border-top: 2px solid $searchBorder
</style>
