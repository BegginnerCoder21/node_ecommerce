<template>
    
    <div id="page-wrap">
        <div class="grid-wrap">

            <div class="product-item" v-for="product in products" :key="product.id">
                <img :src="product.imageUrl" >
                <h3 class="product-name">{{ product.name }}</h3>
                <p >{{ product.price }}</p>
                <router-link :to="'product-detail/' + product.id">
                    <button>Voir plus...</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import {products} from "../fake-data";



</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;

    padding:30px 100px 30px 100px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>