import axios from 'axios';
import publicIp from 'public-ip';
import { osVersion, osName, fullBrowserVersion, browserName } from 'react-device-detect';

import { getCookie } from '../Common/Functions/Cookies';

// 사용자 로그인 메소드
// 아이피주소와 디바이스정보를 기기명으로 서버에 전달하며, 서버에서 인가된 사용자임을 확인해주면 로그인 완료
// 로그아웃 메소드는 보안상 public/signout.php에서 처리함
// 추후 로그아웃 메소드도 API 통신으로 처리할 수 있도록 해야할 듯
const APIAuthSignIn = async (email, password) => {
    const ipaddress = await publicIp.v4();
    const deviceName =
        osName + ' ' + osVersion + ' ' + browserName + ' ' + fullBrowserVersion + ' - ' + ipaddress;
    const response = await axios
        .get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie')
        .then(async () => {
            const auth = await axios
                .post(
                    'http://back.dev.erzsphilos.com/api/auth/signin',
                    {
                        email: email,
                        password: password,
                        device_name: deviceName,
                    },
                    {
                        headers: {
                            'Content-type': 'application/json',
                        },
                    },
                )
                .then((response) => {
                    if (response.data === true) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .catch((error) => {
                    return false;
                });
            return auth;
        })
        .catch((error) => {
            return false;
        });
    return response;
};

// 현재 로그인된 상태인지 확인해주는 메소드
// 백엔드 서버를 통해 현재 세션을 체크함
const APIAuthCheck = async () => {
    const cookies = {};
    cookies.personal_access_token = getCookie('personal_access_token');

    const response = await axios
        .get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie')
        .then(async () => {
            if (!cookies.personal_access_token) {
                return false;
            }
            let check = await axios
                .post(
                    'http://back.dev.erzsphilos.com/api/auth/check',
                    {},
                    {
                        headers: {
                            'Content-type': 'application/json',
                            Authorization: 'Bearer ' + cookies.personal_access_token,
                        },
                    },
                )
                .then((response) => {
                    if (response.data === true) {
                        return true;
                    } else {
                        return false;
                    }
                })
                .catch((error) => {
                    return false;
                });
            return check;
        })
        .catch((error) => {
            return false;
        });
    return response;
};

export { APIAuthSignIn, APIAuthCheck };
