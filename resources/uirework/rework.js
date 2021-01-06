/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function log(m) {
    console.log(m);
}
function rework() {   
   try {
   var imap = { 'True':'check','False':'ban'};
   $('button').each(function (i,o) {
        var $t = $(this);
        var k = $t.find('.button-label').html().trim();
        if(k.length>2) {
            if(imap[k]!==undefined) {
                $t.replaceWith("<button id='" + $t.attr('id') + "' title='" + k + "' onclick=\"" + $t.attr('onclick') + "\" type='" + $t.attr("type") + "' class='btn btn-auto list_control_icon btn-ico-only'><i class='fas fa-fw fa-" + imap[k] + "'> </i></button>");
            } else {
                //$t.replaceWith("<button id='" + $t.attr('id') + "' title='" + $t.val() + "' onclick=\"" + $t.attr('onclick') + "\" type='" + $t.attr("type") + "' class='btn btn-auto list_control_icon btn-fail'>" + $t.val() + "</button>");
            }
        } else {
            $t.addClass("btn-nochars");
        }
   });
   } catch (ex) {}
 /*  var imap = { 'Save':'ok','Back':'arrow-left','Show All':'asterisk','Import':'arrow-up','Search':'search','Refresh':'refresh','Next':'arrow-right','Export':'arrow-down',
                'Advanced Search':'filter','Missed Calls':'time','Statistics':'th-list','Archive':'hdd','Copy':'copy','Call Routing':'random','Add':'plus','Close':'remove',
                'Login':'sign-in','Paste':'paste','Reload':'retweet','Toggle':'check','Agents':'user','Download CSV':'save-file','Extension Summary':'headphones','Reset':'repeat'};
   $('input.btn').each(function (i,o) {
        $t = $(this);
        if($t.val().length>2) {
            if(imap[$t.val()]!==undefined) {
                $t.replaceWith("<button id='" + $t.attr('id') + "' title='" + $t.val() + "' onclick=\"" + $t.attr('onclick') + "\" type='" + $t.attr("type") + "' class='btn btn-auto list_control_icon'><span class='glyphicon glyphicon-" + imap[$t.val()] + "'> </span></button>");
            } else {
                $t.replaceWith("<button id='" + $t.attr('id') + "' title='" + $t.val() + "' onclick=\"" + $t.attr('onclick') + "\" type='" + $t.attr("type") + "' class='btn btn-auto list_control_icon btn-fail'>" + $t.val() + "</button>");
            }
        } else {
            $t.addClass("btn-nochars");
        }
   });*/
   
  /* $('form').find('table:not(.tr_hover)').each(function (i,o) {
        var $v = $(this).find('.vncell,vncellreq');
        if($v.length>0) {
            if($(this).parents('.form-table').length===0) {
                $(this).addClass('form-table');
                var vc=0;
                var $vl = null;
                $(this).find('tr').each(function (i2,o2) {
                    var $il = $(o2).find('input[type!=hidden],select,textarea');
                    if($il.length>0) {
                        if($(o2).parents('table').first().hasClass('form-table')) {
                             $(o2).addClass('value-row');
                             $vl = $(o2);
                             if(vc++===0) $(o2).addClass('value-row-first');
                             if($il.length>4) $il.addClass('width-auto');
                         }
                    }
                });
                if($vl!==null) $vl.addClass('value-row-last');
            }
       }
   });*/
    
   var ffail = false;
   var url = window.location.href;
   log(url.search('_edit.'));
   if(url.search('_edit.')===-1) ffail=true;
   if(!ffail) {
       //$('.form-table tr').removeClass('value-row').removeClass('value-row-first').removeClass('value-row-last');
       //$('.form-table .formfld').addClass('width-auto-force');
        var $v = $('.vncell,.vncellreq');
        $v.each(function (i,o) {        
            var $ta = $(o).parents('table').first();        
            $ta.addClass('form-table');            
        });
        $('.form-table > tbody > tr').addClass('value-row');
        var $vr = $('.value-row');
        $vr.each(function (i,o) {
            var $il = $(o).find('input[type!=hidden],select,textarea');
            if($il.length===0 || $(o).parents('.value-row').length>0) {
                $(o).removeClass('value-row');
            }
        });
        var $ft = $('.form-table');
        $ft.each(function (i,o) {
            if($(o).parents('.form-table').length>0) {
                $(o).removeClass('form-table').find('.value-row').removeClass('value-row').removeClass('value-row-last').removeClass('value-row-first');
            } else {
                $(o).find('.value-row:visible').first().addClass('value-row-first');
                $(o).find('.value-row:visible').last().addClass('value-row-last');
            }
        });
        
        if(url.search('/device_')>-1 || url.search('/ivr_menu')>-1) {
            $('.formfld').addClass('width-auto-force');
        }        
   } else {
       if(url.search('xml_') === -1) $('.formfld').addClass('width-auto-force');
   }
   
   $('b').each(function (i,o) {
      if(i>1) $(this).addClass('secondary'); 
   });
   
   $('#footer').css('display','none'); 
   
   $('.vncell,.vncellreq').removeAttr('width');
   $('.vtable').removeAttr('width');
};