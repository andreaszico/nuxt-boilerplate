import type { IPost } from "#build/shared/domain/post";
import HttpFactory from "../repository/factory";
import Routes from "../routes/routes.client";

class PostModule extends HttpFactory {
  private readonly RESOURCE = Routes.Post;
  private accessToken: string = "";

  async fetchAll() {
    return this.get<IPost[]>(this.RESOURCE.FetchAll());
  }

  setAccessToken(accessToken: string) {
    this.accessToken = accessToken;
  }
}

export default PostModule;
