import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

interface DrawerProps {
  children: React.ReactNode[];
}

export const TemporaryDrawer: React.FC<DrawerProps> = ({ children }) => {
  const [state, setState] = React.useState(false);

  console.log(children)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState(open);
  };

  return (
    <Box>
      <IconButton onClick={() => setState(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={state} onClose={() => setState(false)}>
        {children}
      </Drawer>
    </Box>
  );
};
