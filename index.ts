
export interface IRenderSeatParams {
  dom: HTMLElement
  emit: (ev: any) => void
  props: any
}

export interface IRenderSeatRef {
  updateProps: (props: any) => void
  destroy: () => void
}

export interface ISeatComponent {
  meta: {
    name: string
    label: string
  },
  render: (params: IRenderSeatParams) => IRenderSeatRef
}


export class Seat<P extends Record<string, any> = {}> {


  instance: IRenderSeatRef | null = null

  props?: P

  cb?: (ev: any) => any

  constructor(public comp: ISeatComponent, public dom?: HTMLElement, props?: P){
    if(dom){
      this.mount(dom, props)
    }
  }

  mount(dom: HTMLElement, props?: P){
    this.props = props
    this.instance = this.comp.render({
      dom,
      props,
      emit: (ev: any) => {
        if(this.cb){
          this.cb(ev)
        }
      }
    })

  }

  onEmit(cb: (ev: any) => any){
    this.cb = cb
  }

  updateProps(props: P){
    if(this.instance){
      this.props = Object.assign({}, this.props, props)
      this.instance.updateProps(this.props)
    }
  }
}