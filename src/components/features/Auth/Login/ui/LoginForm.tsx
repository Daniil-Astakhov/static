/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";

// import LoginPage from "@/pages/login/ui/login";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/navigation";
import {
	Button,
	Card,
	CardBody,
	CircularProgress,
	Select,
	SelectItem,
} from "@nextui-org/react";

import { useTranslation } from "react-i18next";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Image from "next/image";
import { fetchSignIn } from "@/components/entities/welcome/model/actions/signIn";
import { fetchProfile } from "@/components/entities/welcome/model/actions/profile";
import { useAppDispatch, useAppSelector } from "@/providers/storeProvider";
import LichiInput from "@/components/shared/ui/lichiInput/ui/LichiInput";
import { EyeSlashFilledIcon } from "@/components/shared/ui/eyeSlashFilledIcon/ui/EyeSlashFilledIcon";
import { fetchMyAnalytic } from "@/components/entities/analytics/model/actions/myAnalytic";
import { EyeFilledIcon } from "@/components/shared/ui/eyeFilledIcon/ui/EyeFilledIcon";
import { animationOpacity } from "@/components/shared/styles/motion/animation";
import { i18n } from "@/components/shared/lib";
import { fetchLanguages } from "@/components/entities/welcome/model/actions/languages";
import styles from "./login.module.sass";

interface FormInput {
	login: string;
	password: string;
}

