<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required />

    <label for="email">Password:</label>
    <input type="password" name="password" v-model="password" required />

    <button>Login</button>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginPage',
  components: {},
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref(null);

    const store = useStore();
    const router = useRouter();

    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value,
        });

        router.push('/');
      } catch (err: any) {
        error.value = err.message;
      }
    };

    return { handleSubmit, email, password, error };
  },
});
</script>
