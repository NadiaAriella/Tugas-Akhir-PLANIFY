//dropdown profil
document.addEventListener('DOMContentLoaded', function () {
    var arrowIcon = document.getElementById('arrow-dropdown');
    var dropdownContent = document.getElementById('dropdown-content');

    arrowIcon.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
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