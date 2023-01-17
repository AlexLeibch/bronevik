import Vue from "vue";
import VueRouter from "vue-router";
import FlightTable from "../views/FlightTable/FlightTable.vue";
import Departure from "../views/FlightTable/Departure/Departure.vue";
import Arrival from "../views/FlightTable/Arrival/Arrival.vue";
import store from "@/store";
import arrivals from "../mock/arrival.json";
import departures from "../mock/departure.json";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "FlightTable",
      component: FlightTable,
    },
    {
      path: "/flight_table",
      name: "FlightTable",
      component: FlightTable,
      children: [
        {
          path: "arrival",
          name: "Arrival",
          component: Arrival,
          beforeEnter: (to, from, next) => {
            const storedArrivals = JSON.parse(localStorage.getItem("arrivals"));
            if (storedArrivals.length) {
              store.commit("SET_ARRIVALS", storedArrivals);
            } else {
              store.dispatch("FETCH_ARRIVALS", { data: arrivals, time: 1000 });
            }

            next();
          },
        },
        {
          path: "departure",
          name: "Departure",
          component: Departure,
          beforeEnter: (to, from, next) => {
            const storedDepartures = JSON.parse(
              localStorage.getItem("departures")
            );
            if (storedDepartures.length) {
              store.commit("SET_DEPARTURES", storedDepartures);
            } else {
              store.dispatch("FETCH_DEPARTURES", {
                data: departures,
                time: 500,
              });
            }
            next();
          },
        },
      ],
    },
  ],
});

export default router;
