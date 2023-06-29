import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRecipeStore = defineStore('recipe', () => {
  
  const selectedRecipe = ref(null)

  const setSelectedRecipe = (recipe) => {
    selectedRecipe.value = recipe
  }

  return { selectedRecipe, setSelectedRecipe }
})