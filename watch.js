document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('id');

    // Fetch video data
    const video = videos.find(v => v.id === parseInt(videoId));

    if (video) {
        document.title = `${video.title} - VideoStream`;
        document.getElementById('video-title').textContent = video.title;
        document.getElementById('video-views').textContent = video.views;
        document.getElementById('video-date').textContent = formatDate(video.date);
        document.getElementById('video-description').textContent = `This is a placeholder description for the video "${video.title}". In a real application, this would contain the actual video description.`;

        // Add username to the page
        const usernameElement = document.createElement('p');
        usernameElement.textContent = `Uploaded by: ${video.username}`;
        document.querySelector('.video-info').appendChild(usernameElement);

        // Populate related videos
        const relatedVideos = videos.filter(v => v.category === video.category && v.id !== video.id).slice(0, 5);
        const relatedVideosContainer = document.querySelector('.related-videos');
        relatedVideosContainer.innerHTML = '<h2>Related Videos</h2>'; // Clear previous content
        relatedVideos.forEach(relatedVideo => {
            const videoItem = createVideoItem(relatedVideo);
            relatedVideosContainer.appendChild(videoItem);
        });
    } else {
        document.getElementById('video-title').textContent = 'Video not found';
    }

    // Add search functionality
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
        }
    }

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
});

// Import or copy these functions and data from script.js
function formatDate(date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

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

// Copy the videos array from script.js
const videos = [
    { id: 1, title: "Top 10 Pop Hits of 2023", thumbnail: "https://via.placeholder.com/250x150", views: "5.2M views", category: "music", date: new Date("2023-05-15"), username: "MusicLover" },
    { id: 2, title: "Rock Classics from the 80s", thumbnail: "https://via.placeholder.com/250x150", views: "1.8M views", category: "music", date: new Date("2023-04-20"), username: "RockFan" },
    // ... (add more video objects here)
];