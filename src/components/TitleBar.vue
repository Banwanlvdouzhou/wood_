<template>
  <div class="title-bar">
    <div class="title">木雕艺术展示系统</div>
    <div class="window-controls">
      <button @click="minimize">-</button>
      <button @click="maximize">□</button>
      <button @click="close">×</button>
    </div>
  </div>
</template>

<script setup>
import { ipcRenderer } from 'electron'

const minimize = () => ipcRenderer.send('minimize-window')
const maximize = () => ipcRenderer.send('maximize-window')
const close = () => ipcRenderer.send('close-window')
</script>

<style scoped>
.title-bar {
  -webkit-app-region: drag;
  height: 30px;
  background-color: #8B4513;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.title {
  font-size: 14px;
}

.window-controls {
  -webkit-app-region: no-drag;
}

.window-controls button {
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  padding: 0 5px;
}

.window-controls button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>