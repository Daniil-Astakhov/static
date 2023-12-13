"use client";

import "@/app/globals.css";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import Header from "@/components/widgets/header/Header";
import Footer from "@/components/widgets/footer/Footer";
import styles from "@/app/pages.module.sass";

export default function LecturesLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const size = useWindowSize();

	useEffect(() => {
		if (!window.localStorage.getItem("bearer")?.length) {
			redirect("/login");
		}
	}, []);

	const isSizeNull = size?.width === null;

	return (
		<section className={styles.section}>
			{!isSizeNull && <Header />}
			{!isSizeNull && <main className={styles.main}>{children}</main>}
			{!isSizeNull && <Footer />}
		</section>
	);
}
