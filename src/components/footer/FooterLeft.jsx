import { Typography, Box, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Image1 from '../../assets/images/home/footer/contracting1.png'
import Image2 from '../../assets/images/home/footer/contracting6.png'




const useStyles = makeStyles( theme => ({
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width:'6rem !important',
        height:'6rem !important',
    }
}))

export const FooterLeft = () =>{

    const classes = useStyles();

    return(
        <div className={classes.content}>
            <Box compoent="div">
                <Avatar className={classes.image} alt="image" src={Image1} />
            </Box>
            <Box compoent="div">
                <Avatar className={classes.image} alt="image" src={Image2} />
            </Box>
        </div>
    )
}