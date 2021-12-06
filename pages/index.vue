<template>
  <section class="container">
    <div class="m-10" >
      <center>
        
      <h2 class="subtitle">
        HELLO WORLD
      </h2>
      <app-logo/>
      <ul class="menu">
        <li><nuxt-link to="/">Home</nuxt-link></li>
      </ul>
      </center>
    </div>
  </section>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style scoped>
.container { width: 75%; margin: 100px auto; text-align: center;}
.menu { list-style: none; margin-bottom: 20px;}
.menu li { display: inline;}
.menu li a { padding: 20px; text-decoration: none;}
</style>