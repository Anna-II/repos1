(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a6e9b8c"],{"0aaf":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("\n    综合信息统计\n")])},n=[],r={name:"StaAll"},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"02cf5296",null);t["default"]=o.exports},1937:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-form",{ref:"form",attrs:{model:e.sizeForm,"label-width":"80px",size:"mini"}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),l("el-form-item",{attrs:{label:"婚姻情况"}},[l("el-select",{attrs:{placeholder:"请选择婚姻情况"},model:{value:e.sizeForm.region,callback:function(t){e.$set(e.sizeForm,"region",t)},expression:"sizeForm.region"}},[l("el-option",{attrs:{label:"已婚",value:"shanghai"}}),l("el-option",{attrs:{label:"未婚",value:"beijing"}})],1)],1),l("el-form-item",{attrs:{label:"入职时间"}},[l("el-col",{attrs:{span:11}},[l("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.sizeForm.date1,callback:function(t){e.$set(e.sizeForm,"date1",t)},expression:"sizeForm.date1"}})],1),l("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),l("el-col",{attrs:{span:11}},[l("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.sizeForm.date2,callback:function(t){e.$set(e.sizeForm,"date2",t)},expression:"sizeForm.date2"}})],1)],1),l("el-form-item",{attrs:{label:"在职状态"}},[l("el-radio-group",{attrs:{size:"medium"},model:{value:e.sizeForm.resource,callback:function(t){e.$set(e.sizeForm,"resource",t)},expression:"sizeForm.resource"}},[l("el-radio",{attrs:{border:"",label:"在职"}}),l("el-radio",{attrs:{border:"",label:"离职"}})],1)],1),l("el-form-item",{attrs:{size:"large"}},[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查找工资表")]),l("el-button",[e._v("取消")])],1)],1)},n=[],r={data:function(){return{sizeForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"6f126d06",null);t["default"]=o.exports},"21c7":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"工资",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)},n=[],r={methods:{handleClick:function(e){console.log(e)}},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"26cc85f3",null);t["default"]=o.exports},"2bc5":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[l("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:e.showAddSalaryView}},[e._v("添加工资账套")]),l("el-button",{attrs:{icon:"el-icon-refresh",type:"success"},on:{click:e.initSalaries}})],1),l("div",{staticStyle:{"margin-top":"10px"}},[l("el-table",{attrs:{data:e.salaries,border:"",stripe:""}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),l("el-table-column",{attrs:{width:"120",prop:"name",label:"账套名称"}}),l("el-table-column",{attrs:{width:"70",prop:"basicSalary",label:"基本工资"}}),l("el-table-column",{attrs:{width:"70",prop:"trafficSalary",label:"交通补助"}}),l("el-table-column",{attrs:{width:"70",prop:"lunchSalary",label:"午餐补助"}}),l("el-table-column",{attrs:{width:"70",prop:"bonus",label:"奖金"}}),l("el-table-column",{attrs:{width:"100",prop:"createDate",label:"启用时间"}}),l("el-table-column",{attrs:{label:"养老金",align:"center"}},[l("el-table-column",{attrs:{width:"70",prop:"pensionPer",label:"比率"}}),l("el-table-column",{attrs:{width:"70",prop:"pensionBase",label:"基数"}})],1),l("el-table-column",{attrs:{label:"医疗保险",align:"center"}},[l("el-table-column",{attrs:{width:"70",prop:"medicalPer",label:"比率"}}),l("el-table-column",{attrs:{width:"70",prop:"medicalBase",label:"基数"}})],1),l("el-table-column",{attrs:{label:"公积金",align:"center"}},[l("el-table-column",{attrs:{width:"70",prop:"accumulationFundPer",label:"比率"}}),l("el-table-column",{attrs:{width:"70",prop:"accumulationFundBase",label:"基数"}})],1),l("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{on:{click:function(l){return e.showEditSalaryView(t.row)}}},[e._v("编辑")]),l("el-button",{attrs:{type:"danger"},on:{click:function(l){return e.deleteSalary(t.row)}}},[e._v("删除")])]}}])})],1)],1),l("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("div",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center"}},[l("el-steps",{attrs:{direction:"vertical",active:e.activeItemIndex}},e._l(e.salaryItemName,(function(e,t){return l("el-step",{key:t,attrs:{title:e}})})),1),e._l(e.salary,(function(t,a,n){return l("el-input",{directives:[{name:"show",rawName:"v-show",value:e.activeItemIndex==n,expression:"activeItemIndex==index"}],key:n,staticStyle:{width:"200px"},attrs:{placeholder:"请输入"+e.salaryItemName[n]+"..."},model:{value:e.salary[a],callback:function(t){e.$set(e.salary,a,t)},expression:"salary[title]"}})}))],2),l("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.preStep}},[e._v(e._s(10==e.activeItemIndex?"取消":"上一步"))]),l("el-button",{attrs:{type:"primary"},on:{click:e.nextStep}},[e._v(e._s(10==e.activeItemIndex?"完成":"下一步"))])],1)])],1)},n=[],r=(l("7f7f"),{name:"SalSob",data:function(){return{dialogVisible:!1,dialogTitle:"添加工资账套",salaries:[],activeItemIndex:0,salaryItemName:["基本工资","交通补助","午餐补助","奖金","养老金比率","养老金基数","医疗保险比率","医疗保险基数","公积金比率","公积金基数","账套名称"],salary:{basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0,name:""}}},mounted:function(){this.initSalaries()},methods:{showEditSalaryView:function(e){this.dialogTitle="修改工资账套",this.dialogVisible=!0,this.salary.basicSalary=e.basicSalary,this.salary.trafficSalary=e.trafficSalary,this.salary.lunchSalary=e.lunchSalary,this.salary.bonus=e.bonus,this.salary.pensionPer=e.pensionPer,this.salary.pensionBase=e.pensionBase,this.salary.medicalPer=e.medicalPer,this.salary.medicalBase=e.medicalBase,this.salary.accumulationFundPer=e.accumulationFundPer,this.salary.accumulationFundBase=e.accumulationFundBase,this.salary.name=e.name,this.salary.id=e.id},deleteSalary:function(e){var t=this;this.$confirm("此操作将删除【"+e.name+"】账套，是否继续？","提示",{cancelButtonText:"取消",confirmButtonText:"确定"}).then((function(){t.deleteRequest("/salary/sob/"+e.id).then((function(e){e&&t.initSalaries()}))})).catch((function(){t.$message.info("取消删除!")}))},preStep:function(){0!=this.activeItemIndex&&(10!=this.activeItemIndex?this.activeItemIndex--:this.dialogVisible=!1)},nextStep:function(){var e=this;10!=this.activeItemIndex?this.activeItemIndex++:this.salary.id?this.putRequest("/salary/sob/",this.salary).then((function(t){t&&(e.initSalaries(),e.dialogVisible=!1)})):this.postRequest("/salary/sob/",this.salary).then((function(t){t&&(e.initSalaries(),e.dialogVisible=!1)}))},showAddSalaryView:function(){this.salary={basicSalary:0,trafficSalary:0,lunchSalary:0,bonus:0,pensionPer:0,pensionBase:0,medicalPer:0,medicalBase:0,accumulationFundPer:0,accumulationFundBase:0,name:"默认名称"},this.dialogTitle="添加工资账套",this.activeItemIndex=0,this.dialogVisible=!0},initSalaries:function(){var e=this;this.getRequest("/salary/sob/").then((function(t){t&&(e.salaries=t)}))}}}),i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"40681c82",null);t["default"]=o.exports},5865:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"员工姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",{attrs:{label:"是否在职"}},[l("el-select",{attrs:{placeholder:"是否在职"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"是",value:"shanghai"}}),l("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1)])},n=[],r={data:function(){return{formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"70eef5f1",null);t["default"]=o.exports},"5a4a":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"员工姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",{attrs:{label:"是否在职"}},[l("el-select",{attrs:{placeholder:"是否在职"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"是",value:"shanghai"}}),l("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1)])},n=[],r={data:function(){return{formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"2b933886",null);t["default"]=o.exports},"6ac98":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-table",{attrs:{data:e.emps,border:"",stripe:"",size:"mini"}},[l("el-table-column",{attrs:{type:"selection",align:"left",width:"55"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",fixed:"",width:"120",align:"left"}}),l("el-table-column",{attrs:{prop:"workID",label:"工号",width:"120",align:"left"}}),l("el-table-column",{attrs:{prop:"email",label:"电子邮件",width:"200",align:"left"}}),l("el-table-column",{attrs:{prop:"phone",label:"电话号码",width:"120",align:"left"}}),l("el-table-column",{attrs:{prop:"department.name",label:"所属部门",width:"120",align:"left"}}),l("el-table-column",{attrs:{label:"所属部门",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.salary?l("el-tooltip",{attrs:{placement:"right"}},[l("div",{attrs:{slot:"content"},slot:"content"},[l("table",[l("tr",[l("td",[e._v("基本工资")]),l("td",[e._v(e._s(t.row.salary.basicSalary))])]),l("tr",[l("td",[e._v("交通补助")]),l("td",[e._v(e._s(t.row.salary.trafficSalary))])]),l("tr",[l("td",[e._v("午餐补助")]),l("td",[e._v(e._s(t.row.salary.lunchSalary))])]),l("tr",[l("td",[e._v("奖金")]),l("td",[e._v(e._s(t.row.salary.bonus))])]),l("tr",[l("td",[e._v("养老金比率")]),l("td",[e._v(e._s(t.row.salary.pensionPer))])]),l("tr",[l("td",[e._v("养老金基数")]),l("td",[e._v(e._s(t.row.salary.pensionBase))])]),l("tr",[l("td",[e._v("医疗保险比率")]),l("td",[e._v(e._s(t.row.salary.medicalPer))])]),l("tr",[l("td",[e._v("医疗保险基数")]),l("td",[e._v(e._s(t.row.salary.medicalBase))])]),l("tr",[l("td",[e._v("公积金比率")]),l("td",[e._v(e._s(t.row.salary.accumulationFundPer))])]),l("tr",[l("td",[e._v("公积金基数")]),l("td",[e._v(e._s(t.row.salary.accumulationFundBase))])]),l("tr",[l("td",[e._v("启用时间")]),l("td",[e._v(e._s(t.row.salary.createDate))])])])]),l("el-tag",[e._v(e._s(t.row.salary.name))])],1):l("el-tag",[e._v("暂未设置")])]}}])}),l("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-popover",{attrs:{placement:"left",title:"修改工资账套",width:"200",trigger:"click"},on:{show:function(l){return e.showPop(t.row.salary)},hide:function(l){return e.hidePop(t.row)}}},[l("div",[l("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:e.currentSalary,callback:function(t){e.currentSalary=t},expression:"currentSalary"}},e._l(e.salaries,(function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),l("el-button",{attrs:{slot:"reference",type:"danger"},slot:"reference"},[e._v("修改工资账套")])],1)]}}])})],1),l("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[l("el-pagination",{attrs:{background:"",layout:"sizes, prev, pager, next, jumper, ->, total, slot",total:e.total},on:{"size-change":e.sizeChange,"current-change":e.currentChange}})],1)],1)])},n=[],r={name:"SalSobCfg",data:function(){return{emps:[],total:0,currentPage:1,currentSize:10,currentSalary:null,salaries:[]}},mounted:function(){this.initEmps(),this.initSalaries()},methods:{sizeChange:function(e){this.currentSize=e,this.initEmps()},currentChange:function(e){this.currentPage=e,this.initEmps()},hidePop:function(e){var t=this;this.currentSalary&&this.putRequest("/salary/sobcfg/?eid="+e.id+"&sid="+this.currentSalary).then((function(e){e&&t.initEmps()}))},showPop:function(e){this.currentSalary=e?e.id:null},initSalaries:function(){var e=this;this.getRequest("/salary/sobcfg/salaries").then((function(t){t&&(e.salaries=t)}))},initEmps:function(){var e=this;this.getRequest("/salary/sobcfg/?page="+this.currentPage+"&size="+this.currentSize).then((function(t){t&&(e.emps=t.data,e.total=t.total)}))}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"45b7448f",null);t["default"]=o.exports},"83ed":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"员工姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",{attrs:{label:"是否在职"}},[l("el-select",{attrs:{placeholder:"是否在职"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"是",value:"shanghai"}}),l("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1)])},n=[],r={data:function(){return{formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"78c77e71",null);t["default"]=o.exports},a49a:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("\n    人事记录统计\n")])},n=[],r={name:"StaRecord"},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"801c4e42",null);t["default"]=o.exports},b419:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("\n    人事信息统计\n")])},n=[],r={name:"StaPers"},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"4380cdc8",null);t["default"]=o.exports},bd5d:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"员工姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",{attrs:{label:"是否在职"}},[l("el-select",{attrs:{placeholder:"是否在职"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"是",value:"shanghai"}}),l("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1)])},n=[],r={data:function(){return{formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"15a3fe61",null);t["default"]=o.exports},c1d3:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("\n    员工积分统计\n")])},n=[],r={name:"StaScore"},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"2d8ed549",null);t["default"]=o.exports},cfbb:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"员工姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",{attrs:{label:"是否在职"}},[l("el-select",{attrs:{placeholder:"是否在职"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"是",value:"shanghai"}}),l("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1)])},n=[],r={data:function(){return{formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"a5655d04",null);t["default"]=o.exports},d9ac:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",[l("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[l("el-form-item",{attrs:{label:"员工姓名"}},[l("el-input",{attrs:{placeholder:"员工姓名"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1),l("el-form-item",{attrs:{label:"是否在职"}},[l("el-select",{attrs:{placeholder:"是否在职"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[l("el-option",{attrs:{label:"是",value:"shanghai"}}),l("el-option",{attrs:{label:"否",value:"beijing"}})],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("查询")])],1)],1)],1),l("div",[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:""}},[l("el-table-column",{attrs:{fixed:"",prop:"date",label:"日期",width:"150"}}),l("el-table-column",{attrs:{prop:"name",label:"姓名",width:"120"}}),l("el-table-column",{attrs:{prop:"province",label:"省份",width:"120"}}),l("el-table-column",{attrs:{prop:"city",label:"市区",width:"120"}}),l("el-table-column",{attrs:{prop:"address",label:"地址",width:"300"}}),l("el-table-column",{attrs:{prop:"zip",label:"邮编",width:"120"}}),l("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")]),l("el-button",{attrs:{type:"text",size:"small"}},[e._v("编辑")])]}}])})],1)],1)])},n=[],r={data:function(){return{formInline:{user:"",region:""},tableData:[{date:"2016-05-02",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1518 弄",zip:200333},{date:"2016-05-04",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1517 弄",zip:200333},{date:"2016-05-01",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1519 弄",zip:200333},{date:"2016-05-03",name:"王小虎",province:"上海",city:"普陀区",address:"上海市普陀区金沙江路 1516 弄",zip:200333}]}},methods:{onSubmit:function(){console.log("submit!")},handleClick:function(e){console.log(e)}}},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"06425769",null);t["default"]=o.exports},fbac:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[e._v("\n    月末处理\n")])},n=[],r={name:"SalMonth"},i=r,s=l("2877"),o=Object(s["a"])(i,a,n,!1,null,"9479f3f0",null);t["default"]=o.exports},feca:function(e,t,l){var a={"./Home.vue":"bb51","./HrInfo.vue":"92d8","./Login.vue":"a55b","./chat/FriendChat.vue":"8a18","./emp/EmpAdv.vue":"8759","./emp/EmpBasic.vue":"58da","./per/PerEc.vue":"d9ac","./per/PerEmp.vue":"5865","./per/PerMv.vue":"cfbb","./per/PerPraise.vue":"bd5d","./per/PerSalary.vue":"5a4a","./per/PerTrain.vue":"83ed","./sal/SalMonth.vue":"fbac","./sal/SalSearch.vue":"1937","./sal/SalSob.vue":"2bc5","./sal/SalSobCfg.vue":"6ac98","./sal/SalTable.vue":"21c7","./sta/StaAll.vue":"0aaf","./sta/StaPers.vue":"b419","./sta/StaRecord.vue":"a49a","./sta/StaScore.vue":"c1d3","./sys/SysBasic.vue":"8d67","./sys/SysCfg.vue":"1fe7","./sys/SysData.vue":"d1e3","./sys/SysHr.vue":"418a","./sys/SysInit.vue":"8608","./sys/SysLog.vue":"864e"};function n(e){var t=r(e);return l(t)}function r(e){if(!l.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="feca"}}]);
//# sourceMappingURL=chunk-5a6e9b8c.06e10176.js.map