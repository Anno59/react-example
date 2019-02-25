/**
 * Created by 372025284@qq.com on 2018.12.15.
 */

// [附加题] 请实现下面的自定义事件 Event 对象的接口，功能见注释(测试1)
// 该 Event 对象的接口需要能被其他对象拓展复用(测试2)
// 测试1

var Event = {
    on : function(event,callback){
        if(typeof this.handle === 'undefined'){
            this.handle = {}
        }

        if(!(this.handle[event] instanceof Array)){
            this.handle[event] = [];
        }

        this.handle[event].push(callback);
    },
    emit : function(){
        if(this.handle[arguments[0]] != undefined){
            for(var i = 0; i < this.handle[arguments[0]].length; i++){
                this.handle[arguments[0]][i](arguments[1])
            }
        }

    }
};

Event.on('test', function (result) {
    console.log(result);
});
Event.on('test', function () {
    console.log('test');
});
Event.emit('test', 'hello world'); // 输出 'hello world' 和 'test'


// 测试2
var person1 = {};
var person2 = {};
Object.assign(person1, Event);
Object.assign(person2, Event);
person1.on('call1', function () {
    console.log('person1');
});
person2.on('call2', function () {
    console.log('person2');
});
person1.emit('call1'); // 输出 'person1'
person1.emit('call2'); // 没有输出
person2.emit('call1'); // 没有输出
person2.emit('call2'); // 输出 'person2'

var Event = {
    on : function(event,callback){
        if(typeof this.handle === 'undefined'){
            // this.handle = {}
            Object.defineProperty(this,'handle',{
                value:{},
                configurable:true,
                enumerable: false,
                writable:true
            })
        }

        if(!(this.handle[event] instanceof Array)){
            this.handle[event] = [];
        }

        this.handle[event].push(callback);
    },
    emit : function(){
        if(this.handle[arguments[0]] != undefined){
            for(var i = 0; i < this.handle[arguments[0]].length; i++){
                this.handle[arguments[0]][i](arguments[1])
            }
        }

    }
};

function EventTarget(){
    this.handlers = {};
}
EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler){
        if (typeof this.handlers[type] == "undefined"){
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    },
    fire: function(event){
        if (!event.target){
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array){
            var handlers = this.handlers[event.type];
            for (var i=0, len=handlers.length; i < len; i++){
                handlers[i](event);
            }
        }
    },
    removeHandler: function(type, handler){
        if (this.handlers[type] instanceof Array){
            var handlers = this.handlers[type];
            for (var i=0, len=handlers.length; i < len; i++){
                if (handlers[i] === handler){
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }
};