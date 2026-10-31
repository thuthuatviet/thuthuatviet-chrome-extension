/**
 * Thủ Thuật Việt — Side Panel Controller (Manifest V3 CSP Safe)
 * Không sử dụng eval() hoặc inline script. Lưu trạng thái qua chrome.storage.local.
 */

const QUICK_SOLUTIONS = [
  {
    cat: 'ai',
    badge: '🌐 ChatGPT Dịch Thuật',
    title: 'Prompt bắt ChatGPT dịch Tiếng Anh & Tiếng Trung sang Tiếng Việt chuẩn gấp 10 lần Google Dịch',
    summary: 'Bước 1: Mở ChatGPT ➔ Bước 2: Dán Prompt bên dưới ➔ Bước 3: Nhận bản dịch chuẩn ngữ cảnh công sở/thương mại kèm giải nghĩa thuật ngữ.',
    code: 'Bạn là Biên dịch viên cao cấp Anh - Trung - Việt 15 năm kinh nghiệm. Hãy dịch đoạn văn sau sang Tiếng Việt chuẩn văn phong công sở/thương mại (tuyệt đối không dịch word-by-word), giữ nguyên bảng biểu và kèm giải nghĩa 3-5 thuật ngữ quan trọng: [Dán văn bản cần dịch]',
    url: 'https://thuthuatviet.com/tri-tue-nhan-tao/chat-gpt-dich-tieng-anh-tieng-trung-sang-tieng-viet-chuan/',
  },
  {
    cat: 'ai',
    badge: '🤖 Prompt Excel & VBA',
    title: 'Prompt bắt ChatGPT / DeepSeek sửa lỗi #N/A & viết công thức chuẩn dấu ; VN',
    summary: 'Bước 1: Mở ChatGPT/DeepSeek ➔ Bước 2: Dán Prompt bên dưới ➔ Bước 3: Copy hàm dùng dấu chấm phẩy (;).',
    code: 'Bạn là chuyên gia Excel tại Việt Nam. Hãy viết công thức xử lý bài toán sau (sử dụng dấu chấm phẩy ; theo chuẩn Regional Settings Việt Nam) và giải thích ngắn gọn: [Mô tả bảng tính của bạn]',
    url: 'https://thuthuatviet.com/tri-tue-nhan-tao/prompt-excel/',
  },
  {
    cat: 'ai',
    badge: '🤖 Claude / Antigravity',
    title: 'Prompt rà soát lỗi Code & Tối ưu hiệu năng Web (Core Web Vitals)',
    summary: 'Bước 1: Chọn đoạn code cần kiểm tra ➔ Bước 2: Dán Prompt ➔ Bước 3: Áp dụng bản vá an toàn.',
    code: 'Hãy đóng vai Principal Engineer kiểm tra đoạn mã sau: chỉ ra nguy cơ lỗi runtime, rò rỉ bộ nhớ, vi phạm CSP và viết lại mã tối ưu sạch 100%.',
    url: 'https://thuthuatviet.com/tri-tue-nhan-tao/ai-lap-trinh/',
  },
  {
    cat: 'office',
    badge: '📊 Word Nghị định 30',
    title: 'Thông số căn lề A4 & Cỡ chữ chuẩn Nghị định 30/2020/NĐ-CP',
    summary: 'Vào Layout ➔ Margins ➔ Custom Margins ➔ Đặt chuẩn lề hành chính nhà nước.',
    code: 'Lề Trên: 2.0-2.5cm | Lề Dưới: 2.0-2.5cm | Lề Trái: 3.0-3.5cm | Lề Phải: 1.5-2.0cm | Font: Times New Roman (Unicode) cỡ 13-14.',
    url: 'https://thuthuatviet.com/van-phong/word-nd30/',
  },
  {
    cat: 'office',
    badge: '📊 Sửa lỗi Excel',
    title: 'Khắc phục lỗi gõ công thức bị nhảy chữ tiếng Việt do Unikey/EVKey',
    summary: 'Bấm Ctrl + Shift hoặc Alt + Z chuyển Unikey sang chữ E trước khi gõ hàm =VLOOKUP / =XLOOKUP.',
    code: '=XLOOKUP(A2; DanhSach!A:A; DanhSach!B:B; "Không tìm thấy"; 0)',
    url: 'https://thuthuatviet.com/van-phong/excel-sheets/',
  },
  {
    cat: 'os',
    badge: '💻 Windows 11/10',
    title: 'Lệnh sửa lỗi Wi-Fi chấm than vàng & Làm mới toàn bộ kết nối mạng',
    summary: 'Mở CMD bằng quyền Admin (Run as Administrator) ➔ Dán dòng lệnh an toàn bên dưới ➔ Enter.',
    code: 'ipconfig /release & ipconfig /renew & ipconfig /flushdns & netsh winsock reset',
    url: 'https://thuthuatviet.com/he-dieu-hanh/windows/',
  },
  {
    cat: 'os',
    badge: '💻 Kiểm tra Pin Laptop',
    title: 'Lệnh xuất báo cáo độ chai Pin Laptop chính xác không cần cài phần mềm',
    summary: 'Mở CMD / PowerShell ➔ Chạy lệnh ➔ Xem mục Design Capacity vs Full Charge Capacity.',
    code: 'powercfg /batteryreport /output "C:\\battery-report.html"',
    url: 'https://thuthuatviet.com/he-dieu-hanh/phan-cung-sua-loi/',
  },
  {
    cat: 'life',
    badge: '🏛️ Đời sống số & VNeID',
    title: 'Danh mục giấy tờ tích hợp VNeID Mức 2 thay thế bản giấy khi đi đường',
    summary: 'Mở VNeID ➔ Ví giấy tờ ➔ Tích hợp thông tin ➔ Chọn GPLX, Đăng ký xe, Thẻ BHYT, Người phụ thuộc.',
    code: '1. Giấy phép lái xe (GPLX) + Đăng ký xe\n2. Thẻ BHYT khám chữa bệnh\n3. Thông tin Cư trú & Người phụ thuộc giảm trừ thuế TNCN',
    url: 'https://thuthuatviet.com/doi-song-so/vneid/',
  },
];

