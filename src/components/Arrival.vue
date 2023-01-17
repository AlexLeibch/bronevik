<template>
  <tbody>
    <flight
      v-for="arrival in filteredFlights"
      :key="arrival.id"
      :arrival="arrival"
    ></flight>
  </tbody>
</template>

<script>
import Flight from "./Flight.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Flight,
  },
  data() {
    return {
      filteredArrivals: [],
    };
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(["GET_ARRIVALS", "GET_SEARCH_QUERY"]),
    filteredFlights() {
      if (this.GET_SEARCH_QUERY === "") {
        return this.GET_ARRIVALS;
      }
      return this.GET_ARRIVALS.filter((flight) => {
        const search = this.GET_SEARCH_QUERY.toLowerCase();
        return (
          flight.flight_number.toLowerCase().includes(search) ||
          flight.destination.toLowerCase().includes(search)
        );
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
