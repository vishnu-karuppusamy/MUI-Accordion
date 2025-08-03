import React from 'react';
import { ShipmentDetailContainer, ShipmentDetailDivider, ShipmentDetailIconContainer, ShipmentDetailLabelContainer, ShipmentDetailLabelText, ShipmentDetailsContainer, ShipmentDetailValueText } from './styles';
import { CompanyIcon, UnitIcon, UserRoundedIcon } from '../../../../assets/icons';

const SHIPMENT_DETAILS = [
  {
    id: 1,
    label: 'Customer name',
    value: 'Adedamola Olarele',
    icon: <UserRoundedIcon />
  },
  {
    id: 2,
    label: 'Business name',
    value: 'Dolf Technologies',
    icon: <CompanyIcon />
  },
  {
    id: 3,
    label: 'Unit no.',
    value: '1E',
    icon: <UnitIcon />
  },
];

interface ShipmentDetailsProps {
  style?: React.CSSProperties;
}

const ShipmentDetails = ({ style }: ShipmentDetailsProps) => {
  return (
    <ShipmentDetailsContainer direction="row" spacing="32px" alignItems="center" style={style}>
      {SHIPMENT_DETAILS.map((detail, index) => (
        <React.Fragment key={detail.id}>
          <ShipmentDetailContainer key={detail.id}>
            <ShipmentDetailIconContainer>
              {detail.icon}
            </ShipmentDetailIconContainer>
            <ShipmentDetailLabelContainer>
              <ShipmentDetailLabelText>{detail.label}</ShipmentDetailLabelText>
              <ShipmentDetailValueText>{detail.value}</ShipmentDetailValueText>
            </ShipmentDetailLabelContainer>
          </ShipmentDetailContainer>
          {index !== SHIPMENT_DETAILS.length - 1 && <ShipmentDetailDivider key={`${detail.id}-divider`} />}
        </React.Fragment>
      ))}
    </ShipmentDetailsContainer>
  )
};

export default ShipmentDetails;
