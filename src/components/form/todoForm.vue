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

const closeModal = () => {
  console.log('Should close modal')
}
</script>

<template>
  <form
    @submit.prevent="addTodo"
    style="
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    "
  >
    <v-text-field
      label="Nova tarefa"
      variant="solo-filled"
      max-width="680"
      min-width="680"
      style="margin: auto"
      v-model="input_content"
    ></v-text-field>
    <h4>Escolha uma categoria</h4>
    <v-radio-group inline>
      <v-radio label="Negócios" value="business"></v-radio>
      <v-radio label="Estudos" value="study"></v-radio>
      <v-radio label="Pessoal" value="personal"></v-radio>
    </v-radio-group>
    <div>
      <v-btn variant="tonal" prepend-icon="mdi-plus-circle" type="submit"
        >Criar tarefa</v-btn
      >
      <v-btn
        variant="tonal"
        prepend-icon="mdi-cancel"
        style="margin-left: 1rem"
        @click="closeModal"
        >Cancelar</v-btn
      >
    </div>
  </form>
</template>

<style scoped></style>
