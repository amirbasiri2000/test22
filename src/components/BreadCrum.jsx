import { Stack, Breadcrumbs, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { makeStyles } from "@mui/styles";



const useStyles = makeStyles((theme) =>({

  typo:{
    fontSize: '.9rem',
    paddingLeft:'.4rem !important',
    [theme.breakpoints.down('md')]: {
      fontSize: '.8rem !important',
    }
  }
}))

export function CustomBreadCrumb() {


  const classes = useStyles();

    const breadcrumbs = [
      <Link to="/" > <Typography className={classes.typo}>صفحه نخست </Typography></Link>,
      <Link to="/" > <Typography className={classes.typo}>دانشنامه</Typography> </Link>,
      <Typography className={classes.typo} key="3" color="text.primary">
        ذوب آهن تهران
      </Typography>,
    ];
  
    return (
      <Stack spacing={2}>
        <Breadcrumbs
          sx={{marginTop:'1rem'}}
          separator={<ArrowBackIosNewIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }