// ==UserScript==
// @name         Process
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       whoisyourdaddy
// @match        https://github.com/yplusble/enaea_study
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    //'use strict';
    var colors="red";
    var time=getTimes();
    var pa = document.createElement('p');
    var i=0; var j=0;
    var n=3;//最大等待次数
    var k=0;

    var tm=setInterval(function(){

        if(document.getElementsByClassName("video_cont")[0].childElementCount == 2){
            document.getElementsByClassName("video_cont")[0].appendChild(pa);
        }
        if(document.getElementsByClassName("video_red1")[0].children[0].style.color==colors){//如果当前已经看完
            showInfo("当前视频已看完，将点击下一视频");
            if(document.getElementsByClassName("video_red1")[0].nextSibling.nextSibling===null){
                window.clearInterval(tm);
                showInfo('当前课程没有需要学习的内容了！');
                var backref=document.getElementsByClassName('video_goback')[0].getAttribute('href').replace('page','required');
                document.getElementsByClassName('video_goback')[0].setAttribute('href',backref);
                document.getElementsByClassName('video_goback')[0].click();
            }else{
                document.getElementsByClassName("video_red1")[0].nextSibling.nextSibling.children[0].click();//点击下一视频
            }
        }else{
            if(document.getElementsByClassName("public_cont")[0]===undefined){
                i++;
                showInfo('共关闭了'+j+'次弹窗！距离上次关闭弹窗已过'+(i*time/60/1000).toFixed(2)+'分钟');
                if(document.getElementsByClassName("plyr--stopped")[0]===undefined){
                    k=0;
                    showInfo('视频正常播放中...');
                }else{
                    k++;
                    showInfo('视频暂停中...');
                    if(k>=n){
                        showInfo('视频已暂停'+k*time/1000+'秒，刷新...');
                        location.reload();
                    }
                }

            }else{
                j++;
                showInfo('第'+j+'次关闭弹窗！');
                if(document.getElementsByClassName('public_btn')[0].childElementCount ==2){
                    showInfo("继续学习！");
                    document.getElementsByClassName('public_btn')[0].children[1].click();
                }else{
                    showInfo("开始学习！");
                    document.getElementsByClassName('public_btn')[0].children[0].click();
                }
            }
        }
    },time);
})();

function getTimes(){
    var times=Math.random()*5 + 3;//1-9
    times=times*1000;
    return times
}

function showInfo(str){
    console.log(str);
    document.getElementsByClassName("video_cont")[0].children[2].innerText=str;
}
