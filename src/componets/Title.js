import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const Title = ({title}) => {
    return (
        <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "center",
          mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin top
        }}
      >
        <Typography component="h2" variant='h4' sx={{
          marginLeft: { xs: 1, sm: 2, md: 3 }, // Responsive left margin
          fontWeight: 'bold',
          color: "#352A9A",
        }}>
          {title}
          <Divider sx={{
            borderColor: "#FABF35",
            mx: { xs: 1, sm: 2, md: 3 }, // Responsive horizontal margin
            borderBottomWidth: "thick",
          }} />
        </Typography>
      </Box>    
    )
}

export default Title
