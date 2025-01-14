import { SxProps, Theme } from "@mui/material";
import { theme } from "fiap-financeiro-ds";

const styles: Record<string, SxProps<Theme>> = {
  content: {
    display: "flex",
    gap: theme.spacing("large"),
    justifyContent: "center",
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      flexDirection: "column",
      "> div": {
        width: "100%",
      },
    },
  },
  cardsBox: {
    flex: 1,
    minWidth: "400px",
    maxWidth: "690px",
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing("large"),
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      maxWidth: "unset",
      minWidth: "unset",
    },
  },
};

export default styles;
