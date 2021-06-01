import { useSelector } from 'react-redux';

const HeaderProfile = () => {
    const { headerProfile } = useSelector((state) => ({
        headerProfile: state.layout.headerProfile,
    }));

    const styles = {
        display: headerProfile ? 'block' : 'none',
    };

    return (
        <div className="header-profile" style={styles}>
            상단 헤더 프로필 표시부분
        </div>
    );
};

export default HeaderProfile;
