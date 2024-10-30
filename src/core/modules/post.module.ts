import type { IPost } from "#build/shared/domain/post";
import type { PostModuleInterface } from "../datasource/post.interface";
import HttpFactory from "../repository/factory";
import Routes from "../routes/routes.client";

class PostModule extends HttpFactory implements PostModuleInterface {
  private readonly RESOURCE = Routes.Post;

  async fetchAll(): Promise<IPost[]> {
    return this.get<IPost[]>(this.RESOURCE.FetchAll());
  }
}

export default PostModule;
