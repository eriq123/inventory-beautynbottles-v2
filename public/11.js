(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{90:function(t,e,a){"use strict";a.r(e);var o={components:{"app-flow-datatable":function(){return a.e(12).then(a.bind(null,100))},"app-flow-dialog":function(){return a.e(13).then(a.bind(null,101))},"app-raw-menu":function(){return a.e(0).then(a.bind(null,94))},"app-raw-converted-units":function(){return a.e(1).then(a.bind(null,95))}},data:function(){return{toggle:{state:!0,loading:!1,disabled:!1},dialog:{show:!1,toggle:!0,title:null,quantity:null,id:0,action:null,loading:!1,base_name:null},stocks:0,updatedItem:{},convert:{collection:[],name:null,value:null}}},methods:{datatableclick:function(t){var e=this;this.toggle.state?this.dialog.title=t.item.name:(this.dialog.base_name=t.item.base.name,this.dialog.title="".concat(t.item.category.name," - ").concat(t.item.name)),this.dialog.action=t.action,this.dialog.quantity=null,this.stocks=t.item.quantity,this.dialog.id=t.item.id,this.dialog.toggle=this.dialog.show=!0,this.dialog.loading=!0,this.toggle.state||axios.post("/units/convert/view",{id:t.item.base_id}).then((function(t){e.convert.collection=t.data.convert,t.data.convert.length>0?(e.convert.name=t.data.convert[0].name,e.convert.value=t.data.convert[0].value):e.$store.commit("showSnackbar",{color:!1,text:"Sub-unit is required. Please add one then try again."}),e.dialog.loading=!1})).catch((function(t){t.response?(console.log(t.response),t.response.data.error_message?e.$store.commit("showSnackbar",{color:!1,text:t.response.data.error_message}):e.$store.commit("errorSnackbar")):console.log(t)}))},selectedmenu:function(t){this.convert.name=t.name,this.convert.value=t.value},saveproductraw:function(t){var e=this,a={id:t.id,status:t.status,action:t.action,type:this.switchLabel};this.toggle.state?a.quantity=this.dialog.quantity:a.quantity=this.dialog.quantity*this.convert.value,axios.post("/inventory/flow/store",a).then((function(t){console.log(t.data),e.toggle.state||(e.updatedItem=t.data.raw),e.dialog.show=!1,e.$store.commit("showSnackbar",{color:!0,text:"Record has been updated!"})})).catch((function(t){t.response&&(console.log(t.response),t.response.data.error_message?e.$store.commit("showSnackbar",{color:!1,text:t.response.data.error_message}):e.$store.commit("errorSnackbar"))}))},toggleChange:function(t){this.toggle.disabled=this.toggle.loading=t}},computed:{switchLabel:function(){return 1==this.toggle.state?"Products":"Raw Items"}}},n=a(0),l=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-switch",{staticClass:"ml-3",attrs:{inset:"",ripple:"",disabled:t.toggle.disabled,loading:t.toggle.disabled,label:"Filtered by: "+t.switchLabel},model:{value:t.toggle.state,callback:function(e){t.$set(t.toggle,"state",e)},expression:"toggle.state"}}),t._v(" "),a("app-flow-datatable",{attrs:{toggleState:t.toggle.state,updatedItem:t.updatedItem},on:{toggleChange:t.toggleChange,datatableclick:t.datatableclick}}),t._v(" "),a("app-flow-dialog",{attrs:{title:t.dialog.title,action:t.dialog.action,dialogShow:t.dialog.show,switchState:t.dialog.toggle,id:t.dialog.id,toggleState:t.toggle.state},on:{dialogshowchange:function(e){t.dialog.show=!1},togglechangestate:function(e){t.dialog.toggle=!t.dialog.toggle},saveproductraw:t.saveproductraw},scopedSlots:t._u([{key:"quantity",fn:function(){return[t.toggle.state?a("v-col",{attrs:{sm:"8"}},[a("v-text-field",{attrs:{autofocus:"",type:"number",label:"Quantity"},model:{value:t.dialog.quantity,callback:function(e){t.$set(t.dialog,"quantity",e)},expression:"dialog.quantity"}})],1):t._e(),t._v(" "),t.toggle.state?t._e():a("v-row",[a("v-col",{attrs:{cols:"6"}},[a("v-text-field",{attrs:{type:"number",label:"Quantity",loading:t.dialog.loading},scopedSlots:t._u([{key:"append-outer",fn:function(){return[a("app-raw-menu",{attrs:{menu:t.convert.collection,selected:t.convert.name},on:{selectedmenu:t.selectedmenu}})]},proxy:!0}],null,!1,726169854),model:{value:t.dialog.quantity,callback:function(e){t.$set(t.dialog,"quantity",e)},expression:"dialog.quantity"}})],1),t._v(" "),a("v-col",{attrs:{cols:"6"}},[a("app-raw-converted-units",{attrs:{value:t.dialog.quantity,convertValue:t.convert.value,formDataBaseName:t.dialog.base_name}})],1)],1)]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);e.default=l.exports}}]);