import { IPostUseCaseIn } from "./interfaces/post-use-case-in.interface";
import { IPostUseCaseOut } from "./interfaces/post-use-case-out.interface";

export class PostInteractor implements IPostUseCaseIn {
  constructor(private postUseCaseOut: IPostUseCaseOut) {}

  async getPostTitle(): Promise<string> {
    return await this.postUseCaseOut.getPostTitle();
  }
}
