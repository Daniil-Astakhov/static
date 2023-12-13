"use client";

import "@/app/globals.css";

import Image from "next/image";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useWindowSize } from "@uidotdev/usehooks";
import { useEffect } from "react";
import styles from "./auth.module.sass";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	const router = useRouter();
	const size = useWindowSize();
	const pathName = usePathname();

	const registrationPathName = "/registration";

	useEffect(() => {
		if (window.localStorage.getItem("bearer")?.length) {
			redirect("/profile");
		}
	}, []);

	const isSizeNull = size?.width === null;
	return (
		<>
			{pathName === registrationPathName && (
				<header className="absolute w-full">
					<button type="button" onClick={() => router.back()}>
						<Image
							src="/icons/arrow.svg"
							alt="<"
							width="24"
							height="24"
							className={styles.arrow}
						/>
					</button>
				</header>
			)}
			<section
				className={`${styles.section} ${
					pathName === registrationPathName && styles.registrationSection
				}`}
			>
				{!isSizeNull && <main className={styles.main}>{children}</main>}
			</section>
		</>
	);
}
