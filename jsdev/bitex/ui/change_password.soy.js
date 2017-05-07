// This file was automatically generated from change_password.coinage.soy.
// Please don't edit this file by hand.

goog.provide('bitex.ui.ChangePassword.templates');

goog.require('soy');


bitex.ui.ChangePassword.templates.ChangePassword = function(opt_data) {
  var output = '';
  /** @desc Change password view title on change password component */
  var MSG_UNNAMED_43 = goog.getMsg('Change Your password');
  /** @desc Old Password label on change password component */
  var MSG_UNNAMED_45 = goog.getMsg('Current password');
  /** @desc Password label on change password component */
  var MSG_UNNAMED_47 = goog.getMsg('New password');
  /** @desc Confirm new password label on change password component */
  var MSG_UNNAMED_49 = goog.getMsg('Confirm new password');
  /** @desc change password button on change password component */
  var MSG_UNNAMED_51 = goog.getMsg('Change Password');
  output += '<div id="' + soy.$$escapeHtml(opt_data.id) + '"><legend class="profile-change-password__title">' + MSG_UNNAMED_43 + '</legend><div class="form-group"><label for="' + soy.$$escapeHtml(opt_data.id) + '_oldpassword">' + MSG_UNNAMED_45 + ':</label><input autocapitalize="off" autocorrect="off" type="password" class="form-control" id="' + soy.$$escapeHtml(opt_data.id) + '_oldpassword" name="username"></div><div class="form-group"><label for="' + soy.$$escapeHtml(opt_data.id) + '_password">' + MSG_UNNAMED_47 + ':</label><input type="password" class="form-control" id="' + soy.$$escapeHtml(opt_data.id) + '_password"  name="password"></div><div class="form-group"><label for="' + soy.$$escapeHtml(opt_data.id) + '_repeat_password">' + MSG_UNNAMED_49 + ':</label><input id="' + soy.$$escapeHtml(opt_data.id) + '_repeat_password" class="form-control" placeholder="" name="repeat_password" type="password"></div><button id="' + soy.$$escapeHtml(opt_data.id) + '_change" class="btn btn-primary">' + MSG_UNNAMED_51 + '</button><!-- .profile-change-password__form --></div>';
  return output;
};
