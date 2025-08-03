import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import { Stepper } from './components/Stepper';
import { ActionButtonsContainer, BackButton, CreateShipmentButton, SaveLaterButton, ShipmentsPageContainer } from './styles';
import Accordion, { IAccordion } from '../../components/Accordion';
import ShipmentDetails from './components/ShipmentDetails';
import { SummarySection } from './components/SummarySection';
import { LeftChevronIcon } from '../../assets/icons';
import { ShippingMethod } from './components/ShippingMethod';

const SHIPMENT_TRACKING_DATA = [
  {
    id: 1,
    title: 'Create Shipment',
    content: <Typography>You can create a shipment by clicking the "Create Shipment" button.</Typography>,
  },
  {
    id: 2,
    title: 'Repacking & Consolidation',
    content: <Typography>Repack and consolidate shipments.</Typography>,
  },
  {
    id: 3,
    title: 'Shipment Details',
    content: <Typography>Enter the details of your shipment.</Typography>,
  },
  {
    id: 4,
    title: 'Shipping Method',
    content: <ShippingMethod />,
  },
  {
    id: 5,
    title: 'Summary & Confirmation',
    content: <Typography>Review your shipment details and confirm your shipment.</Typography>,
  },
];

const ShipmentsPage = () => {
  const [selectedStepId, setSelectedStepId] = useState<number>(4);

  return (
    <ShipmentsPageContainer>
      <Stepper activeStepId={selectedStepId} style={{ marginBottom: '8px' }} />
      <ShipmentDetails />
      <Stack direction="column" rowGap={3}>
        {SHIPMENT_TRACKING_DATA.map((item) => (
          <Accordion
            key={item.id}
            title={item.title}
            content={item.content}
            expanded={selectedStepId === item.id}
            onChange={() => setSelectedStepId(item.id)}
          />
        ))}
      </Stack>
      <SummarySection />
      <ActionButtonsContainer>
        <BackButton onClick={() => setSelectedStepId(prev => prev > 1 ? prev - 1 : 1)} variant="contained" startIcon={<LeftChevronIcon color='rgba(33, 37, 41, 1)' style={{ marginRight: '-5px' }} />}>Back</BackButton>
        <SaveLaterButton variant="contained">Save for Later</SaveLaterButton>
        <CreateShipmentButton variant="outlined">Create Shipment</CreateShipmentButton>
      </ActionButtonsContainer>
    </ShipmentsPageContainer>
  );
};

export default ShipmentsPage;
