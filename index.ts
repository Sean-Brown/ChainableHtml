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
export class BaseOptions {
    public constructor(public _id:string = "", public _class:string = "", public _style:string = "") {
        this._id = esc(this._id);
        this._class = esc(this._class);
        this._style = esc(this._style);
    }
}
export enum RefTargetType {
    blank, parent, self, top
}
export class RefOptions extends BaseOptions {
    constructor(public _href:string = "", public _target:string = "_blank", _id:string = "", _class:string = "", _style:string = "") {
        super(_id, _class, _style);
    }
    static target(type:RefTargetType): string {
        switch (type) {
            default:
            case RefTargetType.blank: return "_blank";
            case RefTargetType.parent: return "_parent";
            case RefTargetType.self: return "_self";
            case RefTargetType.top: return "_top";
        }
    }
}
export class ImgOptions extends BaseOptions {
    constructor(public _src:string = "", public _alt:string = "", _id:string = "", _class:string = "", _style:string = "") {
        super(_id, _class, _style);
    }
}
export class ClickableOptions extends BaseOptions {
    public constructor(_id:string = "", _class:string = "", _style:string = "", public _onclick:string = "") {
        super(_id, _class, _style);
        this._onclick = esc(this._onclick);
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
    static get a():string { return "a"; }
    static get button():string { return "button"; }
    static get img():string { return "img"; }
}
export class ChainableHtml {
    public constructor(public html:string = "") {
    }
    protected baseEl(tag:string, opts:BaseOptions = null): ChainableHtml {
        if (opts == null)
            opts = new BaseOptions();
        this.html += `<${tag} id='${opts._id}' class='${opts._class}' style='${opts._style}'>`;
        return this;
    }
    protected baseRefEl(tag:string, opts:RefOptions = null): ChainableHtml {
        if (opts == null)
            opts = new RefOptions();
        this.html += `<${tag} id='${opts._id}' class='${opts._class}' style='${opts._style}' href='${opts._href}' target='${opts._target}'>`;
        return this;
    }
    protected baseImgEl(tag:string, opts:ImgOptions = null): ChainableHtml {
        if (opts == null)
            opts = new ImgOptions();
        this.html += `<${tag} id='${opts._id}' class='${opts._class}' style='${opts._style}' src='${opts._src}' alt='${opts._alt}'>`;
        return this;
    }
    protected closeEl(tag:string): ChainableHtml {
        this.html += `</${tag}>`;
        return this;
    }
    val(str:string): ChainableHtml
    {
        this.html += htmlEsc(str);
        return this;
    }
    br(): ChainableHtml
    {
        this.html += "<br />";
        return this;
    }

    div(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.div, opts); }
    endDiv(): ChainableHtml { return this.closeEl(ChainableTags.div); }

    p(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.p, opts); }
    endP(): ChainableHtml { return this.closeEl(ChainableTags.p); }

    h1(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.h1, opts); }
    endH1(): ChainableHtml { return this.closeEl(ChainableTags.h1); }
    h2(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.h2, opts); }
    endH2(): ChainableHtml { return this.closeEl(ChainableTags.h2); }
    h3(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.h3, opts); }
    endH3(): ChainableHtml { return this.closeEl(ChainableTags.h3); }
    h4(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.h4, opts); }
    endH4(): ChainableHtml { return this.closeEl(ChainableTags.h4); }

    ul(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.ul, opts); }
    endUl(): ChainableHtml { return this.closeEl(ChainableTags.ul); }
    ol(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.ol, opts); }
    endOl(): ChainableHtml { return this.closeEl(ChainableTags.ol); }
    li(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.li, opts); }
    endLi(): ChainableHtml { return this.closeEl(ChainableTags.li); }

    span(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.span, opts); }
    endSpan(): ChainableHtml { return this.closeEl(ChainableTags.span); }

    a(opts:RefOptions = null): ChainableHtml { return this.baseRefEl(ChainableTags.a, opts); }
    endA(): ChainableHtml { return this.closeEl(ChainableTags.a); }

    button(opts:BaseOptions = null): ChainableHtml { return this.baseEl(ChainableTags.button, opts); }
    endButton(): ChainableHtml { return this.closeEl(ChainableTags.button); }

    img(opts:ImgOptions = null): ChainableHtml { return this.baseImgEl(ChainableTags.img, opts); }
}
export class ChainableClickHtml extends ChainableHtml {
    public constructor(html:string = "") {
        super(html);
    }
    protected baseEl(tag:string, opts:ClickableOptions = null): ChainableClickHtml {
        if (opts == null)
            opts = new ClickableOptions();
        this.html += `<${tag} id='${opts._id}' class='${opts._class}' style='${opts._style}' onclick='${opts._onclick}'>`;
        return this;
    }
    div(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.div, opts); }
    p(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.p, opts); }
    h1(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.h1, opts); }
    h2(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.h2, opts); }
    h3(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.h3, opts); }
    h4(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.h4, opts); }
    ul(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.ul, opts); }
    ol(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.ol, opts); }
    li(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.li, opts); }
    span(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.span, opts); }
    button(opts:ClickableOptions = null): ChainableClickHtml { return this.baseEl(ChainableTags.button, opts); }
}