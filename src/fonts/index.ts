import localFont from "next/font/local";
import { Poppins } from "next/font/google";

export const googleSansFlex = localFont({
  src: [
    { path: "./GoogleSansFlex_9pt-Regular.ttf", weight: "400", style: "normal" },
    { path: "./GoogleSansFlex_9pt-Medium.ttf", weight: "500", style: "normal" },
    { path: "./GoogleSansFlex_9pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./GoogleSansFlex_9pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "./GoogleSansFlex_72pt-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./GoogleSansFlex_72pt-Bold.ttf", weight: "700", style: "normal" },
    { path: "./GoogleSansFlex_72pt-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./GoogleSansFlex_72pt-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-heading",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});