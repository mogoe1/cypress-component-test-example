import { defineConfig } from 'cypress';
import express from 'express';

export default defineConfig({
    component: {
        devServer: async (cypressConfig) => {
            const app = express();

            app.get('/*.js', (req, res) => {
                console.log('Express got request for js file: ', req.url);
                res
                    .contentType('text/javascript')
                    .send('it("should run",() => expect(true).to.be.true)')
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