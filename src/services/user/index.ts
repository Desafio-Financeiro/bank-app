import http from "@/http";

export const loginUserRequest = async (url: string) => {
  const response = await http({
    method: "get",
    url,
  });

  return response;
};
