(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{33:function(e,t,c){"use strict";var a=c(38),i=c.n(a),n="https://api.themoviedb.org/3",A="28f39dee398e80aa6c8a620368a9d164",s={fetchPopularMovies:function(){return i.a.get("".concat(n,"/trending/movie/week?api_key=").concat(A)).then((function(e){return e.data.results})).catch((function(e){return e}))},fetchSearchMovies:function(e){return i.a.get("".concat(n,"/search/movie?api_key=").concat(A,"&page=1&include_adult=false&query=").concat(e)).then((function(e){return e.data.results})).catch((function(e){return e}))},fetchMoviesById:function(e){return i.a.get("".concat(n,"/movie/").concat(e,"?api_key=").concat(A,"&language=en-US")).then((function(e){return e.data})).catch((function(e){return e}))},fetchMovieCast:function(e){return i.a.get("".concat(n,"/movie/").concat(e,"/credits?api_key=").concat(A)).then((function(e){return e.data})).catch((function(e){return e}))},fetchMovieReviews:function(e){return i.a.get("".concat(n,"/movie/").concat(e,"/reviews?api_key=").concat(A,"&page=1")).then((function(e){return e.data})).catch((function(e){return e}))}};t.a=s},34:function(e,t,c){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAEHCAYAAADYqhZCAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDYwLCAyMDIwLzA1LzEyLTE2OjA0OjE3ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMiAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTEwLTMwVDAwOjE2OjE5KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTEwLTMwVDAwOjE2OjE5KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0xMC0zMFQwMDoxNjoxOSswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzAwNDRiMWItNTYwYy05MjQxLTlhODUtM2NjNjEwMjQwYmJkIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOmMwMDQ0YjFiLTU2MGMtOTI0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"},70:function(e,t,c){e.exports={container:"MovieDetailsPage_container__eE1By",items:"MovieDetailsPage_items__1sLF4",title:"MovieDetailsPage_title__1YErx",text:"MovieDetailsPage_text__2FMlA",subtitle:"MovieDetailsPage_subtitle__3Shu0",button:"MovieDetailsPage_button__Zgzlf",list:"MovieDetailsPage_list__2qFNi",item:"MovieDetailsPage_item__1aELd",links:"MovieDetailsPage_links__2q7CD",link:"MovieDetailsPage_link__id1Ub",activeLink:"MovieDetailsPage_activeLink__1Tnl1",image:"MovieDetailsPage_image__2PKxN"}},76:function(e,t,c){"use strict";c.r(t);var a=c(39),i=c(35),n=c(1),A=c(9),s=c(0),l=c(33),v=c(70),r=c.n(v),u=c(34),b=c(2),w=Object(s.lazy)((function(){return c.e(7).then(c.bind(null,71))})),o=Object(s.lazy)((function(){return c.e(9).then(c.bind(null,73))}));t.default=function(){var e=Object(n.i)().url,t=Object(n.g)(),c=Object(n.h)().movieId,v=Object(n.f)(),h=Object(s.useState)(null),g=Object(i.a)(h,2),O=g[0],d=g[1];return Object(s.useEffect)((function(){l.a.fetchMoviesById(c).then((function(e){return d(e)})).catch((function(e){return e}))}),[c]),Object(b.jsx)(b.Fragment,{children:O&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{className:r.a.button,type:"button",onClick:function(){var e,c;v.push(null!==(e=null===t||void 0===t||null===(c=t.state)||void 0===c?void 0:c.from)&&void 0!==e?e:"/")},children:"Go back"}),Object(b.jsxs)("div",{className:r.a.container,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:r.a.image,src:O.poster_path?"https://image.tmdb.org/t/p/w300".concat(O.poster_path):u.a,alt:O.title})}),Object(b.jsxs)("div",{className:r.a.items,children:[Object(b.jsx)("h2",{className:r.a.title,children:O.title}),Object(b.jsx)("h2",{className:r.a.subtitle,children:"Popularity"}),Object(b.jsx)("p",{className:r.a.text,children:O.popularity}),Object(b.jsx)("h2",{className:r.a.subtitle,children:"Vote"}),Object(b.jsx)("p",{className:r.a.text,children:O.vote_average}),Object(b.jsx)("h2",{className:r.a.subtitle,children:"Overview"}),Object(b.jsx)("p",{className:r.a.text,children:O.overview}),Object(b.jsx)("h3",{className:r.a.subtitle,children:"Genres"}),Object(b.jsx)("ul",{className:r.a.list,children:O.genres&&O.genres.map((function(e){return Object(b.jsx)("li",{className:r.a.item,children:e.name},e.id)}))})]})]}),Object(b.jsxs)("div",{className:r.a.links,children:[Object(b.jsx)(A.b,{className:r.a.link,activeClassName:r.a.activeLink,to:{pathname:"".concat(e,"/cast"),state:Object(a.a)({},t.state)},children:"Cast"}),Object(b.jsx)(A.b,{className:r.a.link,activeClassName:r.a.activeLink,to:{pathname:"".concat(e,"/reviews"),state:Object(a.a)({},t.state)},children:"Reviews"})]}),Object(b.jsxs)(s.Suspense,{fallback:Object(b.jsx)("h2",{children:"Loading..."}),children:[Object(b.jsx)(n.a,{path:"".concat(e,"/cast"),children:Object(b.jsx)(w,{movieId:c})}),Object(b.jsx)(n.a,{path:"".concat(e,"/reviews"),children:Object(b.jsx)(o,{movieId:c})})]})]})})}}}]);
//# sourceMappingURL=5.6d6fc860.chunk.js.map