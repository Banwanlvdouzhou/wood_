<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section">
        <h3>关于我们</h3>
        <p>传统木雕工艺传承平台致力于保护、传播和发展中国传统木雕艺术，连接艺术家、收藏家和爱好者。</p>
      </div>
      <div class="footer-section">
        <h3>快速链接</h3>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/history">木雕历史</router-link></li>
          <li><router-link to="/category">艺术分类</router-link></li>
          <li><router-link to="/masterpieces">名家作品</router-link></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>联系我们</h3>
        <p>邮箱：<a href="mailto:contact@woodcarving.com">2056105297@qq.com</a></p>
        <p>电话：<a href="tel:+86123456789">+86 15836066125</a></p>
        <p>地址：中国河南省新乡市</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} 传统木雕工艺传承平台 | 保留所有权利</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.footer {
  background: #2c2c2c;
  color: #f8f4e9;
  padding: 40px 20px 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  margin-bottom: 20px;
  min-width: 200px;
}

.footer-section h3 {
  color: #D2691E;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.footer-section p, .footer-section a {
  color: #f8f4e9;
  text-decoration: none;
  line-height: 1.6;
}

.footer-section a:hover {
  color: #D2691E;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-bottom {
  text-align: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #444;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }
  
  .footer-section {
    margin-bottom: 30px;
  }
}
</style>