import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
