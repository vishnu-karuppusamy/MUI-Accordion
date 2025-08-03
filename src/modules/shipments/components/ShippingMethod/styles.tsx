import { Box, Button, styled, Typography } from "@mui/material";

export const ShippingMethodContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
}));

export const DetailsContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: "flex-start",
  paddingBottom: '16px',
  paddingTop: '16px',
  borderRadius: '16px',
  border: '1px solid rgba(245, 245, 245, 1)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
}));

export const DetailTitleContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: "flex-start",
  padding: '8px 24px 4px 24px',
}));

export const DetailTitleText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-dubai-bold)',
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
}));

export const DetailContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: "flex-start",
  gap: '2px',
  padding: '12px 24px 12px 24px',
  borderBottom: '1px solid rgba(245, 245, 245, 1)',
  width: '100%',
}));

export const AddressContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: "center",
  padding: '0',
  width: '100%',
}));

export const DetailLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 450,
  fontSize: '16px',
  lineHeight: '150%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
}));

export const DetailValueText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 450,
  fontSize: '14px',
  lineHeight: '150%',
  letterSpacing: '0%',
  color: 'rgba(129, 129, 129, 1)',
}));
