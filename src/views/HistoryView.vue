<template>
  <div class="history-view">
    <h1>木雕艺术的悠久历史</h1>
    <p>中国木雕艺术有着数千年的悠久历史，从新石器时代的简单木器，到汉代的建筑构件，再到明清时期的精美家具，木雕艺术一直在演变和发展。</p>
    <h2>木雕艺术的发展阶段</h2>
    <ul>
      <li>先秦时期：原始木雕艺术的萌芽</li>
      <li>汉唐时期：木雕艺术的成熟与繁荣</li>
      <li>宋元时期：木雕艺术的精致化</li>
      <li>明清时期：木雕艺术的巅峰时代</li>
      <li>近现代：传统与创新的融合</li>
    </ul>
    <p>每个时期的木雕艺术都有其独特的特点和代表作品，反映了当时的社会文化和审美取向。</p>
  </div>
</template>

<script>
export default {
  name: 'HistoryView'
}
</script>

<style scoped>
.history-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

h1, h2 {
  color: #8B4513;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

li::before {
  content: "•";
  color: #D2691E;
  font-size: 1.5em;
  position: absolute;
  left: 0;
  top: -5px;
}
</style>