import { Typography, Avatar, Box, Button } from '@mui/material';
import Logo from '../../assets/images/logo.png';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles( theme => ({
    content: {
        textAlign: 'center',
    },
    logo: {
        width: '5rem !important',
        height: '5rem !important',
        margin: '1rem auto 2rem',
    },
    input: {
        borderRadius: ".2rem", 
        border: '1px solid rgba(0,0,0,0.23)',
        outline: 'none',
        padding:'.5rem 1rem !important',
        width: '60%',
    },
    form:{
        display: 'flex',
    },
    button: {
        padding: '0 !important'
    },
    buttonText: {
        fontSize: '.8rem !important',
        padding : '0 .5rem !important',
    }
}))



export const FooterMiddle = () =>{

    const classes = useStyles();

    return(
        <div className={classes.content}>
            <div>
                <Box compoent="div">
                    <Avatar className={classes.logo} alt="logo" src={Logo} />
                </Box>
                <Box component="form" className={classes.form}>
                    <Button className={classes.button} variant="contained">
                        <Typography className={classes.buttonText}>عضویت در خبرنامه</Typography>
                    </Button>
                    <input className={classes.input} type="email" placeholder="ایمیل خود را وارد کنید"/>
                </Box>
            </div>
        </div>
    )
}