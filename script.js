// DYNAMIC APPLICATION NAVIGATION SYSTEM TAB SWITCHER
function switchTab(tabId) {
    // 1. Hide all window workspace panels
    const tabViews = document.querySelectorAll('.tab-view');
    tabViews.forEach(view => view.classList.remove('active'));

    // 2. Clear all high-light statuses from the left menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // 3. Make selected view container frame pop out visibly
    const targetView = document.getElementById('tab-' + tabId);
    if (targetView) {
        targetView.classList.add('active');
    }

    // 4. Highlight the corresponding selected menu click option text string line
    // Find the menu item based on text match or button activation signatures
    const activeItem = Array.from(menuItems).find(item => item.textContent.toLowerCase().includes(tabId.replace('-', ' ')));
    if (activeItem) {
        activeItem.classList.add('active');
    }
}
