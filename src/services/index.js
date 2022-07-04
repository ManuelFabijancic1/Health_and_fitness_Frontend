
import axios from 'axios'
//import $router from '@/router'

//vezan za backend
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 3000
})



export { Service }