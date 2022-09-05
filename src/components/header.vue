<template>
  <div>
    <div class="header-name">{{ headerName }}</div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "header-comp",
  props: {
    headerName: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/style.scss";

.header-name {
  color: $primary-color-header;
  font-size: 35px;
}
.hr {
  border: none;
  border-top: 1px solid primary-color-header;
  height: 2px;
}
</style>
