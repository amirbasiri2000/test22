import { useState } from 'react';
import { LeftSideTtile } from '../../../../../common/LeftSideTitle';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import Music1 from '../../../../../assets/musics/music1.mp3';
import Music2 from '../../../../../assets/musics/music2.mp3';
import Music3 from '../../../../../assets/musics/music3.mp3';
import Music4 from '../../../../../assets/musics/music4.mp3';
import Music5 from '../../../../../assets/musics/music5.mp3';
import Music6 from '../../../../../assets/musics/music6.mp3';
import Pick1 from '../../../../../assets/musics/test1.jpg';
import Pick2 from '../../../../../assets/musics/test2.jpg';
import Pick3 from '../../../../../assets/musics/test3.jpg';
import Pick4 from '../../../../../assets/musics/test4.jpg';
import { makeStyles } from '@mui/styles';
import { Avatar, Divider, Typography } from '@mui/material';
import { Player } from './Player';


const useStyles = makeStyles( theme => ({

    content: {
        backgroundColor: '#fff',
        borderRadius: '.7rem',
        padding: '1rem',
        width: '97%',
        marginRight: 'auto',
        [theme.breakpoints.down('md')]:{
            width: '100%',
            marginTop: '1.6rem',
        }
    },
    topSection: {
        display: 'flex',
    },
    topTypo: {
        fontSize: '.9rem !important',
        color: '#888',
    },
    topImg: {
        width: '40%',
        height: '7rem',
        padding: '0 0 1rem 1rem',
    },
    img: {
        borderRadius: '.7rem',
    },
    topDesc :{
        display: 'flex',
        flexDirection: "column", 
        justifyContent: "space-between", 
        alignItems: "flex-end",
    },
    date: {
        fontSize: '.8rem !important',
        color: '#999',
    },
    divider: {
        margin: '1rem 0 !important',
    },
    listContent: {
        
    },
    audioList:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 0',
        cursor: 'pointer',
    },
    listDesc: {
        fontSize: '.95rem !important',
        color: '#555',
    },
}))

export const MusicPlayer = () =>{

    const classes = useStyles();

    const [ playing , setPlaying ] = useState(
        {
            id : 1,
            img : Pick1,
            audio: Music1,
            desc: 'لورم ایپسوم متن ساختگی با تاز صنعت',
            date: '1400/11/15',
        },
        
    );
    console.log(playing.audio ,'staate')

    const data = [
        {
            id : 1,
            img : Pick1,
            audio: Music1,
            desc: 'لورم ایپسوم متن ساختگی با از صنعت',
            date: '1400/11/15',
        },
        {
            id : 2,
            img : Pick2,
            audio: Music2,
            desc: 'لورم ایپسوم متن ساختگی با از صنعت',
            date: '1400/11/15',
        },
        {
            id : 3,
            img : Pick3,
            audio: Music3,
            desc: 'لورم ایپسوم متن ساختگی با از صنعت',
            date: '1400/11/15',
        },
        {
            id : 4,
            img : Pick4,
            audio: Music4,
            desc: 'لورم ایپسوم متن ساختگی با از صنعت',
            date: '1400/11/15',
        },
        {
            id : 5,
            img : Pick1,
            audio: Music5,
            desc: 'لورم ایپسوم متن ساختگی با از صنعت',
            date: '1400/11/15',
        },
        {
            id : 6,
            img : Pick2,
            audio: Music6,
            desc: 'لورم ایپسوم متن ساختگی با از صنعت',
            date: '1400/11/15',
        }
    ]
    const changeMusicHandler = (id) =>{
        const play = data.find( item => item.id == id);
        setPlaying(play);
    }

    return(
        <div className={classes.content}>
            <div>
                <LeftSideTtile title="پادکست" icon={<HeadphonesIcon/>}/>
            </div>
            <div>
                <div className={classes.topSection}>
                    <div className={classes.topImg}>
                        <img height="100%" className={classes.img} alt="audio" src={playing.img} />
                    </div>
                    <div className={classes.topDesc}>
                        <Typography className={classes.topTypo}>{playing.desc}</Typography>
                        <Typography className={classes.date}>{playing.date}</Typography>
                    </div>
                </div>
                <div>
                    <Player audio={playing.audio}/>
                </div>
            </div>
            <Divider className={classes.divider}/>
            <div className={classes.listContent}>
                {
                    data.map( item =>{
                        return(
                            <>
                                <div onClick={() =>changeMusicHandler(item.id)} className={classes.audioList} key={item.id}>
                                    <Typography className={classes.listDesc}>{playing.desc}</Typography>
                                    <HeadphonesIcon/>
                                    
                                </div>
                                <Divider/>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}