<template>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center pb-5">
        <div class="row row-cols-7 justify-content-center align-items-center">
            <div v-for="recipe in recipes" :key="recipe.id"
                class="col-12 col-lg-4 col-md-6 my-3 d-flex flex-column justify-content-center align-items-center">
                <div class="container rounded-4 border border-2 border-dark p-0">
                    <router-link class="text-decoration-none" :to="{ name: 'recipe' }">
                        <img @click="handleClick(recipe)" class="img-fluid m-0 p-0"
                            :src="`/recipes-images/${recipe.image}.jpg`" alt="">
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
const data = ref([
    {
        duration: "28 mins",
        id: 1,
        image: "GORDITACOS",
        ingredients: [
            "500 grams of corn dough",
            "salt to taste",
            "sufficient amount of water",
            "Oaxaca cheese to taste",
            "sufficient amount of vegetable oil",
            "2 cups of chorizo",
            "1 cup of diced pineapple",
            "finely chopped onion to taste",
            "finely chopped cilantro to taste",
            "guacamole to taste",
            "lime to taste"
        ],
        name: "Gorditacos",
        steps: [
            "For the dough: Add the corn dough, a little salt, ...and flatten it to a thickness of 1 cm. Set aside.",
            "Fry the cheese gorditas in a pan with sufficient o...he gorditas on paper towels to remove excess oil.",
            "Add the chorizo to a skillet over medium heat, sau...d pineapple and cook for an additional 3 minutes.",
            "Assemble your gorditacos with the chorizo, onion, cilantro, guacamole, and lime juice."
        ],
        type: "Omnivore"
    },
    {
        duration: "1h 20 mins",
        id: 2,
        image: "TROMPO_HAMBURGUESA_PASTOR",
        ingredients: [
            "1/4 tazas de Aceite de Uva Inés®",
            "1/2 tazas de cebolla, asada",
            "2 dientes de ajo, asados",
            "3 jitomates, asados",
            "10 chiles guajillos, hidratados",
            "1/4 tazas de jugo de naranja",
            "1/4 tazas de vinagre de manzana",
            "1 taza de achiote líquido",
            "al gusto de pimienta",
            "al gusto de sal",
            "3 kilos de carne molida de cerdo",
            "1/2 tazas de pan molido",
            "2 rebanadas de piña",
            "15 rebanadas de queso manchego",
            "suficiente de palo de brocheta, largo",
            "al gusto de tortillas de maíz",
            "al gusto de cebolla, finamente picada, para acompañar",
            "al gusto de cilantro, finamente picado, para acompañar"
        ],
        name: "Trompo de Hamburguesa al Pastor",
        steps: [
            "Licúa el Aceite de Uva Inés®, la cebolla, el ajo, ...te, la pimienta y la sal por 5 minutos y reserva.",
            "En un bowl, mezcla la carne molida, ½ taza de la s...s del tamaño de tu mano y aplastándolas. Reserva.",
            "Para formar el trompo de hamburguesa al pastor: Co…rne y el queso. Termina con una rebanada de piña.",
            "Coloca el trompo de hamburguesa en un asador con c…a por 80 minutos. Destapa y barniza con el adobo.",
            "Sirve el trompo de hamburguesa al pastor en una ta…compaña con tortillas, cebolla, cilantro y salsa."
        ],
        type: "Omnivore"
    },
    {
        duration: "1h 20 mins",
        id: 3,
        image: "COSTILLAS_MOJO_AJO",
        ingredients: [
            "1 sobre de Marinador sabor Mojo de ajo McCormick®",
            "30 mililitros de agua",
            "1/4 tazas de mantequilla, derretida",
            "600 gramos de costilla de cerdo",
            "2 tazas de papa cambray, a la mitad",
            "1 taza de mix de zanahorias baby",
            "1 cucharada de romero, finamente picado",
            "1/4 tazas de mantequilla, derretida",
            "al gusto de sal",
            "al gusto de pimienta"
        ],
        name: "Costillas al Mojo de Ajo",
        steps: [
            "En un bowl, mezcla el Marinador sabor Mojo de ajo ... la mantequilla y mezcla hasta integrar. Reserva.",
            "Coloca las costillas en un refractario, vierta la marinada y deja reposar por 15 minutos. Reserva.",
            "Coloca las papas en una charola extendida, agrega ..., tapa con aluminio y hornea a 180 °C por 1 hora.",
            "Destapa el costillar al mojo de ajo y rostiza a 200 °C por 20 minutos.",
            "Sirve las costillas al mojo de ajo en un plato extendido y acompañada con las verduras."
        ],
        type: "Omnivore"
    },
    {
        duration: "40 mins",
        id: 4,
        image: "EMPANADAS_VEGETARIANAS",
        ingredients: [
            "2 cucharadas de aceite de oliva, para el relleno",
            "1/2 taza de cebolla finamente picada, para el relleno",
            "1 cucharada de ajo finamente picado, para el relleno",
            "1 taza de pimiento rojo en cubos pequeños, para el relleno",
            "2 tazas de champiñones en cubos pequeños, para el relleno",
            "1 taza de hongo portobello en cubos pequeños, para el relleno",
            "1 taza de elote amarillo desgranado, para el relleno",
            "1 taza de puré de tomate, para el relleno",
            "1 cucharadita de paprika, para el relleno",
            "Suficiente de sal",
            "Suficiente de pimienta molida",
            "1 taza de queso Manchego rallado",
            "15 discos para empanada",
            "1 huevo batido, para barnizar",
            "Al gusto de chimichurri, para acompañar"
        ],
        name: "Empanadas Vegetarianas",
        steps: [
            "Calienta el aceite de oliva en una sartén a fuego ...uido se evapore. Deja enfriar durante 10 minutos.",
            "Coloca los discos de empanada sobre una bandeja co...salga. Barniza las empanadas con el huevo batido.",
            "Hornea las empanadas vegetarianas a 180 °C durante 30 minutos.",
            "Sirve las empanadas vegetarianas en una tabla y acompáñalas con chimichurri."
        ],
        type: "Veggie"
    },
    {
        duration: "20 mins",
        id: 6,
        image: "TEMPURA_JAPONESA",
        ingredients: [
            "1 paquete de Champiñones baby Freshly® by Eva®, 250 g",
            "1 3/4 tazas de harina",
            "1/4 taza de fécula de maíz",
            "1/2 cucharadita de levadura en polvo",
            "1 cucharadita de ajo en polvo",
            "1 cucharadita de sal",
            "2 tazas de agua",
            "1 yema de huevo",
            "3 cubos de hielo",
            "suficiente de aceite en aerosol, para freír",
            "al gusto de salsa de soya, para acompañar",
            "suficiente de cebollín, finamente picado, para acompañar"
        ],
        name: "Tempura Japonesa",
        steps: [
            "Mezcla la harina con la fécula de maíz, la levadur... sal en un tazón. Integra por completo y reserva.",
            "En otro tazón con agua, mezcla la yema de huevo y ...lo ayuda a mantener la temperatura del agua fría.",
            "Agrega la harina de golpe al tazón con agua y mezc...ten. No te preocupes si quedan grumos, es normal.",
            "Calienta el aceite en una cacerola profunda a una temperatura de 170 °C a 180 °C.",
            "Sumerge los Champiñones baby Freshly® by Eva® en l...ita saturar el aceite con demasiados champiñones.",
            "Retira los champiñones con una cuchara espumadera ...na rejilla para evitar que la tempura se ablande.",
            "Sirve los champiñones tempura de inmediato y acompáñalos con salsa de soya y cebollín picado."
        ],
        type: "Veggie"
    },
    {
        duration: "40 mins",
        id: 5,
        image: "ESPAGUETI_CALABAZA_ALFREDO",
        ingredients: [
            "4 calabazas",
            "4 cucharadas de Margarina Primavera® Chantilly",
            "1 ajo, finamente picado",
            "1 cucharada de ralladura de limón",
            "2 cucharadas de fécula de maíz",
            "1 taza de leche",
            "1/4 taza de queso crema, en cubos pequeños",
            "4 cucharadas de queso romano, rallado",
            "4 cucharadas de queso parmesano, rallado",
            "3 cucharadas de perejil, finamente picado, para decorar"
        ],
        name: "Espagueti de Calabaza Alfredo",
        steps: [
            "Con ayuda de un rallador de verduras, forma tiras ... una bandeja con papel absorbente y deja reposar.",
            "En un sartén, calienta 2 cucharadas de Margarina P...a la calabaza por 4 minutos. Retírala del sartén.",
            "En el mismo sartén, derrite las 2 cucharadas restantes de Margarina Primavera® Chantilly.",
            "Agrega el ajo, la ralladura de limón, la fécula de maíz y cocina por 1 minuto.",
            "Vierte la leche y mezcla bien hasta que la salsa se espese.",
            "Añade el queso crema, el queso romano y el queso parmesano. Mezcla hasta obtener una salsa homogénea.",
            "Incorpora las tiras de calabaza a la salsa y cocina ...tirar el espagueti de calabaza alfredo con perejil."
        ],
        type: "Veggie"
    }
])



/* onMounted(async () => {
    try {
        const { data } = await axios.get('http://127.0.0.1:8000/recipe')
        console.log(data.result);
        recipes.value = data.result.filter(recipe => recipe.type === props.type)
    } catch (error) {
        console.log(error)
    }
}) */

const recipes = ref(data.value.filter(recipe => recipe.type === props.type))

const handleClick = (recipe) => {
    recipeStore.setSelectedRecipe(recipe)
}
</script>

<style lang="scss" scoped>
.container {
    overflow: hidden;
}
</style>