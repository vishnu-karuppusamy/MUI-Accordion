import { Box, Stack, styled, Typography } from "@mui/material";

export const ShipmentDetailsContainer = styled(Stack)(({ theme }) => ({
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '32px',
  padding: '24px 24px 28px 24px',
  borderRadius: '12px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const ShipmentDetailContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '12px',
  margin: '0px !important',
}));

export const ShipmentDetailIconContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '44px',
  height: '44px',
  borderRadius: '100%',
  border: '1.5px solid rgba(0, 87, 184, 1)',
  color: "rgba(0, 87, 184, 1)",
}));

export const ShipmentDetailLabelContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '8px',
}));

export const ShipmentDetailLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-dubai-regular)',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(74, 74, 73, 1)',
}));

export const ShipmentDetailValueText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-dubai-bold)',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
}));

export const ShipmentDetailDivider = styled(Box)(({ theme }) => ({
  width: '1px',
  height: '100%',
  minHeight: '48px',
  backgroundColor: 'rgba(229, 229, 229, 1)',
  margin: '0px !important',
}));


