let accessToken = "";

export const getAccessToken = (): string => {
  return accessToken;
};

export const setAccessToken = (s: string) => {
  accessToken = s;
};
