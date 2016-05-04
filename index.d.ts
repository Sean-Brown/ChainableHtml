export declare class BaseChainableOptions {
    _id: string;
    _class: string;
    _style: string;
    constructor(_id?: string, _class?: string, _style?: string);
}
export declare class ClickableOptions extends BaseChainableOptions {
    _onclick: string;
    constructor(_id?: string, _class?: string, _style?: string, _onclick?: string);
}
export declare class ListItemOptions extends ClickableOptions {
    value: string;
    constructor(_id?: string, _class?: string, _style?: string, _onclick?: string, value?: string);
}
export declare class ChainableTags {
    static div: string;
    static p: string;
    static h1: string;
    static h2: string;
    static h3: string;
    static h4: string;
    static ul: string;
    static ol: string;
    static li: string;
    static span: string;
}
export declare class ChainableHtml {
    html: string;
    constructor(html?: string);
    protected baseEl(tag: string, opts: BaseChainableOptions): ChainableHtml;
    protected closeEl(tag: string): ChainableHtml;
    div(opts: BaseChainableOptions): ChainableHtml;
    endDiv(): ChainableHtml;
    p(opts: BaseChainableOptions): ChainableHtml;
    endP(): ChainableHtml;
    h1(opts: BaseChainableOptions): ChainableHtml;
    endH1(): ChainableHtml;
    h2(opts: BaseChainableOptions): ChainableHtml;
    endH2(): ChainableHtml;
    h3(opts: BaseChainableOptions): ChainableHtml;
    endH3(): ChainableHtml;
    h4(opts: BaseChainableOptions): ChainableHtml;
    endH4(): ChainableHtml;
    ul(opts: BaseChainableOptions): ChainableHtml;
    endUl(): ChainableHtml;
    ol(opts: BaseChainableOptions): ChainableHtml;
    endOl(): ChainableHtml;
    li(opts: BaseChainableOptions): ChainableHtml;
    span(opts: BaseChainableOptions): ChainableHtml;
    endSpan(): ChainableHtml;
}
export declare class ChainableClickHtml extends ChainableHtml {
    constructor(html?: string);
    protected baseEl(tag: string, opts: ClickableOptions): ChainableClickHtml;
    div(opts: ClickableOptions): ChainableClickHtml;
    p(opts: ClickableOptions): ChainableClickHtml;
    h1(opts: ClickableOptions): ChainableClickHtml;
    h2(opts: ClickableOptions): ChainableClickHtml;
    h3(opts: ClickableOptions): ChainableClickHtml;
    h4(opts: ClickableOptions): ChainableClickHtml;
    ul(opts: ClickableOptions): ChainableClickHtml;
    ol(opts: ClickableOptions): ChainableClickHtml;
    li(opts: ClickableOptions): ChainableClickHtml;
    span(opts: ClickableOptions): ChainableClickHtml;
}
