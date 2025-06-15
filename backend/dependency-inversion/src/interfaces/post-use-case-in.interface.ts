export interface IPostUseCaseIn {
  getPostTitle(url: string): Promise<string>;
}
