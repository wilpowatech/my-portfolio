const apiKey = '$2a$10$apbzCMwnXto4DGSeuW1qzeoKPDJvpwGiBqRJZ2uFfZtFZb2dowXjS';
const binUrl = 'https://api.jsonbin.io/v3/b/6857d0818960c979a5aef771';

const nameInput = document.getElementById('nameInput');
const commentInput = document.getElementById('commentInput');
const ratingInput = document.getElementById('ratingInput');
const ticker = document.getElementById('ticker');

function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString(); // Format: 6/21/2025, 8:52:16 PM
}

function renderStars(rating) {
  const r = parseInt(rating);
  return '⭐'.repeat(Math.max(1, Math.min(r, 5)));
}

async function loadComments() {
  try {
    const res = await fetch(binUrl, {
      headers: { 'X-Master-Key': apiKey }
    });
    const data = await res.json();
    const comments = data.record || [];

    ticker.innerHTML = comments
      .map(item => {
        const name = item.name || 'Anonymous';
        const comment = item.comment || '';
        const rating = renderStars(item.rating);
        const date = item.date || '';

        return `
          <span class="mr-10">
            <span class="bg-red-600 text-white text-xs px-2 py-0.5 rounded">${date}</span>
            <span class="text-green-400 font-semibold"> ${name}</span>:
            <span class="text-blue-300 italic"> "${comment}" </span>
            <span class="text-yellow-300">${rating}</span>
          </span>
        `;
      })
      .join('');
  } catch (err) {
    ticker.innerHTML = '⚠️ Failed to load testimonials.';
    console.error('Error loading comments:', err);
  }
}

async function addComment() {
  const name = nameInput.value.trim();
  const comment = commentInput.value.trim();
  const rating = ratingInput.value.trim();
  const date = getCurrentDateTime();

  if (!comment || !rating) return;

  try {
    const res = await fetch(binUrl, {
      headers: { 'X-Master-Key': apiKey }
    });
    const data = await res.json();
    const comments = data.record || [];

    comments.push({ name, comment, rating, date });

    await fetch(binUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': apiKey
      },
      body: JSON.stringify(comments)
    });

    nameInput.value = '';
    commentInput.value = '';
    ratingInput.value = '';
    loadComments();
  } catch (err) {
    console.error('Error saving comment:', err);
  }
}

window.onload = loadComments;
window.addComment = addComment;
