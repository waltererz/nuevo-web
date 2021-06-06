import axios from 'axios';
import publicIp from 'public-ip';
import { osVersion, osName, fullBrowserVersion, browserName } from 'react-device-detect';
import { useCookies } from 'react-cookie';

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

const APIAuthCheck = async () => {
    const [cookies] = useCookies();
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
