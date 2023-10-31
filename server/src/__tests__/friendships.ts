import {
  clearDatabase,
  graphqlLogin,
  graphqlRegister,
} from "../test-utils/functions";

describe("friendships", () => {
  let accessToken = "";
  let userAccessToken = "";
  beforeEach(async () => {
    await clearDatabase();

    await graphqlRegister();
    const login = await graphqlLogin();
    accessToken = login.data?.login.accessToken;

    await graphqlRegister("user@user.pl");
    const userLogin = await graphqlLogin("user@user.pl");
    userAccessToken = userLogin.data?.login.accessToken;
  });

  describe("add friend", () => {});

  describe("accept friend", () => {});
});
