import type { AxiosInstance } from 'axios'

export const setupInterceptors = (apiClient: AxiosInstance) => {
  apiClient.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => Promise.reject(error),
  )

  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        console.log('Unauthorized')
      }
      return Promise.reject(error)
    },
  )
}
