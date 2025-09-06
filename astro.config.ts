import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeSix from '@six-tech/starlight-theme-six';

export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightThemeSix({
          navLinks: [
            {
              label: 'GitHub',
              link: 'https://github.com/SuhaybOn1FPS/Personal-Website',
              attrs: { target: '_blank' }
            }
          ],
          footerText: 'Built with ❤️ by Suhayb'
        })
      ]
    })
  ]
});
