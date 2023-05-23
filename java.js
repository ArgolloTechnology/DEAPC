const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
    document.body.style.marginLeft = sidebar.style.display === 'none' ? '1%' : '11%';
});