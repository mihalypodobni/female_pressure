<template>
  <h1>Map</h1>
</template>
<script>
import * as d3 from "d3";
import * as topojson from "topojson";

export default {
  data() {
    return {
      countryData: [],
    };
  },
  created() {
    this.fetchMap();
  },
  methods: {
    fetchMap() {
      d3.json(
        "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json"
      ).then((data, error) => {
        if (error) {
          console.log("error", error);
        } else {
          // console.log(data);
          this.countryData = topojson.feature(
            data,
            data.objects.countries
          ).features;
        }
      });
    },
  },
};
</script>
