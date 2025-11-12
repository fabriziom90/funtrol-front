<script setup>
const recepies = [
  {
    id: 1,
    title: "Pizza Margherita",
    unit: "Pz",
  },
  {
    id: 2,
    title: "Pane Casereccio",
    unit: "Kg",
  },
  {
    id: 3,
    title: "Croissant al Cioccolato",
    unit: "Pz",
  },
];
</script>
<template lang="">
  <div class="row gy-3">
    <div class="col-12">
      <h2>
        <i class="fas fa-utensils fa-xl"></i>
        Produzione giornaliera
      </h2>
      <p class="pt-3">
        Registra le ricette in data
        {{ new Date().toLocaleDateString() }}
      </p>
    </div>
    <div class="col-12" v-for="recepy in recepies" :key="recepy.id">
      <div class="card">
        <div class="d-flex justify-content-between p-4">
          <div>
            <h4>{{ recepy.title }}</h4>
            <p>Unità: {{ recepy.unit }}</p>
          </div>
          <div class="input-container">
            <input
              type="number"
              name=""
              id=""
              class="form-control"
              placeholder="0"
            />
            <label for="" class="form-label ms-2">{{ recepy.unit }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12">
      <button class="main-button w-100">
        Registra Produzione <span><i class="fas fa-check"></i></span>
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/app.scss";
@use "../styles/_partials/variables" as *;

h2 {
  color: $mainBlue;
}

.input-container {
  display: flex;
  align-items: center;

  input {
    width: 100px;
    height: 50px;
  }
}

.main-button span {
  border: 3px solid #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-align: center;
  font-size: 16px;
}
</style>
