/*
 * Prefix /api for api server
 */
const prefix: string = "/api";

const Routes = {
  Post: {
    FetchAll: () => `${prefix}/posts`,
  },
  Auth: {
    SignIn: () => `${prefix}/auth/signin`,
  },
};

export default Routes;
