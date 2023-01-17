<template>
  <thead class="table-header">
    <tr>
      <th>Время</th>
      <th>Номер Рейса</th>
      <th class="table-header_position">Пункт {{ title }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "HeaderTable",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.table-header {
  position: relative;
  white-space: nowrap;
  font-size: 16px;
  th {
    position: relative;
    padding: 16px 4px;
    text-align: left;
    vertical-align: bottom;
    font-size: 0.875rem;
    font-weight: bold;
    color: #313436;
    background-color: hsla(0, 0%, 84.7%, 0.26);
  }

  .table-header__admin-panel {
    position: absolute;
    top: 0px;
    left: 250px;
  }
}
</style>
