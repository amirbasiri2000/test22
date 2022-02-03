import { Grid } from '@mui/material';
import { Scores } from './homeOthersRight/scors/Scores';
import { SocialIcons } from './homeOthersRight/socialIcons/SocialIcons';
import { Products } from './homeOthersRight/products/Products';


export const HomeOthers = () =>{

    return(
        <Grid container>
            <Grid item xs={12} lg={8} >
                <div><SocialIcons/></div>
                <div><Scores/></div>
                <div><Products/></div>
            </Grid>
            <Grid item xs={12} lg={4} >basir</Grid>
        </Grid>
    )
}