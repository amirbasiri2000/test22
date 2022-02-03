import { Grid } from "@mui/material"
import { AdminScores } from "./AdminsScors"
import { UserScores } from "./UsersScors"
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles( theme =>({

    scoreMain : {
        marginTop: '1.6rem',
    }
}))


export const Scores = () =>{

    const classes = useStyles();

    return(
        <div className={classes.scoreMain}>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <AdminScores/>
                </Grid>
                <Grid item md={6} xs={12}>
                    <UserScores/>
                </Grid>
            </Grid>
        </div>
    )
}