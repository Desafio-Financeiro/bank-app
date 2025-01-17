import http from "@/http";

export const getAccountRequest = async ({
  url,
  headers,
}: {
  url: string;
  headers: object;
}) => {
  const response = await http({
    method: "get",
    url,
    headers,
  });

  return response;
};
