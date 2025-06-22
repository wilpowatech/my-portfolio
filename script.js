const apiKey = '$2a$10$apbzCMwnXto4DGSeuW1qzeoKPDJvpwGiBqRJZ2uFfZtFZb2dowXjS';
const binUrl = 'https://api.jsonbin.io/v3/b/6857d0818960c979a5aef771';

const input = document.getElementById('commentInput');
const ticker = document.getElementById('ticker');

// ✅ Load Comments
async function loadComments() {
  try {
    const res = await fetch(binUrl, {
      headers: { 'X-Master-Key': apiKey }
    });
    const data = await res.json();
    const comments = data.record || [];

    // ✅ Emoji star display, clamped to 1–5
    ticker.innerHTML = comments
      .filter(c => c && c.name && c.comment && c.rating)
      .map(c => {
        const rating = Math.min(Math.max(parseInt(c.rating), 1), 5);
        const stars = '⭐'.repeat(rating);
        return `💬 <strong>${c.name}</strong>: ${c.comment} ${stars}`;
      })
      .join(' &nbsp;&nbsp;&nbsp; ');

  } catch (err) {
    ticker.innerHTML = '⚠️ Failed to load testimonials.';
    console.error('Error:', err);
  }
}
// ✅ Add a new comment
async function addComment() {
    const name = document.getElementById('nameInput').value.trim();
    const comment = document.getElementById('commentInput').value.trim();
    const rating = parseInt(document.getElementById('ratingInput').value.trim());
    
    if (!name || !comment || isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please fill in all fields correctly. Rating must be between 1 and 5.");
        return;
    }
    
    const res = await fetch(binUrl, {
        headers: { 'X-Master-Key': apiKey }
    });
    const data = await res.json();
    const comments = data.record || [];
    comments.push({ name, comment, rating });
    
    await fetch(binUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Master-Key': apiKey
        },
        
        body: JSON.stringify(comments)
    });
    
    // Clear form
    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';
    document.getElementById('ratingInput').value = '';
    
    loadComments();

}

window.onload = loadComments;
window.addComment = addComment;
