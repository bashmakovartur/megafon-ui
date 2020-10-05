(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{J8oQ:function(e,a,r){"use strict";r.r(a),r.d(a,"_frontmatter",(function(){return i})),r.d(a,"default",(function(){return m}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk");var n=r("/FXl"),t=r("TjRS"),o=r("ZFoC"),c=r("jbw6"),p=r("0JHu");r("aD51");function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"packages/ui-core/src/components/Search/Search.mdx"}});var s={_frontmatter:i},h=t.a;function m(e){var a,r,m,l,b,d=e.components,S=function(e,a){if(null==e)return{};var r,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,["components"]);return Object(n.b)(h,u({},s,S,{components:d,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"search"},"Search"),Object(n.b)("h2",{id:"properties"},"Properties"),Object(n.b)(o.d,{of:c.a,mdxType:"Props"}),Object(n.b)("pre",null,Object(n.b)("code",u({parentName:"pre"},{className:"language-javascript"}),"export const DemoSearchWrapper: React.FC<IDemoSearchWrapperProps> = ({ children }) => {\n    const [value, setValue] = React.useState('');\n    const [items, setItems] = React.useState([]);\n\n    const handleChange = React.useCallback((query: string) => {\n        if (!query) {\n            return;\n        }\n\n        setItems((oldItems) => [...oldItems, query]);\n    }, [items, setItems]);\n\n    return (\n        <div>\n            <p style={{ marginTop: 0 }}>Value: {value}</p>\n            {children({ onChange: handleChange, onSubmit: setValue, items: items, chosenValue: value })}\n        </div>\n    );\n};\n")),Object(n.b)("h2",{id:"basic-usage"},"Basic usage"),Object(n.b)(o.c,{__position:1,__code:'<DemoSearchWrapper>\n  {({ onSubmit }) => (\n    <Search onSubmit={onSubmit} placeholder="Type here and press ENTER" />\n  )}\n</DemoSearchWrapper>',__scope:(a={props:S,DefaultLayout:t.a,Playground:o.c,Props:o.d,Search:c.a,DemoSearchWrapper:p.a},a.DefaultLayout=t.a,a._frontmatter=i,a),mdxType:"Playground"},Object(n.b)(p.a,{mdxType:"DemoSearchWrapper"},(function(e){var a=e.onSubmit;return Object(n.b)(c.a,{onSubmit:a,placeholder:"Type here and press ENTER",mdxType:"Search"})}))),Object(n.b)("h2",{id:"usage-without-icon"},"Usage without icon"),Object(n.b)(o.c,{__position:2,__code:"<Search hideIcon />",__scope:(r={props:S,DefaultLayout:t.a,Playground:o.c,Props:o.d,Search:c.a,DemoSearchWrapper:p.a},r.DefaultLayout=t.a,r._frontmatter=i,r),mdxType:"Playground"},Object(n.b)(c.a,{hideIcon:!0,mdxType:"Search"})),Object(n.b)("h2",{id:"usage-with-initial-value"},"Usage with initial value"),Object(n.b)(o.c,{__position:3,__code:'<DemoSearchWrapper>\n  {({ onSubmit }) => (\n    <Search\n      placeholder="Type here for search"\n      value="Previous request"\n      onSubmit={onSubmit}\n    />\n  )}\n</DemoSearchWrapper>',__scope:(m={props:S,DefaultLayout:t.a,Playground:o.c,Props:o.d,Search:c.a,DemoSearchWrapper:p.a},m.DefaultLayout=t.a,m._frontmatter=i,m),mdxType:"Playground"},Object(n.b)(p.a,{mdxType:"DemoSearchWrapper"},(function(e){var a=e.onSubmit;return Object(n.b)(c.a,{placeholder:"Type here for search",value:"Previous request",onSubmit:a,mdxType:"Search"})}))),Object(n.b)("h2",{id:"usage-with-onchange-callback"},"Usage with onChange callback"),Object(n.b)(o.c,{__position:4,__code:'<DemoSearchWrapper>\n  {({ onSubmit }) => (\n    <Search\n      placeholder="Type here for search"\n      onChange={onSubmit}\n      changeDelay={50}\n    />\n  )}\n</DemoSearchWrapper>',__scope:(l={props:S,DefaultLayout:t.a,Playground:o.c,Props:o.d,Search:c.a,DemoSearchWrapper:p.a},l.DefaultLayout=t.a,l._frontmatter=i,l),mdxType:"Playground"},Object(n.b)(p.a,{mdxType:"DemoSearchWrapper"},(function(e){var a=e.onSubmit;return Object(n.b)(c.a,{placeholder:"Type here for search",onChange:a,changeDelay:50,mdxType:"Search"})}))),Object(n.b)("h2",{id:"usage-with-emulating-incomingdata"},"Usage with emulating incomingData"),Object(n.b)(o.c,{__position:5,__code:'<DemoSearchWrapper>\n  {({ onSubmit, chosenValue, items, onChange }) => (\n    <Search\n      value={chosenValue}\n      items={items}\n      placeholder="Type and wait for results"\n      onChange={onChange}\n      onSubmit={onSubmit}\n    />\n  )}\n</DemoSearchWrapper>',__scope:(b={props:S,DefaultLayout:t.a,Playground:o.c,Props:o.d,Search:c.a,DemoSearchWrapper:p.a},b.DefaultLayout=t.a,b._frontmatter=i,b),mdxType:"Playground"},Object(n.b)(p.a,{mdxType:"DemoSearchWrapper"},(function(e){var a=e.onSubmit,r=e.chosenValue,t=e.items,o=e.onChange;return Object(n.b)(c.a,{value:r,items:t,placeholder:"Type and wait for results",onChange:o,onSubmit:a,mdxType:"Search"})}))))}void 0!==m&&m&&m===Object(m)&&Object.isExtensible(m)&&!m.hasOwnProperty("__filemeta")&&Object.defineProperty(m,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"packages/ui-core/src/components/Search/Search.mdx"}}),m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-ui-core-src-components-search-search-mdx-ec702fef3702a13546d1.js.map