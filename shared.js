// Cute Things by Eca — shared data + tweaks + partials

const PRODUCTS = [
  { slug:'arca-tote',        n:1,  cat:'bags',    name:'The Arca Tote',     id:'Tas jinjing kulit',     price:890000,  old:null,    badge:'new',  swatches:['#5a3a22','#1b1612','#8a6d35'], label:'COGNAC FULL-GRAIN', desc:'Our signature tote. Hand-cut from a single full-grain hide, saddle-stitched edges, solid brass hardware.', idDesc:'Tas andalan kami. Dipotong dari satu lembar kulit utuh.' },
  { slug:'lindi-sling',      n:2,  cat:'slings',  name:'Lindi Sling',       id:'Selempang mini',        price:425000,  old:null,    badge:null,   swatches:['#4a2d1a','#1b1612'],           label:'SADDLE TAN',        desc:'A small companion for long days — fits phone, wallet, and a lipstick.', idDesc:'Teman kecil untuk hari panjang.' },
  { slug:'padu-bifold',      n:3,  cat:'wallets', name:'Padu Bifold',       id:'Dompet lipat',          price:180000,  old:220000,  badge:'low',  swatches:['#1b1612','#5a3a22','#c9a25a'], label:'ESPRESSO',          desc:'Six cards, two slip pockets, one cash fold. No zips, no fuss.', idDesc:'Enam kartu, dua kantong, satu lipatan uang.' },
  { slug:'ratna-shoulder',   n:4,  cat:'bags',    name:'Ratna Shoulder',    id:'Tas bahu',              price:1050000, old:null,    badge:'new',  swatches:['#2a1a10','#c9a25a'],           label:'DEEP BROWN',        desc:'Soft, structured shoulder bag with adjustable strap and interior pocket.', idDesc:'Tas bahu dengan tali yang bisa disetel.' },
  { slug:'garis-belt',       n:5,  cat:'belts',   name:'Garis Belt 32mm',   id:'Sabuk klasik',          price:220000,  old:null,    badge:null,   swatches:['#1b1612','#5a3a22'],           label:'BLACK / BRASS',     desc:'Classic 32mm belt with solid brass buckle. Ages into a deep patina.', idDesc:'Sabuk 32mm dengan gesper kuningan.' },
  { slug:'noir-loafer',      n:6,  cat:'shoes',   name:'Noir Loafer',       id:'Sepatu kulit',          price:780000,  old:null,    badge:'new',  swatches:['#1b1612','#3a2418'],           label:'CLASSIC BLACK',     desc:'Hand-lasted leather loafer on a stitched leather sole.', idDesc:'Sepatu kulit dengan sol kulit.' },
  { slug:'cinta-bucket',     n:7,  cat:'bags',    name:'Cinta Mini Bucket', id:'Tas bucket',            price:620000,  old:null,    badge:null,   swatches:['#8a6d35','#1b1612','#c9a25a'], label:'HONEY',             desc:'Drawstring bucket bag, the perfect weekend size.', idDesc:'Tas bucket dengan tali serut.' },
  { slug:'kecil-cardholder', n:8,  cat:'wallets', name:'Kecil Cardholder',  id:'Tempat kartu',          price:110000,  old:null,    badge:null,   swatches:['#1b1612','#5a3a22','#c9a25a'], label:'MINIMAL SERIES',    desc:'Four-slot cardholder, slim enough for a front pocket.', idDesc:'Tempat kartu empat slot.' },
  { slug:'alun-crossbody',   n:9,  cat:'slings',  name:'Alun Crossbody',    id:'Selempang serbaguna',   price:540000,  old:null,    badge:null,   swatches:['#3a2418','#c9a25a'],           label:'CHESTNUT',          desc:'Versatile crossbody. Office to dinner without changing bags.', idDesc:'Selempang serbaguna dari kantor ke makan malam.' },
  { slug:'senja-tote-xl',    n:10, cat:'bags',    name:'Senja Tote XL',     id:'Tas kerja',             price:980000,  old:null,    badge:null,   swatches:['#1b1612','#5a3a22'],           label:'NOIR',              desc:'Laptop-sized work tote with reinforced base.', idDesc:'Tas kerja ukuran laptop.' },
  { slug:'emas-western',     n:11, cat:'belts',   name:'Emas Western Belt', id:'Sabuk gesper kuningan', price:280000,  old:320000,  badge:'low',  swatches:['#5a3a22','#1b1612'],           label:'WHISKY',            desc:'Western-style belt with an oversized brass buckle.', idDesc:'Sabuk gaya western dengan gesper besar.' },
  { slug:'bumi-day',         n:12, cat:'bags',    name:'Bumi Day Bag',      id:'Tas harian',            price:750000,  old:null,    badge:null,   swatches:['#8a6d35','#1b1612'],           label:'CAMEL',             desc:'A roomy day bag that goes from coffee run to client meeting.', idDesc:'Tas harian untuk segala suasana.' },
  { slug:'puan-long-wallet', n:13, cat:'wallets', name:'Puan Long Wallet',  id:'Dompet panjang',        price:340000,  old:null,    badge:'new',  swatches:['#1b1612','#c9a25a'],           label:'CLUTCH STYLE',      desc:'Clutch-style long wallet with full bill compartment.', idDesc:'Dompet panjang gaya clutch.' },
  { slug:'rasa-mule',        n:14, cat:'shoes',   name:'Rasa Mule',         id:'Sepatu mule',           price:690000,  old:null,    badge:null,   swatches:['#5a3a22','#8a6d35'],           label:'TERRACOTTA',        desc:'Backless leather mule on a stacked heel.', idDesc:'Sepatu mule dengan hak bertumpuk.' },
];

