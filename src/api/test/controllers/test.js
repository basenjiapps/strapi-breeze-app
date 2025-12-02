module.exports = {
  async find(ctx) {
    return await strapi.documents('api::test.test').findMany(ctx.query);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.documents('api::test.test').findOne({
      documentId: id,
      ...ctx.query,
    });
  },

  async create(ctx) {
    return await strapi.documents('api::test.test').create({
      data: ctx.request.body.data,
      ...ctx.query,
    });
  },

  async update(ctx) {
    const { id } = ctx.params;
    return await strapi.documents('api::test.test').update({
      documentId: id,
      data: ctx.request.body.data,
      ...ctx.query,
    });
  },

  async delete(ctx) {
    const { id } = ctx.params;
    return await strapi.documents('api::test.test').delete({
      documentId: id,
      ...ctx.query,
    });
  },
};