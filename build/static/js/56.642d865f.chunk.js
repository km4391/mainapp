(this.webpackJsonpflexy=this.webpackJsonpflexy||[]).push([[56],{150:function(t,e,a){"use strict";a(0);var o=a(185),i=a(1);e.a=function(t){var e=t.title,a=t.description,n=t.children;return Object(i.jsxs)("div",{children:[Object(i.jsxs)(o.a,{children:[Object(i.jsx)("title",{children:e}),Object(i.jsx)("meta",{name:"description",content:a})]}),n]})}},236:function(t,e,a){"use strict";var o=a(11),i=a(7),n=a(3),r=a(0),c=(a(16),a(133)),l=a(719),d=a(129),s=a(132),b=a(47),p=a(770),u=a(134),h=a(720),x=a(721);function m(t){return Object(h.a)("MuiButton",t)}var v=Object(x.a)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","contained","containedInherit","containedPrimary","containedSecondary","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),f=a(1),j=["children","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],g=function(t){return Object(n.a)({},"small"===t.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===t.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===t.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},O=Object(s.a)(p.a,{shouldForwardProp:function(t){return Object(s.b)(t)||"classes"===t},name:"MuiButton",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return[e.root,e[a.variant],e["".concat(a.variant).concat(Object(u.a)(a.color))],e["size".concat(Object(u.a)(a.size))],e["".concat(a.variant,"Size").concat(Object(u.a)(a.size))],"inherit"===a.color&&e.colorInherit,a.disableElevation&&e.disableElevation,a.fullWidth&&e.fullWidth]}})((function(t){var e,a=t.theme,i=t.styleProps;return Object(n.a)({},a.typography.button,(e={minWidth:64,padding:"6px 16px",borderRadius:a.shape.borderRadius,transition:a.transitions.create(["background-color","box-shadow","border-color","color"],{duration:a.transitions.duration.short}),"&:hover":Object(n.a)({textDecoration:"none",backgroundColor:Object(d.a)(a.palette.text.primary,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===i.variant&&"inherit"!==i.color&&{backgroundColor:Object(d.a)(a.palette[i.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===i.variant&&"inherit"!==i.color&&{border:"1px solid ".concat(a.palette[i.color].main),backgroundColor:Object(d.a)(a.palette[i.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===i.variant&&{backgroundColor:a.palette.grey.A100,boxShadow:a.shadows[4],"@media (hover: none)":{boxShadow:a.shadows[2],backgroundColor:a.palette.grey[300]}},"contained"===i.variant&&"inherit"!==i.color&&{backgroundColor:a.palette[i.color].dark,"@media (hover: none)":{backgroundColor:a.palette[i.color].main}}),"&:active":Object(n.a)({},"contained"===i.variant&&{boxShadow:a.shadows[8]})},Object(o.a)(e,"&.".concat(v.focusVisible),Object(n.a)({},"contained"===i.variant&&{boxShadow:a.shadows[6]})),Object(o.a)(e,"&.".concat(v.disabled),Object(n.a)({color:a.palette.action.disabled},"outlined"===i.variant&&{border:"1px solid ".concat(a.palette.action.disabledBackground)},"outlined"===i.variant&&"secondary"===i.color&&{border:"1px solid ".concat(a.palette.action.disabled)},"contained"===i.variant&&{color:a.palette.action.disabled,boxShadow:a.shadows[0],backgroundColor:a.palette.action.disabledBackground})),e),"text"===i.variant&&{padding:"6px 8px"},"text"===i.variant&&"inherit"!==i.color&&{color:a.palette[i.color].main},"outlined"===i.variant&&{padding:"5px 15px",border:"1px solid ".concat("light"===a.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"outlined"===i.variant&&"inherit"!==i.color&&{color:a.palette[i.color].main,border:"1px solid ".concat(Object(d.a)(a.palette[i.color].main,.5))},"contained"===i.variant&&{color:a.palette.getContrastText(a.palette.grey[300]),backgroundColor:a.palette.grey[300],boxShadow:a.shadows[2]},"contained"===i.variant&&"inherit"!==i.color&&{color:a.palette[i.color].contrastText,backgroundColor:a.palette[i.color].main},"inherit"===i.color&&{color:"inherit",borderColor:"currentColor"},"small"===i.size&&"text"===i.variant&&{padding:"4px 5px",fontSize:a.typography.pxToRem(13)},"large"===i.size&&"text"===i.variant&&{padding:"8px 11px",fontSize:a.typography.pxToRem(15)},"small"===i.size&&"outlined"===i.variant&&{padding:"3px 9px",fontSize:a.typography.pxToRem(13)},"large"===i.size&&"outlined"===i.variant&&{padding:"7px 21px",fontSize:a.typography.pxToRem(15)},"small"===i.size&&"contained"===i.variant&&{padding:"4px 10px",fontSize:a.typography.pxToRem(13)},"large"===i.size&&"contained"===i.variant&&{padding:"8px 22px",fontSize:a.typography.pxToRem(15)},i.fullWidth&&{width:"100%"})}),(function(t){var e;return t.styleProps.disableElevation&&(e={boxShadow:"none","&:hover":{boxShadow:"none"}},Object(o.a)(e,"&.".concat(v.focusVisible),{boxShadow:"none"}),Object(o.a)(e,"&:active",{boxShadow:"none"}),Object(o.a)(e,"&.".concat(v.disabled),{boxShadow:"none"}),e)})),y=Object(s.a)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(t,e){var a=t.styleProps;return[e.startIcon,e["iconSize".concat(Object(u.a)(a.size))]]}})((function(t){var e=t.styleProps;return Object(n.a)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},g(e))})),z=Object(s.a)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(t,e){var a=t.styleProps;return[e.endIcon,e["iconSize".concat(Object(u.a)(a.size))]]}})((function(t){var e=t.styleProps;return Object(n.a)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},g(e))})),S=r.forwardRef((function(t,e){var a=Object(b.a)({props:t,name:"MuiButton"}),o=a.children,r=a.color,d=void 0===r?"primary":r,s=a.component,p=void 0===s?"button":s,h=a.disabled,x=void 0!==h&&h,v=a.disableElevation,g=void 0!==v&&v,S=a.disableFocusRipple,k=void 0!==S&&S,W=a.endIcon,R=a.focusVisibleClassName,w=a.fullWidth,C=void 0!==w&&w,I=a.size,P=void 0===I?"medium":I,M=a.startIcon,E=a.type,L=a.variant,B=void 0===L?"text":L,G=Object(i.a)(a,j),T=Object(n.a)({},a,{color:d,component:p,disabled:x,disableElevation:g,disableFocusRipple:k,fullWidth:C,size:P,type:E,variant:B}),N=function(t){var e=t.color,a=t.disableElevation,o=t.fullWidth,i=t.size,r=t.variant,c=t.classes,d={root:["root",r,"".concat(r).concat(Object(u.a)(e)),"size".concat(Object(u.a)(i)),"".concat(r,"Size").concat(Object(u.a)(i)),"inherit"===e&&"colorInherit",a&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat(Object(u.a)(i))],endIcon:["endIcon","iconSize".concat(Object(u.a)(i))]},s=Object(l.a)(d,m,c);return Object(n.a)({},c,s)}(T),V=M&&Object(f.jsx)(y,{className:N.startIcon,styleProps:T,children:M}),F=W&&Object(f.jsx)(z,{className:N.endIcon,styleProps:T,children:W});return Object(f.jsxs)(O,Object(n.a)({styleProps:T,component:p,disabled:x,focusRipple:!k,focusVisibleClassName:Object(c.a)(N.focusVisible,R),ref:e,type:E},G,{classes:N,children:[V,o,F]}))}));e.a=S},694:function(t,e,a){"use strict";var o=a(11),i=a(7),n=a(3),r=a(0),c=(a(16),a(133)),l=a(719),d=a(47),s=a(132),b=a(720),p=a(721);function u(t){return Object(b.a)("MuiContainer",t)}Object(p.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var h=a(134),x=a(1),m=["className","component","disableGutters","fixed","maxWidth"],v=Object(s.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var a=t.styleProps;return[e.root,e["maxWidth".concat(Object(h.a)(String(a.maxWidth)))],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,a=t.styleProps;return Object(n.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&Object(o.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.styleProps.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,a){var o=e.breakpoints.values[a];return 0!==o&&(t[e.breakpoints.up(a)]={maxWidth:"".concat(o).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,a=t.styleProps;return Object(n.a)({},"xs"===a.maxWidth&&Object(o.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&Object(o.a)({},e.breakpoints.up(a.maxWidth),{maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)}))})),f=r.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiContainer"}),o=a.className,r=a.component,s=void 0===r?"div":r,b=a.disableGutters,p=void 0!==b&&b,f=a.fixed,j=void 0!==f&&f,g=a.maxWidth,O=void 0===g?"lg":g,y=Object(i.a)(a,m),z=Object(n.a)({},a,{component:s,disableGutters:p,fixed:j,maxWidth:O}),S=function(t){var e=t.classes,a=t.fixed,o=t.disableGutters,i=t.maxWidth,n={root:["root",i&&"maxWidth".concat(Object(h.a)(String(i))),a&&"fixed",o&&"disableGutters"]};return Object(l.a)(n,u,e)}(z);return Object(x.jsx)(v,Object(n.a)({as:s,styleProps:z,className:Object(c.a)(S.root,o),ref:e},y))}));e.a=f},726:function(t,e,a){"use strict";a.r(e);a(0);var o=a(775),i=a(694),n=a(776),r=a(236),c=a(31),l=a(150),d=a(1);e.default=function(){return Object(d.jsx)(l.a,{title:"Error",description:"this is Error page",children:Object(d.jsx)(o.a,{display:"flex",flexDirection:"column",height:"100vh",textAlign:"center",justifyContent:"center",sx:{backgroundColor:"#e4f5ff"},children:Object(d.jsxs)(i.a,{maxWidth:"md",children:[Object(d.jsx)(n.a,{align:"center",variant:"h1",sx:{pt:2,color:function(t){return"".concat((t.palette.mode,"rgba(0, 0, 0, 0.87)"))}},children:"404"}),Object(d.jsx)(n.a,{align:"center",variant:"h4",sx:{pt:1,pb:3,color:function(t){return"".concat((t.palette.mode,"rgba(0, 0, 0, 0.87)"))}},children:"This page could not be found."}),Object(d.jsx)(r.a,{color:"primary",variant:"contained",component:c.b,to:"/",disableElevation:!0,children:"Back to Home"})]})})})}}}]);
//# sourceMappingURL=56.642d865f.chunk.js.map