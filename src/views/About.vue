<template>
  <div class="about">
    <Titulo :contador="contador" :color="color" />
    <!-- <h1 
    :style="{ color: color }"
    >
    Contador: {{ contador }}
    </h1> -->
    <!-- <button @click="aumentar">+</button>
    <button @click="disminuir">-</button> -->
    <Btn :textoBoton="'Aumentar'" @accion="aumentar"/>
    <Btn :textoBoton="'Disminuir'" @accion="disminuir"/>
    <hr>
    <input type="text" v-model="texto">
    <p>{{texto}}</p>
  </div>
</template>

<script>
import Btn from '../components/Btn.vue'
import Titulo from '../components/Titulo.vue'
import { computed, ref } from "@vue/reactivity";
export default {
  components:{
    Titulo,
    Btn
  },

  setup() {
    //setup() es una funcion que se ejecuta antes de que se cree el copomenente.
    const contador = ref(0); //Con ref() se consigue que sea reactivo

    const texto = ref(''); //Creacion de texto reactivo

    const aumentar = () => {
      contador.value++; //Se accede al valor que tiene contador
    };

    const disminuir = () => {
      contador.value--;
    };

    const color = computed(() => {
      //computed tiene la misma funcion que ref, hay que instanciarlo, es una funcion que dentro tiene una funcion flecha.
      if (contador.value < 0) {
        return "red";
      } else {
        return "blue";
      }
    });

    

    return { contador, aumentar, disminuir, color, texto };
  }
};
</script>
