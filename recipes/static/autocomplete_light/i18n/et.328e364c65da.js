/*! Select2 4.1.0-rc.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
var dalLoadLanguage=function(e){var n;(n=e&&e.fn&&e.fn.select2&&e.fn.select2.amd?e.fn.select2.amd:n).define("select2/i18n/et",[],function(){return{inputTooLong:function(e){var n=e.input.length-e.maximum,e="Sisesta "+n+" täht";return 1!=n&&(e+="e"),e+" vähem"},inputTooShort:function(e){var n=e.minimum-e.input.length,e="Sisesta "+n+" täht";return 1!=n&&(e+="e"),e+" rohkem"},loadingMore:function(){return"Laen tulemusi…"},maximumSelected:function(e){var n="Saad vaid "+e.maximum+" tulemus";return 1==e.maximum?n+="e":n+="t",n+" valida"},noResults:function(){return"Tulemused puuduvad"},searching:function(){return"Otsin…"},removeAllItems:function(){return"Eemalda kõik esemed"}}}),n.define,n.require},event=new CustomEvent("dal-language-loaded",{lang:"et"});document.dispatchEvent(event);