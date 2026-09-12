import type { AuthToken } from "./authTokens.ts";

export class JWTImpl implements AuthToken{
    sign(id:number){
        return ''
    };
    decode(token: string){
        return 5;
    };

}