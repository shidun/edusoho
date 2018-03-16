webpackJsonp(["app/js/testpaper-manage/check/index"],{"76ba066af90c0dc366fc":function(t,e,a){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,a,i){return a&&t(e.prototype,a),i&&t(e,i),e}}(),o=a("f898520c5384ef4c819c");$.validator.addMethod("score",function(t,e){return!!/^\d+(\.\d)?$/.test(t)&&Number(t)<=Number($(e).data("score"))},$.validator.format(Translator.trans("activity.testpaper_manage.marking_validate_error_hint"))),new(function(){function t(e){i(this,t),this.$container=e,this.checkContent={},this.$form=e.find("form"),this.$dialog=e.find("#testpaper-checked-dialog"),this.validator=null,this._initEvent(),this._init(),this._initValidate(),(0,o.testpaperCardFixed)(),this.isContinue=!1}return n(t,[{key:"_initEvent",value:function(){var t=this;this.$container.on("focusin","textarea",function(e){return t._showEssayInputEditor(e)}),this.$container.on("click",'[data-role="check-submit"]',function(e){return t._submitValidate(e)}),this.$container.on("click","*[data-anchor]",function(e){return t._quick2Question(e)}),this.$dialog.on("click",'[data-role="finish-check"]',function(e){return t._submit(e)}),this.$dialog.on("click",".js-next-check",function(e){return t._continue(e)}),this.$dialog.on("change","select",function(e){return t._teacherSayFill(e)})}},{key:"_init",value:function(){}},{key:"_showEssayInputEditor",value:function(t){var e=$(t.currentTarget);if(e.hasClass("essay-teacher-say-short")){t.preventDefault(),t.stopPropagation(),$(this).blur();var a=e.siblings(".essay-teacher-say-long"),i=a.siblings(".essay-teacher-say-btn");e.hide(),a.show(),i.show();var n=CKEDITOR.replace(a.attr("id"),{toolbar:"Minimal",fileSingleSizeLimit:app.fileSingleSizeLimit,filebrowserImageUploadUrl:a.data("imageUploadUrl")});n.on("blur",function(){n.updateElement(),setTimeout(function(){a.val(n.getData()),a.change()},1)}),n.on("instanceReady",function(){this.focus(),i.one("click",function(){e.val($(n.getData()).text()),n.destroy(),a.hide(),i.hide(),e.show()})}),n.on("key",function(){n.updateElement(),setTimeout(function(){a.val(n.getData()),a.change()},1)}),n.on("insertHtml",function(){n.updateElement(),setTimeout(function(){a.val(n.getData()),a.change()},1)})}}},{key:"_initValidate",value:function(){this.validator=this.$form.validate(),$("*[data-score]:visible").length>0&&$("*[data-score]:visible").each(function(){$(this).rules("add",{required:!0,score:!0,min:0,messages:{required:Translator.trans("activity.testpaper_manage.required_error_hint")}})})}},{key:"_quick2Question",value:function(t){var e=$(t.currentTarget),a=$(e.data("anchor")).offset();$(document).scrollTop(a.top-55)}},{key:"_submitValidate",value:function(){var t=0;if(void 0==this.validator||this.validator.form()){var e=this;$("*[data-score]").each(function(){var a={},i=$(this).data("id");a.score=Number($(this).val()),a.teacherSay=$('[name="teacherSay_'+i+'"]').val(),e.checkContent[i]=a,t+=Number($(this).val())});var a=Number(this.$dialog.find('[name="objectiveScore"]').val()),i=Number(t)+a;this.$dialog.find("#totalScore").html(i),this.$dialog.modal("show")}}},{key:"_continue",value:function(t){this.isContinue=!0,this._submit(t)}},{key:"_submit",value:function(t){var e=$(t.currentTarget),a=this.$dialog.find("textarea").val(),i=this.$dialog.find('[name="passedStatus"]:checked').val();e.button("loading"),$.post(e.data("postUrl"),{result:this.checkContent,teacherSay:a,passedStatus:i,isContinue:this.isContinue},function(t){""!=t.goto?window.location.href=t.goto:window.location.reload()})}},{key:"_teacherSayFill",value:function(t){var e=$(t.currentTarget),a=e.find("option:selected");""==a.val()?this.$dialog.find("textarea").val(""):this.$dialog.find("textarea").val(a.text())}}]),t}())($(".js-testpaper-container"))}},["76ba066af90c0dc366fc"]);