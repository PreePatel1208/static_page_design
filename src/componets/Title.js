import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Title = ({title}) => {
    return (
        <Box
            sx={{

                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                mt: 4
            }}
        >
            <Typography component="h2" variant='h4' style={{ marginLeft: "1rem", fontWeight: 'bold', color: "#352A9A" }}>
                {title}
                <Divider sx={{
                    borderColor: "#FABF35",
                    mx: 5,
                    borderBottomWidth: "thick"
                }} />
            </Typography>
        </Box>
    )
}

export default Title
