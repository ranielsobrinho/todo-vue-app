<script setup>
import { ref } from 'vue'

const dialog = ref(false)
import TodoForm from './components/form/todoForm.vue'
import TodoList from './components/todoList/todoList.vue'
</script>

<template>
  <v-app>
    <v-container>
      <v-toolbar :elevation="8">
        <v-toolbar-title>Lista de tarefas</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn @click="dialog = true">
          <v-icon icon="mdi-note-plus"></v-icon>
          Nova tarefa
        </v-btn>
      </v-toolbar>
      <v-dialog v-model="dialog" width="auto">
        <v-card
          max-width="900"
          min-width="700"
          min-height="300"
          prepend-icon="mdi-note-plus"
          title="Criar nova tarefa"
        >
          <TodoForm />
        </v-card>
      </v-dialog>
      <!-- </section> -->
      <!-- <section class="todo-list"> -->
      <!--   <TodoList /> -->
      <!-- </section> -->
    </v-container>
  </v-app>
</template>

<style scoped></style>
