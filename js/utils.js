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

/**
 * Setup youtube/vimeo tubes <iframe ...> given a container like:
 *
 *     <div data-video-type="youtube"
 *          data-video-id="9BFweFCDpsM">
 *     </div>
 *
 * Youtube :
 *
 *     <iframe width="560" height="315"
 *             src="https://www.youtube.com/embed/{{ video_id }}"
 *             frameborder="0" gesture="media"
 *             allow="encrypted-media" allowfullscreen></iframe>
 *
 * Vimeo :
 *
 *     <iframe src="https://player.vimeo.com/video/{{ video_id }}?byline=0&portrait=0"
 *             width="640" height="360" frameborder="0"
 *             allowfullscreen></iframe>
 *
 * @param cntr The container div or whatever element that
 *             have the data-video-... attributes.
 *
 * @return void
 */
function SetupTubes(cntr) {
  cntr = $( cntr );
  console.info(`SetupTubes('${cntr.attr('id')}').`);

  //let embeds = cntr.find('.video-embed')
  // ^ look for elements that have the data-... attribute we need:
  let embeds = cntr.find('[data-video-type]');

  if (embeds.length < 1)
    console.info(" -> Found no tubes -_-");

  embeds.each(function _setup_one_tube_closure(_index, elt) {
    elt = $(elt);

    let iframe = null,
          type = elt.attr('data-video-type'),
            id = elt.attr('data-video-id') ;

    console.log(`    type: ${type}, id: ${id}`);

    switch( type ) {
      case 'youtube':
        iframe = $(`<iframe src='https://www.youtube.com/embed/${id}' width='560' height='315' frameborder='0' gesture='media' allow='encrypted-media' allowfullscreen></iframe>`);
        elt.append( iframe );
        break;
      case 'vimeo':
        iframe = $(`<iframe src='https://player.vimeo.com/video/${id}?byline=0&portrait=0' width='640' height='360' frameborder='0' allowfullscreen></iframe>`);
        elt.append( iframe );
        break;
      default:
        console.warn(`(!!) SetupTubes(): unknown video type ${type} (!!).`);
    }
  });

  return /* void */ ;
}

/* EOF */
