<template lang="html">
  <v-text-field
    label="Todo"
    placeholder="What do you have to do?"
    solo
    v-model="todo"
    @keyup.enter="addTodo"
  />
</template>

<script>
export default {
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== "") {
        this.$store.commit("addTodo", this.todo);
        this.todo = "";
      }
    }
  }
};
</script>

<style lang="css">
</style>
