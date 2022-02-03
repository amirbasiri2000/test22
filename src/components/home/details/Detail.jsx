import { Grid } from '@mui/material'
import { Detaile1 } from './Detaile1';
import { Detaile2 } from './Detaile2';
import { MusicPlayer } from '../homeOthers/homeOthersLeft/musicPlayer/MusicPlayer';


export const HomeDetailsPage = () =>{

    return (
        <Grid container>
            <Grid sx={{}} container item lg={8} md={12} xs={12} >
                <Grid item xs={12} >
                    <Detaile1/>
                </Grid>
                <Grid item xs={12}>
                    <Detaile2/>
                </Grid>
            </Grid>
            <Grid item lg={4} md={12} xs={12} >
                <MusicPlayer/>
            </Grid>
        </Grid>
    )
}
{/* <Detaile1/>
<Detaile2/> */}