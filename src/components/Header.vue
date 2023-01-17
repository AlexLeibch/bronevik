<template>
  <div class="control">
    <div class="control__button" @click="changeTable('Arrival')">
      <img src="../assets/airplane_arrival.svg" />
      <span>Прилет</span>
    </div>
    <div class="control__button" @click="changeTable('Departure')">
      <img src="../assets/airplane_departure.svg" />
      <span>Вылет</span>
    </div>
    <div class="control__admin-panel">
      <div class="control__button-toggle-adimn" v-if="isFlightTable">
        <label class="control__input-label" for="control"
          >{{ setTitle }} Админ - панель</label
        >
        <input
          class="control__input"
          id="control"
          type="checkbox"
          @click="toggleAdminStatue"
          v-model="isAdmin"
        />
      </div>
      <div v-if="GET_ADMIN_RIGHTS" class="control__add-button-wrapper">
        <button class="control__button-add-flight" @click="openPopup">
          Добавить Рейс
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "MainHeader",
  components: {},
  data() {
    return {
      isOpenPopup: false,
      isAdmin: false,
    };
  },
  props: {
    isFlightTable: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters(["GET_ADMIN_RIGHTS"]),
    setTitle() {
      if (this.isAdmin) {
        return "Выключить";
      } else {
        return "Включить";
      }
    },
  },
  methods: {
    ...mapMutations(["SET_ADMIN_ROLE", "SET_POPUP_STATUS"]),
    changeTable(table) {
      if (this.$route.name === table) {
        return;
      }
      this.$router.push({ name: table });
    },
    openPopup() {
      this.SET_POPUP_STATUS(true);
    },
    toggleAdminStatue() {
      this.isAdmin = !this.isAdmin;
      this.SET_ADMIN_ROLE(this.isAdmin);
    },
  },
};
</script>

<style lang="scss" scoped>
.control {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: black;

  .control__button {
    display: flex;
    align-items: center;
    flex: 0 0 calc(50% - 0.7rem);
    position: relative;
    text-align: left;
    padding: 0 1.9rem 0 1.8rem;
    background: #ffffff;
    border: 1px solid #034694;
    box-sizing: border-box;
    border-radius: 5px;
    height: 3rem;
    font-weight: 600;
    font-size: 1.2em;
    line-height: 3rem;

    img {
      margin-right: 0.2rem;
    }

    &:hover {
      background-color: blue;
      color: #fff;
      cursor: pointer;
    }
  }

  .control__admin-panel {
    width: 100%;
    display: flex;
    flex-direction: column;

    .control__input {
      margin-left: 0.2rem;
    }
  }

  .control__button-toggle-adimn {
    margin: 0.4rem auto 0;
    display: flex;
  }
}

.control__add-button-wrapper {
  align-self: center;
  margin-top: 1rem;
  .control__button-add-flight {
    width: 130px;
    height: 50px;
    border-radius: 5px;
    padding: 10px 25px;
    font-weight: bold;
    background: hsla(0deg, 0%, 84.7%, 0.26);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 249, 249, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  .control__button-add-flight {
    border: none;
    color: #000;
  }
  .control__button-add-flight:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  .control__button-add-flight:hover {
    color: rgb(12, 1, 1);
  }
  .control__button-add-flight:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  .control__button-add-flight:active {
    top: 2px;
  }
}

@media (max-width: 768px) {
  .control {
    .control__button {
      flex: 0 0 100%;
      margin-bottom: 1em;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
