<template>
  <div class="about">
    <h1>Contador: {{ contador }}</h1>
    <button @click="aumentar">+</button>
    <button @click="disminuir">-</button>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    //setup() es una funcion que se ejecuta antes de que se cree el copomenente.
    const contador = ref(0); //Con ref() se consigue que sea reactivo

    const aumentar = () => {
      contador.value ++ //Se accede al valor que tiene contador
    };

    const disminuir = () => {
      contador.value --
    }

    return {contador, aumentar, disminuir}
  },
};
</script>
