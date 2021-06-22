import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';

// 스크롤을 내리면 자동으로 지정된 요소를 화면에서 사라지게 해주는 트리거 메소드
const HideOnScroll = (props) => {
    const { children, window, mediaQuery } = props;
    const mediaQueryForSlide = useMediaQuery(mediaQuery);

    let trigger = useScrollTrigger({ target: window ? window() : undefined });

    if (!mediaQueryForSlide) {
        trigger = false;
    }

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
};

export default HideOnScroll;
