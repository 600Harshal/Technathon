import axios from 'axios';

const USER_dat ="http://localhost:8999/api-doctor/getAllDoctors";
class UserServiceFetch{
    getAllDoctors()
    {
        return fetch(USER_dat).then((res=>res.json)); 
    }
}

export default new UserServiceFetch();