"use client";

import "@/app/globals.css";

import { useWindowSize } from "@uidotdev/usehooks";
import { ScrollShadow } from "@nextui-org/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import styles from "@/app/pages.module.sass";

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}): React.ReactNode {
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
