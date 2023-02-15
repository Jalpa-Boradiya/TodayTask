import axios from 'axios';

export const Service = {

    get: (params, success, error) => {
        axios.get("https://maps.googleapis.com/maps/api/place/search/json", { params })
            .then(res => {
                success(res.data)
            }).catch((err) => {
                error(err)
            });

    }
}