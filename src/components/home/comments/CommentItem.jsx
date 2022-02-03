import { Typography } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles( theme =>({
    userName: {
        display: 'flex',
        alignItems: 'center',
        width: '40%',
    },
    name:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem',
    },
    userNameText: {
        fontWeight: 'bold'
    },
    comment:{
        padding: '1rem !important',
    },
    commentText: {
        fontSize: '.9rem !important'
    }
}))

export const CommentItem = () =>{

    const classes = useStyles();

    return(
        <>
            <div>
                <div className={classes.name}>
                    <div className={classes.userName}>
                        <ArrowBackIosIcon sx={{fontSize:'1.6rem !important' , padding:'0 .4rem'}}/>
                        <Typography className={classes.userNameText}>امیر بصیری</Typography>
                    </div>
                    <Typography className={classes.userNameText}>در تاریخ 1400/11/12</Typography>
                </div>
                <div className={classes.comment}>
                    <Typography className={classes.commentText}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </Typography>
                </div>
            </div>
            
        </>
    )
}