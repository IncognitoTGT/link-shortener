import type { Metadata } from "next";
import "./globals.css";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

export const metadata: Metadata = {
	title: "Link shortener",
	description: "A simple link shortener for quickly shortening links",
};
const sans = localFont({
	src: "../fonts/zed-sans-regular.ttf",
	variable: "--font-sans",
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${sans.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					themes={["light", "dark"]}
					enableSystem
					disableTransitionOnChange
				>
					{children}
					<div className="fixed bottom-2 right-2">
						<ModeToggle />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
