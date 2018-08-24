<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!-- Exportar título de "data()" a "TitleComponent.vue" -->
      <titulo :titulo_principal="titulo"></titulo>

      <nueva-tarea v-bind:lista_tareas="tareas"></nueva-tarea>

      <lista :lista_tareas="tareas"></lista>
    </div>
  </div>
</template>

<script>
  // Importar componentes que se usan en la aplicación
  import Titulo from './TituloComponent.vue'
  import NuevaTarea from './NuevaTareaComponent.vue'
  import Lista from './ListaTareaComponent.vue'

  // exportar a vistas
  export default {
    // Componentes importados
    components: {
      Titulo,
      NuevaTarea,
      Lista
    },
    // Data de la aplicación
    data(){
      return{
        titulo: 'Lista de tareas',
        tareas: []
      }
    },
    // Cuando se crea el componente llena la lista con los elementos de la base de datos
    created(){
      this.$http.get('tareas.json')
                .then(respuesta => {
                  return respuesta.json();
                })
                .then(respuesta_json => {
                  for(let id in respuesta_json){
                    let tarea = {
                      id: id,
                      texto: respuesta_json[id].texto,
                      terminada: respuesta_json[id].terminada
                    }
                    this.tareas.push(tarea);
                  }
                })
    }
  }
</script>

<style>

</style>
