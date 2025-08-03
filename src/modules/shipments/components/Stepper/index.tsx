import { Stack } from '@mui/material';
import React from 'react';
import { ActiveStepText, StepContainer, StepDivider, StepIconContainer, StepLabelText } from './styles';
import { CheckCircleIcon } from '../../../../assets/icons';

const STEPS = [
  {
    label: 'Create Shipment',
    step: 1,
    id: 1,
  },
  {
    label: 'Repacking & Consolidation',
    step: 2,
    id: 2,
  },
  {
    label: 'Shipment Details',
    step: 3,
    id: 3,
  },
  {
    label: 'Shipping Method',
    step: 4,
    id: 4,
  },
  {
    label: 'Summary & Confirmation',
    step: 5,
    id: 5,
  },
];

interface StepperProps {
  activeStepId: number;
  style?: React.CSSProperties;
  onStepClick?: (stepId: number) => void;
}

export const Stepper = ({ activeStepId, style, onStepClick }: StepperProps) => {
  return (
    <Stack
      direction="row"
      gap="18px"
      alignItems="center"
      minHeight="40px"
      style={{
        ...style,
        overflowX: 'scroll',

      }}
      className='scrollbar'
    >
      {STEPS.map((step, index) => (
        <React.Fragment key={step.id}>
          <StepContainer key={step.id} active={step.id === activeStepId} onClick={() => onStepClick?.(step.id)}>
            <StepIconContainer active={step.id === activeStepId}>
              {step.id < activeStepId ? <CheckCircleIcon /> : (
                <ActiveStepText>{step.step}</ActiveStepText>
              )}
            </StepIconContainer>
            <StepLabelText>{step.label}</StepLabelText>
          </StepContainer>
          {index !== STEPS.length - 1 && <StepDivider key={`${step.id}-divider`} />}
        </React.Fragment>
      ))}
    </Stack>
  );
};
