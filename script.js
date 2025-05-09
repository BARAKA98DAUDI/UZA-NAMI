document.addEventListener('DOMContentLoaded', function() {
    // Like/Dislike functionality
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');
    
    let likes = 0;
    let dislikes = 0;
    
    likeBtn.addEventListener('click', function() {
        likes++;
        likeBtn.innerHTML = `<i class="far fa-thumbs-up"></i> Like (${likes})`;
    });
    
    dislikeBtn.addEventListener('click', function() {
        dislikes++;
        dislikeBtn.innerHTML = `<i class="far fa-thumbs-down"></i> Dislike (${dislikes})`;
    });
    
    // Comment functionality
    const commentInput = document.getElementById('comment-input');
    const submitComment = document.getElementById('submit-comment');
    const commentsSection = document.getElementById('comments-section');
    
    submitComment.addEventListener('click', function() {
        const commentText = commentInput.value.trim();
        
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.textContent = commentText;
            
            commentsSection.prepend(commentDiv);
            commentInput.value = '';
            
            // In a real app, you would save this to a database
            alert('Thank you for your comment! The seller will respond soon.');
        } else {
            alert('Please enter a comment before submitting.');
        }
    });
    
    // Allow pressing Enter to submit comment
    commentInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submitComment.click();
        }
    });
});