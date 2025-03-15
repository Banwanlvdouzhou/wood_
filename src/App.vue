<template>
  <div id="app">
    <TitleBar />
    <NavBar />
    <div class="app-content">
      <main class="main-container">
        <router-view class="content-area" />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

<script setup>
import TitleBar from '@/components/TitleBar.vue'
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
@import '@/assets/css/style.css';

/* 全局布局优化 */
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Noto Serif SC', serif;
  color: #333;
  background-color: #f8f4e9;
}

.app-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.main-container {
  flex: 1;
  padding: 20px;
  display: flex;
  gap: 20px;
}

/* 内容区域 */
.content-area {
  flex: 1;
  background: #fff;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
}

/* Typography */
h1, h2, h3 {
  font-family: 'Ma Shan Zheng', cursive;
  margin-bottom: 20px;
  color: #8B4513;
}

h1 { font-size: 2.5em; }
h2 { font-size: 2em; }
h3 { font-size: 1.5em; }

p {
  line-height: 1.8;
  margin-bottom: 15px;
}

/* 按钮样式 */
.btn {
  background-color: #8B4513;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #A0522D;
}

/* 图片样式 */
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}
</style>