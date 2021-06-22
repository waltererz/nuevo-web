const getCookie = (name) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? decodeURIComponent(value[2]) : null;
};

export { getCookie };
