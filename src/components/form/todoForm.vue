<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useTodoStore } from '../../stores/TodoStore.js'

const todoStore = useTodoStore()

const input_content = ref('')
const input_category = ref(null)

const addTodo = () => {
  if (input_content.value.trim() === '' || input_category.value === null) {
    return
  }

  todoStore.addTodo({
    content: input_content.value,
    category: input_category.value,
    done: false,
    createdAt: new Date().getTime()
  })

  input_category.value = null
  input_content.value = ''
}
</script>

<template>
  <section class="create-todo">
    <h3 class="create-todo">Criar tarefa</h3>
    <form @submit.prevent="addTodo">
      <h4>What's on your todo list?</h4>
      <input
        type="text"
        placeholder="e.g. make a video"
        v-model="input_content"
      />
      <h4>Pick a category</h4>
      <div class="options">
        <label>
          <input
            type="radio"
            name="category"
            value="business"
            v-model="input_category"
          />
          <span class="bubble business"></span>
          <div>Business</div>
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="personal"
            v-model="input_category"
          />
          <span class="bubble personal"></span>
          <div>Personal</div>
        </label>
      </div>
      <button type="submit">Criar tarefa</button>
    </form>
  </section>
</template>

<style scoped></style>
