import * as React from 'react';
import { AppBar, Tabs, Tab } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Top from './componets/Top';
import Main from './componets/Main';

const navItems = ['Home', 'Option', 'Brockrage comparision', 'Finclub', 'Product'];

export default function AppComponent(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar component="nav" sx={{ backgroundColor: 'white', color: "#352A9A",boxShadow: 'none',  }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 5, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textTransform: 'capitalize', fontWeight: 600, fontFamily : "Ubuntu"}}
                    >
                        Finnovationz
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, }}>
                        <Tabs
                            value={value}
                            sx={{ color: "#352A9A" }}
                            onChange={handleChange}
                            textColor="inherit"
                            // indicatorColor="#FABF35"/\
                            aria-label="secondary tabs example"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#FABF35"
                                }
                            }}
                            style={{
                                textTransform: 'capitalize'
                            }}
                        >
                            {navItems.map((item, index) => (
                                <Tab key={item} value={index} label={

                                    <Typography
                                        gutterBottom
                                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textTransform: 'capitalize', fontWeight: 600, fontFamily : "Ubuntu"}}
                                    >
                                        {item}
                                    </Typography>
                                } />
                            ))}
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box >
                <Toolbar />
                <Top />
                <Main />

            </Box>
        </Box>
    );
}
