let newsData = [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addNews(event) {
    event.preventDefault();
    let id = document.getElementById('newsId').value;
    let title = document.getElementById('newsTitle').value;
    let category = document.getElementById('newsCategory').value;
    let price = parseFloat(document.getElementById('newsPrice').value);
    let image = document.getElementById('newsImage').value;
    newsData.push({ id, title, category, price, image });
    displayNews();
}

function displayNews(filteredData = newsData) {
    let newsList = document.getElementById('newsList');
    newsList.innerHTML = '';
    filteredData.forEach((news, index) => {
        newsList.innerHTML += `
            <div class="news-item">
                <img src="${news.image}" alt="News">
                <h4>${news.title}</h4>
                <p>Category: ${news.category}</p>
                <p>Price: $${news.price}</p>
                <button class="wishlist-btn" onclick="addToWishlist(${index})">Add to Wishlist</button>
                <button class="delete-btn" onclick="deleteNews(${index})">Delete</button>
            </div>`;
    });
}

function addToWishlist(index) {
    wishlist.push(newsData[index]);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

function displayWishlist() {
    let wishlistDiv = document.getElementById('wishlist');
    wishlistDiv.innerHTML = '<h3>Wishlist Items</h3>';
    wishlist.forEach((news, index) => {
        wishlistDiv.innerHTML += `
            <div class="news-item">
                <img src="${news.image}" alt="News">
                <h4>${news.title}</h4>
                <button class="delete-btn" onclick="removeFromWishlist(${index})">Remove</button>
            </div>`;
    });
}

function removeFromWishlist(index) {
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    displayWishlist();
}

function searchNews() {
    let searchText = document.getElementById('searchInput').value.toLowerCase();
    let filteredData = newsData.filter(news =>
        news.id.includes(searchText) || news.title.toLowerCase().includes(searchText)
    );
    displayNews(filteredData);
}

function filterNews() {
    let selectedCategory = document.getElementById('categoryFilter').value;
    let filteredData = selectedCategory ? newsData.filter(news => news.category === selectedCategory) : newsData;
    displayNews(filteredData);
}

function sortNews() {
    let sortOrder = document.getElementById('sortPrice').value;
    let sortedData = [...newsData];
    if (sortOrder === 'asc') {
        sortedData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
        sortedData.sort((a, b) => b.price - a.price);
    }
    displayNews(sortedData);
}

function deleteNews(index) {
    newsData.splice(index, 1);
    displayNews();
}

function deleteAllNews() {
    newsData = [];
    displayNews();
}

displayWishlist();