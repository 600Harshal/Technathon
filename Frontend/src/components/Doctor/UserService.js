import axios from 'axios';

const USER_dat ="http://localhost:8999/api-doctor/getAllDoctors";

class UserService{
    getUsers(){
        return axios.get(USER_dat);
    }
}
export default new UserService();