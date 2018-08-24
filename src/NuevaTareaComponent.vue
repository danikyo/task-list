<template lang="html">
  <div class="input-group mb-3">
    <input type="text" placeholder="Escribe una tarea" v-model="input_tarea" class="form-control" v-on:keyup.enter="agregar_tarea">
    <div class="input-group-append">
      <button type="button" class="btn btn-primary" v-on:click="agregar_tarea">Agregar</button>
    </div>
  </div>
</template>

<script>
import { bus } from './main.js'
export default {
  data(){
    return{
      input_tarea: ''
    }
  },
  props: ['lista_tareas'],
  methods: {
    agregar_tarea(){
      var texto_input = this.input_tarea.trim();
      if(text_input){
        this.lista_tareas.push({
          texto: texto_input,
          terminada: false
        })

        bus.actualizarContador(this.lista_tareas.length)
      }
      this.input_tarea = '';
      this.$http.post('tareas-json', {
        texto: texto_input,
        terminada: false
      }).then(respuesta => console.log(respuesta)); // .then es utilizado para realizar otra acción después de la función
    },
    created(){
      bus.actualizarContador(this.lista_tareas.length)
    }
  }

  /*
  JS 5
  data: function(){

  }*/
}
</script>

<style lang="css">
</style>
