'use strict';

/**
 * test-category service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-category.test-category');
