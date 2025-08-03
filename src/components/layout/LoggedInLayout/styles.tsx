import { Box, styled, Typography } from "@mui/material";

export const LoggedInLayoutContainer = styled(Box)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  backgroundColor: '#F3F6F9',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '0',
  overflow: 'hidden',
  maxWidth: '1440px',
  margin: '0 auto',
  boxShadow: '-8px 0px 20px 0px rgba(0, 0, 0, 0.25), 8px 0px 20px 0px rgba(0, 0, 0, 0.25)',
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  overflow: 'hidden',
}));

export const HeaderContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  height: '79px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  overflow: 'hidden',
  padding: '0 24px',
  borderBottom: '1px solid rgba(229, 229, 229, 1)',
}));

export const BreadcrumbContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10px',
}));

export const BreadcrumbText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 450,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
}));

export const HeaderRightContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '24px',
}));

export const HeaderRightIconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '100%',
  border: '1px solid rgba(229, 229, 229, 1)',
  cursor: 'pointer',
  position: 'relative',
}));

export const NotificationIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '8px',
  height: '8px',
  borderRadius: '100%',
  backgroundColor: 'rgba(0, 87, 184, 1)',
  top: '6px',
  right: '11px',
}));

export const MainContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  overflow: 'auto',
  padding: '24px',
}));





