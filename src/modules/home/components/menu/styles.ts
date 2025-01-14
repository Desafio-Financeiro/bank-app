import { SxProps, Theme } from "@mui/material";
import { theme } from "fiap-financeiro-ds";

export const styles: Record<string, SxProps<Theme>> = {
  menu: {
    display: "flex",
    flexDirection: "column",
    minHeight: "calc(100vh - 190px)",
    [`@media (max-width: ${theme.breakpoints.values.md}px)`]: {
      flexDirection: "row",
      justifyContent: "space-around",
      minHeight: "fit-content",
      "> li": {
        flex: 1,
        border: "none",
      },
    },
  },
};
