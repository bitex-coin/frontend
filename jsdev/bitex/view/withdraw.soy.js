// This file was automatically generated from withdraw.default.soy.
// Please don't edit this file by hand.

goog.provide('bitex.view.WithdrawView.templates');

goog.require('soy');


bitex.view.WithdrawView.templates.CancelWithdrawDialogContent = function(opt_data) {
  var output = '';
  /** @desc Cancel withdraw dialog message */
  var MSG_UNNAMED_58 = goog.getMsg('Enter a reason for cancelling the user withdraw');
  /** @desc Cancel withdraw reason label */
  var MSG_UNNAMED_60 = goog.getMsg('Reason:');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_62 = goog.getMsg('Other');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_64 = goog.getMsg('Insufficient funds');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_66 = goog.getMsg('Account not verified');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_68 = goog.getMsg('Suspicion of fraud');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_70 = goog.getMsg('Withdrawing to a different account than yours');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_72 = goog.getMsg('Invalid wallet');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_74 = goog.getMsg('Invalid bank account');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_76 = goog.getMsg('Amount exceeded your daily withdraw limit');
  /** @desc reason for cancelling withdraw */
  var MSG_UNNAMED_78 = goog.getMsg('User has deposits that are not yet confirmed');
  output += '<p>' + MSG_UNNAMED_58 + '</p><form class="form-horizontal"><fieldset><div class="control-group"><label class="control-label" for="' + soy.$$escapeHtml(opt_data.reason_id) + '" >' + MSG_UNNAMED_60 + '</label><div class="controls"><select id="' + soy.$$escapeHtml(opt_data.reason_id) + '"><option value="0">' + MSG_UNNAMED_62 + '</option><option value="-1" selected>' + MSG_UNNAMED_64 + '</option><option value="-2">' + MSG_UNNAMED_66 + '</option><option value="-3">' + MSG_UNNAMED_68 + '</option><option value="-4">' + MSG_UNNAMED_70 + '</option><option value="-5">' + MSG_UNNAMED_72 + '</option><option value="-6">' + MSG_UNNAMED_74 + '</option><option value="-7">' + MSG_UNNAMED_76 + '</option><option value="-8">' + MSG_UNNAMED_78 + '</option></select></div></div><div class="control-group"><div class="controls"><textarea id="' + soy.$$escapeHtml(opt_data.custom_reason_id) + '" rows="2" style="display:none;"></textarea></div></div></fieldset></form>';
  return output;
};


bitex.view.WithdrawView.templates.WithdrawCommentDialogContent = function(opt_data) {
  var output = '';
  /** @desc Add Comment */
  var MSG_UNNAMED_80 = goog.getMsg('Add Comment:');
  output += '<form class="form-horizontal">';
  var commentList45 = opt_data.comments;
  var commentListLen45 = commentList45.length;
  for (var commentIndex45 = 0; commentIndex45 < commentListLen45; commentIndex45++) {
    var commentData45 = commentList45[commentIndex45];
    output += '<p>' + soy.$$escapeHtml(commentData45) + '</p>';
  }
  output += '<div class="control-group"><label class="control-label">' + MSG_UNNAMED_80 + '</label><div class="controls"><textarea class="withdraw-field form-control" id="id_withdraw_comment" rows="4" name="withdraw-comment" type="text"></textarea></div></div></form>';
  return output;
};
