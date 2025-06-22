const apiKey = '$2a$10$apbzCMwnXto4DGSeuW1qzeoKPDJvpwGiBqRJZ2uFfZtFZb2dowXjS';
const binUrl = 'https://api.jsonbin.io/v3/b/6857d0818960c979a5aef771';

const inputName = document.getElementById('nameInput');
const inputComment = document.getElementById('commentInput');
const inputRating = document.getElementById('ratingInput');
const ticker = document.getElementById('ticker');

// Show stars visually when selecting rating
inputRating.addEventListener('input', () => {
  const starsDisplay = document.getElementById('starPreview');
  const rating = parseInt(inputRating.value);
  if (!isNaN(rating)) {
    starsDisplay.innerText = '⭐'.repeat(Math.max(0, Math.min(5, rating)));
  } else {
    starsDisplay.innerText = '';
  }
});

// Load and render testimonials
async function loadComments() {
  try {
    const res = await fetch(binUrl, {
      headers: { 'X-Master-Key': apiKey }
    });
    const data = await res.json();
    const comments = data.record || [];

    ticker.innerHTML = comments.map(c => {
      const stars = '⭐'.repeat(c.rating || 0);
      const dateTime = c.time
        ? `<span class="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">${c.time}</span>`
        : '';

      return `
        <span class="inline-block mr-6">
          ${dateTime}
          <span class="text-green-400 font-bold">${c.name || 'Anonymous'}</span>:
          <span class="text-blue-300 italic">${c.comment || ''}</span>
          <span class="text-yellow-400 ml-2">${stars}</span>
        </span>
      `;
    }).join('');
  } catch (err) {
    ticker.innerHTML = '⚠️ Failed to load testimonials.';
    console.error('Error loading comments:', err);
  }
}

// Add new testimonial
async function addComment() {
  const name = inputName.value.trim();
  const comment = inputComment.value.trim();
  const rating = parseInt(inputRating.value);
  const time = new Date().toLocaleString();

  if (!name || !comment || isNaN(rating) || rating < 1 || rating > 5) {
    alert('Please fill out all fields correctly.');
    return;
  }

  try {
    const res = await fetch(binUrl, {
      headers: { 'X-Master-Key': apiKey }
    });
    const data = await res.json();
    const comments = data.record || [];

    comments.push({ name, comment, rating, time });

    await fetch(binUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-Master-Key': apiKey
      },
      body: JSON.stringify(comments)
    });

    inputName.value = '';
    inputComment.value = '';
    inputRating.value = '';
    document.getElementById('starPreview').innerText = '';
    loadComments();
  } catch (err) {
    console.error('Error adding comment:', err);
  }
}

window.onload = loadComments;
window.addComment = addComment;
