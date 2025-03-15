<template>
  <nav class="nav-bar">
    <ul>
      <li v-for="item in navItems" :key="item.path">
        <router-link :to="item.path" class="nav-link">{{ item.title }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ref([
  { title: '首页', path: '/' },
  { title: '木雕历史', path: '/history' },
  { title: '艺术分类', path: '/category' },
  { title: '名家作品', path: '/masterpieces' }
])
</script>

<style scoped>
.nav-bar {
  background-color: #8B4513;
  padding: 10px 0;
}

.nav-bar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.nav-bar li {
  margin: 0 15px;
}

.nav-link {
  text-decoration: none;
  color: #F4A460;
  font-weight: 500;
  font-size: 1.1em;
  transition: color 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #FFD700;
}

@media (max-width: 768px) {
  .nav-bar ul {
    flex-direction: column;
    align-items: center;
  }

  .nav-bar li {
    margin: 10px 0;
  }
}
</style>