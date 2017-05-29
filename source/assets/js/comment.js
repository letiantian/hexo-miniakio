(function () {
    var isDuoshuoDisplay = true;
    var btn = $("#change-discuss-btn");
    var text01 = '正在使用多说，点击切换到Disqus';
    var text02 = '正在使用Disqus，点击切换到多说';
    btn.text(text01);
    btn.click(function() {
        console.log('click');
        if (isDuoshuoDisplay == true) {
            btn.text(text02);
            isDuoshuoDisplay = false;
            $("#disqus_thread").show();
            $("#ds-thread").hide();
        }
        else {
            btn.text(text01);
            isDuoshuoDisplay = true;
            $("#disqus_thread").hide();
            $("#ds-thread").show();
        }
    });
})();