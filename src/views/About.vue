<template>
  <div class="about">
    <h1 
    :style="{ color: color }"
    >
    Contador: {{ contador }}
    </h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
export default {
  setup() {
    //setup() es una funcion que se ejecuta antes de que se cree el copomenente.
    const contador = ref(0); //Con ref() se consigue que sea reactivo

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

    return { contador, aumentar, disminuir, color };
  },
};
</script>
