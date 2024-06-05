<template>
<HeaderComponent/>
<SidebarComponent/>
<router-view/>
</template>

<script>
import HeaderComponent from "./components/includes/HeaderComponent.vue";
import SidebarComponent from "./components/includes/SidebarComponent.vue";
export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent
  }
}
</script>

<style>

</style>
