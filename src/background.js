import { app, BrowserWindow, screen, ipcMain, protocol } from 'electron'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

let mainWindow

// 全局错误处理
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

// 在 app 准备好之前注册协议
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

function createWindow() {
  protocol.registerFileProtocol('app', (request, callback) => {
    const url = request.url.substr(6)
    callback({ path: path.normalize(`${__dirname}/${url}`) })
  })

  console.log('Creating window...')
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  mainWindow = new BrowserWindow({
    width: Math.min(width - 20, 1200),
    height: Math.min(height - 100, 800),
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  console.log('Preload script path:', path.join(__dirname, 'preload.js'))

  // 动态加载开发/生产环境
  const isDevelopment = process.env.NODE_ENV !== 'production'
  console.log('Development mode:', isDevelopment)
  let url
  if (isDevelopment) {
    url = process.env.WEBPACK_DEV_SERVER_URL || 'http://localhost:8080'
  } else {
    url = 'app://./index.html'
  }
  console.log('Loading URL:', url)
  console.log('Loading URL:', url)
  mainWindow.loadURL(url).catch(err => {
    console.error('Failed to load URL:', err)
  })

  // 添加更多调试信息
  mainWindow.webContents.on('did-start-loading', () => {
    console.log('Started loading content')
  })

  mainWindow.webContents.on('did-stop-loading', () => {
    console.log('Finished loading content')
  })

  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL) => {
    console.error('Failed to load:', errorCode, errorDescription, validatedURL)
  })

  mainWindow.webContents.on('dom-ready', () => {
    console.log('DOM is ready')
    mainWindow.webContents.executeJavaScript(`
      console.log('Page content:', document.body.innerHTML);
      console.log('Loaded resources:', performance.getEntriesByType('resource').map(r => r.name));
    `)
  })

  // 添加资源加载错误处理
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription, validatedURL, isMainFrame) => {
    console.error('Resource failed to load:', errorCode, errorDescription, validatedURL, isMainFrame)
  })


  // 添加超时检查
  setTimeout(() => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      console.log('Timeout check: Window still exists')
      mainWindow.webContents.executeJavaScript(`
        console.log('Timeout check - Page content:', document.body.innerHTML);
      `)
    } else {
      console.log('Timeout check: Window has been destroyed')
    }
  }, 10000) // 10秒后检查

  // 添加错误处理
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription)
    if (isDevelopment) {
      // 如果加载失败，尝试重新加载
      setTimeout(() => {
        console.log('Attempting to reload...')
        mainWindow.loadURL(url)
      }, 5000) // 5秒后重试
    }
  })

  // 在开发模式下打开开发者工具
  if (isDevelopment) {
    mainWindow.webContents.openDevTools()
  }

  // 添加成功加载的日志
  mainWindow.webContents.on('did-finish-load', () => {
    console.log('Page loaded successfully')
  })

  // 添加 DOM 内容加载完成的日志
  mainWindow.webContents.on('dom-ready', () => {
    console.log('DOM content loaded')
  })

  // 监听控制台消息
  mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
    console.log('Console:', message)
  })

  // 监听页面标题变化
  mainWindow.on('page-title-updated', (event, title) => {
    console.log('Page title updated:', title)
  })

  // 监听页面favicon更新
  mainWindow.on('page-favicon-updated', (event, favicons) => {
    console.log('Favicon updated')
  })

  // 监听渲染进程崩溃
  mainWindow.webContents.on('crashed', (event, killed) => {
    console.log('Renderer process crashed')
  })

  // 监听渲染进程挂起
  mainWindow.on('unresponsive', () => {
    console.log('Renderer process is unresponsive')
  })

  // 监听渲染进程恢复响应
  mainWindow.on('responsive', () => {
    console.log('Renderer process is responsive')
  })
}

// 窗口管理优化
app.on('ready', createWindow)

app.on('window-all-closed', () => app.quit())

app.on('activate', () => {
  if (!mainWindow || mainWindow.isDestroyed()) createWindow()
})

// 处理窗口控制
ipcMain.on('minimize-window', () => {
  if (mainWindow) mainWindow.minimize()
})

ipcMain.on('maximize-window', () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  }
})

ipcMain.on('close-window', () => {
  if (mainWindow) mainWindow.close()
})

// 移除默认全屏启动