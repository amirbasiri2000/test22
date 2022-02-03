import React, { useState, useRef, useEffect } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseRoundedIcon from '@mui/icons-material/PauseRounded';
import Music1 from '../../../../../assets/musics/music1.mp3';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles( theme =>({
    rangeContent: {
        display: 'flex',
        flex: 1,
        padding: '1rem',
    },
    range: {
        width: '100%',
        color: 'red',
        outLine: 'none',
        flex: 1,
    },
    buttonContent: {
        display: "flex", 
        justifyContent: "flex-end", 
        alignItems: "center"
    },
    button: {
    },

    audioTime: {
        display: "flex", 
        justifyContent: "flex-start", 
        alignItems: "center"
    }
}))

export const Player = (props) => {

    console.log(props.audio , 'porps')
    const classes = useStyles();
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playing , setPlaying ] = useState(Music1)

  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
    setPlaying(props?.audio)
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, playing]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }

  return (
    <div >
      <audio autoPlay ref={audioPlayer} src={playing} preload="metadata"></audio>
      

      <div className={classes.audioTime}>
        <div >{calculateTime(currentTime)}</div>
        <div className={classes.rangeContent}>
            <input className={classes.range} type="range"  defaultValue="0" ref={progressBar} onChange={changeRange} />
        </div>
        <div >{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        <button className={classes.button} onClick={togglePlayPause} >
            {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon   />}
        </button>
      </div>

      {/* <div className={classes.buttonContent}>
        <button className={classes.button} onClick={backThirty}><ArrowRightIcon /> 30</button>

        <button className={classes.button} onClick={togglePlayPause} >
            {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon   />}
        </button>
        <button className={classes.button}  onClick={forwardThirty}>30 <ArrowLeftIcon /></button>
      </div> */}
    </div>
  )
}

