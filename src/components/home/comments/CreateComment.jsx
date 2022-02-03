import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useForm } from "react-hook-form";


const useStyles = makeStyles ( theme =>({
    formContent: {
        margin: '2rem 0',
    },
    userName : { 
        borderRadius: ".2rem", 
        border: '1px solid rgba(0,0,0,0.23)',
        outline: 'none',
        padding: '.5rem .8rem !important',
        width:'40%',
        [theme.breakpoints.down('md')]: {
            width:'60%',
        },
        [theme.breakpoints.down('sm')]: {
            width:'99%',
        },
    },
    CreateComment: {
        borderRadius: ".2rem", 
        border: '1px solid rgba(0,0,0,0.23)',
        outline: 'none',
        padding:'1rem',
        width:'80%',
        [theme.breakpoints.down('md')]: {
            width:'90%',
        },
        [theme.breakpoints.down('sm')]: {
            width:'99%',
        },
    },
    userNameLabel: {
        fontSize: '1rem !important',
        marginBottom: '.5rem !important',
    },
    textAreaContent: {
        marginTop: '2rem',
    },
    button:{
        marginTop: '2rem !important',
        textAlign: 'left',
        marginBottom: '1rem !important'
    },
    error: {
        color:'red',
        fontSize: '.9rem !important',
        marginTop: '.3rem !important',
    }
}))

export const CreateComment = () =>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    const classes = useStyles();
    
    return(
        <div>
            <Box component="form" 
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={classes.formContent}>
                    <div>
                        <Typography className={classes.userNameLabel}>نام کاربری بازدید کننده</Typography>
                        <input 
                            {...register("user_name", { required: true })}
                            className={classes.userName} 
                            type="text" 
                            placeholder="لطفا نام کاربری خود را وارد کنید" 
                        />
                        {
                            errors.user_name && <Typography className={classes.error}>لطفا نام کاربری یا ایمیل خود را وارد کنید </Typography>
                        }
                    </div>
                    <div className={classes.textAreaContent}>
                        <textarea 
                            {...register("comment", { required: true })}
                            className={classes.CreateComment} 
                            rows="6"  
                            placeholder="نظر خودرا وارد کنید ..."
                        />
                        {
                            errors.comment && <Typography className={classes.error}>لطفا نظر خودتان را وارد کنید </Typography>
                        }
                    </div>
                </div>
                <div className={classes.button}>
                    <Button type="submit" variant="contained">
                        <Typography>ارسال نظر</Typography>
                    </Button>
                </div>
            </Box>
        </div>
    )
}