<template>
    <div id="page-wrap">
      <div id="img-wrap">
        <img  :src="product_detail.imageUrl" >
      </div >
      <div id="product-details">
        <h1>{{ product_detail.name }}</h1>
        <h3 id="price">{{ product_detail.price }}</h3>
        <p>Note moyenne: {{ product_detail.averageRating }}</p>
        <button>Ajouter panier</button>
        <h2>Description</h2>
        <p>{{ product_detail.description }}</p>
      </div>
      </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {products} from "../fake-data";
const props = defineProps(["id"]);
const product_detail = ref();

product_detail.value = products.find((product) => {
  return product.id == props.id
});

console.log(product_detail.value.imageUrl);



</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }
  p{
    color: gray;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>
