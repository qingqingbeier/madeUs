// const qs = require('qs');
// const mockjs = require('mockjs');  //导入mock.js的模块

// const Random = mockjs.Random;  //导入mock.js的随机数

// // 数据持久化   保存在global的全局变量中
// let tableListData = {};
// global.company=[
//   {Type:'01',TypeName:'电器'},
//   {Type:'02',TypeName:'延保'},
//   {Type:'03',TypeName:'易用通'},
//   {Type:'04',TypeName:'恒信'},
//   {Type:'05',TypeName:'战圣'},
//   {Type:'06',TypeName:'配件'},
//   {Type:'07',TypeName:'电器采购'},
//   {Type:'08',TypeName:'售后'},
//   {Type:'99',TypeName:'国美在线'}]
// global.job=[
//   {jobCode:'001',jobName:'营业员','jobMark':'01'},
//   {jobCode:'002',jobName:'促销员','jobMark':'02'},
//   {jobCode:'003',jobName:'主任','jobMark':'01'},
//   {jobCode:'004',jobName:'店长','jobMark':'01'}]
// if (!global.tableListData) {
//   const data = mockjs.mock({
//     'data|100': [{
//       'Id|+1': 1,
//       'companyType': ()=>{
//         let companyIndex=Math.floor(Math.random()*global.company.length)
//         return global.company[companyIndex].Type
//       },
//       'companyTypeName': function(){//这里不能使用箭头函数，不然会改变this指向，导致无法访问其他字段
//         return global.company.find((element)=>element.Type===this.companyType).TypeName//根据占位符companyType确定公司类型名
//       },
//       'jobCode': ()=>{
//         let jobIndex=Math.floor(Math.random()*global.job.length)
//         return global.job[jobIndex].jobCode
//       },
//       'jobName':function(){//这里不能使用箭头函数，不然会改变this指向，导致无法访问其他字段
//         return global.job.find((element)=>element.jobCode===this.jobCode).jobName//根据占位符companyType确定公司类型名
//       },
//       'promotionalCostRatio|0.1': 1,
//       'AllocationType|1': ["找上级","不找上级"],
//       'computeType|1': ["计算自己","不计算自己"]
//     }],
//     pageInfo: {
//       total: 100,
//       currentPage: 1,
//       pageSize:10
//     },
//   });
//   tableListData = data;
//   global.tableListData = tableListData;
// } else {
//   tableListData = global.tableListData;
// }

// module.exports = {
//   //post请求  /route1/getDataByPage 是拦截的地址   方法内部接受 request response对象
//   'post /route1/getDataByPage' (req, res) {
//     const pageInfo = req.body.pageInfo;
//     const searchRules = req.body.searchRules;
//     const pageSize = pageInfo.pageSize || 10;
//     const currentPage = pageInfo.currentPage || 1;

//     let data;
//     let serachDateList
//     const searchRulesNames = Object.getOwnPropertyNames(searchRules)
//     if(JSON.stringify(searchRules) !== "{}"){
//       serachDateList=global.tableListData.data.filter((item)=>{
//         for (var i = 0; i < searchRulesNames.length; i++) {
//           if(item[searchRulesNames[i]]===searchRules[searchRulesNames[i]]){
//             continue
//           }else{
//             break
//           }
//         }
//         return i===searchRulesNames.length?true:false
//       })
//     }else{
//       serachDateList=global.tableListData.data
//     }


//     //slice拷贝原数组tableListData.data一部分给新数组data
//     data = serachDateList.slice((currentPage - 1) * pageSize, currentPage * pageSize);

//     setTimeout(() => {
//       res.json({      //将请求json格式返回
//         'success': true,
//         'dataList': data,
//         'pageInfo': {
//           total: serachDateList.length,
//           currentPage: currentPage,
//           pageSize:pageSize
//         },
//         company:global.company,
//         job:global.job,
//         searchRules:searchRules
//       });
//     }, 100);
//   },
//   'post /route1/addRowData' (req, res) {
//     const rowData = req.body;

//     const addRow={}
//     addRow.AllocationType=["找上级","不找上级"][rowData.AllocationType-1]
//     addRow.Id=global.tableListData.data[global.tableListData.data.length-1].Id+1//取原数据中最后一个数据的id+1作为新增元素的id
//     addRow.companyType=rowData.company
//     addRow.companyTypeName=global.company.find((item)=>item.Type===rowData.company).TypeName
//     addRow.computeType=["计算自己","不计算自己"][rowData.computeType-1]
//     addRow.jobCode=rowData.job
//     addRow.jobName=global.job.find((item)=>item.jobCode===rowData.job).jobName
//     addRow.promotionalCostRatio=rowData.promotionalCostRatio

//     global.tableListData.data.push(addRow);

//     setTimeout(() => {
//       res.json({      //将请求json格式返回
//         'success': true,
//         'addRow':addRow
//       });
//     }, 100);
//   },
//   'post /route1/deleteRowData' (req, res) {
//     const rowIds = req.body;

//     global.tableListData.data=global.tableListData.data.filter((item)=>{
//       for (var i = 0; i < rowIds.rowIds.length; i++) {
//         if(item.Id===rowIds.rowIds[i])
//           break
//       }
//       if(i===rowIds.rowIds.length){
//         return true
//       }else{
//         return false
//       }
//     });

//     setTimeout(() => {
//       res.json({      //将请求json格式返回
//         'success': true,
//         'rowIds':rowIds
//       });
//     }, 100);
//   },
//   'post /route1/updataRowData' (req, res) {
//     const updataRowData = req.body;

//     global.tableListData.data=global.tableListData.data.map((item)=>{
//       if(item.Id===updataRowData.Id){
//         item=updataRowData
//       }
//       return item
//     })

//     setTimeout(() => {
//       res.json({      //将请求json格式返回
//         'success': true,
//         'updataRowData':updataRowData
//       });
//     }, 100);
//   },
// }