const HTML_CONTENT = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Card Tab</title>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>⭐</text></svg>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet" media="print" onload="this.media='all'">
    <noscript><link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet"></noscript>
    <style>
    :root {
      --brand: #1e3a5f;
      --brand-2: #2c4a6e;
      --accent: #2563eb;
      --bg: #f5f6f8;
      --surface: #ffffff;
      --surface-2: #fafbfc;
      --chrome: #0f172a;
      --sidebar-text: #94a3b8;
      --sidebar-border: rgba(51, 65, 85, 0.4);
      --ink: #0f172a;
      --ink-2: #334155;
      --ink-3: #64748b;
      --ink-4: #94a3b8;
      --line: #e2e8f0;
      --line-2: #eef2f6;
      --ok: #16a34a;
      --warn: #d97706;
      --danger: #dc2626;
      --info: #2563eb;
      --radius: 3px;
      --header-h: 52px;
      --font-sans: 'IBM Plex Sans', 'Noto Sans SC', 'PingFang SC', sans-serif;
      --font-mono: 'IBM Plex Mono', 'JetBrains Mono', monospace;
    }

    * { box-sizing: border-box; }

    body {
      font-family: var(--font-sans);
      margin: 0;
      padding: 0;
      background: var(--bg);
      color: var(--ink-2);
      font-size: 13px;
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      min-height: 100vh;
    }

    body.dark {
      --bg: #0b1220;
      --surface: #111827;
      --surface-2: #152033;
      --ink: #e2e8f0;
      --ink-2: #cbd5e1;
      --ink-3: #94a3b8;
      --ink-4: #64748b;
      --line: #1e293b;
      --line-2: #172033;
    }

    .dot {
      display: inline-block;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      flex-shrink: 0;
    }
    .dot-ok { background: var(--ok); }
    .dot-warn { background: var(--warn); }
    .dot-danger { background: var(--danger); }
    .dot-info { background: var(--info); }
    .dot-gray { background: var(--ink-4); }
    .dot-pulse { position: relative; }
    .dot-pulse::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: inherit;
      animation: pulse 2s ease-out infinite;
    }
    @keyframes pulse {
      0% { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(2.5); opacity: 0; }
    }

    .fixed-elements {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: transparent;
      padding: 0;
      height: auto;
    }

    .topbar {
      height: var(--header-h);
      background: var(--chrome);
      border-bottom: 1px solid var(--sidebar-border);
      display: flex;
      align-items: center;
      padding: 0 20px;
      gap: 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }

    .logo-mark {
      width: 28px;
      height: 28px;
      background: var(--brand);
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      font-family: var(--font-mono);
    }

    .logo-text {
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      margin: 0;
    }

    .logo-meta {
      color: var(--sidebar-text);
      font-size: 11px;
      font-family: var(--font-mono);
      margin-left: 6px;
    }

    .center-content {
      flex: 1;
      min-width: 0;
      display: flex;
      justify-content: center;
      position: static;
      transform: none;
      top: auto;
      left: auto;
      max-width: none;
      text-align: center;
    }

    #hitokoto {
      margin: 0;
      color: var(--sidebar-text);
      font-size: 12px;
      max-width: 480px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    #hitokoto a {
      color: #cbd5e1;
      text-decoration: none;
    }

    .admin-controls {
      position: static;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12px;
      flex-shrink: 0;
    }

    .admin-controls input[type="password"] {
      width: 120px;
      height: 28px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(148,163,184,0.25);
      border-radius: var(--radius);
      color: #e2e8f0;
      font-family: var(--font-mono);
      font-size: 12px;
      padding: 0 10px;
      outline: none;
    }
    .admin-controls input[type="password"]::placeholder { color: var(--ink-4); }
    .admin-controls input[type="password"]:focus {
      border-color: var(--accent);
      background: rgba(37,99,235,0.08);
    }

    .admin-controls button {
      height: 28px;
      padding: 0 12px;
      border-radius: var(--radius);
      font-size: 12px;
      font-weight: 500;
      font-family: var(--font-sans);
      cursor: pointer;
      border: 1px solid transparent;
      background: transparent;
      color: #cbd5e1;
      transition: background 0.15s, color 0.15s, border-color 0.15s;
    }

    #admin-mode-btn {
      border-color: rgba(148,163,184,0.3);
    }
    #admin-mode-btn:hover {
      background: rgba(255,255,255,0.06);
      color: #fff;
    }

    #secret-garden-btn {
      background: var(--brand);
      border-color: var(--brand);
      color: #fff;
    }
    #secret-garden-btn:hover { background: var(--brand-2); }

    .search-strip {
      background: var(--surface);
      border-bottom: 1px solid var(--line);
      padding: 14px 20px 12px;
    }

    .search-container {
      margin: 0 auto;
      max-width: 640px;
    }

    .search-bar {
      display: flex;
      justify-content: center;
      margin-bottom: 0;
    }

    .search-bar input {
      flex: 1;
      height: 36px;
      padding: 0 12px;
      border: 1px solid var(--line);
      border-right: none;
      border-radius: var(--radius) 0 0 var(--radius);
      background: var(--surface);
      color: var(--ink);
      font-family: var(--font-sans);
      font-size: 13px;
      outline: none;
      width: auto;
    }
    .search-bar input:focus {
      border-color: var(--accent);
      box-shadow: inset 0 0 0 1px var(--accent);
    }
    .search-bar input::placeholder { color: var(--ink-4); }

    .search-bar button {
      height: 36px;
      padding: 0 16px;
      border: 1px solid var(--brand);
      border-radius: 0 var(--radius) var(--radius) 0;
      background: var(--brand);
      color: #fff;
      font-size: 13px;
      font-weight: 500;
      font-family: var(--font-sans);
      cursor: pointer;
    }
    .search-bar button:hover { background: var(--brand-2); }

    .search-engines {
      display: flex;
      justify-content: center;
      gap: 4px;
      margin-top: 10px;
    }

    .search-engine {
      height: 26px;
      padding: 0 12px;
      border: 1px solid transparent;
      background: transparent;
      color: var(--ink-3);
      font-size: 12px;
      font-weight: 500;
      border-radius: var(--radius);
      cursor: pointer;
      font-family: var(--font-sans);
    }
    .search-engine:hover {
      background: var(--surface-2);
      color: var(--ink);
    }
    .search-engine.active {
      color: var(--accent);
      border-color: var(--line);
      background: var(--surface);
      border-bottom: 2px solid var(--accent);
    }

    .content {
      margin-top: 0;
      padding: 20px 24px 40px;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }

    .page-meta {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      margin-bottom: 16px;
      gap: 12px;
    }

    .page-meta h1 {
      margin: 0;
      font-size: 18px;
      font-weight: 600;
      color: var(--ink);
    }

    .page-meta .meta-line {
      font-size: 12px;
      color: var(--ink-4);
      font-family: var(--font-mono);
      margin-top: 2px;
    }

    .status-inline {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--ink-3);
    }

    .add-remove-controls {
      display: none;
      flex-direction: column;
      position: fixed;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      align-items: center;
      gap: 6px;
      z-index: 90;
    }

    .round-btn {
      width: 36px;
      height: 36px;
      border-radius: var(--radius);
      border: 1px solid var(--line);
      background: var(--surface);
      color: var(--ink-2);
      font-family: var(--font-mono);
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      cursor: pointer;
      margin: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.12s, color 0.12s;
    }
    .round-btn:hover {
      background: var(--surface-2);
      color: var(--ink);
    }
    .round-btn.add-btn {
      background: var(--brand);
      border-color: var(--brand);
      color: #fff;
    }
    .round-btn.add-btn:hover { background: var(--brand-2); }
    .add-btn { order: 1; }
    .remove-btn { order: 2; }
    .category-btn { order: 3; }
    .remove-category-btn { order: 4; }

    .section { margin-bottom: 22px; }

    .section-title-container {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 12px;
      padding: 0 2px 8px;
      border-bottom: 1px solid var(--line);
    }

    .section-title {
      font-size: 14px;
      font-weight: 600;
      color: var(--ink-2);
      letter-spacing: 0.03em;
      text-transform: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-count {
      font-family: var(--font-mono);
      font-size: 12px;
      color: var(--ink-4);
      font-weight: 400;
      letter-spacing: 0;
      text-transform: none;
    }

    .delete-category-btn {
      background: transparent;
      color: var(--warn);
      border: 1px solid var(--line);
      padding: 3px 8px;
      border-radius: var(--radius);
      cursor: pointer;
      font-size: 11px;
      font-family: var(--font-sans);
      font-weight: 500;
    }
    .delete-category-btn:hover {
      background: rgba(217, 119, 6, 0.08);
    }

    .card-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
      gap: 8px;
    }

    .card {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 12px;
      width: auto;
      min-width: 0;
      min-height: 72px;
      box-shadow: none;
      cursor: pointer;
      transition: background 0.12s, border-color 0.12s;
      position: relative;
      user-select: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      color: var(--ink-2);
    }

    .card:hover {
      transform: none;
      background: var(--surface-2);
      border-color: #cbd5e1;
    }

    body.dark .card:hover { border-color: #334155; }

    .card.dragging {
      opacity: 0.75;
      border-color: var(--accent);
    }

    .card-top {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 0;
      min-width: 0;
    }

    .card-icon {
      width: 18px;
      height: 18px;
      margin-right: 0;
      border-radius: 2px;
      flex-shrink: 0;
      object-fit: contain;
    }

    .card-title {
      font-size: 13px;
      font-weight: 600;
      color: var(--ink);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    .card-url {
      font-size: 11px;
      color: var(--ink-4);
      font-family: var(--font-mono);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .private-tag {
      background: transparent;
      color: var(--warn);
      font-size: 10px;
      font-weight: 500;
      padding: 0;
      border-radius: 0;
      position: absolute;
      top: 8px;
      right: 8px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      letter-spacing: 0.02em;
    }

    .private-tag .dot { width: 5px; height: 5px; }

    .delete-btn {
      position: absolute;
      top: -8px;
      right: 14px;
      background: var(--danger);
      color: #fff;
      border: none;
      border-radius: var(--radius);
      width: 18px;
      height: 18px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      cursor: pointer;
      display: none;
      padding: 0;
    }

    .edit-btn {
      position: absolute;
      top: -8px;
      right: -8px;
      background: var(--brand);
      color: #fff;
      border: none;
      border-radius: var(--radius);
      width: 18px;
      height: 18px;
      text-align: center;
      font-size: 12px;
      line-height: 18px;
      cursor: pointer;
      padding: 0;
    }
    .edit-btn:hover { background: var(--brand-2); }

    #theme-toggle {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: var(--surface);
      color: var(--ink-3);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      width: 36px;
      height: 36px;
      text-align: center;
      font-size: 16px;
      line-height: 34px;
      cursor: pointer;
      box-shadow: none;
      transition: background 0.12s, color 0.12s;
      z-index: 90;
    }
    #theme-toggle:hover {
      background: var(--surface-2);
      color: var(--ink);
    }

    #dialog-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(15, 23, 42, 0.45);
      justify-content: center;
      align-items: center;
      z-index: 2000;
    }

    #dialog-box {
      background: var(--surface);
      color: var(--ink-2);
      padding: 20px;
      border-radius: var(--radius);
      border: 1px solid var(--line);
      width: 320px;
      box-shadow: none;
    }

    #dialog-title {
      margin: 0 0 16px;
      color: var(--ink);
      font-size: 15px;
      font-weight: 600;
    }

    #dialog-box label {
      display: block;
      font-size: 11px;
      font-weight: 600;
      color: var(--ink-3);
      letter-spacing: 0.04em;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    #dialog-box input,
    #dialog-box select {
      width: 100%;
      margin-bottom: 12px;
      padding: 8px 10px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: var(--surface);
      color: var(--ink);
      font-family: var(--font-sans);
      font-size: 13px;
      outline: none;
    }
    #dialog-box input:focus,
    #dialog-box select:focus {
      border-color: var(--accent);
    }

    .private-link-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 14px;
    }
    #dialog-box .private-link-container label {
      flex-shrink: 0;
      margin: 0;
      text-transform: none;
      letter-spacing: 0;
      font-size: 13px;
      font-weight: 500;
      color: var(--ink-2);
    }
    #dialog-box .private-link-container input[type="checkbox"] {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      accent-color: var(--brand);
    }

    #dialog-box button {
      height: 30px;
      padding: 0 14px;
      border-radius: var(--radius);
      font-size: 13px;
      font-weight: 500;
      font-family: var(--font-sans);
      cursor: pointer;
      margin-right: 8px;
      border: 1px solid var(--line);
      background: var(--surface);
      color: var(--ink-2);
    }
    #dialog-box button:first-of-type {
      background: var(--brand);
      border-color: var(--brand);
      color: #fff;
    }
    #dialog-box button:first-of-type:hover { background: var(--brand-2); }
    #dialog-box button:last-of-type:hover {
      background: var(--surface-2);
      color: var(--ink);
    }


    @media (max-width: 768px) {
      .topbar { padding: 0 12px; gap: 8px; }
      .logo-meta, .center-content { display: none; }
      .admin-controls input[type="password"] { width: 96px; }
      .content { padding: 16px 12px 40px; }
      .add-remove-controls { right: 8px; }
      .card-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
      }
      .card { min-height: 64px; padding: 10px; }
      .card-title { font-size: 12px; }
      .card-url { font-size: 10px; }
      #theme-toggle, .round-btn {
        width: 32px;
        height: 32px;
        font-size: 13px;
      }
      #theme-toggle { right: 10px; bottom: 16px; }
    }

    @media (max-width: 480px) {
      .fixed-elements { position: sticky; }
      .content { margin-top: 0; }
    }
    </style>
