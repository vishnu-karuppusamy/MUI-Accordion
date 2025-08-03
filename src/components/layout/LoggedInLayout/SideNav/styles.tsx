import { Box, styled } from "@mui/material";

export const SideNavContainer = styled(Box)(({ theme }) => ({
  width: '72px',
  height: '100%',
  backgroundColor: '#0057B8',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0',
}));

export const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80px',
  minHeight: '80px',
  width: '100%',
  backgroundColor: '#FFFFFF',
});

export const NavContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: "space-between",
  gap: '16px',
  flex: 1,
  width: '100%',
});

export const NavTopContainer = styled(Box)({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: "flex-start",
  width: '100%',
});

export const NavBottomContainer = styled(Box)({
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: "flex-end",
  width: '100%',
});

export const NavOption = styled(Box)<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '60px',
  color: 'white',
  backgroundColor: active ? '#FF5E14' : 'transparent',
  cursor: active ? 'default' : 'pointer',
  '&:hover': {
    backgroundColor: active ? '#FF5E14' : 'rgba(0, 87, 184, 0.9)',
  },
}));

export const AvatarContainer = styled(Box)({
  width: '24px',
  height: '24px',
  borderRadius: '100%',
  overflow: 'hidden',
  cursor: 'pointer',
});

