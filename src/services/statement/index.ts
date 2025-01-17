import http from "@/http";

export const getStatementRequest = async ({
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
