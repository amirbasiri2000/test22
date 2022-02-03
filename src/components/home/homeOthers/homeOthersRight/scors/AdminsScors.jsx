import { LinearProgressScore } from "../../../../progress/LinearProgress";
import { Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Title } from '../../../../../common/Title';


const useStyles = makeStyles( theme =>({
    content:{
        background: '#fff',
        borderRadius: '.7rem',
        padding: '1rem',
        width: '97%',
        marginLeft: 'auto',
        [theme.breakpoints.down('md')]:{
            width: '100%',
        }
    },
    admin : {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft:'.5rem',
        marginTop: '.6rem',
    },
    progress: {
        width: '70%',
    }
}))

export const AdminScores = () =>{

    const classes = useStyles();

    const data = [
        {
            id: 1,
            name: 'فیلتر اول',
            value: 40
        },
        {
            id: 2,
            name: 'فیلتر دوم',
            value: 30
        },
        {
            id: 3,
            name: 'فیلتر سوم',
            value: 60
        },
        {
            id: 4,
            name: 'فیلتر چهارم',
            value: 20
        }
    ]

    return(
        <div className={classes.content}>
            <Title title="امتیاز کارشناسان" />
            {
                data.map( item =>{
                    return(
                    <div className={classes.admin} key={item.id}>
                        <div>
                            <Typography>فیلتر اول</Typography>
                        </div>
                        <div className={classes.progress}>
                            <LinearProgressScore value={item.value}/>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    )
}
