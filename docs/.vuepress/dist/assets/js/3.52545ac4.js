(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{310:function(t,e,a){"use strict";e.a=[{name:"text-align",title:"Doleva",id:"two",value:"var setBannersTextLeft = true;",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.50.14_jg7wa3oge.png"},{name:"text-align",title:"Doprava",id:"one",value:"var setBannersTextRight = true;",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.50.35_6Ya-h90_j.png"}]},311:function(t,e,a){"use strict";e.a=[{name:"radio-background",title:"Černý",id:"cerne-pozadi",value:"var setDarkBanners = true;",model:"heroPanel",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.48.33_fCtoJS4x4.png"},{name:"radio-background",title:"Žádný",id:"zadne-pozadi",value:"var setTransparentBanners = true;",model:"heroPanel",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.49.33_aeYYD0KKR.png"}]},312:function(t,e,a){"use strict";e.a=[{name:"radio-animation",title:"Bez animací",id:"bez-animace",value:"var disabledAnimations = true;",model:"heroPanel",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/align-left_fJdc1AORd.svg"}]},313:function(t,e,a){"use strict"},335:function(t,e,a){},379:function(t,e,a){"use strict";a(335)},411:function(t,e,a){"use strict";a.r(e);var n=a(310),i=a(311),o=a(312),s=(a(313),{data:function(){return{options:n.a,backgrounds:i.a,animations:o.a,selectedOption:null,selectedBackground:null,selectedAnimation:null,selectedVariant:"",msg:"Administrace > VZHLED A OBSAH > Editor > HTML Kód > Záhlaví (před koncovým tagem HEAD)"}}}),r=(a(379),a(42)),l=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"formular-pro-nastaveni-vzhledu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formular-pro-nastaveni-vzhledu"}},[t._v("#")]),t._v(" Formulář pro nastavení vzhledu")]),t._v(" "),a("p",[t._v("Pomocí možností níže si můžete zvolit svůj vlastní vzhled. Stačí vždy zvolit jednu z variant a kód se vám automaticky vygeneruje níže v sekci "),a("a",{attrs:{href:"#vas-kod"}},[t._v("Váš kód")])]),t._v(" "),a("div",{staticClass:"selection-box text-align"},[a("div",{staticClass:"section-title"},[a("h3",[t._v("Zarovnání textu")]),t._v(" "),a("Tooltip",{attrs:{img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.51.56_llMUF8DC2T.png",content:"Po zkušenostech s předchozími šablonami jsme pro vás připravili nastavení zarovnání textu, a to do několika pozic. Výchozí je na střed, další možnosti jsou pak doleva a doprava.",msgType:"Upozornění",msg:"Toto nastavení se promítne na všech bannerech na hlavní straně"}})],1),t._v(" "),a("div",{staticClass:"options"},[t._l(t.options,(function(e){return a("Selection",{key:e.title,attrs:{name:e.name,id:e.id,value:e.value,forID:e.id,title:e.title,onChange:function(){return t.selectedOption=e},img:e.img}})})),t._v(" "),a("DefaultButton",{attrs:{title:"Na střed",name:"text-align",id:"defaultText",forID:"defaultText",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.43.09_RcTiI1XL8.png",onChange:function(){return t.selectedOption=null}}})],2)]),t._v(" "),a("div",{staticClass:"selection-box text-align"},[a("div",{staticClass:"section-title"},[a("h3",[t._v("Úprava podkladů")]),t._v(" "),a("Tooltip",{attrs:{img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/colourScheme_qajj3vjkF.png",content:"Nově jsme pro vás připravili tři barevná témata podkladů pro šablonu Nefrit - černé, bez podkladu a bílé (výchozí). Tímto nastavením můžete web přiblížit vzhledu vaší identity.",msgType:"Upozornění",msg:"Toto nastavení se promítne na všech bannerech na hlavní straně"}})],1),t._v(" "),a("div",{staticClass:"options"},[t._l(t.backgrounds,(function(e){return a("Selection",{key:e.title,attrs:{name:e.name,id:e.id,value:e.value,forID:e.id,title:e.title,onChange:function(){return t.selectedBackground=e},img:e.img}})})),t._v(" "),a("DefaultButton",{attrs:{title:"Bílý",name:"radio-background",id:"defaultBackground",forID:"defaultBackground",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/Screenshot_2021-04-08_at_10.43.09_RcTiI1XL8.png",onChange:function(){return t.selectedBackground=null}}})],2)]),t._v(" "),a("div",{staticClass:"selection-box text-align"},[a("div",{staticClass:"section-title"},[a("h3",[t._v("Vypnutí animací")]),t._v(" "),a("Tooltip",{attrs:{img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/ezgif.com-gif-maker__2__AGQGav4UK.gif",content:"Výchozí nastavení Nefritu je s animacemi textů. Tento pohyb dodává webu dynamiku a interakce s ním je tak zábavnější. Může se ale stát, že tyto animace budou uživatele rozptylovat, a proto jsme přidali možnost je vypnout.",msgType:"Upozornění",msg:"Toto nastavení se promítne na všech bannerech na hlavní straně"}})],1),t._v(" "),a("div",{staticClass:"options"},[t._l(t.animations,(function(e){return a("Selection",{key:e.title,attrs:{name:e.name,id:e.id,value:e.value,forID:e.id,title:e.title,onChange:function(){return t.selectedAnimation=e},img:e.img}})})),t._v(" "),a("DefaultButton",{attrs:{title:"S animacemi",name:"radio-animation",id:"defaultAnimation",forID:"defaultAnimation",img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/animation_n-_MzCPAZ.svg",onChange:function(){return t.selectedAnimation=null}}})],2)]),t._v(" "),a("div",{staticClass:"selection-box text-align"},[a("div",{staticClass:"section-title"},[a("h3",[t._v("Počet viditelných variant")]),t._v(" "),a("Tooltip",{attrs:{img:"https://ik.imagekit.io/alexborecky/shoptetak/Docs/eas/variants_UnPfGSbwy.png",content:"Shoptet umožňuje zobrazovat varianty produktů ve výpisu kategorií. Toto nastavení jsme obohatili o neomezené množství variant, které můžete na svém e-shopu zobrazovat.",msgType:"Upozornění",msg:"Velké množství zobrazených variant bude působit neesteticky a z toho důvodu doporučujeme zobrazovat max. 6 variant"}})],1),t._v(" "),a("div",{staticClass:"options"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.selectedVariant,expression:"selectedVariant"}],attrs:{type:"number",min:"1",placeholder:"Zadejte pouze čísla",onChange:function(){return t.selectedVariant=t.variant}},domProps:{value:t.selectedVariant},on:{input:function(e){e.target.composing||(t.selectedVariant=e.target.value)}}})])]),t._v(" "),a("h2",{attrs:{id:"vas-kod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vas-kod"}},[t._v("#")]),t._v(" Váš kód")]),t._v(" "),a("pre",[t._v("    "),a("code",[t._v("\n    "),a("span",{staticClass:"punct"},[t._v("<")]),a("span",{staticClass:"tag"},[t._v("script")]),a("span",{staticClass:"punct"},[t._v(">")]),t._v("\n    "),t.selectedOption?a("span",[t._v("\n        "),a("br"),a("span",{staticClass:"reg"},[t._v(t._s(t.selectedOption&&t.selectedOption.value))]),t._v("\n    ")]):t._e(),t._v("\n    "),t.selectedBackground?a("span",[t._v("\n        "),a("br"),a("span",{staticClass:"reg"},[t._v(t._s(t.selectedBackground&&t.selectedBackground.value))]),t._v("\n    ")]):t._e(),t._v("\n    "),t.selectedAnimation?a("span",[t._v("\n        "),a("br"),a("span",{staticClass:"reg"},[t._v(t._s(t.selectedAnimation&&t.selectedAnimation.value))]),t._v("\n    ")]):t._e(),t._v("\n    "),""!==t.selectedVariant?a("span",[t._v("\n        "),a("br"),a("span",{staticClass:"reg"},[t._v("var productsVariantsCount = "+t._s(t.selectedVariant)+";")]),t._v("\n    ")]):t._e(),t._v("\n        "),a("br"),a("span",{staticClass:"punct"},[t._v("</")]),a("span",{staticClass:"tag"},[t._v("script")]),a("span",{staticClass:"punct"},[t._v(">")]),t._v("\n    ")]),t._v("\n")])])}),[],!1,null,"16a13268",null);e.default=l.exports}}]);