<template>
  <div class="category-view">
    <h1>木雕艺术分类</h1>
    <p>木雕艺术形式多样，根据不同的标准可以分为多个类别。以下是一些主要的分类：</p>
    <div class="category-grid">
      <div class="category-item" v-for="category in categories" :key="category.id">
        <h2>{{ category.name }}</h2>
        <p>{{ category.description }}</p>
        <router-link :to="'/category/' + category.id" class="detail-btn">了解详情</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const categories = ref([
  { id: 1, name: '传统雕刻', description: '包括浮雕、圆雕、镂空雕等传统技法。' },
  { id: 2, name: '现代创新', description: '融合现代设计理念的创新木雕作品。' },
  { id: 3, name: '家具艺术', description: '将木雕艺术应用于家具设计的独特作品。' },
  { id: 4, name: '小型雕刻', description: '精巧的木雕摆件和实用艺术品。' }
])
</script>

<style scoped>
.category-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #8B4513;
  text-align: center;
  margin-bottom: 30px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.category-item {
  background-color: #f8f4e9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.category-item h2 {
  color: #D2691E;
  margin-bottom: 10px;
}

.category-item p {
  flex-grow: 1;
  margin-bottom: 15px;
}

.detail-btn {
  display: inline-block;
  background-color: #8B4513;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;
}

.detail-btn:hover {
  background-color: #A0522D;
}
</style>