(this["webpackJsonpcovid-data"]=this["webpackJsonpcovid-data"]||[]).push([[0],{109:function(e,t,a){},110:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(21),r=a.n(c),i=(a(109),a(102)),o=(a.p,a(110),a(97)),u=a(20),l=a(42),j=a.n(l),d=a(70),h=a(88),b=a(89),f=a(103),x=a(99),O=a(147),p=a(144),v=a(145),g=a(51),m=a(34),w=a(146),y=a(148),D=a(149),C=a(8),k=(O.a.Header,O.a.Content,O.a.Footer,p.a.Title),T=(p.a.Paragraph,p.a.Text,p.a.Link,function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(e){var s;return Object(h.a)(this,a),(s=t.call(this,e)).getCbsaTitle=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://public.opendatasoft.com/api/records/1.0/search/?dataset=core-based-statistical-areas-cbsas-and-combined-statistical-areas-csas&q=&facet=cbsa_code&refine.cbsa_code="+t).then((function(e){return e.json()})).then((function(e){return e.records[0].fields.cbsa_title}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s.getName=function(e){return"state"===s.state.area?"".concat(e.state,", ").concat(e.country):"county"===s.state.area?"".concat(e.county,", ").concat(e.state):"cbsa"===s.state.area?s.getCbsaTitle(s.state.id):"United States"},s.getData=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://api.covidactnow.org/v2/"+s.state.area+"/"+s.state.id+".timeseries.json?apiKey=7db28a8b69614fc78c3556b2af94b9c5").then((function(e){return e.json()})).then(function(){var e=Object(d.a)(j.a.mark((function e(t){var a,n,c,r,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null===t.actualsTimeseries.slice(-7)[6].newCases?t.actualsTimeseries.slice(-8,-1):t.actualsTimeseries.slice(-7),n=a.map((function(e){return e.newCases||0})).reduce((function(e,t){return e+t}),0)/7,c=a.map((function(e){return e.newDeaths||0})).reduce((function(e,t){return e+t}),0)/7,r=(t.actuals.newCases-a.slice(-2)[0].newCases)/a.slice(-2)[0].newCases,i=(t.actuals.newDeaths-a.slice(-2)[0].newDeaths)/(a.slice(-2)[0].newDeaths||1),e.next=7,s.getName(t);case 7:o=e.sent,s.setState({loaded:!0,title:o,cases:t.actuals.newCases,deaths:t.actuals.newDeaths,casesBefore:t.actuals.newCases-a[5].newCases,deathsBefore:t.actuals.newDeaths-a[5].newDeaths,weekAvgCases:parseInt(n),weekAvgDeaths:parseInt(c),casesDayTrend:r,deathsDayTrend:i});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)}))),s.state={id:e.match.params.id.toString().toUpperCase(),area:e.match.params.area,loaded:!1,title:null,cases:null,deaths:null,weekAvgCases:null,weekAvgDeaths:null,casesDayTrend:null,deathsDayTrend:null},s}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsx)(k,{children:this.state.title||"..."}),Object(C.jsx)(v.a,{style:{border:"none"},children:Object(C.jsx)(g.a,{align:"middle",justify:"center",children:Object(C.jsx)(m.a,{span:8,children:Object(C.jsx)(v.a,{title:"Cases",bordered:!1,loading:this.state.loading,children:Object(C.jsxs)(g.a,{justify:"space-around",gutter:[24,36],children:[Object(C.jsx)(m.a,{children:Object(C.jsx)(w.a,{title:"New Cases",value:this.state.cases})}),Object(C.jsx)(m.a,{children:Object(C.jsx)(w.a,{title:"Day Change",value:Math.abs(this.state.casesBefore),valueStyle:{color:this.state.casesBefore>0?"#cf1322":"#3f8600"},prefix:this.state.casesBefore>0?Object(C.jsx)(y.a,{}):Object(C.jsx)(D.a,{})})}),Object(C.jsx)(m.a,{children:Object(C.jsx)(w.a,{title:"7 Day Avg",value:this.state.weekAvgCases})})]})})})})}),Object(C.jsx)(v.a,{children:Object(C.jsx)(g.a,{align:"middle",justify:"center",children:Object(C.jsx)(m.a,{span:8,children:Object(C.jsx)(v.a,{title:"Deaths",bordered:!1,loading:this.state.loading,children:Object(C.jsxs)(g.a,{justify:"space-around",gutter:[24,36],children:[Object(C.jsx)(m.a,{children:Object(C.jsx)(w.a,{title:"New Deaths",value:this.state.deaths})}),Object(C.jsx)(m.a,{children:Object(C.jsx)(w.a,{title:"Day Change",value:Math.abs(this.state.deathsBefore),valueStyle:{color:this.state.deathsBefore>0?"#cf1322":"#3f8600"},prefix:this.state.deathsBefore>0?Object(C.jsx)(y.a,{}):Object(C.jsx)(D.a,{})})}),Object(C.jsx)(m.a,{children:Object(C.jsx)(w.a,{title:"7 Day Avg",value:this.state.weekAvgDeaths})})]})})})})})]})}}]),a}(n.a.Component)),B=(a(136),a(82),["state","county","cbsa","country"]);var A=function(){return Object(C.jsx)("div",{className:"App",children:Object(C.jsx)(o.a,{children:Object(C.jsxs)(u.d,{children:[Object(C.jsx)(u.b,{path:"/:area/:id",render:function(e){return B.includes(e.match.params.area)?Object(C.jsx)(T,Object(i.a)({},e)):Object(C.jsx)(u.a,{to:"/"})}}),Object(C.jsx)(u.a,{from:"/bayarea",to:"/cbsa/41860"}),Object(C.jsx)(u.a,{from:"/dfw",to:"/cbsa/19100"}),Object(C.jsx)(u.a,{from:"/sanjose",to:"/cbsa/41940"}),Object(C.jsx)(u.a,{from:"/dallas",to:"/county/01047"}),Object(C.jsx)(u.a,{from:"/sf",to:"/county/06075"}),Object(C.jsx)(u.a,{from:"/sanmateo",to:"/county/06081"}),Object(C.jsx)(u.b,{render:function(){return Object(C.jsx)(u.a,{to:"/country/us"})}})]})})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,150)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(A,{})}),document.getElementById("root")),S()}},[[140,1,2]]]);
//# sourceMappingURL=main.fa67591f.chunk.js.map