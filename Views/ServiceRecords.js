const {getExactRecord} = require('../db')

// getExactRecord(3)
//     .then(foundRecord => {
//         console.log('fdjksafjd', foundRecord)
//     })
//     .catch(error => {
//         console.error(error)
//     })

function generateRecordsView(records) {
    let html = `
    <html>
    <body>
      <h1>Record Search</h1>
    `;

    html += `
      <h2>Find Record</h2>
      <form id="commentForm" action="/comments" method="GET">
        <label for="content">Record:</label>
        <input type="text" id="content" name="content" required>
        <button type="submit">Find</button>
      </form>
      <div id="foundRecord">None</div>
      
        <script>
            document.getElementById('commentForm').addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent form submission
    
                const content = Number(document.getElementById('content').value);
                const div = document.getElementById('foundRecord');
                console.log('content', content)
                if(content && typeof content === 'number' && content >= 1 && content <= 68){
                    fetch('/getExactRecord', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ content })
                    })
                    .then(response => {
                        if (response.ok) {
                            return response.json();
                        } else {
                            console.error('Error:', response.status);
                        }
                    })
                    .then(data => {
                        div.textContent = JSON.stringify(data);
                    })
                    .catch(error => {
                        console.error('Error:', error);
                    });
                }
                else{
                    div.textContent = 'none'
                }
                document.getElementById('content').value = '';
                
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

<!--        <script>-->
<!--            document.getElementById('commentForm').addEventListener('submit', function(event) {-->
<!--              event.preventDefault(); // Prevent form submission-->
<!--    -->
<!--              const content = document.getElementById('content').value;-->
<!--              const xhr = new XMLHttpRequest();-->
<!--              xhr.open('GET', '/getRecord');-->
<!--              xhr.setRequestHeader('Content-Type', 'application/json');-->
<!--              xhr.onload = function() {-->
<!--                if (xhr.status === 200) {-->
<!--                  // Comment saved successfully-->
<!--                  location.reload(); // Refresh the page to display updated comments-->
<!--                } else {-->
<!--                  console.error('Error:', xhr.status);-->
<!--                }-->
<!--              };-->
<!--              xhr.send(JSON.stringify({ content: content }));-->
<!--            });-->
<!--          </script>-->
    </body>
    </html>
  `;

    return html;

}

module.exports = generateRecordsView;