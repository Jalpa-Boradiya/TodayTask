import { View, Text } from 'react-native'
import React from 'react'
import AppRoute from './src/route/AppRoute'
import { Provider } from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ width: '100%', height: '100%' }}>
    <AppRoute />
    </View>
    </Provider>
  )
}

export default App