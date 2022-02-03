import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles( theme => ({
    content: {
        flex: 1,
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
        '& .MuiSvgIcon-root':{
            color: '#ff4693',
            fontSize: '2rem',
            marginLeft: '.5rem',
        }
    }
}))


export const FooterRight = () =>{

    const classes = useStyles();

    return(
        <div className={classes.content}>
            <div className={classes.item}>
                <LocationOnIcon/>
                <Typography>تهران، 25 کیلومتری جاده قدیم کرج</Typography>
            </div>
            <div className={classes.item}>
                <PhoneInTalkIcon/>
                <Typography>012345678 / 09145620999</Typography>
            </div>
            <div className={classes.item}>
                <MailOutlineIcon/>
                <Typography>info@ahanalt.com</Typography>
            </div>
        </div>
    )
}