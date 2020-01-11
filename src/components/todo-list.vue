<template lang="html">
  <div>
    <TodoItem 
      class="mb-3" 
      v-for="todo in todos" 
      :key="todo.id"
      :todo="todo"
    />
  </div>
</template>

<script>
import TodoItem from "@/components/todo-item";

export default {
  data() {
    return {
      todos: this.$store.state.todos
    };
  },
  components: {
    TodoItem
  }
};
</script>

<style lang="css">
</style>
