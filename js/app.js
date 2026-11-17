/**
 * KLEE B SHOP (KBS) - Genshin Impact Joki Order & Tracking System
 * WhatsApp: +573159494066
 * TikTok: @Klee.bomb.shop
 * Instagram: @Klee.Bomb.Shop
 */

// Official Pricelist Data from KLEE BOMB SHOP Poster
const DEFAULT_SERVICES = [
  {
    id: 'explore_map',
    name: 'Explore Map',
    icon: 'fa-compass',
    packages: [
      { id: 'exp_mond', name: 'Mondstadt 100%', price: 19000, duration: '1 - 2 Hari' },
      { id: 'exp_liyue', name: 'Liyue 100%', price: 28000, duration: '1 - 2 Hari' },
      { id: 'exp_inazuma', name: 'Inazuma 100%', price: 37000, duration: '2 Hari' },
      { id: 'exp_sumeru', name: 'Sumeru 100%', price: 48000, duration: '2 - 3 Hari' },
      { id: 'exp_fontaine', name: 'Fontaine 100%', price: 52000, duration: '2 - 3 Hari' },
      { id: 'exp_natlan', name: 'Natlan 100%', price: 52000, duration: '2 - 3 Hari' },
      { id: 'exp_nodkrai', name: 'Nodkrai / Sub-Area 100%', price: 45000, duration: '2 Hari' }
    ]
  },
  {
    id: 'culus',
    name: 'Culus The Seven',
    icon: 'fa-eye',
    packages: [
      { id: 'cul_anemo', name: 'Anemoculus All', price: 22000, duration: '1 Hari' },
      { id: 'cul_geo', name: 'Geoculus All', price: 32000, duration: '1 Hari' },
      { id: 'cul_elektro', name: 'Elektroculus All', price: 44000, duration: '1 - 2 Hari' },
      { id: 'cul_dendro', name: 'Dendroculus All', price: 52000, duration: '2 Hari' },
      { id: 'cul_hydro', name: 'Hydroculus All', price: 57000, duration: '2 Hari' },
      { id: 'cul_pyro', name: 'Pyroculus All', price: 57000, duration: '2 Hari' },
      { id: 'cul_luno', name: 'Lunoculus / Lumenstone All', price: 42000, duration: '1 Hari' }
    ]
  },
  {
    id: 'rawat',
    name: 'Rawat Akun',
    icon: 'fa-calendar-check',
    packages: [
      { id: 'rawat_daily', name: 'Daily (1 Hari Harian)', price: 3000, duration: '1 Hari' },
      { id: 'rawat_weekly', name: 'Weekly (1 Minggu Penuh)', price: 25000, duration: '7 Hari' },
      { id: 'rawat_monthly', name: 'Monthly (1 Bulan 30 Hari)', price: 45000, duration: '30 Hari' }
    ]
  },
  {
    id: 'quest',
    name: 'Questing',
    icon: 'fa-scroll',
    packages: [
      { id: 'q_archon', name: 'Archon Quest (1 Bab Penuh)', price: 20000, duration: '3 - 5 Jam' },
      { id: 'q_world', name: 'World Quest', price: 15000, duration: '1 - 2 Jam' },
      { id: 'q_story', name: 'Story Quest Karakter', price: 15000, duration: '1 - 2 Jam' },
      { id: 'q_hangout', name: 'Hangout Event', price: 10000, duration: '1 Jam' },
      { id: 'q_event', name: 'Event Quest (DM Aja / Fleksibel)', price: 0, duration: 'Hubungi WA' }
    ]
  },
  {
    id: 'primogems',
    name: 'Primogems Farming',
    icon: 'fa-gem',
    packages: [
      { id: 'primo_160', name: '160 Primo (1 Pull)', price: 2500, duration: '1 Jam' },
      { id: 'primo_1600', name: '1.600 Primo (10 Pull)', price: 25000, duration: '1 Hari' },
      { id: 'primo_3200', name: '3.200 Primo (20 Pull)', price: 50000, duration: '2 Hari' },
      { id: 'primo_4800', name: '4.800 Primo (30 Pull)', price: 75000, duration: '2 - 3 Hari' },
      { id: 'primo_6400', name: '6.400 Primo (40 Pull)', price: 100000, duration: '3 - 4 Hari' },
      { id: 'primo_8000', name: '8.000 Primo (50 Pull)', price: 120000, duration: '4 - 5 Hari' }
    ]
  },
  {
    id: 'lvl_char',
    name: 'Level Up Karakter',
    icon: 'fa-user-plus',
    packages: [
      { id: 'char_10_50', name: 'Lv 10 - Lv 50', price: 6000, duration: '4 Jam' },
      { id: 'char_50_60', name: 'Lv 50 - Lv 60', price: 8000, duration: '4 Jam' },
      { id: 'char_60_70', name: 'Lv 60 - Lv 70', price: 10000, duration: '6 Jam' },
      { id: 'char_70_80', name: 'Lv 70 - Lv 80', price: 12000, duration: '8 Jam' },
      { id: 'char_80_90', name: 'Lv 80 - Lv 90', price: 14000, duration: '1 Hari' },
      { id: 'char_full', name: 'Lv 10 - Lv 90 (Paket Full)', price: 20000, duration: '1 Hari' }
    ]
  },
  {
    id: 'lvl_weapon',
    name: 'Level Up Weapon',
    icon: 'fa-shield-halved',
    packages: [
      { id: 'wep_10_50', name: 'Lv 10 - Lv 50', price: 6000, duration: '4 Jam' },
      { id: 'wep_50_60', name: 'Lv 50 - Lv 60', price: 8000, duration: '4 Jam' },
      { id: 'wep_60_70', name: 'Lv 60 - Lv 70', price: 10000, duration: '6 Jam' },
      { id: 'wep_70_80', name: 'Lv 70 - Lv 80', price: 11000, duration: '8 Jam' },
      { id: 'wep_80_90', name: 'Lv 80 - Lv 90', price: 13000, duration: '1 Hari' },
      { id: 'wep_full', name: 'Lv 10 - Lv 90 (Paket Full)', price: 48000, duration: '1 Hari' }
    ]
  },
  {
    id: 'build_char',
    name: 'Build Karakter',
    icon: 'fa-fire-flame-curved',
    packages: [
      { id: 'b_arte', name: 'Paket Artefak', price: 55000, duration: '2 Hari' },
      { id: 'b_arte_talent', name: 'Artefak + Talenta', price: 72000, duration: '2 - 3 Hari' },
      { id: 'b_1char', name: '1 Character Full Build', price: 65000, duration: '2 - 3 Hari' }
    ]
  },
  {
    id: 'mancing',
    name: 'Mancing Senjata',
    icon: 'fa-fish',
    packages: [
      { id: 'fish_piparucika', name: 'Piparucika / The Catch R5', price: 20000, duration: '1 Hari' },
      { id: 'fish_garpu', name: 'Garpu Pipa Fontaine R5', price: 25000, duration: '1 Hari' },
      { id: 'fish_bom', name: 'Bom Iwak (End of the Line) R5', price: 15000, duration: '1 Hari' },
      { id: 'fish_full', name: 'Paket Lengkap Mancing', price: 75000, duration: '2 Hari' }
    ]
  },
  {
    id: 'aranara',
    name: 'Aranara Quest',
    icon: 'fa-seedling',
    packages: [
      { id: 'ara_1_5', name: 'Aranara 1 - 5', price: 75000, duration: '1 - 2 Hari' },
      { id: 'ara_76', name: 'Cari 76 Aranara', price: 55000, duration: '1 Hari' },
      { id: 'ara_full', name: 'Full Aranara', price: 100000, duration: '2 - 3 Hari' }
    ]
  },
  {
    id: 'talenta',
    name: 'Level Up Talenta',
    icon: 'fa-book-open-reader',
    packages: [
      { id: 'tal_1_5', name: 'Lv 1 - Lv 5', price: 3000, duration: '2 Jam' },
      { id: 'tal_5_6', name: 'Lv 5 - Lv 6', price: 6000, duration: '3 Jam' },
      { id: 'tal_6_7', name: 'Lv 6 - Lv 7', price: 9000, duration: '4 Jam' },
      { id: 'tal_7_8', name: 'Lv 7 - Lv 8', price: 12000, duration: '6 Jam' },
      { id: 'tal_8_9', name: 'Lv 8 - Lv 9', price: 15000, duration: '8 Jam' },
      { id: 'tal_crown', name: 'Lv 9 - Lv 10 (Crown)', price: 45000, duration: '1 Hari' }
    ]
  },
  {
    id: 'material_custom',
    name: 'Material & Custom',
    icon: 'fa-boxes-packing',
    packages: [
      { id: 'mat_ore_cook', name: 'Material (Ore / Cook / Tanaman / Kayu / Graft)', price: 0, duration: 'DM Aja / WA' },
      { id: 'custom_req', name: 'Request Joki Custom Lainnya', price: 0, duration: 'Fleksibel' }
    ]
  }
];

