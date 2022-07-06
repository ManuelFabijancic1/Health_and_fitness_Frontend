
import axios from 'axios'
//import $router from '@/router'

//vezan za backend
let Service = axios.create({
    baseURL: 'https://wa-backend1423.herokuapp.com/',
    timeout: 3000
})



export { Service }
