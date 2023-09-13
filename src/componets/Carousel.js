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
import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Pagination, PaginationItem, Stack, createTheme } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ThemeProvider } from '@emotion/react';
import CircleIcon from '@mui/icons-material/Circle';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ButtonCompo from './ButtonCompo';

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

function SwipeableTextMobileStepper() {
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
            display: "flex",
            mb: 4
          }}
        >
          <Button variant="contained"
            sx={{
              px: 5,
              py: 2,
              borderRadius: "30px",
              color: "#010851",
              fontWeight: 600,
              background: "#FABF35"
            }}
          >Chapters
          </Button>
          {/* <Stack spacing={2}>
            <ThemeProvider theme={newtheme}>
              <Pagination
                count={5}
                color='primary'
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                  />
                )}
              />
            </ThemeProvider>
          </Stack> */}
        </Box>
        <Box sx={{
          flexGrow: 1, position: "relative",
          mt: 5
        }}
        >

          <AutoPlaySwipeableViews
            axis={theme.direction === 'ltr' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{
              overflow: 'inherit',
              width: "40rem",
              height: "15rem",
            }}

          >
            {images.map((step, index) => (


              activeStep == index ?
                <Box
                  sx={{
                    boxShadow: 3,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: '#000000',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    overflow: "hidden",
                    width: "30rem",
                    borderRadius: 1,
                    // marginBottom:"5rem",
                    top: -30,
                  }}
                >
                  <Grid
                    sx={{
                      mt: 1
                    }}
                  >

                    <Grid container  >
                      <Grid item xs={8}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                        sx={{
                          ml: 2
                        }}
                      >
                        <Button variant="contained"
                          sx={{
                            px: 2,
                            py: 1,
                            borderRadius: 5,
                            color: "#fffff",
                            background: '#352A9A'
                          }}
                        >Ch {activeStep + 1}
                        </Button>
                      </Grid>
                      <Grid item xs={3}
                      >
                        <Typography component="div" style={{ fontSize: 13, color: "#010851" }}>
                          Duration:  2 week
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}
                    >
                      <List
                        sx={{ bgcolor: 'background.paper' }}
                        aria-label="contacts"
                      >
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon style={{ fontSize: 12 }} />
                            </ListItemIcon>
                            <ListItemText primary="You make profit at the time of buying stocks," />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon style={{ fontSize: 12 }} />
                            </ListItemIcon>
                            <ListItemText primary="This class will teach you to pick the profitable stocks that hold the future in them." />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon style={{ fontSize: 12 }} />
                            </ListItemIcon>
                            <ListItemText primary="This class will teach you to pick the profitable stocks that hold the future in them" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Box>
                :
                <Box
                  sx={{
                    boxShadow: 3,
                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                    color: '#000000',
                    textAlign: 'center',
                    fontSize: 24,
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    overflow: "hidden",
                    width: "30rem",
                    borderRadius: 3
                    // top: -100 ,
                  }}
                >
                  <Grid
                    sx={{
                      mt: 1
                    }}
                  >

                    <Grid container  >
                      <Grid item xs={8}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "left",
                        }}
                        sx={{
                          ml: 2
                        }}
                      >
                        <Button variant="contained"
                          sx={{
                            px: 2,
                            py: 1,
                            borderRadius: 5,
                            color: "#fffff",
                            background: '#352A9A'
                          }}
                        >Ch {activeStep + 1}
                        </Button>
                      </Grid>
                      <Grid item xs={3}
                      >
                        <Typography component="div" style={{ fontSize: 13, color: "#010851" }}>
                          Duration:  2 week
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}
                    >
                      <List
                        sx={{ bgcolor: 'background.paper' }}
                        aria-label="contacts"
                      >
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon style={{ fontSize: 12 }} />
                            </ListItemIcon>
                            <ListItemText primary="You make profit at the time of buying stocks," />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon style={{ fontSize: 12 }} />
                            </ListItemIcon>
                            <ListItemText primary="This class will teach you to pick the profitable stocks that hold the future in them." />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon style={{ fontSize: 12 }} />
                            </ListItemIcon>
                            <ListItemText primary="This class will teach you to pick the profitable stocks that hold the future in them" />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Box>
            ))}
          </AutoPlaySwipeableViews>

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

export default SwipeableTextMobileStepper 