import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

import ReplaceTitle from '../../Components/Common/Functions/ReplaceTitle';

const Search = () => {
    ReplaceTitle('나에게 맞는 투자전문가 찾기');

    const themes = ['배당중점', '성장중점', '가치중점'];

    const [theme, setTheme] = React.useState([]);

    const handleTheme = (event) => {
        setTheme(event.target.value);
    };

    return (
        <React.Fragment>
            <div className="root-container-content">
                <div>
                    <FormControl>
                        <InputLabel id="theme-label">투자성향</InputLabel>
                        <Select
                            multiple
                            labelId="theme-label"
                            id="theme"
                            value={theme}
                            onChange={handleTheme}
                            input={<Input id="select-theme" />}
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </div>
                            )}
                        >
                            {themes.map((theme) => (
                                <MenuItem key={theme} value={theme}>
                                    {theme}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="theme-label">투자성향</InputLabel>
                        <Select
                            multiple
                            labelId="theme-label"
                            id="theme"
                            value={theme}
                            onChange={handleTheme}
                            input={<Input id="select-theme" />}
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </div>
                            )}
                        >
                            {themes.map((theme) => (
                                <MenuItem key={theme} value={theme}>
                                    {theme}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="theme-label">투자성향</InputLabel>
                        <Select
                            multiple
                            labelId="theme-label"
                            id="theme"
                            value={theme}
                            onChange={handleTheme}
                            input={<Input id="select-theme" />}
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </div>
                            )}
                        >
                            {themes.map((theme) => (
                                <MenuItem key={theme} value={theme}>
                                    {theme}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Search;
