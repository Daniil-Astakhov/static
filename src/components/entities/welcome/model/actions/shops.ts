import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "@/components/shared/api";

export const fetchShops = createAsyncThunk(
	"welcome/fetchShops",
	async ({ city_id }: { city_id: number }): Promise<Array<any>> => {
		const response = await $api.get("/cities/shops", {
			headers: {
				BXAPP: (window as any)?.BXAPP?.USER_DATA,
				"academy-bitrix-token": localStorage.getItem("academy-bitrix-token"),
				Authorization: `Bearer ${localStorage.getItem("bearer")}`,
			},
			params: { city_id },
		});

		return response?.data.data;
	}
);
