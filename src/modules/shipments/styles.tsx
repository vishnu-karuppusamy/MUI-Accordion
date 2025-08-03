import { Box, Button, styled, Typography } from "@mui/material";

export const ShipmentsPageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '24px',
}));

export const ActionButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '16px',
  paddingBottom: '50px',
}));

export const BackButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 42.5px',
  width: "144px",
  borderRadius: '100px',
  backgroundColor: 'rgba(255, 94, 20, 0.14)',
  color: 'rgba(33, 37, 41, 1)',
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textTransform: 'capitalize',
  boxShadow: 'none',
}));

export const SaveLaterButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '18px 0px',
  width: "144px",
  borderRadius: '100px',
  backgroundColor: 'rgba(0, 87, 184, 1)',
  color: 'rgba(255, 255, 255, 1)',
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textTransform: 'capitalize',
  boxShadow: 'none',
}));

export const CreateShipmentButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '18px 0px',
  width: "160px",
  borderRadius: '100px',
  backgroundColor: 'rgba(0, 87, 184, 0.1)',
  color: 'rgba(0, 87, 184, 1)',
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  textTransform: 'capitalize',
  boxShadow: 'none',
  border: '1px solid rgba(0, 87, 184, 1)',
}));
