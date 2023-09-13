import * as React from 'react';
import { createTheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeProvider } from '@emotion/react';
import Instagram from './assest/Group.png'
import Facebook from './assest/facebook.png'
import Youtube from './assest/youtube.png'
import linkedInIcon from './assest/linkedInIcon.png'
import Twitter from './assest/Twitter.png'

function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}


const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const convey = ['Product', 'Options Course', 'Login']

const contactUs = ['support@convey.in', 'Whatsapp']

const legalStuff = ['Disclaimer', 'Privacy Policy', 'Terms of Service', 'Refund Policy']

const followUs = [
    {
        title: 'Facebook',
        icon: Facebook
    },
    {
        title: 'Twitter',
        icon: Twitter
    },
    {
        title: 'Instagram',
        icon: Instagram
    },
    {
        title: 'Youtube',
        icon: Youtube
    },
    {
        title: 'LinkedIn',
        icon: linkedInIcon
    },
]


const contactDetail = [
    {
        title: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016',
        icon: <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.97258 1.7754C6.4097 0.359327 9.40532 0.384078 11.8196 1.84023C14.2101 3.32604 15.663 5.97778 15.6494 8.83031C15.5938 11.6641 14.0359 14.3279 12.0885 16.3871C10.9645 17.581 9.70714 18.6367 8.34208 19.5327C8.20149 19.614 8.04749 19.6684 7.88769 19.6933C7.73388 19.6867 7.5841 19.6413 7.45184 19.561C5.3678 18.2148 3.53946 16.4964 2.05478 14.4885C0.81245 12.8124 0.10664 10.7875 0.0332044 8.68862C0.0315916 5.83062 1.53546 3.19147 3.97258 1.7754ZM5.383 9.87146C5.79295 10.8821 6.76061 11.5414 7.83415 11.5414C8.53745 11.5464 9.21351 11.2647 9.7117 10.759C10.2099 10.2533 10.4888 9.56566 10.4863 8.84925C10.4901 7.75572 9.84627 6.76773 8.85553 6.3466C7.86479 5.92547 6.72253 6.15427 5.96209 6.92616C5.20165 7.69806 4.97304 8.86079 5.383 9.87146Z" fill="white" />
            <ellipse opacity="0.4" cx="7.85268" cy="21.9241" rx="5.57729" ry="1.11546" fill="white" />
        </svg>
    },
    {
        title: 'Tel :+7892541249',
        icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2564 11.633C14.7441 16.1195 15.7622 10.9291 18.6196 13.7845C21.3743 16.5384 22.9575 17.0902 19.4673 20.5794C19.0302 20.9307 16.2525 25.1576 6.49088 15.3987C-3.27196 5.63856 0.952486 2.85806 1.30392 2.42101C4.80255 -1.07786 5.3448 0.514618 8.09951 3.26856C10.9569 6.12512 5.76869 7.14653 10.2564 11.633Z" fill="white" />
        </svg>
    },
    {
        title: 'Tel :+7276376429',
        icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2564 11.633C14.7441 16.1195 15.7622 10.9291 18.6196 13.7845C21.3743 16.5384 22.9575 17.0902 19.4673 20.5794C19.0302 20.9307 16.2525 25.1576 6.49088 15.3987C-3.27196 5.63856 0.952486 2.85806 1.30392 2.42101C4.80255 -1.07786 5.3448 0.514618 8.09951 3.26856C10.9569 6.12512 5.76869 7.14653 10.2564 11.633Z" fill="white" />
        </svg>
    },
    {
        title: 'Email: support@convey.in',
        icon: <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M22.5957 14.8829C22.5957 17.9054 20.0757 20.3537 16.937 20.3646H16.9257H5.77695C2.64945 20.3646 0.0957031 17.9271 0.0957031 14.9046V14.8937C0.0957031 14.8937 0.102453 10.0989 0.111453 7.68742C0.112578 7.23458 0.652578 6.98108 1.02045 7.26275C3.69345 9.30483 8.47358 13.0282 8.5332 13.077C9.33195 13.6934 10.3445 14.0412 11.3795 14.0412C12.4145 14.0412 13.427 13.6934 14.2257 13.0651C14.2853 13.0272 18.9586 9.41533 21.6721 7.33967C22.0411 7.05692 22.5833 7.31042 22.5845 7.76217C22.5957 10.1552 22.5957 14.8829 22.5957 14.8829Z" fill="white" />
            <path d="M22.0047 3.76109C21.0305 1.99309 19.1135 0.864258 17.003 0.864258H5.77548C3.66498 0.864258 1.74798 1.99309 0.773729 3.76109C0.555479 4.15651 0.658979 4.64942 1.02235 4.92892L9.37548 11.3628C9.96048 11.8178 10.6692 12.0443 11.378 12.0443C11.3825 12.0443 11.3859 12.0443 11.3892 12.0443C11.3926 12.0443 11.3971 12.0443 11.4005 12.0443C12.1092 12.0443 12.818 11.8178 13.403 11.3628L21.7561 4.92892C22.1195 4.64942 22.223 4.15651 22.0047 3.76109Z" fill="white" />
        </svg>
    },
]


