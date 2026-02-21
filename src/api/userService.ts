import apiClient from './apiClient'

export interface UserRequest {
  firstName: string
  lastName: string
}

export interface UserResponse {
  id: number
  firstName: string
  lastName: string
}

export interface ApiResponse<T> {
  success: boolean
  message: string
  data: T
}

export const createUser = (user: UserRequest) => {
  return apiClient.post<ApiResponse<UserResponse>>('/api/v1/users', user)
}

export const getUsers = () => {
  return apiClient.get<ApiResponse<UserResponse[]>>('/api/v1/users')
}
