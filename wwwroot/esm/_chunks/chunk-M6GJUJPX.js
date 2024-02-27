import{c as t,e as Le,f as o,g as B,h as H,i}from"./chunk-THKE7DQS.js";var xe=Le((Nt,fe)=>{fe.exports=Serenity.Extensions});var J=o(i(),1);var E=class E extends J.ColumnsBase{};t(E,"GenreColumns"),E.columnsKey="MovieDB.Genre",E.Fields=(0,J.fieldsProxy)();var $=E;var L=o(i(),1);var u=class u{static getLookup(){return(0,L.getLookup)("MovieDB.Genre")}static getLookupAsync(){return H(this,null,function*(){return(0,L.getLookupAsync)("MovieDB.Genre")})}};t(u,"GenreRow"),u.idProperty="GenreId",u.nameProperty="Name",u.localTextPrefix="MovieDB.Genre",u.lookupKey="MovieDB.Genre",u.deletePermission="Administration:General",u.insertPermission="Administration:General",u.readPermission="Administration:General",u.updatePermission="Administration:General",u.Fields=(0,L.fieldsProxy)();var Q=u;var ee=o(i(),1),_;(e=>(e.baseUrl="MovieDB/Genre",e.Methods={Create:"MovieDB/Genre/Create",Update:"MovieDB/Genre/Update",Delete:"MovieDB/Genre/Delete",Retrieve:"MovieDB/Genre/Retrieve",List:"MovieDB/Genre/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(n,a,c){return(0,ee.serviceRequest)(e.baseUrl+"/"+r,n,a,c)}})))(_||(_={}));var te=o(i(),1);var h,T,M=class{format(s){let e=s.value;if(!e||!e.length)return"";let r=h==null?void 0:h.itemById;return r?e.map(n=>{var a=r[n];return s.escape(a==null?n:a.Name)}).join(", "):(T!=null||(T=Q.getLookupAsync().then(n=>{var a;h=n;try{(a=s.grid)==null||a.invalidate()}finally{h=null,T=null}}).catch(()=>T=null)),'<i class="fa fa-spinner"></i>')}};t(M,"GenreListFormatter"),M=B([te.Decorators.registerFormatter("MovieTutorial.GenreListFormatter")],M);var w=o(i(),1);var re=o(i(),1),X=(r=>(r[r.Film=1]="Film",r[r.TvSeries=2]="TvSeries",r[r.MiniSeries=3]="MiniSeries",r))(X||{});re.Decorators.registerEnumType(X,"MovieTutorial.MovieDB.MovieKind","MovieDB.MovieKind");var b=class b extends w.ColumnsBase{};t(b,"MovieColumns"),b.columnsKey="MovieDB.Movie",b.Fields=(0,w.fieldsProxy)();var oe=b;var se=o(i(),1);var m=class m{};t(m,"MovieRow"),m.idProperty="MovieId",m.nameProperty="Title",m.localTextPrefix="MovieDB.Movie",m.deletePermission="Administration:General",m.insertPermission="Administration:General",m.readPermission="Administration:General",m.updatePermission="Administration:General",m.Fields=(0,se.fieldsProxy)();var ie=m;var ae=o(i(),1),ne;(e=>(e.baseUrl="MovieDB/Movie",e.Methods={Create:"MovieDB/Movie/Create",Update:"MovieDB/Movie/Update",Delete:"MovieDB/Movie/Delete",Retrieve:"MovieDB/Movie/Retrieve",List:"MovieDB/Movie/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(n,a,c){return(0,ae.serviceRequest)(e.baseUrl+"/"+r,n,a,c)}})))(ne||(ne={}));var N=o(i(),1);var pe=o(i(),1),F=(e=>(e[e.Male=1]="Male",e[e.Female=2]="Female",e))(F||{});pe.Decorators.registerEnumType(F,"MovieTutorial.MovieDB.Gender");var U=class U extends N.ColumnsBase{};t(U,"PersonColumns"),U.columnsKey="MovieDB.Person",U.Fields=(0,N.fieldsProxy)();var le=U;var I=o(i(),1);var d=class d{static getLookup(){return(0,I.getLookup)("MovieDB.Person")}static getLookupAsync(){return H(this,null,function*(){return(0,I.getLookupAsync)("MovieDB.Person")})}};t(d,"PersonRow"),d.idProperty="PersonId",d.nameProperty="FullName",d.localTextPrefix="MovieDB.Person",d.lookupKey="MovieDB.Person",d.deletePermission="Administration:General",d.insertPermission="Administration:General",d.readPermission="Administration:General",d.updatePermission="Administration:General",d.Fields=(0,I.fieldsProxy)();var ce=d;var de=o(i(),1),ue;(e=>(e.baseUrl="MovieDB/Person",e.Methods={Create:"MovieDB/Person/Create",Update:"MovieDB/Person/Update",Delete:"MovieDB/Person/Delete",Retrieve:"MovieDB/Person/Retrieve",List:"MovieDB/Person/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(n,a,c){return(0,de.serviceRequest)(e.baseUrl+"/"+r,n,a,c)}})))(ue||(ue={}));var G=o(i(),1);var g=class g extends G.PrefixedContext{constructor(s){if(super(s),!g.init){g.init=!0;var e=G.StringEditor;(0,G.initFormType)(g,["Name",e])}}};t(g,"GenreForm"),g.formKey="MovieDB.Genre";var me=g;var k=o(i(),1);var A=class A extends k.ColumnsBase{};t(A,"MovieCastColumns"),A.columnsKey="MovieDB.MovieCast",A.Fields=(0,k.fieldsProxy)();var K=A;var f=o(i(),1);var S=class S extends f.PrefixedContext{constructor(s){if(super(s),!S.init){S.init=!0;var e=f.LookupEditor,r=f.StringEditor;(0,f.initFormType)(S,["PersonId",e,"Character",r])}}};t(S,"MovieCastForm"),S.formKey="MovieDB.MovieCast";var ve=S;var Re=o(i(),1);var v=class v{};t(v,"MovieCastRow"),v.idProperty="MovieCastId",v.nameProperty="Character",v.localTextPrefix="MovieDB.MovieCast",v.deletePermission="Administration:General",v.insertPermission="Administration:General",v.readPermission="Administration:General",v.updatePermission="Administration:General",v.Fields=(0,Re.fieldsProxy)();var P=v;var ye=o(i(),1),Y;(e=>(e.baseUrl="MovieDB/MovieCast",e.Methods={Create:"MovieDB/MovieCast/Create",Update:"MovieDB/MovieCast/Update",Delete:"MovieDB/MovieCast/Delete",Retrieve:"MovieDB/MovieCast/Retrieve",List:"MovieDB/MovieCast/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(n,a,c){return(0,ye.serviceRequest)(e.baseUrl+"/"+r,n,a,c)}})))(Y||(Y={}));var De=o(xe(),1),Me=o(i(),1);var x=class extends De.GridEditorBase{getColumnsKey(){return K.columnsKey}getLocalTextPrefix(){return P.localTextPrefix}constructor(s){super(s)}};t(x,"MovieCastEditor"),x=B([Me.Decorators.registerEditor("MovieTutorial.MovieDB.MovieCastEditor")],x);var p=o(i(),1);var C=class C extends p.PrefixedContext{constructor(s){if(super(s),!C.init){C.init=!0;var e=p.TextAreaEditor,r=x,n=p.IntegerEditor,a=p.EnumEditor,c=p.LookupEditor,W=p.StringEditor,Z=p.MultipleImageUploadEditor;(0,p.initFormType)(C,["Title",e,"Description",e,"CastList",r,"Storyline",e,"Year",n,"ReleaseDate",e,"Runtime",n,"Kind",a,"GenreList",c,"PrimaryImages",W,"GalleryImages",Z])}}};t(C,"MovieForm"),C.formKey="MovieDB.Movie";var ge=C;var Pe=o(i(),1);var R=class R{};t(R,"MovieGenresRow"),R.idProperty="MovieGenreId",R.localTextPrefix="MovieDB.MovieGenres",R.deletePermission="Administration:General",R.insertPermission="Administration:General",R.readPermission="Administration:General",R.updatePermission="Administration:General",R.Fields=(0,Pe.fieldsProxy)();var Se=R;var qe=o(i(),1),Ce;(e=>(e.baseUrl="MovieDB/MovieGenres",e.Methods={Create:"MovieDB/MovieGenres/Create",Update:"MovieDB/MovieGenres/Update",Delete:"MovieDB/MovieGenres/Delete",Retrieve:"MovieDB/MovieGenres/Retrieve",List:"MovieDB/MovieGenres/List"},["Create","Update","Delete","Retrieve","List"].forEach(r=>{e[r]=function(n,a,c){return(0,qe.serviceRequest)(e.baseUrl+"/"+r,n,a,c)}})))(Ce||(Ce={}));var j=o(i(),1);var D=class extends j.EntityGrid{constructor(e){super(e)}getColumnsKey(){return z.columnsKey}getRowDefinition(){return P}getService(){return Y.baseUrl}getButtons(){return null}getInitialTitle(){return null}usePager(){return!1}getGridCanLoad(){return this.personId!=null}get personId(){return this._personId}set personId(e){this._personId!=e&&(this._personId=e,this.setEquality(P.Fields.PersonId,e),this.refresh())}};t(D,"PersonMovieGrid"),D=B([j.Decorators.registerEditor("MovieTutorial.MovieDB.PersonMovieGrid")],D);var l=o(i(),1);var q=class q extends l.PrefixedContext{constructor(s){if(super(s),!q.init){q.init=!0;var e=l.StringEditor,r=l.DateEditor,n=l.EnumEditor,a=l.IntegerEditor,c=D,W=l.ImageUploadEditor,Z=l.MultipleImageUploadEditor;(0,l.initFormType)(q,["FirstName",e,"LastName",e,"BirthDate",r,"BirthPlace",e,"Gender",n,"Height",a,"MoviesGris",c,"PrimaryImage",W,"GalleryImages",Z])}}};t(q,"PersonForm"),q.formKey="MovieDB.Person";var Be=q;var V=o(i(),1);var O=class O extends V.ColumnsBase{};t(O,"PersonMovieColumns"),O.columnsKey="MovieTutorial.MovieDB.Columns.PersonMovieColumns",O.Fields=(0,V.fieldsProxy)();var z=O;export{$ as a,me as b,Q as c,_ as d,oe as e,ge as f,ie as g,ne as h,le as i,Be as j,ce as k,ue as l};
//# sourceMappingURL=chunk-M6GJUJPX.js.map