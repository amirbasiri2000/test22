import { Avatar, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';




const useStyles = makeStyles((theme) =>({
    nevContent:{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "flex-start",
        [theme.breakpoints.down('md')]: {
            display: "inherit", 
            justifyContent: "inherit",
        }
    },
    logo: {
        width: '5rem !important',
        height: '5rem !important'
    },
    ul: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '3rem !important',
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column',
            position: 'fixed !important',
            backgroundColor: '#ededed',
            top: 0,
            left: 0,
            width: '70vw',
            height: '100vh',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            paddingTop: '1rem !important',
        }
    },
    li: {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        margin: '0 1rem !important',
        [theme.breakpoints.down('md')]:{
            flexDirection:'row-reverse',
            justifyContent: "flex-end",
            fontSize: '.9rem',
            width: '100%',
            padding: '1rem 1rem !important',
        },
        '& .css-10hburv-MuiTypography-root':{
            color: '#838383',
        }
    },
    liIcon: {
        display: "flex !important", 
        justifyContent: "center"
    },
    ulContentNone: {
        [theme.breakpoints.down('md')]:{

            display: 'none',
        }
    },
    ulContentBlock: {
        display: 'block !important',
    },
    navLogoContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hamburgerMenuContent: {
        display: 'none !important',
        [theme.breakpoints.down('md')]: {
            display: 'inherit !important',
        }
    },
    hamburgerMenu: {
        fontSize: '2rem !important',
    },
    closeSideMenu: {
        display: 'none !important',
        marginLeft: 'auto !important',
        padding: '.5rem 1rem !important',
        [theme.breakpoints.down('md')]:{
            display: 'flex !important',
        }
    }
}))

export const TopNavBar = () =>{

    const classes = useStyles();
    const [ sideMenu , setSideMenu ] = useState(true);
    const [checked, setChecked] = useState(false);


    const sideMenuHandler = () =>{
        setSideMenu(!sideMenu)
    }

    return(
        <div className={classes.nevContent}>
            <div className={classes.navLogoContent}>
                <Link to="/">
                    <Tooltip title="logo">
                        <IconButton sx={{ p: 0 }} >
                            <Avatar  alt="logo" className={classes.logo} src={Logo} />
                        </IconButton>
                    </Tooltip>
                </Link>
                <IconButton onClick={sideMenuHandler} 
                    className={classes.hamburgerMenuContent} 
                >
                    <MenuIcon className={classes.hamburgerMenu}/>
                </IconButton>
            </div>
            <div className={sideMenu ? classes.ulContentNone : ''}>
                <List orientation="horizontal" in={checked} className={classes.ul}>
                    <IconButton onClick={sideMenuHandler} className={classes.closeSideMenu}>
                        <CloseIcon sx={{fontSize: '2rem'}} />
                    </IconButton>
                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="صفحه نخست" />
                        </ListItemButton>
                    </Link>
                
                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <QrCodeIcon />
                            </ListItemIcon>
                            <ListItemText primary="محصولات" />
                        </ListItemButton>
                    </Link>
                
                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <LibraryBooksIcon />
                            </ListItemIcon>
                            <ListItemText primary="دانشنامه" />
                        </ListItemButton>
                    </Link>

                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <HeadphonesIcon />
                            </ListItemIcon>
                            <ListItemText primary="پادکست" />
                        </ListItemButton>
                    </Link>

                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <PlayCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="ویدیو" />
                        </ListItemButton>
                    </Link>

                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText primary="تماس با ما" />
                        </ListItemButton>
                    </Link>

                    <Link to="/">
                        <ListItemButton  className={classes.li}>
                            <ListItemIcon className={classes.liIcon}>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="درباره ما" />
                        </ListItemButton>
                    </Link>
                </List>
            </div>
        </div>
    )
}