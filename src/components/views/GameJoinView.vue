<script setup>
import { useConnectionStore } from '@/stores/connection';
import { getCookie } from '@/utils/controller';
import { isAuthenticationAvailable } from '@/utils/twitch.js';

import AppName from '../shell/AppName.vue';
import AuthButton from '../shell/AuthButton.vue';
import ConnectButton from '../shell/ConnectButton.vue';
import ControllerSettings from '../shell/ControllerSettings.vue';
import LabeledInput from '../shell/LabeledInput.vue';
import RoleButton from '../shell/RoleButton.vue';
import RoomCodeInput from '../shell/RoomCodeInput.vue';
import RoomInfo from '../shell/RoomInfo.vue';

const store = useConnectionStore();
store.connectionData.moderator = false;

const playerName = getCookie('playerName');

document.title = 'PartyGDK - Вход в игру';
</script>

<template>
  <ControllerSettings title="Вход в игру">
    <AuthButton v-if="isAuthenticationAvailable()" />
    <RoomCodeInput />
    <LabeledInput label="Имя" name="playerName" id="playerName" :maxlength="12" className="mb-4" :value="playerName" />
    <p class="form-label">Войти как</p>
    <div class="row mx-auto mb-5">
      <div class="col">
        <RoleButton role="player">Игрок</RoleButton>
      </div>
      <div class="col">
        <RoleButton role="audience">Зритель</RoleButton>
      </div>
    </div>
    <ConnectButton textDefault="Войти" textBusy="Подключение…" />
    <AppName />
    <RoomInfo />
  </ControllerSettings>
</template>

<style scoped>
.roleBtn {
  font-size: 24px;
  width: 100%;
}

.roleBtn.btn-primary {
  border: 1px solid transparent;
}

.roleBtn.disabled {
  opacity: .5;
  text-decoration: line-through;
}
</style>