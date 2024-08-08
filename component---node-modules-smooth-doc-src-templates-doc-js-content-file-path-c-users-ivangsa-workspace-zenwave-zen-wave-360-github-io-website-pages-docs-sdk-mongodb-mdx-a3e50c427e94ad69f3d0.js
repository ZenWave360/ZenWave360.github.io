"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[313],{7355:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(27378),r=t(20951);function o(e){const n=Object.assign({h1:"h1",a:"a",div:"div",p:"p",h2:"h2",code:"code",pre:"pre"},(0,r.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(n.h1,{id:"backend-application-with-mongodb",style:{position:"relative"}},a.createElement(n.a,{href:"#backend-application-with-mongodb","aria-label":"backend application with mongodb permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Backend Application with MongoDB"),"\n",a.createElement(n.p,null,"With MongoDB each DDD Aggregate becomes a Collection Document."),"\n",a.createElement(n.p,null,"With a Documental Database like MongoDB, mapping OneToMany and OneToOne relationships is trivial because they are represented as nested documents."),"\n",a.createElement(n.p,null,"On the other hand ManyToOne and ManyToMany relationships needs a little more thought, and it greatly depends on the use case how you decide to denormalize the data."),"\n",a.createElement(n.h2,{id:"onetomany-and-onetoone-with-direct-references",style:{position:"relative"}},a.createElement(n.a,{href:"#onetomany-and-onetoone-with-direct-references","aria-label":"onetomany and onetoone with direct references permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"OneToMany and OneToOne with Direct References"),"\n",a.createElement(n.p,null,"With ZenWave ZDL you map OneToOne and OneToMany relationships as direct references to ",a.createElement(n.code,null,"@embedded")," entities:"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},"@aggregate\r\n@auditting\r\nentity Customer {\r\n  username String required unique /** username javadoc comment */\r\n  email String required unique /** email javadoc comment */\r\n  tags String[] /** tags javadoc comment */\r\n  /**\r\n   * addresses is a direct reference to an embedded entity\r\n   */\r\n  addresses Address[]\r\n}\r\n\r\n@embedded\r\nentity Address {\r\n    street String /** street javadoc comment */\r\n    city String /** city javadoc comment */\r\n    state String /** state javadoc comment */\r\n    zip String /** zip javadoc comment */\r\n    type AddressType /** address type is an enum */\r\n}\n")),"\n",a.createElement(n.h2,{id:"onetomany-and-onetoone-with-nested-objects",style:{position:"relative"}},a.createElement(n.a,{href:"#onetomany-and-onetoone-with-nested-objects","aria-label":"onetomany and onetoone with nested objects permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"OneToMany and OneToOne with Nested Objects"),"\n",a.createElement(n.p,null,"The following example is equivalent to the previous one, but it uses nested objects instead of direct references. This improves readability and expressiveness."),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},"@aggregate\r\n@auditting\r\nentity Customer {\r\n  username String required unique /** username javadoc comment */\r\n  email String required unique /** email javadoc comment */\r\n  tags String[] /** tags javadoc comment */\r\n  /**\r\n   * addresses is a nested entity\r\n   */\r\n  addresses Address[] {\r\n    street String /** street javadoc comment */\r\n    city String /** city javadoc comment */\r\n    state String /** state javadoc comment */\r\n    zip String /** zip javadoc comment */\r\n    type AddressType /** address type is an enum */\r\n  }\r\n}\n")),"\n",a.createElement(n.h2,{id:"onetomany-and-onetoone-with-dbref-and-documentedreference",style:{position:"relative"}},a.createElement(n.a,{href:"#onetomany-and-onetoone-with-dbref-and-documentedreference","aria-label":"onetomany and onetoone with dbref and documentedreference permalink",className:"anchor before"},a.createElement(n.div,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"OneToMany and OneToOne with @DBRef and @DocumentedReference"),"\n",a.createElement(n.pre,null,a.createElement(n.code,{className:"language-zdl"},"@aggregate\r\n@auditting\r\nentity Customer {\r\n  username String required unique /** username javadoc comment */\r\n  email String required unique /** email javadoc comment */\r\n  tags String[] /** tags javadoc comment */\r\n  /**\r\n   * addresses is mapped using @DocumentedReference\r\n   */\r\n  @ref addresses Address[]\r\n}\r\n\r\n@aggregate\r\n@auditting\r\nentity Address {\r\n    street String /** street javadoc comment */\r\n    city String /** city javadoc comment */\r\n    state String /** state javadoc comment */\r\n    zip String /** zip javadoc comment */\r\n    type AddressType /** address type is an enum */\r\n}\n")))}var i=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?a.createElement(n,e,a.createElement(o,e)):o(e)};function c(e){let{children:n}=e;return n}function d(e){return a.createElement(c,e,a.createElement(i,e))}}}]);
//# sourceMappingURL=component---node-modules-smooth-doc-src-templates-doc-js-content-file-path-c-users-ivangsa-workspace-zenwave-zen-wave-360-github-io-website-pages-docs-sdk-mongodb-mdx-a3e50c427e94ad69f3d0.js.map