module.exports = function (migration) {
  const author = migration
    .createContentType("thing")
    .name("Thing")
    .description("Thing with properties");
};
