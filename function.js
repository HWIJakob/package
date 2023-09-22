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


