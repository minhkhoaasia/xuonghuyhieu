
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){sym.play(0);Symbol.bindTimelineAction(compId,symbolName,"Default Timeline","complete",function(sym,e){alert('Timeline Complete');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_danh_cho_khach_hang}","mouseover",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_danh_cho_khach_hang}","mouseout",function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","mouseover",function(sym,e){sym.$("danh_cho_khach_hang").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","mouseout",function(sym,e){sym.$("danh_cho_khach_hang").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/danh-cho-khach-hang","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/lien-he","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mouseover",function(sym,e){sym.$("lien_he").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mouseout",function(sym,e){sym.$("lien_he").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button1}","mousedown",function(sym,e){sym.$("danh_cho_khach_hang").css("border","4px solid #787878");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Group6}","mousedown",function(sym,e){sym.$("lien_he").css("border","4px solid #787878");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","click",function(sym,e){window.open("http://www.xuonghuyhieu.com/dat-hang","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","mouseover",function(sym,e){sym.$("dat_hang").css("border","4px solid #000000");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","mouseout",function(sym,e){sym.$("dat_hang").css("border","4px solid #ffffff");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_Button2}","mousedown",function(sym,e){sym.$("dat_hang").css("border","4px solid #787878");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"EDGE-335126214");