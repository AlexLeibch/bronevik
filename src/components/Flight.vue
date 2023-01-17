<template>
  <tr class="table-info">
    <td class="table-info__adaptive">
      <span>{{ arrival.time }} {{ arrival.date }}</span>
    </td>
    <td>{{ arrival.flight_number }}</td>
    <td>
      {{ arrival.destination }}
      <img
        v-if="GET_ADMIN_RIGHTS"
        src="../assets/icons8-trash-can.svg"
        class="table-info__delete-flight"
        @click="deleteFlight"
      />
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "FlightSheldue",
  props: {
    arrival: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["GET_ADMIN_RIGHTS"]),
  },
  methods: {
    ...mapMutations(["DELETE_ARRIVAL_FLIGHT", "DELETE_DEPARTURE_FLIGHT"]),
    deleteFlight() {
      if (this.$route.name === "Arrival") {
        this.DELETE_ARRIVAL_FLIGHT(this.arrival);
      } else {
        this.DELETE_DEPARTURE_FLIGHT(this.arrival);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
td {
  padding: 0.3em;
  border-bottom: 1px solid #eceeef;
  border-top: 1px solid #eceeef;
  font-size: 1rem;
  position: relative;

  .table-info__delete-flight {
    position: absolute;
    right: -5px;
    top: 5px;
    cursor: pointer;
    &:hover {
      transition: opacity 0.3s;
      opacity: 0.7;
    }
  }
}
</style>
