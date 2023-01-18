<template>
  <tr class="table-info">
    <template v-if="!editMode">
      <td class="table-info__adaptive">
        <span>{{ arrival.time }} {{ arrival.date }}</span>
      </td>
      <td>{{ arrival.flight_number }}</td>
      <td>
        {{ arrival.destination }}
        <div class="table-info__admin-panel" v-if="GET_ADMIN_RIGHTS">
          <img
            src="../../assets/icons8-trash-can.svg"
            @click="deleteFlight"
            class="table-info__delete-button"
          />
          <img
            @click="setIsEdit"
            class="table-info__edit-button"
            src="../../assets/edit_icon.svg"
          />
        </div>
      </td>
    </template>
    <template v-else>
      <td>
        <div class="table-info__input-edit-time-and-date">
          <input type="time" v-model="time" />
          <input type="date" v-model="date" />
        </div>
      </td>
      <td>
        <input class="table-info" type="text" v-model="number" />
      </td>
      <td>
        <input type="text" v-model="destination" />
        <div class="table-info__admin-panel" v-if="GET_ADMIN_RIGHTS">
          <img
            class="table-info__save-button"
            @click="editFlight"
            src="../../assets/check.svg"
          />
        </div>
      </td>
    </template>
  </tr>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { convertDate } from "../../utils/utils.js";
export default {
  name: "FlightSheldue",
  data() {
    return {
      editMode: false,
      time: this.arrival.time,
      date: this.arrival.date,
      number: this.arrival.flight_number,
      destination: this.arrival.destination,
    };
  },
  props: {
    arrival: {
      type: Object,
    },
  },
  computed: {
    ...mapGetters(["GET_ADMIN_RIGHTS"]),
  },
  watch: {
    GET_ADMIN_RIGHTS(newValue) {
      if (this.editMode) {
        this.editMode = newValue;
      }
    },
  },
  methods: {
    ...mapMutations([
      "DELETE_ARRIVAL_FLIGHT",
      "DELETE_DEPARTURE_FLIGHT",
      "UPDATE_ARRIVAL_FLIGHT",
      "UPDATE_DEPARTURE_FLIGHT",
    ]),
    deleteFlight() {
      if (this.$route.name === "Arrival") {
        this.DELETE_ARRIVAL_FLIGHT(this.arrival);
      } else {
        this.DELETE_DEPARTURE_FLIGHT(this.arrival);
      }
    },
    setIsEdit() {
      this.editMode = !this.editMode;
    },
    checkValidity() {
      const validity = Boolean(
        this.time && this.date && this.number && this.destination
      );
      if (!validity) {
        alert("Заполните все поля!");
        return false;
      }
      return true;
    },
    editFlight() {
      if (this.checkValidity()) {
        this.editMode = !this.editMode;
        const flight = {
          id: this.arrival.id,
          time: this.time,
          date: convertDate(this.date),
          flight_number: this.number,
          destination: this.destination,
        };
        if (this.$route.name === "Arrival") {
          this.UPDATE_ARRIVAL_FLIGHT(flight);
        } else {
          this.UPDATE_DEPARTURE_FLIGHT(flight);
        }
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
  color: black;

  input {
    max-width: 60%;
  }

  .table-info__admin-panel {
    position: absolute;
    right: 2px;
    top: 0px;
    cursor: pointer;

    img:hover {
      transition: opacity 0.3s;
      opacity: 0.7;
    }
  }
  .table-info__input-edit-time-and-date {
    display: flex;
    flex-direction: column;

    input:first-child {
      margin-bottom: 0.4rem;
    }
  }
}

@media (max-width: 625px) {
  input[type="date"],
  input[type="time"] {
    max-width: 96%;
  }
}
</style>
