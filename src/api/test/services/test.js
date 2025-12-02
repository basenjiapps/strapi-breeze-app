module.exports = {
  async find(params) {
    return await strapi.documents('api::test.test').findMany(params);
  },

  async findOne(documentId, params) {
    return await strapi.documents('api::test.test').findOne({
      documentId,
      ...params,
    });
  },

  async create(params) {
    return await strapi.documents('api::test.test').create(params);
  },

  async update(documentId, params) {
    return await strapi.documents('api::test.test').update({
      documentId,
      ...params,
    });
  },

  async delete(documentId, params) {
    return await strapi.documents('api::test.test').delete({
      documentId,
      ...params,
    });
  },
};