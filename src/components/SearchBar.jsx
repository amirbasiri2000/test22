import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles((theme) =>({

    searchContent:{
        background: '#ededed !important',
        justifyContent: 'center',
        margin: '1rem auto',
        boxShadow:'none !important',
        [theme.breakpoints.down('md')]: {
            width:'80vw !important'
        }
    },
    nevContent: {
        display: 'flex',
        alignItems: 'center',
    }
}))


export const SearchBar = () =>{

    const classes = useStyles();

    return(
        <div>
             <Paper
                className={classes.searchContent}
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="نام محصول را وارد کنید ..."
                />
            </Paper>
        </div>
    )
}