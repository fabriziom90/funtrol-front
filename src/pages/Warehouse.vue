<script setup>
import { ref } from "vue";
const products = [
  {
    id: 1,
    name: "Farina 00",
    threshold: 50,
    unit: "Kg",
    available: 250,
  },
  {
    id: 2,
    name: "Mozzarella",
    threshold: 20,
    unit: "Kg",
    available: 12,
  },
  {
    id: 3,
    name: "Farina Integrale",
    threshold: 80,
    unit: "Kg",
    available: 100,
  },
  {
    id: 4,
    name: "Lievito",
    threshold: 5,
    unit: "Kg",
    available: 10,
  },
  {
    id: 5,
    name: "Burro",
    threshold: 45,
    unit: "Kg",
    available: 50,
  },
  {
    id: 6,
    name: "Cioccolato",
    threshold: 15,
    unit: "Kg",
    available: 5,
  },
];
</script>
<template lang="">
  <div class="row gy-3">
    <div class="col-12">
      <h2>
        <i class="fas fa-utensils fa-xl"></i>
        Magazzino (Riepilogo)
      </h2>
      <p class="pt-3">
        Visualizzazione solo consultiva. Aggiornamento in tempo reale.
      </p>
    </div>
    <div class="col-12">
      <input
        type="text"
        class="form-control form-control-lg"
        placeholder="Cerca prodotto"
      />
    </div>
    <div class="col-12" v-for="product in products" :key="product.id">
      <div class="card">
        <div class="d-flex justify-content-between align-items-center p-4">
          <div>
            <h4 class="d-flex align-items-center">
              <span
                class="dot"
                :class="`dot-${
                  product.available > product.threshold ? 'green' : 'red'
                }`"
              ></span>
              <span>{{ product.name }}</span>
            </h4>
          </div>
          <div>
            <h4>{{ product.available }} {{ product.unit }}</h4>
            <p>Soglia: {{ product.threshold }} {{ product.unit }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/_partials/variables" as *;
.dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
  margin-top: 5px;
}

.dot-green {
  background-color: green;
}

.dot-red {
  background-color: $mainRed;
}
</style>
