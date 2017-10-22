// This file was automatically generated from profile.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.ProfileView.templates');

goog.require('soy');


bitex.view.ProfileView.templates.ProfileViewChangePasswordPlaceHolder = function(opt_data) {
  return '<div class="span6 well"></div>';
};


bitex.view.ProfileView.templates.AccountOverviewUserEmailLanguage = function(opt_data) {
  var output = '';
  /** @desc English option on email language select */
  var MSG_UNNAMED_102 = goog.getMsg('English');
  /** @desc Brazilian Portuguese option on email language select */
  var MSG_UNNAMED_104 = goog.getMsg('Brazilian Portuguese');
  /** @desc Spanish option on email language select */
  var MSG_UNNAMED_106 = goog.getMsg('Spanish');
  /** @desc Vietnamese option on email language select */
  var MSG_UNNAMED_108 = goog.getMsg('Vietnamese');
  output += '<select id="id_select_new_email_language" data-profile-change="EmailLang" ><option value="en" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'en') ? 'selected' : '') + '>' + MSG_UNNAMED_102 + '</option><option value="pt_BR" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'pt_BR') ? 'selected' : '') + '>' + MSG_UNNAMED_104 + '</option><option value="es" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'es') ? 'selected' : '') + '>' + MSG_UNNAMED_106 + '</option><option value="vi" ' + ((opt_data.msg_customer_detail['EmailLang'] == 'vi') ? 'selected' : '') + '>' + MSG_UNNAMED_108 + '</option></select>';
  return output;
};


bitex.view.ProfileView.templates.AccountOverviewUser = function(opt_data) {
  var output = '';
  /** @desc label on overview header */
  var MSG_UNNAMED_110 = goog.getMsg('ID');
  /** @desc label on  overview header */
  var MSG_UNNAMED_112 = goog.getMsg('Username');
  /** @desc label on  overview header */
  var MSG_UNNAMED_114 = goog.getMsg('Email');
  /** @desc label on  overview header */
  var MSG_UNNAMED_116 = goog.getMsg('Is verified');
  /** @desc label on  overview header */
  var MSG_UNNAMED_130 = goog.getMsg('Email preferred language');
  /** @desc Confirmation Order */
  var MSG_UNNAMED_132 = goog.getMsg('Should confirm new orders?');
  output += '<table class="table table-striped table-condensed account-overview-table"><tbody><tr><td><strong>' + MSG_UNNAMED_110 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['ID']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_112 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Username']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_114 + '</strong></td><td>' + soy.$$escapeHtml(opt_data.msg_customer_detail['Email']) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_116 + '</strong></td><td class="account-overview-val account-overview-verified">';
  switch (opt_data.msg_customer_detail['Verified']) {
    case 0:
      /** @desc label on  overview header */
      var MSG_UNNAMED_118 = goog.getMsg('No');
      output += '<span class="label label-important">' + MSG_UNNAMED_118 + '</span>';
      break;
    case 1:
      /** @desc label on  overview header */
      var MSG_UNNAMED_120 = goog.getMsg('Pending');
      output += '<span class="label label-important">' + MSG_UNNAMED_120 + '</span>';
      break;
    case 2:
      /** @desc label on  overview header */
      var MSG_UNNAMED_122 = goog.getMsg('Progress');
      output += '<span class="label label-important">' + MSG_UNNAMED_122 + '</span>';
      break;
    case 3:
      /** @desc label on  overview header */
      var MSG_UNNAMED_124 = goog.getMsg('Yes');
      output += '<span class="label label-success">' + MSG_UNNAMED_124 + '</span>';
      break;
    case 4:
      /** @desc label on  overview header */
      var MSG_UNNAMED_126 = goog.getMsg('Yes - Level II');
      output += '<span class="label label-success">' + MSG_UNNAMED_126 + '</span>';
      break;
    case 5:
      /** @desc label on  overview header */
      var MSG_UNNAMED_128 = goog.getMsg('Yes - Level III');
      output += '<span class="label label-success">' + MSG_UNNAMED_128 + '</span>';
      break;
  }
  output += '</td></tr><tr><td><strong>' + MSG_UNNAMED_130 + '</strong></td><td>' + bitex.view.ProfileView.templates.AccountOverviewUserEmailLanguage(opt_data) + '</td></tr><tr><td><strong>' + MSG_UNNAMED_132 + '</strong></td><td><input type=\'checkbox\' data-profile-change=\'ConfirmationOrder\'' + ((opt_data.msg_customer_detail['ConfirmationOrder'] == true) ? 'checked="true"' : '') + ' /></td></tr></tbody></table>';
  return output;
};
