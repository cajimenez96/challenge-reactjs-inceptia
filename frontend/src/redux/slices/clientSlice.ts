import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Case, GetClientDetailRequest, GetClientsRequest, GetClientsResponse, GetDetailsResponse } from "../../api/Reports";

interface IGetClientsResponse {
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
    console.log('getClientReport', response);
    
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
    console.log('getClientDetailReport: ', response);
    
    return response;
  } catch (error) {
    return error;
  }
});

const clientSlice = createSlice({
	name: "clients",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getClientReport.fulfilled, (state, action) => {
			state.isLoading = false;
      state.clients = action.payload;
		});
		builder.addCase(getClientReport.pending, (state, action) => {
			state.isLoading = true;
		});
    builder.addCase(getClientDetailReport.fulfilled, (state, action) => {
			state.isLoading = false;
      state.clientDetail = action.payload.results;
		});
		builder.addCase(getClientDetailReport.pending, (state, action) => {
			state.isLoading = true;
		});
	}
});

export const clientsSelector = (state: RootState) => state.clients.clients;
export const clientDetailSelector = (state: RootState) => state.clients.clientDetail;
export const isLoadingSelector = (state: RootState) => state.clients.isLoading;

export default clientSlice.reducer;