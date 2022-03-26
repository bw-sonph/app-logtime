<template>
  <nav>
    <h1>SON DEMO</h1>
    <template v-if="authIsReady">
      <!-- for logged in users -->
      <div v-if="user">
        <span>Hello {{ user.email }}</span>
        <button @click="handleClick">Logout</button>
      </div>
      <!-- for logged out users -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </div>
    </template>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'NavbarCom',
  components: {},
  setup() {
    const store = useStore();
    const router = useRouter();

    const handleClick = () => {
      store.dispatch('logout');

      router.push({ name: 'LoginPage' });
    };

    return {
      handleClick,
      user: computed(() => store.state.user),
      authIsReady: computed(() => store.state.authIsReady),
    };
  },
});
</script>
