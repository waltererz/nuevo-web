import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';
import { APIAdvisorList } from '../../Components/API/Advisor';

const Search = () => {
    ReplaceTitle('나에게 맞는 투자전문가 찾기');

    const [state, setState] = React.useState({
        theme: {
            growth: true,
            dividend: true,
            value: true,
            tech: true,
        },
        data: [],
    });

    const handleChange = (event) => {
        const checked = event.target.checked;
        APIAdvisorList().then((response) => {
            setState({
                ...state,
                theme: { ...state.theme, [event.target.name]: checked },
                data: response,
            });
        });
    };

    const BlueCheckbox = withStyles({
        root: {
            color: '#3f51b5',
            '&$checked': {
                color: '#212f80',
            },
        },
        checked: {},
    })((props) => <Checkbox color="default" {...props} />);

    return (
        <React.Fragment>
            <div className="root-container-content">
                <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '5px' }}>
                        투자성향
                    </div>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.theme.growth}
                                    onChange={handleChange}
                                    name="growth"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>성장주</span>}
                        />
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.theme.dividend}
                                    onChange={handleChange}
                                    name="dividend"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>배당주</span>}
                        />
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.theme.value}
                                    onChange={handleChange}
                                    name="value"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>가치주</span>}
                        />
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.theme.tech}
                                    onChange={handleChange}
                                    name="tech"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>기술주</span>}
                        />
                    </FormGroup>
                </div>
                <div></div>
            </div>
        </React.Fragment>
    );
};

export default Search;
