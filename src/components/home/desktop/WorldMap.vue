<template>
  <div class="world-map" ref="world-map"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import geodata from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    // Create map instance
    let chart = am4core.create(this.$refs['world-map'], am4maps.MapChart);

    // Set map definition
    chart.geodata = geodata;

    // Set projection
    chart.projection = new am4maps.projections.NaturalEarth1();
    chart.panBehavior = "rotateLong";

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    polygonSeries.mapPolygons.template.fillOpacity = 0.6;
    polygonSeries.mapPolygons.template.nonScalingStroke = true;
    polygonSeries.mapPolygons.template.strokeWidth = 0.5;
    polygonSeries.mapPolygons.template.adapter.add("fill", function () {
      return chart.colors.getIndex(Math.round(Math.random() * 4)).saturate(0.3);
    })

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(1);

    // Center on Pacific
    chart.deltaLongitude = -154.8;


    var graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
    graticuleSeries.fitExtent = false;

    this.chart = chart;
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>

<style lang="sass" scoped>
.world-map
  width: 100%
  height: 500px

</style>