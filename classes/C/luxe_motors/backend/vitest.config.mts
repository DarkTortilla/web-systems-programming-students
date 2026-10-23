import {defineConfig} from 'vitest/config';
import dotenv from 'dotenv';
dotenv.config({path:'.env.test'});

export default defineConfig({
    test:{
        environment:'node',
        globals: true,
        coverage:{
            clean: false,
            reporter:['text', 'html', 'json'],
            reportsDirectory:'./coverage',
            reportOnFailure: true,
            
        } 
    }
})