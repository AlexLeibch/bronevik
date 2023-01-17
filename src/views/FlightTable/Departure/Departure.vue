<template>
  <tbody>
    <flight
      v-for="departure in filteredFlights"
      :key="departure.id"
      :arrival="departure"
    ></flight>
  </tbody>
</template>

<script>
import Flight from "../../../components/Table/Flight.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Flight,
  },
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    ...mapGetters(["GET_DEPARTURES", "GET_SEARCH_QUERY"]),
    filteredFlights() {
      if (this.GET_SEARCH_QUERY === "") {
        return this.GET_DEPARTURES;
      }
      return this.GET_DEPARTURES.filter((flight) => {
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
