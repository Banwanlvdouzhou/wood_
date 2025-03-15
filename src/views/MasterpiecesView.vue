<template>
  <div class="masterpieces-view">
    <h1>木雕名家作品</h1>
    <p>中国木雕艺术历史悠久，名家辈出。以下是一些著名的木雕艺术家及其代表作品：</p>
    <div class="masterpiece-list">
      <div class="masterpiece-item" v-for="artist in artists" :key="artist.id">
        <h2>{{ artist.name }}</h2>
        <p><strong>代表作品：</strong> {{ artist.masterpiece }}</p>
        <p>{{ artist.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const artists = ref([
  {
    id: 1,
    name: '董达',
    masterpiece: '《八仙过海》',
    description: '清代著名木雕艺术家，擅长人物雕刻，作品栩栩如生。'
  },
  {
    id: 2,
    name: '黄福庆',
    masterpiece: '《十八罗汉》',
    description: '当代木雕大师，擅长佛像雕刻，作品精细入微。'
  },
  {
    id: 3,
    name: '郑春辉',
    masterpiece: '《清明上河图》',
    description: '现代木雕艺术家，擅长大型浮雕作品，再现历史场景。'
  },
  {
    id: 4,
    name: '陈国胜',
    masterpiece: '《九龙壁》',
    description: '福建木雕传承人，擅长传统题材和技法的创新应用。'
  }
])
</script>

<style scoped>
.masterpieces-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #8B4513;
  text-align: center;
  margin-bottom: 30px;
}

.masterpiece-list {
  display: grid;
  gap: 30px;
}

.masterpiece-item {
  background-color: #f8f4e9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.masterpiece-item h2 {
  color: #D2691E;
  margin-bottom: 10px;
}

.masterpiece-item p {
  margin-bottom: 10px;
}
</style>