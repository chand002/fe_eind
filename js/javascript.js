/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

var targetProject = document.getElementById('project');
var targetStage =  document.getElementById('stage');

var radioBtn;

function classHide(){
    targetProject.classList.add('hide');
    targetStage.classList.add('hide');
}

radioBtn = document.querySelectorAll('input');

radioBtn[7].onclick = function () {
    targetProject.classList.add('show');
    targetStage.classList.remove('show');
};

radioBtn[8].onclick = function () {
    targetStage.classList.add('show');
    targetProject.classList.remove('show');
};

classHide();

