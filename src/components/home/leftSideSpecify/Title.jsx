import { Button, IconButton, Typography } from "@mui/material"
import MoreIcon from '@mui/icons-material/More';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Link } from 'react-router-dom';
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) =>({

    more:{
        fontSize: '.9rem',
        paddingLeft:'.4rem !important',
        [theme.breakpoints.down('md')]: {
            display: "none",
        }
    }
}))

export const Title = () =>{

    const classes = useStyles();

    return(
        <div className="home-specify-left-side-title">
            <div className="home-specify-left-side-right-title">
                <IconButton>
                    <LibraryBooksIcon/>
                </IconButton>
                <Typography > دانشنامه آهن آلات</Typography>
            </div>
            <div className="home-specify-left-side-left-title">
                <Link to="/">
                    <Button endIcon={<MoreIcon />} variant="text"><Typography className={classes.more}>موارد بیشتر</Typography></Button>
                </Link>
            </div>
        </div>
    )
}