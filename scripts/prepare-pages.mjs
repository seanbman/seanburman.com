import {copyFileSync, mkdirSync} from 'node:fs'
import {join, resolve} from 'node:path'

const distDir = resolve('dist')
const indexFile = join(distDir, 'index.html')
const routes = [
  'services',
  'process',
  'work',
  'work/fleet-platform',
  'work/plumbing-track-console',
  'work/plumbing-track-website',
  'about',
  'contact',
]

for (const route of routes) {
  const routeDir = join(distDir, route)
  mkdirSync(routeDir, {recursive: true})
  copyFileSync(indexFile, join(routeDir, 'index.html'))
}

copyFileSync(indexFile, join(distDir, '404.html'))
