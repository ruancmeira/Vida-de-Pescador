import { Request } from 'express';
import Post from "../entity/Post";
import { BaseController } from "./BaseController";

export class PostController extends BaseController<Post> {

    constructor() {
        super(Post);
    }

    async save(request: Request) {
        let _post = <Post>request.body;
        super.isRequired(_post.description, 'Informe a descrição do seu post!');
        return super.save(_post);
    }

}