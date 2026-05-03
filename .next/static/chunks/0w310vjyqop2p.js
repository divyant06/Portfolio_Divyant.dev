;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="6a25b4e9-b1bb-a562-66d5-7441eb65f90d")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,79589,e=>{"use strict";var t=e.i(65320),r=e.i(5155);e.s(["CobeGlobe",0,function(){let e=(0,r.useRef)(null),[i,n]=(0,r.useState)(0),[s,a]=(0,r.useState)(!1),o=(0,r.useRef)(0),l=(0,r.useRef)(0),d=(0,r.useRef)(0);(0,r.useEffect)(()=>{if(s)return;let e=performance.now(),t=r=>{let i=r-e;e=r,n(e=>e+.012*i),d.current=requestAnimationFrame(t)};return d.current=requestAnimationFrame(t),()=>cancelAnimationFrame(d.current)},[s]);let p=()=>{a(!1)},u=(e,r,i)=>(0,t.jsx)("pattern",{id:i,width:e,height:e,patternUnits:"userSpaceOnUse",children:(0,t.jsx)("circle",{cx:e/2,cy:e/2,r:1.2,fill:`rgba(220,220,230,${r})`})});return(0,t.jsxs)("div",{ref:e,style:{width:"100%",maxWidth:"380px",aspectRatio:"1",margin:"0 auto",position:"relative",cursor:s?"grabbing":"grab"},onPointerDown:e=>{a(!0),o.current=e.clientX,l.current=i},onPointerMove:e=>{if(!s)return;let t=e.clientX-o.current;n(l.current+.5*t)},onPointerUp:p,onPointerLeave:p,children:[(0,t.jsx)("div",{style:{position:"absolute",inset:"-12px",borderRadius:"50%",zIndex:0,background:"radial-gradient(circle at 50% 50%, rgba(255,69,0,0.10) 0%, transparent 68%)",filter:"blur(8px)",pointerEvents:"none"}}),(0,t.jsxs)("div",{style:{width:"100%",height:"100%",borderRadius:"50%",position:"relative",overflow:"hidden",zIndex:1,background:`radial-gradient(
          circle at 32% 32%,
          rgba(45,45,50,1) 0%,
          rgba(18,18,20,1) 40%,
          rgba(6,6,8,1) 72%,
          rgba(1,1,2,1) 100%
        )`,boxShadow:`
          0 0 80px rgba(255,69,0,0.12),
          0 0 20px rgba(255,69,0,0.06),
          inset -6px -6px 28px rgba(0,0,0,0.9),
          inset 3px 3px 12px rgba(120,120,130,0.08)
        `},children:[(0,t.jsxs)("svg",{style:{position:"absolute",inset:"-20%",width:"140%",height:"140%",transform:`rotateY(${i}deg) rotateX(12deg)`,transformStyle:"preserve-3d",opacity:.75},xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("defs",{children:u(7,.65,"dots-main")}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#dots-main)"})]}),(0,t.jsxs)("svg",{style:{position:"absolute",inset:"-10%",width:"120%",height:"120%",transform:`rotateY(${.65*i}deg) rotateX(-10deg)`,transformStyle:"preserve-3d",opacity:.35},xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("defs",{children:u(5,.5,"dots-layer2")}),(0,t.jsx)("rect",{width:"100%",height:"100%",fill:"url(#dots-layer2)"})]}),(0,t.jsx)("div",{style:{position:"absolute",inset:0,borderRadius:"50%",pointerEvents:"none",background:`radial-gradient(circle at 50% 50%,
            transparent 58%,
            rgba(255,69,0,0.18) 74%,
            rgba(255,69,0,0.10) 86%,
            rgba(255,30,0,0.04) 100%
          )`}}),(0,t.jsx)("div",{style:{position:"absolute",top:"6%",left:"18%",width:"38%",height:"26%",borderRadius:"50%",pointerEvents:"none",background:"radial-gradient(ellipse, rgba(255,255,255,0.08) 0%, transparent 70%)"}}),(0,t.jsxs)("div",{style:{position:"absolute",top:"42%",left:"62%",zIndex:2,pointerEvents:"none",transform:`translateX(${20*Math.sin(i*Math.PI/180)}px)`},children:[(0,t.jsx)("div",{style:{width:"28px",height:"28px",borderRadius:"50%",background:"rgba(255,69,0,0.2)",position:"absolute",top:"-10px",left:"-10px",animation:"globePulse 1.8s ease-in-out infinite"}}),(0,t.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"50%",background:"rgba(255,69,0,0.35)",position:"absolute",top:"-4px",left:"-4px",animation:"globePulse 1.8s ease-in-out infinite 0.4s"}}),(0,t.jsx)("div",{style:{width:"9px",height:"9px",borderRadius:"50%",background:"#FF4500",boxShadow:"0 0 14px 4px rgba(255,69,0,0.9), 0 0 28px rgba(255,69,0,0.5)"}})]})]}),(0,t.jsx)("style",{children:`
        @keyframes globePulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(2); opacity: 0; }
        }
      `})]})}])},81546,e=>{e.n(e.i(79589))}]);

//# debugId=6a25b4e9-b1bb-a562-66d5-7441eb65f90d