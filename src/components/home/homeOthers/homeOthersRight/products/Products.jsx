import { ProductsTable } from './Table';
import { makeStyles } from '@mui/styles';
import { Typography, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles( theme =>({

    content: {
        marginTop: '1.6rem',
        backgroundColor:'#fff',
        borderRadius: '.7rem',
        padding: '1rem',
    },
    titleContent : {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '.5rem',
    },
    divider:{
        '&::before':{
            content: '" "',
            display: 'block',
            height: '.11rem',
            width: '20%',
            backgroundColor:'red',
        },
        marginBottom: '1rem !important',
    }
}))

export const  Products= () =>{

    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.titleContent}>
                <MenuIcon/>
                <Typography className={classes.titleText}>دیگر محصولات</Typography>
            </div>
            <Divider className={classes.divider}/>
            <ProductsTable/>
        </div>
    );
}