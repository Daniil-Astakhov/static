import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lichi Academy",
	description: "Welcome to Lichi Academy",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en">
			<head>
				<meta name="google" content="notranslate" />
			</head>
			<body translate="no" className="h-[100dvh] max-h-[100dvh]">
				{children}
			</body>
		</html>
	);
}
