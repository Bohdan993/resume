export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export async function dataUrlToFIle(dataUrl) {
  const res = await fetch(dataUrl);
  const blob = await res.blob();
  return new File([blob], 'avatar', { type: 'image/png' });
}

export function formatDate(date) {
  const dateObject = date !== '' ? new Date(date) : new Date();

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    year: 'numeric'
  }).format(dateObject);
}


export const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
