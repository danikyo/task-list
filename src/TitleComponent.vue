<template lang="html">
  <div class="">
    <h2>{{ MainTitle }}</h2>
    <h4>Tareas actuales: {{ tareasActuales }}</h4>
  </div>

</template>

<script>
import { bus } from './main.js'

export default {
  props: ['MainTitle'],
  data(){
    return {
      tareasActuales : 3
    }
  },
  created(){
    bus.$on('actualizarContador', (numTareas)=> {
      this.tareasActuales = numTareas;
    })
  }
}
</script>
