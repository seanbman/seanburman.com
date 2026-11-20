import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync} from 'node:fs'
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
test('brand links home without Home menu item',()=>{const app=read('src/App.tsx');assert.match(app,/className="brand" to="\/"/);assert.doesNotMatch(app,/name:'Home'/)})
test('showcase has three documented project previews and selectable slides',()=>{const s=read('src/components/Showcase.tsx');const projects=read('src/pages/work/projects.ts');assert.match(s,/showcase__media/);assert.match(s,/show\(index\)/);assert.match(s,/Previous showcase slide/);assert.match(s,/Next showcase slide/);assert.match(projects,/Job details, down to the room\./);assert.match(projects,/From the schedule to the job\./);assert.match(projects,/Explain the service\. Show the work\./);assert.match(projects,/Development demo · Sample data/);assert.doesNotMatch(s,/Employee hours|Revenue|Deliberately blank slide|Rotating app Showcase/i)})
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

test('service cards use inline icon-title headings with no capability numbers',()=>{
  const s=read('src/pages/Services.tsx');
  const css=read('src/App.css');
  assert.doesNotMatch(s,/CAPABILITY\s*\/|services\.map\(\(item,i\)/);
  assert.match(s,/className="service-detail__heading"/);
  assert.match(s,/<Icon name=\{item\.icon\}\/><\/span><h2>\{item\.title\}<\/h2>/);
  assert.match(css,/\.service-detail__heading\{display:flex;align-items:center;/);
  assert.match(css,/@media\(max-width:650px\)[\s\S]*?\.service-detail__heading\{gap:14px\}/);
});

test('process display numbers have no leading zero',()=>{
  const process=read('src/pages/Process.tsx');
  assert.match(process,/String\(i\+1\)/);
  assert.doesNotMatch(process,/padStart\(/);
});
test('Work index contains the three documented project entries',()=>{
  const work=read('src/pages/Work.tsx');
  const projects=read('src/pages/work/projects.ts');
  assert.match(work,/Project index/);
  assert.match(projects,/plumbing-track-console/);
  assert.match(projects,/fleet-platform/);
  assert.match(projects,/plumbing-track-website/);
  assert.match(projects,/Development demo · Sample data/);
  assert.doesNotMatch(work,/walkthroughs will be added here/i);
});

test('project routes use shared evidence-bound project pages',()=>{
  const app=read('src/App.tsx');
  const page=read('src/pages/work/ProjectPage.tsx');
  const projects=read('src/pages/work/projects.ts');
  for (const slug of ['plumbing-track-console','fleet-platform','plumbing-track-website']) {
    assert.match(projects,new RegExp(slug));
  }
  assert.match(app,/path="\/work\/:slug"/);
  assert.match(page,/BACK TO WORK/);
  assert.match(page,/WHAT WAS BUILT/);
  assert.match(page,/START A CONVERSATION/);
  assert.match(projects,/synthetic records/);
  assert.match(projects,/does not establish billing/);
  assert.match(projects,/https:\/\/www\.plumbingtrack\.com\//);
});
