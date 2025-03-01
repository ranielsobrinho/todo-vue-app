<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useTodoStore } from '../../stores/TodoStore.js'

const todoStore = useTodoStore()

const removeTodo = (todo) => {
  todoStore.removeTodo(todo)
}
</script>

<template>
  <div class="list">
    <div
      v-for="todo in todoStore.todos"
      :class="`todo-item ${todo.done && 'done'}`"
    >
      <label>
        <input type="checkbox" v-model="todo.done" />
        <span :class="`bubble ${todo.category}`"></span>

        <div class="todo-content">
          <input type="text" v-model="todo.content" />
        </div>

        <div class="actions">
          <button class="delete" @click="removeTodo(todo)">Delete</button>
        </div>
      </label>
    </div>
  </div>
</template>

<style scoped></style>
