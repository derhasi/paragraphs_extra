/**
 * Alters the paragraphs embed display with collapsible elements.
 */

(function($) {

  /**
   * Add a collapsile behaviour for paragraph widgets.
   */
  Drupal.behaviors.paragraphsExtraCollapse = {
    attach: function(context, settings) {

      $('.paragraphs-widget-item').once('paragraphsExtraCollapse', function() {

        var parent = $(this);
        var itemLink = parent.children('.paragraphs-widget-item-title');
        var itemBody = parent.children('.paragraphs-widget-item-body');

        itemLink.click(function() {
          Drupal.paragraphsExtraCollapseSwitch(parent, itemLink, itemBody);
        })

        // Set the initial state.
        var initiallyClosed = parent.attr('data-paragraph-item-closed');
        if (initiallyClosed) {
          Drupal.paragraphsExtraCollapseSwitch(parent, itemLink, itemBody, initiallyClosed);
        }

      });

    }
  }

  /**
   * Helper to switch the state for a collapsible.
   *
   * @param itemContainer
   *   The jquery object holding the the paragrah item attributes.
   * @param itemLink
   *   The trigger jQuery element to open and close the item body.
   * @param itemBody
   *   The jquery object of the body to close or open.
   * @param {bool} close
   *   (optional) Whether to close or not. If the
   */
  Drupal.paragraphsExtraCollapseSwitch = function(itemContainer, itemLink, itemBody, close) {

    // If no close status is provided, we simply switch by using the current
    // state's opposite.
    if (close == undefined) {
      close = itemContainer.attr('data-paragraph-item-closed') < 1;
    }

    // If status is
    if (close > 0 && !(itemContainer.find('[id*="confirm-delete-button"]').length > 0)) {
      itemBody.hide( "slow", function() {
        itemContainer.addClass('item-closed');
        itemContainer.attr('data-paragraph-item-closed', 1);
      });
    }
    else {
      itemBody.show( "slow", function() {
        itemContainer.removeClass('item-closed');
        itemContainer.attr('data-paragraph-item-closed', 0);
      });
    }

  }

})(jQuery);

