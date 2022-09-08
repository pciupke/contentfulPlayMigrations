const runMigration = require("contentful-migration/built/bin/cli").runMigration;

const options = {
  spaceId: "<space-id>",
  accessToken: "<access-token>",
  yes: true,
};

const migrations = async () => {
  await runMigration({ ...{ filePath: "01-create-author.js" } });
  await runMigration({ ...{ filePath: "02-create-thing.js" } });
};

migrations();
