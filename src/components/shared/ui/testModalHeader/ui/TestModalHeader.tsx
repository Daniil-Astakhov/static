import {
	EducationQuizLayout,
	EducationQuizType,
} from "@/components/shared/types/interface";
import { Progress } from "@nextui-org/react";
import { t } from "i18next";
import { FC } from "react";

interface PropsType {
	quizData: EducationQuizType;
	quizLayout: EducationQuizLayout;
	questionsLength: number;
	questionNumber: number;
	tabletSize: boolean;
}

const TestModalHeader: FC<PropsType> = (props): JSX.Element => {
	const { quizData, quizLayout, questionNumber, questionsLength, tabletSize } =
		props;

	return (
		<div className="relative w-full">
			{/* <div className={styles.topHeaderBlock}> */}

			<div className="relative w-full flex justify-between">
				<p className={tabletSize ? "w-[83%] text-[10px]" : ""}>
					{quizData?.translation?.title}
				</p>

				<div
					className={
						tabletSize
							? "flex text-center absolute left-[90%] translate-x-[-50%]"
							: ""
					}
				>
					{quizLayout !== "Results" && (
						<p className={tabletSize ? " text-[11px] w-[max-content]" : ""}>
							{questionNumber + 1} {t("Test.Main.from")} {questionsLength}
						</p>
					)}
				</div>
			</div>
			{quizLayout !== "Results" && (
				<Progress
					aria-label="loading"
					size="sm"
					value={((questionNumber + 1) / questionsLength) * 100}
					color="default"
				/>
			)}
		</div>
	);
};

export default TestModalHeader;
