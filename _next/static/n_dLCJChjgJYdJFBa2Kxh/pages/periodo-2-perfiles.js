(window.webpackJsonp=window.webpackJsonp||[]).push([["daec"],{"6lbL":function(e,t,a){"use strict";var n=a("0iUn"),r=a("sLSF"),s=a("MI3g"),i=a("a7VT"),l=a("Tit0"),c=a("q1tI"),o=a.n(c),p=a("YFqc"),d=a.n(p),u=function(e){function t(){return Object(n.default)(this,t),Object(s.default)(this,Object(i.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"dot".concat(this.props.keyid),className:"dots nav-dots"},o.a.createElement(d.a,{href:"#".concat(this.props.idtfdr)},o.a.createElement("a",null,"O")))}}]),t}(c.Component);t.a=u},X6ue:function(e,t,a){"use strict";var n=a("pLtp"),r=a.n(n),s=a("0iUn"),i=a("sLSF"),l=a("MI3g"),c=a("a7VT"),o=a("Tit0"),p=a("q1tI"),d=a.n(p),u=a("YFqc"),f=a.n(u),m=function(e){function t(){return Object(s.default)(this,t),Object(l.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e="";return console.log(this.props.idtfdr),""!==this.props.imagen&&(e=d.a.createElement("img",{className:"img-perfil",src:this.props.imagen,alt:"Imagen perfil"})),d.a.createElement("div",{id:"perfil".concat(this.props.keyid),className:"perfil perfil-personaje"},d.a.createElement(f.a,{href:"/"},d.a.createElement("a",{id:this.props.idtfdr})),d.a.createElement("div",{className:"header-despliegue-perfil"},e,d.a.createElement("div",{className:"content-header-despPerfil"},d.a.createElement("h2",null,this.props.title),d.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.descripcion}}),d.a.createElement("p",{dangerouslySetInnerHTML:{__html:this.props.parrafoUno}}))),d.a.createElement("div",{className:"content-despliegue-perfil"},d.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.props.body}})),d.a.createElement("div",{className:"separador"}))}}]),t}(p.Component),h=a("6lbL"),v=function(e){function t(){return Object(s.default)(this,t),Object(l.default)(this,Object(c.default)(t).apply(this,arguments))}return Object(o.default)(t,e),Object(i.default)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"navegacion-dots"},r()(this.props.perfiles.nodes).map(function(t){return d.a.createElement(h.a,{key:t,keyid:t,idtfdr:e.props.perfiles.nodes[t].title_share})})),r()(this.props.perfiles.nodes).map(function(t){return d.a.createElement(m,{key:t,keyid:t,idtfdr:e.props.perfiles.nodes[t].title_share,title:e.props.perfiles.nodes[t].title,imagen:e.props.perfiles.nodes[t].imagen,descripcion:e.props.perfiles.nodes[t].lead,parrafoUno:e.props.perfiles.nodes[t].primer_parrafo,body:e.props.perfiles.nodes[t].body_restante})}))}}]),t}(p.Component);t.a=v},njPy:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/periodo-2-perfiles",function(){var e=a("oblF");return{page:e.default||e}}])},oblF:function(e,t,a){"use strict";a.r(t);var n=a("ln6h"),r=a.n(n),s=a("O40h"),i=a("0iUn"),l=a("sLSF"),c=a("MI3g"),o=a("a7VT"),p=a("Tit0"),d=a("q1tI"),u=a.n(d),f=a("zgjP"),m=a.n(f),h=a("X6ue"),v=a("syZb"),b=(a("p62I"),a("uVMn"),a("4iMT"),function(e){function t(){return Object(i.default)(this,t),Object(c.default)(this,Object(o.default)(t).apply(this,arguments))}return Object(p.default)(t,e),Object(l.default)(t,[{key:"componentWillMount",value:function(){this.setState({data:this.props.data})}},{key:"render",value:function(){var e=u.a.createElement(h.a,{perfiles:this.state.data});return null===this.state.data&&(e="Servicio no disponible - Recarga la página para volver a intentarlo"),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{id:"perfiles-p2",className:"content txt-content"},u.a.createElement(v.a,{menu:"oculto",navperidodos:"visible",link:"periodos",seccion:"perfiles"}),u.a.createElement("h1",{className:"title-seccion-generico"},"Perfiles"),u.a.createElement("div",{className:"header-seccion"},u.a.createElement("span",null,"1940 - 1975")),u.a.createElement("section",{id:"seccion-periodo2perfiles",className:"seccion-content"},e)))}}],[{key:"getInitialProps",value:function(){var e=Object(s.default)(r.a.mark(function e(){var t,a;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("https://especiales.caracoltv.com/loscaminosdelvallenato/services/periodo-ii/perfiles.json");case 3:return t=e.sent,e.next=6,t.json();case 6:return a=e.sent,e.abrupt("return",{data:a});case 10:return e.prev=10,e.t0=e.catch(0),console.log("Error al consumir el servicio"),null,e.abrupt("return",{data:null});case 15:case"end":return e.stop()}},e,null,[[0,10]])}));return function(){return e.apply(this,arguments)}}()}]),t}(d.Component));t.default=b}},[["njPy","5d41","9da1","ad9d"]]]);