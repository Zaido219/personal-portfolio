export const downloadFile = (url: string, fileName: string) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = blobURL;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      link.parentNode?.removeChild(link);
    })
    .catch(err => console.error("Download failed:", err));
};