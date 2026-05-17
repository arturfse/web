(()=>{var D=Object.defineProperty;var L=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var T=(r,t,n)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,_=(r,t)=>{for(var n in t||(t={}))A.call(t,n)&&T(r,n,t[n]);if(L)for(var n of L(t))B.call(t,n)&&T(r,n,t[n]);return r};const P=`
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;function X(r){const[t,n]=React.useState(r),o=React.useCallback((a,d)=>{const i=typeof a=="object"&&a!==null?a:{[a]:d};n(c=>_(_({},c),i)),window.parent.postMessage({type:"__edit_mode_set_keys",edits:i},"*"),window.dispatchEvent(new CustomEvent("tweakchange",{detail:i}))},[]);return[t,o]}function V({title:r="Tweaks",noDeckControls:t=!1,children:n}){const[o,a]=React.useState(!1),d=React.useRef(null),i=React.useMemo(()=>typeof document!="undefined"&&!!document.querySelector("deck-stage"),[]),[c,h]=React.useState(()=>{var e;return i&&!!((e=document.querySelector("deck-stage"))!=null&&e._railEnabled)});React.useEffect(()=>{if(!i||c)return;const e=s=>{s.data&&s.data.type==="__omelette_rail_enabled"&&h(!0)};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[i,c]);const[k,b]=React.useState(()=>{try{return localStorage.getItem("deck-stage.railVisible")!=="0"}catch(e){return!0}}),x=e=>{b(e),window.postMessage({type:"__deck_rail_visible",on:e},"*")},l=React.useRef({x:16,y:16}),u=16,g=React.useCallback(()=>{const e=d.current;if(!e)return;const s=e.offsetWidth,p=e.offsetHeight,w=Math.max(u,window.innerWidth-s-u),v=Math.max(u,window.innerHeight-p-u);l.current={x:Math.min(w,Math.max(u,l.current.x)),y:Math.min(v,Math.max(u,l.current.y))},e.style.right=l.current.x+"px",e.style.bottom=l.current.y+"px"},[]);React.useEffect(()=>{if(!o)return;if(g(),typeof ResizeObserver=="undefined")return window.addEventListener("resize",g),()=>window.removeEventListener("resize",g);const e=new ResizeObserver(g);return e.observe(document.documentElement),()=>e.disconnect()},[o,g]),React.useEffect(()=>{const e=s=>{var w;const p=(w=s==null?void 0:s.data)==null?void 0:w.type;p==="__activate_edit_mode"?a(!0):p==="__deactivate_edit_mode"&&a(!1)};return window.addEventListener("message",e),window.parent.postMessage({type:"__edit_mode_available"},"*"),()=>window.removeEventListener("message",e)},[]);const y=()=>{a(!1),window.parent.postMessage({type:"__edit_mode_dismissed"},"*")},f=e=>{const s=d.current;if(!s)return;const p=s.getBoundingClientRect(),w=e.clientX,v=e.clientY,R=window.innerWidth-p.right,j=window.innerHeight-p.bottom,N=E=>{l.current={x:R-(E.clientX-w),y:j-(E.clientY-v)},g()},S=()=>{window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",S)};window.addEventListener("mousemove",N),window.addEventListener("mouseup",S)};return o?React.createElement(React.Fragment,null,React.createElement("style",null,P),React.createElement("div",{ref:d,className:"twk-panel","data-noncommentable":"",style:{right:l.current.x,bottom:l.current.y}},React.createElement("div",{className:"twk-hd",onMouseDown:f},React.createElement("b",null,r),React.createElement("button",{className:"twk-x","aria-label":"Close tweaks",onMouseDown:e=>e.stopPropagation(),onClick:y},"\u2715")),React.createElement("div",{className:"twk-body"},n,i&&c&&!t&&React.createElement(M,{label:"Deck"},React.createElement(z,{label:"Thumbnail rail",value:k,onChange:x}))))):null}function M({label:r,children:t}){return React.createElement(React.Fragment,null,React.createElement("div",{className:"twk-sect"},r),t)}function m({label:r,value:t,children:n,inline:o=!1}){return React.createElement("div",{className:o?"twk-row twk-row-h":"twk-row"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,r),t!=null&&React.createElement("span",{className:"twk-val"},t)),n)}function W({label:r,value:t,min:n=0,max:o=100,step:a=1,unit:d="",onChange:i}){return React.createElement(m,{label:r,value:`${t}${d}`},React.createElement("input",{type:"range",className:"twk-slider",min:n,max:o,step:a,value:t,onChange:c=>i(Number(c.target.value))}))}function z({label:r,value:t,onChange:n}){return React.createElement("div",{className:"twk-row twk-row-h"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,r)),React.createElement("button",{type:"button",className:"twk-toggle","data-on":t?"1":"0",role:"switch","aria-checked":!!t,onClick:()=>n(!t)},React.createElement("i",null)))}function $({label:r,value:t,options:n,onChange:o}){var f;const a=React.useRef(null),[d,i]=React.useState(!1),c=React.useRef(t);c.current=t;const h=e=>String(typeof e=="object"?e.label:e).length;if(!(n.reduce((e,s)=>Math.max(e,h(s)),0)<=((f={2:16,3:10}[n.length])!=null?f:0))){const e=s=>{const p=n.find(w=>String(typeof w=="object"?w.value:w)===s);return p===void 0?s:typeof p=="object"?p.value:p};return React.createElement(C,{label:r,value:t,options:n,onChange:s=>o(e(s))})}const x=n.map(e=>typeof e=="object"?e:{value:e,label:e}),l=Math.max(0,x.findIndex(e=>e.value===t)),u=x.length,g=e=>{const s=a.current.getBoundingClientRect(),p=s.width-4,w=Math.floor((e-s.left-2)/p*u);return x[Math.max(0,Math.min(u-1,w))].value};return React.createElement(m,{label:r},React.createElement("div",{ref:a,role:"radiogroup",onPointerDown:e=>{i(!0);const s=g(e.clientX);s!==c.current&&o(s);const p=v=>{if(!a.current)return;const R=g(v.clientX);R!==c.current&&o(R)},w=()=>{i(!1),window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",w)};window.addEventListener("pointermove",p),window.addEventListener("pointerup",w)},className:d?"twk-seg dragging":"twk-seg"},React.createElement("div",{className:"twk-seg-thumb",style:{left:`calc(2px + ${l} * (100% - 4px) / ${u})`,width:`calc((100% - 4px) / ${u})`}}),x.map(e=>React.createElement("button",{key:e.value,type:"button",role:"radio","aria-checked":e.value===t},e.label))))}function C({label:r,value:t,options:n,onChange:o}){return React.createElement(m,{label:r},React.createElement("select",{className:"twk-field",value:t,onChange:a=>o(a.target.value)},n.map(a=>{const d=typeof a=="object"?a.value:a,i=typeof a=="object"?a.label:a;return React.createElement("option",{key:d,value:d},i)})))}function I({label:r,value:t,placeholder:n,onChange:o}){return React.createElement(m,{label:r},React.createElement("input",{className:"twk-field",type:"text",value:t,placeholder:n,onChange:a=>o(a.target.value)}))}function Y({label:r,value:t,min:n,max:o,step:a=1,unit:d="",onChange:i}){const c=b=>n!=null&&b<n?n:o!=null&&b>o?o:b,h=React.useRef({x:0,val:0});return React.createElement("div",{className:"twk-num"},React.createElement("span",{className:"twk-num-lbl",onPointerDown:b=>{b.preventDefault(),h.current={x:b.clientX,val:t};const x=(String(a).split(".")[1]||"").length,l=g=>{const y=g.clientX-h.current.x,f=h.current.val+y*a,e=Math.round(f/a)*a;i(c(Number(e.toFixed(x))))},u=()=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",u)};window.addEventListener("pointermove",l),window.addEventListener("pointerup",u)}},r),React.createElement("input",{type:"number",value:t,min:n,max:o,step:a,onChange:b=>i(c(Number(b.target.value)))}),d&&React.createElement("span",{className:"twk-num-unit"},d))}function H(r){const t=String(r).replace("#",""),n=t.length===3?t.replace(/./g,c=>c+c):t.padEnd(6,"0"),o=parseInt(n.slice(0,6),16);if(Number.isNaN(o))return!0;const a=o>>16&255,d=o>>8&255,i=o&255;return a*299+d*587+i*114>148e3}const q=({light:r})=>React.createElement("svg",{viewBox:"0 0 14 14","aria-hidden":"true"},React.createElement("path",{d:"M3 7.2 5.8 10 11 4.2",fill:"none",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",stroke:r?"rgba(0,0,0,.78)":"#fff"}));function O({label:r,value:t,options:n,onChange:o}){if(!n||!n.length)return React.createElement("div",{className:"twk-row twk-row-h"},React.createElement("div",{className:"twk-lbl"},React.createElement("span",null,r)),React.createElement("input",{type:"color",className:"twk-swatch",value:t,onChange:i=>o(i.target.value)}));const a=i=>String(JSON.stringify(i)).toLowerCase(),d=a(t);return React.createElement(m,{label:r},React.createElement("div",{className:"twk-chips",role:"radiogroup"},n.map((i,c)=>{const h=Array.isArray(i)?i:[i],[k,...b]=h,x=b.slice(0,4),l=a(i)===d;return React.createElement("button",{key:c,type:"button",className:"twk-chip",role:"radio","aria-checked":l,"data-on":l?"1":"0","aria-label":h.join(", "),title:h.join(" \xB7 "),style:{background:k},onClick:()=>o(i)},x.length>0&&React.createElement("span",null,x.map((u,g)=>React.createElement("i",{key:g,style:{background:u}}))),l&&React.createElement(q,{light:H(k)}))})))}function F({label:r,onClick:t,secondary:n=!1}){return React.createElement("button",{type:"button",className:n?"twk-btn secondary":"twk-btn",onClick:t},r)}Object.assign(window,{useTweaks:X,TweaksPanel:V,TweakSection:M,TweakRow:m,TweakSlider:W,TweakToggle:z,TweakRadio:$,TweakSelect:C,TweakText:I,TweakNumber:Y,TweakColor:O,TweakButton:F});})();
