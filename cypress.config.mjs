import { defineConfig } from 'cypress';
import express from 'express';

export default defineConfig({
    component: {
        devServer: async (cypressConfig) => {
            const app = express();

            app.use(express.static('./'));

            app.get('/__cypress/*index.html', (req, res) => {
                res.send(`<!DOCTYPE html>
                <html>
                  <body>
                    <script type="module">
                      const CypressInstance = (window.Cypress = parent.Cypress)
                      const importsToLoad = [() => import("/" + CypressInstance.spec.relative)]
                      CypressInstance.onSpecWindow(window, importsToLoad)
                      CypressInstance.action('app:window:before:load', window)
                    </script>
                  </body>
                </html>`)
            });

            const server = await app.listen(3000);

            return {
                port: 3000,
                close: () => server.close(),
            };
        },
        supportFile: false,
        video: false,
    }
})