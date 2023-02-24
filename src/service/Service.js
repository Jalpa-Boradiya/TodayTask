import axios from 'axios';

export const Service = {

    get: (params, success, error) => {
        axios.get("https://maps.googleapis.com/maps/api/place/search/json", { params })
            .then(res => {
                success(res.data)
            }).catch((err) => {
                error(err)
            });

    },
    post: (params, success, error) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'JWT fefege...'
        }
        axios.post("https://maps.googleapis.com/maps/api/place/search/json", params,
            { headers: headers }).then((response) => {
                return success(response.data)
            }).catch((err) => {
                return error(err)
            });
    }
}