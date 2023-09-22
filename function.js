 const menuToggle = document.getElementById('menu-toggle');
                const navMenu = document.getElementById('nav-menu');
                const body = document.getElementsByTagName('body')[0];
                menuToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('hidden');
                });
                body.addEventListener('click', (event) => {
                    if (!event.target.closest('#nav-menu') && !event.target.closest('#menu-toggle')) {
                        navMenu.classList.add('hidden');
                    }
                });

const searchInput = document.querySelector('input[name="search"]');
                    const clearSearchBtn = document.querySelector('.clear-search-btn');

                    // Set tombol clear search untuk disembunyikan saat halaman dimuat
                    if (searchInput.value === '') {
                        clearSearchBtn.classList.add('hidden');
                    } else {
                        clearSearchBtn.classList.remove('hidden');
                    }

                    // Event listener untuk input pencarian
                    searchInput.addEventListener('input', function(event) {
                        if (event.target.value === '') {
                            clearSearchBtn.classList.add('hidden');
                        } else {
                            clearSearchBtn.classList.remove('hidden');
                        }
                    });

                    
// Event listener untuk tombol clear search
                    clearSearchBtn.addEventListener('click', function(event) {
                        event.preventDefault();

                        // Kosongkan input pencarian
                        searchInput.value = '';

                        // Set tombol clear search kembali disembunyikan
                        clearSearchBtn.classList.add('hidden');

                        // Submit form setelah membersihkan input pencarian
                        this.closest('form').submit();
                    });
