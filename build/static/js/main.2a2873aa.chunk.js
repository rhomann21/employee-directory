(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),s=a.n(l),i=a(2),o=a(3),m=a(5),c=a(4),u=a(6),h=a(1),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={filtered:[]},a.handleChangeFirstName=a.handleChangeFirstName.bind(Object(h.a)(a)),a.handleChangeLastName=a.handleChangeLastName.bind(Object(h.a)(a)),a.handleChangeDepName=a.handleChangeDepName.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({filtered:this.props.employees})}},{key:"handleChangeFirstName",value:function(e){var t=[];t=""!==e.target.value?this.props.employees.filter((function(t){var a=t.firstname.toString().toLowerCase(),n=e.target.value.toString().toLowerCase();return a.includes(n)})):this.props.employees,this.setState({filtered:t})}},{key:"handleChangeLastName",value:function(e){var t=[];t=""!==e.target.value?this.props.employees.filter((function(t){var a=t.lastname.toString().toLowerCase(),n=e.target.value.toString().toLowerCase();return a.includes(n)})):this.props.employees,this.setState({filtered:t})}},{key:"handleChangeDepName",value:function(e){var t=[];t=""!==e.target.value?this.props.employees.filter((function(t){var a=t.department.toString().toLowerCase(),n=e.target.value.toString().toLowerCase();return a.includes(n)})):this.props.employees,this.setState({filtered:t})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"searchBars"},r.a.createElement("input",{type:"text",onChange:this.handleChangeFirstName,placeholder:"Search by First Name..."}),r.a.createElement("input",{type:"text",onChange:this.handleChangeLastName,placeholder:"Search by Last Name..."}),r.a.createElement("input",{type:"text",onChange:this.handleChangeDepName,placeholder:"Search by Department..."})),r.a.createElement("table",{className:"tableStyle"},r.a.createElement("div",{class:"tableBody"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Employee Name"),r.a.createElement("th",null,"Department"))),r.a.createElement("tbody",null,this.state.filtered.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.firstname," ",e.lastname),r.a.createElement("td",null,e.department))}))))))}}]),t}(n.Component),p=(a(14),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={employees:[{firstname:"Oriana",lastname:"Dentici",department:"Advertising"},{firstname:"Scott",lastname:"Kumor",department:"Accounting"},{firstname:"Izzy",lastname:"Edson",department:"Human Resources"},{firstname:"Tony",lastname:"Vester",department:"Accounting"},{firstname:"Eric",lastname:"Noll",department:"Sales"},{firstname:"Hannah",lastname:"Chamorro",department:"Public Relations"},{firstname:"Abby",lastname:"Blachman",department:"Human Resources"},{firstname:"Robert",lastname:"Wojciechowski",department:"Marketing"},{firstname:"Joanna",lastname:"Sowa",department:"Public Relations"},{firstname:"Drew",lastname:"Russell",department:"Sales"},{firstname:"Rachael",lastname:"Homann",department:"Advertising"},{firstname:"Katie",lastname:"McBride",department:"Marketing"},{firstname:"Elizabeth",lastname:"Benson",department:"Sales"},{firstname:"Gabriel",lastname:"Patacky",department:"Human Resources"},{firstname:"Scott",lastname:"Brunswig",department:"Chief Executive Officer"}]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"headerStyle"},"Employee Directory"),r.a.createElement(d,{employees:this.state.employees}))}}]),t}(n.Component));var f=function(){return r.a.createElement(p,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.2a2873aa.chunk.js.map