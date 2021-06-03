<template>
  <v-app>
    <v-here-geocoder-autocomplete
      :here-api-key="hereApiKey"
      v-model="place"
      label="Search for any place..."
      debounce-time
      append-icon=""
      hide-no-data
      clearable
      outlined
    />
  </v-app>
</template>

<script>
import VHereGeocoderAutocomplete from "./components/VHereGeocoderAutocomplete";

export default {
  name: "App",

  components: {
    VHereGeocoderAutocomplete,
  },

  data: () => ({
    hereApiKey: "lXXccHQOyrKXJVSglf0mwzxpzbjZNYw1aNTS46iS2k8",
    installationCode:
      '<v-here-geocoder-autocomplete\n  :here-api-key="hereApiKey"\n  v-model="place"\n  label="Search for any place..."\n  debounce-time\n  append-icon=""\n  hide-no-data\n  clearable\n  outlined\n/>',
    place: "Germany, 10117, Berlin",
  }),
  methods: {
    customHighlight(placeItem) {
      if (placeItem.highlights.title != null) {
        let ret = placeItem.title;
        // this is necessary because adding a bold tags displaces the highlight indexes delivered by the here api
        let incrementCounter = 0;
        placeItem.highlights.title.forEach((highlight) => {
          ret = [
            ret.slice(0, highlight.start + incrementCounter),
            "<b>",
            ret.slice(
              highlight.start + incrementCounter,
              highlight.end + incrementCounter
            ),
            "</b>",
            ret.slice(highlight.end + incrementCounter),
          ].join("");
          // number of characters added with the bold tag
          incrementCounter += 7;
        });
        return ret;
      } else {
        return placeItem.title;
      }
    },
  },
};
</script>
<style>
.text-block {
  white-space: pre;
  overflow-wrap: break-word;
  word-wrap: break-word;
  overflow-x: auto;
}

.v-toolbar__extension {
  display: flex;
  justify-content: center;
}
</style>