// Sample Initial Orders
const INITIAL_ORDERS = [
  {
    id: 'KBS-1001',
    customerName: 'Revaldi Pratama',
    whatsapp: '081234567890',
    server: 'Asia',
    uid: '814920182',
    loginType: 'Email HoYoverse',
    accountUser: 'revaldixgenshin@gmail.com',
    accountPass: 'KleeBoomBoomBakudan26',
    serviceCategory: 'eksplorasi',
    serviceOption: 'Natlan (100% Map + Pyroculus)',
    totalPrice: 85000,
    status: 'in_progress',
    isLiveInGame: true,
    need2FA: false,
    twoFactorCode: '',
    worker: 'Penjoki Kazuha',
    progressPercent: 75,
    checklists: [
      { text: 'Unlocking All Natlan Teleport Waypoints', done: true },
      { text: 'Children of Echoes 100% & Pyroculus', done: true },
      { text: 'Scions of the Canopy 100%', done: true },
      { text: 'People of the Springs 100% & Quests', done: false }
    ],
    notes: 'Primogems jangan di-pull ya kak, simpan buat Mavuika.',
    createdAt: '2026-11-16 14:30',
    updatedAt: '2026-11-17 10:15',
    proofImages: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    ],
    review: null
  },
  {
    id: 'KBS-1002',
    customerName: 'Dimas Teyvat',
    whatsapp: '085712345678',
    server: 'Asia',
    uid: '820991823',
    loginType: 'Email HoYoverse',
    accountUser: 'dimas_wanderer@yahoo.com',
    accountPass: 'XiaoAnemoKing#99',
    serviceCategory: 'abyss',
    serviceOption: 'Spiral Abyss Floor 9 - 12 (Full 36 ⭐)',
    totalPrice: 25000,
    status: 'need_2fa',
    isLiveInGame: false,
    need2FA: true,
    twoFactorCode: '',
    worker: 'Penjoki Xiao',
    progressPercent: 20,
    checklists: [
      { text: 'Verifikasi login akun HoYoverse', done: false },
      { text: 'Cek Artefak & Tim Sinergi Abyss', done: false },
      { text: 'Clear Floor 9 - 12 (36 ⭐)', done: false }
    ],
    notes: 'Bisa pakai tim Neuvillette Hypercarry.',
    createdAt: '2026-11-17 08:20',
    updatedAt: '2026-11-17 10:45',
    proofImages: [],
    review: null
  },
  {
    id: 'KBS-1003',
    customerName: 'Sarah V.',
    whatsapp: '089611223344',
    server: 'Asia',
    uid: '805128391',
    loginType: 'Username',
    accountUser: 'sarah_furina',
    accountPass: 'FontaineHydroArchon!',
    serviceCategory: 'rawat',
    serviceOption: '1 Minggu (7 Hari Penuh)',
    totalPrice: 30000,
    status: 'completed',
    isLiveInGame: false,
    need2FA: false,
    twoFactorCode: '821904',
    worker: 'Admin KBS',
    progressPercent: 100,
    checklists: [
      { text: 'Hari 1 - 7 Daily Commission Clear', done: true },
      { text: 'Resin dibelanjakan ke Domain Artifak', done: true }
    ],
    notes: 'Akun sudah beres 7 hari penuh. Terima kasih!',
    createdAt: '2026-11-10 09:00',
    updatedAt: '2026-11-17 09:00',
    proofImages: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
    ],
    review: {
      rating: 5,
      comment: 'Super recommended! Penjokinya ramah, amanah banget primogems utuh. Pasti langganan di Klee B Shop!'
    }
  }
];

