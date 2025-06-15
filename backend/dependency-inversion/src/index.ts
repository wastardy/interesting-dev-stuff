import { PostInteractor } from "./business-logic";
import { ApiGateway } from "./api-gateway";

new PostInteractor(
  new ApiGateway("https://my-json-server.typicode.com/typicode/demo/posts")
)
  .getPostTitle()
  .then((title) => {
    console.log(`title = ${title}`);
  });
