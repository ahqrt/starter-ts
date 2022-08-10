import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'esbuild'

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

build({
  entryPoints: [resolve(__dirname, '../src/index.ts')],
  platform: 'node',
  target: ['node16'],
  outdir: 'dist',
  watch: {
    onRebuild(err) {
      if (!err)
        console.log('rebuild')
    },
  },
}).then(() => {
  console.log('build done')
})
