/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react";

import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";

import { useAppDispatch, useAppSelector } from "@/providers/storeProvider";
import { fetchLanguages } from "@/components/entities/welcome/model/actions/languages";
import { fetchJobTitles } from "@/components/entities/profile/model/actions/jobTitles";
import { fetchCountries } from "@/components/entities/welcome/model/actions/countries";
import { i18n } from "@/components/shared/lib";
import styles from "./registrationDrawer.module.sass";

const RegistrationDrawer = (): JSX.Element => {
	const userLang = localStorage.getItem("i18nextLng") || "ru";
	const [languagesArr, setLanguagesArr] = useState([]);
	const dispatch = useAppDispatch();
	const { languages } = useAppSelector((state) => state.welcome);

	useEffect(() => {
		dispatch(fetchLanguages());
		dispatch(fetchJobTitles());
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
		<div className="h-full w-full flex justify-center items-center flex-col">
			<input
				className="h-0"
				type="text"
				onChange={() => {}}
				name="lang"
				value={selectLangValue || ""}
			/>
			<Dropdown
				classNames={
					{
						// trigger: styles.trigger,
					}
				}
				backdrop="blur"
				radius="lg"
			>
				<DropdownTrigger>
					<Button
						className="text-white w-full text-base  bg-black border-2 border-black h-full hover:border-pinkColor border-solid  hover:bg-pinkColor transition"
						variant="bordered"
					>
						{selectLangLabel || "Русский"}
					</Button>
				</DropdownTrigger>
				<DropdownMenu
					variant="flat"
					aria-label="lang"
					onAction={(key: any) => {
						// @ts-ignore
						window?.localStorage?.setItem("key", key);
						// @ts-ignore
						setSelectLangLabel(languagesArr[key - 1]?.label);
						// @ts-ignore
						setSelectLangValue(languagesArr[key - 1]?.value);
						// @ts-ignore
						i18n.changeLanguage(languagesArr[key - 1]?.code);
						location.reload();
					}}
				>
					{languagesArr.map((item: any) => (
						<DropdownItem color="danger" key={item.value}>
							{item.label}
						</DropdownItem>
					))}
				</DropdownMenu>
			</Dropdown>
		</div>
	);
};

export default RegistrationDrawer;
