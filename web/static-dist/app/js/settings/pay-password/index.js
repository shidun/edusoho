webpackJsonp(["app/js/settings/pay-password/index"],[function(s,e,a){"use strict";function r(s){return s&&s.__esModule?s:{default:s}}var n=a("b334fd7e4c5a19234db2"),o=r(n);$("#settings-pay-password-form").validate({currentDom:"#password-save-btn",ajax:!0,rules:{currentUserLoginPassword:"required",newPayPassword:{required:!0,minlength:5,maxlength:20},confirmPayPassword:{required:!0,equalTo:"#form_newPayPassword"}},submitSuccess:function(s){(0,o.default)("success",Translator.trans(s.message)),$(".modal").modal("hide"),window.location.reload()},submitError:function(s){(0,o.default)("danger",Translator.trans(s.responseJSON.message))}})}]);