import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "@/components/shared/api";
import { LanguagesType } from "@/components/shared/types/interface";

export const fetchLanguages = createAsyncThunk(
	"welcome/fetchLanguages",
	async (): Promise<Array<LanguagesType>> => {
		const response = await $api.get("/languages", {
			headers: {
				BXAPP: (window as any)?.BXAPP?.USER_DATA,
				"academy-bitrix-token": localStorage.getItem("academy-bitrix-token"),
				Authorization: `Bearer ${localStorage.getItem("bearer")}`,
			},
		});

		return response?.data.data;
	}
);
