<template>
<div>
  <Header>
    join female:pressure
  </Header>
  <b-container class="mt-5 px-4 px-lg-0 f-body-container">
    <!-- intro -->
    <ol>
      <li class="my-2">please read our
        <b-link @click=" $router.push({ name: 'FAQ' })" class="f-link">
          faq
        </b-link>
        and
        <b-link @click=" $router.push({ name: 'CoC' })" class="f-link">
          code of conduct
        </b-link>
        before joining</li>
      <li class="my-2">fill out the form below and submit your application</li>
      <li class="my-2">your request will be reviewed by our team</li>
      <li class="my-2">upon acceptance, you will receive an email and can then login and customize your profile</li>
    </ol>
    <!-- spacer -->
    <hr class="w-100 m-1 horizontal-line">

    <JoinForm/>
    
  </b-container>
  </div>
</template>

<script>
import Header from "@/components/header/Header"
import JoinForm from "@/components/join/JoinForm"

export default {
    components: {
        Header,
	JoinForm
    },
    data() {
      return {
        form: {
          email: '',
        },
      }
    },}
</script>

<style lang="sass" scoped>
.horizontal-line
  border-top: 2px solid $searchBorder
</style>
