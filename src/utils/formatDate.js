// Format a timestamp into a readable English date string
export function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
