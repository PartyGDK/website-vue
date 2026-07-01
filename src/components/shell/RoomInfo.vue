<script setup>
import { useConnectionStore } from '@/stores/connection';

import RoomInfoCard from './RoomInfoCard.vue';

const store = useConnectionStore();
</script>

<template>
  <div class="roomInfo" v-if="store.roomData && store.roomData.status < 400">
    <h5>Информация о комнате</h5>
    <div class="cards flex-sm-row flex-column">
      <RoomInfoCard image-url="/static/img/controller/moderation.svg" title="Модерация">
        {{ store.roomData.moderationEnabled ? 'Включена' : 'Отключена' }}
      </RoomInfoCard>
      <RoomInfoCard image-url="/static/img/controller/password.svg" title="Пароль">
        {{ store.roomData.passwordRequired ? 'Требуется' : 'Не требуется' }}
      </RoomInfoCard>
      <RoomInfoCard image-url="/static/img/controller/twitch.svg" title="Twitch">
        {{ store.roomData.authRequired ? 'Требуется' : 'Не требуется' }}
      </RoomInfoCard>
    </div>
  </div>
</template>

<style>
.roomInfo {
  margin-top: 24px;
}

.roomInfo .cards {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>