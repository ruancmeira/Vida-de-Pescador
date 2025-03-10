import { UserController } from "./controller/UserController";
import { PostController } from "./controller/PostController";

export const Routes = [
    { method: "get", route: "/users", controller: UserController, action: "all" }, 
    { method: "get", route: "/users/:id", controller: UserController, action: "one" }, 
    { method: "post", route: "/users", controller: UserController, action: "save" }, 
    { method: "post", route: "/auth", controller: UserController, action: "auth" }, 
    { method: "delete", route: "/users/:id", controller: UserController, action: "remove"},

    { method: "get", route: "/posts", controller: PostController, action: "all" }, 
    { method: "get", route: "/posts/:id", controller: PostController, action: "one" }, 
    { method: "post", route: "/posts", controller: PostController, action: "save" }, 
    { method: "delete", route: "/posts/:id", controller: PostController, action: "remove"}
];