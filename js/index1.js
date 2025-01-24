(function () {
  //获取宽度
  var witdhDefual = parseFloat($('.li5box-car').css('width').replace(/[^0-9\-,]/g, '')) + 7
  let num = $('.li5box-ul .li5box-car').length;
  $('.li5box-ul').css('width', (num) * witdhDefual + 'px');
  var MAX=(num-1)*witdhDefual


  $('#leftimg').click(function () {
    //获取当前的偏移量
    let value = parseFloat($('#li5boxul').css("transform").replace(/[^0-9\-,]/g, '').split(',')[4])
    
    if (value <= 0) {
      value = value * -1
    }
 
    if (value >=MAX) {
      return false
    }

    //转移下一个偏移量
    let result = parseFloat(value + witdhDefual) * -1
    $('#li5boxul').css('transform', 'translate3d(' + result + 'px,0px,0px)');

  })
  $('#rightimg').click(function () {
    //获取当前的偏移量
    let value = parseFloat($('#li5boxul').css("transform").replace(/[^0-9\-,]/g, '').split(',')[4])
    if (value >= 0||value<MAX*-1) {
      return false
    }
   
    //转移下一个偏移量
    let result=parseFloat(value+witdhDefual)
    $('#li5boxul').css('transform','translate3d('+result+'px,0px,0px)')
  })


  $('#playbuttom').click(function () {
    $('#zhezhao').addClass('active')
    document.getElementById('videoResumeC').play();
  })

  $('#musicwrap').click(function () {
    console.log(14563)
    if ($(this).hasClass('paused')) {
      $(this).removeClass('paused')
      $('#play1')[0].play()
    } else {
      $(this).addClass('paused')
      $('#play1')[0].pause()
    }
  })

  document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const wxQrCode = document.getElementById('wxQrCode');
    
    contactBtn.addEventListener('click', function() {
      wxQrCode.style.display = 'block';
    });
    
    // 点击二维码外部区域关闭
    document.addEventListener('click', function(e) {
      if (!wxQrCode.contains(e.target) && e.target !== contactBtn) {
        wxQrCode.style.display = 'none';
      }
    });
  });


  // //一段正则，匹配所有_min.的图片src属性
	// var test = /_min\./
	// //遍历所有的图片节点
	// $("img").each(function(index,obj){	
	// 	if(test.test($(this).attr("src"))){
	// 		var reSrc = $(this).attr("src").replace(test,".");
	// 		$(this).attr("src",reSrc)
	// 	}		
	// })

})()
