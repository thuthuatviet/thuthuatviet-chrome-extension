/**
 * Thủ Thuật Việt — Background Service Worker (Manifest V3)
 * - Mở Side Panel khi click icon extension (openPanelOnActionClick: true)
 * - Lưu trữ trạng thái qua chrome.storage.local (Ephemeral Service Worker safe)
 * - Tích hợp Context Menu xử lý nhanh công thức Excel / tra cứu văn bản bôi đen
 */

chrome.sidePanel
  .setPanelBehavior({ openPanelOnActionClick: true })
  .catch((err) => console.error('Failed to set sidePanel behavior:', err));

chrome.runtime.onInstalled.addListener(async () => {
  try {
    chrome.contextMenus.removeAll(() => {
      chrome.contextMenus.create({
        id: 'ttv-fix-excel-formula',
        title: '⚡ Sửa dấu công thức Excel (, ⇄ ;) trong Thủ Thuật Việt',
        contexts: ['selection'],
      });
      chrome.contextMenus.create({
        id: 'ttv-search-selection',
        title: '🔍 Tra cứu giải pháp 30s trên Thủ Thuật Việt',
        contexts: ['selection'],
      });
    });

    const existing = await chrome.storage.local.get(['activeTab', 'savedGross']);
    if (!existing.activeTab) {
      await chrome.storage.local.set({
        activeTab: 'tab-search',
        savedGross: '20000000',
      });
    }
  } catch (err) {
    console.error('onInstalled initialization error:', err);
  }
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  try {
    const selectedText = (info.selectionText || '').trim();
    if (!selectedText) return;

    if (info.menuItemId === 'ttv-fix-excel-formula') {
      await chrome.storage.local.set({
        activeTab: 'tab-tools',
        pendingExcelInput: selectedText,
        lastContextTimestamp: Date.now(),
      });
    } else if (info.menuItemId === 'ttv-search-selection') {
      await chrome.storage.local.set({
        activeTab: 'tab-search',
        pendingSearchQuery: selectedText,
        lastContextTimestamp: Date.now(),
      });
    }

    if (tab && typeof tab.windowId === 'number') {
      await chrome.sidePanel.open({ windowId: tab.windowId });
    }

    await chrome.action.setBadgeText({ text: 'OK' });
    await chrome.action.setBadgeBackgroundColor({ color: '#10B981' });
    setTimeout(() => {
      chrome.action.setBadgeText({ text: '' }).catch(() => {});
    }, 2000);
  } catch (err) {
    console.error('Context menu handler error:', err);
  }
});
