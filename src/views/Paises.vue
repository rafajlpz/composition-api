<template>
  <h1>Lista de Paises</h1>
  <p v-for="(pais, index) in arrayData" :key="index">{{ pais.name }}</p>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const arrayData = ref([]);

onMounted(async () => {
  try {
        const res = await fetch("api.json");
        arrayData.value = await res.json();
  } catch (error) {
        console.log(error);
  }
});
</script>
