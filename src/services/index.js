
import axios from 'axios'
//import $router from '@/router'

//vezan za backend
let Service = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 2000
})

// prije svakog poslanog requesta na backend izvrši:
Service.interceptors.request.use((request) => {
    try {
        request.headers['Authorization'] = 'Bearer ' + Auth.getToken();
    } catch (e) {
        console.error(e);
    }
    return request;
});

Service.interceptors.response.use((response) => response, (error) => {
    if(error.response.status == 401 || error.response.status == 401) {
        Auth.logout()
        //$router.go()
    }
})

let vjezbe = {
    addNewInput(vjezba) {
        return Service.post("/vjezbe", vjezba)
    },
    async build_workout() {
        let response = await Service.get('/arms')
        let data = response.data
        data = data.map(element => {
        return {
            id: element.id,
            name1: element.exercize_name,
            howto: element.how_to_do_exercize,
            type: element.exercize_type, 
            dificulty: element.exerciye_dificulty}
        
        })
       ``
           console.log("Podaci s backenda", data )
        },
       
}



let Auth = {
    async login (username, password){

        try {
            let response = await Service.post("/auth", {
                username: username,
                password: password
            });
    
            let user = response.data
    
            localStorage.setItem("user", JSON.stringify(user));
        return true;
        } catch (error) {
            return false
        }

        
    },
    async register (username, password){
        let response = await Service.post("/users", {
            username,
            password
        })
        let user = response.data

        localStorage.setItem("user", JSON.stringify(user));

        return true;
    },
    logout(){
        localStorage.removeItem('user');
    },
    getUser(){
        return JSON.parse(localStorage.getItem('user'))
    },
    getToken(){
        let user = Auth.getUser();
        if (user && user.token){
            return user.token;
        }
    },
    authenticated(){
        let user = Auth.getUser()
        if(user && user.token){
            return true
        }
        return false
    },
    state: {
        get authenticated(){
            return Auth.authenticated();
        },
    },
}

export { Service, Auth, vjezbe }