// Sidebar Toggle
const menu = document.getElementById('menu-label');
const sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', function () {
  sidebar.classList.toggle('hide');
  console.log('Sidebar toggle clicked');
});

// Modal Add Task Today
document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.querySelector(".buttonadd");
    var addTaskForm = document.getElementById("addModal");

    // Add click event listener to the button
    addButton.addEventListener("click", function () {
        // Toggle the visibility of the modal
        addTaskForm.style.display = "block";
    });

    // Add click event listener to close button in the form
    var closeButton = document.querySelector("#addModal .close-button");
    closeButton.addEventListener("click", function () {
        // Close the modal when the close button is clicked
        addTaskForm.style.display = "none";
    });

    // Tambahan: Close the modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (event.target == addTaskForm) {
            addTaskForm.style.display = 'none';
        }
    });
});

// Function to open the edit modal when the arrow is clicked
function openEditModal() {
    var editModal = document.getElementById("editModal");
    editModal.style.display = "block";
}

// Function to close the edit modal
function closeEditModal() {
    var editModal = document.getElementById("editModal");
    editModal.style.display = "none";
}

// Find all elements with class "arrow"
var arrowElements = document.querySelectorAll(".arrow");

// Add click event listener to each arrow element
arrowElements.forEach(function (arrowElement) {
    arrowElement.addEventListener("click", function () {
        // Open the edit modal when the arrow is clicked
        openEditModal();
    });
});

// Add click event listener to close button in the edit modal
var editCloseButton = document.querySelector("#editModal .close-button");
editCloseButton.addEventListener("click", function () {
    // Close the edit modal when the close button is clicked
    closeEditModal();
});

// Tambahan: Close the edit modal if the user clicks outside of it
window.addEventListener('click', function(event) {
    var editModal = document.getElementById("editModal");
    if (event.target == editModal) {
        editModal.style.display = 'none';
    }
});

// Menambahkan Subtask
$(document).ready(function () {
    // Mendengarkan peristiwa klik pada tombol untuk menambahkan subtask
    $('#btn-addsubtask').on('click', function () {
        // Memeriksa apakah jumlah subtask yang ada kurang dari 3
        if ($('.sub-card').length < 3) {
            // Menyalin elemen subtask terakhir dan menyisipkannya setelahnya
            $('.sub-card:last').clone().insertAfter('.sub-card:last');
        } else {
            // Memberikan peringatan atau menangani kasus ketika batas maksimal tercapai
            alert('Anda hanya dapat menambahkan maksimal 3 subtask.');
        }
    });
});

$(document).ready(function () {
    // Mendengarkan peristiwa klik pada tombol untuk menambahkan subtask
    $('#btn-addsubtask2').on('click', function () {
        // Memeriksa apakah jumlah subtask yang ada kurang dari 3
        if ($('.sub-card2').length < 3) {
            // Menyalin elemen subtask terakhir dan menyisipkannya setelahnya
            $('.sub-card2:last').clone().insertAfter('.sub-card2:last');
        } else {
            // Memberikan peringatan atau menangani kasus ketika batas maksimal tercapai
            alert('Anda hanya dapat menambahkan maksimal 3 subtask.');
        }
    });
});


// Modal Add List
document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal-list').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal-list').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal-list')) {
        document.getElementById('modal-list').style.display = 'none';
    }
});


// Color Palete
document.addEventListener('DOMContentLoaded', function() {
    const colorPalette = document.querySelectorAll('.color');
    const square = document.querySelector('.square');

    colorPalette.forEach(color => {
        color.addEventListener('click', function() {
            const selectedColor = this.style.backgroundColor;
            square.style.backgroundColor = selectedColor;
        });
    });

    document.getElementById('openModalBtn').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'block';
    });

    document.getElementById('closeModalBtn').addEventListener('click', function() {
        document.getElementById('modal').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == document.getElementById('modal')) {
            document.getElementById('modal').style.display = 'none';
        }
    });
});

//dropdown profil
document.addEventListener('DOMContentLoaded', function () {
    var arrowIcon = document.getElementById('arrow-dropdown');
    var dropdownContent = document.getElementById('dropdown-content');

    arrowIcon.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });
});


