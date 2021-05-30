import axios from 'axios';
import publicIp from 'public-ip';
import { osVersion, osName, fullBrowserVersion, browserName } from 'react-device-detect';
import { useCookies } from 'react-cookie';

const APIAuthSignIn = async (email, password) => {
    try {
        const ipaddress = await publicIp.v4();
        const deviceName =
            osName +
            ' ' +
            osVersion +
            ' ' +
            browserName +
            ' ' +
            fullBrowserVersion +
            ' - ' +
            ipaddress;
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
    } catch {
        return false;
    }
};

const APIAuthCheck = async () => {
    try {
        const [cookies] = useCookies();

        if (!cookies.personal_access_token) {
            return false;
        }

        const response = await axios
            .get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie')
            .then(async () => {
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
                        if (response.data) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    .catch(() => {
                        return false;
                    });
                return check;
            });
        return response;
    } catch {
        return false;
    }
};

const APIAuthSignOut = () => {
    return axios.get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie').then((response) => {
        return axios
            .post('http://back.dev.erzsphilos.com/api/auth/signout', {}, {})
            .then(({ data, status }) => {
                if (data.result) {
                    return data.result;
                } else {
                    return false;
                }
            });
    });
};

export { APIAuthSignIn, APIAuthSignOut, APIAuthCheck };
