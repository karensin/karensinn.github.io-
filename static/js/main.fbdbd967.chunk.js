(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},19:function(e,a,t){},24:function(e,a,t){e.exports=t(40)},29:function(e,a,t){},35:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),s=t.n(l),i=t(47),o=(t(29),t(3)),c=t(4),m=t(6),u=t(5),p=t(7),h=(t(15),t(16),t(43)),d=t(44),b=t(45),f=(t(19),t(21)),E=t.n(f),g=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("a",{href:this.props.linkSrc,className:this.props.className,style:{width:"300px",height:"300px",backgroundImage:"url("+this.props.imgSrc+")"}},r.a.createElement("div",{className:"projectName"},this.props.projName)),this.props.children)}}]),a}(n.Component),v=E()()(g),w=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{fluid:!0},r.a.createElement(d.a,{className:"projectsBox"},r.a.createElement(b.a,null,r.a.createElement(v,{className:"projectBox",imgSrc:"/portfolio2019/images/MeeseeksBox.jpg",linkSrc:"https://www.facebook.com/meeseeksBox2019",projName:"Meeseeks Bot"},r.a.createElement("p",{className:"description"}," Meeseeks bot is a messenger bot that is designed to perform automated voice and text message responses. This technology required webhooks for token verification and special features to make the user experience more entertaining and exciting."))),r.a.createElement(b.a,null,r.a.createElement(v,{className:"projectBox",imgSrc:"/portfolio2019/images/bloccit.jpg",linkSrc:"https://karensin-bloccit.herokuapp.com/",projName:"Bloccit"},r.a.createElement("p",{className:"description"}," An Application that uses the Model-View-Controller Pattern (MVC) to handle a seperation of concerns, allowing easier manipulation in sections and functionality. Application utilizes ExpressJS - Middleware to perform authentication and validation which allows users to sign up, sign in and create topics, posts, comments and votes amongst others."))),r.a.createElement(b.a,null,r.a.createElement(v,{className:"projectBox",imgSrc:"/portfolio2019/images/Chatty.png",linkSrc:"https://chat-ty.herokuapp.com/",projName:"Chatty"},r.a.createElement("p",{className:"description"}," An application based on Firebase (BaaS) that authenticate users using Google sign-in, sends and recieves messages in real time"))),r.a.createElement(b.a,null,r.a.createElement(v,{className:"projectBox",imgSrc:"/portfolio2019/images/musicPlayer.jpg",linkSrc:"https://jams-ksin.herokuapp.com/",projName:"MusicPlayer"},r.a.createElement("p",{className:"description"}," A music player made using React Router to create a Single-Page Application to handle client-side page transitions")))))}}]),a}(n.Component),y=(t(35),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"bubble",style:{left:this.props.x,top:this.props.y,transform:"scale("+this.props.size+")",position:"absolute"}})}}]),a}(n.Component)),k=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("article",null,r.a.createElement("img",{className:"resume",src:"/portfolio2019/images/KarenResume1.jpg"}),r.a.createElement("img",{className:"resume",src:"/portfolio2019/images/KarenResume2.jpg"}))}}]),a}(n.Component),j=t(46);function N(e,a){return Math.random()*(a-e)+e}var O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).state={x:0,y:0,bubbles:[]},t}return Object(p.a)(a,e),Object(c.a)(a,[{key:"_onMouseMove",value:function(e){var a=+new Date;if(a>this.state.lastBubbleStamp+N(50,1e3)){var t=Math.random()>.5?-1:1;this.state.bubbles.push({x:e.pageX,y:e.pageY,size:N(.02,.14),direction:t,lastTurnTime:a,lastGrowTime:a}),this.setState({lastBubbleStamp:a})}}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"updateBubbles",value:function(){if(this.state){var e=+new Date,a=this.state.bubbles.map(function(a){var t=a.direction,n=a.lastTurnTime,r=a.lastGrowTime,l=a.size;return e>n+N(2e3,6e3)&&(t=-t,n=e),e>r+N(100,200)&&(r=e,l+=N(.001,.003)),a.y<0?null:{x:a.x+.3*t,y:a.y-2.5,size:l,direction:t,lastTurnTime:n,lastGrowTime:r}}).filter(function(e){return null!==e});this.setState({bubbles:a})}}},{key:"componentDidMount",value:function(){this.setState({lastBubbleStamp:+new Date}),this.interval=setInterval(this.updateBubbles.bind(this),20)}},{key:"render",value:function(){var e=this.state.bubbles.map(function(e,a){return r.a.createElement(y,{x:e.x,y:e.y,size:e.size,key:a})});return r.a.createElement("div",{className:"App",onMouseMove:this._onMouseMove.bind(this)},r.a.createElement("div",{className:"bob"},e),r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#contacts"},"Contact")),r.a.createElement("li",null,r.a.createElement(j.a,{to:"/about"},"About Me")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{href:"/portfolio2019"}," Home ")," ")))),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null," KAREN SIN "),r.a.createElement("h4",null," Developer | Web designer | Data Analyst "),r.a.createElement("a",{href:"#contacts",className:"btn"}," Let's Collab!")))),r.a.createElement("section",{className:"projects",id:"projects"},r.a.createElement(w,null)),r.a.createElement("section",{className:"resume",id:"resume"},r.a.createElement(k,null)),r.a.createElement("section",{className:"contacts",id:"contacts"},r.a.createElement("h3",null," Get in touch "),r.a.createElement("a",null,"  kkwsin@gmail.com  "),r.a.createElement("a",{href:"https://www.linkedin.com/in/karensin94/"},"  Linkedin  "),r.a.createElement("a",{href:"https://github.com/karensin"},"  Github   "),r.a.createElement("a",{href:"https://angel.co/karen-kaweng-sin"}," Angel.co ")),r.a.createElement("footer",null," KarenSin 2019"))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.Component;var S=t(48),x=t(49),M=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(p.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"#contacts"},"Contact")),r.a.createElement("li",null,r.a.createElement("a",{href:"/portfolio2019/about"},"About Me")),r.a.createElement("li",null,r.a.createElement("a",{href:"#projects"},"Projects")),r.a.createElement("li",null,r.a.createElement("a",{href:"#resume"},"Resume")),r.a.createElement("li",null,r.a.createElement("a",{href:"/portfolio2019"}," Home ")," ")))),r.a.createElement("h3",{className:"title"}," Hello There... "))),r.a.createElement("section",{className:"aboutme"},r.a.createElement("h3",{className:"titleName"},"Experience... "),r.a.createElement("p",{className:"aboutme"},"I am a web designer/ developer /former data analyst based in San Francisco, California. I am passionate in frontend development and technology. My goals are to focus on typography and create simple and user friendly UI/UX experience. My experience at Apple allowed me to work and improve as a team player. I worked closely with designers on new map features which included planning out workflows on the delivery of the features to maximize discoverability, interface behaviors, and how information is being navigated and displayed. I built analytics dashboards with PostgreSQL, ArcGIS, and QGIS to report on traffic and road alterations via large datasets."),r.a.createElement("h3",{className:"titleName"},"Values... "),r.a.createElement("p",{className:"aboutme "},"Growing up from a traditional Chinese family, my parents taught me to be someone that is responsible, empathic and respect others. With the morals and values they taught me, it has helped me in growing to be a great team player and a leader. I was the president of an animal welfare club and led a group 35 students to learn and educate others on animal rights and welfare, rehabilitating strays / abandoned companion animals back to the society. I am also an active lead in both Solano animal shelter and San Francisco SPCA in rehabilitating companion animals.")),r.a.createElement("section",{className:"contacts"},r.a.createElement("a",null,"  kkwsin@gmail.com  "),r.a.createElement("a",{href:"https://www.linkedin.com/in/karensin94/"},"  Linkedin  "),r.a.createElement("a",{href:"https://github.com/karensin"},"  Github   "),r.a.createElement("a",{href:"https://angel.co/karen-kaweng-sin"}," Angel.co ")),r.a.createElement("footer",null," Karensin 2019 "))}}]),a}(n.Component);s.a.render(r.a.createElement(i.a,{basename:"/portfolio2019"},r.a.createElement(S.a,null,r.a.createElement(x.a,{exact:!0,path:"/",component:O}),r.a.createElement(x.a,{path:"/about",component:M}),r.a.createElement(x.a,{path:"/resume",component:k}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.fbdbd967.chunk.js.map