/**
 * /js/utils.js :: Utility JS.
 */
'use strict'

/**
 *
 * @constructor
 */
function Utils() {
}

/** [Static method].
 *
 * @param url
 * @returns jQuery-wrapped <link> element.
 */
Utils.addStyleSheet = function _utils_add_stylesheet(url) {
  console.info(`Utils.addStyleSheet('${url}').`);
  let link = jQuery(`<link rel='stylesheet' type='text/css' href='${url}' />`);
  jQuery("head").append(link);
  return link;
}

/* EOF */
