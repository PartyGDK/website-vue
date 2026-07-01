<script setup>
import { getUrlParameter } from '@/utils/controller';
import { getTokenFromUrl, setToken } from '@/utils/twitch';
import { onMounted, ref } from 'vue';

const accessToken = getTokenFromUrl();
const errorName = getUrlParameter('error') || '';
const description = ref(getUrlParameter('error_description') || '');

function returnToMain() {
  location.href = '/';
}

onMounted(() => {
  if (!description.value) {
    if (accessToken)
      description.value = 'Авторизация прошла успешно. Возврат на главную страницу…';
    else
      description.value = 'Не удалось получить токен авторизации';
  }

  if (accessToken) {
    setToken(accessToken);
    setTimeout(() => returnToMain(), 1000);
  }
});
</script>

<template>
  <div class="container">
    <h1 class="title">{{ accessToken ? 'Успешно!' : 'Ошибка' }}</h1>
    <h3 class="errorName">{{ errorName }}</h3>
    <p class="description">{{ description }}</p>
    <a href="/" class="btn btn-lg btn-primary mt-5" v-if="!accessToken">На главную</a>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
  min-height: 50vh;
  font-size: 18px;
}

.title {
  font-size: 72px;
}

.errorName, .description {
  color: var(--color-secondary);
}
</style>