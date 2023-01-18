<template>
  <div>
    <h1 class="header__title">Расписание самолетов</h1>
    <div class="control">
      <div class="control__button" @click="changeTable('/arrival')">
        <img src="../assets/airplane_arrival.svg" />
        <span>Прилет</span>
      </div>
      <div class="control__button" @click="changeTable('/departure')">
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
            @click="toggleAdminStatus"
            v-model="isAdmin"
          />
        </div>
        <div
          v-if="this.$route.query.admin === 'true'"
          class="control__add-button-wrapper"
        >
          <button class="control__button-add-flight" @click="openPopup">
            Добавить Рейс
          </button>
        </div>
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
    changeTable(path) {
      if (this.$route.path !== `/flight_table${path}`) {
        this.$router.push({
          path: `/flight_table${path}`,
          query: { admin: this.$route.query.admin },
        });
      }
    },
    openPopup() {
      this.SET_POPUP_STATUS(true);
    },
    toggleAdminStatus() {
      this.isAdmin = !this.isAdmin;
      this.$emit("toggleAdminPanel", this.isAdmin);
      this.SET_ADMIN_ROLE(this.isAdmin);
    },
  },
  mounted() {
    if (this.$route.query.admin === "true") {
      this.isAdmin = true;
      this.SET_ADMIN_ROLE(true);
    }
  },
};
</script>

<style lang="scss" scoped>
.header__title {
  text-align: center;
  font-weight: bold;
  color: #000;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}
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
      cursor: pointer;
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
}

.control__button-add-flight {
  position: relative;
  padding: 0.2rem 1rem;
  float: left;
  border-radius: 10px;
  font-family: "Pacifico", cursive;
  font-size: 1rem;
  color: #000;
  text-decoration: none;
}

.blue {
  background-color: hsla(0deg, 0%, 84.7%, 0.26);
  border-bottom: 5px solid hsla(0deg, 0%, 84.7%, 0.26);
  text-shadow: 0px -2px hsla(0deg, 0%, 84.7%, 0.26);
}

.control__button-add-flight:active {
  transform: translate(0px, 5px);
  -webkit-transform: translate(0px, 5px);
  border-bottom: 1px solid;
}

@media (max-width: 768px) {
  .header__title {
    font-size: 2rem;
  }
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
