//dropdown profil
document.addEventListener('DOMContentLoaded', function () {
    var arrowIcon = document.getElementById('arrow-dropdown');
    var dropdownContent = document.getElementById('dropdown-content');

    arrowIcon.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});


// Modal Add Sticky
document.getElementById('btn-addst').addEventListener('click', function() {
    document.getElementById('modal-sticky').style.display = 'block';
});

document.getElementById('closeBtnSt').addEventListener('click', function() {
    console.log("Close button clicked"); // Add this line
    document.getElementById('modal-sticky').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal-sticky')) {
        document.getElementById('modal-sticky').style.display = 'none';
    }
});

function execCommand(command, value = null) {
    document.execCommand(command, false, value);
}


document.getElementById('delBtn').addEventListener('click', function() {
    // Hapus konten pada form
    document.getElementById('titlesticky').value = ''; // Hapus nilai input titlesticky
    document.getElementById('editor').innerHTML = ''; // Hapus konten dari editor
});

// Tombol Save pada Modal Sticky Wall
document.getElementById('saveBtn').addEventListener('click', function() {
    // Mengambil nilai dari input dan elemen form
    var title = document.getElementById('titlesticky').value;
    var content = document.getElementById('editor').innerHTML;

    // Membuat elemen card baru
    var newCard = createStickyCard(title, content);

    // Menambahkan card baru ke dalam card-sticky
    var cardSticky = document.querySelector('.card-sticky');
    cardSticky.appendChild(newCard);

    // Menutup modal Sticky Wall
    closeStickyModal();
});

// Fungsi untuk menutup modal Sticky Wall
function closeStickyModal() {
    document.getElementById('modal-sticky').style.display = 'none';
}

// Fungsi untuk membuat elemen card Sticky Wall
function createStickyCard(title, content, cardStickyContainer) {
    // Membuat elemen card baru
    var newCard = document.createElement('div');
    newCard.classList.add('card-st');

    // Menambahkan card-header ke dalam card-st
    var cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    cardHeader.innerHTML = `
        <h3>${title}</h3>
    `;
    newCard.appendChild(cardHeader);

    // Menambahkan card-content ke dalam card-st
    var cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    cardContent.innerHTML = content;
    newCard.appendChild(cardContent);

    // Menetapkan warna latar belakang dari palet warna secara acak
    setRandomBackgroundColor(newCard);

    return newCard;

    // Menambahkan card baru ke dalam subcontent
    document.getElementById('subcontent').appendChild(newCard);
}

function setRandomBackgroundColor(element) {
    // Daftar warna yang belum digunakan
    let remainingColors = ['#BDA3ED', '#EADDFF', '#E4F2FD', '#F3EDF7', '#E086FF'];

    // Jika tidak ada warna yang tersisa, reset daftar warna
    if (remainingColors.length === 0) {
        remainingColors = ['#BDA3ED', '#EADDFF', '#E4F2FD', '#F3EDF7', '#E086FF'];
    }

    // Pilih warna secara acak dari daftar warna yang belum digunakan
    const randomIndex = Math.floor(Math.random() * remainingColors.length);
    const randomColor = remainingColors[randomIndex];

    // Terapkan warna ke elemen
    element.style.backgroundColor = randomColor;

    // Hapus warna yang telah digunakan dari daftar
    remainingColors.splice(randomIndex, 1);
}
  
// Menambahkan event listener ke setiap card-st
document.addEventListener('click', function(event) {
    var clickedElement = event.target;

    // Cek apakah yang diklik adalah card-st
    if (clickedElement.classList.contains('card-st')) {
        // Mendapatkan isi dari card-st yang diklik
        var title = clickedElement.querySelector('.card-header').textContent;
        var content = clickedElement.querySelector('.card-content').innerHTML;

        // Menampilkan modal-sticky dengan isi yang sesuai
        showStickyModal(title, content);
    }
});

// Fungsi untuk menampilkan modal-sticky dengan isi yang sesuai
function showStickyModal(title, content) {
    var modalSticky = document.getElementById('modal-sticky');
    var titleStickyInput = document.getElementById('titlesticky');
    var editor = document.getElementById('editor');

    // Menetapkan nilai input titlesticky dan konten editor
    titleStickyInput.value = title;
    editor.innerHTML = content;

    // Menampilkan modal-sticky
    modalSticky.style.display = 'block';
}

// Dapatkan semua elemen dengan class 'btn-tool'
var btnTools = document.querySelectorAll('.btn-tool');

// Tambahkan event listener untuk setiap elemen
btnTools.forEach(function(btnTool) {
    btnTool.addEventListener('click', function () {
        // Periksa apakah command sudah aktif atau tidak
        var isCommandActive = document.queryCommandState(btnTool.getAttribute('data-command'));

        // Toggle kelas 'clicked' pada elemen tombol
        btnTool.classList.toggle('clicked', !isCommandActive);

        // Terapkan warna dan gaya sesuai dengan status tombol
        if (!isCommandActive) {
            // Jika command belum aktif, ubah warna dan gaya
            btnTool.style.backgroundColor = '#5c18d28c'; /* Ganti dengan warna yang diinginkan */
            btnTool.style.borderRadius = '2px';

            // Jalankan perintah
            document.execCommand(btnTool.getAttribute('data-command'), false, null);
        } else {
            // Jika command sudah aktif, kembalikan ke kondisi semula
            btnTool.style.backgroundColor = ''; // Kembalikan ke warna semula atau ganti dengan warna semula yang diinginkan
            btnTool.style.borderRadius = ''; // Kembalikan ke border radius semula atau ganti dengan border radius semula yang diinginkan

            // Jalankan perintah untuk mematikan style
            document.execCommand(btnTool.getAttribute('data-command'), false, null);
        }
    });
});

