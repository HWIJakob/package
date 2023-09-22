// Script untuk memilih semua checkbox pada tabel ketika checkbox select_all di-check
            document.getElementById("select_all").addEventListener("change", function() {
                var checkboxes = document.getElementsByName("delete_list[]");
                for (var i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = this.checked;
                }
            });
