// JavaScript to toggle the "View more" link
document.querySelectorAll('.project-card').forEach(function(card) {
    const text = card.querySelector('.truncate-text');
    const viewMoreLink = card.querySelector('.view-more');

    if (text && viewMoreLink) {
        viewMoreLink.addEventListener('click', function(event) {
            event.preventDefault();
            text.style.maxHeight = text.style.maxHeight === '100px' ? 'none' : '100px';
            viewMoreLink.textContent = viewMoreLink.textContent === 'View More' ? 'View Less' : 'View More';
        });
    }
});
