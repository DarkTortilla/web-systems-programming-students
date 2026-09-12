import type { AuthToken } from "./authTokens.ts";

export class JoseImpl implements AuthToken{
    sign(id:number){
        return ''
    };
    decode(token: string){
        return 5;
    };

}