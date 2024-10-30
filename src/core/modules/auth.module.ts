import type { IPost } from "#build/shared/domain/post";
import HttpFactory from "../repository/factory";
import Routes from "../routes/routes.client";

class AuthModule extends HttpFactory {
  private readonly RESOURCE = Routes.Auth;

  async signIn(): Promise<any> {
    return this.post(this.RESOURCE.SignIn(), {});
  }
}

export default AuthModule;
