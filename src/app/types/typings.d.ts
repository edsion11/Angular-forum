// markdown
declare var window: Window & typeof globalThis;
interface Markdown{
    ready: any;
}
interface Window {
    markdown: Markdown;
}

//highlight
interface PublicApi {
    highlightBlock: (element: Element) => void
}
declare var hljs: PublicApi;