export const LoginAppPage = (): JSX.Element => {
	const [errorLogin, setErrorLogin] = useState<any>(null);

	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const { isLoading } = useAppSelector((state) => state.welcome);
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInput>();

	const onSubmit: SubmitHandler<FormInput> = (data) => {
		dispatch(fetchSignIn({ login: data.login, password: data.password })).then(
			(signInResponse: any) => {
				if (signInResponse.meta.requestStatus === "fulfilled") {
					dispatch(fetchProfile()).then((profileResponse: any) => {
						if (profileResponse.meta.requestStatus === "fulfilled") {
							dispatch(fetchMyAnalytic());
							router.push("/profile");
						}
					});
				} else {
					setErrorLogin(signInResponse.payload.data.message);
				}
			}
		);
	};

	useEffect(() => {
		dispatch(fetchProfile()).then((profileResponse: any) => {
			if (profileResponse.meta.requestStatus === "fulfilled")
				dispatch(fetchMyAnalytic());
		});
	}, []);

	const [isVisible, setIsVisible] = useState(false);
	const toggleVisibility = () => setIsVisible(!isVisible);

	const userLang = localStorage.getItem("i18nextLng") || "ru";
	const [languagesArr, setLanguagesArr] = useState([]);
	const { languages } = useAppSelector((state) => state.welcome);

	useEffect(() => {
		dispatch(fetchLanguages());
	}, []);

	useEffect(() => {
		if (languages)
			setLanguagesArr(
				// @ts-ignore
				languages.map((lang: any) => {
					return {
						label: lang.name,
						value: lang.id,
						code: lang.code,
					};
				})
			);
	}, [languages]);

	// useEffect(() => {
	// 	if (languages) {
	// 		setLanguagesArr(
	// 			// Create a copy of the languages array before sorting
	// 			[...languages]
	// 				.sort((a, b) => a.name.localeCompare(b.name))
	// 				.map((lang) => ({
	// 					label: lang.name,
	// 					value: lang.id,
	// 					code: lang.code,
	// 				}))
	// 		);
	// 	}
	// }, [languages]);

	const [selectLangLabel, setSelectLangLabel] = useState<string>("");
	const [selectLangValue, setSelectLangValue] = useState<number | undefined>(
		// @ts-ignore
		languagesArr[0]?.value
	);

	useEffect(() => {
		if (languagesArr) {
			const [defaultLang] = languagesArr?.filter(
				(obj: any) => obj.code === userLang
			);
			if (defaultLang) {
				// @ts-ignore
				setSelectLangLabel(defaultLang.label);
				// @ts-ignore
				setSelectLangValue(defaultLang.value);
			}
		}
	}, [languagesArr, languages]);

	return (
		<Card
			classNames={{
				base: "md:w-[610px] md:h-[524px] h-full w-full rounded-none md:rounded-[16px]",
			}}
		>
			<CardBody>
				<motion.div
					{...animationOpacity}
					transition={{ duration: 0.5 }}
					className="flex flex-col justify-center items-center w-full h-full"
				>
					<motion.div {...animationOpacity} transition={{ duration: 0.5 }}>
						<Image
							className={styles.logo}
							src="/academy_main_logo.png"
							alt="main_logo"
							width={90}
							height={120}
							style={{ objectFit: "cover" }}
						/>
					</motion.div>

					<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name="login"
							control={control}
							rules={{ required: true }}
							aria-invalid={errors.login ? "true" : "false"}
							render={({ field }) => (
								<div
									className="flex w-full h-[64px] "
									onClick={() => setErrorLogin(null)}
								>
									{" "}
									<LichiInput
										{...field}
										label={t("Login.Main.phone")}
										placeholder="Email"
										type="email"
										value={field.value || ""}
									/>
								</div>
							)}
						/>
						<Controller
							name="password"
							control={control}
							rules={{ required: true }}
							aria-invalid={errors.password ? "true" : "false"}
							render={({ field }) => (
								<div className="flex flex-col w-full relative h-[64px]">
									<LichiInput
										{...field}
										label={t("Login.Main.password")}
										placeholder={t("Register.Placeholder.password")}
										endContent={
											<button
												className="absolute right-0 focus:outline-none"
												type="button"
												onClick={toggleVisibility}
											>
												{isVisible ? (
													<EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
												) : (
													<EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
												)}
											</button>
										}
										type={isVisible ? "text" : "password"}
										value={field.value || ""}
									/>
									<motion.div
										{...animationOpacity}
										transition={{ duration: 2 }}
										className="absolute bottom-[-30px] flex justify-center items-center w-full"
									>
										<motion.span
											initial={{
												opacity: 0,
											}}
											animate={{
												opacity: errorLogin ? 1 : 0,
											}}
											transition={{ duration: 0.5, ease: "easeInOut" }}
											className="text-pinkColor"
										>
											{errorLogin}
										</motion.span>
									</motion.div>
								</div>
							)}
						/>
						<div className={styles.loginWrapper}>
							<Button
								className="text-white w-full text-base  bg-black border-2 border-black h-full hover:border-pinkColor border-solid  hover:bg-pinkColor transition"
								variant="bordered"
								type="submit"
								isLoading={isLoading}
								spinner={
									<CircularProgress
										className="scale-[70%]"
										aria-label="Loading..."
									/>
								}
							>
								{t("Login.Main.signIn")}
							</Button>
						</div>
					</form>
					<div>
						<Button
							className="text-[#71717A] text-base bg-none hover:bg-[#fff0] hover:text-[#52525B] active:text-[#52525B] disabled:text-disabledColor mt-[5px]"
							variant="light"
							type="button"
							onClick={() => router.push("/registration")}
						>
							{t("Table.Columns.registration")}
						</Button>
					</div>
				</motion.div>
				<div className="absolute opacity-[0.8] right-[20px] top-[10px] w-[150px] h-[34px]">
					<Select
						classNames={{
							label: "text-[12px]",
						}}
						variant="underlined"
						defaultSelectedKeys={[
							`${window?.localStorage?.getItem("key") || "0"}`,
						]}
						label={t("Language.Other.choose")}
						className="max-w-xs"
						onSelectionChange={(key: any) => {
							window?.localStorage?.setItem(
								"key",
								new Set(key).values().next().value
							);
							// @ts-ignore
							setSelectLangLabel(
								// @ts-ignore
								languagesArr[new Set(key).values().next().value - 1]?.label
							);
							// @ts-ignore
							setSelectLangValue(
								// @ts-ignore
								languagesArr[new Set(key).values().next().value - 1]?.value
							);
							// @ts-ignore
							i18n.changeLanguage(
								// @ts-ignore
								languagesArr[new Set(key).values().next().value - 1]?.code
							);
							location.reload();
						}}
					>
						{languagesArr.map((item: any) => {
							return (
								// @ts-ignore
								<SelectItem key={item.value} value={item.value}>
									{item.label}
								</SelectItem>
							);
						})}
					</Select>
				</div>
			</CardBody>
		</Card>
	);
};
