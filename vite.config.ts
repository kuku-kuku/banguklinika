import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],

  resolve: {
    alias: {
      /* One route table, two resolvers. The browser build gets lazy dynamic
         imports (one chunk per page); the SSR/prerender build gets static
         imports so renderToString always emits complete markup for crawlers.
         See src/routes/resolve.lazy.tsx for the full rationale. */
      './routes/resolve': isSsrBuild
        ? path.resolve(__dirname, 'src/routes/resolve.eager.tsx')
        : path.resolve(__dirname, 'src/routes/resolve.lazy.tsx'),
    },
  },

  build: {
    /* The prerender script reads this to emit a modulepreload for each
       route's own chunk, so the page chunk downloads in parallel with the
       entry chunk instead of waterfalling behind it. */
    manifest: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          /* Only the things every route genuinely shares are pinned here.
             Framer Motion is deliberately NOT pinned: the shell uses the
             light `m` component while the ~90 service pages use the full
             `motion` component, and forcing both into one chunk dragged the
             entire animation runtime into the initial payload. Left alone,
             Rollup splits it so the heavy half loads only with those pages. */
          if (!id.includes('node_modules')) return
          if (id.includes('react-router')) return 'router'
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('scheduler')) return 'react'
          if (id.includes('lenis')) return 'lenis'
        },
      },
    },
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
        secure: false,
      },
    },
  },

  ssr: {
    noExternal: ['react-helmet-async'],
  },
}))
