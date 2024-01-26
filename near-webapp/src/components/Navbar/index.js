import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

export default function Navbar() {
  return (
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" noWrap component="div">
            NearBot Web Dashboard
          </Typography>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}>
              <AccountCircleIcon style={{color: 'white'}} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
  );
}
