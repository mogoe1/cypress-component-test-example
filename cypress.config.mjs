import { defineConfig } from 'cypress';
import express from 'express';

export default defineConfig({
    component: {
        devServer: async (cypressConfig) => {
            const app = express();

            app.get('/*', (req, res) => {
                console.log('Express got request for: ', req.url);
                res.send('Hello from express');
            });

            const server = await app.listen(3000);

            return {
                port: 3000,
                close: () => server.close(),
            };
        },
        supportFile: false,
    }
})