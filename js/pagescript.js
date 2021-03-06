var $ = jQuery;

var parentAnchorLinkText = $('.parent-link');
var childNodesWithGrandChildren = $('.holds-homepage-grandchildren');
var revealPagesForSmallScreens = $('.reveal-pages');


function toggleGrandChildren(e) {
   if(e.type === 'mouseenter' && !$(this).hasClass('show-grandchildren')) {
       $(this).addClass('show-grandchildren');
    }else if(e.type === 'mouseleave' && $(this).hasClass('show-grandchildren')) {
        $(this).removeClass('show-grandchildren');
    }
}

function revealGrandChildren() {
    $(this).next().toggleClass('reveal');
}
revealPagesForSmallScreens.on('click', revealGrandChildren)
childNodesWithGrandChildren.on('hover', toggleGrandChildren);
