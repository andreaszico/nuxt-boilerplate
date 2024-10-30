import type { IPost } from "#build/shared/domain/post";

export interface PostModuleInterface {
  fetchAll(): Promise<IPost[]>;
}
