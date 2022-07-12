import { defineConfig } from 'cypress';
import express from 'express';

export default defineConfig({
    component: {
        devServer: async (cypressConfig) => {
            const app = express();

            app.get('/*.html', (req, res) => {
                console.log('Express got request for html file: ', req.url);
                res.send('<html>Hi from express!</html>');
            });

            app.get('/*.js', (req, res) => {
                console.log('Express got request for js file: ', req.url);
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