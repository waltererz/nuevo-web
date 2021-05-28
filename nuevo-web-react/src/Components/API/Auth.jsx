import axios from 'axios';

const APIAuthSignIn = (email, password) => {
    return axios.get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie').then((response) => {
        return axios
            .post(
                'http://back.dev.erzsphilos.com/api/auth/signin',
                {
                    email: email,
                    password: password,
                },
                {},
            )
            .then(({ data, status }) => {
                return data.result;
            });
    });
};

const APIAuthCheck = () => {
    return axios.get('http://back.dev.erzsphilos.com/sanctum/csrf-cookie').then((response) => {
        return axios
            .post('http://back.dev.erzsphilos.com/api/auth/check', {}, {})
            .then(({ data, status }) => {
                if (data.result) {
                    return data.result;
                } else {
                    return false;
                }
            });
    });
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
