(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{86:function(t,e,a){"use strict";a.r(e);var o={components:{"app-raw-dialog":function(){return a.e(14).then(a.bind(null,94))},"app-raw-info":function(){return a.e(1).then(a.bind(null,92))}},props:{selected:{type:Object},autocomplete:{type:Boolean}},data:function(){return{resetForm:{category_id:null,id:null,name:null,quantity:null,reorder_point:null},formData:{category_id:null,id:null,name:null,quantity:null,reorder_point:null},dialog:{operation:null,category:null},showForm:!1,headers:[{text:"Code",align:"start",value:"id"},{text:"Category",value:"category_name"},{text:"Name",value:"name"},{text:"Quantity",value:"quantity"},{text:"Reorder Point",value:"reorder_point"}],loading:!1,rawItems:[],rawIndex:null}},mounted:function(){this.getOrFilterRaw()},methods:{addDialog:function(){this.close(),this.dialog.operation="Add",this.dialog.category=this.selected.name,this.formData.category_id=this.selected.id},close:function(){this.formData=Object.assign({},this.resetForm),this.rawIndex=null,this.dialog={operation:null,category:null}},deleteRaw:function(){var t=this;axios.post("/products/raw/delete",{id:this.formData.id}).then((function(e){t.$emit("showSnackbar","".concat(e.data.raw.name," deleted.")),t.rawItems.splice(t.rawIndex,1),t.close()})).catch((function(t){t.response&&console.log(t.response)}))},editDialog:function(t){this.close(),this.rawIndex=this.rawItems.indexOf(t),this.dialog.category=t.category.name,this.dialog.operation="Edit",this.formData.category_id=t.category_id,this.formData.id=t.id,this.formData.name=t.name,this.formData.quantity=t.quantity,this.formData.reorder_point=t.reorder_point,this.showForm=!0},getOrFilterRaw:function(){var t=this;this.loading=!0,axios.post("/products/raw/view",{id:this.selected.id}).then((function(e){t.rawItems=e.data.raw.map((function(t){return t.category_name=t.category.name,t})),t.loading=!1})).catch((function(t){t.response&&console.log(t.response)}))},saveUpdateRaw:function(){var t=this;axios.post("Add"==this.dialog.operation?"/products/raw/add":"/products/raw/update",this.formData).then((function(e){var a=e.data.raw;a.category_name=a.category.name,"Add"==t.dialog.operation?(t.$emit("showSnackbar","".concat(a.name," added.")),t.rawItems.push(a)):(t.$emit("showSnackbar","".concat(a.name," has been updated.")),Object.assign(t.rawItems[t.rawIndex],a)),t.showForm=!1})).catch((function(t){t.response&&console.log(t.response)}))}},watch:{selected:function(t){this.getOrFilterRaw()}}},n=a(0),r=Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{flat:""}},[a("v-card-title",[t._v("\n        Raw Item\n\n        "),a("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"ml-3",attrs:{text:"",outlined:"",color:"green darken-4",disabled:!t.autocomplete},on:{click:function(e){return t.addDialog()}}},"v-btn",n,!1),o),[t._v("Add")])]}}]),model:{value:t.showForm,callback:function(e){t.showForm=e},expression:"showForm"}},[t._v(" "),a("app-raw-dialog",{attrs:{dialogCategory:t.dialog.category,dialogOperation:t.dialog.operation},on:{deleteraw:t.deleteRaw,saveupdateraw:t.saveUpdateRaw,dialogshowchange:function(e){t.showForm=!t.showForm}},scopedSlots:t._u([{key:"dialogForm",fn:function(){return[a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{autofocus:"",label:"Name"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Quantity",type:"number"},model:{value:t.formData.quantity,callback:function(e){t.$set(t.formData,"quantity",e)},expression:"formData.quantity"}})],1),t._v(" "),a("v-col",{attrs:{cols:"12",sm:"6"}},[a("v-text-field",{attrs:{label:"Reorder point",type:"number"},model:{value:t.formData.reorder_point,callback:function(e){t.$set(t.formData,"reorder_point",e)},expression:"formData.reorder_point"}})],1)]},proxy:!0}])})],1),t._v(" "),a("v-spacer"),t._v(" "),a("app-raw-info",{attrs:{message:"Click on table rows to update the record."}}),t._v(" "),a("v-slide-x-reverse-transition",[t.autocomplete?a("div",[t._v("\n                Filtered by: "+t._s(t.selected.name.toUpperCase())+"\n            ")]):t._e()])],1),t._v(" "),a("v-data-table",{attrs:{headers:t.headers,items:t.rawItems,loading:t.loading},on:{"click:row":t.editDialog}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);