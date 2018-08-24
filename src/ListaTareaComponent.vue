<template lang="html">
  <ul class="list-group">
    <li class="list-group-item" v-for="(tarea, indice) in lista_tareas" v-bind:class="{colorea: tarea.terminada}">
      {{tarea.texto}}
      <span class="pull-right">
        <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" v-on:click="cambiar_estado(indice)"></button>
        <button type="button" class="btn btn-danger btn-xs" v-on:click="eliminar(indice)"></button>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['lista_tareas'], // Propiedades del componente
  methods: {
    cambiar_estado(indice){
      let terminada = this.lista_tareas[indice].terminada = !this.lista_tareas[indice].terminada;
      let id = this.lista_tareas[indice].id;

      this.$http.patch('tareas/' + id + '.json',{
        terminada: terminada
      })
    },
    eliminar(indice){
      let id = this.lista_tareas[indice].id;
      this.lista_tareas.splice(indice, 1);

      this.$http.delete('tareas/' + id + '.json')
    }
  }
}
</script>

<!-- style scope para no copiar codigo -->
<style>
.colorea{
  color: gray;
  text-decoration: line-through;
}
</style>
