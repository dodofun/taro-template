import Taro from '@tarojs/taro'

export const getApp = () => {
  return Taro.getApp({allowDefault: true})
}

export const getEnv = () => {
  return process.env.TARO_ENV
}

