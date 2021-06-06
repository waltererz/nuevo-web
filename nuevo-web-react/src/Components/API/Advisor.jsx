import axios from 'axios';
import { useCookies } from 'react-cookie';

const APIAdvisorList = async () => {
    const [cookies] = useCookies();
    const response = await axios
        .get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie')
        .then(async () => {
            if (!cookies.personal_access_token) {
                return false;
            }
            let list = await axios
                .post(
                    'http://back.dev.erzsphilos.com/api/advisor/list',
                    {},
                    {
                        headers: {
                            'Content-type': 'application/json',
                            Authorization: 'Bearer ' + cookies.personal_access_token,
                        },
                    },
                )
                .then((response) => {
                    if (response.data !== false) {
                        return response.data;
                    } else {
                        return false;
                    }
                })
                .catch((error) => {
                    return false;
                });
            return list;
        })
        .catch((error) => {
            return false;
        });
    return response;
};

export { APIAdvisorList };