const SATELLITES = [
  { icon: '🧮', name: 'TinhLuongGrossNet.vn', domain: 'tinhluonggrossnet.vn', url: 'https://tinhluonggrossnet.vn', desc: 'Bảng tính lương Gross ⇄ Net, BHXH 10.5% & Thuế TNCN tự động' },
  { icon: '🎯', name: 'Vòng Quay May Mắn', domain: 'vongquaymayman.web.app', url: 'https://vongquaymayman.web.app', desc: 'Quay số ngẫu nhiên, bốc thăm trúng thưởng & chia nhóm không quảng cáo' },
  { icon: '🎨', name: 'QuickPSD', domain: 'quickpsd.com', url: 'https://quickpsd.com', desc: 'Kho mẫu thiết kế PSD, Mockup chuẩn & Font chữ Việt hóa miễn phí' },
  { icon: '📅', name: 'Lịch Âm Pro', domain: 'lichampro.com', url: 'https://lichampro.com', desc: 'Tra cứu lịch vạn niên, ngày tốt khai trương & giờ hoàng đạo chuẩn' },
  { icon: '🍿', name: 'Đảo Dạo Review', domain: 'daodaoreview.com', url: 'https://daodaoreview.com', desc: 'Phân tích & đánh giá phim điện ảnh chiều sâu không spoil' },
  { icon: '📱', name: 'Tạo Mã QR Online', domain: 'taomaqr.online', url: 'https://taomaqr.online', desc: 'Tạo mã QR WiFi quán cafe, VietQR ngân hàng & VCard nét căng' },
  { icon: '🍜', name: 'Ăn Gì Cũng Được', domain: 'angicungduoc.food', url: 'https://angicungduoc.food', desc: 'Vòng quay gợi ý món ăn trưa văn phòng & đặc sản 3 miền' },
  { icon: '🏔️', name: 'Sapa View', domain: 'sapaview.vn', url: 'https://sapaview.vn', desc: 'Xem thời tiết, camera Sapa trực tiếp & cẩm nang săn mây Fansipan' },
];

let currentCat = 'all';

function switchTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    const active = btn.getAttribute('data-tab') === tabId;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', String(active));
  });
  document.querySelectorAll('.tab-panel').forEach((panel) => {
    panel.classList.toggle('is-active', panel.id === tabId);
  });
  if (chrome?.storage?.local) {
    chrome.storage.local.set({ activeTab: tabId }).catch(() => {});
  }
}

function renderCards(query = '') {
  const container = document.getElementById('cards-container');
  if (!container) return;
  const q = query.trim().toLowerCase();

  const filtered = QUICK_SOLUTIONS.filter((item) => {
    const matchCat = currentCat === 'all' || item.cat === currentCat;
    const matchQuery =
      !q ||
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q) ||
      item.code.toLowerCase().includes(q);
    return matchCat && matchQuery;
  });

  container.innerHTML = '';
  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'item-card';
    empty.textContent = 'Không tìm thấy mẫu khớp sẵn. Bấm nút bên dưới để tìm trực tiếp trên kho 9.449+ bài viết của Thủ Thuật Việt!';
    container.appendChild(empty);
    return;
  }

  filtered.forEach((item, idx) => {
    const card = document.createElement('article');
    card.className = 'item-card';

    const meta = document.createElement('div');
    meta.className = 'item-meta';
    meta.textContent = item.badge;

    const h3 = document.createElement('h3');
    h3.textContent = item.title;

    const summary = document.createElement('p');
    summary.className = 'item-summary';
    summary.textContent = item.summary;

    const pre = document.createElement('pre');
    pre.className = 'item-code';
    pre.id = `quick-code-${idx}`;
    pre.textContent = item.code;

    const actions = document.createElement('div');
    actions.className = 'item-actions';

    const copyBtn = document.createElement('button');
    copyBtn.type = 'button';
    copyBtn.className = 'btn-copy';
    copyBtn.textContent = '📋 Sao chép nhanh';
    copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(item.code);
      copyBtn.textContent = '✓ Đã sao chép!';
      setTimeout(() => {
        copyBtn.textContent = '📋 Sao chép nhanh';
      }, 1600);
    });

    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'sat-link';
    link.textContent = 'Xem bài hướng dẫn ↗';

    actions.appendChild(copyBtn);
    actions.appendChild(link);

    card.appendChild(meta);
    card.appendChild(h3);
    card.appendChild(summary);
    card.appendChild(pre);
    card.appendChild(actions);
    container.appendChild(card);
  });
}

