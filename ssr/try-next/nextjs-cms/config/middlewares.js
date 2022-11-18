module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ["http://localhost:3000", "http://localhost:1337"],
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
