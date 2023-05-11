function generateCommentsView(comments) {
    let html = `
    <html>
    <body>
      <h1>Comments</h1>
  `;

    // comments.forEach((comment) => {
    //     html += `<p>${comment.content}</p>`;
    // });

    if (Array.isArray(comments)) {
        comments.forEach((comment) => {
            html += `<p>${comment['Comment']}</p>`;
        });
    } else {
        Object.keys(comments).forEach((key) => {
            html += `<p>${comments[key]['Comment']}</p>`;
        });
    }

    html += `
      <h2>Create Comment</h2>
<!--      <form action="/comments" method="POST">-->
<!--        <label for="content">Content:</label>-->
<!--        <input type="text" id="content" name="content" required>-->
<!--        <button type="submit">Submit</button>-->
<!--      </form>-->
      <form id="commentForm" action="/comments" method="POST">
        <label for="content">Content:</label>
        <input type="text" id="content" name="content" required>
        <button type="submit">Submit</button>
      </form>

        <script>
            document.getElementById('commentForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form submission
    
                const content = document.getElementById('content').value;
    
                fetch('/comments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ content })
                })
                .then(response => {
                    if (response.ok) {
                        // Redirect or update the UI as needed
                    } else {
                        console.error('Error:', response.status);
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            });
        </script>
      
<!--      <script>-->
<!--        document.getElementById('commentForm').addEventListener('submit', function(event) {-->
<!--          event.preventDefault(); // Prevent form submission-->

<!--          const content = document.getElementById('content').value;-->
<!--          const xhr = new XMLHttpRequest();-->
<!--          xhr.open('POST', '/comments');-->
<!--          xhr.setRequestHeader('Content-Type', 'application/json');-->
<!--          xhr.onload = function() {-->
<!--            if (xhr.status === 200) {-->
<!--              // Redirect or update the UI as needed-->
<!--            } else {-->
<!--              console.error('Error:', xhr.status);-->
<!--            }-->
<!--          };-->
<!--          xhr.send(JSON.stringify({ content: content }));-->
<!--        });-->
<!--      </script>-->
        <script>
            document.getElementById('commentForm').addEventListener('submit', function(event) {
              event.preventDefault(); // Prevent form submission
    
              const content = document.getElementById('content').value;
              const xhr = new XMLHttpRequest();
              xhr.open('POST', '/comments');
              xhr.setRequestHeader('Content-Type', 'application/json');
              xhr.onload = function() {
                if (xhr.status === 200) {
                  // Comment saved successfully
                  location.reload(); // Refresh the page to display updated comments
                } else {
                  console.error('Error:', xhr.status);
                }
              };
              xhr.send(JSON.stringify({ content: content }));
            });
          </script>
    </body>
    </html>
  `;

    return html;
}

module.exports = generateCommentsView;