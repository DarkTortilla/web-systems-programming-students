export interface AuthToken{
    sign: (id: number) => string
    decode: (token: string) => number
}