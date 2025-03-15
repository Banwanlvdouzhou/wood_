const path = require('path')
const webpack = require('webpack')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
    externals: {
      electron: 'commonjs electron',
    },
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/background.js',
      rendererProcessFile: 'src/main.js',
      nodeIntegration: false,
      contextIsolation: true,
      preload: './preload.js',
      builderOptions: {
        productName: "木雕艺术展示系统",
        appId: 'com.woodcarving.demo',
        directories: {
          output: "dist_electron"
        },
        extraResources: ['src/assets/**'],
        files: [
          "**/*",
          "!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}",
          "!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}",
          "!**/node_modules/*.d.ts",
          "!**/node_modules/.bin",
          "!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
          "!.editorconfig",
          "!**/._*",
          "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
          "!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
          "!**/{appveyor.yml,.travis.yml,circle.yml}",
          "!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}",
          "preload.js"
        ],
        asar: false,
        files: [
          "**/*",
          "!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}",
          "!**/node_modules/*/{test,__tests__,tests,powered-test,example,examples}",
          "!**/node_modules/*.d.ts",
          "!**/node_modules/.bin",
          "!**/*.{iml,o,hprof,orig,pyc,pyo,rbc,swp,csproj,sln,xproj}",
          "!.editorconfig",
          "!**/._*",
          "!**/{.DS_Store,.git,.hg,.svn,CVS,RCS,SCCS,.gitignore,.gitattributes}",
          "!**/{__pycache__,thumbs.db,.flowconfig,.idea,.vs,.nyc_output}",
          "!**/{appveyor.yml,.travis.yml,circle.yml}",
          "!**/{npm-debug.log,yarn.lock,.yarn-integrity,.yarn-metadata.json}",
        ],
        extraFiles: [
          {
            "from": "dist",
            "to": ".",
            "filter": ["**/*"]
          },
          {
            "from": "src/assets",
            "to": "assets",
            "filter": ["**/*"]
          }
        ],
        files: [
          "**/*",
          "preload.js"
        ],
        win: {
          icon: 'public/icons/icon.ico',
          target: 'nsis'
        },
        mac: {
          icon: 'public/icons/icon.icns',
          target: 'dmg'
        },
        linux: {
          icon: 'public/icons/icon.png',
          target: 'AppImage'
        }
      }
    }
  },

  chainWebpack: config => {
    config.module
      .rule('images')
        .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
        .use('url-loader')
          .loader('url-loader')
          .tap(options => ({
            ...options,
            limit: 4096,
            esModule: false,
            fallback: 'file-loader',
            name: 'img/[name].[hash:8].[ext]'
          }))
    
    config.module
      .rule('fonts')
        .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/i)
        .use('url-loader')
          .loader('url-loader')
          .options({
            limit: 4096,
            name: 'fonts/[name].[hash:8].[ext]'
          })
  }
}