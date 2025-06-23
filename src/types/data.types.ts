// User-related types

export interface IApiResponse<T> {
  status?: number;
  success: boolean;
  message: string;
  data?: T;
}

export interface IApiError {
  status?: number;
  success: boolean;
  message: string | string[];
  stack?: string | null;
}

export interface IPagination {
  page: number;
  pageItems: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}
