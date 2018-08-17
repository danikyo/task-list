<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <!-- Export titulo from main data to TitleComponent.vue -->
      <titulo :MainTitle="titulo"></titulo>
      <!-- Export tareas from main data to TaskComponent.vue (other way)-->
      <new-task v-bind:taskList="tareas"></new-task>

      <list :taskList="tareas"></list>
    </div>
  </div>
</template>

<script>
  //import components
  import Titulo from './TitleComponent.vue'
  import NewTask from './TaskComponent.vue'
  import List from './ListComponent.vue'

  //export to view
  export default {
    //components imported
    components: {
      Titulo,
      NewTask,
      List
    },
    //main data
    data(){
      return{
        titulo: 'Lista de tareas',
        tareas: []
      }
    },
    created(){
      this.$http.get('https://tareas-60afe.firebaseio.com/tareas.json')
                .then(respuesta => {
                  return respuesta.json();
                })
                .then(respuestaJson => {
                  for(let id in respuestaJson){
                    this.tareas.push(respuestaJson[id]);
                  }
                })
    }

  }
</script>

<style>

</style>
