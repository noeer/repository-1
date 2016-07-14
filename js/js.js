/* --- Placeholder --- */


function placeholderSetup(param_id) {
	var el = document.getElementById(param_id);

	if(!el) return;
	if(el.type != 'text') return;

    var ph = el.placeholder;
    el.placeholder = "";

	if( ph && ph != "" ) {
		el.value = ph;
		el.style.color = '#aaaaaa';
		el.is_focused = 0;
		el.onfocus = placeholderFocus;
	 	el.onblur = function () {
		  if( this.is_focused && ph && this.value == "" ) {
    	    this.is_focused = 0;
            this.value = ph;
            this.style.color = '#aaaaaa';
          };
        };
	};
};

function placeholderFocus() {
  if(!this.is_focused) {
    this.is_focused = 1;
    this.value = '';
    this.style.color = '#555555';
  };
};


 $(document).ready(function(){       // JQuery

 function anchor_calcul(name_param, time_param){      // плавное перемещение к якорю
   var destination = $(name_param).offset().top;
   $('html,body').animate( { scrollTop: destination }, time_param );
};

function filter_tell(name_param){    // фильтр ввода цифр в поле  "ТЕЛЕФОН" 
   var input_tell = $(name_param);
   var tell_value = input_tell.val();
   var new_tell_value = tell_value.replace(/[^0-9- ]/g, '');
   new_tell_value = new_tell_value.replace(/^( |-)/g, '');
   new_tell_value = new_tell_value.replace(/\D{2,}/g, '');
   input_tell.val(new_tell_value);
};



 });                                 // конец ready