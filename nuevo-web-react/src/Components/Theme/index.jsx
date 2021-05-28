import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            root: {
                height: '56px',
                paddingLeft: '12px',
                paddingRight: '12px',
            },
            colorDefault: {
                backgroundColor: '#ffffff',
                boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, .1)',
                '@media (max-width: 1100px)': {
                    height: '50px',
                },
            },
        },
        MuiContainer: {
            root: {
                paddingLeft: '0px',
                paddingRight: '0px',
                '@media (min-width: 600px)': {
                    paddingLeft: '0px',
                    paddingRight: '0px',
                },
            },
        },
        MuiList: {
            padding: {
                paddingTop: '0px',
                paddingBottom: '0px',
            },
        },
        MuiListItem: {
            root: {
                borderRadius: '5px',
            },
        },
        MuiGrid: {
            item: {
                '@media (max-width: 900px)': {
                    margin: '0px auto',
                },
            },
        },
        MuiTabs: {
            root: {
                height: '100%',
                minHeight: '50px',
            },
            flexContainer: {
                height: '100%',
            },
        },
        MuiTab: {
            root: {
                '@media (min-width: 600px)': {
                    minWidth: '120px',
                },
                '@media (max-width: 1100px)': {
                    minHeight: '50px',
                },
                '@media (max-width: 900px)': {
                    minWidth: '75px',
                    width: 'calc(120px - (876px - 100%))',
                },
            },
        },
        MuiDrawer: {
            paper: {
                top: '56px',
                boxSizing: 'border-box',
                padding: '15px',
                backgroundColor: 'initial',
            },
            paperAnchorDockedLeft: {
                borderRight: '0px',
            },
        },
        MuiBottomNavigation: {
            root: {
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 'auto',
                right: 0,
                backgroundColor: '#ffffff',
                boxShadow: '0px 0px 4px -2px rgba(0, 0, 0, .1)',
                borderTop: '1px solid #eeeeee',
            },
        },
        MuiBottomNavigationAction: {
            root: {
                color: '#666',
                padding: '8px 12px',
            },
        },
    },
});

export default Theme;
