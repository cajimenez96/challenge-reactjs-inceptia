export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  profile_image: string | null;
  groups: Group[];
  is_active: boolean;
  token: string;
}

export interface Group {
  id: number;
  name: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Client {
  id: number;
  name: string;
  users: User[];
}

export interface Bot {
  alias: string;
  id: number;
  name: string;
}

export interface Response {
  confidence: number;
  text: string;
  time: number;
}

export interface Case_Log {
  commitment: string;
  final_sip_code: number;
  got_promise: boolean;
  result_id: number;
  transcription: Response[];
  responses: Response[];
}

export interface Case_Result {
  contacted: boolean;
  is_final: boolean;
  name: string;
  result_id: number
}

export interface Extra_Metadata {
  dni: string;
  grupo: string;
  orden: string;
}

export interface GeneralError {
  message: string,
  status: number,
}
