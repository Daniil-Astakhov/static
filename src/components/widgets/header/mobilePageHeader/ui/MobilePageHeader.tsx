import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import {
	getLastname,
	getName,
} from "@/components/entities/profile/model/selectors/profileSelectors";
import { cup } from "@/components/shared/styles/icons";
import { getRating } from "@/components/entities/analytics/model/selectors/analyticsSelectors";
import { useSessionStorage } from "@uidotdev/usehooks";
import { handlePercentColor } from "@/components/shared/consts";
import styles from "./mobilePageHeader.module.sass";

const MobilePageHeader = (): JSX.Element => {
	const [count, setCount] = useSessionStorage("reting", 0);

	const [color, setColor] = useState<any>({ color: "#171717" });
	const { t } = useTranslation();
	const router = useRouter();
	const pathname = usePathname();

	const name = useSelector(getName);
	const lastname = useSelector(getLastname);
	const rating = useSelector(getRating);

	useEffect(() => {
		if (rating) setCount(rating);
		if (rating) setColor(handlePercentColor(rating));
	}, [rating]);

	const routingTabNames: Record<string, string> = {
		"/profile": `${t("Main.profile")}`,
		"/lectures": `${t("Main.lectures")}`,
		"/tests": `${t("Main.tests")}`,
		"/rating": `${t("Main.rating")}`,
	};

	return (
		<header className={styles.header}>
			<div
				className={styles.profileIcon}
				onClick={() => router.push("/profile")}
			>
				<p className={styles.initials}>
					{name[0]}
					{lastname[0]}
				</p>
			</div>
			<p className={styles.tabName}>{routingTabNames[pathname]}</p>
			<div className={styles.ratingWrapper}>
				{cup({ color: `${color}` })}
				<p className={styles.rating}>{count}%</p>
			</div>
		</header>
	);
};

export default MobilePageHeader;
