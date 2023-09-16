import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Card, CardContent, CardHeader, FormControl, FormControlLabel, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, PaginationItem, Radio, RadioGroup, Stack, createTheme } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ThemeProvider } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import OfferImage from './../assest/OfferImage.png'
import { Image } from '@mui/icons-material';

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
const steps = [
  '1',
  'Create an ad group',
  'Create an ad',
];



const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8',
  },
];

function Offer() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  console.log("activeStep", activeStep);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    console.log("hey");
    setActiveStep(step);
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


  return (
    <>
      <Grid item>
        <Box
          sx={{
            flexGrow: 1,
            flexGrow: 1, position: "relative",
            mt: 5
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
            >
              <AutoPlaySwipeableViews
                axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
                style={{
                  overflow: 'inherit',
                  width: "40rem",
                  height: "40rem",
                }}
              >

                {images.map((step, index) => (

                  <Box
                    key={index}
                    sx={{
                      boxShadow: 3,
                      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                      color: '#000000',
                      textAlign: 'center',
                      fontSize: 24,
                      fontWeight: '600',
                      position: "absolute",
                      overflow: "hidden",
                      borderRadius: 1,
                      width: "35rem",
                      // top: -50,
                      // top: activeStep==index?-30:0,
                    }}
                  >
                    <Grid item xs={6}
                    >
                      <CardHeader
                        sx={{
                          p: 0
                        }}
                        title={
                          <Box
                            sx={{
                              fontWeight: 'bold',
                              backgroundColor: "#FABF35",
                              color: "#010851",
                              display: 'flex',
                              flexWrap: 'wrap',
                              p: 2
                            }}
                            style={{

                            }}
                          >
                            <FormControlLabel value="male" control={<Radio />} label={
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: 'space-between',
                                  alignItems: "center"
                                }}
                              >
                                <Typography variant="div" component="div"
                                  sx={{
                                    color: '#010851',
                                    fontWeight: "bold",
                                  }}
                                >
                                  COMBO OFFER
                                </Typography>
                                <Button component="div">(Life - Time Validity)</Button> </Box>} />
                          </Box>}
                        action={
                          <>
                          </>
                        }
                      />
                    </Grid>
                    <Grid item xs={6}
                      sx={{
                        display: "flex"
                      }}
                    >

                      <Grid item xs={3}
                      >
                        <img
                          src={OfferImage}
                          alt='offerImage'
                          sx={{
                            width: '50%', // Set the image width to 100% for responsiveness
                            maxWidth: '50%', // Optional: Limit the maximum width if needed
                            height: 'auto', // Automatically adjust height to maintain aspect ratio
                          }}
                        />

                      </Grid>

                      <Grid item xs={3}
                      >
                        <Typography variant="body1"
                          sx={{
                            color: '#010851',
                            fontWeight: "bold",
                            m: 2
                          }}

                        >
                          The Complete Fundamental
                          Analysis Course (Hindi)
                        </Typography>
                        <Typography variant="body1"
                          sx={{
                            color: '#010851',
                            fontWeight: "bold",
                            m: 2
                          }}

                        >
                          +
                        </Typography>
                        <Typography variant="body1"
                          sx={{
                            color: '#010851',
                            fontWeight: "bold",
                            m: 2
                          }}

                        >
                          Futures & Options (Hindi)
                        </Typography>
                        <Typography component="h6" variant='h6' color="red" sx={{
                          display: "flex",
                          fontWeight: "bold",
                          m: 2

                        }}>
                          -34%
                          <Typography component="h6" variant='h6' color="#352A9A" >
                            1,987
                          </Typography>
                        </Typography>
                        <Typography component="span" sx={{ m: 2 }} >
                          M.R.P.: ₹2,995
                        </Typography>
                        <Typography component="h6" variant='h6' color="red" sx={{
                          display: "flex",
                          fontWeight: "bold",
                          m: 2

                        }}>
                          -34%
                          <Typography component="h5" variant='h5' color="#352A9A" >
                            1,987
                          </Typography>
                        </Typography>
                        <Button variant="contained"
                          sx={{
                            px: 5,
                            py: 1,
                            m: 1
                          }}
                          style={{
                            borderRadius: "30px",
                            color: "#fffff",
                            fontWeight: 600,
                            // background: "linear-gradient(to left bottom, #352A9A,#FFFFFF)"
                            background: "#352A9A"

                          }}
                        >Buy Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </AutoPlaySwipeableViews>
            </RadioGroup>
          </FormControl>
        </Box >
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            display: 'flex',
            alignItems: "center",
            justifyContent: "center",
            mt: 5
          }}
        />
      </Grid >
    </>
  );
}

export default Offer

