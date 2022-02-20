"use strict";

import { ref } from "@vue/reactivity";

export function useContador (){
    const contador = ref(0);

    const aumentar = () => {
        contador.value++; //Se accede al valor que tiene contador
      }
  
      const disminuir = () => {
        contador.value--;
      }

      return {contador, aumentar, disminuir}
}