document.addEventListener('DOMContentLoaded', function () {
    var dropdownContainer = document.getElementById('dropdown-container');
    var dropdownContent = document.getElementById('dropdown-content');

    dropdownContainer.addEventListener('click', function () {
        // Toggle the visibility of the dropdown content
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Optional: Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (!event.target.matches('#dropdown-container')) {
            if (dropdownContent.style.display === 'block') {
                dropdownContent.style.display = 'none';
            }
        }
    });
});