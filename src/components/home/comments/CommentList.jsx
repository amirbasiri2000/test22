import { CommentItem } from "./CommentItem";
import { Alert, Typography, Pagination } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles (theme =>({

    pagination:{
        margin:'4rem 0 2rem',
        display: 'flex',
        justifyContent: 'center',
    }
}))


export const CommentList = () =>{

    const classes = useStyles();

    return(
        <div>
            <CommentItem/>
            <Alert variant="filled" icon={false} severity="warning">
                <Typography>بابت ارایه نظرتون کمال تشکر را دارم</Typography>
            </Alert>
            <Pagination color="secondary" className={classes.pagination} count={5} variant="outlined" shape="rounded" />
        </div>
    )
}