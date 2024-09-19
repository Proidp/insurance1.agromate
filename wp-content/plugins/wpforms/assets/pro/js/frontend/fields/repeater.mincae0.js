const WPFormsRepeaterField=window.WPFormsRepeaterField||function(e,r,o){const l={},n={init(){o(n.ready)},ready(){l.$doc=o(e),n.initClones(l.$doc),n.updateAllFieldsCloneList(l.$doc),n.initDescriptions(l.$doc,"init"),n.events()},events(){l.$doc.on("click",".wpforms-field-repeater-button-add",n.buttonAddClick).on("click",".wpforms-field-repeater-button-remove",n.buttonRemoveClick).on("wpformsProcessConditionalsField",n.processConditionalsField).on("wpformsPageChange",n.pageChange)},initClones(e){var i=e.hasClass("wpforms-field-repeater")?"":".wpforms-field-repeater ",t=e.find(i+"> .wpforms-field-repeater-display-rows .wpforms-field-repeater-display-rows-buttons"),i=e.find(i+"> .wpforms-field-repeater-display-blocks-buttons");n.initRowsButtons(t),n.initBlocksButtons(i),e.find(".wpforms-field-repeater-clone-wrap .wpforms-field-repeater-display-rows-buttons").addClass("wpforms-init"),e.find(".wpforms-field-repeater-clone-wrap > .wpforms-field-repeater-display-rows .wpforms-field-label").remove(),n.initRichTextClones(e.find(".wpforms-field-repeater-clone-wrap"))},initRowsButtons(e){e.each(function(){var e=o(this),i=e.siblings(".wpforms-layout-column").find(".wpforms-field:not(.wpforms-field-hidden)"),t=i.last().find(".wpforms-field-label"),s=(t.length?r.getComputedStyle(t.get(0)):null)?.getPropertyValue("--wpforms-field-size-input-spacing")||0,t=(t.outerHeight()||0)+Number.parseInt(s,10)+10;i.length?(e.toggleClass("wpforms-init",0<i.length).css({top:t}),n.initMinMaxRows(e)):n.removeAllButtons(e.closest(".wpforms-field-repeater"))})},initBlocksButtons(e){e.each(function(){var e=o(this),i=e.closest(".wpforms-field-repeater");i.find(".wpforms-field-repeater-display-blocks .wpforms-field:not(.wpforms-field-hidden)").length?n.initMinMaxRows(e):n.removeAllButtons(i)})},removeAllButtons(e){e.find(`
					.wpforms-field-repeater-display-blocks-buttons,
					.wpforms-field-repeater-display-rows-buttons
				`).remove()},initMinMaxRows(e){var e=e.closest(".wpforms-field-repeater"),i=e.find(".wpforms-field-repeater-display-rows-buttons, .wpforms-field-repeater-display-blocks-buttons"),t=e.data("rows-min")||1,s=(i.find("button").removeClass("wpforms-disabled"),e.find("> .wpforms-field-layout-rows, .wpforms-field-repeater-clone-wrap")),s=s.length<=t?t:1;e.find(`.wpforms-field-layout-rows:lt(${s}),
				.wpforms-field-repeater-display-blocks-buttons:lt(${s})`).find(".wpforms-field-repeater-button-remove").addClass("wpforms-disabled").attr("tabindex","-1");const r=i.length>=e.data("rows-max");i.find(".wpforms-field-repeater-button-add").toggleClass("wpforms-disabled",r).attr("tabindex",()=>r?"-1":null)},buttonAddClick(){var e=o(this);if(!e.hasClass("wpforms-disabled")){const s=e.closest(".wpforms-field-repeater");var i=s.find(".tmpl-wpforms-field-repeater-template").text();if(i.length){var t=s.data("clone-num")||2,i=i.replaceAll("{CLONE}",t),t=(s.data("clone-num",t+1),e.closest(".wpforms-field-repeater-clone-wrap"));t=(t=t.length?t:e.closest(".wpforms-field-layout-rows")).length?t:s.find("> .wpforms-field-repeater-display-blocks-buttons");const r=o(i);r.hide(),r.find(".wpforms-field-repeater-display-rows-buttons button").removeClass("wpforms-disabled"),r.find(".wpforms-field-repeater-display-blocks-buttons button").removeClass("wpforms-disabled"),t.after(r),n.updateCloneList(s),n.initClones(s),n.initFields(r),n.initDescriptions(s,"add"),r.slideDown(200,function(){l.$doc.trigger("wpformsRepeaterFieldCloneDisplay",[r,s])}),n.updateBlockTitleNumbers(s),l.$doc.trigger("wpformsRepeaterFieldCloneCreated",[r,s])}}},buttonRemoveClick(){var e=o(this);if(!e.hasClass("wpforms-disabled")){const i=e.closest(".wpforms-field-repeater"),t=e.closest(".wpforms-field-repeater-clone-wrap");e=i.find(".wpforms-field-repeater-clone-wrap").last().is(t)?"remove-last":"remove";n.initDescriptions(i,e),t.slideUp(200,function(){t.remove(),n.updateCloneList(i),n.initClones(i),n.updateBlockTitleNumbers(i),l.$doc.trigger("wpformsRepeaterFieldCloneRemoved",[t,i])})}},updateCloneList(e){var t=e.find(".wpforms-field-repeater-clone-list");if(t.length){var s=e.find(".wpforms-field-repeater-clone-wrap");const r=[];let i=1;s.each(function(){var e=Number.parseInt(o(this).data("clone"),10)||0;i=e>i?e:i,r.push(o(this).data("clone"))}),t.val(JSON.stringify(r)),e.attr("data-clone-num",i+1)}},updateAllFieldsCloneList(e){(e.hasClass("wpforms-field-repeater")?e.parent():e).find(".wpforms-field-repeater").each(function(){n.updateCloneList(o(this))})},processConditionalsField(e,i,t,s,r){i=o(`#wpforms-${i}-field_${t}-container`);i.hasClass("wpforms-field-repeater")&&("show"===r||s)&&n.initClones(i)},pageChange(e,i,t){n.initClones(t.find(".wpforms-page-"+i))},updateBlockTitleNumbers(e){e.find(".wpforms-wpforms-field-repeater-block-num").each(function(e){o(this).text("#"+(e+2))})},initDescriptions(e,t){(e.hasClass("wpforms-field-repeater")?e:e.find(".wpforms-field-repeater")).each(function(){var e=o(this);if(e.hasClass("wpforms-field-repeater-display-rows")){const i=e.find(".wpforms-field-repeater-display-rows");"init"===t?i.last().find(".wpforms-field-description").addClass("wpforms-init"):("remove-last"===t?i.filter(e=>2<=i.length&&e===i.length-2):(i.filter(e=>e!==i.length-1).find(".wpforms-field-description").slideUp(200,()=>{o(this).removeClass("wpforms-init",1<i.length)}),i.last())).find(".wpforms-field-description").slideDown(200,()=>{o(this).addClass("wpforms-init")})}})},initFields(e){n.initNumberSlider(e),wpforms.loadDatePicker(e),wpforms.loadTimePicker(e),wpforms.loadSmartPhoneField(e),wpforms.loadChoicesJS(e),wpforms.loadInputMask(e),r.WPFormsTextLimit?.initHint("#"+e.attr("id")),r.WPForms?.FrontendModern?.updateGBBlockRatingColor(e),r.WPForms?.FrontendModern?.updateGBBlockIconChoicesColor(e)},initNumberSlider(e){e.find(".wpforms-field-number-slider input").each(function(){var e=o(this),i=e.val(),e=e.siblings(".wpforms-field-number-slider-hint");e.html(e.data("hint")?.replaceAll("{value}",`<b>${i}</b>`))})},initRichTextClones(e){e.each(function(){var e=o(this);const i=e.closest(".wpforms-field-repeater").find("> .wpforms-field-repeater-display-rows .wp-editor-area");e.find(".wp-editor-area").each(function(e){n.initClonedRichTextField(o(this).attr("id"),i.eq(e).attr("id"))})})},initClonedRichTextField(e,i){var t,s;tinyMCEPreInit&&tinymce&&((t={})[e]={...tinyMCEPreInit.mceInit[i]},t[e].body_class=t[e].body_class?.replace(i,e),t[e].selector="#"+e,(s={})[e]={...tinyMCEPreInit.qtInit[i]},s[e].id=e,tinyMCEPreInit.mceInit={...tinyMCEPreInit.mceInit,...t},tinyMCEPreInit.qtInit={...tinyMCEPreInit.qtInit,...s},r.quicktags(tinyMCEPreInit.qtInit[e]),o("#"+e).css("visibility","initial"),tinymce.EditorManager.execCommand("mceAddEditor",!0,e))}};return n}(document,window,jQuery);WPFormsRepeaterField.init();