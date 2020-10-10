import React, {useState} from 'react';

import PropType from 'prop-types';

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

import Theme from './theme';

const ThemeContextProvider = props => {
  const {children} = props;
  const [theme,] = useState({Theme});

  const muiTheme = createMuiTheme(theme.Theme);
  return (
    <MuiThemeProvider theme={muiTheme}>
        {children}
    </MuiThemeProvider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropType.node.isRequired
};

export default ThemeContextProvider;