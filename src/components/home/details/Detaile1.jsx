import { Typography } from "@mui/material"
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles( theme =>({

    detail1Content: {
        marginTop: '.7rem',
        background: '#fff',
        borderRadius: '.7rem',
        padding:'1rem',
        wordWrap: 'wrap'
    },
    detaile : {
        lineHeight : '2'
    }

}))

export const Detaile1 = () =>{

    const classes = useStyles();

    return(
        <div className={classes.detail1Content}>
            <Typography className={classes.detaile}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و ینده شناخت فراوان جامعه آینده شناخت فراوان جامعه و متخصصان را می طلبد 
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی ه و متخصصان را می طلبد 
            </Typography>
        </div>
    )
}