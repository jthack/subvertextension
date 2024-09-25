# HTTPQL Extension for Caido

This extension allows you to interact with the HTTPQL API directly from within Caido.

## Installation

1. Ensure you have [EvenBetterExtensions](https://github.com/bebiksior/EvenBetterExtensions) installed in your Caido setup.

2. Clone this repository or download the extension files:
   - primate.json
   - index.js
   - style.css
   - version.txt

3. Host these files on a web server or in a GitHub repository that's accessible via HTTPS.

4. Update the URLs in the `primate.json` file to point to the correct locations of your hosted files.

5. In Caido, use the EvenBetterExtensions interface to install this extension by providing the URL to your `primate.json` file.

## Usage

1. After installation, you'll see a new "HTTPQL" item in the Caido sidebar.

2. Click on "HTTPQL" to open the extension interface.

3. Enter your API key in the "API Key" field.

4. Type your HTTPQL query in the "Query" textarea.

5. Click the "Submit" button to send your query to the HTTPQL API.

6. The response from the API will be displayed in the "Response" section below.

## Troubleshooting

- If you encounter any issues with the extension, check the browser console for error messages.
- Ensure that your API key is correct and that you have the necessary permissions to access the HTTPQL API.
- If the extension doesn't load, verify that all file URLs in `primate.json` are correct and accessible.

## Version History

- 1.0.0: Initial release

## Support

For support, please open an issue in the GitHub repository or contact the extension author.