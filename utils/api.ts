interface ApiCallOptions {
  method?: string;
  body?: any;
  headers?: Record<string, string>;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

export const apiCall = async <T>(
  endpoint: string,
  method: string = "GET",
  body: any = null,
  headers: Record<string, string> = {}
): Promise<ApiResponse<T>> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const options: ApiCallOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }
  const data: T = await response.json();
  return { data, status: response.status };
};