function renderSatellites() {
  const grid = document.getElementById('satellites-grid');
  if (!grid) return;
  grid.innerHTML = '';
  SATELLITES.forEach((sat) => {
    const a = document.createElement('a');
    a.href = sat.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'sat-card';

    const top = document.createElement('div');
    top.className = 'sat-card-top';

    const name = document.createElement('span');
    name.className = 'sat-name';
    name.textContent = `${sat.icon} ${sat.name}`;

    const domain = document.createElement('span');
    domain.className = 'sat-domain';
    domain.textContent = `${sat.domain} ↗`;

    top.appendChild(name);
    top.appendChild(domain);

    const desc = document.createElement('p');
    desc.className = 'sat-desc';
    desc.textContent = sat.desc;

    a.appendChild(top);
    a.appendChild(desc);
    grid.appendChild(a);
  });
}

function convertExcelDelimiter(formula, toSemi) {
  let out = '';
  let inQuotes = false;
  for (let i = 0; i < formula.length; i++) {
    const ch = formula[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
      out += ch;
    } else if (!inQuotes && toSemi && ch === ',') {
      out += ';';
    } else if (!inQuotes && !toSemi && ch === ';') {
      out += ',';
    } else {
      out += ch;
    }
  }
  return out;
}

function readThreeDigits(n, showZeroHundred) {
  const digits = ['không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín'];
  const h = Math.floor(n / 100);
  const t = Math.floor((n % 100) / 10);
  const u = n % 10;
  const res = [];
  if (h > 0 || showZeroHundred) res.push(digits[h] + ' trăm');
  if (t > 1) {
    res.push(digits[t] + ' mươi');
    if (u === 1) res.push('mốt');
    else if (u === 4) res.push('tư');
    else if (u === 5) res.push('lăm');
    else if (u > 0) res.push(digits[u]);
  } else if (t === 1) {
    res.push('mười');
    if (u === 5) res.push('lăm');
    else if (u > 0) res.push(digits[u]);
  } else if (t === 0 && u > 0) {
    if (h > 0 || showZeroHundred) res.push('lẻ');
    res.push(digits[u]);
  }
  return res.join(' ');
}

function numberToWordsVND(raw) {
  const clean = String(raw).replace(/[^0-9]/g, '');
  if (!clean) return 'Hãy nhập số tiền cần đọc (VD: 15500000)';
  const num = parseInt(clean, 10);
  if (num === 0) return 'Không đồng chẵn.';
  const units = ['', 'nghìn', 'triệu', 'tỷ', 'nghìn tỷ'];
  let temp = num;
  const groups = [];
  while (temp > 0) {
    groups.push(temp % 1000);
    temp = Math.floor(temp / 1000);
  }
  const parts = [];
  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] > 0) {
      parts.push(readThreeDigits(groups[i], i < groups.length - 1) + (units[i] ? ' ' + units[i] : ''));
    }
  }
  const str = parts.join(' ').trim();
  return str.charAt(0).toUpperCase() + str.slice(1) + ' đồng chẵn (' + num.toLocaleString('vi-VN') + ' VNĐ).';
}

