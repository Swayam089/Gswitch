"use strict";$(function(){var n,e=$(".container");0<$("a.ias-next").length&&0<e.length&&((n=jQuery.ias({container:".container",item:".item",pagination:".pages_con",next:"a.ias-next",delay:250,negativeMargin:150})).on("render",function(n){$(n).css({opacity:0})}),n.on("rendered",function(n){$(n).removeAttr("style"),e.append(n)}),n.extension(new IASSpinnerExtension({html:'<div class="ias-loading"><a href="javascript:void(0);"><span class="glyphicon glyphicon-refresh loading-animate"></span> loading...</a></div>'})),n.extension(new IASTriggerExtension({offset:3,text:"load more",html:'<div class="ias-bar"><a href="javascript:void(0);"><span class="glyphicon glyphicon-refresh"></span> {text}</a></div>'})),n.extension(new IASNoneLeftExtension({text:"go to top",html:'<div class="ias-bar"><a href="javascript:gotoTop();"><span class="glyphicon glyphicon-arrow-up"></span> {text}</a></div>'})),n.on("load",function(n){var e=n.url.replace(window.location.origin,"");$(window).trigger("gaPushEvent",{event:"gaTriggerPageview",page:e})}))});