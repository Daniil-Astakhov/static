/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { reload, rocket } from "@/components/shared/styles/icons";
import { EducationDataProps } from "@/components/shared/types/interface";
import {
	animationOpacity,
	animationRocket,
	animationRocketTransition,
} from "@/components/shared/styles/motion/animation";
import { useAppSelector } from "@/providers/storeProvider";

interface PropsType {
	setModalData: Dispatch<
		SetStateAction<{
			headerData: string;
			bodyData: string;
		}>
	>;
	setIsModalOpen: Dispatch<SetStateAction<boolean>>;
	setMaterialData: Dispatch<SetStateAction<EducationDataProps>>;
	// okCallback():
}

const AllLectures: FC<PropsType> = (props): JSX.Element | null => {
	const [selectedKeys, setSelectedKeys] = useState<any>([""]);

	const [hoveredItem, setHoveredItem] = useState<number | null>(null);
	const { setModalData, setIsModalOpen, setMaterialData } = props;
	const { educationArray } = useAppSelector((state) => state.education);

	const { t } = useTranslation();

	useEffect(() => {
		if (educationArray?.filter((item: any) => !item.isRead).length) {
			setSelectedKeys(["1"]);
		} else {
			setSelectedKeys(["2"]);
		}
	}, [educationArray]);

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
					title: "font-normal text-medium ml-[20px] font-[400]",
					trigger: "",
					indicator: "text-medium mr-[20px]",
					content: "text-small",
				}}
				disabledKeys={["3"]}
				selectedKeys={selectedKeys}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				onSelectionChange={setSelectedKeys}
			>
				<AccordionItem
					key="1"
					aria-label="Accordion 1"
					isDisabled={!educationArray?.filter((item) => !item.isRead).length}
					title={t("Education.Main.toComplete")}
				>
					{educationArray
						?.filter((item) => !item.isRead) // Фильтруем только те элементы, где isRead === true
						.sort((a, b) => a.position - b.position) // Сортируем по значению position
						.map((item: any, index: number) => (
							<div
								className="relative h-[70px] hover:bg-[#FEE7EF] cursor-pointer border-b last:border-b-0 pr-[20px] pl-[20px] transition-colors"
								onClick={() => {
									setModalData({
										headerData: item.title,
										bodyData: t("Education.Main.readLecture"),
									});
									setMaterialData(item);
									setIsModalOpen(true);
								}}
								key={index}
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								<div className="flex flex-row w-full h-full items-center justify-between">
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
							</div>
						))}
				</AccordionItem>

				<AccordionItem
					key="2"
					aria-label="Accordion 2"
					title={t("Education.Main.passed")}
					isDisabled={!educationArray?.filter((item) => item.isRead).length}
				>
					{educationArray
						?.filter((item) => item.isRead) // Фильтруем только те элементы, где isRead === true
						.sort((a, b) => a.position - b.position) // Сортируем по значению position
						.map((item: any, index: number) => (
							<div
								className="relative h-[70px] hover:bg-[#FEE7EF] cursor-pointer border-b last:border-b-0 pr-[20px] pl-[20px] transition-colors"
								onClick={() => {
									setModalData({
										headerData: item.title,
										bodyData: t("Education.Main.readLecture"),
									});
									setMaterialData(item);
									setIsModalOpen(true);
								}}
								key={index}
								onMouseEnter={() => setHoveredItem(index)}
								onMouseLeave={() => setHoveredItem(null)}
							>
								<div className="flex flex-row w-full h-full items-center justify-between">
									<span className="text-[15px]"> {item.title}</span>
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

export default AllLectures;
