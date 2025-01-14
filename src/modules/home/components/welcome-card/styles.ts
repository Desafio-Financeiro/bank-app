import { SxProps, Theme } from "@mui/material";
import { theme } from "fiap-financeiro-ds";

const styles: Record<string, SxProps<Theme>> = {
  pixelsTop: {
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
  },
  pixelsBottom: {
    position: "absolute",
    zIndex: 0,
    left: 0,
    bottom: -7,
  },
  saveMoney: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    bottom: 18,
  },
  today: {
    display: "flex",
    flexDirection: "column",
    gap: "48px",
    width: "50%",
    marginTop: theme.spacing("large"),
    zIndex: 1,
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: "100%",
      textAlign: "center",
    },
  },
  balance: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing("medium"),
    width: "50%",
    marginTop: theme.spacing("large"),
    zIndex: 1,
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: "fit-content",
    },
  },
  balanceText: {
    display: "flex",
    gap: theme.spacing("medium"),
    fontSize: "31px",
    fontWeight: theme.typography.body1.fontWeight,
  },
  divider: {
    borderBottomWidth: "2px !important",
    width: "60%",
    borderColor: `${theme.palette.common.white} !important`,
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      width: "100%",
    },
  },
  skeleton: {
    fontSize: "31px",
    width: "140px",
  },
  card: {
    height: "420px",
    position: "relative",
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      height: "570px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  content: {
    [`@media (max-width: ${theme.breakpoints.values.sm}px)`]: {
      flexDirection: "column",
    },
  },
};

export default styles;
