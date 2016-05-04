function esc(opt:string): string {
    return opt.replace("'", "\\'").replace("\"", "\\\"");
}
function htmlEsc(val:string): string {
    return val
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
export class BaseChainableOptions {
    public constructor(public _id:string = "", public _class:string = "", public _style:string = "") {
        this._id = esc(this._id);
        this._class = esc(this._class);
        this._style = esc(this._style);
    }
}
export class ClickableOptions extends BaseChainableOptions {
    public constructor(_id:string = "", _class:string = "", _style:string = "", public _onclick:string = "") {
        super(_id, _class, _style);
        this._onclick = esc(this._onclick);
    }
}
export class ListItemOptions extends ClickableOptions {
    public constructor(_id:string = "", _class:string = "", _style:string = "", _onclick:string = "", public value = "") {
        super(_id, _class, _style);
    }
}
export class ChainableTags {
    static get div():string { return "div"; }
    static get p():string { return "p"; }
    static get h1():string { return "h1"; }
    static get h2():string { return "h2"; }
    static get h3():string { return "h3"; }
    static get h4():string { return "h4"; }
    static get ul():string { return "ul"; }
    static get ol():string { return "ol"; }
    static get li():string { return "ol"; }
    static get span():string { return "span"; }
}
export class ChainableHtml {
    public constructor(public html:string = "") {
    }
    protected baseEl(tag:string, opts: BaseChainableOptions): ChainableHtml {
        this.html += `<${tag} id='${opts._id}' class='${opts._class}' style='${opts._style}'>`;
        return this;
    }
    protected closeEl(tag:string): ChainableHtml {
        this.html += `</${tag}>`;
        return this;
    }
    div(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.div, opts); }
    endDiv(): ChainableHtml { return this.closeEl(ChainableTags.div); }

    p(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.p, opts); }
    endP(): ChainableHtml { return this.closeEl(ChainableTags.p); }

    h1(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.h1, opts); }
    endH1(): ChainableHtml { return this.closeEl(ChainableTags.h1); }
    h2(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.h2, opts); }
    endH2(): ChainableHtml { return this.closeEl(ChainableTags.h2); }
    h3(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.h3, opts); }
    endH3(): ChainableHtml { return this.closeEl(ChainableTags.h3); }
    h4(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.h4, opts); }
    endH4(): ChainableHtml { return this.closeEl(ChainableTags.h4); }

    ul(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.ul, opts); }
    endUl(): ChainableHtml { return this.closeEl(ChainableTags.ul); }
    ol(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.ol, opts); }
    endOl(): ChainableHtml { return this.closeEl(ChainableTags.ol); }
    li(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.li, opts); }

    span(opts: BaseChainableOptions): ChainableHtml { return this.baseEl(ChainableTags.span, opts); }
    endSpan() { return this.closeEl(ChainableTags.span); }
}
export class ChainableClickHtml extends ChainableHtml {
    public constructor(html:string = "") {
        super(html);
    }
    protected baseEl(tag:string, opts:ClickableOptions): ChainableClickHtml {
        this.html += `<${tag} id='${opts._id}' class='${opts._class}' style='${opts._style}' onclick='${opts._onclick}'>`;
        return this;
    }
    div(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.div, opts); }
    p(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.p, opts); }
    h1(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.h1, opts); }
    h2(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.h2, opts); }
    h3(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.h3, opts); }
    h4(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.h4, opts); }
    ul(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.ul, opts); }
    ol(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.ol, opts); }
    li(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.li, opts); }
    span(opts: ClickableOptions): ChainableClickHtml { return this.baseEl(ChainableTags.span, opts); }
}