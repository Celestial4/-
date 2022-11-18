// ==UserScript==
// @name         Entrance
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       whoisyourdaddy
// @match        http://*/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    if(document.getElementsByClassName("lesson1_a_cut")[0].innerText !="必修"){
        document.getElementsByClassName("lesson1_right")[0].getElementsByTagName('a')[1].click();
    }
    setTimeout(()=>{
        let all_lesson=document.getElementsByClassName("lesson1_lists")[0].children[0];//ul
        console.log(all_lesson);
        let lessons=all_lesson.childElementCount;
        for (let i = 0; i < lessons; i++) {
            console.log("已经看过"+i+1+"个小节视频");
            if(all_lesson.children[i].getElementsByClassName("lesson_pass").length === 0){
                console.log(all_lesson.children[i].getElementsByClassName("lesson1_a")[0].getElementsByTagName('a')[0]);
                all_lesson.children[i].getElementsByClassName("lesson1_a")[0].getElementsByTagName("a")[0].click();
                break;
            }
        }
    },5000);
})();