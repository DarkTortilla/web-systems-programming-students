
import sequelizeConnection from '../src/conf/sequelize.connection.ts';
import { Server } from '../src/server.ts';

vi.mock('../src/server.ts');
vi.mock('../src/conf/sequelize.connection.ts', ()=>({
    default:{
        getSequelize:vi.fn(
            ()=>({
                define: vi.fn(()=>undefined)
            })
        ),
        connect:vi.fn().mockResolvedValue(undefined)
    }
}));

describe('testing app', ()=>{
    it('should start the server with port and routes', async ()=>{
        const spyDB=vi.spyOn(sequelizeConnection, 'connect')
        await import('../src/app.ts');
        expect(spyDB).toHaveBeenCalledTimes(1)
        expect(Server).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenCalledWith({
            port: Number(process.env.PORT),
            routes: expect.any(Function)
        });
        expect(Server.prototype.start).toHaveBeenCalledTimes(1);
    }); 
});