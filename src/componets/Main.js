import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material';
import Video1 from './../assest/video1.png'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import user from './../assest/user.png'
import Box from '@mui/material/Box';
import ShadowsDemo from './ShadowBox';
import group1 from './../assest/Group1.png'
import group2 from './../assest/Group2.png'
import group3 from './../assest/Group3.png'
import Question from './../assest/Question.png'
import SwipeableTextMobileStepper from './Carousel';
import Owner from './../assest/Owner.png'
import LinkedIn from './../assest/Linkedin.png'
import IPhone from './../assest/IPhone.png'
import PlayStore from './../assest/PlayStore.png'
import MainImage from './../assest/main.png'
import Certificate from './../assest/Certificate.png'
import FAQ from './FAQ';
import Footer from '../Footer';
import ImgMediaCard from './CarouselCompo';
import Offer from './OfferCarasoul';
import Title from './Title';
import ButtonCompo from './ButtonCompo';
const Main = () => {

    const theme = createTheme();

    theme.typography.h6 = {
        fontSize: '1.2rem',
        fontFamily: 'Ubuntu',
        textAlign: "left",
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    };

    theme.typography.h1 = {
        fontSize: "2.2rem",
        textAlign: "left",
        fontFamily: 'Ubuntu',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 65,
        },
    };
    const boxStyles = {
        boxShadow: 3,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: '#000000',
        p: 1,
        fontSize: 24,
        fontWeight: '600',
        mt: 2, // Add spacing between boxes
    };

    const courseFeature = [
        {
            title: '4 secret tools for stock selection.',
            src: group1
        },
        {
            title: 'Start Selecting Stocks Just After 1st Class.',
            src: group3
        },
        {
            title: 'Get Tools, Without Which You Will Lose.',
            src: group2
        },
    ]
    const courseKnowledge = [
        {
            title: 'How To Pick Right Stock?',
            src: Question
        },
        {
            title: 'How To Do Valuation Of a Company?',
            src: Question
        },
        {
            title: 'How To Do Fundamental Analysis Of Companies?',
            src: Question
        },
        {
            title: 'How To Avoid Bad Stock?',
            src: Question
        },
        {
            title: 'How To Start Investing Immediately?',
            src: Question
        },
    ],
        faqData = [
            {
                title: "Does this course Fundamental analysis?",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            },
            {
                title: "Will I get a certificate of completion?",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            },
            {
                title: "Does this course Fundamental analysis?",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            },
            {
                title: "Does this course Fundamental analysis?",
                detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
            }
        ]
    const Price1 = () => {
        return (
            <>
                <Grid item xs={8} md={12}>
                    <Box
                        sx={{
                            p: 0.5,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: "#FABF35",
                            color: "#010851",
                            display: 'flex',
                            fontSize: "1rem"
                        }}
                        spacing={4}
                    >
                        1 Year Validity
                    </Box>
                    <Typography component="h6" variant='h6' color="red" sx={{
                        display: "flex",
                        fontWeight: "bold",

                    }}>
                        -34%
                        <Typography component="h6" variant='h6' color="#352A9A" >
                            1,987
                        </Typography>
                    </Typography>
                    M.R.P.: ₹2,995
                </Grid>
                <Grid item xs={4}
                >
                    <ButtonCompo label="ENROLL NOW" size={0} />
                </Grid>
                {/* Use xs={12} to stack the items on mobile screens */}
                {/* <Grid item xs={12} md={12} >
                    <Box
                        sx={{
                            p: 0.5,
                            fontWeight: 'bold',
                            borderRadius: 2,
                            backgroundColor: "#FABF35",
                            color: "#010851",
                            display: 'flex',
                            fontSize: "1rem",
                            alignItems: 'center', // Vertically center the content
                        }}
                        spacing={4}
                    >
                        1 Year Validity
                    </Box>
                    <Typography component="h6" variant='h6' color="red" sx={{
                        display: "flex",
                        fontWeight: "bold",
                        alignItems: 'center', // Vertically center the content
                    }}>
                        -34%
                        <Typography component="h6" variant='h6' sx={{ color: "#352A9A" }}>
                            1,987
                        </Typography>
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        M.R.P.: ₹2,995
                    </Typography>

                </Grid>
                <Grid item xs={6}
                >
                    <ButtonCompo label="ENROLL NOW" size={0} />
                </Grid> */}

            </>
        )
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <Grid container spacing={2} sx={{ mt: 3, p: 1 }}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h1">
                            The Complete
                        </Typography>
                        <Typography variant="h1" color="#352A9A">
                            Fundamental Analysis
                        </Typography>
                        <Typography variant="h1">
                            Course In Hindi
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img
                            src={Video1}
                            alt="video"
                            loading="lazy"
                            width="100%"
                            style={{ maxWidth: '500px' }}
                        />
                    </Grid>
                </Grid>
                {/* <Grid container spacing={2} sx={{ mt: 3, p: 1 }}>
                    <Grid item >
                        <Typography variant="h1">
                            The Complete
                        </Typography>
                        <Typography variant="h1" color="#352A9A">
                            Fundamental Analysis
                        </Typography>
                        <Typography variant="h1">
                            Course In Hindi
                        </Typography>

                    </Grid>
                    <Grid item >
                        <img
                            src={Video1}
                            alt="video"
                            loading="lazy"
                            width={500}

                        />
                    </Grid>

                </Grid > */}
                <ButtonCompo label="Buy Now" size={30} />

                {/* <Grid container spacing={2} sx={{ mt: 4 }} >
                    <Grid item xs={2}
                        sx={{

                            display: 'flex',
                            alignItems: 'center',
                        }}
                        childStyle={{ margin: 8 }}
                        spacing={2}
                    >
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 16C31 24.28 24.28 31 16 31C7.72 31 1 24.28 1 16C1 7.72 7.72 1 16 1C24.28 1 31 7.72 31 16Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.5731 20.7706L16.9231 17.9956C16.1131 17.5156 15.4531 16.3606 15.4531 15.4156V9.26562" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <Typography component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
                            2 Hours
                        </Typography>

                        <span></span>
                    </Grid>
                    <Grid item xs={2}
                        childStyle={{ margin: 8 }}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                        }}
                        spacing={2}
                    >
                        <img
                            src={user}
                            alt="user"
                            loading="lazy"
                        />
                        <Typography component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
                            3K enrolled
                        </Typography>
                    </Grid>
                    <Grid item xs={2}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                        childStyle={{ margin: 8 }}
                        spacing={2}
                    >
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5671 22.6155L6.6851 28.6538L9.68502 18.856C9.77206 18.5718 9.67327 18.2634 9.43728 18.0826L1.47486 11.9828H11.2938C11.6059 11.9828 11.8816 11.7794 11.9738 11.4812L15 1.69282L18.0262 11.4812C18.1184 11.7794 18.3941 11.9828 18.7062 11.9828H28.5101L20.5168 18.0289C20.2779 18.2096 20.1777 18.5206 20.2662 18.8068L23.3091 28.6493L15.4329 22.6155C15.1775 22.4199 14.8225 22.4199 14.5671 22.6155Z" fill="#FCE04C" stroke="#010851" />
                        </svg>
                        <Typography component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
                            4.4
                        </Typography>
                    </Grid>
                </Grid> */}
                <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M31 16C31 24.28 24.28 31 16 31C7.72 31 1 24.28 1 16C1 7.72 7.72 1 16 1C24.28 1 31 7.72 31 16Z" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M21.5731 20.7706L16.9231 17.9956C16.1131 17.5156 15.4531 16.3606 15.4531 15.4156V9.26562" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <Typography component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
                            2 Hours
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <img
                            src={user}
                            alt="user"
                            loading="lazy"
                            style={{ maxWidth: '100%' }}
                        />
                        <Typography component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
                            3K enrolled
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center' }}>
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.5671 22.6155L6.6851 28.6538L9.68502 18.856C9.77206 18.5718 9.67327 18.2634 9.43728 18.0826L1.47486 11.9828H11.2938C11.6059 11.9828 11.8816 11.7794 11.9738 11.4812L15 1.69282L18.0262 11.4812C18.1184 11.7794 18.3941 11.9828 18.7062 11.9828H28.5101L20.5168 18.0289C20.2779 18.2096 20.1777 18.5206 20.2662 18.8068L23.3091 28.6493L15.4329 22.6155C15.1775 22.4199 14.8225 22.4199 14.5671 22.6155Z" fill="#FCE04C" stroke="#010851" />
                        </svg>
                        <Typography component="div" sx={{ ml: 1, fontWeight: 'bold' }}>
                            4.4
                        </Typography>
                    </Grid>
                </Grid>
                <Title title="Main Features of the Course" />

                {/* <Grid container spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        mt: 4,
                    }}
                >

                    {courseFeature.map((element) =>
                        <Grid item
                            sx={{
                                boxShadow: 3,
                                width: '881px',
                                height: '106px',
                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                color: '#000000',
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
                                src={element.src}
                                alt="video"
                                loading="lazy"
                            />
                            {element.title}
                        </Grid>
                    )}
                </Grid> */}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin top
                    }}
                >
                    {courseFeature.map((element, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={12}
                            md={6}
                            sx={{
                                boxShadow: 3,
                                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }, // Responsive width
                                height: '106px',
                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                color: '#000000',
                                p: 1,
                                m: 1,
                                textAlign: 'center',
                                fontSize: { xs: 18, sm: 20, md: 24 }, // Responsive font size
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start', // Adjusted to 'flex-start'
                            }}
                        >
                            <img
                                src={element.src}
                                alt="video"
                                loading="lazy"
                                style={{ maxWidth: '100%', marginRight: '1rem' }}
                            />
                            {element.title}
                        </Grid>
                    ))}
                </Grid>
                <Title title="Join The Course & Get To Know" />
                {/* <Grid container spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        mt: 4,
                    }}
                >
                    {courseKnowledge.map((element) =>
                        <Grid item
                            sx={{
                                boxShadow: 3,
                                width: '881px',
                                height: '106px',
                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                color: '#000000',
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
                                src={element.src}
                                alt="video"
                                loading="lazy"

                            />
                            {element.title}
                        </Grid>
                    )}

                </Grid> */}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin top
                    }}
                >
                    {courseKnowledge.map((element, index) => (
                        <Grid
                            item
                            key={index}
                            xs={12}
                            sm={6}
                            md={6}
                            sx={{
                                boxShadow: 3,
                                width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' }, // Responsive width
                                height: '106px',
                                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                color: '#000000',
                                p: 1,
                                m: 1,
                                textAlign: 'center',
                                fontSize: { xs: 18, sm: 20, md: 24 }, // Responsive font size
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start', // Adjusted to 'flex-start'
                            }}
                        >
                            <img
                                src={element.src}
                                alt="video"
                                loading="lazy"
                                style={{ maxWidth: '100%', marginRight: '1rem' }}
                            />
                            {element.title}
                        </Grid>
                    ))}
                </Grid>
                {/* <Grid container xs={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        mt: 3,
                    }}
                >
                    <ButtonCompo label="GET YOUR ACCESS NOW" size={25} />

                </Grid> */}
                <Grid
                    container
                    xs={12}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin top
                    }}
                >
                    <ButtonCompo label="GET YOUR ACCESS NOW" size={25} />
                </Grid>
                <Title title="Course Syllabus" />
                {/* <Grid
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                    }}
                >

                    <SwipeableTextMobileStepper />
                </Grid> */}
                <Grid
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin top
                    }}
                >
                    <SwipeableTextMobileStepper />
                </Grid>
                <Title title="This Course is Designed For...!" />
                {/* <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={8}>
                        <Typography variant="h6">
                            Anyone who wants to know how to analyse a company and pick
                        </Typography>
                        <Grid item>
                            <Typography
                                sx={{
                                    mt: 1,
                                    p: 1,
                                    fontWeight: 'bold',
                                    borderRadius: 1,
                                    backgroundColor: "#FABF35",
                                    color: "#010851",
                                    display: 'flex',
                                    maxWidth: "15rem",
                                    mt: 2,
                                    fontSize: "1.5rem"
                                }}
                            >
                                THE RIGHT STOCKS!
                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid item xs={4}
                        sx={{
                            fontFamily: "lora", fontWeight: "medium",
                            fontSize: 28
                        }}
                    >
                        <FormGroup>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Students"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#352A9A', borderRadius: 2, } }}
                            />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Job Aspirants"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#352A9A', borderRadius: 2 } }}
                            />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Working Professionals"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#352A9A', borderRadius: 2 } }}
                            />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Business Owners"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#352A9A', borderRadius: 2 } }}
                            />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="House Wives"
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#352A9A', borderRadius: 2 } }}
                            />
                        </FormGroup>
                    </Grid>

                </Grid > */}
                <Grid
                    container
                    spacing={2}
                    sx={{
                        mt: { xs: 2, sm: 3, md: 3 }, // Responsive margin top
                    }}
                >
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h6">
                            Anyone who wants to know how to analyze a company and pick
                        </Typography>
                        <Grid item>
                            <Typography
                                sx={{
                                    mt: 1,
                                    p: 1,
                                    fontWeight: 'bold',
                                    borderRadius: 1,
                                    backgroundColor: "#FABF35",
                                    color: "#010851",
                                    display: 'flex',
                                    maxWidth: "15rem",
                                    mt: 2,
                                    fontSize: { xs: "1.2rem", sm: "1.5rem" }, // Responsive font size
                                }}
                            >
                                THE RIGHT STOCKS!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Students"
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: { xs: 24, sm: 28 }, // Responsive icon size
                                        color: '#352A9A',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Job Aspirants"
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: { xs: 24, sm: 28 }, // Responsive icon size
                                        color: '#352A9A',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Working Professionals"
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: { xs: 24, sm: 28 }, // Responsive icon size
                                        color: '#352A9A',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="Business Owners"
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: { xs: 24, sm: 28 }, // Responsive icon size
                                        color: '#352A9A',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            <FormControlLabel
                                control={<Checkbox defaultChecked />}
                                label="House Wives"
                                sx={{
                                    '& .MuiSvgIcon-root': {
                                        fontSize: { xs: 24, sm: 28 }, // Responsive icon size
                                        color: '#352A9A',
                                        borderRadius: 2,
                                    },
                                }}
                            />
                            {/* Add similar FormControlLabel components for other checkboxes */}
                        </FormGroup>
                    </Grid>
                </Grid>

                {/* <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        mt: 4,
                        mb: 5
                    }}
                >
                    <Box>
                        <Typography sx={{ ml: 1, fontWeight: 'bold', color: "#010851", fontSize: "1.2rem" }}>
                            Meet Your Instructor
                        </Typography>
                        <Typography component="h2" variant='h4' sx={{ ml: 1, fontWeight: 'bold', color: "#352A9A", fontSize: "1.9rem" }}>
                            Prasad R. Lendwe
                        </Typography>
                    </Box>
                </Box> */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        flexDirection: 'column', // Adjusted for responsiveness
                        mt: { xs: 2, sm: 3, md: 4 }, // Responsive margin top
                        mb: { xs: 3, sm: 4 }, // Responsive margin bottom
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                ml: 1,
                                fontWeight: 'bold',
                                color: "#010851",
                                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.2rem" }, // Responsive font size
                            }}
                        >
                            Meet Your Instructor
                        </Typography>
                        <Typography
                            component="h2"
                            variant='h4'
                            sx={{
                                ml: 1,
                                fontWeight: 'bold',
                                color: "#352A9A",
                                fontSize: { xs: "1.6rem", sm: "1.9rem", md: "1.9rem" }, // Responsive font size
                            }}
                        >
                            Prasad R. Lendwe
                        </Typography>
                    </Box>
                </Box>
                {/* <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        mt: 5,
                    }}
                >
                    <Box
                        sx={{
                            boxShadow: 2,
                            width: '80%',
                            height: '597px',
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) =>
                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            textAlign: 'center',
                            fontSize: '0.875rem',
                            fontWeight: '700',

                        }}
                    >
                        <Grid container sx={{ mt: 3, position: 'relative' }}>
                            <Grid item xs={2}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: -100,
                                        left: 3
                                    }}>
                                    <img
                                        src={Owner}
                                        alt="video"
                                        loading="lazy"
                                        width={230}
                                        height={200}
                                        style={{
                                            borderRadius: "50%",
                                            backgroundColor: "#FABF35",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            mt: 4,
                                        }}
                                    >
                                        <svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38.6682 0.896484H12.8894C5.15575 0.896484 0 6.40495 0 14.6676V31.193C0 39.4557 5.15575 44.9642 12.8894 44.9642H38.6682C46.4018 44.9642 51.5575 39.4557 51.5575 31.193V14.6676C51.5575 6.40495 46.4018 0.896484 38.6682 0.896484ZM30.651 25.7672L24.2836 29.8435C21.7057 31.496 19.5918 30.2291 19.5918 27.0066V18.8265C19.5918 15.6041 21.7057 14.3372 24.2836 15.9897L30.651 20.0659C33.0999 21.6634 33.0999 24.1973 30.651 25.7672Z" fill="#222222" />
                                        </svg>

                                        <svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7256 49.7118V32.7477V24.2893C57.7256 19.8721 54.1333 16.2812 49.7161 16.2812H24.2951C19.878 16.2812 16.2871 19.8721 16.2871 24.2893V32.7477V49.7118C16.2871 54.1305 19.878 57.7212 24.2951 57.7212H49.7176C54.1333 57.7212 57.7256 54.1305 57.7256 49.7118ZM44.3011 36.9992C44.3011 41.0215 41.0244 44.2923 37.005 44.2923C32.9841 44.2923 29.7101 41.02 29.7145 36.9977C29.716 35.4097 30.231 33.9439 31.0939 32.7462C32.422 30.909 34.5748 29.7057 37.0094 29.7057C39.4425 29.7057 41.5965 30.9105 42.9217 32.7477C43.7816 33.9453 44.3011 35.4111 44.3011 36.9992ZM52.9316 28.0768V21.9633V21.0535L52.0172 21.0564L45.9066 21.0755L45.93 28.1003L52.9316 28.0768ZM37.0065 48.3324C43.2565 48.3324 48.3397 43.246 48.3397 36.9992C48.3397 35.4964 48.036 34.0596 47.4973 32.7477H53.6858V49.7118C53.6858 51.9043 51.9027 53.68 49.7146 53.68H24.2937C22.1027 53.68 20.3227 51.9043 20.3227 49.7118V32.7477H26.5081C25.9739 34.0596 25.6745 35.4964 25.6745 36.9992C25.6745 43.246 30.7564 48.3324 37.0065 48.3324Z" fill="#222222" />
                                            <mask id="mask0_2266_821" maskUnits="userSpaceOnUse" x="16" y="16" width="42" height="42">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7256 49.7118V32.7477V24.2893C57.7256 19.8721 54.1333 16.2812 49.7161 16.2812H24.2951C19.878 16.2812 16.2871 19.8721 16.2871 24.2893V32.7477V49.7118C16.2871 54.1305 19.878 57.7212 24.2951 57.7212H49.7176C54.1333 57.7212 57.7256 54.1305 57.7256 49.7118ZM44.3011 36.9992C44.3011 41.0215 41.0244 44.2923 37.005 44.2923C32.9841 44.2923 29.7101 41.02 29.7145 36.9977C29.716 35.4097 30.231 33.9439 31.0939 32.7462C32.422 30.909 34.5748 29.7057 37.0094 29.7057C39.4425 29.7057 41.5965 30.9105 42.9217 32.7477C43.7816 33.9453 44.3011 35.4111 44.3011 36.9992ZM52.9316 28.0768V21.9633V21.0535L52.0172 21.0564L45.9066 21.0755L45.93 28.1003L52.9316 28.0768ZM37.0065 48.3324C43.2565 48.3324 48.3397 43.246 48.3397 36.9992C48.3397 35.4964 48.036 34.0596 47.4973 32.7477H53.6858V49.7118C53.6858 51.9043 51.9027 53.68 49.7146 53.68H24.2937C22.1027 53.68 20.3227 51.9043 20.3227 49.7118V32.7477H26.5081C25.9739 34.0596 25.6745 35.4964 25.6745 36.9992C25.6745 43.246 30.7564 48.3324 37.0065 48.3324Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_2266_821)">
                                                <path d="M72.5244 11.4805H1.48438V82.5205H72.5244V11.4805Z" fill="#222222" />
                                            </g>
                                        </svg>
                                        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.313 32.0144H35.2895C35.2895 40.0405 35.2895 49.9201 35.2895 49.9201H27.8453C27.8453 49.9201 27.8453 40.1363 27.8453 32.0144H24.3066V25.6858H27.8453V21.5926C27.8453 18.661 29.2384 14.0801 35.3579 14.0801L40.8741 14.1012V20.2443C40.8741 20.2443 37.5221 20.2443 36.8703 20.2443C36.2185 20.2443 35.2918 20.5702 35.2918 21.9682V25.6871H40.9635L40.313 32.0144Z" fill="#222222" />
                                            <mask id="mask0_2266_814" maskUnits="userSpaceOnUse" x="24" y="14" width="17" height="36">
                                                <path d="M40.3384 32.0144H35.3149C35.3149 40.0405 35.3149 49.9201 35.3149 49.9201H27.8707C27.8707 49.9201 27.8707 40.1363 27.8707 32.0144H24.332V25.6858H27.8707V21.5926C27.8707 18.661 29.2638 14.0801 35.3832 14.0801L40.8995 14.1012V20.2443C40.8995 20.2443 37.5475 20.2443 36.8957 20.2443C36.2439 20.2443 35.3172 20.5702 35.3172 21.9682V25.6871H40.9889L40.3384 32.0144Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_2266_814)">
                                                <path d="M62.7213 1.28125H1.28125V62.7213H62.7213V1.28125Z" fill="#222222" />
                                            </g>
                                        </svg>
                                        <img
                                            src={LinkedIn}
                                            alt="linkedin"
                                        />
                                        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.382 17.0611L46.2912 17.0006C44.4151 15.2152 42.206 14.3678 39.664 14.4889L39.5732 14.3073L39.6337 14.2771C41.9336 13.7626 43.2954 13.2179 43.719 12.6127C43.84 12.1285 43.6887 11.8561 43.1744 11.7956C42.0244 11.9469 40.935 12.189 39.9968 12.5824C41.2073 11.7956 41.6611 11.2509 41.3888 10.9785C40.2086 11.0088 38.9073 11.614 37.5758 12.8245C38.0601 11.9772 38.2719 11.493 38.1509 11.4325C37.485 11.8561 36.9404 12.3403 36.4561 12.8548C35.4274 14.0047 34.6102 15.0639 33.9746 16.0322L33.9444 16.0928C32.3405 18.7255 31.1906 21.3583 30.5249 24.0516L30.2826 24.2635L30.2221 24.2937C29.2539 23.0833 28.0737 22.0544 26.6817 21.2373C25.0474 20.1479 23.1107 19.1492 20.8713 18.1506C18.4504 16.8796 15.9689 15.8507 13.4874 15.0336C13.4572 17.848 14.8492 20.0571 17.5425 21.6912V21.7215C16.6044 21.7215 15.6663 21.8728 14.7584 22.1452C14.94 24.7477 16.786 26.533 20.2661 27.5015L20.2358 27.562C18.874 27.4712 17.7543 27.9553 16.8767 28.954C18.0267 31.1934 20.0542 32.2526 22.9896 32.1921C22.4147 32.4947 21.9607 32.7972 21.6581 33.1606C21.1134 33.7354 20.9318 34.4013 21.1134 35.1577C21.7489 36.3077 22.8686 36.8223 24.533 36.7313L24.6238 36.8525L24.5935 36.913C21.7186 39.8786 18.2385 41.2101 14.1834 40.9378L14.1229 40.9681C11.6414 40.9378 8.9784 39.7576 6.10352 37.3971C8.9784 41.5429 12.8217 44.539 17.5728 46.4454C22.9896 48.231 28.4368 48.3822 33.8536 46.8387H33.9444C39.2101 45.3257 43.6585 42.1786 47.3504 37.4576C49.045 35.0064 50.1042 32.646 50.5278 30.3763C53.2818 30.467 55.2487 29.6804 56.4895 27.9856L56.4592 27.925C55.521 28.2581 53.7357 28.1673 51.1029 27.6225V27.3199C54.008 26.9871 55.7331 26.0489 56.2777 24.5056C54.25 25.2923 52.2529 25.3225 50.2858 24.5661C49.9227 21.8425 48.6214 19.3308 46.382 17.0611Z" fill="#222222" />
                                            <mask id="mask0_2266_807" maskUnits="userSpaceOnUse" x="6" y="10" width="51" height="38">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.382 17.0611L46.2912 17.0006C44.4151 15.2152 42.206 14.3678 39.664 14.4889L39.5732 14.3073L39.6337 14.2771C41.9336 13.7626 43.2954 13.2179 43.719 12.6127C43.84 12.1285 43.6887 11.8561 43.1744 11.7956C42.0244 11.9469 40.935 12.189 39.9968 12.5824C41.2073 11.7956 41.6611 11.2509 41.3888 10.9785C40.2086 11.0088 38.9073 11.614 37.5758 12.8245C38.0601 11.9772 38.2719 11.493 38.1509 11.4325C37.485 11.8561 36.9404 12.3403 36.4561 12.8548C35.4274 14.0047 34.6102 15.0639 33.9746 16.0322L33.9444 16.0928C32.3405 18.7255 31.1906 21.3583 30.5249 24.0516L30.2826 24.2635L30.2221 24.2937C29.2539 23.0833 28.0737 22.0544 26.6817 21.2373C25.0474 20.1479 23.1107 19.1492 20.8713 18.1506C18.4504 16.8796 15.9689 15.8507 13.4874 15.0336C13.4572 17.848 14.8492 20.0571 17.5425 21.6912V21.7215C16.6044 21.7215 15.6663 21.8728 14.7584 22.1452C14.94 24.7477 16.786 26.533 20.2661 27.5015L20.2358 27.562C18.874 27.4712 17.7543 27.9553 16.8767 28.954C18.0267 31.1934 20.0542 32.2526 22.9896 32.1921C22.4147 32.4947 21.9607 32.7972 21.6581 33.1606C21.1134 33.7354 20.9318 34.4013 21.1134 35.1577C21.7489 36.3077 22.8686 36.8223 24.533 36.7313L24.6238 36.8525L24.5935 36.913C21.7186 39.8786 18.2385 41.2101 14.1834 40.9378L14.1229 40.9681C11.6414 40.9378 8.9784 39.7576 6.10352 37.3971C8.9784 41.5429 12.8217 44.539 17.5728 46.4454C22.9896 48.231 28.4368 48.3822 33.8536 46.8387H33.9444C39.2101 45.3257 43.6585 42.1786 47.3504 37.4576C49.045 35.0064 50.1042 32.646 50.5278 30.3763C53.2818 30.467 55.2487 29.6804 56.4895 27.9856L56.4592 27.925C55.521 28.2581 53.7357 28.1673 51.1029 27.6225V27.3199C54.008 26.9871 55.7331 26.0489 56.2777 24.5056C54.25 25.2923 52.2529 25.3225 50.2858 24.5661C49.9227 21.8425 48.6214 19.3308 46.382 17.0611Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_2266_807)">
                                                <path d="M63.2585 1.12891H1.12891V63.2585H63.2585V1.12891Z" fill="#222222" />
                                            </g>
                                        </svg>
                                    </Box>
                                </Box>

                            </Grid>

                            <Grid item xs={10}
                                sx={{
                                    mt: 2,

                                }}
                            >
                                <Box
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        justifyContent: "right",
                                        wordWrap: 'break-word',
                                        wordBreak: "break-word"
                                    }}
                                >
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            10 + Years
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", wordBreak: "break-word", mt: 1 }}>
                                            Experience in Stock Market
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            2min +
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Subscribers (Youtube)
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            17.5% CAGR
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Personal Portfolio
                                        </Typography>
                                    </Grid>
                                </Box>
                                <Box
                                    sx={{

                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "right",

                                        wordWrap: 'break-word',
                                        wordBreak: "break-word",
                                        mt: 2
                                    }}
                                >
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            8+ Years
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Teaching Experience
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            147+ Hours
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Content Created on Indian Stock Market
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1.2} >
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                </Box > */}
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        justifyContent: "center",
                        mt: { xs: 3, sm: 4, md: 5 }, // Responsive margin top
                    }}
                >
                    <Box
                        sx={{
                            boxShadow: 2,
                            width: '100%', // Full width on extra-small screens
                            maxWidth: { sm: '80%' }, // 80% width on small screens
                            height: 'auto', // Auto height
                            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                            color: (theme) =>
                                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                            textAlign: 'center',
                            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' }, // Responsive font size
                            fontWeight: '700',
                            position:"relative"
                        }}
                    >
                        <Grid container sx={{ mt: { xs: 3, sm: 4 } }}>
                            <Grid item xs={12} sm={2} // Full width on extra-small screens, 2 columns on small screens
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: { xs: -50, sm: -50,md:-50 }, // Adjust position on different screens
                                        left:5,// Adjust position on different screens
                                        display: 'flex',
                                        flexDirection: 'column',
                                        // top:-50
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        mt: { xs: 4, sm: 0 }, 
                                        ml:4// Adjust margin top on different screens
                                    }}
                                >
                                    <img
                                        src={Owner}
                                        alt="video"
                                        loading="lazy"
                                        width={230}
                                        height={200}
                                        style={{
                                            borderRadius: "50%",
                                            backgroundColor: "#FABF35",
                                        }}
                                    />
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: "center",
                                            mt: 4,
                                        }}
                                    >
                                        <svg width="30" height="30" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M38.6682 0.896484H12.8894C5.15575 0.896484 0 6.40495 0 14.6676V31.193C0 39.4557 5.15575 44.9642 12.8894 44.9642H38.6682C46.4018 44.9642 51.5575 39.4557 51.5575 31.193V14.6676C51.5575 6.40495 46.4018 0.896484 38.6682 0.896484ZM30.651 25.7672L24.2836 29.8435C21.7057 31.496 19.5918 30.2291 19.5918 27.0066V18.8265C19.5918 15.6041 21.7057 14.3372 24.2836 15.9897L30.651 20.0659C33.0999 21.6634 33.0999 24.1973 30.651 25.7672Z" fill="#222222" />
                                        </svg>

                                        <svg width="45" height="45" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7256 49.7118V32.7477V24.2893C57.7256 19.8721 54.1333 16.2812 49.7161 16.2812H24.2951C19.878 16.2812 16.2871 19.8721 16.2871 24.2893V32.7477V49.7118C16.2871 54.1305 19.878 57.7212 24.2951 57.7212H49.7176C54.1333 57.7212 57.7256 54.1305 57.7256 49.7118ZM44.3011 36.9992C44.3011 41.0215 41.0244 44.2923 37.005 44.2923C32.9841 44.2923 29.7101 41.02 29.7145 36.9977C29.716 35.4097 30.231 33.9439 31.0939 32.7462C32.422 30.909 34.5748 29.7057 37.0094 29.7057C39.4425 29.7057 41.5965 30.9105 42.9217 32.7477C43.7816 33.9453 44.3011 35.4111 44.3011 36.9992ZM52.9316 28.0768V21.9633V21.0535L52.0172 21.0564L45.9066 21.0755L45.93 28.1003L52.9316 28.0768ZM37.0065 48.3324C43.2565 48.3324 48.3397 43.246 48.3397 36.9992C48.3397 35.4964 48.036 34.0596 47.4973 32.7477H53.6858V49.7118C53.6858 51.9043 51.9027 53.68 49.7146 53.68H24.2937C22.1027 53.68 20.3227 51.9043 20.3227 49.7118V32.7477H26.5081C25.9739 34.0596 25.6745 35.4964 25.6745 36.9992C25.6745 43.246 30.7564 48.3324 37.0065 48.3324Z" fill="#222222" />
                                            <mask id="mask0_2266_821" maskUnits="userSpaceOnUse" x="16" y="16" width="42" height="42">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.7256 49.7118V32.7477V24.2893C57.7256 19.8721 54.1333 16.2812 49.7161 16.2812H24.2951C19.878 16.2812 16.2871 19.8721 16.2871 24.2893V32.7477V49.7118C16.2871 54.1305 19.878 57.7212 24.2951 57.7212H49.7176C54.1333 57.7212 57.7256 54.1305 57.7256 49.7118ZM44.3011 36.9992C44.3011 41.0215 41.0244 44.2923 37.005 44.2923C32.9841 44.2923 29.7101 41.02 29.7145 36.9977C29.716 35.4097 30.231 33.9439 31.0939 32.7462C32.422 30.909 34.5748 29.7057 37.0094 29.7057C39.4425 29.7057 41.5965 30.9105 42.9217 32.7477C43.7816 33.9453 44.3011 35.4111 44.3011 36.9992ZM52.9316 28.0768V21.9633V21.0535L52.0172 21.0564L45.9066 21.0755L45.93 28.1003L52.9316 28.0768ZM37.0065 48.3324C43.2565 48.3324 48.3397 43.246 48.3397 36.9992C48.3397 35.4964 48.036 34.0596 47.4973 32.7477H53.6858V49.7118C53.6858 51.9043 51.9027 53.68 49.7146 53.68H24.2937C22.1027 53.68 20.3227 51.9043 20.3227 49.7118V32.7477H26.5081C25.9739 34.0596 25.6745 35.4964 25.6745 36.9992C25.6745 43.246 30.7564 48.3324 37.0065 48.3324Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_2266_821)">
                                                <path d="M72.5244 11.4805H1.48438V82.5205H72.5244V11.4805Z" fill="#222222" />
                                            </g>
                                        </svg>
                                        <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M40.313 32.0144H35.2895C35.2895 40.0405 35.2895 49.9201 35.2895 49.9201H27.8453C27.8453 49.9201 27.8453 40.1363 27.8453 32.0144H24.3066V25.6858H27.8453V21.5926C27.8453 18.661 29.2384 14.0801 35.3579 14.0801L40.8741 14.1012V20.2443C40.8741 20.2443 37.5221 20.2443 36.8703 20.2443C36.2185 20.2443 35.2918 20.5702 35.2918 21.9682V25.6871H40.9635L40.313 32.0144Z" fill="#222222" />
                                            <mask id="mask0_2266_814" maskUnits="userSpaceOnUse" x="24" y="14" width="17" height="36">
                                                <path d="M40.3384 32.0144H35.3149C35.3149 40.0405 35.3149 49.9201 35.3149 49.9201H27.8707C27.8707 49.9201 27.8707 40.1363 27.8707 32.0144H24.332V25.6858H27.8707V21.5926C27.8707 18.661 29.2638 14.0801 35.3832 14.0801L40.8995 14.1012V20.2443C40.8995 20.2443 37.5475 20.2443 36.8957 20.2443C36.2439 20.2443 35.3172 20.5702 35.3172 21.9682V25.6871H40.9889L40.3384 32.0144Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_2266_814)">
                                                <path d="M62.7213 1.28125H1.28125V62.7213H62.7213V1.28125Z" fill="#222222" />
                                            </g>
                                        </svg>
                                        <img
                                            src={LinkedIn}
                                            alt="linkedin"
                                            height={30}
                                            width={30}
                                        />
                                        <svg width="36" height="36" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M46.382 17.0611L46.2912 17.0006C44.4151 15.2152 42.206 14.3678 39.664 14.4889L39.5732 14.3073L39.6337 14.2771C41.9336 13.7626 43.2954 13.2179 43.719 12.6127C43.84 12.1285 43.6887 11.8561 43.1744 11.7956C42.0244 11.9469 40.935 12.189 39.9968 12.5824C41.2073 11.7956 41.6611 11.2509 41.3888 10.9785C40.2086 11.0088 38.9073 11.614 37.5758 12.8245C38.0601 11.9772 38.2719 11.493 38.1509 11.4325C37.485 11.8561 36.9404 12.3403 36.4561 12.8548C35.4274 14.0047 34.6102 15.0639 33.9746 16.0322L33.9444 16.0928C32.3405 18.7255 31.1906 21.3583 30.5249 24.0516L30.2826 24.2635L30.2221 24.2937C29.2539 23.0833 28.0737 22.0544 26.6817 21.2373C25.0474 20.1479 23.1107 19.1492 20.8713 18.1506C18.4504 16.8796 15.9689 15.8507 13.4874 15.0336C13.4572 17.848 14.8492 20.0571 17.5425 21.6912V21.7215C16.6044 21.7215 15.6663 21.8728 14.7584 22.1452C14.94 24.7477 16.786 26.533 20.2661 27.5015L20.2358 27.562C18.874 27.4712 17.7543 27.9553 16.8767 28.954C18.0267 31.1934 20.0542 32.2526 22.9896 32.1921C22.4147 32.4947 21.9607 32.7972 21.6581 33.1606C21.1134 33.7354 20.9318 34.4013 21.1134 35.1577C21.7489 36.3077 22.8686 36.8223 24.533 36.7313L24.6238 36.8525L24.5935 36.913C21.7186 39.8786 18.2385 41.2101 14.1834 40.9378L14.1229 40.9681C11.6414 40.9378 8.9784 39.7576 6.10352 37.3971C8.9784 41.5429 12.8217 44.539 17.5728 46.4454C22.9896 48.231 28.4368 48.3822 33.8536 46.8387H33.9444C39.2101 45.3257 43.6585 42.1786 47.3504 37.4576C49.045 35.0064 50.1042 32.646 50.5278 30.3763C53.2818 30.467 55.2487 29.6804 56.4895 27.9856L56.4592 27.925C55.521 28.2581 53.7357 28.1673 51.1029 27.6225V27.3199C54.008 26.9871 55.7331 26.0489 56.2777 24.5056C54.25 25.2923 52.2529 25.3225 50.2858 24.5661C49.9227 21.8425 48.6214 19.3308 46.382 17.0611Z" fill="#222222" />
                                            <mask id="mask0_2266_807" maskUnits="userSpaceOnUse" x="6" y="10" width="51" height="38">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M46.382 17.0611L46.2912 17.0006C44.4151 15.2152 42.206 14.3678 39.664 14.4889L39.5732 14.3073L39.6337 14.2771C41.9336 13.7626 43.2954 13.2179 43.719 12.6127C43.84 12.1285 43.6887 11.8561 43.1744 11.7956C42.0244 11.9469 40.935 12.189 39.9968 12.5824C41.2073 11.7956 41.6611 11.2509 41.3888 10.9785C40.2086 11.0088 38.9073 11.614 37.5758 12.8245C38.0601 11.9772 38.2719 11.493 38.1509 11.4325C37.485 11.8561 36.9404 12.3403 36.4561 12.8548C35.4274 14.0047 34.6102 15.0639 33.9746 16.0322L33.9444 16.0928C32.3405 18.7255 31.1906 21.3583 30.5249 24.0516L30.2826 24.2635L30.2221 24.2937C29.2539 23.0833 28.0737 22.0544 26.6817 21.2373C25.0474 20.1479 23.1107 19.1492 20.8713 18.1506C18.4504 16.8796 15.9689 15.8507 13.4874 15.0336C13.4572 17.848 14.8492 20.0571 17.5425 21.6912V21.7215C16.6044 21.7215 15.6663 21.8728 14.7584 22.1452C14.94 24.7477 16.786 26.533 20.2661 27.5015L20.2358 27.562C18.874 27.4712 17.7543 27.9553 16.8767 28.954C18.0267 31.1934 20.0542 32.2526 22.9896 32.1921C22.4147 32.4947 21.9607 32.7972 21.6581 33.1606C21.1134 33.7354 20.9318 34.4013 21.1134 35.1577C21.7489 36.3077 22.8686 36.8223 24.533 36.7313L24.6238 36.8525L24.5935 36.913C21.7186 39.8786 18.2385 41.2101 14.1834 40.9378L14.1229 40.9681C11.6414 40.9378 8.9784 39.7576 6.10352 37.3971C8.9784 41.5429 12.8217 44.539 17.5728 46.4454C22.9896 48.231 28.4368 48.3822 33.8536 46.8387H33.9444C39.2101 45.3257 43.6585 42.1786 47.3504 37.4576C49.045 35.0064 50.1042 32.646 50.5278 30.3763C53.2818 30.467 55.2487 29.6804 56.4895 27.9856L56.4592 27.925C55.521 28.2581 53.7357 28.1673 51.1029 27.6225V27.3199C54.008 26.9871 55.7331 26.0489 56.2777 24.5056C54.25 25.2923 52.2529 25.3225 50.2858 24.5661C49.9227 21.8425 48.6214 19.3308 46.382 17.0611Z" fill="white" />
                                            </mask>
                                            <g mask="url(#mask0_2266_807)">
                                                <path d="M63.2585 1.12891H1.12891V63.2585H63.2585V1.12891Z" fill="#222222" />
                                            </g>
                                        </svg>
                                    </Box>


                                    {/* Your image and icons */}
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={10} // Full width on extra-small screens, 10 columns on small screens
                                sx={{
                                    mt: { xs: 2, sm: 0 }, // Adjust margin top on different screens
                                }}
                            >
                                <Box
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        justifyContent: "right",
                                        wordWrap: 'break-word',
                                        wordBreak: "break-word",
                                    }}
                                >
                                    {/* Content */}
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            10 + Years
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", wordBreak: "break-word", mt: 1 }}>
                                            Experience in Stock Market
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            2min +
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Subscribers (Youtube)
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            17.5% CAGR
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Personal Portfolio
                                        </Typography>
                                    </Grid>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "right",
                                        wordWrap: 'break-word',
                                        wordBreak: "break-word",
                                        mt: 2
                                    }}
                                >
                                    {/* More content */}
                                    <Grid item xs={2} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            8+ Years
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Teaching Experience
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3} >
                                        <Typography sx={{ fontWeight: 'Bold', color: "#352A9A", fontSize: "1.2rem" }}>
                                            147+ Hours
                                        </Typography>
                                        <Typography sx={{ fontWeight: 'Bold', color: "#000000", fontSize: "1rem", mt: 1 }}>
                                            Content Created on Indian Stock Market
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1.2} >
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Title title="Testimonials" />

                <ImgMediaCard />
                <Title title="Learn Anytime & Anywhere" />

                {/* <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={4}
                >
                    <Box
                        style={{
                            width: "323px",
                            backgroundImage: `url(${MainImage})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",

                        }}
                    >
                        <img
                            src={IPhone}
                            alt='iphone'
                            style={{
                                margin: 14,
                                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={8}>

                    <Typography variant="h4">
                        Join India's Best Finance learning
                        platform today
                    </Typography>

                    <Typography variant="span">
                        Start Learning by downloading our App.
                    </Typography>
                    <Grid container>
                        <Grid item
                            sx={{
                                borderRadius: 1,
                                display: 'flex',
                                maxWidth: 350,
                                mt: 3,
                            }}
                            spacing={4}
                        >
                            <img
                                src={PlayStore}
                                alt='iphone'
                            />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid > */}
                <Grid container spacing={2} sx={{ mt: { xs: 2, sm: 3 }, mb: 3 }}>
                    <Grid item xs={12} sm={4}>
                        <Box
                            style={{
                                width: "323px",
                                backgroundImage: `url(${MainImage})`,
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            <img
                                src={IPhone}
                                alt="iphone"
                                style={{
                                    margin: 14,
                                    // width: "100%", // Full width on all screens
                                    boxShadow:
                                        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <Typography variant="h4">
                            Join India's Best Finance learning platform today
                        </Typography>
                        <Typography variant="subtitle1">
                            Start Learning by downloading our App.
                        </Typography>
                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                sx={{
                                    borderRadius: 1,
                                    display: 'flex',
                                    maxWidth: { xs: '100%', sm: 350 }, // Limit width on larger screens
                                    mt: { xs: 3, sm: 0 }, // Adjust margin top on different screens
                                    justifyContent: { xs: 'center', sm: 'flex-start' }, // Center on small screens, align to the left on larger screens
                                }}
                            >
                                <img src={PlayStore} alt="iphone" style={{ width: "100%" }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Title title="Our Pricing" />

                {/* <FormControl
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                    }}
                >
                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group">
                        <Grid container spacing={5}>
                            <Grid item xs={6}
                                sx={{
                                    boxShadow: 3,
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: '#000000',
                                    p: 1,
                                    fontSize: 24,
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'top',
                                    justifyContent: 'left'
                                }}
                            >

                                <FormControlLabel value="male" control={<Radio />} label={<Price1 />} />
                            </Grid>
                            <Grid item xs={6}
                                sx={{
                                    boxShadow: 3,
                                    bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
                                    color: '#000000',
                                    p: 1,
                                    fontSize: 24,
                                    fontWeight: '600',
                                    display: 'flex',
                                    alignItems: 'top',
                                    justifyContent: 'left'
                                }}
                            >

                                <FormControlLabel value="male" control={<Radio />} label={<Price1 />} />
                            </Grid>
                        </Grid>
                    </RadioGroup>
                </FormControl> */}
                <FormControl
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column', // Align items vertically
                    }}
                >
                    {/* <FormLabel id="demo-radio-buttons-group-label">Choose an Option:</FormLabel> */}
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        sx={{
                            display: 'block',
                            // flexDirection: 'column', // Display radio buttons vertically
                            // alignItems: 'flex-start', // Align radio buttons to the left
                        }}
                    >
                        <Grid container >
                            <FormControlLabel
                                value="option1"
                                control={<Radio />}
                                label={<Price1 />}
                                sx={boxStyles}
                            />
                            <FormControlLabel
                                value="option2"
                                control={<Radio />}
                                label={<Price1 />}
                                sx={boxStyles}
                            />
                        </Grid>

                    </RadioGroup>
                </FormControl>



                <Offer />
                <Title title="GET CERTIFIED" />

                {/* <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={8}>
                        <img
                            src={Certificate}
                            height={500}
                            width={800}
                        />
                    </Grid>
                    <Grid item xs={4} spacing={2}
                        sx={{
                            mt: 5
                        }}
                    >
                        <Typography variant="span"

                        >
                            You'll receive the certificate upon the completion of course.  It adds a great value in the resume for Students and working professionals.
                        </Typography>
                        <ButtonCompo label="GET YOUR ACCESS NOW" size={20} />
                    </Grid>
                </Grid> */}
                <Grid container spacing={2} sx={{ mt: 3 }}>
                    <Grid item xs={12} md={8}> {/* Adjust the number of columns for different screen sizes */}
                        <img
                            src={Certificate}
                            alt="Certificate"
                            width="100%" // Use 100% width to ensure the image is responsive
                            style={{ maxWidth: "800px", height: "auto" }} // Limit the maximum width
                        />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ mt: { xs: 3, md: 5 } }}> {/* Adjust the spacing for different screen sizes */}
                        <Typography variant="body2">
                            You'll receive the certificate upon the completion of the course. It adds great value to the resume for students and working professionals.
                        </Typography>
                        <ButtonCompo label="GET YOUR ACCESS NOW" size={20} />
                    </Grid>
                </Grid>
                {/* 
                {faqData.map((element) =>
                    <FAQ title={element.title} detail={element.detail} />
                )}
                <Title title="Still Have More Questions?" />
                <Grid container
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        mt: 2
                    }}
                >
                    <ButtonCompo label="CONTACT US" size={20} />
                </Grid> */}
                <Grid container sx={{ mt: 3 }}>
                    {faqData.map((element) => (
                        <Grid item xs={12} sm={12} md={12} key={element.title}> {/* Adjust the number of columns for different screen sizes */}
                            <FAQ title={element.title} detail={element.detail} />
                        </Grid>
                    ))}

                </Grid>
                <Footer />
            </ThemeProvider >
        </>
    )
}

export default Main