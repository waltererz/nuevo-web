// 페이지를 이동할 때마다 호출될 수 있는 메소드로,
// 웹브라우저 타이틀을 변경할 때 사용됨
// 보다 근본적으로 타이틀을 변경할 수 있는 메소드로 대체 필요
const ReplaceTitle = (title) => {
    const html = document.querySelector('title');
    html.innerHTML = title + ' | 신개념 투자정보 소셜미디어';
};

export default ReplaceTitle;
