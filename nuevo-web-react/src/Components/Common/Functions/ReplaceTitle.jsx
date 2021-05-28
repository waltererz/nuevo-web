const ReplaceTitle = (title) => {
    const html = document.querySelector('title');
    html.innerHTML = title + ' | 신개념 투자정보 소셜미디어';
};

export default ReplaceTitle;
