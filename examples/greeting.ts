import { ServerRequest } from "https://deno.land/std@v0.35.0/http/server.ts";

export default (req: ServerRequest) => {
    return `Greetings people!!!\n${req.url}`;
};