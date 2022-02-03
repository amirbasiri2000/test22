import { Divider, Grid, Typography } from '@mui/material';
import { CreateComment } from './CreateComment';
import { CommentList } from './CommentList';
import { makeStyles } from '@mui/styles';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';


const useStyles = makeStyles( theme =>({
    commentContent : {
        background: '#fff',
        marginTop: '1.6rem',
        borderRadius: '.7rem',
        padding: '1rem',
        marginBottom: '3rem',
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


export const Comments = () =>{

    const classes = useStyles();

    return(
            <Grid container>
                <Grid item xs={12} lg={8}>
                    <div className={classes.commentContent}>
                        <div className={classes.titleContent}>
                            <ChatBubbleOutlineIcon/>
                            <Typography className={classes.titleText}>نظرات کاربران</Typography>
                        </div>
                        <Divider className={classes.divider}/>

                        <CreateComment />
                        <Divider/>
                        <CommentList />
                    </div>
                </Grid>
            </Grid>
    )
}