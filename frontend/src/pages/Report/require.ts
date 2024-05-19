import { GetClientDetailRequest, GetClientsRequest, GetClientsResponse, GetDetailsResponse } from "../../api/Reports";

export const getClientReport =  async (): Promise<GetClientsResponse> => {
  return await GetClientsRequest()
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.log('Failed: ', err);
    return err;
  })
};

export const getClientDetail = async (
  id: number,
  from: string,
  to: string
): Promise<GetDetailsResponse> => {
  return await GetClientDetailRequest(id, from, to)
  .then((res) => {
    return res;
  })
  .catch((err) => {
    console.log('Failed: ', err);
    return err;
  })
}