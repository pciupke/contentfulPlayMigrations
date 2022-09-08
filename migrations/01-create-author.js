module.exports = function (migration) {
  const author = migration
    .createContentType("Autho")
    .name("Author")
    .description("Author of blog posts or pages");
};
