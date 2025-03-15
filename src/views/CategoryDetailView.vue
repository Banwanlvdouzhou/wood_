<template>
  <div class="category-detail-view" v-if="category">
    <h1>{{ category.name }}</h1>
    <div class="content">
      <p>{{ category.description }}</p>
      <h2>特点</h2>
      <ul>
        <li v-for="feature in category.features" :key="feature">{{ feature }}</li>
      </ul>
      <h2>代表作品</h2>
      <ul>
        <li v-for="work in category.representativeWorks" :key="work">{{ work }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const categories = ref([
  {
    id: 1,
    name: '传统雕刻',
    description: '传统雕刻是中国木雕艺术的根基，包括浮雕、圆雕、镂空雕等多种技法。这些技法在数千年的发展中不断完善，形成了独特的艺术语言和表现形式。',
    features: [
      '技法多样，包括浮雕、圆雕、镂空雕等',
      '题材广泛，涵盖历史、神话、日常生活等',
      '注重细节表现和整体构图',
      '常用于建筑装饰、家具制作等领域'
    ],
    representativeWorks: [
      '《清明上河图》木雕',
      '东阳木雕《二十四孝》',
      '福建漳州木雕《龙凤呈祥》'
    ]
  },
  {
    id: 2,
    name: '现代创新',
    description: '现代创新木雕融合了传统技法和现代设计理念，探索新的表现形式和主题。这类作品常常突破传统界限，呈现出独特的艺术魅力。',
    features: [
      '结合现代设计理念和传统技法',
      '题材更加多元化，包括抽象和概念性作品',
      '注重材质的特性和纹理的表现',
      '常用于艺术装置和现代室内装饰'
    ],
    representativeWorks: [
      '《生命之树》by 陈国胜',
      '《城市记忆》系列 by 吴为山',
      '《自然的韵律》by 黄永玉'
    ]
  },
  {
    id: 3,
    name: '家具艺术',
    description: '木雕家具艺术将实用性和艺术性完美结合，创造出既美观又实用的家具作品。这类作品常常体现出精湛的工艺和独特的设计理念。',
    features: [
      '结合实用功能和艺术表现',
      '注重整体设计和细节雕刻的和谐',
      '常用红木、黄花梨等名贵木材',
      '融合传统纹样和现代设计元素'
    ],
    representativeWorks: [
      '明式家具代表作《透雕龙纹官帽椅》',
      '清代家具代表作《螭龙纹大叶紫檀圈椅》',
      '现代家具艺术品《山水屏风》by 王义利'
    ]
  },
  {
    id: 4,
    name: '小型雕刻',
    description: '小型木雕作品虽然体积小巧，但往往蕴含着大智慧和高超技艺。这类作品包括各种摆件、把玩件和实用小物件，展现了木雕艺术的精巧和灵动。',
    features: [
      '体积小巧，便于收藏和欣赏',
      '注重细节刻画和精细工艺',
      '题材丰富，包括人物、动物、植物等',
      '常用檀香木、黄杨木等易于精雕的木材'
    ],
    representativeWorks: [
      '核雕《十八罗汉》',
      '黄杨木雕《百鸟朝凤》',
      '微雕《葡萄》by 陈立'
    ]
  }
])

const category = computed(() => {
  const id = parseInt(route.params.id)
  return categories.value.find(cat => cat.id === id)
})
</script>

<style scoped>
.category-detail-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  color: #8B4513;
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  color: #D2691E;
  margin-top: 20px;
  margin-bottom: 10px;
}

.content {
  background-color: #f8f4e9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}
</style>