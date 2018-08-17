<template lang="html">
  <div class="input-group mb-3">
    <input type="text" placeholder="Escribe una tarea" v-model="inputTask" class="form-control" v-on:keyup.enter="addTask">
    <div class="input-group-append">
      <button type="button" class="btn btn-primary" v-on:click="addTask">Agregar</button>
    </div>
  </div>
</template>

<script>
import { bus } from './main.js'
export default {
  //JS 6
  data(){
    return{
      inputTask: ''
    }
  },
  props: ['taskList'],
  methods: {
    addTask(){
      var text = this.inputTask.trim();
      if(text){
        this.taskList.push({
          texto: text,
          terminada: false
        })

        bus.actualizarContador(this.taskList.length)
      }
      this.inputTask = '';
      this.$http.post('https://tareas-60afe.firebaseio.com/tareas.json', {
        texto: text,
        terminada: false
      }).then(respuesta => console.log(respuesta));
    },
    created(){
      bus.actualizarContador(this.taskList.length)
    }
  }
  /*JS 5
  data: function(){

  }*/
}
</script>

<style lang="css">
</style>
