import React from 'react';
import Image from 'next/image';
import WakaCargoIcon from '../../../../assets/images/waka-cargo.png';
import { AddressContainer, DetailContainer, DetailLabelText, DetailsContainer, DetailTitleContainer, DetailTitleText, DetailValueText, ShippingMethodContainer } from './styles';

export const ShippingMethod = () => {
  return (
    <ShippingMethodContainer>
      <DetailsContainer>
        <DetailTitleContainer>
          <DetailTitleText>Consignee Details</DetailTitleText>
        </DetailTitleContainer>
        <DetailContainer>
          <DetailLabelText>Full Name</DetailLabelText>
          <DetailValueText>John Carter</DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>Email Address</DetailLabelText>
          <DetailValueText>john@wakabuy.com</DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>Phone Number</DetailLabelText>
          <DetailValueText>+1 01539 702257</DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>Address Line 1</DetailLabelText>
          <DetailValueText>20 Cooper Square</DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>Country</DetailLabelText>
          <DetailValueText>USA</DetailValueText>
        </DetailContainer>
        <AddressContainer>
          <DetailContainer style={{ flex: 1, border: 'none' }}>
            <DetailLabelText>Country</DetailLabelText>
            <DetailValueText>USA</DetailValueText>
          </DetailContainer>
          <DetailContainer style={{ flex: 1, border: 'none' }}>
            <DetailLabelText>Country</DetailLabelText>
            <DetailValueText>USA</DetailValueText>
          </DetailContainer>
          <DetailContainer style={{ flex: 1, border: 'none' }}>
            <DetailLabelText>Country</DetailLabelText>
            <DetailValueText>USA</DetailValueText>
          </DetailContainer>
        </AddressContainer>
      </DetailsContainer>
      <DetailsContainer>
        <DetailTitleContainer>
          <DetailTitleText>Shipping Details</DetailTitleText>
        </DetailTitleContainer>
        <DetailContainer>
          <DetailLabelText>Method Name</DetailLabelText>
          <DetailValueText>Air Freight</DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>Shipping Date</DetailLabelText>
          <DetailValueText>JUL-25-2025</DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>Carrier</DetailLabelText>
          <DetailValueText>
            <Image src={WakaCargoIcon} alt="Waka Cargo" width={172} height={23} />
          </DetailValueText>
        </DetailContainer>
        <DetailContainer>
          <DetailLabelText>ETA</DetailLabelText>
          <DetailValueText>JUL-03-2025</DetailValueText>
        </DetailContainer>
        <DetailContainer style={{ border: 'none' }}>
          <DetailLabelText>Price</DetailLabelText>
          <DetailValueText>$20.00</DetailValueText>
        </DetailContainer>
      </DetailsContainer>
    </ShippingMethodContainer>
  )
};
