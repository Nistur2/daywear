(function (scope) {
  'use strict';

  const AUDIENCES = ['Women', 'Men', 'Girls', 'Boys'];
  const STYLES = ['Minimal', 'Streetwear', 'Smart casual', 'Athleisure', 'Preppy', 'Relaxed denim'];
  const palette = {
    cream: '#e9e1d0', black: '#2e302d', olive: '#78806a', white: '#faf9f4',
    navy: '#354352', blue: '#819db0', tan: '#b79570', gray: '#aaa9a2',
    pink: '#d7aca7', brown: '#795d49', green: '#8f9b82', red: '#b75f4e'
  };
  const looks = [
    {
      id: 'women-minimal', audience: 'Women', title: 'Linen with a little lace', style: 'Minimal', occasion: 'Casual', colors: ['cream', 'olive', 'tan'], photoVariant: 0, sourceTheme: 'Laced Up',
      description: 'Soft neutrals with a small lace detail: our everyday adaptation of Pinterest’s Laced Up forecast.',
      pieces: ['Cream linen shirt with a lace-trim collar', 'Olive straight-leg trousers', 'Tan flat sandals', 'Woven tote and simple stud earrings'],
      warm: 'Choose a light shirt and breathable trousers. Roll the sleeves if you prefer.',
      layer: 'Add a lightweight cream cardigan for cooler rooms.',
      tip: 'Repeat the tan tone in one accessory to make the whole outfit feel connected.',
      query: 'women lace collar linen shirt olive trousers sandals outfit'
    },
    {
      id: 'women-street', audience: 'Women', title: 'Off-duty city', style: 'Streetwear', occasion: 'Weekend', colors: ['black', 'blue', 'white'], photoVariant: 1,
      description: 'A roomy tee and denim with clean sneakers: a practical starting point for city days.',
      pieces: ['Black relaxed cotton T-shirt', 'Mid-blue loose straight jeans', 'White low-top sneakers', 'Small crossbody bag and a cap'],
      warm: 'Swap full-length denim for knee-length denim shorts.',
      layer: 'Try an open overshirt or a light bomber jacket.',
      tip: 'Keep the denim comfortable at the waist and choose a length that clears your shoes.',
      query: 'women black oversized tee straight jeans white sneakers streetwear outfit'
    },
    {
      id: 'women-smart', audience: 'Women', title: 'The modern power suit', style: 'Smart casual', occasion: 'Work', colors: ['cream', 'navy', 'brown'], photoVariant: 0, sourceTheme: 'Glamoratti',
      description: 'Our wearable take on the Glamoratti forecast: a structured jacket, relaxed tailoring, and one bold accessory.',
      pieces: ['Cream short-sleeve top', 'Navy strong-shouldered blazer and tailored trousers', 'Brown loafers', 'Structured tote and chunky gold-tone earrings'],
      warm: 'Look for an unlined trouser and a lightweight cotton knit.',
      layer: 'Wear the blazer as the main layer; choose an unlined version for milder weather.',
      tip: 'Match the shoe and bag tones loosely; they do not need to be identical.',
      query: 'women navy strong shoulder suit cream top gold earrings outfit'
    },
    {
      id: 'women-active', audience: 'Women', title: 'A silver lining', style: 'Athleisure', occasion: 'Active', colors: ['gray', 'black', 'green'], photoVariant: 1, sourceTheme: 'Extra Celestial',
      description: 'A small space-age accent on practical basics: our understated adaptation of the Extra Celestial forecast.',
      pieces: ['Gray breathable T-shirt', 'Black relaxed joggers', 'Supportive silver-accent walking shoes', 'Small opalescent belt bag and a sage cap'],
      warm: 'Choose breathable shorts if they suit your activity and comfort.',
      layer: 'Carry a light zip jacket for breaks and cooler weather.',
      tip: 'Choose footwear for the activity first, then repeat an accent color in your cap or bag.',
      query: 'women silver sneakers opalescent bag grey tee black joggers outfit'
    },
    {
      id: 'women-preppy', audience: 'Women', title: 'The library afternoon', style: 'Preppy', occasion: 'Weekend', colors: ['navy', 'cream', 'brown'], photoVariant: 0, sourceTheme: 'Poetcore',
      description: 'Our softer Poetcore formula: a roomy knit, a long skirt, and a satchel with a vintage feel.',
      pieces: ['Roomy navy cotton knit top', 'Cream A-line midi skirt', 'Brown loafers or flat Mary Janes', 'Brown messenger satchel'],
      warm: 'Choose a short-sleeve cotton knit and a lightweight skirt.',
      layer: 'Add a vintage-style blazer, or use a soft turtleneck for cooler weather.',
      tip: 'Try one vintage-feeling accessory rather than replacing your whole wardrobe.',
      query: 'women poetcore navy knit cream midi skirt vintage blazer satchel outfit'
    },
    {
      id: 'women-denim', audience: 'Women', title: 'A cooler shade of blue', style: 'Relaxed denim', occasion: 'Casual', colors: ['white', 'blue', 'tan'], photoVariant: 1, sourceTheme: 'Cool Blue',
      description: 'An icy-blue shirt with familiar denim: our everyday adaptation of the Cool Blue color forecast.',
      pieces: ['Icy-blue cotton shirt', 'Medium-wash wide-leg jeans', 'White sneakers or tan flat sandals', 'Tan shoulder bag and a simple belt'],
      warm: 'Choose a short-sleeve top and lightweight denim.',
      layer: 'Try a denim shirt in a lighter or darker wash for gentle contrast.',
      tip: 'Fold a long hem neatly or choose an ankle length so it does not drag.',
      query: 'women icy blue cotton shirt wide leg jeans white sneakers outfit'
    },
    {
      id: 'men-minimal', audience: 'Men', title: 'The everyday neutral', style: 'Minimal', occasion: 'Casual', colors: ['cream', 'olive', 'white'], photoVariant: 0,
      description: 'An understated combination built from comfortable basics you may already own.',
      pieces: ['Cream heavyweight cotton T-shirt', 'Olive straight-leg chinos', 'White low-top sneakers', 'Plain canvas tote or a simple watch'],
      warm: 'Swap chinos for tailored cotton shorts when the setting allows.',
      layer: 'Add an open beige overshirt for an easy extra layer.',
      tip: 'Choose one relaxed silhouette across the outfit so the pieces feel intentional together.',
      query: 'men cream t shirt olive chinos white sneakers minimal outfit'
    },
    {
      id: 'men-street', audience: 'Men', title: 'The utility weekend', style: 'Streetwear', occasion: 'Weekend', colors: ['black', 'tan', 'white'], photoVariant: 1, sourceTheme: 'Khaki Coded',
      description: 'Utility pockets and khaki tones, adapted from the Khaki Coded forecast into an easy weekend formula.',
      pieces: ['Black cotton T-shirt', 'Khaki relaxed cargo trousers', 'White or black sneakers', 'Compact crossbody bag and a cap'],
      warm: 'Try khaki Bermuda shorts and a lighter cotton tee.',
      layer: 'Add a lightweight pocketed vest or a khaki overshirt.',
      tip: 'Use one graphic or statement piece and let the remaining colors support it.',
      query: 'men khaki coded cargo trousers black tee utility vest outfit'
    },
    {
      id: 'men-smart', audience: 'Men', title: 'The easy polo', style: 'Smart casual', occasion: 'Work', colors: ['navy', 'tan', 'brown'], photoVariant: 0,
      description: 'A familiar polo-and-trouser formula, finished with simple leather shoes.',
      pieces: ['Navy cotton polo', 'Tan tailored chinos', 'Brown loafers or clean leather sneakers', 'Brown belt and a simple watch'],
      warm: 'Try a breathable cotton piqué polo and lighter-weight chinos.',
      layer: 'Add a navy unstructured blazer for a dressier setting.',
      tip: 'Check the workplace dress code; swap sneakers for loafers if needed.',
      query: 'men navy polo tan chinos brown loafers smart casual outfit'
    },
    {
      id: 'men-active', audience: 'Men', title: 'A fresh-air reset', style: 'Athleisure', occasion: 'Active', colors: ['green', 'black', 'white'], photoVariant: 1,
      description: 'Straightforward active pieces for a comfortable start to the day.',
      pieces: ['Sage moisture-wicking T-shirt', 'Black training shorts or joggers', 'Supportive trainers', 'Cap and a lightweight day bag'],
      warm: 'Choose ventilated shorts and remember sun protection outdoors.',
      layer: 'Use a lightweight windbreaker for windy or cooler conditions.',
      tip: 'Choose shoes with support for your planned activity; style is the finishing touch.',
      query: 'men sage t shirt black training shorts athleisure outfit'
    },
    {
      id: 'men-preppy', audience: 'Men', title: 'A small vintage detail', style: 'Preppy', occasion: 'Weekend', colors: ['blue', 'cream', 'navy'], photoVariant: 0, sourceTheme: 'Brooched',
      description: 'A vintage pin gives a familiar shirt-and-chino outfit a personal finish: our Brooched adaptation.',
      pieces: ['Pale-blue Oxford shirt', 'Cream chinos', 'Navy canvas sneakers or brown loafers', 'Small vintage brooch or pin on a sturdy shirt pocket'],
      warm: 'Choose a short-sleeve Oxford shirt or roll up the sleeves.',
      layer: 'Add a cotton crewneck sweater when the temperature drops.',
      tip: 'Try the pin on an overshirt or blazer if the shirt fabric is too delicate.',
      query: 'men vintage brooch oxford shirt cream chinos preppy outfit'
    },
    {
      id: 'men-denim', audience: 'Men', title: 'A little wild, a little easy', style: 'Relaxed denim', occasion: 'Casual', colors: ['white', 'blue', 'brown'], photoVariant: 1, sourceTheme: 'Wilderkind',
      description: 'A subtle botanical print with everyday denim: our grounded interpretation of the Wilderkind forecast.',
      pieces: ['Small botanical-print cotton shirt', 'Mid-wash straight-leg jeans', 'Brown casual shoes or white sneakers', 'Simple brown belt and a canvas bag'],
      warm: 'Use lightweight denim and a breathable short-sleeve shirt.',
      layer: 'Wear the shirt open over a plain white tee for an easy layer.',
      tip: 'Keep the jeans hem just above the ground so the look stays practical.',
      query: 'men subtle botanical floral shirt straight jeans casual outfit'
    },
    {
      id: 'girls-minimal', audience: 'Girls', title: 'Easy sunshine', style: 'Minimal', occasion: 'Casual', colors: ['cream', 'green', 'white'], photoVariant: 0,
      description: 'Soft everyday pieces for comfortable days out and about.',
      pieces: ['Cream cotton T-shirt', 'Sage pull-on trousers', 'White easy-fastening sneakers', 'Small lightweight backpack'],
      warm: 'Swap trousers for comfortable cotton shorts.',
      layer: 'Pack a soft zip cardigan for air-conditioned spaces.',
      tip: 'Choose washable fabrics, comfortable waistbands, and shoes that are easy to fasten.',
      query: 'girls kids cream tee sage trousers sneakers casual outfit'
    },
    {
      id: 'girls-street', audience: 'Girls', title: 'After-school energy', style: 'Streetwear', occasion: 'Weekend', colors: ['pink', 'blue', 'white'], photoVariant: 1,
      description: 'A cheerful graphic tee with relaxed jeans and comfortable everyday shoes.',
      pieces: ['Soft pink graphic T-shirt', 'Relaxed blue jeans', 'White sneakers', 'Canvas backpack and a cap'],
      warm: 'Try denim shorts with a comfortable length for play.',
      layer: 'Bring a light zip hoodie for cooler afternoons.',
      tip: 'Let her choose the tee graphic or accent color to make the outfit her own.',
      query: 'girls kids pink graphic tee relaxed jeans sneakers outfit'
    },
    {
      id: 'girls-smart', audience: 'Girls', title: 'A little celebration', style: 'Smart casual', occasion: 'Family outing', colors: ['white', 'navy', 'pink'], photoVariant: 0,
      description: 'A comfortable, tidy outfit for a family lunch or a small celebration.',
      pieces: ['White cotton blouse', 'Navy pull-on culottes', 'Comfortable flat shoes', 'Small pink crossbody pouch'],
      warm: 'Choose an airy short-sleeve blouse and breathable cotton bottoms.',
      layer: 'Add a soft cardigan that is easy to take on and off.',
      tip: 'Keep fastenings simple and choose shoes suitable for walking and playing.',
      query: 'girls kids white blouse navy culottes flats family outfit'
    },
    {
      id: 'girls-active', audience: 'Girls', title: 'Ready, set, play', style: 'Athleisure', occasion: 'Active', colors: ['green', 'navy', 'white'], photoVariant: 1,
      description: 'Easy movement and light layers for a playground or activity day.',
      pieces: ['Sage breathable T-shirt', 'Navy stretchy shorts or joggers', 'Supportive trainers', 'Sun cap and a water-bottle backpack'],
      warm: 'Choose lightweight shorts and appropriate sun protection.',
      layer: 'Pack a light track jacket for breaks and the trip home.',
      tip: 'Check that shoes fit comfortably and clothing allows a full range of movement.',
      query: 'girls kids sage tee navy joggers trainers sporty outfit'
    },
    {
      id: 'girls-preppy', audience: 'Girls', title: 'The library club', style: 'Preppy', occasion: 'School', colors: ['blue', 'cream', 'navy'], photoVariant: 0,
      description: 'A striped top and soft trousers for a neat, comfortable school-day idea.',
      pieces: ['Blue-and-white striped cotton top', 'Cream comfortable chinos', 'Navy canvas sneakers', 'Practical school backpack'],
      warm: 'Choose a short-sleeve striped top and lightweight trousers.',
      layer: 'Add a soft navy cardigan that fits comfortably in a backpack.',
      tip: 'Follow the school dress code and keep accessories practical for the day.',
      query: 'girls kids striped top cream chinos school casual outfit'
    },
    {
      id: 'girls-denim', audience: 'Girls', title: 'Pocketful of weekend', style: 'Relaxed denim', occasion: 'Weekend', colors: ['white', 'blue', 'pink'], photoVariant: 1, sourceTheme: 'Throwback Kid',
      description: 'A children’s retro-inspired formula with practical denim, adapted from the Throwback Kid forecast.',
      pieces: ['Pastel striped cotton T-shirt', 'Relaxed denim overalls', 'Easy-fastening sneakers', 'Soft sun hat and a small backpack'],
      warm: 'Try lightweight short overalls and a breathable tee.',
      layer: 'Add a soft cardigan or a light rain jacket when needed.',
      tip: 'Choose straps and fastenings she can manage comfortably.',
      query: 'girls kids retro striped tee denim overalls sneakers outfit'
    },
    {
      id: 'boys-minimal', audience: 'Boys', title: 'Everyday explorer', style: 'Minimal', occasion: 'Casual', colors: ['cream', 'olive', 'white'], photoVariant: 0,
      description: 'Simple, comfortable essentials that are easy to mix with the rest of a wardrobe.',
      pieces: ['Cream cotton T-shirt', 'Olive pull-on chinos', 'White or gray sneakers', 'Lightweight canvas backpack'],
      warm: 'Swap chinos for cotton shorts and add a sun hat.',
      layer: 'Pack a light zip hoodie for cooler spaces.',
      tip: 'Look for soft seams, washable fabric, and a comfortable waistband.',
      query: 'boys kids cream tee olive chinos sneakers casual outfit'
    },
    {
      id: 'boys-street', audience: 'Boys', title: 'The weekend crew', style: 'Streetwear', occasion: 'Weekend', colors: ['navy', 'gray', 'white'], photoVariant: 1,
      description: 'An easy graphic tee and utility trousers for an active weekend.',
      pieces: ['Navy graphic cotton T-shirt', 'Gray relaxed cargo trousers', 'Comfortable white sneakers', 'Cap and a small backpack'],
      warm: 'Try cargo shorts and a lighter-weight cotton tee.',
      layer: 'Add an open overshirt or a soft zip hoodie.',
      tip: 'Choose a comfortable trouser length that will not catch under shoes.',
      query: 'boys kids navy graphic tee grey cargo pants sneakers outfit'
    },
    {
      id: 'boys-smart', audience: 'Boys', title: 'Out with the family', style: 'Smart casual', occasion: 'Family outing', colors: ['blue', 'tan', 'white'], photoVariant: 0,
      description: 'A comfortable polo and chinos for family occasions without fussy extras.',
      pieces: ['Light-blue cotton polo', 'Tan pull-on chinos', 'Clean comfortable sneakers', 'Simple canvas belt if needed'],
      warm: 'Choose a breathable polo and neat cotton shorts.',
      layer: 'Add a soft crewneck sweater or a light cotton jacket.',
      tip: 'Choose pieces he can move and sit in comfortably; skip unnecessary accessories.',
      query: 'boys kids light blue polo tan chinos family outfit'
    },
    {
      id: 'boys-active', audience: 'Boys', title: 'A day in motion', style: 'Athleisure', occasion: 'Active', colors: ['red', 'navy', 'gray'], photoVariant: 1,
      description: 'Breathable basics with a bright accent for a day of play.',
      pieces: ['Terracotta-red breathable T-shirt', 'Navy training shorts or joggers', 'Supportive gray trainers', 'Sun cap and a water-bottle backpack'],
      warm: 'Pick ventilated shorts and appropriate sun protection.',
      layer: 'Carry a lightweight track jacket for rest breaks.',
      tip: 'Choose shoes and clothes for the activity, with easy fastenings and room to move.',
      query: 'boys kids red tee navy training shorts sporty outfit'
    },
    {
      id: 'boys-preppy', audience: 'Boys', title: 'The school-day edit', style: 'Preppy', occasion: 'School', colors: ['navy', 'cream', 'brown'], photoVariant: 0,
      description: 'A soft polo, comfortable trousers, and a simple everyday finish.',
      pieces: ['Navy-and-white striped polo', 'Cream pull-on chinos', 'Brown or navy comfortable shoes', 'Practical school backpack'],
      warm: 'Try lightweight chinos or school-appropriate cotton shorts.',
      layer: 'Add a soft navy cardigan or cotton sweater.',
      tip: 'Adapt the colors and shoes to the school dress code.',
      query: 'boys kids striped polo cream chinos preppy school outfit'
    },
    {
      id: 'boys-denim', audience: 'Boys', title: 'Blue-sky plans', style: 'Relaxed denim', occasion: 'Weekend', colors: ['white', 'blue', 'green'], photoVariant: 1, sourceTheme: 'Throwback Kid',
      description: 'A vintage-inspired children’s tee-and-denim idea, adapted from the Throwback Kid forecast.',
      pieces: ['Retro-style cotton graphic T-shirt', 'Relaxed blue jeans', 'Green or white canvas sneakers', 'Canvas backpack and a cap'],
      warm: 'Swap full-length jeans for comfortable denim shorts.',
      layer: 'Add a lightweight denim shirt in a contrasting wash.',
      tip: 'Keep hems clear of the ground and let him choose the graphic or accent color.',
      query: 'boys kids retro graphic tee relaxed jeans canvas sneakers outfit'
    }
  ];

  function pinterestUrl(query) {
    return 'https://www.pinterest.com/search/pins/?q=' + encodeURIComponent(query);
  }

  function themeReportUrl(theme) {
    return 'https://business.pinterest.com/pinterest-predicts/2026/' + String(theme).toLowerCase().replace(/\s+/g, '-') + '/';
  }

  function filterLooks(items, options) {
    const filters = options || {};
    const term = String(filters.search || '').trim().toLocaleLowerCase();
    const saved = new Set(Array.isArray(filters.savedIds) ? filters.savedIds : []);
    return items.filter(function (look) {
      const searchable = [look.title, look.audience, look.style, look.occasion, look.description, look.sourceTheme || ''].concat(look.pieces, look.colors).join(' ').toLocaleLowerCase();
      return (!filters.audience || filters.audience === 'All' || look.audience === filters.audience)
        && (!filters.style || filters.style === 'All' || look.style === filters.style)
        && (!filters.occasion || filters.occasion === 'All' || look.occasion === filters.occasion)
        && (!filters.savedOnly || saved.has(look.id))
        && (!term || searchable.includes(term));
    });
  }

  function toggleSaved(ids, id) {
    const next = new Set(Array.isArray(ids) ? ids : []);
    if (next.has(id)) next.delete(id);
    else if (looks.some(function (look) { return look.id === id; })) next.add(id);
    return Array.from(next);
  }

  function interleaveLooks(items) {
    const audiences = AUDIENCES.concat(Array.from(new Set(items.map(function (look) { return look.audience; }))).filter(function (audience) { return !AUDIENCES.includes(audience); }));
    const groups = audiences.map(function (audience) { return items.filter(function (look) { return look.audience === audience; }); });
    const result = [];
    for (let index = 0; result.length < items.length; index += 1) {
      groups.forEach(function (group) { if (group[index]) result.push(group[index]); });
    }
    return result;
  }

  function paginateLooks(items, limit) {
    const count = Number.isFinite(Number(limit)) ? Math.max(0, Math.floor(Number(limit))) : 8;
    const visible = items.slice(0, count);
    return { items: visible, total: items.length, visibleCount: visible.length, hasMore: visible.length < items.length };
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char];
    });
  }

  const api = { looks: looks, audiences: AUDIENCES, styles: STYLES, filterLooks: filterLooks, toggleSaved: toggleSaved, pinterestUrl: pinterestUrl, themeReportUrl: themeReportUrl, interleaveLooks: interleaveLooks, paginateLooks: paginateLooks };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (scope) scope.DaywearInspiration = api;
  if (typeof document === 'undefined') return;

  function init() {
    const root = document.getElementById('inspiration-root');
    if (!root || root.dataset.inspirationReady) return;
    root.dataset.inspirationReady = 'true';
    const storageKey = 'daywear-inspiration-saved-v1';
    let savedIds = [];
    let storageAvailable = true;
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');
      if (Array.isArray(stored)) savedIds = Array.from(new Set(stored.filter(function (id) { return looks.some(function (look) { return look.id === id; }); })));
    } catch (_) { storageAvailable = false; }
    const state = { audience: 'All', style: 'All', occasion: 'All', search: '', savedOnly: false, visibleLimit: 8 };
    let currentLook = null;
    let dialogOpener = null;

    function options(values, first) {
      return '<option value="All">' + escapeHtml(first) + '</option>' + values.map(function (value) { return '<option>' + escapeHtml(value) + '</option>'; }).join('');
    }

    root.innerHTML = `
      <div class="inspo-source"><span aria-hidden="true">↗</span> Curated outfit ideas · Pinterest search links</div>
      <div class="inspo-controls">
        <div class="inspo-audiences" role="group" aria-label="Browse outfit ideas by audience">
          ${['All'].concat(AUDIENCES).map(function (audience) { return `<button type="button" data-inspo-audience="${audience}" aria-pressed="${audience === 'All'}">${audience === 'All' ? 'Everyone' : audience}</button>`; }).join('')}
        </div>
        <button class="inspo-board" id="inspiration-board" type="button" aria-pressed="false"><span aria-hidden="true">♡</span> My inspiration board <span id="inspiration-saved-count">${savedIds.length}</span></button>
      </div>
      <div class="inspo-refine">
        <label class="inspo-search-label"><span class="inspo-sr-only">Search outfit ideas</span><span aria-hidden="true">⌕</span><input type="search" id="inspiration-search" placeholder="Try linen, sneakers, school…" autocomplete="off"></label>
        <label><span class="inspo-sr-only">Filter by style</span><select id="inspiration-style">${options(STYLES, 'All styles')}</select></label>
        <label><span class="inspo-sr-only">Filter by occasion</span><select id="inspiration-occasion">${options(['Casual', 'Weekend', 'Work', 'Active', 'Family outing', 'School'], 'All occasions')}</select></label>
      </div>
      <div class="inspo-results-line"><p id="inspiration-result-count" role="status" aria-live="polite"></p><p>Ideas to adapt, not rules to follow.</p></div>
      <div class="inspo-grid" id="inspiration-grid"></div>
      <div class="inspo-load-more"><button type="button" id="inspiration-load-more" aria-controls="inspiration-grid" hidden>Load more outfit ideas ↓</button></div>
      <p class="inspo-footnote">AI-generated illustrative style references; exact pieces may differ from the photos. Formulas marked with a report theme are our adaptations of Pinterest’s 2026 annual forecast, not live trend rankings. Pinterest links open searches on its own site.</p>
      <p class="inspo-storage-note" id="inspiration-storage-status" role="status">${storageAvailable ? 'Your inspiration board is saved in this browser.' : 'Browser storage is unavailable. Your board will last for this visit only.'}</p>
      <dialog class="inspo-dialog" id="inspiration-dialog" aria-labelledby="inspiration-detail-title"><div id="inspiration-detail"></div></dialog>
    `;

    const grid = root.querySelector('#inspiration-grid');
    const dialog = root.querySelector('#inspiration-dialog');
    const detail = root.querySelector('#inspiration-detail');
    const resultCount = root.querySelector('#inspiration-result-count');
    const board = root.querySelector('#inspiration-board');
    const storageStatus = root.querySelector('#inspiration-storage-status');

    function photoStyle(look) {
      return '--inspo-x:' + (AUDIENCES.indexOf(look.audience) * 100 / 3) + '%;--inspo-y:' + (look.photoVariant * 100) + '%;--inspo-size:400% ' + (look.photoVariant === 0 ? '217.4%' : '185.2%');
    }

    function swatches(look) {
      return '<div class="inspo-swatches" aria-label="Palette: ' + look.colors.map(escapeHtml).join(', ') + '">' + look.colors.map(function (color) {
        return '<span style="--swatch:' + palette[color] + '" title="' + escapeHtml(color) + '"></span>';
      }).join('') + '</div>';
    }

    function card(look, index) {
      const saved = savedIds.includes(look.id);
      return `<article class="inspo-card">
        <div class="inspo-photo-wrap">
          <button type="button" class="inspo-photo" style="${photoStyle(look)}" data-inspo-open="${look.id}" aria-label="View outfit formula: ${escapeHtml(look.title)}"><span class="inspo-image-label">AI-generated style reference</span></button>
          <span class="inspo-audience-label">${look.audience}${look.audience === 'Girls' || look.audience === 'Boys' ? ' · Youth' : ''}</span>
          <button type="button" class="inspo-save${saved ? ' is-saved' : ''}" data-inspo-save="${look.id}" aria-pressed="${saved}" aria-label="${saved ? 'Remove' : 'Save'} ${escapeHtml(look.title)}${saved ? ' from' : ' to'} inspiration board">${saved ? '♥' : '♡'}</button>
        </div>
        <div class="inspo-card-meta"><span>${escapeHtml(look.style)}</span>${swatches(look)}</div>
        <h3><button type="button" data-inspo-open="${look.id}">${escapeHtml(look.title)} <span aria-hidden="true">↗</span></button></h3>
        <p class="inspo-card-formula">${escapeHtml(look.pieces.slice(0, 3).join(' + '))}</p>
        ${look.sourceTheme ? '<p class="inspo-theme-label">2026 report · ' + escapeHtml(look.sourceTheme) + '</p>' : ''}
        <div class="inspo-card-bottom"><span>${escapeHtml(look.occasion)}</span><span class="inspo-look-number">EDIT ${String(looks.indexOf(look) + 1).padStart(2, '0')}</span></div>
      </article>`;
    }

    function render() {
      const matches = filterLooks(looks, Object.assign({}, state, { savedIds: savedIds }));
      const ordered = state.audience === 'All' ? interleaveLooks(matches) : matches;
      const page = paginateLooks(ordered, state.savedOnly ? ordered.length : state.visibleLimit);
      grid.innerHTML = page.total ? page.items.map(card).join('') : `<div class="inspo-empty"><span aria-hidden="true">✳</span><h3>${state.savedOnly && savedIds.length === 0 ? 'Start a board that feels like you.' : 'A fresh search might do it.'}</h3><p>${state.savedOnly && savedIds.length === 0 ? 'Tap the heart on a look to keep its outfit formula here.' : 'Try a different audience, style, occasion, or search term.'}</p><button type="button" data-inspo-reset>Explore all outfit ideas ↗</button></div>`;
      resultCount.textContent = 'Showing ' + page.visibleCount + ' of ' + page.total + (page.total === 1 ? ' outfit idea' : ' outfit ideas') + (state.savedOnly ? ' on your board' : '');
      const loadMore = root.querySelector('#inspiration-load-more');
      loadMore.hidden = !page.hasMore;
      loadMore.textContent = 'Load ' + Math.min(8, page.total - page.visibleCount) + ' more outfit ideas ↓';
      root.querySelector('#inspiration-saved-count').textContent = savedIds.length;
      board.setAttribute('aria-pressed', String(state.savedOnly));
      root.querySelectorAll('[data-inspo-audience]').forEach(function (button) { button.setAttribute('aria-pressed', String(button.dataset.inspoAudience === state.audience)); });
    }

    function persist() {
      try {
        localStorage.setItem(storageKey, JSON.stringify(savedIds));
        storageAvailable = true;
        storageStatus.textContent = 'Your inspiration board is saved in this browser.';
      } catch (_) {
        storageAvailable = false;
        storageStatus.textContent = 'Browser storage is unavailable. Your board will last for this visit only.';
      }
    }

    function renderDetail(look) {
      const saved = savedIds.includes(look.id);
      detail.innerHTML = `<div class="inspo-dialog-top"><span class="eyebrow">${escapeHtml(look.audience)}${look.audience === 'Girls' || look.audience === 'Boys' ? ' · YOUTH STYLING' : ' · THE OUTFIT FORMULA'}</span><button type="button" class="inspo-close" data-inspo-close aria-label="Close outfit details">×</button></div>
        <div class="inspo-detail-grid"><div><div class="inspo-detail-photo" style="${photoStyle(look)}" role="img" aria-label="AI-generated ${escapeHtml(look.audience.toLowerCase())} style reference"></div><p class="inspo-image-credit">AI-generated style reference · Original Daywear artwork created for this prototype. The image is not a Pinterest pin and may not show these exact pieces.</p>${look.sourceTheme ? '<div class="inspo-theme-source"><strong>' + escapeHtml(look.sourceTheme) + ' · Pinterest Predicts 2026</strong><p>Our outfit adaptation of an annual forecast theme. This source confirms the theme, not the popularity or effectiveness of this exact outfit.</p><a href="' + themeReportUrl(look.sourceTheme) + '" target="_blank" rel="noopener noreferrer">Read the original forecast ↗<span class="inspo-sr-only"> (opens in a new tab)</span></a></div>' : ''}</div>
        <div class="inspo-detail-copy"><p class="inspo-detail-kicker">${escapeHtml(look.style)} <span>·</span> ${escapeHtml(look.occasion)}</p><h2 id="inspiration-detail-title">${escapeHtml(look.title)}</h2><p class="inspo-detail-description">${escapeHtml(look.description)}</p>${swatches(look)}
        <h3>Build the look</h3><ol class="inspo-piece-list">${look.pieces.map(function (piece) { return '<li>' + escapeHtml(piece) + '</li>'; }).join('')}</ol>
        <div class="inspo-wear-note"><p><strong>Warm days</strong>${escapeHtml(look.warm)}</p><p><strong>Add a layer</strong>${escapeHtml(look.layer)}</p></div><p class="inspo-style-tip"><span aria-hidden="true">✳</span>${escapeHtml(look.tip)}</p>
        <div class="inspo-detail-actions"><a class="inspo-pinterest" href="${pinterestUrl(look.query)}" target="_blank" rel="noopener noreferrer">Find similar ideas on Pinterest <span aria-hidden="true">↗</span><span class="inspo-sr-only"> (opens in a new tab)</span></a><button type="button" class="inspo-detail-save" data-inspo-save="${look.id}" aria-pressed="${saved}">${saved ? '♥ Saved to my board' : '♡ Save to my board'}</button></div><p class="inspo-link-note">Opens a Pinterest search. Search results and availability can vary.</p></div></div>`;
    }

    function closeDialog() {
      dialog.close();
    }

    root.addEventListener('click', function (event) {
      const button = event.target.closest('button');
      if (!button || !root.contains(button)) return;
      if (button.hasAttribute('data-inspo-audience')) {
        state.audience = button.dataset.inspoAudience;
        state.visibleLimit = 8;
        render();
      } else if (button.id === 'inspiration-board') {
        state.savedOnly = !state.savedOnly;
        state.visibleLimit = 8;
        render();
      } else if (button.id === 'inspiration-load-more') {
        const previousCount = grid.querySelectorAll('.inspo-card').length;
        state.visibleLimit += 8;
        render();
        const nextCard = grid.querySelectorAll('.inspo-card')[previousCount];
        if (nextCard) nextCard.querySelector('[data-inspo-open]').focus();
      } else if (button.hasAttribute('data-inspo-save')) {
        const id = button.dataset.inspoSave;
        const inDialog = dialog.contains(button);
        savedIds = toggleSaved(savedIds, id);
        persist();
        render();
        if (currentLook && dialog.open) {
          renderDetail(currentLook);
          if (inDialog) detail.querySelector('[data-inspo-save]').focus();
        } else {
          const replacement = grid.querySelector('[data-inspo-save="' + id + '"]');
          if (replacement) replacement.focus();
          else board.focus();
        }
        storageStatus.textContent = (savedIds.includes(id) ? 'Look saved to your inspiration board. ' : 'Look removed from your inspiration board. ') + (storageAvailable ? 'Saved in this browser.' : 'Available for this visit only.');
      } else if (button.hasAttribute('data-inspo-open')) {
        currentLook = looks.find(function (look) { return look.id === button.dataset.inspoOpen; });
        if (!currentLook) return;
        dialogOpener = button;
        renderDetail(currentLook);
        dialog.showModal();
        detail.querySelector('[data-inspo-close]').focus();
      } else if (button.hasAttribute('data-inspo-close')) {
        closeDialog();
      } else if (button.hasAttribute('data-inspo-reset')) {
        Object.assign(state, { audience: 'All', style: 'All', occasion: 'All', search: '', savedOnly: false, visibleLimit: 8 });
        root.querySelector('#inspiration-search').value = '';
        root.querySelector('#inspiration-style').value = 'All';
        root.querySelector('#inspiration-occasion').value = 'All';
        render();
        root.querySelector('[data-inspo-audience="All"]').focus();
      }
    });
    root.querySelector('#inspiration-search').addEventListener('input', function (event) { state.search = event.target.value; state.visibleLimit = 8; render(); });
    root.querySelector('#inspiration-style').addEventListener('change', function (event) { state.style = event.target.value; state.visibleLimit = 8; render(); });
    root.querySelector('#inspiration-occasion').addEventListener('change', function (event) { state.occasion = event.target.value; state.visibleLimit = 8; render(); });
    dialog.addEventListener('click', function (event) {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeDialog();
    });
    dialog.addEventListener('close', function () {
      if (dialogOpener && dialogOpener.isConnected) dialogOpener.focus();
      else if (currentLook) {
        const replacement = grid.querySelector('[data-inspo-open="' + currentLook.id + '"]');
        if (replacement) replacement.focus();
        else board.focus();
      }
      currentLook = null;
    });
    render();
  }

  api.init = init;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})(typeof window !== 'undefined' ? window : null);
