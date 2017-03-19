"use strict";
var config      = require("../../shared/config");
var Observable  = require("data/observable").Observable;

function User(info)
{
    info = info || {};
    var viewModel = new Observable(
    {
        email: info.email || "",
        emailHint: info.emailHint || "Email",
        pass: info.pass || "",
        passHint: info.passHint || "Senha"
    });

    viewModel.login = function()
    {
        console.log(this.email);
        console.log(this.pass);
        if(this.email != "" && this.pass != "")
            return true;
        return false;
    };

    viewModel.createAccount = function()
    {
        console.log("createAccount");
    };

    return viewModel;
}

module.exports = User;