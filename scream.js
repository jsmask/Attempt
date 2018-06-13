(function(global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) : (global.Scream = factory());
}(this, (function() {

	var isIE = document.documentMode,
		_defaultConfig$option = null,
		_data=null,
		_sign = /[\s|\~|`|\!|\@|\#|\$|\%|\^|\&|\*|\，|\。|\！|\、|\？|\《|\》|\~|\{|\}|\’|\‘|\“|\”|\(|\)|\-|\_|\+|\=|\||\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\【|\】|\<|\.|\>|\/|\?]/g;

	var defaultConfig = {
		data: [],
		type: "default",
		filter: true,
		debug: true
	};

	var _extends = Object.assign || function(target) {
		for(var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for(var key in source) {
				if(Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};

	function _init() {
		for(var i in _way) {
			if(!Object.prototype.hasOwnProperty(i))
				this.__proto__[i] = _way[i];
		}
	}

	function _warn() {
		var _bool = true;
		if(_defaultConfig$option["data"].length === 0) {
			if(_defaultConfig$option["debug"])
				console.warn("Please pass the parameters!");
			_bool = false;
		} else {
			if(Object.prototype.toString.call(_defaultConfig$option["data"]) !== '[object Array]') {
				console.warn("Data must be an array or a string!");
				_bool = false;
			}
		}
		return _bool
	}

	function _handleArr() {
		var _arr = [],
			_o = {};
		var _a = arguments[0];
		var _type = arguments[1];

		for(var i in _a) {
			if(_o.hasOwnProperty(_a[i].toString()))
				_o[_a[i]]++;
			else
				_o[_a[i]] = 1;
		}
		for(var n in _o) {
			_arr.push({
				key: n,
				num: _o[n]
			})
		}
		this.list = _arr;
		_bubble.call(this, _type);
	}

	function _bubble(type) {
		if(type !== "asc"&&type !== "desc") return this.list;
		var _arr = this.list;
		var i = _arr.length - 1;
		while(i > 0) {　　　　
			var pos = 0;　　　　
			for(var j = 0; j < i; j++) {
				if(type === "asc") {
					if(_arr[j]["num"] > _arr[j + 1]["num"]) {　　　　　　　　
						pos = j;　　　　　　　　
						var tmp = _arr[j];
						_arr[j] = _arr[j + 1];
						_arr[j + 1] = tmp;　　　　　　
					}　
				} else {
					if(_arr[j]["num"] < _arr[j + 1]["num"]) {　　　　　　　
						pos = j;　　　　　　　　
						var tmp = _arr[j];
						_arr[j] = _arr[j + 1];
						_arr[j + 1] = tmp;　
					}
				}　　　　　　　
			}　　　　
			i = pos;　　
		}
		this.list = _arr;
		return this.list;
	}

	var _way = {
		getList: function() {
			var num = arguments[0]&&arguments[0]<this.list.length || this.list.length;
			var _list = this.list ? this.list : this;
			var _l = [];
			for(var i = 0; i < num; i++) {
				_l.push(_list[i]);
			}
			return _l;
		},
		toMax: function() {
			var _ret = [];
			var _type = _defaultConfig$option["type"];
			var _list = this.list ? this.list : this;
			var _max = 1;
			switch(_type) {
				case "asc":
					_max = _list[_list.length - 1]["num"];
					for(var i = _list.length - 1; i > 0; i--) {
						if(_max === _list[i]["num"])
							_ret.push(_list[i])
						else break;
					}
					break;
				case "desc":
					_max = _list[0]["num"];
					for(var i = 0; i < _list.length; i++) {
						if(_max === _list[i]["num"])
							_ret.push(_list[i])
						else break;
					}
					break;
				default:
					for(var i = 0; i < _list.length; i++) {
						_max = Math.max(_list[i]["num"], _max);
					}
					for(var i = 0; i < _list.length; i++) {
						if(_list[i]["num"] === _max)
							_ret.push(_list[i]);
					}
					break;
			}
			return _ret;
		},
		toMin: function() {
			var _ret = [];
			var _type = _defaultConfig$option["type"];
			var _list = this.list ? this.list : this;
			var _min = 1;
			switch(_type) {
				case "desc":
					_min = _list[_list.length - 1]["num"];
					for(var i = _list.length - 1; i > 0; i--) {
						if(_min === _list[i]["num"])
							_ret.push(_list[i])
						else break;
					}
					break;
				case "asc":
					_min = _list[0]["num"];
					for(var i = 0; i < _list.length; i++) {
						if(_min === _list[i]["num"])
							_ret.push(_list[i])
						else break;
					}
					break;
				default:
					for(var i = 0; i < _list.length; i++) {
						_min = Math.min(_list[i]["num"], _min);
					}
					for(var i = 0; i < _list.length; i++) {
						if(_list[i]["num"] === _min)
							_ret.push(_list[i]);
					}
					break;
			}
			return _ret;
		},
		toAsc: function() {
			_defaultConfig$option["type"] = "asc"
			_bubble.call(this, _defaultConfig$option["type"])
			if(_warn.call(this)) return this;
		},
		toDesc: function() {
			_defaultConfig$option["type"] = "desc"
			_bubble.call(this, _defaultConfig$option["type"])
			if(_warn.call(this)) return this;
		},
		toRemove: function() {
			if(!arguments[0]) return this;
			var _key = arguments[0];
			var _list = this.list ? this.list : this;
			var _arr = [];
			for(var i = 0; i < _list.length; i++) {
				if(_list[i]["key"] !== _key)
					_arr.push(_list[i])
			}
			this.list = _arr;
			return this;
		},
		toAvg: function(isfloor) {
			var _sum = 0,
				_avg = 1,
				_list = this.list ? this.list : this;
			for(var i = 0; i < _list.length; i++) {
				_sum += _list[i]["num"];
			}
			_avg = isfloor ? ~~(_sum / _list.length) : _sum / _list.length
			return _avg;
		},
		toSearch: function(key) {
			if(!key) return {key:"",num:0}
			_list = this.list ? this.list : this;
			var _arr = [];
			for(var i = 0; i < _list.length; i++) {
				if(_list[i]["key"] === key)
				return _list[i]
			}
			var _data=_defaultConfig$option["data"];
			if(typeof _data=="object"){
				_data=_data.join('');
			}
			return {
				key:key,
				num:(_data.split(key).length-1)
			}
		},
		toLink: function() {
			return this;
		}
	}

	var scream = function() {
		var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		_defaultConfig$option = _extends({}, defaultConfig, _options);
		_data = _defaultConfig$option["data"];
		if(_defaultConfig$option["filter"]) {			
			if(typeof _defaultConfig$option["data"] === 'string') {
				_defaultConfig$option["data"] = _data.replace(_sign, "").split('');
			}
		} else {
			_defaultConfig$option["data"] = _data.split('')
		}
		_handleArr.call(this, _defaultConfig$option["data"], _defaultConfig$option["type"]);
		_init.call(this);
		if(_warn.call(this)) return this;
	}

	return scream;
})))
