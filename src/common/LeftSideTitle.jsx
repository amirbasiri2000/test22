import { Typography, Divider, Button } from '@mui/material';
import MoreIcon from '@mui/icons-material/More';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles( theme =>({
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    right: {
        display: 'flex',
        alignItems: 'center',
    },
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


export const LeftSideTtile = ({ title , link , icon }) =>{

    const classes = useStyles();

    return(
        <>
            <div>
                <div className={classes.content}>
                    <div className={classes.right}>
                        <div>{icon}</div>
                        <Typography className={classes.title}>{title}</Typography>
                    </div>
                    <div>
                        <Link to={`/${link}`}>
                            <Button endIcon={<MoreIcon/>} variant="text"><Typography className={classes.more}>موارد بیشتر</Typography></Button>
                        </Link>
                    </div>
                </div>
                <Divider className={classes.divider}/>
            </div>
        </>
    )
}