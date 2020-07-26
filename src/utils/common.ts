import Taro from '@tarojs/taro'

export const getApp = () => {
  return Taro.getApp({allowDefault: true})
}
