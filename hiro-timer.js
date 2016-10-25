

var exports = module.exports = {};


if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}



function Timer() 
{
	this.TIMES={}
}

Timer.prototype.start = function(key){
	if(this.TIMES[key]){
		return false;
	}
	this.TIMES[key]={'start': Date.now()}
}

Timer.prototype.stop = function(key){
	if(!this.TIMES[key]){
		return false;
	}
	this.TIMES[key]['stop']= Date.now()
}

Timer.prototype.toString = function(){
	var s = ''
	var keys = Object.keys(this.TIMES)
	keys.forEach(function(key,idx,keys){
		var i = this.TIMES[key]
		var d = ''
		if(i && i['start'] && i['stop']){
			d=i['stop']-i['start']
		}
		s+=key+' '+i['start']+' '+i['stop']+' '+d+"\n"
	},this)
	return s
}

Timer.prototype.valueOf = function(){
	return this.TIMES
}

exports = new Timer()


function test()
{
	var T = new Timer()
	T.start('test')
	T.stop('test')
	console.log(T.toString())
	console.log(T.valueOf())
	console.log(T)
	
}

if(require.main === module){
	console.log('running standalone');
	test();
//	main_loop();		
}

