import { StateSchema } from "@/providers/storeProvider";

export const getFormFlag = (state: StateSchema): any =>
	state.welcome.nextStapFormFlag;

export const getError = (state: StateSchema): any => state.welcome.profileError;
