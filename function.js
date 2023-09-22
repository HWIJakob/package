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


            // Script untuk memilih semua checkbox pada tabel ketika checkbox select_all di-check
            document.getElementById("select_all").addEventListener("change", function() {
                var checkboxes = document.getElementsByName("delete_list[]");
                for (var i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = this.checked;
                }
            });
        
