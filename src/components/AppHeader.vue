<template>
  <header class="header-wrapper">
    <div class="brand-container">
      <img src="../assets/logo.png" alt="木雕艺术" class="brand-logo">
      <h1 class="brand-title">传统木雕工艺传承</h1>
    </div>
    
    <nav class="main-nav">
      <ul class="nav-list">
        <li v-for="(item, index) in navItems" :key="index">
          <router-link :to="item.path" class="nav-link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>

    <button class="hamburger" @click="toggleSidebar" aria-label="菜单">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
  
  <div class="banner-section">
    <div class="banner-content">
      <h2 class="banner-title">传承千年技艺</h2>
      <h3 class="banner-subtitle">雕琢时光之美</h3>
      <p class="banner-description">探索中国传统木雕艺术的魅力世界</p>
      <router-link to="/category" class="banner-cta">开始探索</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title: '首页', path: '/' },
        { title: '木雕历史', path: '/history' },
        { title: '艺术分类', path: '/category' },
        { title: '名家作品', path: '/masterpieces' },
        { title: '图册展示', path: '/gallery' },
        { title: '加入我们', path: '/join' }
      ],
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen
      document.body.classList.toggle('sidebar-open')
    }
  }
}
</script>

<style scoped>
.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  background: #f8f4e9;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.brand-container {
  display: flex;
  align-items: center;
}

.brand-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.brand-title {
  font-size: 24px;
  font-weight: 700;
  color: #8B4513;
  margin-left: 15px;
}

.main-nav {
  display: flex;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-link {
  text-decoration: none;
  color: #8B4513;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #D2691E;
}

.hamburger {
  display: none;
}

.banner-section {
  position: relative;
  height: 500px;
  overflow: hidden;
  background: linear-gradient(135deg, #8B4513, #D2691E);
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-content {
  text-align: center;
  color: #fff;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  max-width: 600px;
}

.banner-title {
  font-size: 3em;
  margin-bottom: 10px;
  font-family: 'Ma Shan Zheng', cursive;
}

.banner-subtitle {
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Ma Shan Zheng', cursive;
}

.banner-description {
  font-size: 1.2em;
  margin-bottom: 30px;
  line-height: 1.6;
}

.banner-cta {
  display: inline-block;
  padding: 12px 24px;
  background-color: #FFA500;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 1.1em;
  transition: background-color 0.3s ease;
}

.banner-cta:hover {
  background-color: #FF8C00;
}

@media (max-width: 768px) {
  .header-wrapper {
    padding: 15px 20px;
  }

  .brand-title {
    font-size: 20px;
  }

  .main-nav {
    display: none;
  }

  .hamburger {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: #8B4513;
    margin: 5px 0;
    transition: 0.3s;
  }

  .sidebar-open .hamburger span:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .sidebar-open .hamburger span:nth-child(2) {
    opacity: 0;
  }

  .sidebar-open .hamburger span:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
  }

  .banner-section {
    height: 300px;
  }

  .banner-text h2 {
    font-size: 2em;
  }

  .banner-text p {
    font-size: 1em;
  }
}
</style>
