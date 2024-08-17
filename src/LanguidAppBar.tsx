import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useState } from 'react';
import AudioPlayer from './AudioPlayer';

export default function LanguidAppBar() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Button
            color="primary"
            className="app-bar-item"
            variant="contained"
            onClick={() => {
              setIsPlaying((currentValue) => !currentValue);
            }}
          >
            {isPlaying ? 'Disable' : 'Enable'} Audio
          </Button>
          {isPlaying ? <AudioPlayer className="app-bar-item" /> : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
