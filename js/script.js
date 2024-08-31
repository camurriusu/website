// Initialize Markdown-it
const md = window.markdownit();

// Path to the posts directory
const postsDirectory = 'posts/';

const firstPostTitle = 'First post?'

// Function to fetch and display the list of blog posts
function loadPostList() {
    let postDict = new Map();
    postDict.set('First post?', 'post1.md');

    const postList = document.getElementById('post-list');

    for (const [title, file] of postDict) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = '#';
        link.textContent = title;
        link.addEventListener('click', () => loadPost(file));
        listItem.appendChild(link);
        postList.appendChild(listItem);
    }

    if (postDict.size > 0) {
        loadPost(postDict.get(firstPostTitle));
    }
}

// Function to load and display a post
function loadPost(postFile) {
    fetch(postsDirectory + postFile)
        .then(response => response.text())
        .then(markdown => {
            document.getElementById('post-content').innerHTML = md.render(markdown)
        })
        .catch(error => console.error('Error loading post:', error));
}

// Load the list of posts when the page loads
window.onload = loadPostList();