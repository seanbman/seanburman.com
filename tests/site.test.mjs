import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
test('brand links home without Home menu item',()=>{const app=read('src/App.tsx');assert.match(app,/className="brand" to="\/"/);assert.doesNotMatch(app,/name:'Home'/)})
test('showcase has blank contents, arrows and three selectable slides',()=>{const s=read('src/components/Showcase.tsx');assert.match(s,/Deliberately blank slide/);assert.match(s,/setActive\(\(n\+slots.length\)%slots.length\)/);assert.match(s,/Previous showcase slide/);assert.match(s,/Next showcase slide/);assert.match(s,/onClick=\{\(\)=>show\(i\)\}/);assert.doesNotMatch(s,/Rotating app Showcase/i)})
test('hard black shadows and square cards/buttons',()=>{const c=read('src/App.css')+read('src/index.css');assert.match(c,/--shadow:4px 4px 0 var\(--black\)/);assert.match(c,/\.neo-card\{[^}]*border-radius:0/);assert.match(c,/\.button\{[^}]*border-radius:0/)})
test('homepage contains hero, carousel, relevant CTA',()=>{const h=read('src/pages/Home.tsx');assert.match(h,/<Showcase\/>/);assert.match(h,/START A PROJECT/);assert.match(h,/SYSTEMS BUILT/)})
