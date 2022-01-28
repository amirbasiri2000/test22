import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';




const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowLeftIcon sx={{ fontSize: '1.8rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export function LeftSideSpecifyMain() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [ state , setState ] = useState(false);

  const data = [
      {
        expanded: 'panel1',
        onChange: 'panel1',
        ariaControls: 'panel1d-content',
        id: 'panel1d-header',
        title : 'لیستوفر میلگرد چیست و چگونه تهیه میشود ؟',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel2',
        onChange: 'panel2',
        ariaControls: 'panel2d-content',
        id: 'panel2d-header',
        title : 'جوشکاری سرد چیست؟',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel3',
        onChange: 'panel3',
        ariaControls: 'panel3d-content',
        id: 'panel3d-header',
        title : 'نکاتی که در اجرای آهن کشی آسانسور بداند!',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel4',
        onChange: 'panel4',
        ariaControls: 'panel4d-content',
        id: 'panel4d-header',
        title : 'نحوه محاسبه تحمل بار قوطی',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel5',
        onChange: 'panel5',
        ariaControls: 'panel5d-content',
        id: 'panel5d-header',
        title : 'جدول اشتال میلگرد',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel6',
        onChange: 'panel6',
        ariaControls: 'panel6d-content',
        id: 'panel6d-header',
        title : 'آلیاژ اینکونل چیست؟',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel7',
        onChange: 'panel7',
        ariaControls: 'panel7d-content',
        id: 'panel7d-header',
        title : 'جدول تحمل بار پروفیل',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel8',
        onChange: 'panel8',
        ariaControls: 'panel8d-content',
        id: 'panel8d-header',
        title : 'نحوه محاسبه تحمل بار قوطی',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel9',
        onChange: 'panel9',
        ariaControls: 'panel9d-content',
        id: 'panel9d-header',
        title : 'جدول اشتال میلگرد',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
      {
        expanded: 'panel0',
        onChange: 'panel0',
        ariaControls: 'panel0d-content',
        id: 'panel0d-header',
        title : 'آلیاژ اینکونل چیست؟',
        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
      },
  ]

  const clickHandler = (id) =>{

    data.find( function(item){
        if(item.id == id){
            setState(true)
        }
    })
  }

  return (
    <div>
        {
            data.map((item,index) =>{
                return(
                    <Accordion key={index} expanded={expanded === item.expanded} onChange={handleChange(item.onChange)}>
                        <AccordionSummary aria-controls={item.ariaControls} id={item.id}>
                            <Typography onClick={() => clickHandler(item.id)}>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className="accordion-details">
                            <Typography 
                                
                            >{item.description}</Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })
        }
    </div>
  );
}