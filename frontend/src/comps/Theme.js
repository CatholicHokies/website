import {createTheme} from "@mui/material";

// This leverages the default theme provided by MUI
// and overrides the primary and secondary colors
// to match the colors in the design.

// You can find more documentation about the 
// default theme here: 
// https://mui.com/customization/default-theme/

// I find making a pallet is very helpful
// https://mui.com/material-ui/customization/color/
// You have to scroll a bit to get there

const theme = createTheme({
    palette: {
        primary: {
            main: '#720c0c',
        },
        secondary: {
            main: '#f50057',
        },
    },
});

export default theme;