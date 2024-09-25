// HTTPQL Extension

// Create the main UI
function createHTTPQLUI() {
  const html = `
    <div class="httpql-extension">
      <h1>HTTPQL Extension</h1>
      <div class="input-group">
        <label for="api-key">API Key:</label>
        <input type="text" id="api-key" placeholder="Enter your API key">
      </div>
      <div class="input-group">
        <label for="user-input">Query:</label>
        <textarea id="user-input" placeholder="Enter your query"></textarea>
      </div>
      <button id="submit-button">Submit</button>
      <div id="response-area">
        <h2>Response:</h2>
        <pre id="response-content"></pre>
      </div>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
}

// Handle form submission
function handleSubmit() {
  const apiKey = document.getElementById('api-key').value;
  const userInput = document.getElementById('user-input').value;
  const responseContent = document.getElementById('response-content');

  if (!apiKey || !userInput) {
    responseContent.textContent = 'Please provide both API key and query.';
    return;
  }

  fetch('/api/httpql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey
    },
    body: JSON.stringify({ query: userInput })
  })
  .then(response => response.text())
  .then(data => {
    responseContent.textContent = data;
  })
  .catch(error => {
    responseContent.textContent = `Error: ${error.message}`;
  });
}

// Initialize the extension
function initHTTPQLExtension() {
  Caido.navigation.addPage("/httpql", {
    body: createHTTPQLUI()
  });

  Caido.sidebar.registerItem("HTTPQL", "/httpql", {
    icon: "fas fa-code",
    group: "HTTPQL Extension",
  });

  // Add event listener after the page is loaded
  setTimeout(() => {
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
      submitButton.addEventListener('click', handleSubmit);
    }
  }, 1000);
}

initHTTPQLExtension();