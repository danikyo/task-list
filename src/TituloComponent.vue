<template lang="html">
  <div class="">
    <h2>{{ titulo_principal }}</h2>
    <h4>Tareas actuales: {{ tareasActuales }}</h4>
  </div>

</template>

<script>
import { bus } from './main.js'

export default {
  props: ['titulo_principal'],
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
