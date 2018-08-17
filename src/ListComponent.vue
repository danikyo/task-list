<template lang="html">
  <ul class="list-group">
    <li class="list-group-item" v-for="(task, index) in taskList"
        v-bind:class="{colorea: task.terminada}">
      {{task.texto}}
      <span class="pull-right">
        <button type="button" class="btn btn-success btn-xs glyphicon glyphicon-ok" v-on:click="task.terminada = !task.terminada"></button>
        <button type="button" class="btn btn-danger btn-xs" v-on:click="delTask(index)"></button>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['taskList'],
  methods: {
    delTask(index){
      this.taskList.splice(index,1);
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
