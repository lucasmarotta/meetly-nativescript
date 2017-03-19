"use strict";
var config			= require("../../shared/config"),
	Color 			= config.colorHelper,
	UserViewModel 	= require("../../shared/view-models/user-view-model"),
	user 			= new UserViewModel(),
	page,
	emailLogged;

/* Quando a página carrega*/
exports.pageLoaded = function pageLoaded(args) 
{
	page = args.object;
	var context = page.navigationContext;
	var emailLogged = page.getViewById("emailLogged");
	emailLogged.text = context.email;

};