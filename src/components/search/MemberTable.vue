<template>
  <div>This is the member table</div>
</template>

<script>

import Vue from "vue";

export default {
  mounted() {
    this.loadPostTable()
  },
  methods: {
    async loadPostTable() {
      const body = {
        genres: [
          {
            name: 'techno',
            type: 'sub'
          },
          {
            name: 'house',
            type: 'main'
          },
        ],
        professions: [],
        other: [],
        locations: [
          {
            continent: 'Europe',
            country: 'Germany',
            state: 'Berlin',
            city: 'Berlin'
          },
          {
            continent: 'North America',
            country: 'United States',
            state: 'California',
            city: 'San Francisco'
          },
          {
            continent: 'South America',
            country: '',
            state: '',
            city: ''
          }
        ]
      };
      await Vue.prototype.$http.post(`${Vue.prototype.$hostname}/search/load-table`, body)
          .then(response => {
            console.log("testing", response.data)
            response.data ? this.users = response.data : this.users = []
          }, error => {
            console.log(error)
          })
    }
  }
}
</script>