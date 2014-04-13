/**
 * Alters the paragraphs embed display with collabsible elements.
 */

(function($) {

  /**
   * Add a very basic summary to a collapsed paragraph.
   */
  Drupal.behaviors.paragraphsExtraSummary = {
    attach: function(context, settings) {

      $('.paragraphs-widget-item').once('paragraphsExtraSummary', function() {

        var parent = $(this);
        var itemSummary = parent.children('.paragraphs-widget-item-summary');
        var itemBody = parent.children('.paragraphs-widget-item-body');

        // Currently the summary is simply retrieved from the first text input
        // field that is required.
        var itemInput = itemBody.find('input.text-full.required').first();

        itemInput.change(function() {
          itemSummary.html($(this).val());
        });

        // Set the initial value.
        itemSummary.html(itemInput.val());

      });

    }
  }

})(jQuery);
