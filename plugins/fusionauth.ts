// import FusionAuthVuePlugin from "@fusionauth/vue-sdk";

// import { useCookie } from "#app";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(FusionAuthVuePlugin, {
//     nuxtUseCookie: useCookie,
//     clientId: "e9fdb985-9173-4e01-9d73-ac2d60d1dc8e",
//     serverUrl: "http://localhost:9011",
//     redirectUri: "http://localhost:5173",
//     shouldAutoFetchUserInfo: true,
//     shouldAutoRefresh: true,
//     scope: "openid email profile offline_access",
//     onRedirect(state) {
//       console.log("redirect...", state);
//     },
//     onAutoRefreshFailure(error) {
//       console.error("refresh failure", error);
//     },
//   });
// });
