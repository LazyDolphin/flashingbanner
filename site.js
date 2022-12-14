// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

(function($) {"use strict";
$.fn.sliderResponsive = function(settings) {
var set = $.extend( {slidePause: 4000, fadeSpeed: 800, autoPlay: "on", showArrows: "off", hideDots: "off"}, settings ); 
var $slider = $(this); var size = $slider.find("> div").length; var position = 0; var sliderIntervalID;
$slider.append("<ul></ul>"); $slider.find("> div").each(function(){$slider.find("> ul").append('<li></li>');});
$slider.find("div:first-of-type").addClass("show");
$slider.find("li:first-of-type").addClass("showli")
$slider.find("> div").not(".show").fadeOut();
if (set.autoPlay === "on") { startSlider();}
if (set.showArrows === "on") {$slider.addClass('showArrows'); }
if (set.hideDots === "on") {$slider.addClass('hideDots'); }
function startSlider() {sliderIntervalID = setInterval(function() {nextSlide();}, set.slidePause);}
$slider.mouseover(function() {if (set.autoPlay === "on") {clearInterval(sliderIntervalID);} });
$slider.mouseout(function() { if (set.autoPlay === "on") {startSlider(); } });
$slider.find("> .right").click(nextSlide)
$slider.find("> .left").click(prevSlide);
function nextSlide() {position = $slider.find(".show").index() + 1;
if (position > size - 1) position = 0; changeCarousel(position);}
function prevSlide() {position = $slider.find(".show").index() - 1;
if (position < 0) position = size - 1; changeCarousel(position);}
$slider.find(" > ul > li").click(function() {position = $(this).index(); changeCarousel($(this).index()); });
function changeCarousel() {$slider.find(".show").removeClass("show").fadeOut();
$slider .find("> div") .eq(position) .fadeIn(set.fadeSpeed) .addClass("show");
$slider.find("> ul").find(".showli").removeClass("showli");
$slider.find("> ul > li").eq(position).addClass("showli"); }
return $slider;};
})(jQuery);
$(document).ready(function() { $("#slider1").sliderResponsive({// Using default everything // slidePause: 5000, // fadeSpeed: 800,  // autoPlay: "on", // showArrows: "off", // hideDots: "off", // titleBarTop: "off" 
}); }); 
