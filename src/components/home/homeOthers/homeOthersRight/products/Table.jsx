import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';



const useStyles = makeStyles( theme =>({
    table: {
        boxShadow: 'none !important',
    },
    tableCellHead : {
        textAlign: 'center !important',
        padding: '.5rem 0 !important'
    },
    tableCellBody : {
        textAlign: 'center !important',
        padding: '.5rem 0 !important',
        
    },
    text1: {
        fontSize: '.9rem !important',
        letterSpacing: '-.5px !important',
    },
    row: {
        '&:nth-child(odd)':{
            background: '#ededed',
        }
    }
}))



export function ProductsTable() {


    const classes = useStyles();
    
    const data = [
        {
            id: 1,
            count: 1,
            name: 'تیرآهن 14 ذوب آهن تهران',
            size: '12',
            weight:'125',
            length: '12',
            unit: 'کیلوگرم',
            number:'50'
        },
        {
            id: 2,
            count: 2,
            name: 'تیرآهن 14 ذوب آهن تهران',
            size: '12',
            weight:'125',
            length: '12',
            unit: 'کیلوگرم',
            number:'50'
        },
        {
            id: 3,
            count: 3,
            name: 'تیرآهن 14 ذوب آهن تهران',
            size: '12',
            weight:'125',
            length: '12',
            unit: 'کیلوگرم',
            number:'50'
        },
        {
            id: 4,
            count: 4,
            name: 'تیرآهن 14 ذوب آهن تهران',
            size: '12',
            weight:'125',
            length: '12',
            unit: 'کیلوگرم',
            number:'50'
        },
        {
            id: 5,
            count: 5,
            name: 'تیرآهن 14 ذوب آهن تهران',
            size: '12',
            weight:'125',
            length: '12',
            unit: 'کیلوگرم',
            number:'50'
        },
    ]

    return (
        <TableContainer component={Paper} className={classes.table}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow >
                <TableCell className={classes.tableCellHead} sx={{ width: '7%'}}></TableCell>
                <TableCell className={classes.tableCellHead} sx={{ width: '20%'}}><Typography>نام</Typography></TableCell>
                <TableCell className={classes.tableCellHead} sx={{ width: '14.6%'}}><Typography>سایز(cm)</Typography></TableCell>
                <TableCell className={classes.tableCellHead} sx={{ width: '14.6%'}}><Typography>وزن(kg)</Typography></TableCell>
                <TableCell className={classes.tableCellHead} sx={{ width: '14.6%'}}><Typography>طول شاخه(m)</Typography></TableCell>
                <TableCell className={classes.tableCellHead} sx={{ width: '14.6%'}}><Typography>واحد</Typography></TableCell>
                <TableCell className={classes.tableCellHead} sx={{ width: '14.6%'}}><Typography>تعداد هر بسته</Typography></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map( item =>{
                        return(
                            <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            className={classes.row}
                            >
                                <TableCell className={classes.tableCellBody} ><Typography>{item.count}</Typography></TableCell>
                                <TableCell className={classes.tableCellBody} ><Typography className={classes.text1}>{item.name}</Typography></TableCell>
                                <TableCell className={classes.tableCellBody} ><Typography>{item.size}</Typography></TableCell>
                                <TableCell className={classes.tableCellBody} ><Typography>{item.weight}</Typography></TableCell>
                                <TableCell className={classes.tableCellBody} ><Typography>{item.length}</Typography></TableCell>
                                <TableCell className={classes.tableCellBody} ><Typography>{item.unit}</Typography></TableCell>
                                <TableCell className={classes.tableCellBody} ><Typography>{item.number}</Typography></TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
        </TableContainer>
    );
}