const CAT_LABELS = {
  bags:    { en:'Bags',    id:'Tas' },
  wallets: { en:'Wallets', id:'Dompet' },
  slings:  { en:'Slings',  id:'Selempang' },
  belts:   { en:'Belts',   id:'Sabuk' },
  shoes:   { en:'Shoes',   id:'Sepatu' },
};

const formatIDR = n => 'Rp ' + n.toLocaleString('id-ID');

function waIcon(){ return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0012.04 2zm4.48 12.02c-.25-.12-1.45-.72-1.68-.8-.22-.08-.39-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.28.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.46-1.36-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.28.37-.42.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01a.92.92 0 00-.66.31c-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1.01 2.54.12.16 1.74 2.65 4.21 3.72.59.25 1.05.4 1.4.52.59.18 1.13.16 1.55.1.47-.07 1.45-.59 1.66-1.17.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28z"/></svg>`; }
function ttIcon(){ return `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005.8 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.84-.1z"/></svg>`; }

function navHTML(current){
  const is = k => current===k ? ' aria-current="page"' : '';
  return `
  <div class="ticker" aria-hidden="true"><div class="ticker-track">
    <span>✦ 100% Full-grain Leather</span>
    <span>✦ Handmade in Indonesia <b>—</b> <i>Dibuat dengan tangan</i></span>
    <span>✦ Same Tanneries Used by Leading Houses</span>
    <span>✦ Chat on WhatsApp for Custom Orders</span>
    <span>✦ Free Care Kit with Every Bag</span>
    <span>✦ 100% Full-grain Leather</span>
    <span>✦ Handmade in Indonesia <b>—</b> <i>Dibuat dengan tangan</i></span>
    <span>✦ Same Tanneries Used by Leading Houses</span>
    <span>✦ Chat on WhatsApp for Custom Orders</span>
    <span>✦ Free Care Kit with Every Bag</span>
  </div></div>
  <nav class="nav" data-screen-label="Nav"><div class="wrap nav-inner">
    <div class="nav-left">
      <a class="nav-link"${is('shop')} href="Catalog.html">Shop</a>
      <a class="nav-link"${is('home')} href="Store.html">Home</a>
      <a class="nav-link"${is('about')} href="About.html">About</a>
      <a class="nav-link"${is('care')} href="Care.html">Care</a>
    </div>
    <a href="Store.html" class="wordmark">
      <span>Cute Things <span class="amp">&amp;</span> by Eca</span>
      <span class="sub">Leather Atelier · Indonesia · Est. 2019</span>
    </a>
    <div class="nav-right">
      <span class="lang-pill"><b>EN</b><span>/</span><span>ID</span></span>
      <a href="#wa" class="btn btn-primary nav-cta">${waIcon()} Chat to order</a>
    </div>
  </div></nav>`;
}

function footerHTML(){
  return `
  <footer class="footer" data-screen-label="Footer"><div class="wrap">
    <div class="foot-grid">
      <div class="foot foot-brand">
        <div class="wordmark"><span>Cute Things <span class="amp">&amp;</span> by Eca</span><span class="sub">Leather Atelier · Indonesia · Est. 2019</span></div>
        <p>A small atelier in Bandung making one-of-a-kind leather goods by hand — for women who know the difference.</p>
      </div>
      <div class="foot"><h4>Shop</h4><ul>
        <li><a href="Catalog.html?cat=bags">Bags · Tas</a></li>
        <li><a href="Catalog.html?cat=wallets">Wallets · Dompet</a></li>
        <li><a href="Catalog.html?cat=slings">Slings · Selempang</a></li>
        <li><a href="Catalog.html?cat=belts">Belts · Sabuk</a></li>
        <li><a href="Catalog.html?cat=shoes">Shoes · Sepatu</a></li>
      </ul></div>
      <div class="foot"><h4>Atelier</h4><ul>
        <li><a href="About.html">Our Story</a></li>
        <li><a href="Care.html">Materials &amp; Care</a></li>
        <li><a href="About.html#custom">Custom Orders</a></li>
        <li><a href="About.html#wholesale">Wholesale</a></li>
        <li><a href="Care.html#repair">Repair Program</a></li>
      </ul></div>
      <div class="foot"><h4>Chat with us</h4><ul>
        <li><a href="#wa">WhatsApp · +62 812-XXXX</a></li>
        <li><a href="#tiktok">TikTok · @cutethingsbyeca</a></li>
        <li><a href="#">Instagram · @ctba.leather</a></li>
        <li><a href="About.html">hello@cutethingsbyeca.id</a></li>
        <li><a href="About.html">Jl. Dago 142, Bandung</a></li>
      </ul></div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 Cute Things by Eca · All rights reserved.</span>
      <span>Made with ✦ in Bandung</span>
    </div>
  </div></footer>
  <a href="#wa" class="sticky-wa"><span class="btn btn-primary">${waIcon()} Chat to order</span></a>`;
}

function tweaksHTML(){
  return `
  <div class="tweaks-panel" id="tweaks">
    <div class="tweaks-head"><span class="title">Tweaks</span><span class="close" onclick="hideTweaks()">✕</span></div>
    <div class="grp"><h5>Palette</h5>
      <div class="pal-label">Dark · Gelap</div>
      <div class="swatches" data-key="palette">
        <div class="sw-big" data-val="espresso" style="background:linear-gradient(135deg,#14100c 0 55%,#c9a25a 55%);"></div>
        <div class="sw-big" data-val="ink"      style="background:linear-gradient(135deg,#0e0f12 0 55%,#d7b66a 55%);"></div>
        <div class="sw-big" data-val="cognac"   style="background:linear-gradient(135deg,#1a120d 0 55%,#e0b070 55%);"></div>
        <div class="sw-big" data-val="forest"   style="background:linear-gradient(135deg,#0f1612 0 55%,#c9a25a 55%);"></div>
        <div class="sw-big" data-val="wine"     style="background:linear-gradient(135deg,#17090c 0 55%,#d9a866 55%);"></div>
        <div class="sw-big" data-val="midnight" style="background:linear-gradient(135deg,#0a1220 0 55%,#d4ae5a 55%);"></div>
        <div class="sw-big" data-val="obsidian" style="background:linear-gradient(135deg,#0a0a0a 0 55%,#e5c07a 55%);"></div>
      </div>
      <div class="pal-label">Light · Terang</div>
      <div class="swatches" data-key="palette">
        <div class="sw-big" data-val="ivory" style="background:linear-gradient(135deg,#f5efe3 0 55%,#8a6d35 55%);"></div>
        <div class="sw-big" data-val="sand"  style="background:linear-gradient(135deg,#efe4cf 0 55%,#a6732d 55%);"></div>
        <div class="sw-big" data-val="bone"  style="background:linear-gradient(135deg,#f4f0ea 0 55%,#2e2924 55%);"></div>
        <div class="sw-big" data-val="blush" style="background:linear-gradient(135deg,#f6ebe4 0 55%,#9a4e32 55%);"></div>
        <div class="sw-big" data-val="sage"  style="background:linear-gradient(135deg,#edeee3 0 55%,#5c6a3a 55%);"></div>
      </div>
    </div>
    <div class="grp"><h5>Type Pairing</h5>
      <div class="opts" data-key="typePair">
        <button class="opt" data-val="cormorant_inter">Cormorant / Inter</button>
        <button class="opt" data-val="fraunces_manrope">Fraunces / Manrope</button>
        <button class="opt" data-val="playfair_inter">Playfair / Inter</button>
      </div>
    </div>
    <div class="grp"><h5>CTA Style</h5>
      <div class="opts" data-key="ctaStyle">
        <button class="opt" data-val="dual_full">Dual · WA + TikTok</button>
        <button class="opt" data-val="primary_only">WhatsApp only</button>
        <button class="opt" data-val="icons_compact">Icon + Text</button>
      </div>
    </div>
  </div>`;
}

// Product card
function cardHTML(p){
  const num = String(p.n).padStart(2,'0');
  const badge = p.badge==='new' ? `<span class="card-badge new">New · Baru</span>`
              : p.badge==='low' ? `<span class="card-badge low">Few left · Terbatas</span>` : '';
  return `
    <a href="Product.html?slug=${p.slug}" class="card" data-cat="${p.cat}">
      <div class="card-media">
        ${badge}
        <button class="wishlist" onclick="toggleWish(event,this)" aria-label="Save"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s-7-4.35-9.5-9.09C.5 7.8 3.5 4 7.5 4c2 0 3.5 1 4.5 2.5C13 5 14.5 4 16.5 4c4 0 7 3.8 5 7.91C19 16.65 12 21 12 21z"/></svg></button>
        <div class="ph"><span class="ph-label">${num} — ${p.label}</span><span class="ph-code">№ ${num} / 14</span></div>
      </div>
      <div class="card-info">
        <span class="card-cat">${CAT_LABELS[p.cat].en}</span>
        <span class="card-name">${p.name}<em>${p.id}</em></span>
        <div class="card-price-row">
          <div><span class="card-price">${formatIDR(p.price)}</span>${p.old?`<span class="card-old" style="margin-left:8px;">${formatIDR(p.old)}</span>`:''}</div>
          <div class="card-swatches">${p.swatches.map(c=>`<span class="sw" style="background:${c};"></span>`).join('')}</div>
        </div>
        <div class="card-ctas">
          <span class="btn btn-primary">${waIcon()} <span>Chat · WA</span></span>
          <span class="btn btn-dark">${ttIcon()} <span>TikTok</span></span>
        </div>
      </div>
    </a>`;
}
function toggleWish(e,el){ e.preventDefault(); e.stopPropagation(); el.classList.toggle('active'); }

// Tweaks
const LIGHT_PALETTES = new Set(['ivory','sand','bone','blush','sage']);
let CURRENT = {};
function applyTweaks(t){
  const mode = LIGHT_PALETTES.has(t.palette) ? 'light' : 'dark';
  t.mode = mode;
  if(t.palette)   document.documentElement.setAttribute('data-palette', t.palette);
  if(t.typePair)  document.documentElement.setAttribute('data-type', t.typePair);
  if(t.ctaStyle)  document.documentElement.setAttribute('data-cta', t.ctaStyle);
  document.documentElement.setAttribute('data-mode', mode);
  document.querySelectorAll('.tweaks-panel [data-key]').forEach(grp=>{
    const key = grp.dataset.key;
    grp.querySelectorAll('[data-val]').forEach(b=>{
      b.classList.toggle('active', b.dataset.val === t[key]);
    });
  });
}
function setTweak(key,val){
  CURRENT[key]=val;
  applyTweaks(CURRENT);
  try{ window.parent.postMessage({type:'__edit_mode_set_keys', edits: CURRENT}, '*'); }catch(e){}
}
function bindTweaks(){
  document.querySelectorAll('.tweaks-panel [data-key]').forEach(grp=>{
    const key = grp.dataset.key;
    grp.querySelectorAll('[data-val]').forEach(b=>{
      b.addEventListener('click', ()=> setTweak(key, b.dataset.val));
    });
  });
}
function showTweaks(){ document.getElementById('tweaks')?.classList.add('open'); }
function hideTweaks(){ document.getElementById('tweaks')?.classList.remove('open'); }

function initShared(defaults, current){
  document.getElementById('shared-nav').innerHTML    = navHTML(current);
  document.getElementById('shared-footer').innerHTML = footerHTML();
  document.getElementById('shared-tweaks').innerHTML = tweaksHTML();
  CURRENT = { ...defaults };
  bindTweaks();
  applyTweaks(CURRENT);
  window.addEventListener('message', (e)=>{
    const d=e.data; if(!d||!d.type) return;
    if(d.type==='__activate_edit_mode') showTweaks();
    else if(d.type==='__deactivate_edit_mode') hideTweaks();
  });
  try{ window.parent.postMessage({type:'__edit_mode_available'}, '*'); }catch(e){}
}