</head>

<body>
    <div class="fixed-elements">
        <div class="topbar">
            <div class="logo">
                <div class="logo-mark">CT</div>
                <h3 class="logo-text">Card Tab<span class="logo-meta">NAV / 01</span></h3>
            </div>
            <div class="center-content">
                <p id="hitokoto">
                    <a href="#" id="hitokoto_text"></a>
                </p>
                <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" async></script>
            </div>
            <div class="admin-controls">
                <input type="password" id="admin-password" placeholder="ADMIN KEY">
                <button id="admin-mode-btn" onclick="toggleAdminMode()">设置</button>
                <button id="secret-garden-btn" onclick="toggleSecretGarden()">登录</button>
            </div>
        </div>
        <div class="search-strip">
            <div class="search-container">
                <div class="search-bar">
                    <input type="text" id="search-input" placeholder="搜索网页、书签或分类…">
                    <button id="search-button">搜索</button>
                </div>
                <div class="search-engines">
                    <button class="search-engine" data-engine="baidu">百度</button>
                    <button class="search-engine" data-engine="bing">必应</button>
                    <button class="search-engine" data-engine="google">谷歌</button>
                </div>
            </div>
        </div>
    </div>

    <div class="content">
        <div class="page-meta">
            <div>
                <h1>我的导航</h1>
                <div class="meta-line">BOOKMARK WORKSPACE · CLOUDFLARE WORKER</div>
            </div>
            <span class="status-inline"><span class="dot dot-ok dot-pulse"></span>ONLINE</span>
        </div>

        <div class="add-remove-controls">
            <button class="round-btn add-btn" onclick="showAddDialog()">+</button>
            <button class="round-btn remove-btn" onclick="toggleRemoveMode()">−</button>
            <button class="round-btn category-btn" onclick="addCategory()">C+</button>
            <button class="round-btn remove-category-btn" onclick="toggleRemoveCategory()">C−</button>
        </div>

        <div id="sections-container"></div>

        <button id="theme-toggle" onclick="toggleTheme()" title="切换主题">◑</button>

        <div id="dialog-overlay">
            <div id="dialog-box">
                <h2 id="dialog-title">添加卡片</h2>
                <label for="name-input">名称</label>
                <input type="text" id="name-input">
                <label for="url-input">地址</label>
                <input type="text" id="url-input">
                <label for="category-select">选择分类</label>
                <select id="category-select"></select>
                <div class="private-link-container">
                    <label for="private-checkbox">私密链接</label>
                    <input type="checkbox" id="private-checkbox">
                </div>
                <button id="dialog-submit" onclick="addLink()">确定</button>
                <button onclick="hideAddDialog()">取消</button>
            </div>
        </div>

    </div>

    <script>

    // 搜索引擎配置
    const searchEngines = {
        baidu: "https://www.baidu.com/s?wd=",
        bing: "https://www.bing.com/search?q=",
        google: "https://www.google.com/search?q="
    };
    
    let currentEngine = "baidu";
    
    // 日志记录函数
    function logAction(action, details) {
        const timestamp = new Date().toISOString();
        const logEntry = timestamp + ': ' + action + ' - ' + JSON.stringify(details);
        console.log(logEntry); 
    }
    
    // 设置当前搜索引擎
    function setActiveEngine(engine) {
        currentEngine = engine;
        document.querySelectorAll('.search-engine').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.engine === engine);
        });
        logAction('设置搜索引擎', { engine });
    }
    
    // 搜索引擎按钮点击事件
    document.querySelectorAll('.search-engine').forEach(button => {
        button.addEventListener('click', () => setActiveEngine(button.dataset.engine));
    });
    
    // 搜索按钮点击事件
    document.getElementById('search-button').addEventListener('click', () => {
        const query = document.getElementById('search-input').value;
        if (query) {
            logAction('执行搜索', { engine: currentEngine, query });
            window.open(searchEngines[currentEngine] + encodeURIComponent(query), '_blank');
        }
    });
    
    // 搜索输入框回车事件
    document.getElementById('search-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            document.getElementById('search-button').click();
        }
    });
    
    // 初始化搜索引擎
    setActiveEngine(currentEngine);
    
    // 全局变量
    let publicLinks = [];
    let privateLinks = [];
    let isAdmin = false;
    let isLoggedIn = false;
    let removeMode = false;
    let isRemoveCategoryMode = false;
    let isDarkTheme = false;
    let links = [];
    let editingLink = null;
    const categories = {};
    
    // 添加新分类
    async function addCategory() {
        if (!await validateToken()) {
            return; 
        }
        const categoryName = prompt('请输入新分类名称:');
        if (categoryName && !categories[categoryName]) {
            categories[categoryName] = [];
            updateCategorySelect();
            renderCategories();
            saveLinks();
            logAction('添加分类', { categoryName, currentLinkCount: links.length });
        } else if (categories[categoryName]) {
            alert('该分类已存在');
            logAction('添加分类失败', { categoryName, reason: '分类已存在' });
        }
    }

    // 删除分类
    async function deleteCategory(category) {
        if (!await validateToken()) {
            return; 
        }
        if (confirm('确定要删除 "' + category + '" 分类吗？这将删除该分类下的所有链接。')) {
            delete categories[category];
            links = links.filter(link => link.category !== category);
            publicLinks = publicLinks.filter(link => link.category !== category);
            privateLinks = privateLinks.filter(link => link.category !== category);
            updateCategorySelect();
            saveLinks();
            renderCategories();
            logAction('删除分类', { category });
        }
    }    

    // 渲染分类(不重新加载链接)
    function renderCategories() {
        const container = document.getElementById('sections-container');
        container.innerHTML = '';
    
        Object.keys(categories).forEach(category => {
            const section = document.createElement('div');
            section.className = 'section';
    
            const titleContainer = document.createElement('div');
            titleContainer.className = 'section-title-container';
    
            const title = document.createElement('div');
            title.className = 'section-title';
            const categoryLinks = links.filter(link => link.category === category);
            title.innerHTML = category + '<span class="section-count">' + String(categoryLinks.length).padStart(2, '0') + '</span>';
    
            titleContainer.appendChild(title);
    
            if (isAdmin) {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '删除分类';
                deleteBtn.className = 'delete-category-btn';
                deleteBtn.style.display = isRemoveCategoryMode ? 'inline-block' : 'none'; 
                deleteBtn.onclick = () => deleteCategory(category);
                titleContainer.appendChild(deleteBtn);
            }
    
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.id = category;
    
            section.appendChild(titleContainer);
            section.appendChild(cardContainer);
    
            container.appendChild(section);
    
            categoryLinks.forEach(link => {
                createCard(link, cardContainer);
            });
        });
    
        logAction('渲染分类', { categoryCount: Object.keys(categories).length, linkCount: links.length });
    }    
    
    // 读取链接数据
    async function loadLinks() {
        const headers = {
            'Content-Type': 'application/json'
        };
        
        // 如果已登录，从 localStorage 获取 token 并添加到请求头
        if (isLoggedIn) {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers['Authorization'] = token; 
            }
        }
        
        try {
            const response = await fetch('/api/getLinks?userId=testUser', {
                headers: headers
            });

            if (response.status === 401) {
                await resetToLoginState('登录已过期，请重新登录');
                return loadLinks();
            }
            
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            
            
            const data = await response.json();
            console.log('Received data:', data); 
            
            if (data.categories) {
                Object.assign(categories, data.categories);
            }
            
            publicLinks = data.links ? data.links.filter(link => !link.isPrivate) : [];
            privateLinks = data.links ? data.links.filter(link => link.isPrivate) : [];
            links = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;

            loadSections();
            updateCategorySelect();
            updateUIState();
            logAction('读取链接', { 
                publicCount: publicLinks.length, 
                privateCount: privateLinks.length,
                isLoggedIn: isLoggedIn,
                hasToken: !!localStorage.getItem('authToken')
            });
        } catch (error) {
            console.error('Error loading links:', error);
            alert('加载链接时出错，请刷新页面重试');
        }
    }
    
    
    // 更新UI状态
    function updateUIState() {
        const passwordInput = document.getElementById('admin-password');
        const adminBtn = document.getElementById('admin-mode-btn');
        const secretGardenBtn = document.getElementById('secret-garden-btn');
        const addRemoveControls = document.querySelector('.add-remove-controls');
    
        passwordInput.style.display = isLoggedIn ? 'none' : 'inline-block';
        secretGardenBtn.textContent = isLoggedIn ? "退出" : "登录";
        secretGardenBtn.style.display = 'inline-block';
    
        if (isAdmin) {
            adminBtn.textContent = "退出设置";
            adminBtn.style.display = 'inline-block';
            addRemoveControls.style.display = 'flex';
        } else if (isLoggedIn) {
            adminBtn.textContent = "设置";
            adminBtn.style.display = 'inline-block';
            addRemoveControls.style.display = 'none';
        } else {
            adminBtn.style.display = 'none';
            addRemoveControls.style.display = 'none';
        }
    
        logAction('更新UI状态', { isAdmin, isLoggedIn });
    }
    
    // 登录状态显示（加载所有链接）
    function showSecretGarden() {
        if (isLoggedIn) {
            links = [...publicLinks, ...privateLinks];
            loadSections();
            // 显示所有私密标签
            document.querySelectorAll('.private-tag').forEach(tag => {
                tag.style.display = 'block';
            });
            logAction('显示私密花园');
        }
    }
    
    // 加载分类和链接
    function loadSections() {
        const container = document.getElementById('sections-container');
        container.innerHTML = '';
    
        Object.keys(categories).forEach(category => {
            const section = document.createElement('div');
            section.className = 'section';
    
            const titleContainer = document.createElement('div');
            titleContainer.className = 'section-title-container';
    
            const title = document.createElement('div');
            title.className = 'section-title';
    
            titleContainer.appendChild(title);
    
            if (isAdmin) {
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '删除分类';
                deleteBtn.className = 'delete-category-btn';
                deleteBtn.style.display = 'none'; 
                deleteBtn.onclick = () => deleteCategory(category);
                titleContainer.appendChild(deleteBtn);
            }
    
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';
            cardContainer.id = category;
    
            section.appendChild(titleContainer);
            section.appendChild(cardContainer);
    
            let privateCount = 0;
            let linkCount = 0;
    
            links.forEach(link => {
                if (link.category === category) {
                    if (link.isPrivate) privateCount++;
                    linkCount++;
                    createCard(link, cardContainer);
                }
            });
    
            title.innerHTML = category + '<span class="section-count">' + String(linkCount).padStart(2, '0') + '</span>';
    
            if (privateCount < linkCount || isLoggedIn) {
                container.appendChild(section);
            }
        });
    
        logAction('加载分类和链接', { isAdmin: isAdmin, linkCount: links.length, categoryCount: Object.keys(categories).length });
    }
    
    // 创建卡片
    function createCard(link, container) {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('draggable', isAdmin);
        card.dataset.isPrivate = link.isPrivate;
    
        const cardTop = document.createElement('div');
        cardTop.className = 'card-top';
    
        // 定义默认的 SVG 图标
        const defaultIconSVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>' +
        '<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>' +
        '</svg>';
        
        // 创建图标元素
        const icon = document.createElement('img');
        icon.className = 'card-icon';
        icon.loading = 'lazy';
        icon.decoding = 'async';
        // icon.src = 'https://api.iowen.cn/favicon/' + extractDomain(link.url) + '.png';
        icon.src = 'https://www.faviconextractor.com/favicon/' + extractDomain(link.url);
        icon.alt = 'Website Icon';
        
        // 如果图片加载失败，使用默认的 SVG 图标
        icon.onerror = function() {
            const svgBlob = new Blob([defaultIconSVG], {type: 'image/svg+xml'});
            const svgUrl = URL.createObjectURL(svgBlob);
            this.src = svgUrl;
            
            this.onload = () => URL.revokeObjectURL(svgUrl);
        };
        
        function extractDomain(url) {
            let domain;
            try {
                domain = new URL(url).hostname;
            } catch (e) {
                domain = url;
            }
            return domain;
        }
    
        const title = document.createElement('div');
        title.className = 'card-title';
        title.textContent = link.name;
    
        cardTop.appendChild(icon);
        cardTop.appendChild(title);
    
        const url = document.createElement('div');
        url.className = 'card-url';
        url.textContent = link.url;
    
        card.appendChild(cardTop);
        card.appendChild(url);
    
        if (link.isPrivate) {
            const privateTag = document.createElement('div');
            privateTag.className = 'private-tag';
            privateTag.innerHTML = '<span class="dot dot-warn"></span>PRIVATE';
            card.appendChild(privateTag);
        }
    
        const correctedUrl = link.url.startsWith('http://') || link.url.startsWith('https://') ? link.url : 'http://' + link.url;
    
        if (!isAdmin) {
            card.addEventListener('click', () => {
                window.open(correctedUrl, '_blank');
                logAction('打开链接', { name: link.name, url: correctedUrl });
            });
        }
    
        if (isAdmin) {
            const editBtn = document.createElement('button');
            editBtn.textContent = '✎';
            editBtn.className = 'edit-btn';
            editBtn.title = '编辑卡片';
            editBtn.setAttribute('aria-label', '编辑 ' + link.name);
            editBtn.onclick = function (event) {
                event.stopPropagation();
                showEditDialog(link);
            };
            card.appendChild(editBtn);
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '–';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function (event) {
            event.stopPropagation();
            removeCard(card);
        };
        card.appendChild(deleteBtn);
    
        updateCardStyle(card);
    
        card.addEventListener('dragstart', dragStart);
        card.addEventListener('dragover', dragOver);
        card.addEventListener('dragend', dragEnd);
        card.addEventListener('drop', drop);
        card.addEventListener('touchstart', touchStart, { passive: false });
    
        if (isAdmin && removeMode) {
            deleteBtn.style.display = 'block';
        }
    
        if (isAdmin || (link.isPrivate && isLoggedIn) || !link.isPrivate) {
            container.appendChild(card);
        }
        // logAction('创建卡片', { name: link.name, isPrivate: link.isPrivate });
    }
    
    // 更新卡片样式（Industrial Control Room：交由 CSS 变量控制）
    function updateCardStyle(card) {
        card.style.backgroundColor = '';
        card.style.color = '';
        card.style.boxShadow = '';
    }
    
    // 更新分类选择下拉框
    function updateCategorySelect() {
        const categorySelect = document.getElementById('category-select');
        categorySelect.innerHTML = '';
    
        Object.keys(categories).forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category;
            categorySelect.appendChild(option);
        });
    
        logAction('更新分类选择', { categoryCount: Object.keys(categories).length });
    }
    
    // 保存链接数据
    async function saveLinks(allLinks = [...publicLinks, ...privateLinks], categoriesToSave = categories) {
        if (isAdmin && !(await validateToken())) {
            return false;
        }
    
        try {
            const response = await fetch('/api/saveOrder', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authToken')
                },
                body: JSON.stringify({ 
                    userId: 'testUser', 
                    links: allLinks,
                    categories: categoriesToSave
                }),
            });
            const result = await response.json();
            if (!response.ok || !result.success) {
                throw new Error(result.message || 'Failed to save links');
            }
            logAction('保存链接', { linkCount: allLinks.length, categoryCount: Object.keys(categoriesToSave).length });
            return true;
        } catch (error) {
            logAction('保存链接失败', { error: error.message });
            alert('保存链接失败，请重试');
            return false;
        }
    }
    
    // 保存新增或编辑的卡片
    async function addLink() {
        if (!await validateToken()) {
            return; 
        }
        const name = document.getElementById('name-input').value.trim();
        const url = document.getElementById('url-input').value.trim();
        const category = document.getElementById('category-select').value;
        const isPrivate = document.getElementById('private-checkbox').checked;

        if (!name || !url || !category) {
            alert('请填写名称、地址并选择分类');
            return;
        }

        if (editingLink) {
            const originalLink = editingLink;
            const original = { ...originalLink };
            const findOriginalIndex = linkArray => {
                const referenceIndex = linkArray.indexOf(originalLink);
                if (referenceIndex !== -1) {
                    return referenceIndex;
                }
                // 拖拽排序会重建数据数组，必要时按原值找回对应卡片
                return linkArray.findIndex(link =>
                    link.name === original.name &&
                    link.url === original.url &&
                    link.isPrivate === original.isPrivate
                );
            };

            const publicIndex = findOriginalIndex(publicLinks);
            const privateIndex = findOriginalIndex(privateLinks);
            if (publicIndex === -1 && privateIndex === -1) {
                alert('原卡片数据已变化，请刷新页面后再编辑');
                return;
            }

            const updatedLink = { ...originalLink, name, url, category, isPrivate };
            const nextPublicLinks = publicLinks.filter((link, index) => index !== publicIndex);
            const nextPrivateLinks = privateLinks.filter((link, index) => index !== privateIndex);
            const targetLinks = isPrivate ? nextPrivateLinks : nextPublicLinks;
            const originalIndex = isPrivate ? privateIndex : publicIndex;
            const insertionIndex = originalIndex === -1
                ? targetLinks.length
                : Math.min(originalIndex, targetLinks.length);
            targetLinks.splice(insertionIndex, 0, updatedLink);

            const allLinks = [...nextPublicLinks, ...nextPrivateLinks];
            const nextCategories = {};
            Object.keys(categories).forEach(categoryName => {
                nextCategories[categoryName] = allLinks.filter(link => link.category === categoryName);
            });

            if (!await saveLinks(allLinks, nextCategories)) {
                return;
            }

            publicLinks = nextPublicLinks;
            privateLinks = nextPrivateLinks;
            Object.keys(categories).forEach(categoryName => delete categories[categoryName]);
            Object.assign(categories, nextCategories);
            links = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;

            loadSections();
            updateCategorySelect();
            hideAddDialog();
            logAction('编辑卡片', { originalUrl: original.url, name, url, category, isPrivate });
            return;
        }

        const newLink = { name, url, category, isPrivate };

        if (isPrivate) {
            privateLinks.push(newLink);
        } else {
            publicLinks.push(newLink);
        }

        links = isLoggedIn ? [...publicLinks, ...privateLinks] : publicLinks;

        if (isAdmin || (isPrivate && isLoggedIn) || !isPrivate) {
            const container = document.getElementById(category);
            if (container) {
                createCard(newLink, container);
            } else {
                categories[category] = [];
                renderCategories();
            }
        }

        saveLinks();
        hideAddDialog();
        logAction('添加卡片', { name, url, category, isPrivate });
    }

    // 删除卡片
    async function removeCard(card) {
        if (!await validateToken()) {
            return; 
        }
        const name = card.querySelector('.card-title').textContent;
        const url = card.querySelector('.card-url').textContent;
        const isPrivate = card.dataset.isPrivate === 'true';
        
        links = links.filter(link => link.url !== url);
        if (isPrivate) {
            privateLinks = privateLinks.filter(link => link.url !== url);
        } else {
            publicLinks = publicLinks.filter(link => link.url !== url);
        }
    
        for (const key in categories) {
            categories[key] = categories[key].filter(link => link.url !== url);
        }
    
        card.remove();
    
        saveLinks();
    
        logAction('删除卡片', { name, url, isPrivate });
    }
    
    // 拖拽卡片
    let draggedCard = null;
    let touchStartX, touchStartY;
    
    // 触屏端拖拽卡片
    function touchStart(event) {
        if (!isAdmin || event.target.closest('button')) {
            return;
        }
        draggedCard = event.target.closest('.card');
        if (!draggedCard) return;
    
        event.preventDefault();
        const touch = event.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
    
        draggedCard.classList.add('dragging');
        
        document.addEventListener('touchmove', touchMove, { passive: false });
        document.addEventListener('touchend', touchEnd);
    
    }
    
    function touchMove(event) {
        if (!draggedCard) return;
        event.preventDefault();
    
        const touch = event.touches[0];
        const currentX = touch.clientX;
        const currentY = touch.clientY;

        const deltaX = currentX - touchStartX;
        const deltaY = currentY - touchStartY;
        draggedCard.style.transform = "translate(" + deltaX + "px, " + deltaY + "px)";
    
        const target = findCardUnderTouch(currentX, currentY);
        if (target && target !== draggedCard) {
            const container = target.parentElement;
            const targetRect = target.getBoundingClientRect();
    
            if (currentX < targetRect.left + targetRect.width / 2) {
                container.insertBefore(draggedCard, target);
            } else {
                container.insertBefore(draggedCard, target.nextSibling);
            }
        }
    }
    
    function touchEnd(event) {
        if (!draggedCard) return;
    
        const card = draggedCard;
        const targetCategory = card.closest('.card-container').id;
    
        validateToken().then(isValid => {
            if (isValid && card) {
                updateCardCategory(card, targetCategory);
                saveCardOrder().catch(error => {
                    console.error('Save failed:', error);
                });
            }
            cleanupDragState();
        });
    }
    
    function findCardUnderTouch(x, y) {
        const cards = document.querySelectorAll('.card:not(.dragging)');
        return Array.from(cards).find(card => {
            const rect = card.getBoundingClientRect();
            return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
        });
    }

    // PC端拖拽卡片
    function dragStart(event) {
        if (!isAdmin) {
            event.preventDefault();
            return;
        }
        if (event.target.closest('button')) {
            event.preventDefault();
            return;
        }
        draggedCard = event.target.closest('.card');
        if (!draggedCard) return;
    
        draggedCard.classList.add('dragging');
        event.dataTransfer.effectAllowed = "move";
        logAction('开始拖拽卡片', { name: draggedCard.querySelector('.card-title').textContent });
    }
    
    function dragOver(event) {
        if (!isAdmin) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        const target = event.target.closest('.card');
        if (target && target !== draggedCard) {
            const container = target.parentElement;
            const mousePositionX = event.clientX;
            const targetRect = target.getBoundingClientRect();
    
            if (mousePositionX < targetRect.left + targetRect.width / 2) {
                container.insertBefore(draggedCard, target);
            } else {
                container.insertBefore(draggedCard, target.nextSibling);
            }
        }
    }
    
    // 清理拖拽状态函数
    function cleanupDragState() {
        if (draggedCard) {
            draggedCard.classList.remove('dragging');
            draggedCard.style.transform = '';
            draggedCard = null;
        }
        
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('touchend', touchEnd);
        
        touchStartX = null;
        touchStartY = null;
    }

    // PC端拖拽结束
    function drop(event) {
        if (!isAdmin) {
            event.preventDefault();
            return;
        }
        event.preventDefault();
        
        const card = draggedCard;
        const targetCategory = event.target.closest('.card-container').id;
        
        validateToken().then(isValid => {
            if (isValid && card) {
                updateCardCategory(card, targetCategory);
                saveCardOrder().catch(error => {
                    console.error('Save failed:', error);
                });
            }
            cleanupDragState();
        });
    }

    function dragEnd(event) {
        if (draggedCard) {
            draggedCard.classList.remove('dragging');
            logAction('拖拽卡片结束');
        }
    }
  
    // 更新卡片分类
    function updateCardCategory(card, newCategory) {
        const cardTitle = card.querySelector('.card-title').textContent;
        const cardUrl = card.querySelector('.card-url').textContent;
        const isPrivate = card.dataset.isPrivate === 'true';
    
        const linkIndex = links.findIndex(link => link.url === cardUrl);
        if (linkIndex !== -1) {
            links[linkIndex].category = newCategory;
        }
    
        const linkArray = isPrivate ? privateLinks : publicLinks;
        const arrayIndex = linkArray.findIndex(link => link.url === cardUrl);
        if (arrayIndex !== -1) {
            linkArray[arrayIndex].category = newCategory;
        }
    
        card.dataset.category = newCategory;
    }

    // 在页面加载完成后添加触摸事件监听器
    document.addEventListener('DOMContentLoaded', function() {
        const cardContainers = document.querySelectorAll('.card-container');
        cardContainers.forEach(container => {
            container.addEventListener('touchstart', touchStart, { passive: false });
        });
    });    
    
    // 保存卡片顺序
    async function saveCardOrder() {
        if (!await validateToken()) {
            return; 
        }
        const containers = document.querySelectorAll('.card-container');
        let newPublicLinks = [];
        let newPrivateLinks = [];
        let newCategories = {};
    
        containers.forEach(container => {
            const category = container.id;
            newCategories[category] = [];
    
            [...container.children].forEach(card => {
                const url = card.querySelector('.card-url').textContent;
                const name = card.querySelector('.card-title').textContent;
                const isPrivate = card.dataset.isPrivate === 'true';
                card.dataset.category = category;
                const link = { name, url, category, isPrivate };
                if (isPrivate) {
                    newPrivateLinks.push(link);
                } else {
                    newPublicLinks.push(link);
                }
                newCategories[category].push(link); 
            });
        });
    
        publicLinks.length = 0;
        publicLinks.push(...newPublicLinks);
        privateLinks.length = 0;
        privateLinks.push(...newPrivateLinks);
        Object.keys(categories).forEach(key => delete categories[key]);
        Object.assign(categories, newCategories);
    
        logAction('保存卡片顺序', { 
            publicCount: newPublicLinks.length, 
            privateCount: newPrivateLinks.length, 
            categoryCount: Object.keys(newCategories).length 
        });
    
        try {
            const response = await fetch('/api/saveOrder', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('authToken')
                },
                body: JSON.stringify({ 
                    userId: 'testUser', 
                    links: [...newPublicLinks, ...newPrivateLinks],
                    categories: newCategories
                }),
            });
            const result = await response.json();
            if (!result.success) {
                throw new Error('Failed to save order');
            }
            logAction('保存卡片顺序', { publicCount: newPublicLinks.length, privateCount: newPrivateLinks.length, categoryCount: Object.keys(newCategories).length });
        } catch (error) {
            logAction('保存顺序失败', { error: error.message });
            alert('保存顺序失败，请重试');
        }
    }             
    
    // 设置状态重新加载卡片
    function reloadCardsAsAdmin() {
        document.querySelectorAll('.card-container').forEach(container => {
            container.innerHTML = '';
        });
        loadLinks().then(() => {
            if (isDarkTheme) {
                applyDarkTheme();
            }
        });
        logAction('重新加载卡片（管理员模式）');
    }
    
    // 密码输入框回车事件
    document.getElementById('admin-password').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            toggleSecretGarden();
        }
    });
    
    // 切换设置状态
    async function toggleAdminMode() {
        const adminBtn = document.getElementById('admin-mode-btn');
        const addRemoveControls = document.querySelector('.add-remove-controls');
    
        if (!isAdmin && isLoggedIn) {
            if (!await validateToken()) {
                return; 
            }

            // 在进入设置模式之前进行备份
            try {
                const response = await fetch('/api/backupData', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json',
                        'Authorization': localStorage.getItem('authToken')
                    },
                    body: JSON.stringify({ 
                        sourceUserId: 'testUser', 
                        backupUserId: 'backup' 
                    }),
                });
                const result = await response.json();
                if (result.success) {
                    logAction('数据备份成功');
                } else {
                    throw new Error('备份失败');
                }
            } catch (error) {
                logAction('数据备份失败', { error: error.message });
                if (!confirm('备份失败，是否仍要继续进入设置模式？')) {
                    return;
                }
            }

            isAdmin = true;
            adminBtn.textContent = "退出设置";
            addRemoveControls.style.display = 'flex';
            alert('准备设置分类和书签');
            reloadCardsAsAdmin();
            logAction('进入设置');
        } else if (isAdmin) {
            isAdmin = false;
            removeMode = false;
            adminBtn.textContent = "设置";
            addRemoveControls.style.display = 'none';
            alert('设置已保存');
            reloadCardsAsAdmin();
            logAction('离开设置');
        }
    
        updateUIState();
    }
    
    // 切换到登录状态
    function toggleSecretGarden() {
        const passwordInput = document.getElementById('admin-password');
        if (!isLoggedIn) {
            verifyPassword(passwordInput.value)
                .then(result => {
                    if (result.valid) {
                        isLoggedIn = true;
                        localStorage.setItem('authToken', result.token);
                        console.log('Token saved:', result.token); 
                        loadLinks(); 
                        alert('登录成功！');
                        logAction('登录成功');
                    } else {
                        alert('密码错误');
                        logAction('登录失败', { reason: result.error || '密码错误' });
                    }
                    updateUIState();
                })
                .catch(error => {
                    console.error('Login error:', error);
                    alert('登录过程出错，请重试');
                });
        } else {
            isLoggedIn = false;
            isAdmin = false;
            localStorage.removeItem('authToken');
            links = publicLinks;
            loadSections();
            alert('退出登录！');
            updateUIState();
            passwordInput.value = '';
            logAction('退出登录');
        }
    }
    
    // 应用暗色主题
    function applyDarkTheme() {
        document.body.classList.add('dark');
        isDarkTheme = true;
        logAction('应用暗色主题');
    }
    
    // 重置卡片对话框
    function resetLinkDialog() {
        editingLink = null;
        document.getElementById('dialog-title').textContent = '添加卡片';
        document.getElementById('dialog-submit').textContent = '确定';
        document.getElementById('name-input').value = '';
        document.getElementById('url-input').value = '';
        document.getElementById('private-checkbox').checked = false;
        const categorySelect = document.getElementById('category-select');
        categorySelect.selectedIndex = categorySelect.options.length ? 0 : -1;
    }

    // 显示添加链接对话框
    function showAddDialog() {
        resetLinkDialog();
        updateCategorySelect();
        document.getElementById('dialog-overlay').style.display = 'flex';
        document.getElementById('name-input').focus();
        logAction('显示添加链接对话框');
    }

    // 显示编辑链接对话框
    async function showEditDialog(link) {
        if (!isAdmin || !await validateToken()) {
            return;
        }

        resetLinkDialog();
        editingLink = link;
        updateCategorySelect();
        document.getElementById('dialog-title').textContent = '编辑卡片';
        document.getElementById('dialog-submit').textContent = '保存';
        document.getElementById('name-input').value = link.name;
        document.getElementById('url-input').value = link.url;
        document.getElementById('category-select').value = link.category;
        document.getElementById('private-checkbox').checked = link.isPrivate;
        document.getElementById('dialog-overlay').style.display = 'flex';
        document.getElementById('name-input').focus();
        logAction('显示编辑链接对话框', { name: link.name, url: link.url });
    }
    
    // 隐藏卡片对话框
    function hideAddDialog() {
        document.getElementById('dialog-overlay').style.display = 'none';
        resetLinkDialog();
        logAction('隐藏卡片对话框');
    }
    
    // 切换删除卡片模式
    function toggleRemoveMode() {
        removeMode = !removeMode;
        const deleteButtons = document.querySelectorAll('.delete-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = removeMode ? 'block' : 'none';
        });
        logAction('切换删除卡片模式', { removeMode });
    }
    
    //切换删除分类模式
    function toggleRemoveCategory() {
        isRemoveCategoryMode = !isRemoveCategoryMode;
        const deleteButtons = document.querySelectorAll('.delete-category-btn');
        deleteButtons.forEach(btn => {
            btn.style.display = isRemoveCategoryMode ? 'inline-block' : 'none';
        });
        logAction('切换删除分类模式', { isRemoveCategoryMode });
    }
    
    // 切换主题
    function toggleTheme() {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark', isDarkTheme);
        logAction('切换主题', { isDarkTheme });
    }
    
    // 验证密码
    async function verifyPassword(inputPassword) {
        const response = await fetch('/api/verifyPassword', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password: inputPassword }),
        });
        const result = await response.json();
        return result;
    }
    
    // 脚本位于页面底部，立即初始化，避免等待第三方资源
    // getLinks 会同时验证 token，无需在初始化时重复请求两次
    isLoggedIn = !!localStorage.getItem('authToken');
    updateUIState();
    loadLinks();


    // 前端检查是否有 token
    async function validateToken() {
        const token = localStorage.getItem('authToken');
        if (!token) {
            isLoggedIn = false;
            updateUIState();
            return false;
        }

        try {
            const response = await fetch('/api/getLinks?userId=testUser', {
                headers: { 'Authorization': token }
            });
            
            if (response.status === 401) {
                await resetToLoginState('token已过期，请重新登录'); 
                return false;
            }
            
            isLoggedIn = true;
            updateUIState();
            return true;
        } catch (error) {
            console.error('Token validation error:', error);
            return false;
        }
    }

    // 重置状态
    async function resetToLoginState(message) {
        alert(message);
        
        cleanupDragState();
        
        localStorage.removeItem('authToken');
        isLoggedIn = false;
        isAdmin = false;
        removeMode = false;
        isRemoveCategoryMode = false;
        editingLink = null;
        
        const passwordInput = document.getElementById('admin-password');
        if (passwordInput) {
            passwordInput.value = '';
        }
        
        updateUIState();
        links = publicLinks;
        loadSections();
        
        const addRemoveControls = document.querySelector('.add-remove-controls');
        if (addRemoveControls) {
            addRemoveControls.style.display = 'none';
        }
        
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.style.display = 'none';
        });
        
        document.querySelectorAll('.delete-category-btn').forEach(btn => {
            btn.style.display = 'none';
        });
        
        const dialogOverlay = document.getElementById('dialog-overlay');
        if (dialogOverlay) {
            dialogOverlay.style.display = 'none';
        }
    }

    </script>
