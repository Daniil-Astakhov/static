"use client";

import "@/app/globals.css";

import { ScrollShadow } from "@nextui-org/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import styles from "@/app/pages.module.sass";

export default function TestsLayout({
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
		<ScrollShadow size={5} className="w-[100%] h-[100%]">
			{!isSizeNull && <main className={styles.main}>{children}</main>}
		</ScrollShadow>
	);
}
