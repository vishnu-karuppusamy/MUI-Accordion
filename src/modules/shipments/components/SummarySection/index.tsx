import React from 'react';
import { StyledTextarea, SummaryDetailContainer, SummaryDetailDivider, SummaryDetailLabelText, SummaryDetailsContainer, SummaryDetailValueText, SummarySectionContainer } from './styles';

const SHIPMENT_SUMMARY_DETAILS = [
  {
    id: 1,
    label: 'Total Cost',
    value: '$100.00',
  },
  {
    id: 2,
    label: 'Repacking/Consolidation',
    value: '$10.00',
  },
  {
    id: 3,
    label: 'Total Shipping Cost',
    value: '$510.00',
  },
];
export const SummarySection = () => {
  return (
    <SummarySectionContainer>
      <StyledTextarea placeholder="Add Details" rows={undefined} name="summary-detail" />
      <SummaryDetailsContainer direction="row" spacing="24px" alignItems="center">
        {SHIPMENT_SUMMARY_DETAILS.map((detail, index) => (
          <React.Fragment key={detail.id}>
            <SummaryDetailContainer key={detail.id}>
              <SummaryDetailLabelText>{detail.label}</SummaryDetailLabelText>
              <SummaryDetailValueText>{detail.value}</SummaryDetailValueText>
            </SummaryDetailContainer>
            {index !== SHIPMENT_SUMMARY_DETAILS.length - 1 && <SummaryDetailDivider key={`${detail.id}-divider`} />}
          </React.Fragment>
        ))}
      </SummaryDetailsContainer>
    </SummarySectionContainer>
  );
};
