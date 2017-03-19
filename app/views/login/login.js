"use strict";
var config			= require("../../shared/config"),
	Color 			= config.colorHelper,
	frameModule 	= require("ui/frame"),
	UserViewModel 	= require("../../shared/view-models/user-view-model"),
	user 			= new UserViewModel(),
	page,
	email,
	pass;


/* Quando a página carrega*/
exports.pageLoaded = function pageLoaded(args) 
{
	page 				= args.object;
	page.bindingContext = user;
	email 				= page.getViewById("email");
	pass 				= page.getViewById("pass");

	var color = new Color("#B0BBC5");

    if (page.android) {
        email.android.setHintTextColor(color.android);
        pass.android.setHintTextColor(color.android);
    }
    else if(page.ios){
        var placeholder = email.ios.valueForKey("placeholderLabel");
        placeholder.textColor = color.ios;
        placeholder = pass.ios.valueForKey("placeholderLabel");
        placeholder.textColor = color.ios;
    }
};

/* Quanto o botão de login é clicado*/
exports.login = function() 
{
	if(user.login())
	{
		var navOptions = {
			moduleName:"views/home/home",
			context: {
				email: user.email
			}
		};
		frameModule.topmost().navigate(navOptions);
	} else {
		alert("Preencha suas credenciais!");
	}
};