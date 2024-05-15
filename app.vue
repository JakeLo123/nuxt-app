<template>
  <div v-if="isLoggedIn">
    <h1>You are logged In: {{ userInfo?.email }}</h1>
    <FusionAuthLogoutButton>Logout</FusionAuthLogoutButton>
  </div>
  <div v-else>
    <h1>You are NOT logged In</h1>
    <button @click="login('state-from-login')">Click here to Login</button>
  </div>
</template>

<script setup lang="ts">
import { useFusionAuth } from "@fusionauth/vue-sdk";

const { isLoggedIn, login, userInfo } = useFusionAuth();
</script>
