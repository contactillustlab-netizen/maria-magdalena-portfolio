// Accepts any common YouTube URL shape (youtu.be/ID, youtube.com/watch?v=ID,
// youtube.com/embed/ID — with or without query params) and returns an embed
// URL, or null if the video ID can't be found.
export function getYoutubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}
