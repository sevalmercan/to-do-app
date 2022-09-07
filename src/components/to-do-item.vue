<template>
  <div class="item">
    <input
      type="checkbox"
      :value="val"
      v-model="checked"
      @change="onChange"
      :id="id"
    />
    <label for="checkbox" class="item__name">{{ itemName }}</label>
    <button class="item__button" @click="deleteItem">Remove</button>
  </div>
</template>

<script>
export default {
  name: "to-do-item",

  props: {
    itemName: String,
    val: Boolean,
    id: Number,
  },
  data() {
    return {
      checkedProxy: false,
    };
  },
  computed: {
    checked: {
      get() {
        return this.val;
      },
      set(val) {
        this.checkedProxy = val;
      },
    },
  },
  methods: {
    onChange() {
      this.$emit("input", this.checkedProxy);
    },

    deleteItem() {
      this.$emit("delete", this.id);
    },
  },
  
};
</script>

<style lang="scss">
@import "../assets/styles/style.scss";

input[type="checkbox"] {
  width: 25px;
  height: 25px;
}

.item {
  display: flex;
  font-size: 20px;
  margin-bottom: 15px;
  color: $to-do-color;
}

.item__name {
  margin: 3px 15px;
}

.item__button {
  margin-left: auto;
  margin-right: 0;
  background-color: transparent;
  border: 3px solid $primary-color-gray;
}
</style>
