<template>
  <div>
    <h2>Tạo Phòng</h2>
    <input v-model="roomName" placeholder="Nhập tên phòng" />
    <button @click="createRoom">Tạo</button>

    <h2>Danh sách phòng</h2>
    <ul>
      <li v-for="room in rooms" :key="room">{{ room }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const roomName = ref('');
const rooms = ref([]);

const createRoom = () => {
  if (roomName.value.trim()) {
    rooms.value.push(roomName.value);
    roomName.value = '';
  }
};
</script>

<style scoped>
input, button {
  margin: 10px;
  padding: 8px;
}
ul {
  list-style: none;
  padding: 0;
}
</style>