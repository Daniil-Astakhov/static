/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/extensions */
import { useTranslation } from "react-i18next";
import JSConfetti from "js-confetti";
import Image from "next/image";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Avatar,
} from "@nextui-org/react";

import Link from "next/link";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { fetchLogout } from "@/components/entities/welcome/model/actions/logout";

import { useAppDispatch } from "@/providers/storeProvider";

const DesktopHeader = (): JSX.Element => {
	const canvasRef = useRef(null);
	const confettiRef = useRef(null);

	const pathname = usePathname();

	const dispatch = useAppDispatch();
	const { t } = useTranslation();

	const desktopHeaderElements = [
		{ name: `${t("Rating.lectures")}`, to: "/lectures" },
		{ name: `${t("Rating.tests")}`, to: "/tests" },
		{ name: `${t("Rating.rating")}`, to: "/rating" },
	];

	const handleClick = () => {
		// @ts-ignore
		confettiRef?.current.addConfetti({
			confettiRadius: 3,
			emojiSize: 5,
			confettiNumber: 30,
		});
	};

	useEffect(() => {
		// @ts-ignore
		confettiRef.current = new JSConfetti({ canvas: canvasRef.current });
	}, []);

	return (
		<Navbar
			classNames={{
				item: [
					"flex",
					"relative",
					"text-[20px]",
					"transition",
					"font-[500]",
					"hover:text-pinkColor",
					"data-[active=true]:text-pinkColor",
					"data-[active=true]:font-[500]",
				],
				wrapper: ["justify-center", "min-w-[100vw]", "pl-[40px]", "pr-[40px]"],
			}}
		>
			<NavbarContent>
				<NavbarBrand>
					<canvas
						className="absolute h-[300px] w-[200px] left-[0px] rotate-[120deg] top-[30px] "
						ref={canvasRef}
					/>

					<Image
						className="z-[999999]"
						src="/academy_mini_logo.svg"
						alt="a"
						width={43}
						height={43}
						onClick={() => {
							handleClick();
						}}
					/>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className=" flex w-[250px] gap-[32px] " justify="center">
				<NavbarItem
					isActive={pathname === desktopHeaderElements[0].to}
					className="flex justify-center items-center"
				>
					<Link href={desktopHeaderElements[0].to}>
						{desktopHeaderElements[0].name}
					</Link>
				</NavbarItem>
				<NavbarItem
					isActive={pathname === desktopHeaderElements[1].to}
					className="flex justify-center items-center"
				>
					<Link href={desktopHeaderElements[1].to}>
						{desktopHeaderElements[1].name}
					</Link>
				</NavbarItem>
				<NavbarItem
					isActive={pathname === desktopHeaderElements[2].to}
					className="flex justify-center items-center"
				>
					<Link href={desktopHeaderElements[2].to}>
						{desktopHeaderElements[2].name}
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent as="div" justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<div className="flex flex-row cursor-pointer min-w-[60px] justify-between">
							<div className="flex justify-center items-center mr-[10px]">
								<span>{window?.sessionStorage?.getItem("name") || ""}</span>
							</div>
							<Avatar
								// isBordered
								as="button"
								className="transition-transform"
								name={window?.sessionStorage?.getItem("name") || ""}
								size="sm"
								// TODO: Добавить битрикс url
								src=""
							/>
						</div>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="help_and_feedback" color="danger">
							<Link className="flex w-full h-full" href="/profile">
								{t("Main.profile")}
							</Link>
						</DropdownItem>

						<DropdownItem key="logout" color="danger">
							<Link
								className="flex w-full h-full"
								href="/login"
								onClick={() => {
									window.localStorage.removeItem("academy-bitrix-token");
									window.localStorage.removeItem("bearer");
									window.sessionStorage.clear();
									dispatch(fetchLogout());
								}}
							>
								{t("Main.logout")}
							</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</Navbar>
	);
};

export default DesktopHeader;
