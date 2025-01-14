import http from "@/http";

export const createUserRequest = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      username: string;
      email: string;
      password: string;
    };
  },
) => {
  const response = await http({
    method: "post",
    url,
    data: arg,
  });

  return response;
};

export const loginUserRequest = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      email: string;
      password: string;
    };
  },
) => {
  const response = await http({
    method: "post",
    url,
    data: arg,
  });

  return response;
};
