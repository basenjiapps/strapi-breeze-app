// src/api/article/content-types/article/lifecycles.js

function blocksToPlainText(blocks) {
  const parts = [];

  const walk = (node) => {
    if (!node) return;

    if (Array.isArray(node)) {
      node.forEach(walk);
      return;
    }

    if (typeof node.text === 'string') {
      parts.push(node.text);
    }

    if (node.children) walk(node.children);
    if (node.body) walk(node.body);
    if (node.content && node.content !== blocks) walk(node.content);
  };

  walk(blocks);
  return parts.join(' ');
}

function makePreviewFromContent(raw, limit = 30) {
  let text = '';

  if (typeof raw === 'string') {
    text = raw;
  } else {
    text = blocksToPlainText(raw);
  }

  // Убираем пробелы и переносы только в начале текста
  const trimmedStart = text.replace(/^[ \n\r]+/, '');

  // Берём первые `limit` символов без изменения внутренних пробелов
  return trimmedStart.slice(0, limit);
}

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data && data.content !== undefined) {
      data.content_preview = makePreviewFromContent(data.content, 30);
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    if (data && data.content !== undefined) {
      data.content_preview = makePreviewFromContent(data.content, 30);
    }
  },
};