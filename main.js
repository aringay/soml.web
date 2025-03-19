function filterArticles() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const articles = document.querySelectorAll('.article-card');

    articles.forEach(article => {
        const title = article.querySelector('h3').innerText.toLowerCase();
        if (title.includes(searchInput)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
}

function toggleDetails(button) {
    const details = button.previousElementSibling;
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        button.innerText = 'Read Less';
    } else {
        details.classList.add('hidden');
        button.innerText = 'Read More';
    }
}
