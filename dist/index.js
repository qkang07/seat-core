(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SeatCore = {}));
})(this, (function (exports) { 'use strict';

  var Seat = /** @class */ (function () {
      function Seat(comp, dom, props) {
          this.comp = comp;
          this.dom = dom;
          this.instance = null;
          if (dom) {
              this.mount(dom, props);
          }
      }
      Seat.prototype.mount = function (dom, props) {
          var _this = this;
          this.props = props;
          this.instance = this.comp.render({
              dom: dom,
              props: props,
              emit: function (ev) {
                  if (_this.cb) {
                      _this.cb(ev);
                  }
              }
          });
      };
      Seat.prototype.onEmit = function (cb) {
          this.cb = cb;
      };
      Seat.prototype.updateProps = function (props) {
          if (this.instance) {
              this.props = Object.assign({}, this.props, props);
              this.instance.updateProps(this.props);
          }
      };
      return Seat;
  }());

  exports.Seat = Seat;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
