<script setup>
document.title = '404';
</script>

<template>
  <div class="container errorContainer">
    <h1>404</h1>
    <p>Страница не найдена</p>
    <a href="/" class="btn btn-lg btn-primary">На главную</a>
  </div>
</template>

<style>
.errorContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 128px;
  min-height: 50vh;
}

.errorContainer h1 {
  font-size: 108px;
}

.errorContainer p {
  color: var(--color-secondary);
  margin-top: -16px;
}

.errorContainer .btn {
  margin-top: 64px;
}
</style>