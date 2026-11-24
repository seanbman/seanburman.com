import test from 'node:test'
import assert from 'node:assert/strict'
import {readFileSync,existsSync} from 'node:fs'
const read=(p)=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
test('brand links home without Home menu item',()=>{const app=read('src/App.tsx');assert.match(app,/className="brand" to="\/"/);assert.doesNotMatch(app,/name:'Home'/)})
test('showcase has three documented project previews and selectable slides',()=>{const s=read('src/components/Showcase.tsx');const projects=read('src/pages/work/projects.ts');const css=read('src/App.css');assert.match(s,/showcase__media/);assert.match(s,/showcase__copy--/);assert.match(s,/show\(index\)/);assert.match(s,/Previous showcase slide/);assert.match(s,/Next showcase slide/);assert.doesNotMatch(s,/showcase__status|showcase__project-type|BUSINESS SOFTWARE IN ACTION/);for (const copy of ['Save wall measurements, cut details, and paint colours for each room.','See how dispatch, customer records, and updates from the field fit together.','Building owners can learn how repiping works, see past projects, and request a building assessment.']) assert.match(projects,new RegExp(copy.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));for (const link of ['View Plumbing Track','Try Fleet Dispatch','View website project']) assert.match(projects,new RegExp(link));assert.match(projects,/https:\/\/apps\.seanburman\.com\/fleet/);assert.match(projects,/Development demo · Sample data/);assert.match(projects,/430_dispatch\.png/);assert.match(css,/background:rgba\(248,246,240,\.94\)/);assert.match(css,/object-fit:cover/);assert.match(css,/\.showcase__media:focus-visible/);assert.match(css,/@media\(max-width:800px\)[\s\S]*\.showcase__copy/);assert.doesNotMatch(s,/Employee hours|Revenue|Deliberately blank slide|Rotating app Showcase/i)})
test('tall project screenshots use bounded previews and scrolling lightboxes',()=>{const page=read('src/pages/work/ProjectPage.tsx');const lightbox=read('src/components/ImageLightbox.tsx');const css=read('src/App.css');assert.match(page,/project-gallery__figure--tall/);assert.match(page,/project-gallery__frame--tall/);assert.match(lightbox,/role="dialog"/);assert.match(lightbox,/aria-modal="true"/);assert.match(lightbox,/event.key === 'Escape'/);assert.match(css,/\.project-gallery__frame--tall\{aspect-ratio:4\/3;overflow:hidden\}/);assert.match(css,/\.image-lightbox__body\{min-height:0;overflow:auto/)})
test('project pages surface live and related links near the opening overview',()=>{const page=read('src/pages/work/ProjectPage.tsx');const projects=read('src/pages/work/projects.ts');const css=read('src/App.css');assert.match(page,/project-page__quick-links/);assert.match(page,/project\.homeLinkHref/);assert.match(page,/project\.website/);assert.match(page,/showRelatedProject/);assert.match(page,/project\.homeLinkHref && <a className="project-page__related"/);assert.match(projects,/homeLinkHref: 'https:\/\/apps\.seanburman\.com\/fleet'/);assert.match(projects,/website: 'https:\/\/www\.plumbingtrack\.com\//);assert.match(css,/\.project-page__quick-links\{display:flex/);assert.match(css,/\.project-page__quick-link-list\{display:flex/)})
test('Plumbing Track project pages use the real logo with company-name alt text',()=>{const page=read('src/pages/work/ProjectPage.tsx');const projects=read('src/pages/work/projects.ts');const css=read('src/App.css');assert.match(projects,/logo: image\('\/work\/plumbing-track\/logo\.png', 'Plumbing Track'/);assert.match(page,/project\.logo && <img className="project-page__client-logo" src=\{project\.logo\.src\} alt=\{project\.logo\.alt\}/);assert.match(css,/\.project-page__client-logo\{display:block/)})
test('Plumbing Track narrative sections use the approved schedule capture',()=>{const projects=read('src/pages/work/projects.ts');assert.match(projects,/stage-schedule\.png/);assert.match(projects,/images: \[plumbingConsoleSchedule\]/);assert.equal(existsSync(new URL('../public/work/plumbing-track/stage-schedule.png',import.meta.url)),true)})
test('light quick-link panel keeps hover and focus text high contrast',()=>{const css=read('src/App.css');assert.match(css,/\.project-page__quick-links\{[^}]*background:var\(--cyan\)[^}]*color:var\(--ink\)/);assert.match(css,/\.project-page__quick-link:hover\{color:var\(--ink\);border-bottom-color:var\(--ink\)\}/);assert.match(css,/\.project-page__quick-link:focus-visible\{outline-color:var\(--ink\)\}/)})
test('showcase keeps a stable media frame and circular pagination markers',()=>{const s=read('src/components/Showcase.tsx');const css=read('src/App.css');assert.match(s,/showcase__footer/);assert.match(s,/showcase__footer-row/);assert.match(s,/showcase__link/);assert.match(css,/\.showcase__media\{[^}]*width:100%/);assert.match(css,/\.showcase__footer\{[^}]*height:146px/);assert.match(css,/\.showcase__footer-row\{display:flex/);assert.match(css,/\.showcase__arrow\{[^}]*width:38px/);assert.match(css,/\.showcase__media\{aspect-ratio:11\/5\}/);assert.match(css,/@media\(max-width:800px\)[\s\S]*\.showcase__media\{aspect-ratio:4\/3\}/);assert.match(css,/\.showcase__dot\{[^}]*flex:0 0 12px[^}]*width:12px[^}]*height:12px[^}]*aspect-ratio:1[^}]*border-radius:50%/)})
test('project images use in-site lightboxes while action links stay explicit',()=>{const showcase=read('src/components/Showcase.tsx');const work=read('src/pages/Work.tsx');const page=read('src/pages/work/ProjectPage.tsx');const lightbox=read('src/components/ImageLightbox.tsx');assert.match(showcase,/ImageLightbox image=\{project\.preview\}/);assert.match(work,/ImageLightbox image=\{project\.preview\}/);assert.match(page,/ImageLightbox image=\{project\.preview\}/);assert.match(page,/ImageLightbox image=\{screenshot\}/);assert.match(lightbox,/className=\{`image-lightbox__trigger/);assert.match(page,/relatedProjectSource \? <a className="project-page__related" href=\{relatedProjectSource\} target="_blank"/)})
test('work previews use explicit bounded source crops',()=>{const work=read('src/pages/Work.tsx');const crops=read('src/pages/work/projects.ts');const component=read('src/components/CroppedImage.tsx');const css=read('src/App.css');assert.match(work,/CroppedImage image=\{project\.preview\}/);assert.match(crops,/cardCrop: \{x: 0, y: 0, width: 1305, height: 900\}/);assert.match(component,/crop\.x/);assert.match(component,/crop\.y/);assert.match(css,/\.work-card__image\{[^}]*aspect-ratio:1\.45/);assert.match(css,/\.image-crop\{position:relative[^}]*overflow:hidden/)})
test('fleet-inspired visual system uses flat surfaces and square controls',()=>{const c=read('src/App.css')+read('src/index.css');assert.match(c,/--shadow:none/);assert.match(c,/--charcoal:#181b1b/);assert.match(c,/--signal:#fb7b3d/);assert.match(c,/\.neo-card\{[^}]*box-shadow:none/);assert.match(c,/\.button\{[^}]*box-shadow:none/)})
test('homepage contains hero, carousel, relevant CTA',()=>{const h=read('src/pages/Home.tsx');assert.match(h,/<Showcase\/>/);assert.match(h,/START A PROJECT/);assert.match(h,/SYSTEMS BUILT/)})
test('homepage and work cards avoid repeated metadata labels',()=>{const home=read('src/pages/Home.tsx');const work=read('src/pages/Work.tsx');const page=read('src/pages/work/ProjectPage.tsx');assert.doesNotMatch(home,/CUSTOM BUSINESS SOFTWARE|PRACTICAL, BUSINESS-FOCUSED APPROACH/);assert.doesNotMatch(work,/work-study__category|work-study__client|work-card__status|statusLabel/);assert.doesNotMatch(page,/project-page__kind|work-study__client|project-page__status|statusLabel/)})
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
  assert.match(s,/<Icon name=\{item\.icon\}\s*\/><\/span><h2>\{item\.title\}<\/h2>/);
  assert.match(css,/\.service-detail__heading\{display:flex;align-items:center;/);
  assert.match(css,/@media\(max-width:650px\)[\s\S]*?\.service-detail__heading\{gap:14px\}/);
});

test('process display numbers have no leading zero',()=>{
  const process=read('src/pages/Process.tsx');
  const css=read('src/App.css');
  assert.match(process,/String\(index \+ 1\)/);
  assert.doesNotMatch(process,/padStart\(/);
  assert.match(process,/className="process-card__number"/);
  assert.doesNotMatch(process,/process-card__number--/);
  assert.match(css,/\.process-card__number\{[^}]*color:var\(--ink\)[^}]*background:var\(--blue-surface\)/);
  assert.match(css,/\.content-section__number\{[^}]*background:var\(--blue-surface\)[^}]*color:var\(--ink\)/);
  assert.doesNotMatch(css,/content-section:nth-child\([^)]*\) \.content-section__number/);
});
test('Services includes the documented contracting topics',()=>{
  const services=read('src/pages/Services.tsx');
  const css=read('src/App.css');
  for (const id of ['contracting','materials','purchases','hours','history','coordination','updates']) assert.match(services,new RegExp(`(?:id="|id: ')${id}`));
  assert.match(services,/Keep the moving parts of a job together/);
  assert.match(services,/See customer and job views in the Fleet demo/);
  assert.match(services,/START A CONVERSATION/);
  assert.match(services,/HOW I WORK/);
  assert.match(css,/\.content-section__example strong\{display:block;/);
});
test('Process includes the documented delivery sections',()=>{
  const process=read('src/pages/Process.tsx');
  for (const id of ['start-with-the-work','first-version','working-software','check-the-work','prepare-for-use','real-feedback']) assert.match(process,new RegExp(`(?:id="|id: ')${id}`));
  assert.match(process,/From an idea to something your team can use/);
  assert.match(process,/See the Fleet dispatch demo/);
  assert.match(process,/Have a task that could work better/);
  assert.match(process,/START A CONVERSATION/);
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

test('pages do not use decorative pre-header labels',()=>{
  const paths=['src/pages/About.tsx','src/pages/Contact.tsx','src/pages/Process.tsx','src/pages/Services.tsx','src/pages/Work.tsx','src/pages/work/ProjectPage.tsx'];
  const markup=paths.map(read).join('\n');
  assert.doesNotMatch(markup,/className="eyebrow"/);
  assert.doesNotMatch(markup,/FOR THE WORK THAT MOVES THROUGH A DAY|START WITH ONE USEFUL CHANGE|NEXT STEP|GET IN TOUCH|SELECTED WORK|WORKING TOGETHER|SOFTWARE ENGINEER/);
  assert.doesNotMatch(read('src/pages/Process.tsx'),/page-contents|process-contents/);
  assert.doesNotMatch(read('src/pages/Services.tsx'),/className="page-contents"/);
  assert.doesNotMatch(markup,/className="project-page__kind"/);
});

test('GitHub Pages build prepares direct client-route entry points',()=>{
  const pkg=read('package.json');
  const script=read('scripts/prepare-pages.mjs');
  assert.match(pkg,/node scripts\/prepare-pages\.mjs/);
  for (const route of ['services','process','work','work\/fleet-platform','work\/plumbing-track-console','work\/plumbing-track-website','about','contact']) {
    assert.match(script,new RegExp(`'${route}'`));
  }
  assert.match(script,/copyFileSync\(indexFile, join\(distDir, '404\.html'\)\)/);
});
test('Fleet project exposes a demo CTA in the opening hero',()=>{const page=read('src/pages/work/ProjectPage.tsx');const css=read('src/App.css');assert.match(page,/project\.homeLinkHref && <a className="button button--orange project-page__demo-cta" href=\{project\.homeLinkHref\}/);assert.match(page,/>VIEW DEMO <ArrowIcon direction="up-right" \/><\/a>/);assert.match(css,/\.project-page__demo-cta\{margin-top:24px\}/)})
test('homepage Services and About panels stay compact',()=>{const css=read('src/App.css');assert.match(css,/\.summary-panel,.about-panel\{min-height:0\}/);assert.match(css,/\.about-panel__body \.button\{position:static;margin-top:18px\}/)})
