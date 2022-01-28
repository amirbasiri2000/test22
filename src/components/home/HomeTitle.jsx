import { Divider, IconButton, Typography } from "@mui/material"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AlignHorizontalRightIcon from '@mui/icons-material/AlignHorizontalRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export const HomeTitle = () =>{
    
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return(
        <div className="home-specify-title">
            <div className="home-specify-title-right">
                <IconButton>
                    <AlignHorizontalRightIcon/>
                </IconButton>
                <Typography > تیرآهن 14 ذوب آهن تهران</Typography>
            </div>
            {
                matches &&<><div className="home-specify-title-center">
                <Typography >پنجشنبه 12 فروردین 1400</Typography>
                </div>
                <div className="home-specify-title-left">
                    <div><Typography>Text</Typography></div>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <div><Typography>PDF</Typography></div>
                    <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                    <div><BookmarkBorderIcon/></div>
                </div></>
            }
        </div>
    )
}