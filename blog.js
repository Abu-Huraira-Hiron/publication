// Existing registration form handling
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        alert('Registration successful');
        document.getElementById('pdfViewer').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
});

// Blog posts data (in a real application, this data would come from a server)
const blogPosts = [
    {
        id: 1,
        title: "First Blog Post",
        date: "2024-01-01",
        content: "This is the content of the first blog post."
    },
    {
        id: 2,
        title: "Second Blog Post",
        date: "2024-02-01",
        content: "This is the content of the second blog post."
    }
];

// Load blog posts on the blog.html page
if (window.location.pathname.endsWith('blog.html')) {
    const blogPostsContainer = document.getElementById('blogPosts');
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blogPost';
        postElement.innerHTML = `
            <h3><a href="blog-post.html?id=${post.id}">${post.title}</a></h3>
            <p>${post.date}</p>
            <p>${post.content.substring(0, 100)}...</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}