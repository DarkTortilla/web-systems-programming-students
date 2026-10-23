import { Server } from '../src/server.ts';
import sequelizeConnection from '../src/conf/sequelize.connection.ts';

vitest.mock('../src/server.ts');
vitest.mock('../src/conf/sequelize.connection.ts', 
  () => ({
  default: {
    connect: vi.fn().mockResolvedValue(undefined),
    getSequelize: vi.fn(() => ({
      define: vi.fn(() => ({})),
    })),
  },
})
)
describe('app.ts config testing', ()=>{  
    it('should start sever',async ()=>{
        
        const dbSpy = vi.spyOn(sequelizeConnection, 'connect');
        await import("../src/app.ts");
        
        expect(dbSpy).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenCalledTimes(1);
        expect(Server).toHaveBeenCalledWith({
            port:Number(process.env.PORT),
            routes: expect.any(Function)
        });
        expect(Server.prototype.start).toHaveBeenCalledTimes(1);
    });
});

// npm i vitest supertest
// npm audit fix --force