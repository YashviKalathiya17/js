let newsData = [];
        let wishlist = [];

        function addNews(event) {
            event.preventDefault();
            let id = document.getElementById('newsId').value;
            let title = document.getElementById('newsTitle').value;
            let category = document.getElementById('newsCategory').value;
            let image = document.getElementById('newsImage').value;
            newsData.push({ id, title, category, image });
            displayNews();
        }

        function displayNews(filteredData = newsData) {
            let newsList = document.getElementById('newsList');
            newsList.innerHTML = '';
            filteredData.forEach(news => {
                newsList.innerHTML += `
                    <div class="news-item">
                        <img src="${news.image}" alt="News">
                        <h4>${news.title}</h4>
                        <p>Category: ${news.category}</p>
                        <button class="wishlist-btn" onclick="addToWishlist('${news.id}')">Add to Wishlist</button>
                    </div>`;
            });
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

        function addToWishlist(newsId) {
            let item = newsData.find(news => news.id === newsId);
            if (!wishlist.includes(item)) {
                wishlist.push(item);
                localStorage.setItem('wishlist', JSON.stringify(wishlist));
                console.log('Wishlist:', wishlist);
            }
        }