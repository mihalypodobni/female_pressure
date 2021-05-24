<template>
  <div class="world-map" ref="world-map"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    let chart = am4core.create(this.$refs['world-map'], am4charts.XYChart);
    console.log(chart)
  }
}
</script>

<style lang="sass" scoped>
.world-map
  width: 100%
  height: 500px

</style>