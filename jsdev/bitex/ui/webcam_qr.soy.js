// This file was automatically generated from webcam_qr.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.WebCamQR.templates');

goog.require('soy');


bitex.ui.WebCamQR.templates.Video = function(opt_data) {
  return '<div class="col-xs-2"></div><div class="col-xs-10"><video id="' + soy.$$escapeHtml(opt_data.id) + '_video" autoplay width="400"></video><canvas id="' + soy.$$escapeHtml(opt_data.id) + '_canvas" style="display:none" width="400" height="300"></canvas></div>';
};
