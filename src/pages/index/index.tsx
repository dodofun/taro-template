import React, {useEffect} from 'react'
import {View, Text} from '@tarojs/components'
import {useRouter} from '@tarojs/taro'
import './index.scss'

export default (props) => {
  console.log('props', props)

  const router = useRouter()
  console.log('router', router)

  useEffect(() => {
    console.log('app')
  }, [])

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
