/**
 * @desc 共用js库
 * @AuthorHTL lhywork
 * @DateTime  2016-10-08T13:16:06+0800
 * @Home  lhywork.win
 */
;
(function(win, doc, util) {
    //配置链接
    util.baseUrl = "http://192.168.1.100:8080";
    util.ip = "http://192.168.1.100:8080";
    /**
     * querySelector() 方法返回文档中匹配指定 CSS 选择器的一个元素
     * @action  querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代
     * @param  {[type]} selector [description]
     * @param  {[type]} context  [description]
     * @return {[type]}          返回第一个匹配到的元素
     */
    util.$ = function(selector, context) {
        context = context || document
        if (typeof context === "string") {
            context = document.querySelector(context)
        }
        return context.querySelector(selector)
    };
    /**
     * 返回当前文档中匹配一个特定选择器的所有的元素(使用深度优先，前序遍历规则这样的规则遍历所有文档节点) .返回的对象类型是 NodeList.
     * @param  {[type]} selector [description]
     * @param  {[type]} context  [description]
     * @return {[NodeList]}      NodeList
     */
    util.$$ = function(selector, context) {
        context = context || document
        if (typeof context === "string") {
            context = document.querySelector(context)
        }
        return context.querySelectorAll(selector)
    };
    /**
     * UA 判断客户端的类型
     * @type {Object}
     */
    util.UA = {
        isMobile: function (A) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? !0 : !1
        },
        isWeiXin: function () {
            return /MicroMessenger/i.test(navigator.userAgent) ? !0 : !1
        },
        isWeibo: function () {
            return /Weibo/i.test(navigator.userAgent) ? !0 : !1
        },
        isIphone: function () {
            return /iPhone/i.test(navigator.userAgent) ? !0 : !1
        },
        isAndroid: function () {
            return /Android/i.test(navigator.userAgent) ? !0 : !1
        }
    };
    /**
     * 获取url参数
     * @param  {String} name 参数值
     * @return {[type]}      [description]
     */
    util.getUrlparam = function(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };
    /**
     * base64Encode转化
     * @param  {[type]} input [description]
     * @return {[type]}       [description]
     */
    util.base64Encode = function(input) {
            var rv;
            rv = encodeURIComponent(input);
            rv = unescape(rv);
            rv = window.btoa(rv);
            return rv;
        }
    /**
     * 信息弹出框
     * @param  {[String]} msg 提示信息
     * @return {[type]}     [description]
     */
    util.showMsg = function(msg) {      
        var win = '<div class="error-mask">\
            <div class="error-container">\
            <h1> 后台管理系统-信息提示 </h1>\
                <div class="errorcon">\
                <span><i class="icon-frown-o"></i>\
                    ' + msg + '</span>\
                <span style="display:none;"><i class="icon-smile-o"></i>操作失败!</span>\
                </div>\
            </div>';
        $("body").append(win);
        $(".error-container").fadeIn(200);
        $(".error-mask").on("click", function() {
            $(".error-container").fadeOut(200, function() {
                $(".error-mask").remove();
            });
        })
    };
    /**
     * 加载loading动画
     * @return {[type]} [description]
     */
    util.loading = function() {
        var win = '<div class="J-loading">\
            <div class="loading-gif">\
                <i></i>\
                <i></i>\
                <i></i>\
                <i></i>\
                <i></i>\
                <i></i>\
                <i></i>\
                <i></i>\
            </div>\
        </div>';
        $("body").append(win);
        $(".J-loading").fadeOut(500, function() {
            $(".J-loading").remove();
        });
    };
    /**
     * 标签弹出框
     * @return {[type]} [description]
     */
    util.showtag = function() {
        var win = '<div class="diag-mask">\
            <div class="diag-main">\
                <p class="diag-title">新增标签<span class="close_win">x</span></p>\
                <div class="diag-content">\
                    <input type="input" style="width:100%;margin-top: 35px;" class="form-control1 form-width" id="tag-title" placeholder="标签标题">\
                </div>\
                <p class="diag-btn">\
                    <button type="button" class="btn btn-primary tag_win">确定</button>\
                </p>\
            </div>\
        </div>';
        $("body").append(win);
        $(".diag-mask").fadeIn(200);
        $(".close_win").on("click", function() {
            $(".diag-mask").fadeOut(200, function() {
                $(".diag-mask").remove();
            });
        })
    };
    util.showistrue = function(msg, id) {
        var win = '<div class="diag-mask">\
            <div class="diag-main">\
                <p class="diag-title">提醒<span class="close_win">x</span></p>\
                <div class="diag-content">\
                    ' + msg + '\
                </div>\
                <p class="diag-btn">\
                    <button type="button" class="btn btn-primary true_win" data-id="' + id + '">确定</button>\
                </p>\
            </div>\
        </div>';
        $("body").append(win);
        $(".diag-mask").fadeIn(200);
        $(".close_win").on("click", function() {
            $(".diag-mask").fadeOut(200, function() {
                $(".diag-mask").remove();
            });
        })
    };
    /**
     * 页面开始加载进度条
     * @param  {Number} pnum 进度
     * @param  {Number} _loading_num 初始化进度
     * @return {[type]}      [description]
     */
    util.loading_process = function(pnum, _loading_num) {
        $("#loadnum").attr("process", "0").width('0%');
        var timer = setInterval(function() {
            if (_loading_num < pnum) {
                _loading_num += 1;
                document.getElementById("loadnum").style.width = _loading_num + "%";
            }
            if (document.readyState == "complete") {
                clearInterval(timer);
                document.getElementById("loadnum").style.width = "100%";
                $("#loadnum").fadeOut(200, function() {
                    $("#loadnum").remove();
                });
            }
            console.info(document.readyState);
        }, 20);
    };
    /**
     * ajax调用
     * @param  {[type]} url      [description]
     * @param  {[type]} data     [description]
     * @param  {[type]} type     [description]
     * @param  {[type]} dataType [description]
     * @return {[type]}          [description]
     */
    util.ajax = function(url, data, type, dataType) {
        var url = url || "";
        var data = data || {};
        var type = type || "get";
        var dataType = dataType || "jsonp";
        return $.ajax({
            url: url,
            data: data,
            type: type,
            dataType: dataType
        });
    };
    //添加手机模拟的console
    util.showMobileConsole = function(isopen) {
        if (isopen) {
            var idname = "mobile-consolelog";
            window.console.log = function(msg) {
                if ($("#" + idname).length <= 0) {
                    var consolenode = document.createElement('div');
                    consolenode.id = idname;
                    consolenode.setAttribute('style', 'background:#000;color:#56fb05;font-size:12px;line-height:20px;height:40px;position:fixed;left:0;top:0;width:100%;margin:0;padding:0;overflow:auto;');
                    document.body.appendChild(consolenode);
                }
                var html = $("#" + idname).innerHTML;
                typeof(msg) == "object" ? msg = JSON.stringify(msg): "";
                $("#" + idname).innerHTML = "|||||" + msg + html;
            }
        }
    };
    /**
     * 原生js创建DOM节点
     * @param {[type]} element    [description]
     * @param {[type]} attributes [description]
     */
    util.DOMCreater = function(element, attributes) {
        var dom = document.createElement(element);
        for (var key in attributes) {
            if (key === 'class') {
                dom.className = attributes['class'];
            } else if (key === 'appendChild') {
                if (Object.prototype.toString.call(attributes[key]) == '[object Array]') {
                    attributes[key].forEach(function(attr) {
                        dom.appendChild(attr);
                    });
                } else {
                    dom.appendChild(attributes[key]);
                }
            } else if (key === 'innerText') {
                dom.innerText = attributes[key];
            } else {
                dom.setAttribute(key, attributes[key]);
            }
        }
        return dom;
    };
    util.toast = function(msg, last) {
        last = last || 2000;
        this.init = function() {
            $('body').append('<div class="util-toast" style="width:200px;line-height:30px;padding:0.2rem;background:rgba(0,0,0,0.7);border-radius:10px;position:fixed;left:50%;margin-left:-100px;color:#fff;top:45%;font-size:14px;text-align:center;box-shadow:0 0 10px #333;z-index:99">' + msg + '</div>');
            setTimeout(function() {
                $('.util-toast').remove();
            }, last)
        }
        this.init();
    };
    util.loadingtext = function(text) {
        var self = this;
        text = text || "";
        this.create = function() {
            var self = this;
            $('.util-loading').remove();
            $('body').append('<div class="util-loading" style="position:fixed;width:100%;height:100%;background:rgba(255,255,255,0.8);z-index:9999;left:0;top:0;"><p style="width:50%;position:absolute;left:25%;top:47%;color:#ddd;font-size:12px;padding-bottom:0.8rem;text-align:center;height:32px;backgrouns-size:25px;z-index:999">' + text + '</p></div>');
        }
        this.destroy = function() {
            $('.util-loading').remove();
        };
        this.create();
    };
    /**
     * 返回顶部
     * @param  {[type]} tpl [description]
     * @return {[type]}     [description]
     */
    util.gotop = function(tpl) {
        tpl = tpl || "";
        this.init = function() {
            $('body').append('<div class="u-gotop" style="width:40px;height:40px;text-align:center;position:fixed;right:-50px;bottom:10px;color:#fff;line-height:40px;line-height:40px;cursor:pointer;background:rgba(0,0,0,0.5);border-radius:50%;-webkit-transform:rotate(700deg);-webkit-transition: all 1s;transition: all 1s;will-change: transform;">' + tpl + '</div>');
            $(window).on('scroll', function() {
                var sctop = $(window).scrollTop();
                if (sctop > 500) {
                    $('.u-gotop').css({
                        'right': '10px',
                        '-webkit-transform': 'rotate(0deg)'
                    });
                } else {
                    $('.u-gotop').css({
                        'right': '-50px',
                        '-webkit-transform': 'rotate(700deg)'
                    });
                }
            });
            $('.u-gotop').on('click', function() {
                $('body').animate({
                    'scrollTop': 0
                }, 300);
            });
        }
        this.init();
    };
    util.tips=function(msg,url,time){
        var win = '<div class="error-mask">\
            <div class="error-container">\
            <h1> 后台管理系统-信息提示 </h1>\
                <div class="errorcon">\
                <i class="icon-smile-o"></i>\
                    ' + msg + '\
                <span style="display:none;"><i class="icon-frown-o"></i>操作失败!</span>\
                </div>\
                <h4 class="smaller">页面自动 <a id="url" href="' + url + '">跳转</a> 等待时间： <b id="wait">' + time + '</b>s</h4>\
            </div>';
        $("body").append(win);
        var wait = document.getElementById('wait'),
            href = document.getElementById('url').href;
        var interval = setInterval(function(){
            var time = --wait.innerHTML;
            if(time <= 0) {
                location.href = href;
                clearInterval(interval);
            };
        }, 1000);
    };
}(window, window.document, window.util || (window.util = {})));