import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import group1 from './../assest/Group1.png'

export default function ShadowsDemo() {
    return (
        
            <Box
                sx={{
                    boxShadow: 3,
                    width: '881px',
                    height: '106px',
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color:'#000000',
                    p: 1,
                    m: 1,
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left'
                }}
            >
                <img
                    src={group1}
                    alt="video"
                    loading="lazy"
                    
                />
                4 secret tools for stock selection.
            </Box>
        
    );
}