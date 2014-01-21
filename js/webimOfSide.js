/**
 * Created by wqh on 14-1-8.
 */
$(function(){
    "use strict";
    //侧边栏 头像列表html
    var sideListFaceFn = doT.template(document.getElementById("sideListFaceTemplate").text);
    var sideListFaceData = {
        listLearner: [
            {
                id: "uid4285934r2432",
                imgUrl: "./images/temp-face70.jpg",
                name: "李四"
            },
            {
                id: "uid411134325312",
                imgUrl: "",
                name: "张三"
            },
            {
                id: "uid4000r32323299",
                imgUrl: "http://img.staff.xdf.cn/Photo/06/3A/a911e1178bf3725acd75ddbb9c7e3a06_9494.jpg",
                name: "杨义锋"
            },
            {
                id: "uid08678956789009985",
                imgUrl: "./images/temp-face70.jpg",
                name: "王二"
            },
            {
                id: "uid03284374368rjijre",
                imgUrl: "http://img.staff.xdf.cn/Photo/06/3A/a911e1178bf3725acd75ddbb9c7e3a06_9494.jpg",
                name: "王菲"
            },
            {
                id: "uid09r832r32r32iu984983",
                imgUrl: "",
                name: "李亚朋"
            },
            {
                id: "uidjjjawefoewe8842232",
                imgUrl: "",
                name: "周杰伦"
            }
        ],
        /*mentor: {
            id: "uid3200940iofwfjj",
            name: "秦叶"
        },*/
        author: {
            id: "uid00099887327374",
            name: "周杰伦"
        },
        admin: {
            id: "uid737736378388383",
            name: "杨义锋"
        }
    };
    //聊天窗口 模板函数
    var chatDialogFn = doT.template(document.getElementById("chatDialogTemplate").text);
    var chatDialogData = {
        user: {
            name: "",
            imgUrl: "",
            tel: "135 8165 1017",
            mail: "yangyifeng@xdf.cn",
            org: "集团总公司",
            department: "知识管理中心"
        }
    };
    //聊天纪录列表 模板函数
    var listChatLogFn = doT.template(document.getElementById("listChatLogTemplate").text);
    var listChatData = [
        {
            list: [
                {
                    id: "fdid3232323",
                    isMe: false,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想，不知不觉我们都蜕变成了“自干五”每一个我身边在美国读硕、读博、工作的人看完《中国工作的人看完《中国合伙人》都是这个感想。",
                    time: "10:01 AM"
                },
                {
                    id: "fdid355434343",
                    isMe: true,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想，不知不觉我们都蜕变成了“自干五”每一个我身边在美国读硕、读博、工作的人看完《中国工作的人看完《中国合伙人》都是这个感想。",
                    time: "10:01 AM"
                },
                {
                    id: "fdid3111110000",
                    isMe: true,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想...",
                    time: "10:01 AM"
                },
                {
                    id: "fdid30003232344555555",
                    isMe: false,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想，不知不觉我们都蜕变成了“自干五”每一个我身边在美国读硕、读博、工作的人看完《中国工作的人看完《中国合伙人》都是这个感想。",
                    time: "10:01 AM"
                }
            ],
            date: "2013/12/14"
        },
        {
            list: [
                {
                    id: "fdid3232323",
                    isMe: false,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想，不知不觉我们都蜕变成了“自干五”每一个我身边在美国读硕、读博、工作的人看完《中国工作的人看完《中国合伙人》都是这个感想。",
                    time: "10:01 AM"
                },
                {
                    id: "fdid355434343",
                    isMe: true,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想，不知不觉我们都蜕变成了“自干五”每一个我身边在美国读硕、读博、工作的人看完《中国工作的人看完《中国合伙人》都是这个感想。",
                    time: "10:01 AM"
                },
                {
                    id: "fdid3111110000",
                    isMe: true,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想...",
                    time: "10:01 AM"
                },
                {
                    id: "fdid30003232344555555",
                    isMe: false,
                    msg: "每一个我身边在美国读硕、读博、工作的人看完《中国合伙人》都是这个感想，不知不觉我们都蜕变成了“自干五”每一个我身边在美国读硕、读博、工作的人看完《中国工作的人看完《中国合伙人》都是这个感想。",
                    time: "10:01 AM"
                }
            ],
            date: "2013/12/14"
        }
    ];

    $("body").append(sideListFaceFn(sideListFaceData));
    var $sideListFace = $("#sideListFace");
    var $sideListLearner = $sideListFace.find(".side_listFace");
    var hideHeight = $sideListLearner.height() - $sideListFace.children(".side_listFace_wrap").height();
    $(window).on("resize load",function(){
        $sideListLearner.css("top",0);
        hideHeight = $sideListLearner.height() - $sideListFace.children(".side_listFace_wrap").height();
        if(hideHeight > 0){
            $sideListLearner.nextAll(".next").removeClass("hide");
        } else {
            $sideListLearner.nextAll(".next").addClass("hide");
        }
        $sideListLearner.nextAll(".prev").addClass("hide");
    });
    $sideListFace.find(".prev,.next").bind("click",function(e){
        e.preventDefault();
        var $this = $(this);
        if($(this).hasClass("prev") && $sideListLearner.css("top") !== 0 +"px"){
            $sideListLearner.animate({top: parseInt($sideListLearner.css("top"))>-59 ? 0 : "+=59"},"fast","swing",function(){
                $this.next(".next").removeClass("hide");
                if($sideListLearner.css("top") === 0 +"px"){
                    $this.addClass("hide");
                }
            });
        } else if($(this).hasClass("next") && $sideListLearner.css("top") !== -hideHeight +"px"){
            $sideListLearner.animate({top: hideHeight+parseInt($sideListLearner.css("top"))<59 ? -hideHeight : "-=59"},"fast","swing",function(){
                $this.prev(".prev").removeClass("hide");
                if($sideListLearner.css("top") === -hideHeight +"px"){
                    $this.addClass("hide");
                }
            });
        }
    }).end().find(".side_support_list>li>a, .side_listFace>li>a").bind("click",function(e){
            e.preventDefault();
            if(!$(this).parent().hasClass("disabled")){
                $(this).parent().addClass("active").siblings().removeClass("active");
                $("#side_webim").remove();
                chatDialogData.user.id = $(this).attr("href").substring(1);
                chatDialogData.user.name = $(this).attr("title");
                chatDialogData.user.imgUrl = $(this).children("img").attr("src");
                //chatDialogData = ajax 取
                $sideListFace.after(chatDialogFn(chatDialogData));
                var $listChat = $("#listChatLog");
                $listChat.html(listChatLogFn(listChatData));
                $("#side_webim .formWebim").validate({
                    submitHandler: function(form){
                        var d = new Date();
                        var currDate = formatDate(d);
                        var item = {
                            id: "temp",
                            isMe: true,
                            msg: $("#webim_input").val(),
                            time: d.getHours()+":"+ d.getMinutes()+" "+ (d.getHours()>12 ? "PM" : "AM")
                        };
                        if(currDate === listChatData[listChatData.length-1].date ){
                            listChatData[listChatData.length-1].list.push(item);
                        } else {
                            listChatData.push({
                                list:[item],
                                date: currDate
                            });
                        }
                        $listChat.html(listChatLogFn(listChatData));
                        $listChat.parent(".side_webim_chatLog")
                            .animate({scrollTop:60000},"slow");
                        form.reset();

                    }
                });
            }
        });
    function formatDate(d){
        return  d.getFullYear()+ "/" + ((d.getMonth()+1)<10 ? "0"+(d.getMonth()+1) : d.getMonth()+1) + "/" + (d.getDate()<10 ? "0"+ d.getDate() : d.getDate());
    }
});
