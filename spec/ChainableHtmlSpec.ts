/// <reference path="../typings/main/ambient/jasmine/index.d.ts" />

import {ChainableHtml, BaseOptions, ChainableClickHtml, ClickableOptions} from "../index";

describe("Functional tests", function() {
    it("creates a basic div", function() {
        var chain = new ChainableHtml();
        chain = chain.div().endDiv();
        expect(chain.html).toEqual("<div id='' class='' style=''></div>");
    });
    it("escapes single and double quotes in attribute values", function() {
        var chain = new ChainableHtml();
        chain = chain.div(new BaseOptions("'oh no\""));
        expect(chain.html).toEqual("<div id='\\'oh no\\\"' class='' style=''>");
    });
    it("chains clickable elements", function() {
        var chain = new ChainableClickHtml();
        chain = chain.div(new ClickableOptions("", "", "", "yay"));
        expect(chain.html).toEqual("<div id='' class='' style='' onclick='yay'>");
    });
    it("sets an element's text value", function() {
        var val = "test value";
        var chain = new ChainableHtml();
        chain = chain.div().val(val).endDiv();
        expect(chain.html).toEqual(`<div id='' class='' style=''>${val}</div>`);
    });
});