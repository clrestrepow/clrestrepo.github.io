(window.webpackJsonp=window.webpackJsonp||[]).push([["d13d"],{"2W6z":function(e,t,n){"use strict";var a=function(){};e.exports=a},C5RK:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/loading",function(){var e=n("Ti5x");return{page:e.default||e}}])},GiOn:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(e,t,n){return function(e,t,n,a,r,o){function i(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,o,i,u=e<0;if(e=Math.abs(e).toFixed(s.decimals),t=(e+="").split("."),n=t[0],a=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(r="",o=0,i=n.length;o<i;++o)0!==o&&o%3==0&&(r=s.options.separator+r),r=n[i-o-1]+r;n=r}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return s.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return s.options.numerals[+e]})),(u?"-":"")+s.options.prefix+n+a+s.options.suffix},prefix:"",suffix:"",numerals:[]},o&&"object"==typeof o)for(var u in s.options)o.hasOwnProperty(u)&&null!==o[u]&&(s.options[u]=o[u]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var l=0,c=["webkit","moz","ms","o"],d=0;d<c.length&&!window.requestAnimationFrame;++d)window.requestAnimationFrame=window[c[d]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[d]+"CancelAnimationFrame"]||window[c[d]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-l)),r=window.setTimeout(function(){e(n+a)},a);return l=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),i(s.startVal)&&i(s.endVal)?(s.decimals=Math.max(0,a||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(r)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!i(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},PHNs:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=a(n("GiOn")),o=a(n("17x9")),i=n("q1tI"),s=a(i),u=a(n("2W6z"));function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(u){r=!0,o=u}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e,t){var n=t.decimal,a=t.decimals,o=t.duration,i=t.easingFn,s=t.end,u=t.formattingFn,l=t.prefix,c=t.separator,d=t.start,p=t.suffix,f=t.useEasing;return new r(e,d,s,a,o,{decimal:n,easingFn:i,formattingFn:u,separator:c,prefix:l,suffix:p,useEasing:f,useGrouping:!!c})},h=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return a=this,r=(e=d(t)).call.apply(e,[this].concat(i)),n=!r||"object"!=typeof r&&"function"!=typeof r?f(a):r,c(f(f(n)),"createInstance",function(){return"function"==typeof n.props.children&&u(n.containerRef.current&&(n.containerRef.current instanceof HTMLElement||n.containerRef.current instanceof SVGTextElement),'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'),v(n.containerRef.current,n.props)}),c(f(f(n)),"pauseResume",function(){var e=f(f(n)),t=e.reset,a=e.restart,r=e.update,o=n.props.onPauseResume;n.instance.pauseResume(),o({reset:t,start:a,update:r})}),c(f(f(n)),"reset",function(){var e=f(f(n)),t=e.pauseResume,a=e.restart,r=e.update,o=n.props.onReset;n.instance.reset(),o({pauseResume:t,start:a,update:r})}),c(f(f(n)),"restart",function(){n.reset(),n.start()}),c(f(f(n)),"start",function(){var e=f(f(n)),t=e.pauseResume,a=e.reset,r=e.restart,o=e.update,i=n.props,s=i.delay,u=i.onEnd,l=i.onStart,c=function(){return n.instance.start(function(){return u({pauseResume:t,reset:a,start:r,update:o})})};s>0?n.timeoutId=setTimeout(c,1e3*s):c(),l({pauseResume:t,reset:a,update:o})}),c(f(f(n)),"update",function(e){var t=f(f(n)),a=t.pauseResume,r=t.reset,o=t.restart,i=n.props.onUpdate;n.instance.update(e),i({pauseResume:a,reset:r,start:o})}),c(f(f(n)),"containerRef",s.createRef()),n}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,i.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){return this.props.duration!==e.duration||this.props.end!==e.end||this.props.start!==e.start||this.props.redraw}},{key:"componentDidUpdate",value:function(e){this.props.duration===e.duration&&this.props.start===e.start||(this.instance=this.createInstance(),this.start()),this.props.end!==e.end&&(this.instance.reset(),this.instance.update(this.props.end))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,o=this.pauseResume,i=this.reset,u=this.restart,l=this.update;return"function"==typeof t?t({countUpRef:r,pauseResume:o,reset:i,start:u,update:l}):s.createElement("span",{className:n,ref:r,style:a})}}])&&l(n.prototype,a),r&&l(n,r),t}();c(h,"propTypes",{decimal:o.string,decimals:o.number,delay:o.number,easingFn:o.func,end:o.number.isRequired,formattingFn:o.func,onEnd:o.func,onStart:o.func,prefix:o.string,redraw:o.bool,separator:o.string,start:o.number,suffix:o.string,style:o.object,useEasing:o.bool}),c(h,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,suffix:"",style:void 0,useEasing:!0});t.default=h,t.useCountUp=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){c(e,t,n[t])})}return e}({},h.defaultProps,e),n=t.start,a=t.formattingFn,r=m(i.useState("function"==typeof a?a(n):n),2),o=r[0],s=r[1],u=i.useRef(null),l=function(){var e=u.current;if(null!==e)return e;var n=function(){var e=v(-1,t),n=e.options.formattingFn;return e.options.formattingFn=function(){var e=n.apply(void 0,arguments);s(e)},e}();return u.current=n,n},d=function(){var e=t.onReset;l().reset(),e({pauseResume:f,start:p,update:g})},p=function e(){var n=t.onStart,a=t.onEnd;l().reset(),l().start(function(){a({pauseResume:f,reset:d,start:e,update:g})}),n({pauseResume:f,reset:d,update:g})},f=function(){var e=t.onPauseResume;l().pauseResume(),e({reset:d,start:p,update:g})},g=function(e){var n=t.onUpdate;l().update(e),n({pauseResume:f,reset:d,start:p})};return i.useEffect(function(){var e=t.delay,n=t.onStart,a=t.onEnd,r=setTimeout(function(){n({pauseResume:f,reset:d,update:g}),l().start(function(){clearTimeout(r),a({pauseResume:f,reset:d,start:p,update:g})})},1e3*e);return d},[]),{countUp:o,start:p,pauseResume:f,reset:d,update:g}}},Ti5x:function(e,t,n){"use strict";n.r(t);var a=n("0iUn"),r=n("sLSF"),o=n("MI3g"),i=n("a7VT"),s=n("Tit0"),u=n("q1tI"),l=n.n(u),c=n("ijpJ"),d=(n("uPO8"),n("PHNs")),p=n.n(d),f=function(e){function t(){return Object(a.default)(this,t),Object(o.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e={0:{frase:"Un grande nubarrón se alza en el cielo, ya se aproxima una fuerte tormenta",autor:"RAFAEL OROZCO"},1:{frase:"La herida que siempre llevo en el alma, no cicatriza",autor:"Diomedes Díaz"},2:{frase:"Cuando salga de mi casa y me demore por la calle no te preocupes Anita",autor:"Carlos Vives"},3:{frase:"No piensen que este disco está rayado, es que sinceramente no sé qué me pasa",autor:"Kaleth Morales"},4:{frase:"Los caminos de la vida, no son como yo pensaba",autor:"Los diablitos"},5:{frase:"La verdad es que a mí celos me dan, cuando la veo llegar con su señor marido",autor:"Otto Serge"},6:{frase:"Por qué lo vine a conocer señor, cuando su vida toda de ella es",autor:"Patricia Teherán"},7:{frase:"Olvídala mejor olvídala, arráncala de ti que ya tiene otro amor",autor:"Binomio de Oro"},8:{frase:"Si me llego a morir, no la culpen a ella, culpen a mi corazón que se enamoró sin conocerla",autor:"Binomio de Oro"},9:{frase:"Lo mejor que me ha pasado en toda mi vida ha sido tenerte a ti como compañera",autor:"Rafael Orozco"},10:{frase:"Quise cultivar un amor y me he quedado sólo, creo que sembré en tierra mala o no supe sembrar",autor:"Binomio de Oro"},11:{frase:"Te voy a hacer una casa en el aire, solamente pa' que vivas tú",autor:"Rafael Escalona"}},t=Math.floor(12*Math.random());return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"content loading"},l.a.createElement("div",{className:"content-preload"},l.a.createElement("div",{className:"div-logo-preload"},l.a.createElement(c.a,null)),l.a.createElement("div",{className:"div-content-preload"},l.a.createElement("div",{className:"div-content-counter"},l.a.createElement("div",{className:"div-content-border"},l.a.createElement("svg",{id:"svg-preload",xmlns:"http://www.w3.org/2000/svg",width:"250",height:"250"},l.a.createElement("circle",{cx:"125",cy:"125",r:"121.837",fill:"#FFF",stroke:"#000","stroke-miterlimit":"10","stroke-width":"1"})))),l.a.createElement("div",{className:"div-content-number"},l.a.createElement("span",null,l.a.createElement(p.a,{end:100,duration:7,onEnd:function(){return window.location.href="/"}})),l.a.createElement("div",{className:"div-content-txt"},l.a.createElement("p",null,e[t].frase),l.a.createElement("span",null,e[t].autor))),l.a.createElement("div",{className:"div-content-flor"})))))}}]),t}(u.Component);t.default=f}},[["C5RK","5d41","9da1","ad9d"]]]);