function calculateGrossNet() {
  const grossEl = document.getElementById('gross-input');
  const depEl = document.getElementById('dep-select');
  const outEl = document.getElementById('salary-output');
  if (!grossEl || !depEl || !outEl) return;

  const gross = parseInt(String(grossEl.value).replace(/[^0-9]/g, ''), 10) || 0;
  const dep = parseInt(depEl.value, 10) || 0;
  const insBase = Math.min(gross, 46800000);
  const ins = Math.round(insBase * 0.105);
  const deduct = 11000000 + dep * 4400000;
  const taxable = Math.max(0, gross - ins - deduct);

  const brackets = [
    { max: 5000000, rate: 0.05 },
    { max: 10000000, rate: 0.1 },
    { max: 18000000, rate: 0.15 },
    { max: 32000000, rate: 0.2 },
    { max: 52000000, rate: 0.25 },
    { max: 80000000, rate: 0.3 },
    { max: Infinity, rate: 0.35 },
  ];
  let tax = 0;
  let prev = 0;
  for (const b of brackets) {
    if (taxable > prev) {
      tax += (Math.min(taxable, b.max) - prev) * b.rate;
      prev = b.max;
    }
  }
  tax = Math.round(tax);
  const net = gross - ins - tax;
  const fmt = (n) => n.toLocaleString('vi-VN') + 'đ';

  outEl.textContent =
    `• Gross: ${fmt(gross)} | BHXH (10.5%): -${fmt(ins)}\n` +
    `• Thuế TNCN: -${fmt(tax)}\n` +
    `👉 LƯƠNG NET THỰC NHẬN: ${fmt(net)}`;

  if (chrome?.storage?.local) {
    chrome.storage.local.set({ savedGross: String(gross) }).catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  renderCards('');
  renderSatellites();
  calculateGrossNet();

  // Tab navigation
  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      switchTab(btn.getAttribute('data-tab'));
    });
  });

  // Search & filter
  const searchInput = document.getElementById('quick-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => renderCards(searchInput.value));
  }

  document.querySelectorAll('#category-filters .chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#category-filters .chip').forEach((c) => c.classList.remove('is-active'));
      chip.classList.add('is-active');
      currentCat = chip.getAttribute('data-cat') || 'all';
      renderCards(searchInput ? searchInput.value : '');
    });
  });

  const btnWebSearch = document.getElementById('btn-full-web-search');
  if (btnWebSearch) {
    btnWebSearch.addEventListener('click', () => {
      const q = searchInput ? searchInput.value.trim() : '';
      const target = q
        ? `https://thuthuatviet.com/tim-kiem/?q=${encodeURIComponent(q)}`
        : 'https://thuthuatviet.com/tim-kiem/';
      window.open(target, '_blank', 'noopener,noreferrer');
    });
  }

  // Tool 1: Excel
  const excelIn = document.getElementById('excel-input');
  const excelOut = document.getElementById('excel-output');
  document.getElementById('btn-excel-semi')?.addEventListener('click', () => {
    excelOut.textContent = convertExcelDelimiter(excelIn.value, true);
  });
  document.getElementById('btn-excel-comma')?.addEventListener('click', () => {
    excelOut.textContent = convertExcelDelimiter(excelIn.value, false);
  });
  document.getElementById('btn-excel-vnd')?.addEventListener('click', () => {
    excelOut.textContent = numberToWordsVND(excelIn.value);
  });

  // Tool 2: Salary
  document.getElementById('btn-calc-salary')?.addEventListener('click', calculateGrossNet);
  document.getElementById('dep-select')?.addEventListener('change', calculateGrossNet);

  // Tool 3: Text normalizer
  const textIn = document.getElementById('text-input');
  const textOut = document.getElementById('text-output');
  document.getElementById('btn-text-title')?.addEventListener('click', () => {
    const clean = textIn.value.normalize('NFC').replace(/\s+/g, ' ').trim();
    textOut.textContent = clean.toLowerCase().replace(/(^|\s)\S/g, (c) => c.toUpperCase());
  });
  document.getElementById('btn-text-ascii')?.addEventListener('click', () => {
    textOut.textContent = textIn.value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .replace(/\s+/g, ' ')
      .trim();
  });
  document.getElementById('btn-text-slug')?.addEventListener('click', () => {
    textOut.textContent = textIn.value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  });

  // Tool 4: Wi-Fi QR & Password strength
  const wifiIn = document.getElementById('wifi-input');
  const wifiOut = document.getElementById('wifi-output');
  document.getElementById('btn-wifi-qr')?.addEventListener('click', () => {
    const parts = wifiIn.value.split('|');
    const ssid = (parts[0] || 'WiFi_CongTy').trim();
    const pass = (parts[1] || '12345678').trim();
    wifiOut.textContent = `WIFI:S:${ssid};T:WPA;P:${pass};;`;
  });
  document.getElementById('btn-pass-check')?.addEventListener('click', () => {
    const pwd = wifiIn.value.trim();
    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 32;
    const entropy = pwd.length ? Math.round(pwd.length * Math.log2(Math.max(pool, 1))) : 0;
    const rank = entropy >= 75 ? '🟢 RẤT MẠNH' : entropy >= 50 ? '🟡 KHÁ AN TOÀN' : '🔴 YẾU (Nên thêm ký tự đặc biệt)';
    wifiOut.textContent = `Độ dài: ${pwd.length} ký tự | Entropy: ~${entropy} bits ➔ ${rank}`;
  });

  // Tool 5: Tách Họ & Tên
  const nameIn = document.getElementById('name-input');
  const nameOut = document.getElementById('name-output');
  function splitNames(mode) {
    if (!nameIn || !nameOut) return;
    const lines = nameIn.value.split('\n').map((l) => l.trim()).filter(Boolean);
    if (!lines.length) {
      nameOut.textContent = 'Vui lòng nhập ít nhất 1 dòng tên.';
      return;
    }
    const res = ['Họ & Tên Gốc\t' + (mode === '3col' ? 'Họ\tTên Đệm\tTên' : 'Họ & Tên Đệm\tTên')];
    lines.forEach((line) => {
      const parts = line.split(/\s+/).filter(Boolean);
      if (parts.length === 1) {
        res.push(line + '\t' + (mode === '3col' ? parts[0] + '\t\t' : '\t' + parts[0]));
      } else if (mode === '3col') {
        const first = parts[0];
        const last = parts[parts.length - 1];
        const mid = parts.slice(1, -1).join(' ');
        res.push(`${line}\t${first}\t${mid}\t${last}`);
      } else {
        const last = parts[parts.length - 1];
        const rest = parts.slice(0, -1).join(' ');
        res.push(`${line}\t${rest}\t${last}`);
      }
    });
    nameOut.textContent = res.join('\n');
  }
  document.getElementById('btn-name-2col')?.addEventListener('click', () => splitNames('2col'));
  document.getElementById('btn-name-3col')?.addEventListener('click', () => splitNames('3col'));
  if (nameIn && nameOut) splitNames('2col');

  // Tool 6: Dọn Rác Windows
  const cleanOut = document.getElementById('clean-output');
  document.getElementById('btn-clean-full')?.addEventListener('click', () => {
    if (cleanOut) {
      cleanOut.textContent =
        '@echo off\nchcp 65001 >nul\necho Dang don rac Windows Temp...\n' +
        'del /s /f /q "%windir%\\Temp\\*.*" 2>nul\n' +
        'del /s /f /q "%temp%\\*.*" 2>nul\n' +
        'del /s /f /q "%windir%\\Prefetch\\*.*" 2>nul\n' +
        'powershell.exe -NoProfile -Command "Clear-RecycleBin -Force" 2>nul\n' +
        'echo Hoan tat don dep!\npause';
    }
  });
  document.getElementById('btn-clean-c')?.addEventListener('click', () => {
    if (cleanOut) {
      cleanOut.textContent =
        '@echo off\nchcp 65001 >nul\necho Dang tat Hibernate de giai phong 8-16GB SSD...\n' +
        'powercfg -h off\n' +
        'del /s /f /q "%temp%\\*.*" 2>nul\n' +
        'echo Da giai phong o C thanh cong!\npause';
    }
  });
  document.getElementById('btn-clean-net')?.addEventListener('click', () => {
    if (cleanOut) {
      cleanOut.textContent =
        '@echo off\nchcp 65001 >nul\necho Dang sua mang & Flush DNS...\n' +
        'ipconfig /flushdns\nipconfig /release\nipconfig /renew\n' +
        'netsh winsock reset\nnetsh int ip reset\n' +
        'echo Da sua mang xong! Hay khoi dong lai may.\npause';
    }
  });
  if (cleanOut) {
    cleanOut.textContent =
      '@echo off\nchcp 65001 >nul\necho Dang don rac Windows Temp...\n' +
      'del /s /f /q "%windir%\\Temp\\*.*" 2>nul\n' +
      'del /s /f /q "%temp%\\*.*" 2>nul\n' +
      'del /s /f /q "%windir%\\Prefetch\\*.*" 2>nul\n' +
      'powershell.exe -NoProfile -Command "Clear-RecycleBin -Force" 2>nul\n' +
      'echo Hoan tat don dep!\npause';
  }

  // Tool 7: Zalo Link
  const zaloIn = document.getElementById('zalo-input');
  const zaloOut = document.getElementById('zalo-output');
  function updateZalo(mode) {
    if (!zaloIn || !zaloOut) return;
    let raw = zaloIn.value.replace(/[^0-9+]/g, '');
    if (raw.startsWith('+84')) raw = '0' + raw.slice(3);
    else if (raw.startsWith('84') && raw.length === 11) raw = '0' + raw.slice(2);
    const p84 = raw.startsWith('0') && raw.length === 10 ? '84' + raw.slice(1) : raw;

    if (mode === 'carrier') {
      const p3 = raw.slice(0, 3);
      const isViettel = ['086', '096', '097', '098', '032', '033', '034', '035', '036', '037', '038', '039'].includes(p3);
      const isVina = ['088', '091', '094', '081', '082', '083', '084', '085'].includes(p3);
      const isMobi = ['089', '090', '093', '070', '079', '077', '076', '078'].includes(p3);
      const carrier = isViettel ? 'Viettel' : isVina ? 'VinaPhone' : isMobi ? 'MobiFone' : 'Nhà mạng khác';
      zaloOut.textContent = `• SĐT: ${raw}\n• Nhà mạng: ${carrier}\n• Link Zalo: https://zalo.me/${p84}`;
    } else {
      zaloOut.textContent =
        `• Link Chat Đa Nền Tảng: https://zalo.me/${p84}\n` +
        `• Link Mở App Trực Tiếp: zalo://chat?phone=${p84}\n` +
        `👉 Khách bấm vào là mở khung chat ngay, không cần kết bạn.`;
    }
  }
  document.getElementById('btn-zalo-link')?.addEventListener('click', () => updateZalo('link'));
  document.getElementById('btn-zalo-carrier')?.addEventListener('click', () => updateZalo('carrier'));
  if (zaloIn && zaloOut) updateZalo('link');

  // Tool 8: Lãi Vay
  const loanIn = document.getElementById('loan-input');
  const loanOut = document.getElementById('loan-output');
  function calcLoan(mode) {
    if (!loanIn || !loanOut) return;
    const parts = loanIn.value.split(/[\*\|\,\;x\s]+/).filter(Boolean);
    let principal = 500000000;
    let months = 36;
    let rate = 8.5;
    parts.forEach((p) => {
      const n = parseFloat(p.replace(/[^0-9\.]/g, ''));
      if (n >= 1000000) principal = n;
      else if (n > 30) months = Math.round(n);
      else if (n <= 25 && n > 0) rate = n;
    });
    const monthlyRate = (rate / 100) / 12;
    const g = Math.round(principal / months);
    const m1Interest = Math.round(principal * monthlyRate);
    const m1Total = g + m1Interest;
    const mLastInterest = Math.round(g * monthlyRate);
    const mLastTotal = g + mLastInterest;
    const totalIntRed = Math.round(principal * monthlyRate * (months + 1) / 2);
    const flatInt = Math.round(principal * monthlyRate) * months;
    const fmt = (num) => num.toLocaleString('vi-VN') + ' đ';

    if (mode === 'compare') {
      loanOut.textContent =
        `🔄 SO SÁNH VAY ${fmt(principal)} TRONG ${months} THÁNG (LÃI ${rate}%/NĂM):\n` +
        `• Dư nợ giảm dần: Tổng lãi ${fmt(totalIntRed)}\n` +
        `• Dư nợ gốc (Lãi phẳng): Tổng lãi ${fmt(flatInt)}\n` +
        `➔ Dư nợ giảm dần giúp TIẾT KIỆM ĐƯỢC: ${fmt(flatInt - totalIntRed)}!`;
    } else {
      loanOut.textContent =
        `📉 BẢNG TÍNH DƯ NỢ GIẢM DẦN (${fmt(principal)} - ${months} tháng - ${rate}%/năm):\n` +
        `• Gốc trả đều hàng tháng: ${fmt(g)}\n` +
        `• Tháng đầu trả (Cao nhất): ${fmt(m1Total)} (Gốc: ${fmt(g)} + Lãi: ${fmt(m1Interest)})\n` +
        `• Tháng cuối trả (Thấp nhất): ${fmt(mLastTotal)}\n` +
        `• Tổng tiền lãi cả kỳ: ${fmt(totalIntRed)}\n` +
        `• Tổng gốc + lãi: ${fmt(principal + totalIntRed)}`;
    }
  }
  document.getElementById('btn-loan-reducing')?.addEventListener('click', () => calcLoan('reducing'));
  document.getElementById('btn-loan-compare')?.addEventListener('click', () => calcLoan('compare'));
  if (loanIn && loanOut) calcLoan('reducing');

  // Tool 9: Color Converter & WCAG
  const colorIn = document.getElementById('color-input');
  const colorOut = document.getElementById('color-output');
  function updateColor(mode) {
    if (!colorIn || !colorOut) return;
    let str = (colorIn.value || '').trim();
    let r = 16, g = 185, b = 129;
    if (str.startsWith('#')) {
      let hex = str.slice(1);
      if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
      if (hex.length === 6) {
        r = parseInt(hex.slice(0, 2), 16) || 16;
        g = parseInt(hex.slice(2, 4), 16) || 185;
        b = parseInt(hex.slice(4, 6), 16) || 129;
      }
    } else if (str.toLowerCase().startsWith('rgb')) {
      const m = str.match(/(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/);
      if (m) { r = parseInt(m[1], 10); g = parseInt(m[2], 10); b = parseInt(m[3], 10); }
    } else if (/^\d+\s*,\s*\d+\s*,\s*\d+$/.test(str)) {
      const parts = str.split(',').map(n => parseInt(n.trim(), 10));
      r = parts[0]; g = parts[1]; b = parts[2];
    }
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
    const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0').toUpperCase()).join('');

    // CMYK
    const rN = r / 255, gN = g / 255, bN = b / 255;
    const k = 1 - Math.max(rN, gN, bN);
    const c = k >= 0.999 ? 0 : Math.round(((1 - rN - k) / (1 - k)) * 100);
    const m = k >= 0.999 ? 0 : Math.round(((1 - gN - k) / (1 - k)) * 100);
    const y = k >= 0.999 ? 0 : Math.round(((1 - bN - k) / (1 - k)) * 100);
    const kPct = Math.round(k * 100);

    // Luminance & Contrast
    const toLin = (v) => (v / 255 <= 0.04045 ? (v / 255) / 12.92 : Math.pow(((v / 255) + 0.055) / 1.055, 2.4));
    const lum = 0.2126 * toLin(r) + 0.7152 * toLin(g) + 0.0722 * toLin(b);
    const crWhite = (1.0 + 0.05) / (lum + 0.05);
    const crBlack = (lum + 0.05) / 0.05;

    if (mode === 'cmyk') {
      colorOut.textContent =
        `🖨️ MÃ CMYK IN ẤN CHO ${hex}:\n` +
        `• C: ${c}% | M: ${m}% | Y: ${y}% | K: ${kPct}%\n` +
        `• Tổng độ phủ mực: ${c + m + y + kPct}%\n` +
        `➔ Tiêu chuẩn nhà in giấy Couche: TAC ≤ 300% không lo lem mực!`;
    } else if (mode === 'harmonic') {
      // Complementary inverse approx
      const invHex = '#' + [255 - r, 255 - g, 255 - b].map(x => x.toString(16).padStart(2, '0').toUpperCase()).join('');
      colorOut.textContent =
        `🎯 PHỐI MÀU CHO ${hex}:\n` +
        `• Màu chính: ${hex} (rgb: ${r}, ${g}, ${b})\n` +
        `• Màu bổ túc tương phản (CTA): ${invHex}\n` +
        `➔ Tải template phối màu tại QuickPSD.com!`;
    } else {
      const bestText = crBlack > crWhite ? `CHỮ ĐEN (Tương phản ${crBlack.toFixed(2)}:1 - Đạt AAA)` : `CHỮ TRẮNG (Tương phản ${crWhite.toFixed(2)}:1)`;
      colorOut.textContent =
        `🎨 PHÂN TÍCH MÀU ${hex} (rgb: ${r}, ${g}, ${b}):\n` +
        `• CMYK in ấn: C:${c}% M:${m}% Y:${y}% K:${kPct}%\n` +
        `• Tương phản chữ TRẮNG: ${crWhite.toFixed(2)}:1\n` +
        `• Tương phản chữ ĐEN: ${crBlack.toFixed(2)}:1\n` +
        `➔ Khuyên dùng: ${bestText} để chống mỏi mắt!`;
    }
  }
  document.getElementById('btn-color-all')?.addEventListener('click', () => updateColor('all'));
  document.getElementById('btn-color-cmyk')?.addEventListener('click', () => updateColor('cmyk'));
  document.getElementById('btn-color-harmonic')?.addEventListener('click', () => updateColor('harmonic'));
  if (colorIn && colorOut) updateColor('all');

  // Tool 10: PSU & Bottleneck
  const psuIn = document.getElementById('psu-input');
  const psuOut = document.getElementById('psu-output');
  function updatePsu(mode) {
    if (!psuIn || !psuOut) return;
    const str = (psuIn.value || '').toLowerCase();
    let cpuName = 'Intel Core i5-13400F', cpuTdp = 75, cpuScore = 76;
    if (/i9|13900|14900|12900/.test(str)) { cpuName = 'Intel Core i9'; cpuTdp = 250; cpuScore = 100; }
    else if (/i7|14700|13700|12700/.test(str)) { cpuName = 'Intel Core i7'; cpuTdp = 180; cpuScore = 94; }
    else if (/14600k|13600k|12600k/.test(str)) { cpuName = 'Intel Core i5 K'; cpuTdp = 140; cpuScore = 88; }
    else if (/i3|12100|10100/.test(str)) { cpuName = 'Intel Core i3'; cpuTdp = 60; cpuScore = 52; }
    else if (/7800x3d|9800x3d/.test(str)) { cpuName = 'Ryzen 7 7800X3D'; cpuTdp = 90; cpuScore = 102; }
    else if (/ryzen 7|7700|5700/.test(str)) { cpuName = 'Ryzen 7'; cpuTdp = 105; cpuScore = 88; }
    else if (/ryzen 5|7600|5600/.test(str)) { cpuName = 'Ryzen 5'; cpuTdp = 65; cpuScore = 78; }

    let gpuName = 'RTX 4060 8GB', gpuTdp = 115, gpuScore = 72;
    if (/4090|5090/.test(str)) { gpuName = 'RTX 4090 24GB'; gpuTdp = 450; gpuScore = 120; }
    else if (/4080|7900\s*xtx/.test(str)) { gpuName = 'RTX 4080 / RX 7900 XTX'; gpuTdp = 320; gpuScore = 105; }
    else if (/4070\s*ti|4070\s*super/.test(str)) { gpuName = 'RTX 4070 Super'; gpuTdp = 220; gpuScore = 92; }
    else if (/4070|7800\s*xt|3080/.test(str)) { gpuName = 'RTX 4070 / 3080'; gpuTdp = 200; gpuScore = 86; }
    else if (/4060\s*ti|3070/.test(str)) { gpuName = 'RTX 4060 Ti'; gpuTdp = 160; gpuScore = 80; }
    else if (/3050|2060|6600|1660/.test(str)) { gpuName = 'GTX 1660 / RTX 2060'; gpuTdp = 130; gpuScore = 58; }

    const totalTdp = cpuTdp + gpuTdp + 80;
    const safePsu = Math.max(500, Math.ceil((totalTdp * 1.35) / 50) * 50);

    let bneck1080 = 0;
    let st1080 = '';
    if (gpuScore > cpuScore + 10) {
      bneck1080 = Math.min(45, Math.round(((gpuScore - cpuScore) / gpuScore) * 100));
      st1080 = `⚠️ Nghẽn CPU (${bneck1080}%): GPU chưa bung 100% công suất ở 1080p.`;
    } else if (cpuScore > gpuScore + 18) {
      bneck1080 = Math.min(40, Math.round(((cpuScore - gpuScore) / cpuScore) * 100));
      st1080 = `⚠️ Nghẽn GPU (${bneck1080}%): CPU quá mạnh, nên nâng cấp VGA.`;
    } else {
      bneck1080 = Math.max(2, Math.abs(gpuScore - cpuScore));
      st1080 = `🟢 Cân bằng hoàn hảo (${bneck1080}%): 100% hiệu năng từng đồng!`;
    }

    if (mode === '1080p') {
      psuOut.textContent =
        `🎯 NGHẼN CỔ CHAI Ở 1080p (${cpuName} + ${gpuName}):\n` +
        `➔ ${st1080}\n` +
        `• Lời khuyên: Chơi game mượt mà, bật khử răng cưa hoặc chơi ở 2K.`;
    } else if (mode === '2k4k') {
      const b2k = Math.max(1, Math.round(bneck1080 * 0.45));
      psuOut.textContent =
        `🖥️ NGHẼN CỔ CHAI Ở 2K/4K (${cpuName} + ${gpuName}):\n` +
        `➔ 🟢 Rất mượt (${b2k}%): Tải dồn về GPU, chiến game đồ họa đỉnh cao!`;
    } else {
      psuOut.textContent =
        `⚡ CÔNG SUẤT NGUỒN PC (PSU):\n` +
        `• CPU: ${cpuName} (~${cpuTdp}W)\n` +
        `• GPU: ${gpuName} (~${gpuTdp}W) | Linh kiện khác: ~80W\n` +
        `• Điện ngốn cực đại: ~${totalTdp} Watt\n` +
        `➔ Khuyên dùng Nguồn: ${safePsu}W (Chuẩn 80 Plus Bronze/Gold)`;
    }
  }
  document.getElementById('btn-psu-calc')?.addEventListener('click', () => updatePsu('psu'));
  document.getElementById('btn-psu-1080p')?.addEventListener('click', () => updatePsu('1080p'));
  document.getElementById('btn-psu-2k4k')?.addEventListener('click', () => updatePsu('2k4k'));
  if (psuIn && psuOut) updatePsu('psu');

  // Tool 11: VAT & Hóa đơn điện tử
  const vatIn = document.getElementById('vat-input');
  const vatOut = document.getElementById('vat-output');
  function updateVat(mode) {
    if (!vatIn || !vatOut) return;
    const raw = (vatIn.value || '').trim();
    if (mode === 'mst') {
      const digits = raw.replace(/[^0-9]/g, '');
      if (digits.length >= 10) {
        const is10 = digits.length === 10;
        const main = digits.slice(0, 10);
        vatOut.textContent =
          `📋 KIỂM TRA MÃ SỐ THUẾ (MST):\n` +
          `• MST: ${is10 ? main : main + '-' + digits.slice(10, 13)}\n` +
          `• Phân loại: ${is10 ? 'Doanh nghiệp / Tổ chức độc lập (10 số)' : 'Chi nhánh / Địa điểm KD (13-14 số)'}\n` +
          `• Tỉnh cấp (2 số đầu): ${main.slice(0, 2)} (01: Hà Nội, 03: TP.HCM...)\n` +
          `➔ Khuyên dùng: Tra cứu tình trạng hoạt động tại https://tracuunnt.gdt.gov.vn`;
      } else {
        vatOut.textContent = `⚠️ Nhập Mã số thuế 10 số (VD: 0100109106) hoặc 14 số để kiểm tra.`;
      }
      return;
    }

    const cleanNum = raw.replace(/[^0-9]/g, '');
    const amount = parseInt(cleanNum, 10) || 10800000;
    let net = 0;
    let vat = 0;
    let total = 0;
    let rate = '8%';

    if (mode === 'extract-8') {
      rate = '8% (Theo NĐ 72/2024 & cập nhật 2026)';
      total = amount;
      net = Math.round(total / 1.08);
      vat = total - net;
    } else if (mode === 'extract-10') {
      rate = '10% (Thuế suất chuẩn phổ thông)';
      total = amount;
      net = Math.round(total / 1.10);
      vat = total - net;
    } else if (mode === 'add-8') {
      rate = '8%';
      net = amount;
      vat = Math.round(net * 0.08);
      total = net + vat;
    }

    vatOut.textContent =
      `🧾 BẢNG BÓC TÁCH THUẾ GTGT (VAT):\n` +
      `• Thuế suất: ${rate}\n` +
      `1. Tiền hàng chưa thuế: ${net.toLocaleString('vi-VN')} VNĐ\n` +
      `2. Tiền thuế GTGT:     ${vat.toLocaleString('vi-VN')} VNĐ\n` +
      `3. TỔNG THANH TOÁN:     ${total.toLocaleString('vi-VN')} VNĐ\n` +
      `➔ Khi lập hóa đơn: Ghi đơn giá chưa thuế (${net.toLocaleString('vi-VN')} đ), thuế VAT ghi dòng riêng.`;
  }

  document.getElementById('btn-vat-extract-8')?.addEventListener('click', () => updateVat('extract-8'));
  document.getElementById('btn-vat-extract-10')?.addEventListener('click', () => updateVat('extract-10'));
  document.getElementById('btn-vat-add-8')?.addEventListener('click', () => updateVat('add-8'));
  document.getElementById('btn-vat-mst')?.addEventListener('click', () => updateVat('mst'));
  if (vatIn && vatOut) updateVat('extract-8');

  // Copy buttons
  document.querySelectorAll('[data-copy-target]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-copy-target');
      const targetEl = document.getElementById(targetId);
      if (targetEl && navigator.clipboard) {
        await navigator.clipboard.writeText(targetEl.textContent || '');
        const old = btn.textContent;
        btn.textContent = '✓ Đã chép!';
        setTimeout(() => {
          btn.textContent = old;
        }, 1500);
      }
    });
  });

  // Restore saved state or Context Menu triggers from chrome.storage.local
  if (chrome?.storage?.local) {
    try {
      const state = await chrome.storage.local.get([
        'activeTab',
        'savedGross',
        'pendingExcelInput',
        'pendingSearchQuery',
      ]);
      if (state.savedGross && document.getElementById('gross-input')) {
        document.getElementById('gross-input').value = state.savedGross;
        calculateGrossNet();
      }
      if (state.pendingExcelInput) {
        switchTab('tab-tools');
        excelIn.value = state.pendingExcelInput;
        excelOut.textContent = convertExcelDelimiter(state.pendingExcelInput, true);
        await chrome.storage.local.remove('pendingExcelInput');
      } else if (state.pendingSearchQuery) {
        switchTab('tab-search');
        searchInput.value = state.pendingSearchQuery;
        renderCards(state.pendingSearchQuery);
        await chrome.storage.local.remove('pendingSearchQuery');
      } else if (state.activeTab) {
        switchTab(state.activeTab);
      }
    } catch (e) {
      console.error('Storage restore error:', e);
    }
  }
});
