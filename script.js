const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


// Dropdown toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        dropdownContent.classList.toggle('show'); // Toggle the dropdown visibility
    });
});
// Search functionality
document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.toLowerCase();

    // Define mapping for pages and sections
    const searchMapping = {
        'cakes': 'cakes.html',
        'cookies': 'cookies.html',
        'Classic tres leches': 'cakes.html#milk-cakes',
        'chocolate chip': 'cookies.html#cookie-recipes',
        'cupcakes': 'cakes.html#cupcakes-section',
        'pancakes': 'cakes.html#pancakes-section',
        'Peanut Butter' : 'cookies.html#cookie-recipes',
        'Oatmeal Cookie' : 'cookies.html#cookie-recipes',
       ' Coconut Tres Leches Cake' :'cookies.html#cookie-recipes',
       'Lemon Cupcake' : 'cakes.html#cupcakes-section',
      ' Chocolate Cupcake' : 'cakes.html#cupcakes-section',
     'Classic Fluffy Pancake' : 'cakes.html#pancakes-section',
     'Banana Pancake' : 'cakes.html#pancakes-section',
     'Blueberry Pancake' : 'cakes.html#pancakes-section',
        // Add more mappings as needed
    };

    // Check if query matches any key in the mapping
    const matchedKey = Object.keys(searchMapping).find(key =>
        query.includes(key)
    );

    if (matchedKey) {
        // Redirect to the corresponding page/section
        window.location.href = searchMapping[matchedKey];
    } else {
        alert('No matching recipes or categories found!');
    }
});

