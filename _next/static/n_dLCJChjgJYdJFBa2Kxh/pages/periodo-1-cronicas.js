(window.webpackJsonp=window.webpackJsonp||[]).push([["aabb"],{"0OBr":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("MgzW"),i=n.n(c);t.a=(({url:e,allowFullScreen:t,position:n,display:c,height:l,width:o,overflow:s,styles:d,onLoad:u,onMouseOver:p,onMouseOut:m,scrolling:f,id:h,frameBorder:v,ariaHidden:b,sandbox:g,allow:E,className:y,title:O,ariaLabel:j,ariaLabelledby:N,name:w,target:k})=>{const I=Object(a.createRef)(),_=i()({ref:I,src:e,target:k||"_parent",allowFullScreen:t||!1,style:{position:n||"absolute",display:c||"block",height:l||"100%",width:o||"100%",overflow:s||"hidden"},scrolling:f||"no",frameBorder:v||0,height:l||"100%",sandbox:g||null,styles:d||null,name:w||null,className:y||null,title:O||null,allow:E||null,id:h||null,"aria-labelledby":N||null,"aria-hidden":b||null,"aria-label":j||null,width:o||"100%",onLoad:u||null,onMouseOver:p||null,onMouseOut:m||null});let F=Object.create(null);for(let a of Object.keys(_))null!=_[a]&&(F[a]=_[a]);return r.a.createElement("iframe",Object.assign({},F))})},AQjc:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/periodo-1-cronicas",function(){var e=n("CNAR");return{page:e.default||e}}])},CNAR:function(e,t,n){"use strict";n.r(t);var a=n("ln6h"),r=n.n(a),c=n("O40h"),i=n("0iUn"),l=n("sLSF"),o=n("MI3g"),s=n("a7VT"),d=n("Tit0"),u=n("q1tI"),p=n.n(u),m=n("zgjP"),f=n.n(m),h=n("syZb"),v=n("Qm6A"),b=function(e){function t(){return Object(i.default)(this,t),Object(o.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(d.default)(t,e),Object(l.default)(t,[{key:"componentWillMount",value:function(){this.setState({data:this.props.data})}},{key:"render",value:function(){var e=p.a.createElement(v.a,{cronicas:this.state.data,idcontent:"seccion-periodo1cronicas"});return null===this.state.data&&(e="Servicio no disponible - Recarga la página para volver a intentarlo"),p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{id:"cronicas-p1",className:"content txt-content"},p.a.createElement(h.a,{menu:"oculto",navperidodos:"visible",link:"periodos",seccion:"cronicas"}),p.a.createElement("h1",{className:"title-seccion-generico"},"Crónicas"),p.a.createElement("div",{className:"header-seccion"},p.a.createElement("span",null,"Finales del siglo XIX - 1940")),e))}}],[{key:"getInitialProps",value:function(){var e=Object(c.default)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f()("https://especiales.caracoltv.com/loscaminosdelvallenato/services/periodo-i/cronicas.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",{data:n});case 10:return e.prev=10,e.t0=e.catch(0),console.log("Error al consumir el servicio"),null,e.abrupt("return",{data:null});case 15:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}()}]),t}(u.Component);t.default=b},N6Ig:function(e,t,n){"use strict";var a=n("0iUn"),r=n("sLSF"),c=n("MI3g"),i=n("a7VT"),l=n("Tit0"),o=n("q1tI"),s=n.n(o),d=n("YFqc"),u=n.n(d),p=function(e){function t(){return Object(a.default)(this,t),Object(c.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return s.a.createElement("div",{id:"dot".concat(this.props.keyid),className:"dots nav-dots"},s.a.createElement(u.a,{href:"#".concat(this.props.idtfdr)},s.a.createElement("a",null,"O")))}}]),t}(o.Component);t.a=p},Qm6A:function(e,t,n){"use strict";var a=n("pLtp"),r=n.n(a),c=n("0iUn"),i=n("sLSF"),l=n("MI3g"),o=n("a7VT"),s=n("Tit0"),d=n("q1tI"),u=n.n(d),p=n("0OBr"),m=n("YFqc"),f=n.n(m),h=function(e){function t(){return Object(c.default)(this,t),Object(l.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e="",t="ctnt-sin-media";return""!==this.props.imagen&&(e=u.a.createElement("img",{className:"img-perfil",src:this.props.imagen,alt:"Imagen perfil"}),t="ctnt-con-media"),""!==this.props.video&&(e=u.a.createElement("div",{className:"content-video-despliegue content-video-cronicas"},u.a.createElement(p.a,{url:this.props.video,id:"video-cronica".concat(this.props.keyid),className:"video",display:"initial",position:"relative",allowFullScreen:!0})),t="ctnt-con-media"),u.a.createElement("div",{id:"cronica".concat(this.props.keyid),className:"cronica"},u.a.createElement(f.a,{href:"/"},u.a.createElement("a",{id:this.props.idtfdr})),u.a.createElement("div",{className:"title-cronica"},u.a.createElement("h2",null,this.props.title)),u.a.createElement("div",{className:"content-ppal-cronica ".concat(t)},u.a.createElement("div",{className:"content-media"},e),u.a.createElement("div",{className:"content-descripcion"},u.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.descripcion}}))),u.a.createElement("div",{className:"content-despliegue content-despliegue-cronica"},u.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.body}})),u.a.createElement("div",{className:"separador"}))}}]),t}(d.Component),v=n("N6Ig"),b=function(e){function t(){return Object(c.default)(this,t),Object(l.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(s.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.cronicas),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"navegacion-dots"},r()(this.props.cronicas.nodes).map(function(t){return u.a.createElement(v.a,{key:t,keyid:t,idtfdr:e.props.cronicas.nodes[t].title_share})})),u.a.createElement("section",{id:this.props.idcontent,className:"seccion-content"},r()(this.props.cronicas.nodes).map(function(t){return u.a.createElement(h,{key:t,keyid:t,idtfdr:e.props.cronicas.nodes[t].title_share,title:e.props.cronicas.nodes[t].title,imagen:e.props.cronicas.nodes[t].imagen,descripcion:e.props.cronicas.nodes[t].lead,body:e.props.cronicas.nodes[t].body,video:e.props.cronicas.nodes[t].video})})))}}]),t}(d.Component);t.a=b}},[["AQjc","5d41","9da1","ad9d"]]]);