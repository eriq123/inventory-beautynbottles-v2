(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{92:function(t,e,a){"use strict";a.r(e);var o=a(1),n=a.n(o);function r(t,e,a,o,n,r,s){try{var i=t[r](s),l=i.value}catch(t){return void a(t)}i.done?e(l):Promise.resolve(l).then(o,n)}var s={components:{"app-report-datatable":function(){return a.e(15).then(a.bind(null,103))},"app-download-excel":a(9).a,"app-datepicker":function(){return a.e(16).then(a.bind(null,104))}},data:function(){return{toggle:{state:!1,loading:!1,disabled:!1},fields:{Code:"code","Raw Item":"name",Purchase:"purchase",Rts:"rts",Sold:"custom_sold",Loss:"custom_loss","Available units":"units"},data:[],header:null,filename:null,dialog:!1,date:{from:(new Date).toISOString(),to:(new Date).toISOString()}}},created:function(){},methods:{savefromdate:function(t){this.date.from=t},savetodate:function(t){this.date.to=t},toggleChange:function(t){this.toggle.disabled=this.toggle.loading=t},getExcelData:function(t){var e,a=this;return(e=n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.prepareHeader(),t.next=3,axios.post("/inventory/report/download",a.date).then((function(t){a.data=t.data.log.map((function(t){if(t.raw)return t.code="RI - ".concat(t.raw.id.toString().padStart(4,"0")),t.name=t.raw.name,t.purchase=t.raw.purchase,t.rts=t.raw.rts,t.units="".concat(t.raw.quantity," ").concat(t.raw.base.name),t.custom_sold="(".concat(t.raw.sold,")"),t.custom_loss="(".concat(t.raw.loss,")"),t}))})).catch((function(t){t.response?(console.log(t.response),t.response.data.error_message?a.$store.commit("showSnackbar",{color:!1,text:t.response.data.error_message}):a.$store.commit("errorSnackbar")):console.log(t)}));case 3:a.$store.commit("showSnackbar",{color:!0,text:"Downloading..."});case 4:case"end":return t.stop()}}),t)})),function(){var t=this,a=arguments;return new Promise((function(o,n){var s=e.apply(t,a);function i(t){r(s,o,n,i,l,"next",t)}function l(t){r(s,o,n,i,l,"throw",t)}i(void 0)}))})()},prepareHeader:function(){this.$store.commit("showSnackbar",{color:!0,text:"Please wait while preparing data."});var t={year:"numeric",month:"long",day:"numeric"},e=new Date(this.date.from).toLocaleDateString("en-US",t),a=new Date(this.date.to).toLocaleDateString("en-US",t);this.filename="Inventory Report ".concat(e," - ").concat(a),this.header="Eshop Beauty and Bottles Online Shop\n Inventory Report\n ".concat(e," - ").concat(a)},downloadFinished:function(){this.dialog=!1,this.date.from=(new Date).toISOString(),this.date.to=(new Date).toISOString(),this.$store.commit("showSnackbar",{color:!0,text:"Inventory report download finished."})}},computed:{switchLabel:function(){return 1==this.toggle.state?"Products":"Raw Items"}}},i=a(0),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",[a("v-col",[a("v-switch",{staticClass:"ml-3",attrs:{inset:"",ripple:"",disabled:t.toggle.disabled,loading:t.toggle.disabled,label:"Filtered by: "+t.switchLabel},model:{value:t.toggle.state,callback:function(e){t.$set(t.toggle,"state",e)},expression:"toggle.state"}}),t._v(" "),a("v-btn",{attrs:{text:"",color:"pink accent-2"},on:{click:function(e){t.dialog=!t.dialog}}},[a("v-icon",{attrs:{left:""}},[t._v("mdi-download")]),t._v("\n                Download Report\n            ")],1),t._v(" "),a("v-dialog",{attrs:{"max-width":"350px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[t._v("\n                        Inventory report\n                    ")]),t._v(" "),a("v-card-text",[a("app-datepicker",{attrs:{date:t.date.from,label:"Start Date"},on:{savedate:t.savefromdate}}),t._v(" "),a("app-datepicker",{attrs:{date:t.date.to,label:"End Date"},on:{savedate:t.savetodate}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("Cancel")]),t._v(" "),a("app-download-excel",{staticClass:"green--text text--darken-3 v-btn v-btn--flat v-btn--text theme--light v-size--default",attrs:{name:t.filename,header:t.header,data:t.data,fields:t.fields,"before-generate":t.getExcelData,"before-finish":t.downloadFinished}},[t._v("\n                            Save\n                        ")])],1)],1)],1)],1)],1),t._v(" "),a("app-report-datatable",{attrs:{toggleState:t.toggle.state},on:{toggleChange:t.toggleChange}})],1)}),[],!1,null,null,null);e.default=l.exports}}]);