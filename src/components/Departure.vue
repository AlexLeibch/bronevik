<template>
  <tbody>
    <flight
      v-for="departure in GET_DEPARTURES"
      :key="departure.destination"
      :arrival="departure"
    ></flight>
  </tbody>
</template>

<script>
import Flight from "./Flight.vue";
import { mapGetters, mapState } from "vuex";
export default {
  components: {
    Flight,
  },
  data() {
    return {
      departure1: [],
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(["GET_DEPARTURES"]),
  },
  watch: {
    SEARCH_QUERY(newValue) {
      console.log(newValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
