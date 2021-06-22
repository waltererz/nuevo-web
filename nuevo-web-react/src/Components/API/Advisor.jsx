import axios from 'axios';

import { getCookie } from '../Common/Functions/Cookies';

// 투자어드바이저 검색결과를 반환하는 메소드
// 인증된 클라이언트만 접근할 수 있음
const APIAdvisorList = async (filters = {}) => {
    const cookies = {};
    cookies.personal_access_token = getCookie('personal_access_token');

    const response = await axios
        .get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie')
        .then(async () => {
            if (!cookies.personal_access_token) {
                return false;
            }
            let list = await axios
                .post(
                    'http://back.dev.erzsphilos.com/api/advisor/list',
                    {
                        filters: filters,
                    },
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
