(function(e){function a(a){for(var n,i,s=a[0],l=a[1],c=a[2],d=0,u=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(a);while(u.length)u.shift()();return o.push.apply(o,c||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,i=1;i<t.length;i++){var s=t[i];0!==r[s]&&(n=!1)}n&&(o.splice(a--,1),e=l(l.s=t[0]))}return e}var n={},i={app:0},r={app:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-01b6bcc8":"537f07b1","chunk-0f934e30":"4e690ced"}[e]+".js"}function l(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.e=function(e){var a=[],t={"chunk-01b6bcc8":1,"chunk-0f934e30":1};i[e]?a.push(i[e]):0!==i[e]&&t[e]&&a.push(i[e]=new Promise((function(a,t){for(var n="css/"+({}[e]||e)+"."+{"chunk-01b6bcc8":"8f3a14dd","chunk-0f934e30":"7a15e596"}[e]+".css",r=l.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===n||d===r))return a()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],d=c.getAttribute("data-href");if(d===n||d===r)return a()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=a,p.onerror=function(a){var n=a&&a.target&&a.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete i[e],p.parentNode.removeChild(p),t(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){i[e]=0})));var n=r[e];if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(a,t){n=r[e]=[a,t]}));a.push(n[2]=o);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=s(e);var u=new Error;c=function(a){d.onerror=d.onload=null,clearTimeout(p);var t=r[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,t[1](u)}r[e]=void 0}};var p=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=n,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)l.d(t,n,function(a){return e[a]}.bind(null,n));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=a,c=c.slice();for(var u=0;u<c.length;u++)a(c[u]);var p=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("d3b7"),t("3ca3"),t("ddb0");var n=t("2b0e"),i=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app",attrs:{id:"app"}},[e._m(0),t("div",{staticClass:"contenedor-principal"},[t("section",{staticClass:"seccion-principal"},[t("Inicio")],1)])])},r=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center justify-content-between"},[n("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-star"},[n("img",{staticClass:"header__logo me-sm-5",attrs:{src:t("9eb5")}})])])])])}],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",[e._m(0),e._m(1),e._m(2),e._m(3),e._m(4),e._m(5),e._m(6),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[e._m(7),t("Creditos")],1),t("Footer")],1)},s=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"banner-principal mb-5"},[t("div",{staticClass:"container tarjeta p-4 p-sm-5"},[t("div",{staticClass:"row justify-content-around align-items-center"},[t("div",{staticClass:"col-lg-7 col-xxl-6 banner-principal__info"},[t("div",{staticClass:"banner-principal__programa"},[t("div",{staticClass:"h1 mb-0"},[e._v("Acercamiento a la metodología STEM: que es e ideas para implementarla")])]),t("div",{staticClass:"h2"},[e._v("Información del programa")]),t("div",{staticClass:"banner-principal__datos"},[t("ul",[t("li",{staticClass:"mb-1 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Nombre del programa: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("Acercamiento a la metodología STEM: que es e ideas para implementarla")])]),t("li",{staticClass:"mb-1 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Código: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("41220017")])]),t("li",{staticClass:"mb-1 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Total Horas: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("48 Horas")])]),t("li",{staticClass:"mb-1 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Duración en semanas: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("4 Semanas")])]),t("li",{staticClass:"mb-1 banner-principal__datos__item"},[t("p",{staticClass:"h6 mb-0 me-3 banner-principal__datos__item__titulo"},[e._v("Modalidad: ")]),t("p",{staticClass:"banner-principal__datos__item__texto"},[e._v("virtual")])])])])]),t("div",{staticClass:"d-none d-lg-block col-lg-5"},[t("div",{staticClass:"video"},[t("iframe",{attrs:{"data-v-1f9e4816":"",width:"560",height:"315",src:"https://www.youtube.com/embed/gCz5LJQxINY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})])])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("1. Presentación")])]),t("p",[e._v("Apreciado aprendiz, bienvenido a este curso diseñado desde la reflexión y la transformación de las formas de enseñar y aprender basados en la ciencia, la tecnología, la ingeniería y las matemáticas.")]),t("p",[e._v("Los diferentes sectores productivos están cambiando las dinámicas de sus requerimientos. La entrada de nuevos actores para la inversión y la innovación demanda un personal cualificado de modo distinto, específicamente, requiere que las personas hayan apropiado una serie de conocimientos y habilidades transversales propios del Siglo XXI, entre ellos, los fundamentos de las ciencias exactas y su relación con los procesos de ingeniería, innovación, tecnologías emergentes, megatendencias, solución de problemas, comunicaciones complejas, adaptabilidad a nuevos contextos y un conocimiento adaptable sobre la incidencia del desarrollo tecnológico en los cambios de prospectiva de cada sector.")]),t("p",[e._v("En este curso se busca continuar el proceso que empezó como una inquietud sobre la necesidad de cambios en la educación, dando más información y perspectivas acerca de la implementación de un modelo educativo basado en STEM. ")]),t("p",[e._v("En este sentido, en el presente curso se ha desarrollado contenido temático y se han seleccionado recursos educativos para que desde un aprendizaje individual y colaborativo apropie conocimientos, habilidades y actitudes que le permitan: "),t("ul",{staticClass:"lista-ul--color p-2 mt-2"},[t("li",[t("i",{staticClass:"fas fa-check"}),t("span",[e._v("Identificar los elementos básicos del modelo STEM según su fundamentación.")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("span",[e._v("Diferenciar los tipos de actividades para el desarrollo de la formación acorde con la metodología STEM.")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("span",[e._v("Aplicar los principios de implementación de un modelo STEM según las necesidades propias de un entorno específico.")])]),t("li",[t("i",{staticClass:"fas fa-check"}),t("span",[e._v("Evaluar la propuesta realizada según ejemplos de experiencias de implementación del modelo STEM. ")])])])]),t("p",[e._v("El curso está estructurado a partir de unos componentes de formación en los que se desarrolla el contenido temático, las actividades y los recursos de aprendizaje complementarios para que siga cultivando su curiosidad y conocimiento. ")]),t("p",[e._v("Su experiencia de aprendizaje está ofertada a partir de una modalidad virtual definida como un entorno digital, en el que se encontrará acompañado por otros compañeros y por el instructor para construir una comunidad de aprendizaje, por ello, recuerde organizar un horario y mantener un estilo de estudio que le permita iniciar y finalizar el curso con éxito. ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("2. Justificación del programa")])]),t("p",[e._v("Los diferentes sectores productivos están cambiando las dinámicas de sus requerimientos. La entrada de nuevos actores para la inversión y la innovación demanda un personal cualificado de modo distinto, específicamente, requiere que las personas hayan apropiado una serie de conocimientos y habilidades transversales propios del Siglo XXI, entre ellos, los fundamentos de las ciencias exactas y su relación con los procesos de ingeniería, innovación, tecnologías emergentes, megatendencias, solución de problemas, comunicaciones complejas, adaptabilidad a nuevos contextos y un conocimiento adaptable sobre la incidencia del desarrollo tecnológico en los cambios de prospectiva de cada sector.")]),t("p",[e._v("En Colombia la Cámara de Comercio de Bogotá solicita al SENA atender el déficit de la oferta de programas de formación pertinentes para asumir los retos que llegarán al sector y, se propone como una de sus metas que exista por lo menos, un programa de formación transformado de acuerdo con la inclusión de competencias necesarias para el desarrollo tecnológico.")]),t("p",[e._v("Los puestos de trabajo en la actualidad demandarán una serie de perfiles ocupacionales para los cuales la educación actual no está completamente preparada; sin embargo, existe claridad sobre la necesidad de incluir una variedad de competencias que preparen al recurso humano para enfrentar estos desafíos.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("3. Competencias a desarrollar")])]),t("p",[t("strong",[e._v("240201064. ")]),e._v("Orientar investigación formativa según referentes técnicos.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("4. Perfil de ingreso")])]),t("p",[e._v("Profesionales relacionados con el área educativa.")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("5. Perfil de egreso")])]),t("ul",{staticClass:"lista-ul--color mt-2"},[t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("Preparados para la cualificación de aprendices/estudiantes en habilidades propias del Siglo XXI.")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("Que comprendan la interrelación del conocimiento y que puedan ver más allá de la compartimentalización de este.")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("Capaces de reconocer los cambios en el sector educativo, derivados de la inserción de las nuevas tecnologías y de las tecnologías emergentes en el sector productivo.")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("Capaces de formular proyectos educativos acordes a las necesidades de formación del nuevo recurso humano.")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("Que comprendan la metodología STEM y puedan iniciar el desarrollo de propuestas formativas basadas en ella.")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5"},[t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("6. Estrategia metodológica")])]),t("p",[e._v("Centrada en la construcción del aprendizaje autónomo y colaborativo para garantizar la calidad de la formación por competencias y el uso de técnicas didácticas activas, que estimulan el pensamiento para la resolución de problemas simulados y reales; actividades interactivas que permitan el desarrollo del pensamiento y la solución de problemas en el marco del objeto de aprendizaje, la educación STEM.")]),t("p",[e._v("Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje, que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento: ")]),t("ul",{staticClass:"lista-ul--color p-3"},[t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("El instructor - tutor")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("El entorno")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("Las TIC")])]),t("li",[t("i",{staticClass:"fas fa-circle"}),t("span",[e._v("El trabajo colaborativo")])])])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"titulo__template--a mb-4"},[t("span",{staticClass:"h4"},[e._v("Créditos")])])}],l={name:"Inicio",data:function(){return{}}},c=l,d=t("2877"),u=Object(d["a"])(c,o,s,!1,null,null,null),p=u.exports,m={name:"App",components:{Inicio:p}},f=m,v=(t("cf25"),Object(d["a"])(f,i,r,!1,null,null,null)),_=v.exports,b=(t("becf"),t("7b17"),t("ab8b"),t("a3a0"),{creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"María Cristina Hurtado Zúñiga",cargo:"Experta temática",centro:"Centro de Diseño Tecnológico Industrial"},{nombre:"Cristian Metaute Medina",cargo:"Diseñador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica del Sena",regional:"Regional Distrito Capital"},{nombre:"Julia Isabel Roberto",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro para la Industria de la Comunicación Gráfica del Sena",regional:"Regional Distrito Capital"},{nombre:"Carolina Coca Salazar",cargo:"Revisión metodológica y pedagógica",centro:"Centro de Diseño y Metrología",regional:"Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica del Sena",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Juan Carlos Tapias Rueda",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:["Zuleidy Maria Ruiz Torres","Wilson Andrés Arenales Caceres","Gilberto Junior Rodriguez Rodriguez","Daniela Muñoz Bedoya","Andrés Felipe Herrera"],cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Jhana Johanna Bustillo Ardila",cargo:"Revisión de contenido",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"}]}});n["a"].prototype.$config=b;var g=t("9224");n["a"].prototype.$package=g,n["a"].component("Creditos",(function(){return t.e("chunk-0f934e30").then(t.bind(null,"dba0"))})),n["a"].component("Footer",(function(){return t.e("chunk-01b6bcc8").then(t.bind(null,"e9c6"))})),n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(_)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-info-2021","version":"1.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.2.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,t){e.exports=t.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,t){},cf25:function(e,a,t){"use strict";t("fea6")},fea6:function(e,a,t){}});
//# sourceMappingURL=app.84543bb7.js.map