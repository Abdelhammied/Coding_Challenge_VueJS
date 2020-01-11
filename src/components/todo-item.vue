<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <v-text-field
          label="Todo"
          solo
          v-model="updatedTodo"
          v-if="update"
        />
        <h3 
          class="headline mb-0" 
          style="display: inline-block" 
          :class="{'completed' : todo.status === 'completed'}" 
          v-else>{{ todo.title }}</h3>
      </div>
    </v-card-title>
    <v-btn 
      @click="completeTodo" 
      rounded 
      :disabled="todo.status == 'completed'">
      Complete
    </v-btn>
    <template v-if="todo.status !=='completed'">
      <v-btn 
        rounded 
        color="success" 
        @click="updateTodo" 
        v-if="update">Save</v-btn>
      <v-btn 
        rounded 
        color="primary" 
        @click="update = true" 
        v-else>Update</v-btn>
    </template>
    <v-btn 
      @click="deleteTodo" 
      color="error" 
      rounded>
      Delete
    </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    todo: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      update: false,
      updatedTodo: this.todo.title
    };
  },
  methods: {
    completeTodo() {
      if (this.update) {
        this.update = false;
      }
      this.$store.commit("completeTodo", this.todo.id);
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo.id);
    },
    updateTodo() {
      this.$store.commit("updateTodo", {
        todoId: this.todo.id,
        newTitle: this.updatedTodo
      });
      this.update = false;
    }
  }
};
</script>

<style lang="css">
.completed {
  text-decoration: line-through;
}
</style>
