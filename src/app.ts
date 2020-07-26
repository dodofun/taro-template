import './app.scss'
import {useEffect} from 'react'

export default (props) => {

  useEffect(() => {
    console.log('On Launch')
  }, [])

  return props.children
}
