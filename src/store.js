import Vue from 'vue'
import Vuex from 'vuex'
import Helpers from "./helpers";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: Helpers.generateId(),
        title: "Getting Breakfast",
        status: "completed"
      },
      {
        id: Helpers.generateId(),
        title: "Checking Up My Emails",
        status: ""
      }
    ]
  },
  mutations: {
    addTodo(state, todoTitle) {
      state.todos.push({
        id: Helpers.generateId(),
        title: todoTitle,
        status: ""
      })
    },
    deleteTodo(state, todoId) {
      let selectedTodoIndex = state.todos.findIndex(todo => {
        return todo.id == todoId
      });
      state.todos.splice(selectedTodoIndex, 1);
    },
    completeTodo(state, todoId) {
      let selectedTodoIndex = state.todos.findIndex(todo => {
        return todo.id == todoId
      });
      state.todos[selectedTodoIndex].status = 'completed';
    },
    updateTodo(state, payload) {
      let selectedTodoIndex = state.todos.findIndex(todo => {
       return todo.id == payload.todoId
      });
      state.todos[selectedTodoIndex].title = payload.newTitle;
    }
  },
})
