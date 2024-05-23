import Axios from "../lib/axios";
import { Bot, Client, Case_Log, Case_Result, Extra_Metadata } from "./type";

export type GetClientsResponse = Client[];

export interface Case {
  bot: Bot;
  case_duration: string;
  case_log: Case_Log;
  case_result: Case_Result;
  case_uuid: string;
  code: string | null;
  extra_metadata: Extra_Metadata;
  first_name: string;
  id: number;
  is_active: boolean;
  is_complete: boolean;
  last_name: string;
  last_updated: string;
  phone: number;
  recording: string;
  status: string;
}

export interface GetDetailsResponse {
  count: number;
  previus: string | null;
  next: string | null;
  results: Case[];
}

export const GetClientsRequest = async (): Promise<GetClientsResponse[]> => {
  const response = await Axios.get('/clients/');
  return response.data;
};

export const GetClientDetailRequest = async (
  id: number,
  from: string,
  to: string
): Promise<GetDetailsResponse> => {
  const response = await Axios.get(`/inbound-case/?bot=${id}&local_updated__date__gte=${from}&local_updated__date__lte=${to}`);
  return response.data;
};
