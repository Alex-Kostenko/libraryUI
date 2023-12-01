import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Wrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "64px",
  backgroundColor: "#ebf4fc",
  padding: "0 24px",
  fontFamily: "Anek Latin, sans-serif",
});

export const HeadBlock = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DescriptionContainer = styled(Box)`
  display: flex;
  align-items: center;
`;

export const Description = styled(Box)`
  margin-right: 32px;
`;

export const DescriptionLink = styled(Box)`
  color: #2146af;
`;

export const Line = styled(Box)`
  width: 1px;
  height: 23px;
  margin: 0 24px;
  background: #dcdcde;
`;
