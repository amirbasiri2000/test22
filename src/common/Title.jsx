import { Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles( theme =>({
    divider:{
        '&::before':{
            content: '" "',
            display: 'block',
            height: '.11rem',
            width: '40%',
            backgroundColor:'red',
        },
        marginBottom: '2rem !important',
    },
    title:{
        marginBottom: '.5rem !important',
    }
}))


export const Title = ({title}) =>{

    const classes = useStyles();

    return(
        <>
            <Typography className={classes.title}>{title}</Typography>
            <Divider className={classes.divider}/>
        </>
    )
}