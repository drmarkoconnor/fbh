!function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.ContactForm=t()}(this,(function(){"use strict";var e=function(t,s){if(!(this&&this instanceof e))return new e(t,s);t&&s&&(this.form=t instanceof Node?t:document.querySelector(t),this.endpoint=s.endpoint,this.send())};return e.prototype={hasClass:function(e,t){return new RegExp("(\\s|^)"+t+"(\\s|$)").test(e.className)},addClass:function(e,t){this.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},removeClass:function(e,t){this.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(\\s|^)"+t+"(\\s|$)")," ").replace(/^\s+|\s+$/g,""))},each:function(e,t){var s,r;for(s=0,r=e.length;s<r;s+=1)t(e[s],s,e)},template:function(e,t){var s;for(s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e=e.replace(new RegExp("{"+s+"}","g"),t[s]));return e},empty:function(e){for(;e.firstChild;)e.removeChild(e.firstChild)},removeElementsByClass:function(e){for(var t=document.getElementsByClassName(e);t.length>0;)t[0].parentNode.removeChild(t[0])},post:function(e,t,s,r){var n=new XMLHttpRequest;n.open("POST",e,!0),n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),n.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var e="";try{e=JSON.parse(this.responseText)}catch(t){e=this.responseText}s.call(this,e)}else r.call(this,this.responseText)},n.send(t),n=null},param:function(e){return"string"==typeof e?e:Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&")},send:function(){this.form.addEventListener("submit",function(e){e.preventDefault();var t,s=document.querySelectorAll(".form-control");this.each(s,function(e,t){this.hasClass(e.parentNode,"has-error")&&(this.removeClass(e.parentNode,"has-error"),this.removeElementsByClass("help-block"))}.bind(this)),t={name:document.querySelector('input[name="form-name"]').value,email:document.querySelector('input[name="form-email"]').value,number:document.querySelector('input[name="form-number"]').value,subject:document.querySelector('input[name="form-subject"]').value,message:document.querySelector('textarea[name="form-message"]').value},this.post(this.endpoint,this.param(t),this.feedback.bind(this),this.fail.bind(this))}.bind(this),!1)},feedback:function(e){if(e.success){var t=this.template('<div class="alert alert-success">{report}</div>',{report:e.message});this.empty(this.form),this.form.insertAdjacentHTML("beforeend",t)}else{if(e.errors.name){var s=document.querySelector('input[name="form-name"]').parentNode;this.addClass(s,"has-error"),a=this.template('<span class="help-block">{report}</span>',{report:e.errors.name}),s.insertAdjacentHTML("beforeend",a)}if(e.errors.email){var r=document.querySelector('input[name="form-email"]').parentNode;this.addClass(r,"has-error"),a=this.template('<span class="help-block">{report}</span>',{report:e.errors.email}),r.insertAdjacentHTML("beforeend",a)}if(e.errors.subject){var n=document.querySelector('input[name="form-subject"]').parentNode;this.addClass(n,"has-error"),a=this.template('<span class="help-block">{report}</span>',{report:e.errors.subject}),n.insertAdjacentHTML("beforeend",a)}if(e.errors.message){var a,o=document.querySelector('textarea[name="form-message"]').parentNode;this.addClass(o,"has-error"),a=this.template('<span class="help-block">{report}</span>',{report:e.errors.message}),o.insertAdjacentHTML("beforeend",a)}}},fail:function(e){console.log(e)}},e}));