import http from "@/http";

export const getStatementRequest = async ({
  url,
  headers,
}: {
  url: string;
  headers: any;
}) => {
  const response = await http({
    method: "get",
    url,
    headers,
  });

  return response;
};
