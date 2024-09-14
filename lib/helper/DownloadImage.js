function downloadImage(imageUrl) {
    // Create a new XMLHttpRequest to fetch the image blob
    fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.blob();
        })
        .then(blob => {
            // Create a new URL for the blob
            const url = URL.createObjectURL(blob);

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = url;

            // Extract filename from URL or use a default name
            const urlParts = imageUrl.split('/');
            const filename = urlParts[urlParts.length - 1] || 'downloaded_image';
            link.download = filename;

            // Append the link to the body (necessary for Firefox)
            document.body.appendChild(link);

            // Trigger a click on the link to start the download
            link.click();

            // Remove the link from the body
            document.body.removeChild(link);

            // Revoke the object URL after the download
            URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('There was an error downloading the image:', error);
        });
}

export default downloadImage;