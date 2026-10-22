import { Server } from '../src/server.ts';

vitest.mock('../src/server.ts');

describe('App testing', ()=>{
    it('should call the server function',async ()=>{
        await import('../src/app.ts');
        expect(Server).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenLastCalledWith({
            port: Number(process.env.PORT),
            routes: expect.any(Function)
        });
        expect(Server.prototype.start).toHaveBeenCalledTimes(1);
    })
})