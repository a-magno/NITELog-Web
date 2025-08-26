export interface GenericResponse {
  code: number;
  status: string;
  api_version: string;
}

export interface UsersListResponse {
  code: number;
  status: string;
  api_version: string;
  users_list: User[]
}

export interface MeetingsListResponse {
  code: number;
  status: string;
  api_version: string;
  meetings_list: Meeting[]
}

export interface GenericError {
  message?: string;
  errors?: Record<string, string[]>; // For field-specific errors
  // Add any other error fields your API might return
}

/* Register Interfaces */

/* export interface AuthResponse {
  token: string;
  user: User;
  message?: string; // Optional success message
} */

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

/* Objects Interfaces */

export interface User {
  id: string;
  name: string;
  email: string;
  registration: string;
}

export interface Meeting {
  id: string;
  date: string,
  created_at: string;
  deleted_at: string;
  meeting_code: string;
}