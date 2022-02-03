import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles( theme =>({

    socialContent: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
        padding: '1.3rem',
        marginTop: '1.6rem',
        alignItems: 'center',
    },
    icon: {
        fontSize: '3rem !important',
        borderRadius: '.7rem',
        margin: '0 .3rem',
    }
}))


export const SocialIcons = () =>{

    const classes = useStyles();

    return (
        <div className={classes.socialContent}>
            <div><Link to="/" ><TwitterIcon sx={{backgroundColor:'#1d9bf0', color:' #fff'}} className={classes.icon} /></Link></div>
            <div><Link to="/" ><GoogleIcon sx={{backgroundColor:'red' , color: '#fff'}} className={classes.icon} /></Link></div>
            <div><Link to="/" ><WhatsAppIcon sx={{backgroundColor: '#45c554', color: '#fff'}} className={classes.icon} /></Link></div>
            <div><Link to="/" ><FacebookIcon sx={{color: '#3f50b5' ,fontSize: '4rem !important',}} className={classes.icon} /></Link></div>
        </div>
    )
}