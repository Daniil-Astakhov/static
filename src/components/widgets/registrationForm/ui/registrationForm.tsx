/* eslint-disable react/destructuring-assignment */
import { useEffect } from "react";
import { motion } from "framer-motion";
import FirstLayout from "@/components/features/Auth/Registration/registrationLayouts/firstRegistrationLayout/ui/FirstLayout";
import SecondLayout from "@/components/features/Auth/Registration/registrationLayouts/secondRegistrationLayout/ui/SecondLayout";
import { useAppDispatch } from "@/providers/storeProvider";
import { fetchLanguages } from "@/components/entities/welcome/model/actions/languages";

interface Open {
	open: any;
}

const RegistrationForm = (open: Open): JSX.Element => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchLanguages());
	}, []);

	const setFirstPosition = (num: any): any => {
		if (num === 1) return 0;
		if (num === 2) return 100;
		return 0;
	};

	return (
		<motion.div
			// eslint-disable-next-line react/destructuring-assignment
			animate={
				open.open ? { x: `-${setFirstPosition(open.open)}%` } : { x: "0%" }
			}
			transition={{
				duration: 0.7,
				stiffness: 0,
				ease: "backInOut",
			}}
			className="absolute flex flex-row justify-center items-center gap-[100%] w-full h-full "
		>
			<motion.div className="absolute w-full left-[0%]">
				<FirstLayout />
			</motion.div>
			<motion.div
				animate={
					open.open === 2
						? { opacity: 1, visibility: "visible" }
						: { opacity: 0, visibility: "hidden" }
				}
				transition={
					open.open !== 2
						? {
								delay: 0.7,
								duration: 0.7,
								stiffness: 0,
								ease: "backInOut",
						  }
						: {
								delay: 0,
								duration: 0.7,
								stiffness: 0,
								ease: "backInOut",
						  }
				}
				className="absolute w-full left-[100%]"
			>
				<SecondLayout />
			</motion.div>
		</motion.div>
	);
};

export default RegistrationForm;
