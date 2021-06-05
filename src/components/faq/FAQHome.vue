<template>
  <b-container class="body-container mt-3">
    <vue-bootstrap-typeahead
        :data="cities"
        v-model="citySearch"
        size="lg"
        :serializer="s => (s.address.label)"
        placeholder="Type an city..."
        @hit="selectedCity = $event"
    ></vue-bootstrap-typeahead>
    {{cities}}
  </b-container>
</template>

<script>
import _ from 'underscore'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

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
    VueBootstrapTypeahead
  },
  methods: {
    async getCities(query) {
      console.log("trying to get cities")
      const res = await fetch(API_URL.replace(':q', query))
      const suggestions = await res.json()
      this.cities = suggestions.items
      console.log(this.cities)
    }
  },
  watch: {
    citySearch: _.debounce(function (addr) {
      this.getCities(addr)
    }, 500)
  }
}
</script>