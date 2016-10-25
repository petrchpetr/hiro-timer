

var exports = module.exports = {};

var TIMES={}

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}





exports.start = function(key){
	if(TIMES[key]){
		return false;
	}
	TIMES[key]={'start': Date.now()}
}

exports.stop = function(key){
	if(!TIMES[key]){
		return false;
	}
	TIMES[key]['stop']= Date.now()
}

exports.toString = function(){
	var keys=[]
	var s = ''
	Object.keys(TIMES).forEach(function(key){
		var i = TIMES[key]
		var d = ''
		if(i && i['start'] && i['stop']){
			d=i['stop']-i['start']
		}
		s+=key+' '+i['start']+' '+i['stop']+' '+d+"\n"
	})
	return s
}


function test()
{
	exports.start('test')
	exports.stop('test')
	console.log(exports.toString())
	
}

if(require.main === module){
	console.log('running standalone');
	test();
//	main_loop();		
}

