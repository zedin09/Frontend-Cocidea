<template>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center pb-5">
        <div class="row row-cols-7 justify-content-center align-items-center">
            <div v-for="recipe in recipes" :key="recipe.id"
                class="col-12 col-lg-4 col-md-6 my-3 d-flex flex-column justify-content-center align-items-center">
                <div class="container rounded-4 border border-2 border-dark p-0">
                    <router-link class="text-decoration-none" :to="{ name: 'recipe' }">
                        <img @click="handleClick(recipe)" class="img-fluid m-0 p-0" :src="`/recipes-images/${recipe.image}.jpg`" alt="">
                    </router-link>
                    <h4 class="bg-primary fw-bold m-0 py-2">{{ recipe.name }} </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRecipeStore } from '../../stores/recipe';

const props = defineProps({
    type: String,
})

const recipeStore = useRecipeStore()
const recipes = ref([])

onMounted(async () => {
    try {
        const { data } = await axios.get('http://127.0.0.1:8000/recipe')
        recipes.value = data.result.filter(recipe => recipe.type === props.type)
    } catch (error) {
        console.log(error)
    }
})


const handleClick = (recipe) => {
    recipeStore.setSelectedRecipe(recipe)
}
</script>

<style lang="scss" scoped>
.container {
    overflow: hidden;
}
</style>