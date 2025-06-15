import { fetchPostTitle } from "./client";
import { IPostUseCaseOut } from "./interfaces/post-use-case-out.interface";

export class ApiGateway implements IPostUseCaseOut {
  constructor(private readonly endpoint: string) {}

  async getPostTitle(): Promise<string> {
    return await fetchPostTitle(this.endpoint);
  }
}
