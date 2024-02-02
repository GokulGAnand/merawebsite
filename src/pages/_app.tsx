import FontWrapper from "@/components/wrappers/FontWrapper";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { theme } from "@/configs/theme/mui";
import { Toaster } from "react-hot-toast";

type ExtendedAppProps = AppProps & {
  Component: NextPage;
};

type GuardProps = {
  authGuard: boolean;
  guestGuard: boolean;
  children: ReactNode;
};

// const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
//   if (guestGuard) {
//     return <GuestGuard fallback={<Spinner />}>{children}</GuestGuard>
//   } else if (!guestGuard && !authGuard) {
//     return <>{children}</>
//   } else {
//     return <AuthGuard fallback={<Spinner />}>{children}</AuthGuard>
//   }
// }

export default function App({ Component, pageProps }: AppProps) {
  //  const authGuard = Component.authGuard ?? true
  // const guestGuard = Component.guestGuard ?? false

  return (
    <ThemeProvider theme={theme}>
      <FontWrapper>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        <Toaster />
      </FontWrapper>
    </ThemeProvider>
  );
}
