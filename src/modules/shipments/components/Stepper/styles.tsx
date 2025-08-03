import { Box, styled, Typography } from "@mui/material";

export const StepContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: "flex-start",
  gap: '12px',
  flexShrink: 0,
}));

export const StepIconContainer = styled(Box)<{ active?: boolean }>(({ active }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  color: 'white',
  backgroundColor: active ? 'rgba(0, 87, 184, 1)' : 'rgba(47, 191, 113, 1)',
  cursor: active ? 'default' : 'pointer',
  borderRadius: '100%',
}));

export const ActiveStepText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-circular-std-book)',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '150%',
  letterSpacing: '0%',
}));

export const StepLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-dubai-regular)',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
}));

export const StepDivider = styled(Box)(({ theme }) => ({
  height: '1px',
  flex: 1,
  borderRadius: '20px',
  backgroundColor: 'rgba(0, 87, 184, 1)',
}));
