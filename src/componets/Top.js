import React from 'react'
import { useTheme, styled } from '@mui/material/styles';
import { Box, Tabs, Tab } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Top = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                pt:1,
                pb:0,
                fontWeight: 600,
                borderRadius: '5px',
                backgroundColor: "#FABF35",
                color: "#010851",
                display: 'flex',
                alignItem: "center",
                justifyContent: "center",
                maxWidth:"20rem",
                mt:3
            }}
        >
            <Box
            >
                Fundamental Analysis Course (Hindi)
            </Box>
            <Box
            >
                <ExpandMoreIcon />
            </Box>
        </Box>
    )
}

export default Top