export default function InteractiveList() {
    const theme = createTheme();

    theme.typography = {
        fontFamily: 'Ubuntu',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2rem',
        },
    };
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={2}>
                    <ThemeProvider theme={theme}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            convey
                        </Typography>
                    </ThemeProvider>
                    <Demo>
                        <List dense={dense}>
                            {convey.map((element) =>
                                <ListItem>
                                    <ListItemText
                                        primary={element}
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Demo>
                </Grid>
                <Grid item xs={12} md={2}>
                    <ThemeProvider theme={theme}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Contact US
                        </Typography>
                    </ThemeProvider>
                    <Demo>
                        <List dense={dense}>
                            {contactUs.map((element) =>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <ThemeProvider theme={theme}>
                                                <Typography variant="h6" component="div">
                                                    {element}
                                                </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Demo>
                </Grid>
                <Grid item xs={12} md={2}>
                    <ThemeProvider theme={theme}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Legal Stuff
                        </Typography>
                    </ThemeProvider>
                    <Demo>
                        <List dense={dense}>
                            {legalStuff.map((element) =>
                                <ListItem>
                                    <ListItemText
                                        primary={
                                            <ThemeProvider theme={theme}>
                                                <Typography variant="h6" component="div">
                                                    {element}
                                                </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </Demo>
                </Grid>
                <Grid item xs={12} md={2}>
                    <ThemeProvider theme={theme}>
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Follow Us
                        </Typography>
                    </ThemeProvider>
                    <Demo>
                        <List dense={dense}>
                            {followUs.map((element) =>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={element.icon}
                                                alt='Icon'
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <ThemeProvider theme={theme}>
                                                <Typography variant="h6" component="div">
                                                    {element.title}
                                                </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Demo>
                        <List dense={dense}>
                            {contactDetail.map((element) =>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            {element.icon}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <ThemeProvider theme={theme}>
                                                <Typography variant="h6" component="div">
                                                    {element.title}
                                                </Typography>
                                            </ThemeProvider>
                                        }
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
            <Grid container >
                <Grid item xs={12} 
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        textAlign: "center",
                    }}
                >
                    <Box

                    >
                        <ThemeProvider theme={theme}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                Terms and conditions | Privacy Policy
                            </Typography>
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                ©2018 - Ikashi Fintech Pvt. Ltd. | All right reserved
                            </Typography>
                        </ThemeProvider>

                        <ThemeProvider theme={theme}>
                            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                                mailto: support@convey.in
                            </Typography>
                        </ThemeProvider>
                    </Box>

                </Grid>
            </Grid>
        </Box>
    );
}