// App State
let services = [];
let orders = [];
let currentCategory = null;
let currentSelectedPackage = null;
let isAdminLoggedIn = false;
let currentTrackingOrder = null;
let activeModalOrderId = null;

// Official WhatsApp & QRIS KLEE B SHOP
const ADMIN_WHATSAPP = '573159494066'; 
const QRIS_INFO = {
  merchantName: 'Klee Bomb Shop',
  nmid: 'ID1026552009064',
  imagePath: 'assets/qris-kbs.jpg'
}; 

document.addEventListener('DOMContentLoaded', () => {
  loadServices();
  loadOrders();
  setupPublicTabs();
  initOrderForm();
  setupAdminListeners();

  const params = new URLSearchParams(window.location.search);
  const trackId = params.get('track');
  if (trackId) {
    switchPublicTab('tracking');
    document.getElementById('track-search-input').value = trackId;
    trackOrder(trackId);
  } else if (params.get('admin') === 'true' || window.location.hash === '#admin') {
    openAdminPortal();
  }
});

// ==========================================
// 1. SERVICES & PACKAGES (CUSTOMIZABLE)
// ==========================================
const PRICELIST_VERSION = 'kbs_poster_v3';

function loadServices() {
  const version = localStorage.getItem('kbs_pricelist_ver');
  const stored = localStorage.getItem('kbs_custom_services');
  if (version === PRICELIST_VERSION && stored) {
    try {
      services = JSON.parse(stored);
    } catch (e) {
      services = JSON.parse(JSON.stringify(DEFAULT_SERVICES));
      saveServices();
    }
  } else {
    services = JSON.parse(JSON.stringify(DEFAULT_SERVICES));
    localStorage.setItem('kbs_pricelist_ver', PRICELIST_VERSION);
    saveServices();
  }
}

function saveServices() {
  localStorage.setItem('kbs_custom_services', JSON.stringify(services));
  renderCategoryButtons();
  if (currentCategory) {
    renderPackageOptions(currentCategory);
  }
  renderAdminServiceManager();
}

function resetServicesToDefault() {
  if (confirm('Kembalikan semua daftar paket & harga ke pengaturan standar Klee B Shop?')) {
    services = JSON.parse(JSON.stringify(DEFAULT_SERVICES));
    saveServices();
    showToast('Daftar layanan berhasil di-reset!', 'success');
  }
}

// ==========================================
// 2. ORDERS DATA MANAGEMENT
// ==========================================
function loadOrders() {
  const stored = localStorage.getItem('kbs_genshin_orders');
  if (stored) {
    try {
      orders = JSON.parse(stored);
    } catch (e) {
      orders = JSON.parse(JSON.stringify(INITIAL_ORDERS));
      saveOrders();
    }
  } else {
    orders = JSON.parse(JSON.stringify(INITIAL_ORDERS));
    saveOrders();
  }
}

function saveOrders() {
  localStorage.setItem('kbs_genshin_orders', JSON.stringify(orders));
  if (isAdminLoggedIn) {
    renderAdminTable();
    updateAdminStats();
  }
  if (currentTrackingOrder) {
    const updated = orders.find(o => o.id === currentTrackingOrder.id);
    if (updated) renderTrackingDetail(updated);
  }
}

function resetDemoOrders() {
  if (confirm('Reset semua pesanan ke data demo awal?')) {
    orders = JSON.parse(JSON.stringify(INITIAL_ORDERS));
    saveOrders();
    showToast('Data pesanan berhasil di-reset!', 'success');
  }
}

// ==========================================
// 3. PUBLIC NAVIGATION (HANYA ORDER & TRACKING)
// ==========================================
function setupPublicTabs() {
  document.querySelectorAll('.public-nav-tab').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.dataset.target;
      switchPublicTab(target);
    });
  });
}

