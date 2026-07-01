<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  imageUrl: String
});
</script>

<template>
  <div class="infoCard">
    <div class="icon">
      <img :src="props.imageUrl" draggable="false">
    </div>
    <h5 class="title">{{ props.title }}</h5>
    <p class="value">
      <slot></slot>
    </p>
  </div>
</template>

<style>
.roomInfo .infoCard {
  margin: 8px 16px;
  min-width: 160px;
  text-align: center;
  color: var(--color-secondary);
}

.roomInfo .infoCard .icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  user-select: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.roomInfo .infoCard .icon img {
  height: 36px;
  vertical-align: middle;
}

.roomInfo .infoCard .title {
  font-size: 24px;
  margin-top: 8px;
  color: var(--color-primary);
}
</style>