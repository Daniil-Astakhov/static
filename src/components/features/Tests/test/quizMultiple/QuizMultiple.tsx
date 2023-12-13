/* eslint-disable no-return-assign */
/* eslint-disable no-unsafe-optional-chaining */
import { useSelector } from "react-redux";
import React, { FC, useState } from "react";
import { motion } from "framer-motion";
import { Button, Checkbox, CheckboxGroup, cn } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import { PropsType } from "@/components/widgets/testsModal/model/interface";
import { useAppDispatch } from "@/providers/storeProvider";
import { educationActions } from "@/components/entities/education/model/slice/educationSlice";
import { getValidArr } from "@/components/entities/quiz/model/selectors/validQuizSelectors";
import { validationQuizActions } from "@/components/entities/quiz/model/slice/validationQuizSlice";
import { animationOpacity } from "@/components/shared/styles/motion/animation";
import styles from "./quizMultiple.module.sass";

const QuizMultiple: FC<PropsType> = (props) => {
	const [selectedId, setSelectedId] = useState<any>([]);

	const { questionToIterate, setQuestionNumber, questionNumber, quizData } =
		props;

	const {
		translation: { questions },
	} = quizData;
	const validArr = useSelector(getValidArr);
	// const { currentEducationLanguage } = useAppSelector(
	// 	(state) => state.education
	// );
	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	// const currentLanguage = i18n.language.split("-")[0];

	const tempSubmit = async () => {
		if (validArr && selectedId.length) {
			await dispatch(
				validationQuizActions.setValidArrStep([
					...validArr,
					{
						question_id: questionToIterate.id,
						choices: selectedId.map((itemId: any) => ({
							id: itemId,
						})),
					},
				])
			);
		}
		if (questionNumber !== questions?.length - 1)
			setQuestionNumber((prev) => (prev += 1));
		if (questionNumber === questions?.length - 1) {
			await dispatch(educationActions.setQuizLayoutAsDiagram());
		}
	};

	const isArabicLanguage = Boolean(quizData.translation.lang === "ar");

	const btnLabel = () => {
		if (!selectedId.length) return t("Test.Main.choose");
		if (questionNumber + 1 === questions?.length) return t("Test.Main.finish");

		return t("Test.Main.next");
	};

	return (
		<form className={styles.form}>
			<div className={styles.groupWrapper}>
				<motion.div
					{...animationOpacity}
					transition={{
						duration: 0.5,
						stiffness: 0,
						ease: "backInOut",
					}}
					className="flex flex-row maxPc:flex-col w-full"
				>
					<motion.div
						{...animationOpacity}
						transition={{
							duration: 0.5,
							stiffness: 0,
							ease: "backInOut",
						}}
						className="maxPc:max-w-[100%] max-w-[50%] min-w-[50%] flex justify-center items-center minPc:pr-[10px]"
					>
						<p
							className={`${styles.title} ${
								isArabicLanguage && styles.titleArabic
							}`}
						>
							{questionToIterate?.title}
						</p>
					</motion.div>
					<CheckboxGroup
						value={selectedId}
						onValueChange={setSelectedId}
						className={styles.group}
					>
						{questionToIterate?.answers?.map((answer: any) => (
							<Checkbox
								color="default"
								classNames={{
									base: cn(
										"inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
										"flex-row max-w-[100%] justify-start cursor-pointer rounded-lg gap-4 min-h-[50px]  border-2 border-transparent shadow-[0px_0px_1px_0px_rgba(0,0,0,0.20),_0px_2px_30px_0px_rgba(0,_0,_0,_0.06),_0px_0px_15px_0px_rgba(0,_0,_0,_0.03)]",
										"data-[selected=true]:border-[#F31260]"
									),
									label: "text-[13px] minPc:text-[16px]",
								}}
								className={`${styles.choice} ${
									isArabicLanguage && styles.choiceArabic
								}`}
								key={answer.id}
								value={answer.id}
							>
								{answer.text}
							</Checkbox>
						))}
					</CheckboxGroup>
				</motion.div>

				<div className={styles.buttonWrapper}>
					<Button
						className="text-white w-[fit-content] h-[34px] text-base  bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition "
						variant="bordered"
						isLoading={selectedId.length === 0}
						type="submit"
						spinner={<span className="hidden" />}
						onClick={tempSubmit}
					>
						{btnLabel()}
					</Button>
				</div>
			</div>
		</form>
	);
};

export default QuizMultiple;
