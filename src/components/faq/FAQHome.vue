<template>
  <b-container class="body-container mt-3">
    <vue-typeahead-bootstrap
        :data="cities"
        v-model="citySearch"
        size="lg"
        showAllResults
        :serializer="s => (s.address.label)"
        placeholder="find a city..."
        @hit="selectedCity = $event"
    ></vue-typeahead-bootstrap>
  </b-container>
</template>

<script>
import _ from 'underscore'
import VueTypeaheadBootstrap from 'vue-typeahead-bootstrap';

const API_URL = 'https://autocomplete.search.hereapi.com/v1/autocomplete?q=:q&apiKey=lXXccHQOyrKXJVSglf0mwzxpzbjZNYw1aNTS46iS2k8&lang=en-US&types=city'

export default {
  data() {
    return {
      cities: [],
      citySearch: '',
      selectedCity: null
    }
  },
  components: {
    VueTypeaheadBootstrap
  },
  methods: {
    async getCities(query) {
      if (query !== '') {
        const res = await fetch(API_URL.replace(':q', query))
        const suggestions = await res.json()
        suggestions.items ? this.cities = suggestions.items : this.cities = []
      }
      console.log(this.cities)
    }
  },

  watch: {
    citySearch: _.debounce(function(addr) { this.getCities(addr) }, 500)
  }
}
</script>