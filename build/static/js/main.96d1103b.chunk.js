(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),o=a.n(c),l=a(6),s=a.n(l),i=a(17),u=a(2),m=a(3),p=a(5),h=a(4),d=a(18),v=a.n(d),f=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={longUrl:""},e.onShortenClick=function(){""!==e.state.longUrl&&e.props.onShorten(e.state.longUrl)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("label",{className:"label"},"Paste the URL to be shortened"),r.a.createElement("div",{className:"field is-grouped"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{className:"input",type:"url",placeholder:"e.g. https://www.thitiphon.me",onChange:function(t){return e.setState({longUrl:t.target.value})},value:this.state.longUrl})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{className:"button is-info",onClick:this.onShortenClick},"Shorten!"))))}}]),a}(n.Component),b=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={copySuccess:!1},e.copyCodeToClipboard=function(){e.textArea.select(),document.execCommand("copy"),e.setState({copySuccess:!0})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return this.props.payload?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"field has-addons"},r.a.createElement("div",{className:"control is-expanded"},r.a.createElement("input",{ref:function(t){return e.textArea=t},readOnly:!0,className:"input",type:"text",value:this.props.payload.shortUrl})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{onClick:function(){return e.copyCodeToClipboard()},className:"button"},"Copy Me!"))),r.a.createElement("p",{className:"help is-success"},this.state.copySuccess?"copied!":""))):r.a.createElement("div",null)}}]),a}(n.Component),y=(a(42),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={payload:null},e.onShorten=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.post("https://asia-east2-thitiph0n-url-shortener.cloudfunctions.net/api/shorten",{longUrl:a});case 2:n=t.sent,e.setState({payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"logo hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Thitiphon.me"),r.a.createElement("h2",{className:"subtitle"},"URL Shortener Service")))),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement(f,{onShorten:this.onShorten}),r.a.createElement("br",null),r.a.createElement(b,{payload:this.state.payload}))))}}]),a}(n.Component));o.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.96d1103b.chunk.js.map