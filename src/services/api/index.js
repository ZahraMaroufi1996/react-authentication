import Axios from 'axios'

export const loginAPI = ({ email, password }) =>
  Axios.post('https://reqres.in/api/login', {
    email,
    password,
  })

export const getChart = () =>
  Axios.get('https://dummy.restapiexample.com/api/v1/employees')
