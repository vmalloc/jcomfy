var _comfy_keymap = {};

_comfy_keymap[90] = "scroller";
_comfy_keymap[73] = "stop";
_comfy_keymap[65] = "handset_up";
_comfy_keymap[74] = "call_snail";
_comfy_keymap[72] = "call_bear";
_comfy_keymap[71] = "call_dog";
_comfy_keymap[70] = "call_elephant";
_comfy_keymap[68] = "call_comfy";
_comfy_keymap[79] = "sun";
_comfy_keymap[76] = "moon";
_comfy_keymap[83] = "cloud";

_comfy_keymap[75] = "red";
_comfy_keymap[78] = "yellow";
_comfy_keymap[66] = "blue";
_comfy_keymap[86] = "green";
_comfy_keymap[67] = "orange";
_comfy_keymap[88] = "purple";

_comfy_keymap[69] = "piano";
_comfy_keymap[82] = "flute";
_comfy_keymap[89] = "trumpet";
_comfy_keymap[84] = "music";
_comfy_keymap[85] = "drum";

function _handle_keyup(evt, handler_or_key, handler) {
	var comfy_key_name = _comfy_keymap[evt.which];
	if (typeof comfy_key_name != 'undefined') {
	    evt.comfy_key = comfy_key_name
	    if (typeof handler == 'undefined') {
		handler_or_key.apply(this, [evt]);
	    } else if (handler_or_key == comfy_key_name) {
		handler.apply(this, [evt]);
	    }
	}
	return this;
}

jQuery.fn.comfy = function(handler_or_key, handler) {
    jQuery(this).keyup(function(evt) { _handle_keyup(evt, handler_or_key, handler); });
};

