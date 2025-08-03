'use client';

import React, { useState } from 'react';
import Accordion, { IAccordion } from '../components/Accordion';
import { Box, Button, Stack, Typography } from '@mui/material';

const SHIPMENT_TRACKING_DATA = [
  {
    id: 1,
    title: 'Create Shipment',
    content: 'You can create a shipment by clicking the "Create Shipment" button.',
    color: 'red',
  },
  {
    id: 2,
    title: 'Repacking & Consolidation',
    content: 'Repack and consolidate shipments.',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Shipment Details',
    content: 'Enter the details of your shipment.',
    color: 'orange',
  },
  {
    id: 4,
    title: 'Shipping Method',
    content: 'Choose the shipping method for your shipment.',
    color: 'pink',
  },
  {
    id: 5,
    title: 'Summary & Confirmation',
    content: 'Review your shipment details and confirm your shipment.',
    color: 'yellow',
  },
];
const Home = () => {
  const [expandedAccordionIds, setExpandedAccordionIds] = useState<number[]>([]);

  const handleAccordionChange = (id: number) => {
    setExpandedAccordionIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleAllAccordions = () => {
    setExpandedAccordionIds(prev => prev.length === SHIPMENT_TRACKING_DATA.length ? [] : SHIPMENT_TRACKING_DATA.map((item) => item.id));
  };

  return (
    <Stack direction="column" rowGap={2} maxWidth="600px" mx="auto">
      <Box display="flex" justifyContent="space-between" alignItems="center" flexDirection="row" rowGap={4}>
        <Typography variant="h4">Track your shipments</Typography>
        <Button variant="text" color="primary" onClick={toggleAllAccordions}>
          {expandedAccordionIds.length === SHIPMENT_TRACKING_DATA.length ? 'Collapse All' : 'Expand All'}
        </Button>
      </Box>
      {SHIPMENT_TRACKING_DATA.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.content}
          expanded={expandedAccordionIds.includes(item.id)}
          onChange={() => handleAccordionChange(item.id)}
          color={item.color as IAccordion['color']}
        />
      ))}
    </Stack>
  );
};

export default Home;
