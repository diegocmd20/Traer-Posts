async function getPosts() {
    let postData = document.getElementById('post-data');
    
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        let posts = await response.json();

        let ul = document.createElement('ul');

        posts.forEach(post => {
            let li = document.createElement('li');
            li.textContent = `${post.title}: ${post.body}`;
            ul.appendChild(li);
        });

        postData.appendChild(ul);

    } catch (error) {
        postData.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}