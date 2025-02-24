<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import TodoForm from './components/form/todoForm.vue'
import { useTodoStore } from './stores/TodoStore.js'

const todoStore = useTodoStore()

const removeTodo = (todo) => {
  todoStore.removeTodo(todo)
}
</script>

<template>
  <main class="app">
    <section class="greeting">
      <h2 class="title">Sua lista de tarefas</h2>
    </section>
    <section class="create-todo">
      <TodoForm />
    </section>
    <section class="todo-list">
      <h3>TODO LIST</h3>
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
    </section>
  </main>
</template>

<style scoped></style>
