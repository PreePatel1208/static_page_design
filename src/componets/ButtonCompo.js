import { Button, ThemeProvider, Typography, createTheme } from '@mui/material'
import React from 'react'

const ButtonCompo = ({ label, size }) => {
    const theme = createTheme();

    theme.typography.h6 = {
        fontSize: '18',
        textAlign: "center",
        [theme.breakpoints.up('md')]: {
            fontSize: 18
        },
        [theme.breakpoints.up('xs')]: {
            fontSize: 12
        },
        [theme.breakpoints.up('xs')]: {
            fontSize: 15
        },
    };
    return (
        <ThemeProvider theme={theme}>
        <Button variant="contained"
            sx={{
                px: 4,
                py: 1,
                borderRadius: 5,
                color: "#fffff",
                fontWeight: 600,
                width: size ? `${size}rem` : "10rem",
                background: `linear-gradient(to left bottom, #352A9A, #FFFFFF)`, // Linear gradient background
            }}
        >
            <Typography variant='h6' component='h6'>
            {label}
            </Typography>

        </Button>
        </ThemeProvider>
    )
}

export default ButtonCompo
