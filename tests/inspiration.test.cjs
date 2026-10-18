const assert = require('node:assert/strict');
const I = require('../dist/inspiration.js');
assert.equal(I.looks.length,24);
assert.equal(new Set(I.looks.map(x=>x.id)).size,24);
for(const audience of ['Women','Men','Girls','Boys']) {
 const matches=I.filterLooks(I.looks,{audience});
 assert.equal(matches.length,6);
 assert(matches.every(x=>x.audience===audience));
}
assert.equal(I.filterLooks(I.looks,{audience:'Men',style:'Preppy',occasion:'Weekend'}).length,1);
assert.equal(I.filterLooks(I.looks,{audience:'Girls',occasion:'Work'}).length,0);
assert.equal(I.filterLooks(I.looks,{search:'  POETCORE  '}).length,1);
assert(I.filterLooks(I.looks,{search:'khaki'}).some(x=>x.sourceTheme==='Khaki Coded'));
const one=I.looks[0],last=I.looks.at(-1);
let saved=I.toggleSaved([],one.id);assert.deepEqual(saved,[one.id]);
saved=I.toggleSaved(saved,last.id);assert.equal(saved.length,2);
assert.equal(I.filterLooks(I.looks,{savedOnly:true,savedIds:saved}).length,2);
assert.equal(I.filterLooks(I.looks,{savedOnly:true,savedIds:[],search:''}).length,0);
assert.deepEqual(I.toggleSaved(saved,one.id),[last.id]);
assert.deepEqual(I.toggleSaved([], 'non-existent-look'),[]);
const themes=new Set(I.looks.map(x=>x.sourceTheme).filter(Boolean));
for(const name of ['Poetcore','Glamoratti','Brooched','Laced Up','Cool Blue','Khaki Coded','Throwback Kid','Extra Celestial','Wilderkind']) assert(themes.has(name),name);
for(const look of I.looks) {
 assert(look.pieces.length>=3 && look.warm && look.layer && look.tip);
 const u=new URL(I.pinterestUrl(look.query));
 assert.equal(u.origin,'https://www.pinterest.com');
 assert.equal(u.searchParams.get('q'),look.query);
 assert.equal(u.pathname,'/search/pins/');
 if(look.sourceTheme)assert(new URL(I.themeReportUrl(look.sourceTheme)).pathname.startsWith('/pinterest-predicts/2026/'));
}
console.log('Passed: all audiences, combined filters, theme search, bookmark round-trip, all9 source themes, and encoded Pinterest links.');
assert.deepEqual(I.interleaveLooks(I.looks).slice(0,4).map(x=>x.audience),['Women','Men','Girls','Boys']);
assert.equal(I.paginateLooks(I.looks,8).items.length,8);
assert.equal(I.paginateLooks(I.looks,16).items.length,16);
assert.equal(I.paginateLooks(I.looks,100).items.length,24);
assert.equal(new Set(I.interleaveLooks(I.looks).map(x=>x.id)).size,24);

assert.equal(I.paginateLooks(I.looks,8).hasMore,true);
assert.equal(I.paginateLooks(I.looks,24).hasMore,false);
