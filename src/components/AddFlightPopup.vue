<template>
  <div class="popup-overlay">
    <form class="popup-content" @submit="saveFlight">
      <h1 class="popup-content__title">Создать рейс</h1>
      <label class="popup-content__label"> Время и Дата: </label>
      <input type="time" v-model="time" required />
      <input type="date" v-model="date" required />
      <label class="popup-content__label"> Номер рейса: </label>
      <input type="text" v-model="flight_number" required />
      <label class="popup-content__label"> Пункт Прилета или Вылета: </label>
      <input type="text" v-model="destination" required />
      <button class="popup-content__save-button">Сохранить</button>
      <button type="submit" class="popup-close" @click.prevent="closePopup">
        X
      </button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { generateRandomId, convertDate } from "../utils/utils";
export default {
  name: "FlightPopup",
  data() {
    return {
      time: "",
      date: "",
      flight_number: "",
      destination: "",
    };
  },
  methods: {
    ...mapMutations([
      "SET_POPUP_STATUS",
      "SET_NEW_ARRIVAL_FLIGHT",
      "SET_NEW_DEPARTURE_FLIGHT",
    ]),
    closePopup() {
      this.SET_POPUP_STATUS(false);
    },
    saveFlight(e) {
      let newFlight = {
        id: generateRandomId(),
        date: convertDate(this.date),
        time: this.time,
        destination: this.destination,
        flight_number: this.flight_number,
      };
      if (this.$route.name === "Arrival") {
        this.SET_NEW_ARRIVAL_FLIGHT(newFlight);
      } else {
        this.SET_NEW_DEPARTURE_FLIGHT(newFlight);
      }
      this.SET_POPUP_STATUS(false);
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Popup Content */
.popup-content {
  width: 50%;
  background-color: #fff;
  display: flex;
  padding: 1em;
  flex-direction: column;
  border-radius: 10px;

  .popup-content__label {
    font-size: 1rem;
    font-weight: bold;
    color: rgb(44, 32, 68);
  }

  input[type="text"],
  input[type="time"],
  input[type="date"] {
    margin: 0.3rem 0;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    max-height: 2rem;
    &:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
    }
  }

  .popup-content__title {
    font-weight: bold;
    color: black;
    text-align: center;
  }

  .popup-content__save-button {
    margin-top: 0.8rem;
    padding: 0.4rem;
    font-size: 1rem;
    font-weight: bold;
  }
}

/* Popup Close Button */
.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(55, 7, 7);
  cursor: pointer;
}

@media (max-width: 525px) {
  .popup-content {
    width: 94%;
  }
}
</style>
