var ARRAY =[];
var options = {

	files: [
		{'url':'..','filename':'...'}
	],
	
	
	success: function () {
	x.lastChild.nodeValue="드랍박스에 저장 완료!";
	},
	// Progress is called periodically to update the application on the progress
    // of the user's downloads. The value passed to this callback is a float
    // between 0 and 1. The progress callback is guaranteed to be called at least
    // once with the value 1.
	
    progress: function (progress) {
	x.lastChild.nodeValue="드랍박스에 첨부파일 저장중";
	},

    // Cancel is called if the user presses the Cancel button or closes the Saver.
    cancel: function () {
	x.lastChild.nodeValue="첨부파일 저장이 취소됨";
	},

    // Error is called in the event of an unexpected response from the server
    // hosting the files, such as not being able to find a file. This callback is
    // also called if there is an error on Dropbox or if the user is over quota.
    error: function (errorMessage) {
	x.lastChild.nodeValue="저장중 문제가 생겼습니다";
	},


	bar: function (p1, p2){
	var TEMP = {url:p1,filename:p2};
	
	ARRAY.push(TEMP);
	
	options.files=ARRAY;
	//this.files[count]['url']=p1;
	//this.files[count]['filename']=p2;
	
	
    }
};

	

function displayimage(integer){

	name1 = "fileToUpload"+integer;
	var f = document.getElementById(name1).files[0];	
	name= "image"+integer;
	var i = document.getElementById(name);
	i.src=window.URL.createObjectURL(f);
	
	
}
