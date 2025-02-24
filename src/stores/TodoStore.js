import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todos', {
  // state
  state() {
    return {
      todos: []
    }
  },

  // actions
  actions: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo)
    }
  },
  // getters
  getters: {
    showTodos() {
      return todos
    }
  }
})
