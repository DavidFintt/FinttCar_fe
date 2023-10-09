
import axios from 'axios';

export default class VehicleService {

// token = null;

// constructor() {
//     this.getToken();
// }

getAll = async () =>{

        const config = {
            method: 'GET',
            url: 'http://127.0.0.1:8000/vehicleList/api/v1/',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        return (await axios(config)).data

}

}