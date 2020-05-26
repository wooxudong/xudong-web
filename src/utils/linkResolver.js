export const linkResolver = doc => {
  // URL for a category type
  if (doc.type === "Blogpost") {
    return `/blog/${doc.uid}`;
  }
  // Backup for all other types
  return "/";
};
