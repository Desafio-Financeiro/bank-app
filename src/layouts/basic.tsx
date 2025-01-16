import { WelcomeCard } from "@/modules/home/components";
import { Box } from "@mui/material";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

export function BasicLayout({ children }: DefaultLayoutProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <WelcomeCard />
      {children}
    </Box>
  );
}
