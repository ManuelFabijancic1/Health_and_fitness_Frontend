(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sleepcalculator"],{"04d6":function(t,e,s){"use strict";s("41b3")},"41b3":function(t,e,s){},"47b0":function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),s("div",{staticClass:"row",attrs:{id:"row2"}},[s("div",{staticClass:"col"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.wakeuphours,expression:"store.wakeuphours"}],attrs:{type:"number",min:"0",max:"23",placeholder:"7"},domProps:{value:t.store.wakeuphours},on:{input:function(e){e.target.composing||t.$set(t.store,"wakeuphours",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.wakeupmins,expression:"store.wakeupmins"}],attrs:{type:"number",min:"0",max:"59",placeholder:"00"},domProps:{value:t.store.wakeupmins},on:{input:function(e){e.target.composing||t.$set(t.store,"wakeupmins",e.target.value)}}})])]),s("div",{staticClass:"col"}),s("div",{staticClass:"col"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.gotosleephours,expression:"store.gotosleephours"}],attrs:{type:"number",min:"0",max:"23",placeholder:"22"},domProps:{value:t.store.gotosleephours},on:{input:function(e){e.target.composing||t.$set(t.store,"gotosleephours",e.target.value)}}}),t._v(": "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.gotosleepmins,expression:"store.gotosleepmins"}],attrs:{type:"number",min:"0",max:"59",placeholder:"00"},domProps:{value:t.store.gotosleepmins},on:{input:function(e){e.target.composing||t.$set(t.store,"gotosleepmins",e.target.value)}}})])])]),s("div",{staticClass:"row",attrs:{id:"row3"}},[s("div",{staticClass:"col"},[s("router-link",{attrs:{to:"bedtime"},nativeOn:{click:function(e){return t.bedtime_calculator()}}},[s("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Calculate bedtime")])])],1),s("div",{staticClass:"col"}),s("div",{staticClass:"col"},[s("router-link",{attrs:{to:"wakeuptime"},nativeOn:{click:function(e){return t.wake_up_time_calculation()}}},[s("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[t._v("Calculate wake-up time")])])],1)])])},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("h3",{attrs:{id:"Naslov1"}},[t._v("When do you want to wake up?")])]),s("div",{staticClass:"col"}),s("div",{staticClass:"col"},[s("h3",{attrs:{id:"Naslov1"}},[t._v("When do you want to go to sleep?")])])])}],o=(s("a9e3"),s("c0d6")),n={name:"sleepcalculator",data:function(){return{store:o["a"]}},methods:{wake_up_time_calculation:function(){console.log,this.store.interval1_hours=Number(this.store.gotosleephours)+6,this.store.interval1_hours>24&&(this.store.interval1_hours=this.store.interval1_hours-24),this.store.interval1_mins=this.store.gotosleepmins,Number(this.store.interval1_mins)+30>59?(this.store.interval2_hours=Number(this.store.interval1_hours)+2,this.store.interval2_mins=Number(this.store.interval1_mins)+30,this.store.interval2_mins=this.store.interval2_mins%60):(this.store.interval2_hours=Number(this.store.interval1_hours)+1,this.store.interval2_mins=Number(this.store.interval1_mins)+30),Number(this.store.interval2_mins)+30>59?(this.store.interval3_hours=Number(this.store.interval2_hours)+2,this.store.interval3_mins=Number(this.store.interval2_mins)+30,this.store.interval3_mins=this.store.interval3_mins%60):(this.store.interval3_hours=Number(this.store.interval2_hours)+1,this.store.interval3_mins=Number(this.store.interval2_mins)+30),Number(this.store.interval3_mins)+30>59?(this.store.interval4_hours=Number(this.store.interval3_hours)+2,this.store.interval4_mins=Number(this.store.interval3_mins)+30,this.store.interval4_mins=this.store.interval4_mins%60):(this.store.interval4_hours=Number(this.store.interval3_hours)+1,this.store.interval4_mins=Number(this.store.interval3_mins)+30)},bedtime_calculator:function(){Number(o["a"].wakeuphours)-9<0?(this.store.bedtimeinterval1_hours=24-(9-Number(this.store.wakeuphours)),this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval2_hours)-24,this.store.bedtimeinterval1_mins=this.store.wakeupmins):(this.store.bedtimeinterval1_hours=Number(o["a"].wakeuphours)-9,this.store.bedtimeinterval1_mins=o["a"].wakeupmins),Number(this.store.bedtimeinterval1_mins)+30>59?(this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval1_hours)+2,this.store.bedtimeinterval2_hours>=24&&(this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval2_hours)-24),this.store.bedtimeinterval2_mins=Number(this.store.bedtimeinterval1_mins)+30,this.store.bedtimeinterval2_mins=this.store.bedtimeinterval2_mins%60):(this.store.bedtimeinterval2_hours=Number(this.store.bedtimeinterval1_hours)+1,this.store.bedtimeinterval2_mins=Number(this.store.bedtimeinterval1_mins)+30),Number(this.store.bedtimeinterval2_mins)+30>59?(this.store.bedtimeinterval3_hours=Number(this.store.bedtimeinterval2_hours)+2,this.store.bedtimeinterval3_hours>=24&&(this.store.bedtimeinterval3_hours=Number(this.store.bedtimeinterval3_hours)-24),this.store.bedtimeinterval3_mins=Number(this.store.bedtimeinterval2_mins)+30,this.store.bedtimeinterval3_mins=this.store.bedtimeinterval3_mins%60):(this.store.bedtimeinterval3_hours=Number(this.store.bedtimeinterval2_hours)+1,this.store.bedtimeinterval3_mins=Number(this.store.bedtimeinterval2_mins)+30),Number(this.store.bedtimeinterval3_mins)+30>59?(this.store.bedtimeinterval4_hours=Number(this.store.bedtimeinterval3_hours)+2,this.store.bedtimeinterval4_hours>=24&&(this.store.bedtimeinterval4_hours=Number(this.store.bedtimeinterval4_hours)-24),this.store.bedtimeinterval4_mins=Number(this.store.bedtimeinterval3_mins)+30,this.store.bedtimeinterval4_mins=this.store.bedtimeinterval4_mins%60):(this.store.bedtimeinterval4_hours=Number(this.store.bedtimeinterval3_hours)+1,this.store.bedtimeinterval4_mins=Number(this.store.bedtimeinterval3_mins)+30)}}},a=n,u=(s("04d6"),s("2877")),l=Object(u["a"])(a,r,i,!1,null,"4225696b",null);e["default"]=l.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var r=s("1d80"),i=s("5899"),o="["+i+"]",n=RegExp("^"+o+o+"*"),a=RegExp(o+o+"*$"),u=function(t){return function(e){var s=String(r(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(a,"")),s}};t.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(t,e,s){var r=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var o,n;return i&&"function"==typeof(o=e.constructor)&&o!==s&&r(n=o.prototype)&&n!==s.prototype&&i(t,n),t}},a9e3:function(t,e,s){"use strict";var r=s("83ab"),i=s("da84"),o=s("94ca"),n=s("6eeb"),a=s("5135"),u=s("c6b6"),l=s("7156"),m=s("c04e"),h=s("d039"),v=s("7c73"),b=s("241c").f,c=s("06cf").f,d=s("9bf2").f,_=s("58a8").trim,p="Number",N=i[p],f=N.prototype,g=u(v(f))==p,w=function(t){var e,s,r,i,o,n,a,u,l=m(t,!1);if("string"==typeof l&&l.length>2)if(l=_(l),e=l.charCodeAt(0),43===e||45===e){if(s=l.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+l}for(o=l.slice(2),n=o.length,a=0;a<n;a++)if(u=o.charCodeAt(a),u<48||u>i)return NaN;return parseInt(o,r)}return+l};if(o(p,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var k,C=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof C&&(g?h((function(){f.valueOf.call(s)})):u(s)!=p)?l(new N(w(e)),s,C):w(e)},I=r?b(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),E=0;I.length>E;E++)a(N,k=I[E])&&!a(C,k)&&d(C,k,c(N,k));C.prototype=f,f.constructor=C,n(i,p,C)}}}]);
//# sourceMappingURL=sleepcalculator.efde3379.js.map