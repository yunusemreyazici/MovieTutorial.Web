import{e as d,f as a,g as s,h as u}from"../../../_chunks/chunk-M6GJUJPX.js";import{c as r,f as l,g as p,i as c}from"../../../_chunks/chunk-THKE7DQS.js";var f=l(c(),1);var o=l(c(),1);var n=l(c(),1);var e=class extends n.EntityDialog{constructor(){super(...arguments);this.form=new a(this.idPrefix)}getFormKey(){return a.formKey}getRowDefinition(){return s}getService(){return u.baseUrl}};r(e,"MovieDialog"),e=p([n.Decorators.panel(),n.Decorators.registerClass("MovieTutorial.MovieDB.MovieDialog")],e);var t=class extends o.EntityGrid{getColumnsKey(){return d.columnsKey}getDialogType(){return e}getRowDefinition(){return s}getService(){return u.baseUrl}getQuickFilters(){let m=super.getQuickFilters(),g=(0,o.first)(m,i=>i.field==s.Fields.GenreList);return g.handler=i=>{let v=i.request,w=i.widget.values;v.Genres=w.map(y=>parseInt(y,10)),i.handled=!0},m}};r(t,"MovieGrid"),t=p([o.Decorators.registerClass("MovieTutorial.MovieDB.MovieGrid")],t);function M(){(0,f.initFullHeightGridPage)(new t($("#GridDiv")).element)}r(M,"pageInit");export{M as default};
//# sourceMappingURL=MoviePage.js.map