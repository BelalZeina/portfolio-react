import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center'
      }}
    >
      <Typography variant="body1">
        Copyright ©2025 All rights reserved | Developed by <span className='text-primary'>Belal Zeina</span>
      </Typography>
    </Box>
  );
};

export default Footer;