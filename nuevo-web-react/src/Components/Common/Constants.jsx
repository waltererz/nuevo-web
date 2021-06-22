// 스크립트 전체에서 사용되는 전역상수 정의
const CONSTANT = {
    // 인증정보를 포함하고 있는 상수
    // 회원 로그인 유무 확인, 회원정보를 활용할 때 사용
    AUTH: window.$_auth,

    // 최상위 루트별 숫자로된 코드 정의
    MAINROUTE: {
        HOME: 1,
        ASSETS: 2,
        FRIENDS: 3,
        CLUBS: 4,
        ADVISORS: 5,
    },

    // 반응형 웹을 작성하기 위한 해상도별 컨테이너 너비 지정
    RESOLUTION: {
        DEPTH_0: 1440, // 가장 넓은 컨테이너
        DEPTH_1: 1366,
        DEPTH_2: 1280,
        DEPTH_3: 1100,
        DEPTH_4: 1024,
        DEPTH_5: 900,
    },
};

export default CONSTANT;
