import webpackChain from './webpackChain.js'

const path = require('path')
const config = {
  projectName: 'taro-template',
  date: '2020-7-26',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [],
  presets: [],
  defineConstants: {
  },
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/package': path.resolve(__dirname, '..', 'package.json'),
    '@/project': path.resolve(__dirname, '..', 'project.config.json'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  terser: {
    enable: true,
    config: {}
  },
  mini: {
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          // autoprefixer 配置项
        }
      },
      pxtransform: {
        enable: true,
        config: {
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    commonChunks: ['runtime', 'vendors', 'taro', 'common'],
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    output: {
      filename: 'js/[name].[hash:8].js',
      // chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    router: {
      mode: 'browser',
      basename: '',
      customRoutes: {},
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      pxtransform: {
        enable: true,
        config: {
          /* pxtransform 配置项 */
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    esnextModules: ['taro-ui'],
    // webpackChain
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
