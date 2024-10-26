/*
 * Prefix /api for api server
 */
const prefix: string = "/api";

const Routes = {
  Post: {
    FetchAll: () => `${prefix}/posts`,
  },
};

export default Routes;
