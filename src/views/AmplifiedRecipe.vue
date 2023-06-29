<template>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center pb-5">
        <div class="row justify-content-center align-items-center">
            <div class="col-12 col-sm-10 col-lg-6 d-flex flex-column justify-content-center align-items-center">
                <div class="container rounded-4 border border-2 border-dark p-0">
                    <img class="img-fluid m-0 p-0 border-bottom border-2 border-dark" src="../assets/images/carne1.jpg"
                        alt="">
                    <div class="container-fluid bg-primary fw-bold m-0 py-2">
                        <!-- <h2 class="text-center my-4 fw-bold">{{ selectedRecipe.name }}</h2> -->
                        <h4 class="mx-2 fw-bold">Duración:<span class="fs-6 mx-2">{{ selectedRecipe.duration }}</span></h4>
                        <h4 class="mx-2 fw-bold">Ingredientes:</h4>
                        <ul class="mx-2">
                            <li class="my-1" v-for="ing in selectedRecipe.ingredients" :key="selectedRecipe.id">
                                {{ ing }}
                            </li>
                        </ul>
                        <h4 class="mx-2 fw-bold">Pasos:</h4>
                        <ol class="mx-2">
                            <li class="my-1" v-for="step in selectedRecipe.steps" :key="selectedRecipe.id">
                                {{ step }}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRecipeStore } from '../stores/recipe';

const recipeStore = useRecipeStore()
const selectedRecipe = recipeStore.selectedRecipe
</script>

<style lang="scss" scoped>
.container {
    overflow: hidden;
}
</style>