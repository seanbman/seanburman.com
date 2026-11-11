import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
test('brand links home without Home menu item',()=>{const app=read('src/App.tsx');assert.match(app,/className="brand" to="\/"/);assert.doesNotMatch(app,/name:'Home'/)})
test('showcase has blank contents, arrows and three selectable slides',()=>{const s=read('src/components/Showcase.tsx');assert.match(s,/Deliberately blank slide/);assert.match(s,/setActive\(\(n\+slots.length\)%slots.length\)/);assert.match(s,/Previous showcase slide/);assert.match(s,/Next showcase slide/);assert.match(s,/onClick=\{\(\)=>show\(i\)\}/);assert.doesNotMatch(s,/Rotating app Showcase/i)})
test('hard black shadows and square cards/buttons',()=>{const c=read('src/App.css')+read('src/index.css');assert.match(c,/--shadow:4px 4px 0 var\(--black\)/);assert.match(c,/\.neo-card\{[^}]*border-radius:0/);assert.match(c,/\.button\{[^}]*border-radius:0/)})
test('homepage contains hero, carousel, relevant CTA',()=>{const h=read('src/pages/Home.tsx');assert.match(h,/<Showcase\/>/);assert.match(h,/START A PROJECT/);assert.match(h,/SYSTEMS BUILT/)})
test('contact form posts inquiries through the configured Google Mail relay',()=>{const c=read('src/pages/Contact.tsx');assert.match(c,/VITE_GOOGLE_MAIL_API/);assert.match(c,/method: 'POST'/);assert.match(c,/subject: `Project inquiry/);assert.doesNotMatch(c,/window\.location\.href='mailto:/)})

test('navigation and CTAs use SVG arrows rather than platform-rendered glyphs',()=>{
  const paths=['src/App.tsx','src/components/Showcase.tsx','src/pages/Home.tsx','src/pages/Services.tsx','src/pages/About.tsx','src/pages/Process.tsx','src/pages/Work.tsx','src/pages/Contact.tsx'];
  const markup=paths.map(read).join('\n');
  assert.doesNotMatch(markup,/[↗→‹›]|[\u{1F300}-\u{1FAFF}]/u);
  assert.match(markup,/<ArrowIcon direction=/);
  const icons=read('src/components/Icons.tsx');
  assert.match(icons,/export function ArrowIcon/);
  assert.match(icons,/className="arrow-icon"/);
  assert.match(icons,/<svg/);
});
test('mobile navigation has tighter 12px outer margins',()=>{
  assert.match(read('src/App.css'),/\.site-nav\{display:none;position:absolute;z-index:20;left:12px;right:12px;/);
});
