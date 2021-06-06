import React from 'react';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Search = () => {
    ReplaceTitle('나에게 맞는 투자전문가 찾기');

    const [state, setState] = React.useState({
        checkedGrowth: true,
        checkedDividend: true,
        checkedValue: true,
        checkedTech: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
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
                                    checked={state.checkedGrowth}
                                    onChange={handleChange}
                                    name="checkedGrowth"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>성장주</span>}
                        />
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.checkedDividend}
                                    onChange={handleChange}
                                    name="checkedDividend"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>배당주</span>}
                        />
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.checkedValue}
                                    onChange={handleChange}
                                    name="checkedValue"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>가치주</span>}
                        />
                        <FormControlLabel
                            control={
                                <BlueCheckbox
                                    checked={state.checkedTech}
                                    onChange={handleChange}
                                    name="checkedTech"
                                />
                            }
                            label={<span style={{ fontSize: '0.9rem' }}>기술주</span>}
                        />
                    </FormGroup>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Search;
