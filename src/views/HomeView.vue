<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="hero-content">
        <h1>传承千年木雕技艺</h1>
        <p>{{ introduction }}</p>
        <router-link to="/category" class="btn explore-btn">探索工艺</router-link>
      </div>
    </section>

    <section class="featured-section">
      <h2>精选木雕艺术</h2>
      <div class="featured-grid">
        <div v-for="item in featuredItems" :key="item.id" class="featured-item">
          <img :src="item.image" :alt="item.title" class="featured-img">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <section class="categories-section">
      <h2>木雕艺术分类</h2>
      <div class="categories-grid">
        <div v-for="category in categories" :key="category.id" class="category-card">
          <img :src="category.image" :alt="category.title" class="category-img">
          <h3>{{ category.title }}</h3>
          <p>{{ category.description }}</p>
          <router-link :to="'/category/' + category.id" class="btn category-btn">了解更多</router-link>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2>加入我们的木雕艺术社区</h2>
      <p>分享你的作品，学习新技巧，与其他艺术家交流</p>
      <router-link to="/join" class="btn cta-btn">立即加入</router-link>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const introduction = ref('木雕艺术是中国传统文化的瑰宝，融合了匠人的智慧与创造力。从古老的祠堂雕刻到现代的艺术装置，木雕艺术见证了中华文明的演变与传承。让我们一起探索这门古老而富有生命力的艺术。')

const featuredItems = ref([
  { id: 1, title: '龙凤呈祥', description: '明代风格的精细雕刻，展现了传统吉祥图案的魅力。', image: '/img/1.jpg' },
  { id: 2, title: '山水隐居', description: '融合了传统山水画元素的现代木雕作品，意境深远。', image: '/img/2.jpg' },
  { id: 3, title: '百鸟朝凤', description: '栩栩如生的鸟类雕刻，展现了木雕艺术家的非凡技艺。', image: '/img/3.jpg' }
])

const categories = ref([
  { id: 1, title: '传统雕刻', description: '包括浮雕、圆雕、镂空雕等传统技法', image: '/img/4.jpg' },
  { id: 2, title: '现代创新', description: '融合现代设计理念的创新木雕作品', image: '/img/5.jpg' },
  { id: 3, title: '家具艺术', description: '将木雕艺术应用于家具设计的独特作品', image: '/img/6.jpg' },
  { id: 4, title: '小型雕刻', description: '精巧的木雕摆件和实用艺术品', image: '/img/7.jpg' }
])
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');

.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #FFF8DC;
  font-family: 'Ma Shan Zheng', cursive, sans-serif;
}

.hero-section {
  background: linear-gradient(135deg, rgba(245, 230, 211, 0.9) 0%, rgba(255, 250, 250, 0.9) 100%);
  padding: 80px 40px;
  border-radius: 16px;
  margin-bottom: 60px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(139, 69, 19, 0.05),
    rgba(139, 69, 19, 0.05) 10px,
    rgba(139, 69, 19, 0.08) 10px,
    rgba(139, 69, 19, 0.08) 20px
  );
  opacity: 0.1;
  z-index: 1;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3em;
  color: #8B4513;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-content p {
  font-size: 1.2em;
  color: #5D4037;
  margin-bottom: 30px;
  line-height: 1.6;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-family: 'Ma Shan Zheng', cursive, sans-serif;
}

.explore-btn {
  background: #D2691E;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.explore-btn:hover {
  background: #A0522D;
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.featured-section, .categories-section {
  margin-bottom: 60px;
  position: relative;
}

.featured-section::before, .categories-section::before {
  content: '';
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(to right, transparent, #8B4513, transparent);
}

h2 {
  font-size: 2.5em;
  color: #8B4513;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.featured-grid, .categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.featured-item, .category-card {
  background: #FFF;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #DEB887;
}

.featured-item:hover, .category-card:hover {
  transform: translateY(-5px) rotate(1deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.featured-img, .category-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-bottom: 3px solid #DEB887;
}

.featured-item h3, .category-card h3 {
  font-size: 1.4em;
  color: #8B4513;
  margin: 15px 0 10px;
  padding: 0 15px;
  text-align: center;
}

.featured-item p, .category-card p {
  font-size: 1em;
  color: #5D4037;
  line-height: 1.6;
  padding: 0 15px 15px;
  text-align: center;
}

.category-btn {
  background: #8B4513;
  color: white;
  margin: 10px 15px 20px;
  font-size: 0.9em;
  display: block;
  text-align: center;
}

.category-btn:hover {
  background: #A0522D;
}

.cta-section {
  background: linear-gradient(135deg, #f5e6d3 0%, #fffafa 100%);
  padding: 60px 40px;
  border-radius: 16px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    rgba(139, 69, 19, 0.05),
    rgba(139, 69, 19, 0.05) 10px,
    rgba(139, 69, 19, 0.08) 10px,
    rgba(139, 69, 19, 0.08) 20px
  );
  z-index: 1;
}

.cta-section h2, .cta-section p, .cta-section .btn {
  position: relative;
  z-index: 2;
}

.cta-section h2 {
  color: #8B4513;
  margin-bottom: 20px;
  font-size: 2.2em;
}

.cta-section p {
  color: #5D4037;
  margin-bottom: 30px;
  font-size: 1.1em;
}

.cta-btn {
  background: #D2691E;
  color: white;
}

.cta-btn:hover {
  background: #A0522D;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 60px 20px;
  }

  .hero-content h1 {
    font-size: 2.2em;
  }

  .featured-grid, .categories-grid {
    grid-template-columns: 1fr;
  }

  h2 {
    font-size: 2em;
  }
}
</style>