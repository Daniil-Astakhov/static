/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { motion } from "framer-motion";

import { useRouter } from "next/navigation";
import { useSessionStorage } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { educationActions } from "@/components/entities/education/model/slice/educationSlice";

import PageModal from "@/components/features/Lectures/pageModal/ui/PageModal";
import { defaultModalData } from "@/components/shared/consts";
import { fetchAllCourses } from "@/components/entities/education/model/actions/allCourses";
import { EducationDataProps } from "@/components/shared/types/interface";
import { useAppSelector, useAppDispatch } from "@/providers/storeProvider";
import { LichiModal } from "@/components/shared/ui/lichiModal/ui/LichiModal";
import AllLectures from "@/components/features/Lectures/lectures/ui/AllLectures";
import { animationOpacity } from "@/components/shared/styles/motion/animation";
import { defaultDataFetch } from "@/components/shared/functions/functions";
import { fetchProfile } from "@/components/entities/welcome/model/actions/profile";
import { fetchMyAnalytic } from "@/components/entities/analytics/model/actions/myAnalytic";
import styles from "./lectures.module.sass";

const Lectures = (): JSX.Element => {
	const { t } = useTranslation();
	const [isLectureModalOpen, setIsLectureModalOpen] = useState<boolean>(false);
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [modalData, setModalData] = useState<{
		headerData: string;
		bodyData: string;
	}>(defaultModalData);
	const [materialData, setMaterialData] = useState<EducationDataProps>(
		{} as EducationDataProps
	);
	const [isTestModalOpen, setIsTestModalOpen] = useSessionStorage(
		"isTestModalOpen",
		false
	);
	const [materialUuid, setMaterialUuid] = useSessionStorage<any>(
		"materialUuid",
		""
	);

	const { job } = useAppSelector((state) => state.profile);

	const dispatch = useAppDispatch();

	useEffect(() => {
		defaultDataFetch(dispatch);
	}, []);

	useEffect(() => {
		if (job.id) dispatch(fetchAllCourses({ jobTitle: job.id, page: 1 }));
	}, [job]);

	const onChangeLectureModal = (e: boolean) => setIsLectureModalOpen(e);

	const onChangeModal = (e: boolean) => setIsModalOpen(e);

	const handleOpenLecture = () => setIsLectureModalOpen(true);

	const router = useRouter();
	useEffect(() => {
		dispatch(fetchProfile()).then((profileResponse: any) => {
			if (profileResponse.type === "fetchProfile/rejected") {
				localStorage.clear();
				sessionStorage.clear();
				router.push("/login");
			}
			dispatch(fetchMyAnalytic());
		});
	}, []);

	return (
		<motion.div
			{...animationOpacity}
			transition={{
				duration: 0.5,
				stiffness: 0,
				ease: "backInOut",
			}}
			className={styles.collapseWrapper}
		>
			<AllLectures
				setModalData={setModalData}
				setIsModalOpen={setIsModalOpen}
				setMaterialData={setMaterialData}
			/>

			<LichiModal
				open={isModalOpen}
				buttonLabel={t("Education.Main.read")}
				contents={{
					header: <div>{modalData.headerData}</div>,
					body: <div>{modalData.bodyData}</div>,
				}}
				callback={handleOpenLecture}
				onChange={onChangeModal}
			/>

			<PageModal
				open={isLectureModalOpen}
				buttonLabel={t("Education.Main.test")}
				id={materialData.id}
				closeCallback={() => dispatch(educationActions.resetLectureData())}
				setIsLectureModalOpen={setIsLectureModalOpen}
				setIsTestModalOpen={setIsTestModalOpen}
				setMaterialUuid={setMaterialUuid}
				onChange={onChangeLectureModal}
			/>
		</motion.div>
	);
};

export default Lectures;
