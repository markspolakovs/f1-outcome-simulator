(this["webpackJsonpchampionship-results"]=this["webpackJsonpchampionship-results"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),s=n.n(r),a=(n(11),n(5)),h=n(4),j=(n(12),n(0)),l=[1,2,3,4,5,6,7,8,9,10,11],o=l.flatMap((function(e){return[[e,!1],e<11&&[e,!0]].filter(Boolean)})),u={1:25,2:18,3:15,4:12,5:10,6:8,7:6,8:4,9:2,10:1,11:0};function d(e){return u[e[0]]+(e[1]?1:0)}function b(e){var t="P"+e[0].toString(10);return 11===e[0]&&(t="P11 or lower"),e[1]&&(t+=" + fastest lap"),t}var O=343.5,p=351.5;var f=function(){var e=Object(c.useState)([2,!0]),t=Object(a.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)([1,!1]),s=Object(a.a)(r,2),u=s[0],f=s[1],x=function(e,t){var n,c=[],i=[],r=[],s=new Set,a=new Set,j=Object(h.a)(o);try{for(j.s();!(n=j.n()).done;){var l,u=n.value,b=Object(h.a)(o);try{for(b.s();!(l=b.n()).done;){var O=l.value;if(u[0]!==O[0]||11===u[0]&&11===O[0]){var p=e+d(u),f=t+d(O);p>f&&!s.has(u[0])?(c.push([u,O]),s.add(u[0])):f>p&&!a.has(O[0])?(i.push([O,u]),a.add(O[0])):p===f&&r.push([u,O])}}}catch(x){b.e(x)}finally{b.f()}}}catch(x){j.e(x)}finally{j.f()}return{d1WinningOutcomes:c,d2WinningOutcomes:i,drawOutcomes:r}}(O+d(n),p+d(u));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"2021 F1 Championship simulator"})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Standings after Qatar:"}),"Hamilton: ",O,", Verstappen: ",p]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Saudi Arabia results"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Hamilton"}),":",Object(j.jsx)("select",{value:n[0].toString(10),onChange:function(e){return i((function(t){return[parseInt(e.target.value),t[1]]}))},children:l.map((function(e){return Object(j.jsx)("option",{value:e.toString(10),children:e})}))}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:n[1],onChange:function(e){return i((function(t){return[t[0],e.target.checked]}))}}),"Fastest Lap"]}),"\xa0(",O+d(n)," points)"]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"Verstappen"}),":",Object(j.jsx)("select",{value:u[0].toString(10),onChange:function(e){return f((function(t){return[parseInt(e.target.value),t[1]]}))},children:l.map((function(e){return Object(j.jsx)("option",{value:e.toString(10),children:e})}))}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:u[1],onChange:function(e){return f((function(t){return[t[0],e.target.checked]}))}}),"Fastest Lap"]}),"\xa0(",p+d(u)," points)"]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Results after Abu Dhabi:"}),Object(j.jsx)("h3",{children:"Hamilton wins the title if\u2026"}),Object(j.jsx)("ul",{children:x.d1WinningOutcomes.map((function(e){return Object(j.jsxs)("li",{children:["he finishes ",Object(j.jsx)("em",{children:b(e[0])})," and Verstappen finishes ",Object(j.jsx)("em",{children:b(e[1])})," or below \xa0(",O+d(n)+d(e[0])," / ",p+d(u)+d(e[1])," points)"]},b(e[0])+b(e[1]))}))}),Object(j.jsx)("h3",{children:"Verstappen wins the title if\u2026"}),Object(j.jsx)("ul",{children:x.d2WinningOutcomes.map((function(e){return Object(j.jsxs)("li",{children:["he finishes ",Object(j.jsx)("em",{children:b(e[0])})," and Hamilton finishes ",Object(j.jsx)("em",{children:b(e[1])})," or below \xa0(",p+d(u)+d(e[0])," / ",O+d(n)+d(e[1])," points)"]},b(e[0])+b(e[1]))}))}),Object(j.jsx)("h3",{children:"Tied if\u2026"}),Object(j.jsx)("ul",{children:x.drawOutcomes.map((function(e){return Object(j.jsxs)("li",{children:["Hamilton finishes ",Object(j.jsx)("em",{children:b(e[0])})," and Verstappen finishes ",Object(j.jsx)("em",{children:b(e[1])}),"\xa0(",O+d(n)+d(e[0])," / ",p+d(u)+d(e[1])," points)"]},b(e[0])+b(e[1]))}))})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.cf238b2e.chunk.js.map