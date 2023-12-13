/* eslint-disable no-return-assign */
/* eslint-disable no-unsafe-optional-chaining */
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import React, { FC, useState } from "react";
import { Button, Radio, RadioGroup, cn } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

import { PropsType } from "@/components/widgets/testsModal/model/interface";

import { useAppDispatch } from "@/providers/storeProvider";
import { educationActions } from "@/components/entities/education/model/slice/educationSlice";
import { validationQuizActions } from "@/components/entities/quiz/model/slice/validationQuizSlice";
import { getValidArr } from "@/components/entities/quiz/model/selectors/validQuizSelectors";
import { animationOpacity } from "@/components/shared/styles/motion/animation";
import styles from "./quizSingle.module.sass";

// interface FormInput {
// 	uuid: string;
// }

const QuizSingle: FC<PropsType> = (props) => {
	const [answerId, setAnswerId] = useState<string>("");

	const { questionToIterate, setQuestionNumber, questionNumber, quizData } =
		props;
	const {
		translation: { questions },
	} = quizData;

	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const validArr = useSelector(getValidArr);

	// const currentLanguage = i18n.language.split("-")[0];

	const tempSubmit = async () => {
		if (validArr && answerId) {
			const id = answerId.split("||");
			await dispatch(
				validationQuizActions.setValidArrStep([
					...validArr,
					{
						question_id: questionToIterate.id,
						choices: [
							{
								id: id[0],
							},
						],
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

	const btnLabel = () => {
		if (!answerId) return t("Test.Main.choose");
		if (questionNumber + 1 === questions?.length) return t("Test.Main.finish");

		return t("Test.Main.next");
	};

	const isArabicLanguage = Boolean(quizData.translation.lang === "ar");

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
					<RadioGroup
						color="default"
						onValueChange={(e: any) => {
							setAnswerId(e);
						}}
						className={styles.group}
					>
						{questionToIterate?.answers?.map((answer: any) => (
							<Radio
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
								value={`${answer.id}||${answer.text}`}
							>
								{answer.text}
							</Radio>
						))}
					</RadioGroup>
				</motion.div>

				<div className={styles.buttonWrapper}>
					<Button
						className="text-white w-[fit-content] h-[34px] text-base st bg-black border-2 border-black  hover:border-pinkColor border-solid  hover:bg-pinkColor transition"
						variant="bordered"
						isLoading={answerId.length === 0}
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

export default QuizSingle;
