import ky from "ky";

const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiCall = async <T>(
  endpoint: string,
  method: string = "GET",
  body: any = null,
  headers: Record<string, string> = {}
): Promise<{ data: T; status: number }> => {
  try {
    const response = await api(endpoint, {
      method,
      json: body,
      headers,
    });
    const data: T = await response.json();
    return { data, status: response.status };
  } catch (error) {
    console.error("API Call Error:", error);
    throw error;
  }
};
