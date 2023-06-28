<script setup>
import { RouterView } from 'vue-router'
import CookHat from './components/icons/CookHat.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-dark bg-transparent fixed-top">
        <div class="container-fluid d-flex justify-content-end">
          <button class="navbar-toggler bg-transparent" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon text-danger"></span>
          </button>
          <div class="offcanvas offcanvas-start text-bg-secondary" tabindex="-1" id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header d-flex flex-column">
              <!-- <div class="w-100 d-flex justify-content-end">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div> -->
              <CookHat></CookHat>
              <h1 class="offcanvas-title fw-bold text-dark" id="offcanvasDarkNavbarLabel">CocIdea
              </h1>
            </div>
            <div class="offcanvas-body mt-5">
              <ul class="navbar-nav d-flex flex-column justify-content-center align-items-center flex-grow-1 pe-3">
                <li class="nav-item w-75">
                  <router-link class="text-decoration-none" :to="{ name: 'omnivore' }">
                    <button class="custom-button bg-transparent fw-bold text-dark border border-2 border-dark text-center my-4 py-2 w-100"
                      aria-current="page" data-bs-dismiss="offcanvas">Omnivore Menu</button>
                  </router-link>
                </li>
                <li class="nav-item w-75">
                  <router-link class="text-decoration-none" :to="{ name: 'veggie' }">
                    <button class="custom-button bg-transparent fw-bold text-dark border border-2 border-dark text-center my-4 py-2 w-100"
                      aria-current="page" data-bs-dismiss="offcanvas">Veggie Menu</button>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
