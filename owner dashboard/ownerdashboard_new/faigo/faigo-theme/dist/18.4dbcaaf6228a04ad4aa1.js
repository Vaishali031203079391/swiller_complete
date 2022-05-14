(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{AdzO:function(e,t,n){"use strict";n.r(t),n.d(t,"InvoiceModule",(function(){return w}));var r=n("ofXK"),l=n("tyNb"),o=n("XbOO"),m=n("fXoL"),i=n("1kSV"),a=n("5eHb"),d=function(){function e(e,t,n){this.dl=e,this.modalService=t,this.toastr=n}return e.prototype.ngOnInit=function(){this.loadInvoices()},e.prototype.loadInvoices=function(){var e=this;this.dl.getInvoices().subscribe((function(t){e.invoices=t}))},e.prototype.deleteInvoice=function(e,t){var n=this;this.modalService.open(t,{ariaLabelledBy:"modal-basic-title",centered:!0}).result.then((function(t){n.dl.deleteInvoice(e).subscribe((function(e){n.toastr.success("Invoice Deleted!","Success!",{timeOut:3e3}),n.loadInvoices()}))}),(function(e){}))},e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](o.a),m["\u0275\u0275directiveInject"](i.j),m["\u0275\u0275directiveInject"](a.b))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-invoice-list"]],decls:128,vars:0,consts:[[1,"breadcrumb"],["href",""],[1,"separator-breadcrumb","border-top"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body","p-0"],[1,"row","p-5"],[1,"col-12","col-md-6"],["src","./assets/images/logo.png","width","100"],[1,"col-12","col-md-6","text-right","txt-right-md"],[1,"font-weight-bold","mb-1"],[1,"text-muted","mb-0"],[1,"my-3"],[1,"row","pb-5","p-5"],[1,"col-md-6"],[1,"font-weight-bold","mb-4"],[1,"mb-1"],[1,"col-md-6","text-right"],[1,"text-muted"],[1,"col-md-12"],[1,"table-responsive"],[1,"table"],[1,"border-0","text-uppercase","small","font-weight-bold"],[1,"d-flex","flex-row-reverse","bg-dark","text-white","p-4"],[1,"py-3","px-5","text-right"],[1,"mb-2"],[1,"h2","font-weight-light"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"h1"),m["\u0275\u0275text"](2,"Invoice"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"ul"),m["\u0275\u0275elementStart"](4,"li"),m["\u0275\u0275elementStart"](5,"a",1),m["\u0275\u0275text"](6,"Apps"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"li"),m["\u0275\u0275text"](8,"Invoice"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"div",2),m["\u0275\u0275elementStart"](10,"div",3),m["\u0275\u0275elementStart"](11,"div",4),m["\u0275\u0275elementStart"](12,"div",5),m["\u0275\u0275elementStart"](13,"div",6),m["\u0275\u0275elementStart"](14,"div",7),m["\u0275\u0275elementStart"](15,"div",8),m["\u0275\u0275element"](16,"img",9),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"div",10),m["\u0275\u0275elementStart"](18,"p",11),m["\u0275\u0275text"](19,"Invoice #550"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](20,"p",12),m["\u0275\u0275text"](21,"Due to: 4 Dec, 2019"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](22,"hr",13),m["\u0275\u0275elementStart"](23,"div",14),m["\u0275\u0275elementStart"](24,"div",15),m["\u0275\u0275elementStart"](25,"p",16),m["\u0275\u0275text"](26,"Client Information"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](27,"p",17),m["\u0275\u0275text"](28,"John Doe, Mrs Emma Downson"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](29,"p"),m["\u0275\u0275text"](30,"Acme Inc"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](31,"p",17),m["\u0275\u0275text"](32,"Berlin, Germany"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](33,"p",17),m["\u0275\u0275text"](34,"6781 45P"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](35,"div",18),m["\u0275\u0275elementStart"](36,"p",16),m["\u0275\u0275text"](37,"Payment Details"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](38,"p",17),m["\u0275\u0275elementStart"](39,"span",19),m["\u0275\u0275text"](40,"VAT: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](41," 1425782"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](42,"p",17),m["\u0275\u0275elementStart"](43,"span",19),m["\u0275\u0275text"](44,"VAT ID: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](45," 10253642"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](46,"p",17),m["\u0275\u0275elementStart"](47,"span",19),m["\u0275\u0275text"](48,"Payment Type: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](49," Root"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](50,"p",17),m["\u0275\u0275elementStart"](51,"span",19),m["\u0275\u0275text"](52,"Name: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](53," John Doe"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](54,"div",7),m["\u0275\u0275elementStart"](55,"div",20),m["\u0275\u0275elementStart"](56,"div",21),m["\u0275\u0275elementStart"](57,"table",22),m["\u0275\u0275elementStart"](58,"thead"),m["\u0275\u0275elementStart"](59,"tr"),m["\u0275\u0275elementStart"](60,"th",23),m["\u0275\u0275text"](61,"ID"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](62,"th",23),m["\u0275\u0275text"](63,"Item"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](64,"th",23),m["\u0275\u0275text"](65,"Description"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](66,"th",23),m["\u0275\u0275text"](67,"Quantity"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](68,"th",23),m["\u0275\u0275text"](69,"Unit Cost"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](70,"th",23),m["\u0275\u0275text"](71,"Total"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](72,"tbody"),m["\u0275\u0275elementStart"](73,"tr"),m["\u0275\u0275elementStart"](74,"td"),m["\u0275\u0275text"](75,"1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](76,"td"),m["\u0275\u0275text"](77,"Software"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](78,"td"),m["\u0275\u0275text"](79,"LTS Versions"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](80,"td"),m["\u0275\u0275text"](81,"21"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](82,"td"),m["\u0275\u0275text"](83,"$321"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](84,"td"),m["\u0275\u0275text"](85,"$3452"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](86,"tr"),m["\u0275\u0275elementStart"](87,"td"),m["\u0275\u0275text"](88,"1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](89,"td"),m["\u0275\u0275text"](90,"Software"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](91,"td"),m["\u0275\u0275text"](92,"Support"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](93,"td"),m["\u0275\u0275text"](94,"234"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](95,"td"),m["\u0275\u0275text"](96,"$6356"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](97,"td"),m["\u0275\u0275text"](98,"$23423"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](99,"tr"),m["\u0275\u0275elementStart"](100,"td"),m["\u0275\u0275text"](101,"1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](102,"td"),m["\u0275\u0275text"](103,"Software"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](104,"td"),m["\u0275\u0275text"](105,"Sofware Collection"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](106,"td"),m["\u0275\u0275text"](107,"4534"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](108,"td"),m["\u0275\u0275text"](109,"$354"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](110,"td"),m["\u0275\u0275text"](111,"$23434"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](112,"div",24),m["\u0275\u0275elementStart"](113,"div",25),m["\u0275\u0275elementStart"](114,"div",26),m["\u0275\u0275text"](115,"Grand Total"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](116,"div",27),m["\u0275\u0275text"](117,"$234,234"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](118,"div",25),m["\u0275\u0275elementStart"](119,"div",26),m["\u0275\u0275text"](120,"Discount"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](121,"div",27),m["\u0275\u0275text"](122,"10%"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](123,"div",25),m["\u0275\u0275elementStart"](124,"div",26),m["\u0275\u0275text"](125,"Sub - Total amount"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](126,"div",27),m["\u0275\u0275text"](127,"$32,432"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())},styles:[""]}),e}(),c=n("9uVP"),s=n("3Pt+"),u=n("DM0H");function v(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",8),m["\u0275\u0275element"](1,"span",9),m["\u0275\u0275elementStart"](2,"button",10),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().viewMode="print"})),m["\u0275\u0275text"](3,"Cancel"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"btn-loading",11),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().saveInvoice()})),m["\u0275\u0275text"](5,"Save"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var r=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("loading",r.saving)}}function p(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div",12),m["\u0275\u0275element"](1,"span",9),m["\u0275\u0275elementStart"](2,"button",13),m["\u0275\u0275text"](3,"Back To Invoices"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"button",14),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().viewMode="edit"})),m["\u0275\u0275text"](5,"Edit Invoice"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"button",15),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().print()})),m["\u0275\u0275text"](7,"Print Invoice"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}}function S(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tr"),m["\u0275\u0275elementStart"](1,"th",29),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"td"),m["\u0275\u0275text"](4),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"td"),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"td"),m["\u0275\u0275text"](8),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"td"),m["\u0275\u0275text"](10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=t.index;m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](r+1),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](n.name),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](n.unitPrice),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](n.unit),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](n.unit*n.unitPrice)}}function E(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",16),m["\u0275\u0275elementStart"](1,"div",0),m["\u0275\u0275elementStart"](2,"div",17),m["\u0275\u0275elementStart"](3,"h4",18),m["\u0275\u0275text"](4,"Order Info"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"p"),m["\u0275\u0275text"](6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"div",19),m["\u0275\u0275elementStart"](8,"p"),m["\u0275\u0275elementStart"](9,"strong"),m["\u0275\u0275text"](10,"Order status: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](12,"p"),m["\u0275\u0275elementStart"](13,"strong"),m["\u0275\u0275text"](14,"Order date: "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](15),m["\u0275\u0275pipe"](16,"date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](17,"div",20),m["\u0275\u0275elementStart"](18,"div",21),m["\u0275\u0275elementStart"](19,"div",22),m["\u0275\u0275elementStart"](20,"h5",18),m["\u0275\u0275text"](21,"Bill From"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](22,"p"),m["\u0275\u0275text"](23),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"span",23),m["\u0275\u0275text"](25),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](26,"div",19),m["\u0275\u0275elementStart"](27,"h5",18),m["\u0275\u0275text"](28,"Bill To"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](29,"p"),m["\u0275\u0275text"](30),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](31,"span",23),m["\u0275\u0275text"](32),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](33,"div",0),m["\u0275\u0275elementStart"](34,"div",1),m["\u0275\u0275elementStart"](35,"table",24),m["\u0275\u0275elementStart"](36,"thead",25),m["\u0275\u0275elementStart"](37,"tr"),m["\u0275\u0275elementStart"](38,"th",26),m["\u0275\u0275text"](39,"#"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](40,"th",26),m["\u0275\u0275text"](41,"Item Name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](42,"th",26),m["\u0275\u0275text"](43,"Unit Price"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](44,"th",26),m["\u0275\u0275text"](45,"Unit"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](46,"th",26),m["\u0275\u0275text"](47,"Cost"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](48,"tbody"),m["\u0275\u0275template"](49,S,11,5,"tr",27),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](50,"div",1),m["\u0275\u0275elementStart"](51,"div",28),m["\u0275\u0275elementStart"](52,"p"),m["\u0275\u0275text"](53,"Sub total: "),m["\u0275\u0275elementStart"](54,"span"),m["\u0275\u0275text"](55),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](56,"p"),m["\u0275\u0275text"](57,"Vat: "),m["\u0275\u0275elementStart"](58,"span"),m["\u0275\u0275text"](59),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](60,"h5",18),m["\u0275\u0275text"](61,"Grand Total: "),m["\u0275\u0275elementStart"](62,"span"),m["\u0275\u0275text"](63),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate1"]("#",n.invoice.orderNumber,""),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate1"](" ",null==n.invoice?null:n.invoice.orderStatus,""),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate1"](" ",m["\u0275\u0275pipeBind1"](16,14,null==n.invoice?null:n.invoice.orderDate),""),m["\u0275\u0275advance"](8),m["\u0275\u0275textInterpolate"](null==n.invoice||null==n.invoice.billFrom?null:n.invoice.billFrom.name),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",null==n.invoice||null==n.invoice.billFrom?null:n.invoice.billFrom.address," "),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate"](null==n.invoice||null==n.invoice.billTo?null:n.invoice.billTo.name),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate1"](" ",null==n.invoice||null==n.invoice.billTo?null:n.invoice.billTo.address," "),m["\u0275\u0275advance"](17),m["\u0275\u0275property"]("ngForOf",null==n.invoice?null:n.invoice.items),m["\u0275\u0275advance"](6),m["\u0275\u0275textInterpolate2"]("",n.invoice.currency,"",n.subTotal,""),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate2"](" ",n.invoice.currency,"",(n.invoice.vat/100*n.subTotal).toFixed(2)," "),m["\u0275\u0275advance"](4),m["\u0275\u0275textInterpolate2"](" ",n.invoice.currency,"",n.invoice.vat/100*n.subTotal+n.subTotal," ")}}function x(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tr",71),m["\u0275\u0275elementStart"](1,"th",29),m["\u0275\u0275text"](2),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"td"),m["\u0275\u0275element"](4,"input",72),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"td"),m["\u0275\u0275element"](6,"input",73),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"td"),m["\u0275\u0275element"](8,"input",74),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"td"),m["\u0275\u0275text"](10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"td"),m["\u0275\u0275elementStart"](12,"button",75),m["\u0275\u0275listener"]("click",(function(){m["\u0275\u0275restoreView"](n);var e=t.index;return m["\u0275\u0275nextContext"](2).removeItem(e)})),m["\u0275\u0275text"](13,"Delete"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var r=t.index,l=m["\u0275\u0275nextContext"](2);m["\u0275\u0275property"]("formGroupName",r),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](r+1),m["\u0275\u0275advance"](8),m["\u0275\u0275textInterpolate1"](" ",l.invoiceForm.controls.items.controls[r].controls.unitPrice.value*l.invoiceForm.controls.items.controls[r].controls.unit.value," ")}}function b(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"div"),m["\u0275\u0275elementStart"](1,"form",30),m["\u0275\u0275elementStart"](2,"div",31),m["\u0275\u0275elementStart"](3,"div",17),m["\u0275\u0275elementStart"](4,"h4",18),m["\u0275\u0275text"](5,"Order Info"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"div",32),m["\u0275\u0275elementStart"](7,"label",33),m["\u0275\u0275text"](8,"Order Number"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"input",34),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](10,"div",35),m["\u0275\u0275elementStart"](11,"label",36),m["\u0275\u0275text"](12,"Order Status"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"div",37),m["\u0275\u0275elementStart"](14,"label",38),m["\u0275\u0275element"](15,"input",39),m["\u0275\u0275elementStart"](16,"span"),m["\u0275\u0275text"](17,"Pending"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](18,"span",40),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"label",41),m["\u0275\u0275element"](20,"input",42),m["\u0275\u0275elementStart"](21,"span"),m["\u0275\u0275text"](22,"Processing"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](23,"span",40),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](24,"label",43),m["\u0275\u0275element"](25,"input",44),m["\u0275\u0275elementStart"](26,"span"),m["\u0275\u0275text"](27,"Delivered"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](28,"span",40),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](29,"div",45),m["\u0275\u0275elementStart"](30,"label",46),m["\u0275\u0275text"](31,"Order Date"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](32,"div",47),m["\u0275\u0275element"](33,"input",48,49),m["\u0275\u0275elementStart"](35,"div",50),m["\u0275\u0275elementStart"](36,"button",51),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275reference"](34).toggle()})),m["\u0275\u0275element"](37,"i",52),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](38,"div",20),m["\u0275\u0275elementStart"](39,"div",21),m["\u0275\u0275elementStart"](40,"div",53),m["\u0275\u0275elementStart"](41,"h5",18),m["\u0275\u0275text"](42,"Bill From"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](43,"div",54),m["\u0275\u0275element"](44,"input",55),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](45,"div",54),m["\u0275\u0275element"](46,"textarea",56),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](47,"div",57),m["\u0275\u0275elementStart"](48,"h5",18),m["\u0275\u0275text"](49,"Bill To"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](50,"div",58),m["\u0275\u0275element"](51,"input",59),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](52,"div",58),m["\u0275\u0275element"](53,"textarea",60),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](54,"div",0),m["\u0275\u0275elementStart"](55,"div",61),m["\u0275\u0275elementStart"](56,"table",62),m["\u0275\u0275elementStart"](57,"thead",25),m["\u0275\u0275elementStart"](58,"tr"),m["\u0275\u0275elementStart"](59,"th",26),m["\u0275\u0275text"](60,"#"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](61,"th",26),m["\u0275\u0275text"](62,"Item Name"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](63,"th",26),m["\u0275\u0275text"](64,"Unit Price"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](65,"th",26),m["\u0275\u0275text"](66,"Unit"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](67,"th",26),m["\u0275\u0275text"](68,"Cost"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](69,"th",26),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](70,"tbody",63),m["\u0275\u0275template"](71,x,14,3,"tr",64),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](72,"button",65),m["\u0275\u0275listener"]("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().addItem()})),m["\u0275\u0275text"](73,"Add Item"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](74,"div",1),m["\u0275\u0275elementStart"](75,"div",66),m["\u0275\u0275elementStart"](76,"p"),m["\u0275\u0275text"](77,"Sub total: "),m["\u0275\u0275elementStart"](78,"span"),m["\u0275\u0275text"](79),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](80,"p",67),m["\u0275\u0275text"](81,"Vat(%):"),m["\u0275\u0275elementStart"](82,"span"),m["\u0275\u0275element"](83,"input",68),m["\u0275\u0275text"](84),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](85,"h5",69),m["\u0275\u0275text"](86,"Grand Total: "),m["\u0275\u0275elementStart"](87,"span"),m["\u0275\u0275element"](88,"input",70),m["\u0275\u0275text"](89),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()}if(2&e){var r=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("formGroup",r.invoiceForm),m["\u0275\u0275advance"](39),m["\u0275\u0275property"]("formGroup",r.invoiceForm.controls.billFrom),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("formGroup",r.invoiceForm.controls.billTo),m["\u0275\u0275advance"](24),m["\u0275\u0275property"]("ngForOf",r.invoiceForm.controls.items.controls),m["\u0275\u0275advance"](8),m["\u0275\u0275textInterpolate2"]("",r.invoiceForm.controls.currency.value,"",r.subTotal,""),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate2"](" ",r.invoiceForm.controls.currency.value," ",(r.invoiceForm.controls.vat.value/100*r.subTotal).toFixed(2)," "),m["\u0275\u0275advance"](5),m["\u0275\u0275textInterpolate2"](" ",r.invoiceForm.controls.currency.value," ",r.invoiceForm.controls.vat.value/100*r.subTotal+r.subTotal," ")}}var f=function(){function e(e,t,n,r,l){this.route=e,this.router=t,this.fb=n,this.dl=r,this.toastr=l,this.viewMode="edit",this.invoice={}}return e.prototype.ngOnInit=function(){var e=this;this.id=this.route.snapshot.params.id,this.isNew=!this.id,this.buildInvoiceForm(this.invoice),this.id&&(this.viewMode="print",this.dl.getInvoice(this.id).subscribe((function(t){e.invoice=t,e.buildInvoiceForm(e.invoice),e.subTotal=e.calculateSubtotal(e.invoiceForm.value)})))},e.prototype.buildInvoiceForm=function(e){var t=this;void 0===e&&(e={}),this.invoiceForm=this.fb.group({id:[e.id],orderNumber:[e.orderNumber],orderStatus:[e.orderStatus],currency:[e.currency],vat:[e.vat],orderDate:[e.orderDate?c.a.dateToNgbDate(e.orderDate):{}],billFrom:this.fb.group({name:[e.billFrom?e.billFrom.name:""],address:[e.billFrom?e.billFrom.address:""]}),billTo:this.fb.group({name:[e.billTo?e.billTo.name:""],address:[e.billTo?e.billTo.address:""]}),items:this.fb.array(e.items?e.items.map((function(e){return t.createItem(e)})):[])}),this.invoiceFormSub&&this.invoiceFormSub.unsubscribe(),this.invoiceFormSub=this.invoiceForm.valueChanges.subscribe((function(e){t.subTotal=t.calculateSubtotal(e)}))},e.prototype.createItem=function(e){return void 0===e&&(e={}),this.fb.group({name:[e.name],unit:[e.unit],unitPrice:[e.unitPrice]})},e.prototype.addItem=function(){this.invoiceForm.controls.items.push(this.createItem())},e.prototype.removeItem=function(e){this.invoiceForm.controls.items.removeAt(e)},e.prototype.saveInvoice=function(){var e=this;this.saving=!0,this.invoice=this.invoiceForm.value,this.invoice.orderDate=c.a.ngbDateToDate(this.invoiceForm.value.orderDate),this.dl.saveInvoice(this.invoiceForm.value).subscribe((function(t){e.viewMode="print",e.saving=!1,e.toastr.success("Invoice Saved!","Success!",{timeOut:3e3}),e.isNew&&e.router.navigateByUrl("/invoice/edit/"+t.id)}))},e.prototype.calculateSubtotal=function(e){var t=0;return e.items.forEach((function(e){t+=e.unit*e.unitPrice})),t},e.prototype.print=function(){window&&window.print()},e.\u0275fac=function(t){return new(t||e)(m["\u0275\u0275directiveInject"](l.a),m["\u0275\u0275directiveInject"](l.g),m["\u0275\u0275directiveInject"](s.FormBuilder),m["\u0275\u0275directiveInject"](o.a),m["\u0275\u0275directiveInject"](a.b))},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["app-invoice-detail"]],decls:8,vars:4,consts:[[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-body"],["class","d-flex mb-5",4,"ngIf"],["class","d-sm-flex mb-5",4,"ngIf"],["id","print-area",4,"ngIf"],[4,"ngIf"],[1,"d-flex","mb-5"],[1,"m-auto"],[1,"btn","btn-outline-secondary","mr-3",3,"click"],["btnClass","btn-primary",3,"loading","click"],[1,"d-sm-flex","mb-5"],["routerLink","/invoice",1,"btn","btn-outline-secondary","mr-3","mb-sm-0","mb-3"],[1,"btn","btn-outline-secondary","mr-3","mb-sm-0","mb-3",3,"click"],[1,"btn","btn-primary","mb-sm-0","mb-3",3,"click"],["id","print-area"],[1,"col-md-6"],[1,"font-weight-bold"],[1,"col-md-6","text-sm-right"],[1,"mt-3","mb-4","border-top"],[1,"row","mb-5"],[1,"col-md-6","mb-3","mb-sm-0"],[2,"white-space","pre-line"],[1,"table","table-hover","mb-4"],[1,"bg-gray-300"],["scope","col"],[4,"ngFor","ngForOf"],[1,"invoice-summary","float-right"],["scope","row"],[3,"formGroup"],[1,"row","justify-content-between"],[1,"col-sm-4","form-group","mb-3","pl-0"],["for","orderNo"],["formControlName","orderNumber","type","text","id","orderNo","placeholder","Enter order number",1,"form-control"],[1,"col-md-3","text-right"],[1,"d-block","text-12","text-muted"],[1,"pr-0","mb-4"],[1,"radio","radio-reverse","radio-danger"],["type","radio","name","orderStatus","value","Pending","formControlName","orderStatus"],[1,"checkmark"],[1,"radio","radio-reverse","radio-warning"],["type","radio","name","orderStatus","value","Processing","formControlName","orderStatus"],[1,"radio","radio-reverse","radio-success"],["type","radio","name","orderStatus","value","Delivered","formControlName","orderStatus"],[1,"form-group","mb-3"],["for","picker1"],[1,"input-group"],["formControlName","orderDate","id","picker1","placeholder","yyyy-mm-dd","name","dp","ngbDatepicker","",1,"form-control","text-right"],["orderDatePicker","ngbDatepicker"],[1,"input-group-append"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-regular","i-Calendar-4"],[1,"col-md-6",3,"formGroup"],[1,"col-md-10","form-group","mb-3","pl-0"],["formControlName","name","type","text","id","billFrom","placeholder","Bill From",1,"form-control"],["formControlName","address","id","","placeholder","Bill From Address",1,"form-control"],[1,"col-md-6","text-right",3,"formGroup"],[1,"col-md-10","offset-md-2","form-group","mb-3","pr-0"],["formControlName","name","type","text","id","billFrom","placeholder","Bill From",1,"form-control","text-right"],["formControlName","address","id","","placeholder","Bill From Address",1,"form-control","text-right"],[1,"col-md-12","table-responsive"],[1,"table","table-hover","mb-3"],["formArrayName","items"],[3,"formGroupName",4,"ngFor","ngForOf"],[1,"btn","btn-primary","float-right","mb-4",3,"click"],[1,"invoice-summary","invoice-summary-input","float-right"],[1,"d-flex","align-items-center"],["type","text","formControlName","vat",1,"form-control","small-input"],[1,"font-weight-bold","d-flex","align-items-center"],["type","text","formControlName","currency",1,"form-control","small-input"],[3,"formGroupName"],["formControlName","name","type","text","placeholder","Item Name",1,"form-control"],["formControlName","unitPrice","type","number","placeholder","Unit Price",1,"form-control"],["formControlName","unit","type","number","placeholder","Unit",1,"form-control"],[1,"btn","btn-outline-secondary","float-right",3,"click"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275elementStart"](1,"div",1),m["\u0275\u0275elementStart"](2,"div",2),m["\u0275\u0275elementStart"](3,"div",3),m["\u0275\u0275template"](4,v,6,1,"div",4),m["\u0275\u0275template"](5,p,8,0,"div",5),m["\u0275\u0275template"](6,E,64,16,"div",6),m["\u0275\u0275template"](7,b,90,10,"div",7),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("ngIf","edit"===t.viewMode),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","edit"!==t.viewMode),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","edit"!==t.viewMode),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf","edit"===t.viewMode))},directives:[r.o,u.a,l.h,r.n,s["\u0275angular_packages_forms_forms_y"],s.NgControlStatusGroup,s.FormGroupDirective,s.DefaultValueAccessor,s.NgControlStatus,s.FormControlName,s.RadioControlValueAccessor,i.i,s.FormArrayName,s.FormGroupName,s.NumberValueAccessor],pipes:[r.e],styles:[""]}),e}(),h=[{path:"",component:d},{path:"new",component:f},{path:"edit/:id",component:f}],g=function(){function e(){}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[l.j.forChild(h)],l.j]}),e}(),y=n("lDzL"),I=n("nEHF"),w=function(){function e(){}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,s.FormsModule,y.e,s.ReactiveFormsModule,I.a,i.k,g]]}),e}()}}]);