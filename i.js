const API = 'https://jsonplaceholder.typicode.com/';

console.warn('started');
const fetchData = () => {
    console.warn('clicked');

    fetch()
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.id = `post-${post.id}`;

                postElement.innerHTML = `
                        <h3 id="${`title-${post.id}`}">${post.title}</h3>
                        <p id="${`body-${post.id}`}">${post.body}</p>
                        <div>
                            <button class="edit-post-btn" onclick="editPost(${post.id})">Изменить</button>
                            <button class="delete-post-btn" onclick="deletePost(${post.id})">Удалить</button>
                        </div>
                    `;

                postsContainer.appendChild(postElement);
            });
        }).catch(error => console.error('Ошибка при получении постов:', error));
}

function deletePost(postId) {
    //     // логика для удаления поста
    fetch(`https://jsonplaceholder.typicode.com/posts/${}`, {
        method: '',
    })
        .then(response => {
        })
        .catch(error => console.error('Ошибка при выполнении запроса:', error));
}

function editPost(postId) {
    const newTitle = prompt("Введите новый заголовок поста:");
    const newBody = prompt("Введите новое содержимое поста:");

    fetch(`https://jsonplaceholder.typicode.com/posts/${}`, {
        method: '',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
            id: postId,
            title: newTitle,
            body: newBody,
            userId: 1, // Примерный userId, в реальном приложении это может быть другое значение
        }),
    })
        .then(response => )
        .then(updatedPost => {
            // Обновляем UI
        })
        .catch(error => console.error('Ошибка при выполнении запроса:', error));
}
