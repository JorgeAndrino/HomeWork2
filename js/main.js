// JavaScript Document


function() {
	"use strict";
	console.log("Linked up");
	
	
	document.getElementsById("Image1").addEventListener("mouseover", mouseOver);
	document.getElementsById("Image1").addEventListener("mouseout", mouseOut);
	
	function mouseOver() {
		document.getElementsById("Image1").scale.outerWidth = "25px";
	}) ();
	
	function mouseOut() {
		document.getElementsById("Image1").scale.innerWidth = "35px";
	}) ();
	
}) ();
