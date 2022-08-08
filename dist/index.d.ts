export interface IRenderSeatParams {
    dom: HTMLElement;
    emit: (ev: any) => void;
    props: any;
}
export interface IRenderSeatRef {
    updateProps: (props: any) => void;
    destroy: () => void;
}
export interface ISeatComponent {
    meta: {
        name: string;
        label: string;
    };
    render: (params: IRenderSeatParams) => IRenderSeatRef;
}
export declare class Seat<P extends Record<string, any> = {}> {
    comp: ISeatComponent;
    dom?: HTMLElement;
    instance: IRenderSeatRef | null;
    props?: P;
    cb?: (ev: any) => any;
    constructor(comp: ISeatComponent, dom?: HTMLElement, props?: P);
    mount(dom: HTMLElement, props?: P): void;
    onEmit(cb: (ev: any) => any): void;
    updateProps(props: P): void;
}
