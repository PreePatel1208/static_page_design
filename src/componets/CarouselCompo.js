import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BackImg from './../assest/BackImg.png'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, MobileStepper, createTheme } from '@mui/material';
import backImage from './../assest/BackImg.png'
import Quote1 from "./../assest/quote1.png"
import Quote2 from "./../assest/quote2.png"

export default function ImgMediaCard() {
    const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
    const theme = createTheme();

    theme.typography.h6 = {
        fontSize: '1.2rem',
        textAlign: "left",
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    };



    const newtheme = createTheme(
        {
            palette: {
                primary: {
                    light: '#FABF35',
                    main: '#FABF35',
                    dark: '#FABF35',
                    contrastText: '#FABF35',
                },
                color: "red"
            },
        }
    );

    const [activeStep, setActiveStep] = React.useState(0);
    console.log("activeStep", activeStep);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                style={{
                    position: "relative",
                }}
            >

                <img src={Quote1} alte="quote" height={60} width={80} style={{ textAlign: "Top", position: "absolute", top: 0, left: "31%" }} />
            </Box>

            <Box sx={{ display: "flex", alignItems: "top", justifyContent: "center" }}
                style={{
                    position: "relative",
                    marginTop: "5rem"
                }}
            >

                <AutoPlaySwipeableViews
                    axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                    style={{
                        overflow: 'hidden',
                        display: "flex"
                    }}

                >

                    <Card sx={{ maxWidth: 345, backgroundImage: BackImg, backgroundImage: BackImg }}

                    >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={BackImg}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </AutoPlaySwipeableViews>

            </Box >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                style={{
                    position: "relative",
                }}
            >

                <img src={Quote2} alte="quote" height={60} width={80} style={{ textAlign: "Top", position: "absolute", top: 0, right: "31%" }} />
            </Box>
            <MobileStepper
                steps={3}
                position="static"
                activeStep={activeStep}
                sx={{
                    display: 'flex',
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 5
                }}


            />

        </>

    );
}


