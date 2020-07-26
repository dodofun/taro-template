import React, {useEffect} from 'react'
import {View, Text} from '@tarojs/components'
import {useRouter} from '@tarojs/taro'
import './index.scss'
import {getEnv} from '@/utils/common'

export default (props) => {
  console.log('props', props)

  const router = useRouter()
  console.log('router', router)

  useEffect(() => {
    // @ts-ignore
    console.log('app', API_HOST, getEnv())
  }, [])

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
