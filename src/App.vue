<template>
  <div>
    <HeaderComponent v-if="authState.isAuthenticated"/>
    <SidebarComponent v-if="authState.isAuthenticated"/>
    <router-view/>
  </div>
</template>

<script>
import { authState } from './auth';
import HeaderComponent from "./components/includes/HeaderComponent.vue";
import SidebarComponent from "./components/includes/SidebarComponent.vue";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    SidebarComponent
  },
  data() {
    return {
      authState
    };
  }
}
</script>