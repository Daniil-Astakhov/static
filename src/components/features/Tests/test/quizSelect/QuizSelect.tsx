/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-return-assign */
/* eslint-disable no-unsafe-optional-chaining */

import React, { FC } from "react";

import TabsQuestions from "@/components/features/Tests/test/quizSelect/tabsQuestions/TabsQuestions";
import { PropsType } from "@/components/widgets/testsModal/model/interface";

import styles from "./quizSelect.module.sass";

const QuizSelect: FC<PropsType> = (props) => {
	const { questionToIterate, setQuestionNumber, questionNumber, quizData } =
		props;
	const { translation } = quizData;
	const { questions } = translation;

	const options = questionToIterate?.answers?.map((correct: any, key: any) => {
		return {
			value: `${correct.id}||`,
			label: questionToIterate?.options?.[key].text,
		};
	});
	const answers = questionToIterate?.answers?.map((correct: any) => {
		return {
			value: `${correct.question_id}||`,
			label: correct.text,
		};
	});

	const isArabicLanguage = Boolean(quizData.translation.lang === "ar");

	return (
		<form className={styles.form}>
			<TabsQuestions
				styles={styles}
				questionToIterate={questionToIterate}
				isArabicLanguage={isArabicLanguage}
				questionNumber={questionNumber}
				questions={questions}
				// @ts-ignore
				options={options}
				answers={answers}
				setQuestionNumber={setQuestionNumber}
			/>
		</form>
	);
};

export default QuizSelect;
