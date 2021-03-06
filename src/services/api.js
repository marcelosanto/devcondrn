import AsyncStorage from '@react-native-async-storage/async-storage'

const baseUrl = 'https://api.b7web.com.br/devcond/api'

const request = async (method, endpoint, params, token = null) => {
  method = method.toLowerCase()
  let fullUrl = `${baseUrl}${endpoint}`
  let body = null

  switch (method) {
    case 'get':
      let queryString = new URLSearchParams(params).toString()
      fullUrl += `?${queryString}`
      break
    case 'post':
    case 'put':
    case 'delete':
      body = JSON.stringify(params)
      break
  }

  let headers = { 'Content-Type': 'application/json' }
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
}

export default {
  getToken: async () => {
    return await AsyncStorage.getItem('token')
  },
  validateToken: async () => {
    let token = await AsyncStorage.getItem('token')
  },
}
