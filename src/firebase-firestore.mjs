import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js';
import { app } from './firebase-config.mjs';

const db = getFirestore(app);

export { db };

// Función para mostrar/ocultar el blog
function toggleBlogVisibility() {
    const blog = document.getElementById('blogForm');
    if (blog.style.display === 'none' || blog.style.display === '') {
        blog.style.display = 'block';
    } else {
        blog.style.display = 'none';
    }
}

// Hacer que la función esté disponible globalmente
window.toggleBlogVisibility = toggleBlogVisibility;

// Función para agregar un nuevo post de blog
document.getElementById('blogForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    try {
        await addDoc(collection(db, 'blogs'), {
            title: title,
            content: content,
            timestamp: new Date()
        });
        alert('Blog post added successfully!');
        document.getElementById('blogForm').reset();
        loadBlogPosts();
    } catch (error) {
        console.error('Error adding document: ', error);
    }
});

// Función para cargar y mostrar posts del blog
async function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blogPosts');
    blogPostsContainer.innerHTML = '';

    const querySnapshot = await getDocs(collection(db, 'blogs'));
    querySnapshot.forEach((doc) => {
        const post = doc.data();
        const postElement = document.createElement('div');
        postElement.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
}

// Cargar posts del blog al iniciar
loadBlogPosts();
