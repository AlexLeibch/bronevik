<template>
  <div class="not-found">
    <div class="not-found__content">
      <h5 class="not-found__header">404</h5>
      <p class="not-found__info">Запрашиваемая страница не найдена</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  components: {},
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .not-found__content {
    padding: 1rem;
    color: #929496;
    .not-found__header {
      font-size: 20rem;
      align-items: center;
      @media screen and (max-width: 710px) {
        font-size: 10rem;
      }
      @media screen and (max-width: 359px) {
        font-size: 8rem;
      }
    }
    .not-found__info {
      font-size: 2rem;
      align-items: center;
      @media screen and (max-width: 710px) {
        font-size: 1rem;
      }
      @media screen and (max-width: 359px) {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
