<script setup>
import * as twitch from '@/utils/twitch';
import { computed, onMounted, ref } from 'vue';

const loggedIn = ref(false);
const loading = ref(false);

const className = computed(() => {
  const classes = ['btn', 'authBtn', loggedIn.value ? 'btn-outline-primary' : 'btn-primary'];
  if (loading.value)
    classes.push('disabled');

  return classes.join(' ');
});

const text = computed(() => {
  if (loading.value)
    return 'Загрузка…';

  return loggedIn.value ? 'Выйти' : 'Войти через Twitch';
});

async function tryLoggingIn() {
  const token = twitch.getToken();
  if (!token)
    return;

  loading.value = true;
  const username = await twitch.getUsername(token);
  if (!username)
    twitch.removeToken();
  else {
    const nameField = document.getElementById('playerName');
    nameField.disabled = true;
    nameField.value = username.substring(0, nameField.maxlength);
    loggedIn.value = true;
  }

  loading.value = false;
}

function onClick() {
  loading.value = true;
  if (loggedIn.value) {
    twitch.removeToken();
    location.reload();
  } else {
    location.href = twitch.getTwitchAuthURL();
  }
}

onMounted(() => tryLoggingIn());
</script>

<template>
  <button :class="className" @click="onClick">{{ text }}</button>
</template>

<style>
.authBtn {
  font-size: 14px;
  margin-bottom: 16px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>