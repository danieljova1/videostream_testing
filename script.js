// Function to generate a random date within the last year
function randomDate() {
    const now = new Date();
    const pastYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
    return new Date(pastYear.getTime() + Math.random() * (now.getTime() - pastYear.getTime()));
}

// Function to format date
function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Array of random usernames
const usernames = ['CoolUser123', 'VideoMaster', 'ContentCreator', 'TechGuru', 'MusicLover', 'GamingPro', 'TravelExplorer', 'FoodieDelights', 'ScienceNerd', 'ArtisticSoul'];

// Sample video data with categories
const videos = [
    { id: 1, title: "Top 10 Pop Hits of 2023", thumbnail: "https://via.placeholder.com/250x150", views: "5.2M views", category: "music", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { id: 2, title: "Rock Classics from the 80s", thumbnail: "https://via.placeholder.com/250x150", views: "1.8M views", category: "music", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Minecraft: Building a Mega City", thumbnail: "https://via.placeholder.com/250x150", views: "3.4M views", category: "gaming", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Fortnite World Cup Highlights", thumbnail: "https://via.placeholder.com/250x150", views: "7.1M views", category: "gaming", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Avengers: Secret Wars - Official Trailer", thumbnail: "https://via.placeholder.com/250x150", views: "12M views", category: "movies", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Top 5 Comedy Movies of All Time", thumbnail: "https://via.placeholder.com/250x150", views: "2.3M views", category: "movies", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Learn JavaScript in 1 Hour", thumbnail: "https://via.placeholder.com/250x150", views: "1.5M views", category: "education", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "DIY Home Decor Ideas", thumbnail: "https://via.placeholder.com/250x150", views: "4.7M views", category: "lifestyle", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Easy 15-Minute Workout Routine", thumbnail: "https://via.placeholder.com/250x150", views: "3.9M views", category: "fitness", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Exploring the Amazon Rainforest", thumbnail: "https://via.placeholder.com/250x150", views: "2.8M views", category: "travel", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "How to Make the Perfect Pizza", thumbnail: "https://via.placeholder.com/250x150", views: "6.2M views", category: "food", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Latest Tech Gadgets Review 2023", thumbnail: "https://via.placeholder.com/250x150", views: "1.9M views", category: "technology", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Relaxing Piano Music for Studying", thumbnail: "https://via.placeholder.com/250x150", views: "8.5M views", category: "music", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Call of Duty: Warzone Best Moments", thumbnail: "https://via.placeholder.com/250x150", views: "4.3M views", category: "gaming", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Breaking News: Global Summit 2023", thumbnail: "https://via.placeholder.com/250x150", views: "1.1M views", category: "news", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Cute Puppies Compilation", thumbnail: "https://via.placeholder.com/250x150", views: "15M views", category: "animals", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "Unboxing the New iPhone 15", thumbnail: "https://via.placeholder.com/250x150", views: "3.7M views", category: "technology", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "5-Minute Crafts: DIY Hacks", thumbnail: "https://via.placeholder.com/250x150", views: "9.8M views", category: "lifestyle", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "World's Most Dangerous Roads", thumbnail: "https://via.placeholder.com/250x150", views: "6.5M views", category: "travel", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] },
    { title: "The Science of Climate Change Explained", thumbnail: "https://via.placeholder.com/250x150", views: "2.1M views", category: "education", date: randomDate(), username: usernames[Math.floor(Math.random() * usernames.length)] }
];

// Function to create video items
function createVideoItem(video) {
    const videoElement = document.createElement('div');
    videoElement.className = 'video-item';
    videoElement.innerHTML = `
        <a href="watch.html?id=${video.id}" class="video-link">
            <img src="${video.thumbnail}" alt="${video.title}">
            <h3>${video.title}</h3>
            <p class="video-info">
                <span class="username">${video.username}</span>
                <span class="views">${video.views}</span>
                <span class="date">${formatDate(video.date)}</span>
            </p>
        </a>
    `;
    return videoElement;
}

// Function to sort videos
function sortVideos(videos, sortBy) {
    return [...videos].sort((a, b) => {
        switch (sortBy) {
            case 'views':
                return parseInt(b.views) - parseInt(a.views);
            case 'date':
                return new Date(b.date) - new Date(a.date);
            case 'title':
                return a.title.localeCompare(b.title);
            default:
                return 0;
        }
    });
}

// Updated function to populate the video grid
function populateVideoGrid(category = 'all', searchTerm = '', sortBy = 'default') {
    const videoGrid = document.querySelector('.video-grid');
    videoGrid.innerHTML = ''; // Clear existing videos
    
    let filteredVideos = videos.filter(video => 
        (category === 'all' || video.category === category) &&
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortBy !== 'default') {
        filteredVideos = sortVideos(filteredVideos, sortBy);
    }
    
    filteredVideos.forEach(video => {
        const videoItem = createVideoItem(video);
        videoGrid.appendChild(videoItem);
    });
}

// Function to handle category button clicks
function handleCategoryClick(event) {
    if (event.target.classList.contains('category-btn')) {
        // Remove active class from all buttons
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        event.target.classList.add('active');
        
        // Get the category and update the grid
        const category = event.target.getAttribute('data-category');
        const searchTerm = document.querySelector('.search-bar input').value;
        const sortBy = document.getElementById('sort-filter').value;
        populateVideoGrid(category, searchTerm, sortBy);
    }
}

// Function to handle search
function handleSearch() {
    const searchTerm = document.querySelector('.search-bar input').value;
    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    const sortBy = document.getElementById('sort-filter').value;
    populateVideoGrid(activeCategory, searchTerm, sortBy);
}

// Function to handle sidebar option clicks
function handleSidebarClick(event) {
    if (event.target.classList.contains('sidebar-option')) {
        event.preventDefault();
        // Remove active class from all sidebar options
        document.querySelectorAll('.sidebar-option').forEach(option => option.classList.remove('active'));
        
        // Add active class to clicked option
        event.target.classList.add('active');
        
        // Get the view and update the main content
        const view = event.target.getAttribute('data-view');
        updateMainContent(view);
    }
}

// Function to update main content based on selected view
function updateMainContent(view) {
    // Hide all views
    document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
    
    // Show the selected view
    document.getElementById(`${view}-view`).style.display = 'block';
    
    // If it's the home view, populate the video grid
    if (view === 'home') {
        populateVideoGrid();
    }
}

// Function to handle filter change
function handleFilterChange() {
    const sortBy = document.getElementById('sort-filter').value;
    const activeCategory = document.querySelector('.category-btn.active').getAttribute('data-category');
    const searchTerm = document.querySelector('.search-bar input').value;
    populateVideoGrid(activeCategory, searchTerm, sortBy);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateMainContent('home'); // Show home view by default
    populateVideoGrid(); // Initial population with all videos
    
    // Add click event listener to the categories container
    document.querySelector('.categories').addEventListener('click', handleCategoryClick);

    // Add input event listener to the search bar
    document.querySelector('.search-bar input').addEventListener('input', handleSearch);

    // Add click event listener to the search button
    document.querySelector('.search-bar button').addEventListener('click', handleSearch);

    // Add click event listener to the sidebar
    document.querySelector('.sidebar').addEventListener('click', handleSidebarClick);

    // Add change event listener to the sort filter
    document.getElementById('sort-filter').addEventListener('change', handleFilterChange);
});