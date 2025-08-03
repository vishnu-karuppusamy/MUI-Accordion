import { Box, Stack, styled, TextareaAutosize, Typography } from "@mui/material";

export const SummarySectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '36px',
}));

export const StyledTextarea = styled('textarea')(({ theme }) => ({
  flex: 1,
  maxWidth: "529px",
  minHeight: "100%",
  maxHeight: "104px",
  height: "104px",
  padding: "0px 16px",
  borderRadius: "8px",
  border: "1px solid rgba(188, 188, 188, 1)",
  backgroundColor: "rgba(255, 255, 255, 1)",
  fontFamily: "var(--font-circular-std-book)",
  fontWeight: 450,
  fontSize: '16px',
  lineHeight: '150%',
  letterSpacing: '0%',
  color: 'rgba(129, 129, 129, 1)',
  resize: 'none',
  outline: 'none',
  overflow: 'hidden',
  '&::placeholder': {
    color: 'rgba(129, 129, 129, 0.6)',
  },
}));

export const SummaryDetailsContainer = styled(Stack)(({ theme }) => ({
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '24px',
  padding: '23px 36px',
  borderRadius: '8px',
  backgroundColor: 'rgba(206, 229, 255, 1)',
  border: '1px solid rgba(0, 87, 184, 1)',
  flex: 1,
}));

export const SummaryDetailContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '16px',
  margin: '0 !important',
}));

export const SummaryDetailLabelText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-dubai-medium)',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
  textAlign: 'center',
}));

export const SummaryDetailValueText = styled(Typography)(({ theme }) => ({
  fontFamily: 'var(--font-dubai-medium)',
  fontWeight: 500,
  fontSize: '24px',
  lineHeight: '100%',
  letterSpacing: '0%',
  color: 'rgba(33, 37, 41, 1)',
  textAlign: 'center',
}));

export const SummaryDetailDivider = styled(Box)(({ theme }) => ({
  width: '1px',
  height: '100%',
  minHeight: '58px',
  backgroundColor: 'rgba(0, 87, 184, 0.5)',
  margin: '0 !important',
}));
