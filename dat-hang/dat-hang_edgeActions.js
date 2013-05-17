
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","mousedown",function(sym,e){sym.$("danh_cho_khach_hang").css("border","4px solid #787878");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/danh-cho-khach-hang","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","mouseover",function(sym,e){sym.$("danh_cho_khach_hang").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","mouseout",function(sym,e){sym.$("danh_cho_khach_hang").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/dat-hang","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","mouseout",function(sym,e){sym.$("dat_hang").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","mouseover",function(sym,e){sym.$("dat_hang").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","mousedown",function(sym,e){sym.$("dat_hang").css("border","4px solid #787878");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy}","mousedown",function(sym,e){sym.$("lien_he").css("border","4px solid #787878");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy}","mouseover",function(sym,e){sym.$("lien_he").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy}","mouseout",function(sym,e){sym.$("lien_he").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/lien-he","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nhap-don-dat-hang}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/don-dat-hang","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nhap-don-dat-hang}","mouseover",function(sym,e){sym.$("nhap-don-dat-hang").css("padding-top","4px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nhap-don-dat-hang}","mousedown",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_nhap-don-dat-hang}","mouseout",function(sym,e){sym.$("nhap-don-dat-hang").css("padding-top","0px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_dat-hang-ngay}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/don-dat-hang","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_dat-hang-ngay}","mouseover",function(sym,e){sym.$("dat-hang-ngay").css("padding-top","4px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_dat-hang-ngay}","mouseout",function(sym,e){sym.$("dat-hang-ngay").css("padding-top","0px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_logo}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/lien-he","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_banhrangtrungtam}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/lien-he","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy2}","mousedown",function(sym,e){sym.$("trang_chu").css("border","4px solid #787878");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy2}","mouseover",function(sym,e){sym.$("trang_chu").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy2}","mouseout",function(sym,e){sym.$("trang_chu").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2Copy2}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/lien-he","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-cach-dat-hang}","mouseover",function(sym,e){sym.$("thac-mac-ve-cach-dat-hang").css("padding-top","4px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-cach-dat-hang}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/faq","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-cach-dat-hang}","mousedown",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-cach-dat-hang}","mouseout",function(sym,e){sym.$("thac-mac-ve-cach-dat-hang").css("padding-top","0px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-thiet-ke}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/faq","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-thiet-ke}","mouseover",function(sym,e){sym.$("thac-mac-ve-thiet-ke").css("padding-top","4px");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-thiet-ke}","mousedown",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_thac-mac-ve-thiet-ke}","mouseout",function(sym,e){sym.$("thac-mac-ve-thiet-ke").css("padding-top","0px");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-89789052");