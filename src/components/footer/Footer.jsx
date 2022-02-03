import { Typography, Grid } from '@mui/material';
import { FooterRight } from './FooterRight';
import { FooterMiddle } from './FooterMiddle';
import { FooterLeft } from './FooterLeft';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles( theme =>({
    footerContent:{
        backgroundColor:'#ededed',
    },
    footerWave:{
        display: 'flex',
        alignItems: 'center',
    },
    rightWave: {
        width: '50%',
        height: '3rem',
        background: '#fff',
        borderRadius: '5rem 0 0 0',
    },
    leftWave: {
        width: '50%',
        height: '3rem',
        background: '#fff',
        borderRadius: '0 5rem 0 0',
    },
    footer: {
        background: '#fff',
        padding:'0 1rem 2rem',
    },
    policy:{
        background: '#285276',
        padding: '.5rem 0',
        textAlign: 'center',
        borderBottom:'2px solid red',
    },
    policyText: {
        color:'#fff',
    },
    item: {
        [theme.breakpoints.down('sm')]:{
            marginTop: '1rem !important',
        }
    }
}))

export const Footer = () =>{

    const classes = useStyles();

    return(
        <>
        <div className={classes.footerContent}>
            <div className={classes.footerWave}>
                <div className={classes.rightWave}></div>
                <div className={classes.leftWave}></div>
            </div>
            <div  className={classes.footer}>
                <Grid container alignItems="center">
                    <Grid className={classes.item} item xs={12} md={6} lg={4} order={{ xs: 2, md: 2, lg: 1 }}>
                        <FooterRight/>
                    </Grid>
                    <Grid  className={classes.item} item xs={12} md={6} lg={4} order={{xs: 1, md: 2, lg: 2 }}>
                        <FooterMiddle/>
                    </Grid>
                    <Grid  className={classes.item} item xs={12} md={6} lg={4} order={{xs: 3, md: 3, lg: 3 }} >
                        <FooterLeft/>
                    </Grid>
                </Grid>
            </div>
        </div>
        <div className={classes.policy}>
            <Typography className={classes.policyText}>تمام حقوق مادی و معنوی برای سایت محفوظ است</Typography>
        </div>
        </>
    )
}