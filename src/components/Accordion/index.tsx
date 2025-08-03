import React, { ReactNode } from 'react';
import MuiAccordion, {
  accordionClasses,
  AccordionProps,
} from '@mui/material/Accordion';
import AccordionSummary, { accordionSummaryClasses } from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export interface IAccordion extends Omit<AccordionProps, 'children' | 'content'> {
  title: string;
  content: ReactNode;
  color?: "red" | "blue" | "orange" | "pink" | "yellow" | "white"
}

const Accordion = ({ title, content, expanded, color = "white", ...props }: IAccordion) => {
  // Convert color name to rgba for opacity
  const getColorWithOpacity = (colorName: string, opacity: number) => {
    const colorMap: Record<string, string> = {
      red: `rgba(255, 0, 0, ${opacity})`,
      blue: `rgba(0, 0, 255, ${opacity})`,
      orange: `rgba(255, 165, 0, ${opacity})`,
      pink: `rgba(255, 192, 203, ${opacity})`,
      yellow: `rgba(255, 255, 0, ${opacity})`,
      white: `rgba(255, 255, 255, ${opacity})`,
    };
    return colorMap[colorName] || colorName;
  };

  return (
    <MuiAccordion
      expanded={expanded}
      sx={{
        [`&.${accordionClasses.root}`]: {
          border: '1px solid #e0e0e0',
          borderRadius: expanded ? "10px" : '30px',
          overflow: 'hidden',
          boxShadow: expanded ? '0px 0px 10px 0px rgba(0, 0, 0, 0.1)' : 'none',
          marginY: '0px',
          backgroundColor: expanded ? "transparent" : getColorWithOpacity(color, 0.5), // 50% opacity
        },
        [`& .${accordionSummaryClasses.root}`]: {
          backgroundColor: expanded ? "transparent" : getColorWithOpacity(color, 0.5), // 50% opacity
          height: "60px",
          paddingLeft: '24px',
          paddingRight: '24px',
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
        backgroundColor: "transparent",
      }}>
        {content}
      </AccordionDetails>
    </MuiAccordion>
  );
};

export default Accordion;
