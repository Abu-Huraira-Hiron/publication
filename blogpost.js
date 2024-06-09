if (window.location.pathname.endsWith('blog-post.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'), 10);
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        document.getElementById('postTitle').innerText = post.title;
        document.getElementById('postDate').innerText = post.date;
        document.getElementById('postContent').innerHTML = post.content;
    } else {
        document.getElementById('blogPostContent').innerHTML = '<p>Post not found.</p>';
    }
}