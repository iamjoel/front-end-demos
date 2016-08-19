var $ = require('jquery');
var CountTime = require('./count-time.js');

$(document).ready(function() {
  var $demos = $('.demo-item');

  // 普通用法
  (function($wrap) {
    var $countTime = $('.count-time', $wrap);
    var countTime = new CountTime({
      init: {
        hour: 10,
        minute: 59,
        second: 58
      }
    });

    var $controlBtn = $('.control-btn', $wrap);
    $controlBtn.click(function() {
      if (countTime.isRun()) {
        countTime.stop();
        $controlBtn.text('开始');
      } else {
        countTime.start();
        $controlBtn.text('运行');
      }
    });
    setInterval(function() {
      $countTime.text(formatTime(countTime.getTime()));
    }, 500);
  })($demos.eq(0));

  // 倒计时
  (function($wrap) {
    var $countTime = $('.count-time', $wrap);
    var countTime = new CountTime({
      init: {
        hour: 1,
        minute: 0,
        second: 1
      },
      reverse: true
    });
    setInterval(function() {
      $countTime.text(formatTime(countTime.getTime()));
    }, 500);
  })($demos.eq(1));

  // 倒计时 结束回调
  (function($wrap) {
    var $countTime = $('.count-time', $wrap);
    var countTime = new CountTime({
      init: {
        hour: 0,
        minute: 0,
        second: 2
      },
      reverse: true,
      completeFn: function() {
        console.log('completed~')
      }
    });
    setInterval(function() {
      $countTime.text(formatTime(countTime.getTime()));
    }, 500);
  })($demos.eq(2));








  function formatTime(timeObj) {
    return [fillZero(timeObj.hour), fillZero(timeObj.minute), fillZero(timeObj.second)].join(' : ');
  }

  function fillZero(num) {
    if (num < 10) {
      num = '0' + num;
    }
    return num;
  }

});