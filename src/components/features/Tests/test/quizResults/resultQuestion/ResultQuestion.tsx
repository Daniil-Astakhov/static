/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable camelcase */
import uuid from "react-uuid";
import React, { FC } from "react";
import { CheckboxGroup, RadioGroup } from "@nextui-org/react";
import MultipleResultOptions from "@/components/features/Tests/test/quizResults/resultQuestion/resultOptions/MultipleResultsOptions";
import {
	greenSmile,
	orangeSmile,
	redSmile,
} from "@/components/shared/styles/icons";
import { EducationQuizResultsQuestions } from "@/components/shared/types/interface";
import SelectResultsOptions from "./resultOptions/SelectResultsOptions";
import SingleResultOptions from "./resultOptions/SingleResultOptions";
import styles from "../quizResults.module.sass";
// import { useSelector } from "react-redux";
// import { getResult } from "@/components/entities/education/model/selectors/educationSelectors";

const ResultQuestion: FC<{
	question: EducationQuizResultsQuestions;
	index: number;
}> = ({ question, index }) => {
	const { question_title, result, options, answers, choices, type } = question;

	const resultHandler: Record<string, JSX.Element> = {
		correct: greenSmile(),
		partly_correct: orangeSmile(),
		incorrect: redSmile(),
	};

	return (
		<div className={styles.question} key={uuid()}>
			<div className="flex justify-center mb-[20px]" key={uuid()}>
				{resultHandler[result]}
			</div>

			<div className={styles.titleWrapper}>
				<p className={styles.titleNumber}>{`${index + 1})`}</p>
				<p className={styles.title}>{question_title}</p>
			</div>

			{type === "Single" && (
				<RadioGroup
					color="default"
					isDisabled
					defaultValue={`${choices[0]?.id}`}
					key={uuid()}
				>
					{answers.map((answer: any) => (
						<SingleResultOptions key={uuid()} option={answer} />
					))}
				</RadioGroup>
			)}

			{type === "Multiple" && (
				<CheckboxGroup
					color="default"
					isDisabled
					defaultValue={choices.map((choice) => `${choice.id}`)}
					key={uuid()}
				>
					{answers.map((answer: any) => (
						<MultipleResultOptions key={uuid()} option={answer} />
					))}
				</CheckboxGroup>
			)}

			{type === "Select" && (
				<>
					{options.map((answer: any, answerIndex: number) => {
						return (
							<>
								<h3 key={uuid()} className={styles.optionHeading}>
									{answers?.[answerIndex].text}
								</h3>
								<RadioGroup
									color="default"
									key={uuid()}
									isDisabled
									defaultValue={`${answer.id}`}
								>
									{options.map((option) => (
										<SelectResultsOptions key={uuid()} option={option} />
									))}
								</RadioGroup>
							</>
						);
					})}
				</>
			)}
		</div>
	);
};

export default ResultQuestion;
