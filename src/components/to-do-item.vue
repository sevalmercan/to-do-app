<template>
  <div>
    <input type="checkbox" :value="val" v-model="checked" @change="onChange" />
    <label for="checkbox">{{ itemName }}</label>
  </div>
</template>

<script>
export default {
  name: "to-do-item",

  props: {
    itemName: String,
    val: Number,
  },
  data() {
    return {
      checkedProxy: false,
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedProxy = val;
      },
    },
  },
  methods: {
    onChange: function () {
      this.$emit("input", this.checkedProxy);
    },
  },
};
</script>

<style></style>
