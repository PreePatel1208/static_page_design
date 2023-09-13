import { Button } from '@mui/material'
import React from 'react'

const ButtonCompo = ({ label ,size}) => {
    return (
        <Button variant="contained"
            sx={{
                px: 4,
                py: 1,
                borderRadius: 5,
                color: "#fffff",
                fontWeight: 600,
                width:size? `${size}rem`:"10rem",
                background: `linear-gradient(to left bottom, #352A9A, #FFFFFF)`, // Linear gradient background

                background: "#352A9A"
            }}
        >{label}
        </Button>
    )
}

export default ButtonCompo
