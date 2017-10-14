$(".character li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $(".content").eq($(this).index()).addClass('active').siblings().removeClass('active');
})
layer.photos({
    photos: '#layer-photos-demo'
    ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机（请注意，3.0之前的版本用shift参数）
});