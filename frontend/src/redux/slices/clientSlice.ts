import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Case, GetClientDetailRequest, GetClientsRequest, GetClientsResponse, GetDetailsResponse } from "../../api/Reports";

interface IGetClientsResponse {
  idClient: number | null;
  clients: GetClientsResponse;
  clientDetail: Case[];
  isLoading: boolean;
  hasError: boolean;
}

interface IGetDetailRequest {
  id: number,
  from: string,
  to: string
}

const initialState: IGetClientsResponse = {
  idClient: null,
  clients: [],
  clientDetail: [],
  isLoading: false,
  hasError: false
}

export const getClientReport = createAsyncThunk<
GetClientsResponse,
undefined
>('Client/getAll', async () => {
  try {
    const response = await GetClientsRequest();
    return response;
  } catch (error) {
    return error;
  }
});

export const getClientDetailReport = createAsyncThunk<
GetDetailsResponse,
IGetDetailRequest
>('Client/getDetail', async (request) => {
  const {id, from, to} = request;
  try {
    const response = await GetClientDetailRequest(id, from, to);
    return response;
  } catch (error) {
    return error;
  }
});

const clientSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {
    setClientId: (state, action: PayloadAction<number>) => {
      state.idClient = action.payload
    }
  },
	extraReducers: (builder) => {
		builder.addCase(getClientReport.fulfilled, (state, action) => {
			state.isLoading = false;
      state.clients = action.payload;
		});
		builder.addCase(getClientReport.pending, (state) => {
			state.isLoading = true;
		});
    builder.addCase(getClientDetailReport.fulfilled, (state, action) => {
			state.isLoading = false;
      state.clientDetail = action.payload.results;
		});
		builder.addCase(getClientDetailReport.pending, (state) => {
			state.isLoading = true;
		});
	}
});

export const { setClientId } = clientSlice.actions

export const clientsSelector = (state: RootState) => state.clients.clients;
export const clientDetailSelector = (state: RootState) => state.clients.clientDetail;
export const isLoadingSelector = (state: RootState) => state.clients.isLoading;
export const clientIdSelector = (state: RootState) => state.clients.idClient;

export default clientSlice.reducer;