/*********公共js方法文件*********/
$(function() {
    
})
//检查是否登录
function checekLogion() {
    return Storage.cookie.get('token') ? true : false
}
//登录
function login() {
    window.open('www.baidu.com', '_self');
}
//退出登录
function loginOut() {
    Storage.cookie.clear();
    // Storage.cookie.delete('token');
    Storage.local.clear();
    window.location.reload();
}
//回到顶部
function goTop(){
    $("html,body").animate({scrollTop:'0px'},300);
}
//Storage本地存储
const Storage = {
    pre: 'cl_',
    local: {
        get(name) {
            if (!name) return
            name = Storage.pre + name;
            return JSON.parse(window.localStorage.getItem(name))
        },
        set: function(name, content) {
            if (!name) return
            name = Storage.pre + name;
            if (typeof content !== 'string') {
                content = JSON.stringify(content)
            }
            window.localStorage.setItem(name, content)
        },
        delete(name) {
            if (!name) return
            name = Storage.pre + name;
            window.localStorage.removeItem(name)
        },
        clear() {
            window.localStorage.clear();
        }
    },
    cookie: {
        get(cname) {
            var name = Storage.pre + cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i].trim();
                if (c.indexOf(name) == 0) return JSON.parse(c.substring(name.length, c.length));
            }
            return "";
        },
        set(cname, cvalue, exdays = 7) {
            var name = Storage.pre + cname;
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toGMTString();
            if (typeof cvalue !== 'string') {
                cvalue = JSON.stringify(cvalue)
            }
            document.cookie = name + "=" + cvalue + "; " + expires;
        },
        delete(cname) {
            this.set(cname, '', -1);
            //var name = Storage.pre+cname;
            // document.cookie=name+"='';expires="+(-1);
        },
        clear() {
            var keys = document.cookie.match(/[^ =;]+(?==)/g)
            //删除所有cookie
            if (keys) {
                for (var i =0; i<keys.length; i++){
                    var name = keys[i].replace(Storage.pre,'')
                    this.set(name, '', -1); 
                } 
            }
        }
    }
}

//禁止穿透滚动
function DisabledPenetratScroll(el) {
    $(el).hover(function() {
        var height = $(el).scrollHeight; //滚动内容的高度
        var boxHeight = $(el).height(); //滚动盒子的高度
        $(el).scroll(function() {
            var _top = $(el).scrollTop(); //滑动距离top的高度
            if (_top === (height - boxHeight)) { //理想情况下 滑动到最底部是等于scrollHeight-boxHeight的  
                $(el).scrollTop(_top - 1); //改变scrollTop值 永远滑不到最底部
            }
        })
    }, function() {
        $(el).off('scroll');
    });
}