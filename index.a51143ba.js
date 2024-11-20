let t=t=>crypto.getRandomValues(new Uint8Array(t));const e=((e,l=21)=>((t,e,l)=>{let n=(2<<Math.log2(t.length-1))-1,o=-~(1.6*n*e/t.length);return(r=e)=>{let g="";for(;;){let e=l(o),a=o;for(;a--;)if(g+=t[e[a]&n]||"",g.length===r)return g}}})(e,l,t))("abc123",5)();console.log(e);
//# sourceMappingURL=index.a51143ba.js.map
