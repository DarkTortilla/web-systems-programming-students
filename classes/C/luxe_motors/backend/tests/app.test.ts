
import { Server } from '../src/server.ts';

vi.mock('../src/server.ts');

describe('testing app', ()=>{
    it('should start the server with port and routes',async ()=>{
        await import('../src/app.ts');
        expect(Server).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenCalledWith({
            port: Number(process.env.PORT),
            routes: expect.any(Function)
        });
        expect(Server.prototype.start).toHaveBeenCalledTimes(1);
    }); 
});