import Vue from 'vue'
import App from './App.vue'

// Recurso para usar Firebase en una app de Vue.js
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://tareas-60afe.firebaseio.com' // Raiz de donde se harán las peticiones a la base de datos

//creando un servicio bus
export var bus = new Vue({
  methods:{
    actualizarContador(numTareas){
      this.$emit('actualizarContador', numTareas);
    }
  }
});

// Instancia principal de la aplicación Vue.js
new Vue({
  el: '#app',
  render: h => h(App)
})
