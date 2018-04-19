webpackJsonp([0],{"6NQD":function(s,a,t){t("qazd");var n=t("VU/8")(t("seAj"),t("DrGa"),null,null);s.exports=n.exports},DrGa:function(s,a){s.exports={render:function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("Usage")]),s._v(" "),t("h2",[s._v("Usage")]),s._v(" "),t("h3",[s._v("Global Registration")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),t("h3",[s._v("Local Registration")]),s._v(" "),s._m(3),s._v(" "),s._m(4),s._v(" "),t("h3",[s._v("CDN Registration")]),s._v(" "),s._m(5),s._v(" "),t("h2",[s._v("Q&A")]),s._v(" "),s._m(6),s._v(" "),t("h3",[s._v("Wrong Way")]),s._v(" "),s._m(7),s._v(" "),t("h3",[s._v("Right Way")]),s._v(" "),s._m(8),s._v(" "),t("h2",[s._v("Hello world")]),s._v(" "),s._m(9),s._v(" "),t("doc-preview",[[t("sm-viewer",{staticClass:"viewer",attrs:{animation:!0,camera:s.camera},on:{ready:s.ready}})]],2)],1)},staticRenderFns:[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("Regist all components of "),t("em",[s._v("vue-supermap-cesium")]),s._v(" at once.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" SuperMapCesium "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue-supermap-cesium'")]),s._v("\n\nVue.use(SuperMapCesium, {\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// cesiumPath is the path of the Cesium library, such as")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// cesiumPath: './statics/Cesium'")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// use online reference for http")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// cesiumPath: 'http://support.supermap.com.cn:8090/webgl/Build'")]),s._v("\n  "),t("span",{staticClass:"hljs-comment"},[s._v("// use online reference for https")]),s._v("\n  cesiumPath: "),t("span",{staticClass:"hljs-string"},[s._v("'https://zouyaoji.top/vue-supermap-cesium'")]),s._v("\n})\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".content")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#f9f9f9")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("top")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("bottom")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("right")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("p",[s._v("A locally registered "),t("code",[s._v("SmViewer")]),s._v(" component "),t("strong",[s._v("must")]),s._v(" declare the "),t("code",[s._v("cesiumPath")]),s._v(" attribute.\nAll components are stored in the "),t("code",[s._v("vue-supermap-cesium / components")]),s._v(" folder.\nAs ES module can't be run directly in most browsers, if importing component causes some runtime errors, please check the webpack's loader configuration whethor the "),t("code",[s._v("include")]),s._v(" and "),t("code",[s._v("exclude")]),s._v(" options hits this library.")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"content"')]),s._v(">")]),s._v("\n    "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("cesiumPath")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"YOUR_CESIUM_LIB_PATH"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" SmViewer "),t("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'vue-supermap-cesium/components/cesium/viewer.vue'")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": {\n    SmViewer\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".content")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("background-color")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("#f9f9f9")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("position")]),s._v(": absolute;\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("top")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("bottom")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("left")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("right")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[s._v("To be added")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ul",[t("li",[t("code",[s._v("SmViewer")]),s._v(" component is an empty block level element. If it doesn't declare its height, the "),t("code",[s._v("viewer")]),s._v(" will be invisible.")]),s._v(" "),t("li",[s._v("If you need to update your model, just do it in the callback of the global component event "),t("code",[s._v("ready")]),s._v(".")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":animation")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"animation"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":camera")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"camera"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("camera")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v(": {\n          "),t("span",{staticClass:"hljs-attr"},[s._v("longitude")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("104.06")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("latitude")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("30.67")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("2000")]),s._v("\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("heading")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("360")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("pitch")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("-90")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("roll")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("animation")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  },\n  mounted () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".camera.position.longitude = "),t("span",{staticClass:"hljs-number"},[s._v("116.46")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".camera.position.latitude = "),t("span",{staticClass:"hljs-number"},[s._v("39.92")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".camera.position.height = "),t("span",{staticClass:"hljs-number"},[s._v("500")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".animation = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":animation")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"animation"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":camera")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"camera"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("@ready")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"ready"')]),s._v(">")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("baidu-map")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("camera")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v(": {\n          "),t("span",{staticClass:"hljs-attr"},[s._v("longitude")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("104.06")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("latitude")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("30.67")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("2000")]),s._v("\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("heading")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("360")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("pitch")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("-90")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("roll")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n      },\n      "),t("span",{staticClass:"hljs-attr"},[s._v("animation")]),s._v(": "),t("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n    }\n  },\n  "),t("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    ready (param) {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".camera.position.longitude = "),t("span",{staticClass:"hljs-number"},[s._v("116.46")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".camera.position.latitude = "),t("span",{staticClass:"hljs-number"},[s._v("39.92")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".camera.position.height = "),t("span",{staticClass:"hljs-number"},[s._v("500")]),s._v("\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".animation = "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",[t("code",{staticClass:"language-html"},[t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v("class")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"viewer"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":animation")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"true"')]),s._v(" "),t("span",{staticClass:"hljs-attr"},[s._v(":camera")]),s._v("="),t("span",{staticClass:"hljs-string"},[s._v('"camera"')]),s._v(">")]),s._v("\n  "),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("sm-viewer")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),t("span",{staticClass:"javascript"},[s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data () {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),t("span",{staticClass:"hljs-attr"},[s._v("camera")]),s._v(": {\n        "),t("span",{staticClass:"hljs-attr"},[s._v("position")]),s._v(": {\n          "),t("span",{staticClass:"hljs-attr"},[s._v("longitude")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("104.06")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("latitude")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("30.67")]),s._v(",\n          "),t("span",{staticClass:"hljs-attr"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v("\n        },\n        "),t("span",{staticClass:"hljs-attr"},[s._v("heading")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("360")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("pitch")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("-90")]),s._v(",\n        "),t("span",{staticClass:"hljs-attr"},[s._v("roll")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n      }\n    }\n  }\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n\n"),t("span",{staticClass:"hljs-tag"},[s._v("<"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),t("span",{staticClass:"css"},[s._v("\n"),t("span",{staticClass:"hljs-selector-class"},[s._v(".viewer")]),s._v(" {\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("width")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("100%")]),s._v(";\n  "),t("span",{staticClass:"hljs-attribute"},[s._v("height")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("400px")]),s._v(";\n}\n")]),t("span",{staticClass:"hljs-tag"},[s._v("</"),t("span",{staticClass:"hljs-name"},[s._v("style")]),s._v(">")]),s._v("\n")])])}]}},fmM7:function(s,a,t){a=s.exports=t("FZ+f")(),a.push([s.i,".viewer{width:100%;height:400px}",""])},ncRs:function(s,a,t){s.exports=t("6NQD")},qazd:function(s,a,t){var n=t("fmM7");"string"==typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);t("rjj0")("d4de67ba",n,!0)},seAj:function(s,a,t){var n,l,e;!function(t,v){l=[s,a],n=v,void 0!==(e="function"==typeof n?n.apply(a,l):n)&&(s.exports=e)}(0,function(s,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{camera:{position:{longitude:104.06,latitude:30.67,height:1e5},heading:360,pitch:-90,roll:0}}},methods:{ready:function(s){var a=s.viewer.imageryLayers,t=new Cesium.TiandituImageryProvider({mapStyle:Cesium.TiandituMapsStyle.IMG_C});a.addImageryProvider(t);var n=new Cesium.TiandituImageryProvider({mapStyle:Cesium.TiandituMapsStyle.CIA_C});a.addImageryProvider(n),s.viewer.entities.add({id:"welcome to ChengDu",position:s.Cesium.Cartesian3.fromDegrees(104.06,30.67,100),billboard:new s.Cesium.BillboardGraphics({image:"https://zouyaoji.top/vue-supermap-cesium/favicon.png",scale:.1}),label:new s.Cesium.LabelGraphics({text:"Hello Word",font:"24px sans-serif",horizontalOrigin:1,outlineColor:new Cesium.Color(0,0,0,1),outlineWidth:2,pixelOffset:new Cesium.Cartesian2(17,-5),style:Cesium.LabelStyle.FILL})})}}},s.exports=a.default})}});