</body>

</html>
`;

// 服务端 token 验证
async function validateServerToken(authToken, env) {
    if (!authToken) {
        return {
            isValid: false,
            status: 401,
            response: { error: 'Unauthorized', message: '未登录或登录已过期' }
        };
    }

    try {
        const [timestamp, hash] = authToken.split('.');
        const tokenTimestamp = parseInt(timestamp);
        const now = Date.now();
        
        const FIFTEEN_MINUTES = 15 * 60 * 1000;
        if (now - tokenTimestamp > FIFTEEN_MINUTES) {
            return {
                isValid: false,
                status: 401,
                response: { 
                    error: 'Token expired',
                    tokenExpired: true,
                    message: '登录已过期，请重新登录'
                }
            };
        }
        
        const tokenData = timestamp + "_" + env.ADMIN_PASSWORD;
        const encoder = new TextEncoder();
        const data = encoder.encode(tokenData);
        const hashBuffer = await crypto.subtle.digest('SHA-256', data);
        const expectedHash = btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
        
        if (hash !== expectedHash) {
            return {
                isValid: false,
                status: 401,
                response: { 
                    error: 'Invalid token',
                    tokenInvalid: true,
                    message: '登录状态无效，请重新登录'
                }
            };
        }

        return { isValid: true };
    } catch (error) {
        return {
            isValid: false,
            status: 401,
            response: { 
                error: 'Invalid token',
                tokenInvalid: true,
                message: '登录验证失败，请重新登录'
            }
        };
    }
}

export default {
    async fetch(request, env) {
      const url = new URL(request.url);
  
      if (url.pathname === '/') {
        return new Response(HTML_CONTENT, {
          headers: { 'Content-Type': 'text/html' }
        });
      }
  
      if (url.pathname === '/api/getLinks') {
        const userId = url.searchParams.get('userId');
        const authToken = request.headers.get('Authorization');
        const data = await env.CARD_ORDER.get(userId);
  
        if (data) {
            const parsedData = JSON.parse(data);
            
            // 验证 token
            if (authToken) {
                const validation = await validateServerToken(authToken, env);
                if (!validation.isValid) {
                    return new Response(JSON.stringify(validation.response), {
                        status: validation.status,
                        headers: { 'Content-Type': 'application/json' }
                    });
                }

                // Token 有效，返回完整数据
                return new Response(JSON.stringify(parsedData), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            // 未提供 token，只返回公开数据
            const filteredLinks = parsedData.links.filter(link => !link.isPrivate);
            const filteredCategories = {};
            Object.keys(parsedData.categories).forEach(category => {
                filteredCategories[category] = parsedData.categories[category].filter(link => !link.isPrivate);
            });
  
            return new Response(JSON.stringify({
                links: filteredLinks,
                categories: filteredCategories
            }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' }
            });
        }
  
        return new Response(JSON.stringify({
            links: [],
            categories: {}
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
      }
  
      if (url.pathname === '/api/saveOrder' && request.method === 'POST') {
        const authToken = request.headers.get('Authorization');
        const validation = await validateServerToken(authToken, env);
        
        if (!validation.isValid) {
            return new Response(JSON.stringify(validation.response), {
                status: validation.status,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const { userId, links, categories } = await request.json();
        await env.CARD_ORDER.put(userId, JSON.stringify({ links, categories }));
        return new Response(JSON.stringify({ 
            success: true,
            message: '保存成功'
        }), { 
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
      }
  
      if (url.pathname === '/api/verifyPassword' && request.method === 'POST') { 
        try {
            const { password } = await request.json();
            const isValid = password === env.ADMIN_PASSWORD;
            
            if (isValid) {
                // 生成包含时间戳的加密 token
                const timestamp = Date.now();
                const tokenData = timestamp + "_" + env.ADMIN_PASSWORD; 
                const encoder = new TextEncoder();
                const data = encoder.encode(tokenData);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                
                // 使用指定格式：timestamp.hash
                const token = timestamp + "." + btoa(String.fromCharCode(...new Uint8Array(hashBuffer)));
                
                return new Response(JSON.stringify({ 
                    valid: true,
                    token: token 
                }), {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' }
                });
            }
            
            return new Response(JSON.stringify({ 
                valid: false,
                error: 'Invalid password'
            }), {
                status: 403,
                headers: { 'Content-Type': 'application/json' }
            });
        } catch (error) {
            return new Response(JSON.stringify({ 
                valid: false,
                error: error.message 
            }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            });
        }
      }
  
      if (url.pathname === '/api/backupData' && request.method === 'POST') {
        const { sourceUserId } = await request.json();
        const result = await this.backupData(env, sourceUserId);
        return new Response(JSON.stringify(result), {
          status: result.success ? 200 : 404,
          headers: { 'Content-Type': 'application/json' }
        });
      }  
  
      return new Response('Not Found', { status: 404 });
    },
  
    async backupData(env, sourceUserId) {
        const MAX_BACKUPS = 10;
        const sourceData = await env.CARD_ORDER.get(sourceUserId);
        
        if (sourceData) {
            try {
                const currentDate = new Date().toLocaleString('zh-CN', {
                    timeZone: 'Asia/Shanghai',
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: false
                }).replace(/\//g, '-'); 
                
                const backupId = `backup_${currentDate}`;
                
                const backups = await env.CARD_ORDER.list({ prefix: 'backup_' });
                const backupKeys = backups.keys.map(key => key.name).sort((a, b) => {
                    const timeA = new Date(a.split('_')[1].replace(/-/g, '/')).getTime();
                    const timeB = new Date(b.split('_')[1].replace(/-/g, '/')).getTime();
                    return timeB - timeA;  // 降序排序，最新的在前
                });
                
                await env.CARD_ORDER.put(backupId, sourceData);
                
                const allBackups = [...backupKeys, backupId].sort((a, b) => {
                    const timeA = new Date(a.split('_')[1].replace(/-/g, '/')).getTime();
                    const timeB = new Date(b.split('_')[1].replace(/-/g, '/')).getTime();
                    return timeB - timeA;
                });
                
                const backupsToDelete = allBackups.slice(MAX_BACKUPS);
                
                if (backupsToDelete.length > 0) {
                    await Promise.all(
                        backupsToDelete.map(key => env.CARD_ORDER.delete(key))
                    );
                }
    
                return { 
                    success: true, 
                    backupId,
                    remainingBackups: MAX_BACKUPS,
                    deletedCount: backupsToDelete.length 
                };
            } catch (error) {
                return { 
                    success: false, 
                    error: 'Backup operation failed',
                    details: error.message 
                };
            }
        }
        return { success: false, error: 'Source data not found' };
    }
  };
