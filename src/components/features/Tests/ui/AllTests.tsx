/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
	animationOpacity,
	animationRocket,
	animationRocketTransition,
} from "@/components/shared/styles/motion/animation";
import { reload, rocket } from "@/components/shared/styles/icons";

import { useAppSelector } from "@/providers/storeProvider";

interface PropsType {
	setModalData: Dispatch<
		SetStateAction<{
			headerData: string;
			bodyData: string;
		}>
	>;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	// setMaterialQuizId: Dispatch<SetStateAction<any>>;
	setMaterialUuid: Dispatch<SetStateAction<any>>;
}

const AllTests: FC<PropsType> = (props): JSX.Element | null => {
	const { setModalData, setIsModalOpen, setMaterialUuid } = props;
	const { t } = useTranslation();
	const [selectedKeys, setSelectedKeys] = useState<any>([""]);

	const { educationArray } = useAppSelector((state) => state.education);

	useEffect(() => {
		if (
			educationArray?.filter((item: any) => item.isRead && !item.quiz.passed)
				.length
		) {
			setSelectedKeys(["1"]);
		} else {
			setSelectedKeys(["2"]);
		}
	}, [educationArray]);

	const [hoveredItem, setHoveredItem] = useState<number | null>(null);

	return (
		<motion.div
			{...animationOpacity}
			transition={{
				duration: 1.2,
				stiffness: 0,
				ease: "backInOut",
			}}
			className="w-full max-w-[800px]"
		>
			<Accordion
				className="mb-[20px] px-0"
				variant="shadow"
				itemClasses={{
					base: "py-0 w-full p-0",
					title: "font-normal text-medium ml-[20px]",
					trigger: "",
					indicator: "text-medium mr-[20px]",
					content: "text-small",
				}}
				// disabledKeys={["3"]}
				selectedKeys={selectedKeys}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				onSelectionChange={setSelectedKeys}
			>
				<AccordionItem
					key="1"
					aria-label="Accordion 1"
					title={t("Education.Main.toComplete")}
					isDisabled={
						!educationArray?.filter((item) => item.isRead && !item.quiz.passed)
							.length
					}
				>
					{educationArray
						?.filter((item) => item.isRead && !item.quiz.passed)
						.sort((a, b) => a.position - b.position)
						.map((item: any, index: number) => (
							<motion.div
								className="relative h-[70px] hover:bg-[#FEE7EF] cursor-pointer border-b last:border-b-0 pr-[20px] pl-[20px] transition-colors"
								onClick={() => {
									setModalData({
										headerData: item.title,
										bodyData: t("Education.Main.readLecture"),
									});
									setMaterialUuid(item.quiz.id);
									setIsModalOpen(true);
								}}
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
								key={index}
							>
								<div className="flex flex-row w-full h-full items-center justify-between ">
									<span className="text-[15px]">{item.title}</span>
									<motion.span
										initial={{
											y: 0,
											x: 0,
										}}
										animate={
											hoveredItem === index
												? animationRocket
												: {
														y: [0],
														x: [0],
												  }
										}
										transition={animationRocketTransition}
									>
										{rocket({
											color: hoveredItem === index ? "#F31260" : "black",
										})}
									</motion.span>
								</div>
							</motion.div>
						))}
				</AccordionItem>
				<AccordionItem
					key="2"
					aria-label="Accordion 2"
					title={t("Education.Main.passed")}
					isDisabled={
						!educationArray?.filter((item) => item.isRead && item.quiz.passed)
							.length
					}
				>
					{educationArray
						?.filter((item) => item.isRead && item.quiz.passed)
						.sort((a, b) => a.position - b.position)
						.map((item: any, index: number) => (
							<div
								className="relative h-[70px] hover:bg-[#FEE7EF] cursor-pointer border-b last:border-b-0 pr-[20px] pl-[20px] transition-colors"
								onClick={() => {
									setModalData({
										headerData: item.title,
										bodyData: t("Education.Main.readLecture"),
									});
									setMaterialUuid(item.quiz.id);
									setIsModalOpen(true);
								}}
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
								key={index}
							>
								<div className="flex flex-row w-full h-full items-center justify-between pr-[10px]">
									<span className="text-[15px]">{item.title}</span>
									<motion.span
										initial={{
											rotate: 0,
										}}
										animate={
											hoveredItem === index
												? { rotate: 90 }
												: {
														rotate: 0,
												  }
										}
									>
										{reload({
											color: hoveredItem === index ? "#F31260" : "black",
										})}
									</motion.span>
								</div>
							</div>
						))}
				</AccordionItem>
			</Accordion>
		</motion.div>
	);
};

export default AllTests;
