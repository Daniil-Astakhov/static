/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { Avatar, Button, ScrollShadow } from "@nextui-org/react";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { animationOpacity } from "@/components/shared/styles/motion/animation";
import ContactsDataCard from "@/components/features/Profile/contactsDataCard/ui/contactsDataCard";
import PersonalDataCard from "@/components/features/Profile/personalDataCard/ui/personalDataCard";
import { fetchLogout } from "@/components/entities/welcome/model/actions/logout";
import { defaultDataFetch } from "@/components/shared/functions/functions";

import { useAppDispatch } from "@/providers/storeProvider";
import { fetchProfile } from "@/components/entities/welcome/model/actions/profile";
import RegistrationDrawer from "@/components/features/Auth/Registration/registrationDrawer/ui/RegistrationDrawer";
import { fetchMyAnalytic } from "@/components/entities/analytics/model/actions/myAnalytic";
import styles from "./profileDesktop.module.sass";

const ProfileDesktop = (): JSX.Element => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	useEffect(() => {
		defaultDataFetch(dispatch);
	}, []);

	useEffect(() => {
		dispatch(fetchProfile()).then((profileResponse: any) => {
			if (profileResponse.type === "fetchProfile/rejected") {
				localStorage.clear();
				sessionStorage.clear();
				router.push("/login");
			}
			dispatch(fetchMyAnalytic());
		});
		// redirect("/login");
	}, []);

	return (
		<ScrollShadow size={5} className="flex justify-center w-[100%] h-[100%]">
			<div className={styles.mainData}>
				<motion.div
					{...animationOpacity}
					transition={{
						duration: 0.5,
						stiffness: 0,
						ease: "backInOut",
					}}
					className={styles.profile}
				>
					<div className="flex flex-col justify-center items-center">
						<Avatar
							// TODO: Ебануть аватарку с битрикса
							src=""
							name={window?.sessionStorage?.getItem("name") || ""}
							className="w-[150px] h-[150px] text-large"
						/>

						<Button
							variant="light"
							className="uppercase mt-[10px] font-[600]"
							onClick={() => {
								window.localStorage.removeItem("academy-bitrix-token");
								window.localStorage.removeItem("bearer");
								window.sessionStorage.clear();
								dispatch(fetchLogout());
								router.push("/login");
							}}
						>
							{t("Profile.Main.exit")}
						</Button>
					</div>

					<div className="mt-[50px] flex flex-col justify-center items-center gap-3">
						<p className="text-center">{t("Profile.Main.chooseLanguage")}</p>
						<RegistrationDrawer />
					</div>
				</motion.div>
				<motion.div
					{...animationOpacity}
					transition={{
						duration: 0.5,
						stiffness: 0,
						ease: "backInOut",
					}}
					className="w-full h-full "
				>
					<PersonalDataCard />
					<ContactsDataCard />
				</motion.div>
			</div>
		</ScrollShadow>
	);
};

export default ProfileDesktop;
