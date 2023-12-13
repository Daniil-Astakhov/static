/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-no-useless-fragment */

"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { StoreProvider } from "@/providers/storeProvider";
import { animationOpacity } from "@/components/shared/styles/motion/animation";
import Footer from "@/components/widgets/footer/Footer";
import Header from "@/components/widgets/header/Header";
import GlobalProvider from "../provider";

export default function ChildRootLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const pathname = usePathname();

	const visible = pathname === "/registration" || pathname === "/login";

	useEffect(() => {
		if (window)
			// @ts-ignore
			document.documentElement.lang =
				window?.localStorage.getItem("i18nextLng") || "ru";
	}, []);

	return (
		<GlobalProvider>
			<StoreProvider>
				<motion.section
					{...animationOpacity}
					transition={{
						duration: 0.5,
						stiffness: 0,
						ease: "backInOut",
					}}
					className="flex flex-col h-[100vh] max-h-[100vh] maxPc:h-[100dvh] maxPc:max-h-[100dvh]"
				>
					{visible || (
						<motion.div
							className="relative"
							initial={{
								top: -100,
							}}
							animate={{
								top: 0,
							}}
							transition={{
								duration: 0.8,
								stiffness: 0,
								ease: "backInOut",
							}}
						>
							<Header />
						</motion.div>
					)}
					{children}
					{visible || (
						<motion.div
							className="relative"
							initial={{
								bottom: -100,
							}}
							animate={{
								bottom: 0,
							}}
							transition={{
								duration: 0.8,
								stiffness: 0,
								ease: "backInOut",
							}}
						>
							<Footer />
						</motion.div>
					)}
				</motion.section>
			</StoreProvider>
		</GlobalProvider>
	);
}
