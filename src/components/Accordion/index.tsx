import * as React from 'react';
import MuiAccordion, {
  accordionClasses,
  AccordionProps,
} from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface IAccordion extends Omit<AccordionProps, 'children'> {
  title: string;
  content: string;
  color?: "red" | "blue" | "orange" | "pink" | "yellow"
}

const Accordion = ({ title, content, expanded, color = "red", ...props }: IAccordion) => {
  // Convert color name to rgba for opacity
  const getColorWithOpacity = (colorName: string, opacity: number) => {
    const colorMap: Record<string, string> = {
      red: `rgba(255, 0, 0, ${opacity})`,
      blue: `rgba(0, 0, 255, ${opacity})`,
      orange: `rgba(255, 165, 0, ${opacity})`,
      pink: `rgba(255, 192, 203, ${opacity})`,
      yellow: `rgba(255, 255, 0, ${opacity})`,
    };
    return colorMap[colorName] || colorName;
  };

  return (
    <MuiAccordion
      expanded={expanded}
      sx={{
        [`&.${accordionClasses.root}`]: {
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
          marginY: '0px',
        },
        [`& .${accordionSummaryClasses.root}`]: {
          backgroundColor: getColorWithOpacity(color, 0.5), // 50% opacity
        },
      }}
      {...props}
    >
      <AccordionSummary
        expandIcon={expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      >
        <Typography component="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        backgroundColor: getColorWithOpacity(color, 0.2), // 20% opacity
      }}>
        <Typography>
          {content}
        </Typography>
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