function switchPublicTab(targetId) {
  document.getElementById('screen-admin').classList.add('hidden');
  document.getElementById('screen-public').classList.remove('hidden');

  document.querySelectorAll('.public-tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.public-nav-tab').forEach(btn => {
    btn.classList.remove('bg-rose-600', 'text-white', 'font-bold', 'shadow-sm', 'border-rose-500');
    btn.classList.add('text-slate-400', 'font-medium', 'border-transparent');
  });

  const activeContent = document.getElementById(`tab-${targetId}`);
  const activeBtn = document.querySelector(`.public-nav-tab[data-target="${targetId}"]`);

  if (activeContent) activeContent.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-400', 'font-medium', 'border-transparent');
    activeBtn.classList.add('bg-rose-600', 'text-white', 'font-bold', 'shadow-sm', 'border-rose-500');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 4. ORDER FORM & PRICE CALCULATOR
// ==========================================
function initOrderForm() {
  renderCategoryButtons();
  if (services.length > 0) {
    selectCategory(services[0].id);
  }
}

function renderCategoryButtons() {
  const container = document.getElementById('category-selector');
  if (!container) return;

  container.innerHTML = services.map(cat => {
    const isAct = cat.id === currentCategory;
    return `
      <button type="button" onclick="selectCategory('${cat.id}')"
        class="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition border ${
          isAct 
            ? 'border-rose-500 text-rose-300 bg-rose-500/15 shadow-sm shadow-rose-500/20' 
            : 'border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 bg-slate-900/40'
        }">
        <i class="fa-solid ${cat.icon || 'fa-bomb'} text-rose-400"></i>
        <span>${cat.name}</span>
      </button>
    `;
  }).join('');
}

function selectCategory(catId) {
  currentCategory = catId;
  renderCategoryButtons();
  renderPackageOptions(catId);
}

function renderPackageOptions(catId) {
  const category = services.find(s => s.id === catId);
  const container = document.getElementById('package-options-container');
  if (!category || !container) return;

  currentSelectedPackage = category.packages[0] || null;

  container.innerHTML = `
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      ${category.packages.map((pkg, idx) => `
        <div onclick="selectPackageOption('${pkg.id}')" id="pkg-card-${pkg.id}"
          class="kbs-pkg-card p-3.5 ${idx === 0 ? 'active' : ''}">
          <div class="flex justify-between items-start gap-2">
            <span class="font-bold text-slate-100 text-xs leading-relaxed">${pkg.name}</span>
            <span class="font-mono font-bold text-rose-400 text-xs whitespace-nowrap">
              ${pkg.price > 0 ? `Rp ${pkg.price.toLocaleString('id-ID')}` : 'Hubungi WA'}
            </span>
          </div>
          <div class="flex items-center gap-1.5 mt-2 text-[11px] text-slate-400 font-mono">
            <i class="fa-regular fa-clock text-amber-400/80"></i>
            <span>Est: ${pkg.duration || 'Fleksibel'}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Custom Request Field -->
    <div id="custom-price-field" class="hidden mt-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
      <label class="block text-xs font-semibold text-slate-300 mb-1">Tuliskan Request / Budget Spesifik:</label>
      <input type="text" id="input-custom-request" placeholder="Contoh: Farming artifact set Klee / Boss material" class="kbs-input w-full rounded-xl px-3 py-2 text-xs">
    </div>
  `;

  updateOrderSummary();
}

function selectPackageOption(pkgId) {
  const category = services.find(s => s.id === currentCategory);
  if (!category) return;

  const pkg = category.packages.find(p => p.id === pkgId);
  if (!pkg) return;

  currentSelectedPackage = pkg;

  document.querySelectorAll('.kbs-pkg-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById(`pkg-card-${pkgId}`);
  if (card) card.classList.add('active');

  const customField = document.getElementById('custom-price-field');
  if (pkg.price === 0) {
    customField.classList.remove('hidden');
  } else {
    customField.classList.add('hidden');
  }

  updateOrderSummary();
}

function updateOrderSummary() {
  if (!currentSelectedPackage) return;

  const category = services.find(s => s.id === currentCategory);
  const price = currentSelectedPackage.price;

  document.getElementById('summary-category').textContent = category ? category.name : '-';
  document.getElementById('summary-package').textContent = currentSelectedPackage.name;
  document.getElementById('summary-duration').textContent = currentSelectedPackage.duration || 'Fleksibel';
  document.getElementById('summary-total-price').textContent = price > 0 ? `Rp ${price.toLocaleString('id-ID')}` : 'Sesuai Kesepakatan WA';
}

function handleOrderSubmit(e) {
  e.preventDefault();

  const customerName = document.getElementById('form-customer-name').value.trim();
  const whatsapp = document.getElementById('form-whatsapp').value.trim();
  const server = document.getElementById('form-server').value;
  const uid = document.getElementById('form-uid').value.trim();
  const loginType = document.getElementById('form-login-type').value;
  const accountUser = document.getElementById('form-account-user').value.trim();
  const accountPass = document.getElementById('form-account-pass').value;
  const standby2FA = document.getElementById('form-standby-2fa').value;
  const notes = document.getElementById('form-notes').value.trim();
  const termsAgreed = document.getElementById('form-terms').checked;

  if (!termsAgreed) {
    alert('Harap centang persetujuan S&K Joki Klee B Shop terlebih dahulu!');
    return;
  }

  const orderId = `KBS-${Math.floor(1000 + Math.random() * 9000)}`;
  const now = new Date();
  const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  const customReq = document.getElementById('input-custom-request')?.value.trim();
  const packageLabel = customReq ? `${currentSelectedPackage.name} (${customReq})` : currentSelectedPackage.name;

  const newOrder = {
    id: orderId,
    customerName,
    whatsapp,
    server,
    uid,
    loginType,
    accountUser,
    accountPass,
    standby2FA,
    serviceCategory: currentCategory,
    serviceOption: packageLabel,
    totalPrice: currentSelectedPackage.price,
    status: 'pending',
    isLiveInGame: false,
    need2FA: false,
    twoFactorCode: '',
    worker: 'Menunggu Penugasan',
    progressPercent: 0,
    checklists: [
      { text: 'Verifikasi login akun HoYoverse', done: false },
      { text: `Pengerjaan target: ${packageLabel}`, done: false },
      { text: 'Quality check & screenshot bukti akhir', done: false },
      { text: 'Logout akun & konfirmasi ke customer', done: false }
    ],
    notes,
    createdAt: formattedDate,
    updatedAt: formattedDate,
    proofImages: [],
    review: null
  };

  orders.unshift(newOrder);
  saveOrders();

  showOrderSuccessModal(newOrder);
  document.getElementById('joki-order-form').reset();
  selectCategory(services[0].id);
}

function showOrderSuccessModal(order) {
  const modal = document.getElementById('order-success-modal');
  document.getElementById('modal-order-id').textContent = order.id;
  document.getElementById('modal-customer-name').textContent = order.customerName;
  document.getElementById('modal-package-name').textContent = order.serviceOption;
  document.getElementById('modal-total-price').textContent = order.totalPrice > 0 ? `Rp ${order.totalPrice.toLocaleString('id-ID')}` : 'Sesuai Kesepakatan WA';

  const waMsg = encodeURIComponent(
`Halo Admin KLEE B SHOP! 💥🍀
Saya sudah membuat pesanan joki di website dan melakukan pembayaran via QRIS:

No. Resi   : *${order.id}*
Nama       : ${order.customerName}
UID / Serv : ${order.uid} (${order.server})
Paket      : *${order.serviceOption}*
Total Biaya: *${order.totalPrice > 0 ? `Rp ${order.totalPrice.toLocaleString('id-ID')}` : 'Sesuai Kesepakatan'}*
Metode     : *QRIS (Klee Bomb Shop - NMID: ID1026552009064)*

Berikut bukti transfer QRIS saya. Mohon dicek dan dikonfirmasi pengerjaannya ya min. Terima kasih!`
  );

  document.getElementById('modal-btn-wa').href = `https://wa.me/${ADMIN_WHATSAPP}?text=${waMsg}`;
  modal.classList.remove('hidden');
}

function closeSuccessAndTrack() {
  const modal = document.getElementById('order-success-modal');
  const orderId = document.getElementById('modal-order-id').textContent;
  modal.classList.add('hidden');

  switchPublicTab('tracking');
  document.getElementById('track-search-input').value = orderId;
  trackOrder(orderId);
}

// ==========================================
// 5. CUSTOMER TRACKING PORTAL
// ==========================================
function trackOrder(query = null) {
  const input = query || document.getElementById('track-search-input').value.trim();
  if (!input) {
    showToast('Masukkan nomor resi atau UID Anda!', 'error');
    return;
  }

  const clean = input.toUpperCase().replace('#', '');
  const found = orders.find(o => 
    o.id.toUpperCase() === clean || 
    o.id.toUpperCase() === `KBS-${clean}` ||
    o.uid === input ||
    o.whatsapp === input
  );

  const resultContainer = document.getElementById('tracking-result-card');
  const emptyState = document.getElementById('tracking-empty-state');
  const notFoundState = document.getElementById('tracking-not-found');

  emptyState.classList.add('hidden');

  if (found) {
    currentTrackingOrder = found;
    notFoundState.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    renderTrackingDetail(found);
  } else {
    currentTrackingOrder = null;
    resultContainer.classList.add('hidden');
    notFoundState.classList.remove('hidden');
    document.getElementById('searched-query-text').textContent = input;
  }
}

function renderTrackingDetail(order) {
  const statusConfig = {
    pending: { label: 'Menunggu Pembayaran', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/30', step: 1 },
    queue: { label: 'Dalam Antrean Penjoki', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/30', step: 2 },
    need_2fa: { label: 'Butuh Kode 2FA (Verifikasi)', badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50 animate-pulse', step: 3 },
    in_progress: { label: 'Sedang Dikerjakan', badge: 'bg-rose-500/15 text-rose-300 border-rose-500/40', step: 4 },
    completed: { label: 'Pesanan Selesai ✨', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', step: 5 },
    cancelled: { label: 'Dibatalkan', badge: 'bg-slate-800 text-slate-400 border-slate-700', step: 0 }
  };

  const cfg = statusConfig[order.status] || statusConfig.pending;

  document.getElementById('track-order-id').textContent = `#${order.id}`;
  document.getElementById('track-created-at').textContent = order.createdAt;
  
  const statusBadge = document.getElementById('track-status-badge');
  statusBadge.className = `px-3 py-1 rounded-full text-xs font-semibold border ${cfg.badge}`;
  statusBadge.textContent = cfg.label;

  // PENDING PAYMENT QRIS BANNER
  const paymentBanner = document.getElementById('track-payment-banner');
  if (order.status === 'pending') {
    paymentBanner.classList.remove('hidden');
    document.getElementById('track-payment-total').textContent = order.totalPrice > 0 ? `Rp ${order.totalPrice.toLocaleString('id-ID')}` : 'Sesuai Kesepakatan WA';
    const waPayMsg = encodeURIComponent(`Halo Admin Klee B Shop, saya ingin konfirmasi pembayaran QRIS untuk Order #${order.id} sebesar ${order.totalPrice > 0 ? `Rp ${order.totalPrice.toLocaleString('id-ID')}` : 'tagihan joki'}. Berikut bukti transfernya.`);
    document.getElementById('track-btn-confirm-pay').href = `https://wa.me/${ADMIN_WHATSAPP}?text=${waPayMsg}`;
  } else {
    paymentBanner.classList.add('hidden');
  }

  // LIVE IN-GAME ALERT
  const inGameBanner = document.getElementById('track-ingame-banner');
  if (order.isLiveInGame) {
    inGameBanner.className = 'rounded-2xl p-4 bg-rose-950/80 border-2 border-rose-500 pulse-ingame mb-6';
    inGameBanner.innerHTML = `
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-rose-600 flex items-center justify-center shrink-0">
          <i class="fa-solid fa-gamepad text-white text-lg"></i>
        </div>
        <div>
          <h4 class="font-bold text-rose-100 text-sm">PENJOKI SEDANG LOGIN (IN-GAME)</h4>
          <p class="text-xs text-rose-200/90 mt-0.5">Mohon <strong>JANGAN LOGIN</strong> ke game Genshin sekarang agar akun tidak terputus / tabrakan.</p>
        </div>
      </div>
    `;
    inGameBanner.classList.remove('hidden');
  } else if (order.status === 'in_progress') {
    inGameBanner.className = 'rounded-2xl p-3.5 bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 mb-6';
    inGameBanner.innerHTML = `
      <div class="flex items-center gap-3 text-xs">
        <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
          <i class="fa-solid fa-check"></i>
        </div>
        <div>
          <span class="font-bold text-emerald-300">Penjoki Sedang Offline.</span>
          <span class="text-slate-400"> Akun aman dibuka jika Anda ingin cek game.</span>
        </div>
      </div>
    `;
    inGameBanner.classList.remove('hidden');
  } else {
    inGameBanner.classList.add('hidden');
  }

  // 2FA PROMPT
  const prompt2FA = document.getElementById('track-2fa-container');
  if (order.need2FA || order.status === 'need_2fa') {
    prompt2FA.classList.remove('hidden');
    document.getElementById('input-customer-2fa').value = order.twoFactorCode || '';
  } else {
    prompt2FA.classList.add('hidden');
  }

  // Stepper Visual
  renderStepper(cfg.step);

  // Info Details
  document.getElementById('track-pkg-title').textContent = order.serviceOption;
  document.getElementById('track-server-uid').textContent = `${order.server} - UID: ${order.uid}`;
  document.getElementById('track-worker').textContent = order.worker || 'Belum di-assign';
  document.getElementById('track-price').textContent = order.totalPrice > 0 ? `Rp ${order.totalPrice.toLocaleString('id-ID')}` : 'Sesuai Kesepakatan';

  // Progress Bar
  document.getElementById('track-progress-bar').style.width = `${order.progressPercent}%`;
  document.getElementById('track-progress-text').textContent = `${order.progressPercent}%`;

  // Checklist
  const checkListContainer = document.getElementById('track-checklist-container');
  if (order.checklists && order.checklists.length > 0) {
    checkListContainer.innerHTML = order.checklists.map(item => `
      <li class="flex items-center gap-2.5 text-xs ${item.done ? 'text-emerald-400 font-medium' : 'text-slate-400'}">
        <i class="fa-solid ${item.done ? 'fa-circle-check text-emerald-400' : 'fa-circle text-slate-700'} text-[11px]"></i>
        <span class="${item.done ? 'line-through opacity-70' : ''}">${item.text}</span>
      </li>
    `).join('');
  } else {
    checkListContainer.innerHTML = '<li class="text-xs text-slate-500">Belum ada rincian tugas.</li>';
  }

  // Galeri Bukti
  const proofContainer = document.getElementById('track-proof-container');
  const proofEmpty = document.getElementById('track-proof-empty');
  if (order.proofImages && order.proofImages.length > 0) {
    proofEmpty.classList.add('hidden');
    proofContainer.classList.remove('hidden');
    proofContainer.innerHTML = order.proofImages.map(img => `
      <div class="rounded-xl overflow-hidden border border-slate-800 aspect-video cursor-pointer" onclick="openImageModal('${img}')">
        <img src="${img}" alt="Bukti" class="w-full h-full object-cover hover:scale-105 transition">
      </div>
    `).join('');
  } else {
    proofContainer.classList.add('hidden');
    proofEmpty.classList.remove('hidden');
  }

  // Direct WA button
  const waBtn = document.getElementById('track-wa-btn');
  waBtn.href = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(`Halo Admin Klee B Shop, mau menanyakan progress order #${order.id} (${order.serviceOption}).`)}`;
}

function renderStepper(currentStep) {
  const steps = ['Diverifikasi', 'Antrean', '2FA HoYo', 'Pengerjaan', 'Selesai'];
  const container = document.getElementById('track-stepper');
  
  container.innerHTML = steps.map((label, idx) => {
    const stepNum = idx + 1;
    const isDone = stepNum < currentStep;
    const isCurrent = stepNum === currentStep;

    return `
      <div class="flex-1 flex flex-col items-center">
        <div class="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
          isDone ? 'bg-emerald-500 text-slate-950' : isCurrent ? 'bg-rose-500 text-white ring-4 ring-rose-500/25 font-extrabold shadow-md shadow-rose-500/30' : 'bg-slate-800 text-slate-500 border border-slate-700'
        }">
          ${isDone ? '<i class="fa-solid fa-check text-[10px]"></i>' : stepNum}
        </div>
        <span class="text-[10px] mt-1.5 font-medium ${isCurrent ? 'text-rose-400 font-bold' : isDone ? 'text-emerald-400' : 'text-slate-500'}">
          ${label}
        </span>
      </div>
    `;
  }).join('');
}

function submitCustomer2FA() {
  const code = document.getElementById('input-customer-2fa').value.trim();
  if (!code || code.length < 4) {
    showToast('Masukkan kode verifikasi yang valid!', 'error');
    return;
  }

  if (currentTrackingOrder) {
    currentTrackingOrder.twoFactorCode = code;
    currentTrackingOrder.need2FA = false;
    saveOrders();
    showToast('Kode 2FA terkirim ke penjoki!', 'success');
    renderTrackingDetail(currentTrackingOrder);
  }
}

// ==========================================
// 6. HIDDEN ADMIN DASHBOARD
// ==========================================
function openAdminPortal() {
  if (isAdminLoggedIn) {
    showAdminDashboard();
  } else {
    document.getElementById('admin-pin-modal').classList.remove('hidden');
    document.getElementById('admin-pin-input').focus();
  }
}

function verifyAdminPin() {
  const pin = document.getElementById('admin-pin-input').value.trim();
  if (pin === '1234') {
    isAdminLoggedIn = true;
    document.getElementById('admin-pin-modal').classList.add('hidden');
    document.getElementById('admin-pin-input').value = '';
    showAdminDashboard();
    showToast('Selamat datang di Admin Klee B Shop!', 'success');
  } else {
    showToast('PIN salah! (Default: 1234)', 'error');
  }
}

function showAdminDashboard() {
  document.getElementById('screen-public').classList.add('hidden');
  document.getElementById('screen-admin').classList.remove('hidden');
  renderAdminTable();
  updateAdminStats();
  renderAdminServiceManager();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exitAdminDashboard() {
  document.getElementById('screen-admin').classList.add('hidden');
  document.getElementById('screen-public').classList.remove('hidden');
  switchPublicTab('order');
}

function updateAdminStats() {
  document.getElementById('stat-total').textContent = orders.length;
  document.getElementById('stat-progress').textContent = orders.filter(o => o.status === 'in_progress').length;
  document.getElementById('stat-2fa').textContent = orders.filter(o => o.status === 'need_2fa' || o.need2FA).length;
  
  const rev = orders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + (o.totalPrice || 0), 0);
  document.getElementById('stat-revenue').textContent = `Rp ${rev.toLocaleString('id-ID')}`;
}

let adminFilter = 'all';
function filterAdmin(status) {
  adminFilter = status;
  document.querySelectorAll('.admin-filter-pill').forEach(btn => {
    btn.classList.remove('bg-rose-600', 'text-white', 'font-bold');
    btn.classList.add('bg-slate-900', 'text-slate-400', 'font-medium');
  });

  const active = document.querySelector(`.admin-filter-pill[data-filter="${status}"]`);
  if (active) {
    active.classList.add('bg-rose-600', 'text-white', 'font-bold');
    active.classList.remove('bg-slate-900', 'text-slate-400', 'font-medium');
  }

  renderAdminTable();
}

function renderAdminTable() {
  const table = document.getElementById('admin-table-body');
  const search = document.getElementById('admin-search').value.toLowerCase();

  let filtered = [...orders];

  if (adminFilter !== 'all') {
    if (adminFilter === 'need_2fa') {
      filtered = filtered.filter(o => o.status === 'need_2fa' || o.need2FA);
    } else {
      filtered = filtered.filter(o => o.status === adminFilter);
    }
  }

  if (search) {
    filtered = filtered.filter(o => 
      o.id.toLowerCase().includes(search) ||
      o.customerName.toLowerCase().includes(search) ||
      o.uid.includes(search)
    );
  }

  if (filtered.length === 0) {
    table.innerHTML = `<tr><td colspan="6" class="text-center py-8 text-xs text-slate-500">Tidak ada pesanan.</td></tr>`;
    return;
  }

  table.innerHTML = filtered.map(order => `
    <tr class="border-b border-slate-800/60 hover:bg-slate-900/40 text-xs">
      <td class="py-3 px-3.5 font-mono font-bold text-rose-400">
        #${order.id}
        ${order.need2FA ? '<span class="ml-1 px-1.5 py-0.5 rounded text-[10px] bg-yellow-500/20 text-yellow-300 font-bold">2FA</span>' : ''}
      </td>
      <td class="py-3 px-3.5">
        <div class="font-semibold text-slate-200">${order.customerName}</div>
        <div class="text-[11px] text-slate-400">${order.whatsapp}</div>
      </td>
      <td class="py-3 px-3.5">
        <div class="text-slate-300">${order.serviceOption}</div>
        <div class="text-[11px] text-rose-400/80 font-mono">${order.server} - ${order.uid}</div>
      </td>
      <td class="py-3 px-3.5 font-mono font-bold text-slate-200">
        ${order.totalPrice > 0 ? `Rp ${order.totalPrice.toLocaleString('id-ID')}` : 'Custom'}
      </td>
      <td class="py-3 px-3.5">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${
          order.status === 'in_progress' ? 'bg-cyan-500/20 text-cyan-300' :
          order.status === 'completed' ? 'bg-emerald-500/20 text-emerald-300' :
          order.status === 'need_2fa' ? 'bg-yellow-500/20 text-yellow-300' : 'bg-slate-800 text-slate-300'
        }">${order.status}</span>
        ${order.isLiveInGame ? '<span class="block text-[10px] font-bold text-rose-400 mt-0.5">● IN-GAME</span>' : ''}
      </td>
      <td class="py-3 px-3.5 text-right">
        <button onclick="openManageOrder('${order.id}')" class="px-3 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-semibold">
          Edit
        </button>
      </td>
    </tr>
  `).join('');
}

function openManageOrder(orderId) {
  const order = orders.find(o => o.id === orderId);
  if (!order) return;

  activeModalOrderId = orderId;
  const modal = document.getElementById('manage-order-modal');

  document.getElementById('edit-modal-id').textContent = `#${order.id}`;
  document.getElementById('edit-modal-client').textContent = `${order.customerName} (${order.whatsapp})`;
  document.getElementById('edit-modal-pkg').textContent = `${order.serviceOption} • UID: ${order.uid}`;

  document.getElementById('edit-status').value = order.status;
  document.getElementById('edit-ingame-toggle').checked = !!order.isLiveInGame;
  document.getElementById('edit-need2fa-toggle').checked = !!order.need2FA;

  document.getElementById('vault-user').value = order.accountUser;
  document.getElementById('vault-pass').value = order.accountPass;
  document.getElementById('vault-2fa-code').textContent = order.twoFactorCode || '(Belum ada)';

  document.getElementById('edit-worker').value = order.worker || '';
  document.getElementById('edit-progress-slider').value = order.progressPercent;
  document.getElementById('edit-progress-val').textContent = `${order.progressPercent}%`;

  renderModalChecklist(order.checklists || []);
  document.getElementById('edit-notes').value = order.notes || '';

  modal.classList.remove('hidden');
}

function renderModalChecklist(list) {
  const container = document.getElementById('modal-checklist-list');
  container.innerHTML = list.map((item, idx) => `
    <div class="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-800">
      <input type="checkbox" onchange="toggleChecklistItem(${idx})" ${item.done ? 'checked' : ''} class="w-4 h-4 rounded text-rose-500 bg-slate-950 border-slate-700">
      <input type="text" value="${item.text}" onchange="editChecklistItemText(${idx}, this.value)" class="bg-transparent text-xs text-slate-200 flex-1 border-none focus:ring-0">
      <button type="button" onclick="deleteChecklistItem(${idx})" class="text-rose-400 text-xs px-1"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
}

function addChecklistItem() {
  const order = orders.find(o => o.id === activeModalOrderId);
  if (!order) return;
  if (!order.checklists) order.checklists = [];
  order.checklists.push({ text: 'Tugas progres baru...', done: false });
  renderModalChecklist(order.checklists);
}

function toggleChecklistItem(idx) {
  const order = orders.find(o => o.id === activeModalOrderId);
  if (order && order.checklists[idx]) {
    order.checklists[idx].done = !order.checklists[idx].done;
  }
}

function editChecklistItemText(idx, val) {
  const order = orders.find(o => o.id === activeModalOrderId);
  if (order && order.checklists[idx]) {
    order.checklists[idx].text = val;
  }
}

function deleteChecklistItem(idx) {
  const order = orders.find(o => o.id === activeModalOrderId);
  if (order) {
    order.checklists.splice(idx, 1);
    renderModalChecklist(order.checklists);
  }
}

function copyVault(inputId) {
  const el = document.getElementById(inputId);
  el.select();
  navigator.clipboard.writeText(el.value);
  showToast('Berhasil disalin!', 'success');
}

function toggleVaultPass() {
  const pass = document.getElementById('vault-pass');
  const icon = document.getElementById('vault-pass-icon');
  if (pass.type === 'password') {
    pass.type = 'text';
    icon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    pass.type = 'password';
    icon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function send2FARequestWA() {
  const order = orders.find(o => o.id === activeModalOrderId);
  if (!order) return;

  order.need2FA = true;
  order.status = 'need_2fa';
  saveOrders();

  const msg = encodeURIComponent(
`Halo kak ${order.customerName} (Order #${order.id})! 🍀
Penjoki Klee B Shop sedang bersiap login ke akun Genshin Impact kakak.
Mohon bantu kirimkan *Kode 6-Digit (2FA)* yang masuk ke email ya kak, atau bisa ketik langsung di link lacak:

https://kbs-joki.id/?track=${order.id}

Terima kasih!`
  );

  window.open(`https://wa.me/${order.whatsapp}?text=${msg}`, '_blank');
  showToast('Permintaan 2FA dibuka di WhatsApp!', 'success');
}

function saveOrderEdits() {
  const order = orders.find(o => o.id === activeModalOrderId);
  if (!order) return;

  order.status = document.getElementById('edit-status').value;
  order.isLiveInGame = document.getElementById('edit-ingame-toggle').checked;
  order.need2FA = document.getElementById('edit-need2fa-toggle').checked;
  order.worker = document.getElementById('edit-worker').value.trim();
  order.progressPercent = parseInt(document.getElementById('edit-progress-slider').value) || 0;
  order.notes = document.getElementById('edit-notes').value.trim();
  order.updatedAt = new Date().toLocaleString('id-ID');

  saveOrders();
  document.getElementById('manage-order-modal').classList.add('hidden');
  showToast(`Perubahan Order #${order.id} berhasil disimpan!`, 'success');
}

function addProofURL() {
  const url = prompt('Masukkan URL Gambar Bukti (Screenshot):', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80');
  if (url && activeModalOrderId) {
    const order = orders.find(o => o.id === activeModalOrderId);
    if (order) {
      if (!order.proofImages) order.proofImages = [];
      order.proofImages.push(url);
      saveOrders();
      showToast('Gambar bukti berhasil ditambahkan!', 'success');
    }
  }
}

// ==========================================
// 7. SERVICE & PRICING MANAGER (CUSTOM)
// ==========================================
function openServiceManagerModal() {
  renderAdminServiceManager();
  document.getElementById('service-manager-modal').classList.remove('hidden');
}

function renderAdminServiceManager() {
  const container = document.getElementById('service-manager-list');
  if (!container) return;

  container.innerHTML = services.map((cat, catIdx) => `
    <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-4">
      <div class="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
        <div class="flex items-center gap-2">
          <i class="fa-solid ${cat.icon || 'fa-tag'} text-rose-400 text-sm"></i>
          <input type="text" value="${cat.name}" onchange="updateCategoryName(${catIdx}, this.value)" class="bg-transparent text-sm font-bold text-slate-100 border-b border-transparent focus:border-rose-400 focus:outline-none">
        </div>
        <button type="button" onclick="addNewPackageToCategory(${catIdx})" class="px-2.5 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-xs font-semibold">
          + Tambah Paket
        </button>
      </div>

      <div class="space-y-2">
        ${cat.packages.map((pkg, pkgIdx) => `
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 text-xs">
            <div class="sm:col-span-5">
              <span class="text-[10px] text-slate-500 block">Nama Paket</span>
              <input type="text" value="${pkg.name}" onchange="updatePackageField(${catIdx}, ${pkgIdx}, 'name', this.value)" class="kbs-input w-full rounded px-2 py-1 text-xs">
            </div>
            <div class="sm:col-span-3">
              <span class="text-[10px] text-slate-500 block">Harga (Rp)</span>
              <input type="number" value="${pkg.price}" onchange="updatePackageField(${catIdx}, ${pkgIdx}, 'price', parseInt(this.value) || 0)" class="kbs-input w-full rounded px-2 py-1 text-xs font-mono">
            </div>
            <div class="sm:col-span-3">
              <span class="text-[10px] text-slate-500 block">Durasi</span>
              <input type="text" value="${pkg.duration || ''}" onchange="updatePackageField(${catIdx}, ${pkgIdx}, 'duration', this.value)" class="kbs-input w-full rounded px-2 py-1 text-xs font-mono">
            </div>
            <div class="sm:col-span-1 text-right pt-3 sm:pt-0">
              <button type="button" onclick="deletePackageFromCategory(${catIdx}, ${pkgIdx})" class="text-rose-400 hover:text-rose-300 text-xs">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function updateCategoryName(catIdx, newName) {
  if (services[catIdx]) {
    services[catIdx].name = newName;
    saveServices();
    showToast('Nama kategori diperbarui!', 'success');
  }
}

function updatePackageField(catIdx, pkgIdx, field, value) {
  if (services[catIdx] && services[catIdx].packages[pkgIdx]) {
    services[catIdx].packages[pkgIdx][field] = value;
    saveServices();
  }
}

function addNewPackageToCategory(catIdx) {
  if (!services[catIdx]) return;
  const newId = `pkg_${Date.now()}`;
  services[catIdx].packages.push({
    id: newId,
    name: 'Paket Baru KBS',
    price: 20000,
    duration: '1 Hari'
  });
  saveServices();
  showToast('Paket baru ditambahkan! Silakan sesuaikan nama & harganya.', 'success');
}

function deletePackageFromCategory(catIdx, pkgIdx) {
  if (confirm('Hapus paket ini?')) {
    services[catIdx].packages.splice(pkgIdx, 1);
    saveServices();
    showToast('Paket dihapus.', 'info');
  }
}

function addNewCategory() {
  const catName = prompt('Nama Kategori Layanan Baru (Contoh: "Joki Event Natlan"):', 'Layanan Baru');
  if (catName) {
    const catId = `cat_${Date.now()}`;
    services.push({
      id: catId,
      name: catName,
      icon: 'fa-bomb',
      packages: [
        { id: `pkg_${Date.now()}`, name: 'Paket 1', price: 25000, duration: '1 Hari' }
      ]
    });
    saveServices();
    showToast(`Kategori "${catName}" berhasil dibuat!`, 'success');
  }
}

// Lightbox & Toast
function openImageModal(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-modal').classList.remove('hidden');
}

function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  const txt = document.getElementById('toast-msg');
  const icon = document.getElementById('toast-icon');

  txt.textContent = msg;

  if (type === 'success') {
    toast.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-950 border border-emerald-500/60 text-emerald-200 text-xs shadow-2xl transition-all duration-300';
    icon.className = 'fa-solid fa-circle-check text-emerald-400 text-sm';
  } else if (type === 'error') {
    toast.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-rose-950 border border-rose-500/60 text-rose-200 text-xs shadow-2xl transition-all duration-300';
    icon.className = 'fa-solid fa-circle-exclamation text-rose-400 text-sm';
  } else {
    toast.className = 'fixed bottom-5 right-5 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 border border-rose-500/40 text-rose-200 text-xs shadow-2xl transition-all duration-300';
    icon.className = 'fa-solid fa-bell text-rose-400 text-sm';
  }

  toast.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
  }, 3500);
}

function setupAdminListeners() {
  const slider = document.getElementById('edit-progress-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      document.getElementById('edit-progress-val').textContent = `${e.target.value}%`;
    });
  }

  const search = document.getElementById('admin-search');
  if (search) search.addEventListener('input', renderAdminTable);

  const trackInput = document.getElementById('track-search-input');
  if (trackInput) {
    trackInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') trackOrder();
    });
  }

  const pinInput = document.getElementById('admin-pin-input');
  if (pinInput) {
    pinInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') verifyAdminPin();
    });
  }
}
