import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import clientsReducer from "./slices/clientSlice";
// import filtersReducer from "./slices/filtersSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		// clients: clientsReducer,
		// filters: filtersReducer
	}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;