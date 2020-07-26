export default {
  pages: [
    'pages/index/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    enablePullDownRefresh: false
  },
  networkTimeout: {
    request: 30000,
    connectSocket: 60000,
    uploadFile: 60000,
    downloadFile: 60000
  },
  debug: true,
  subPackages: [
    {
      root: 'pages',
      name: 'index',
      pages: [
        'index/index'
      ]
    }
  ],
  preloadRule: [],
  navigateToMiniProgramAppIdList: [],
  permission: {
    'scope.userLocation': {
      desc: '您的位置信息将用于小程序位置接口的效果展示'
    }
  },
}
