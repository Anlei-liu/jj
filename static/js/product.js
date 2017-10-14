var layer = {
    dom:null,
    show: function (src) {
        var me = this;
        (function (src) {
            var model = $('<div class="model"></div>');
            var lay = $('<div class="layer"></div>');
            var $img = $('<img src="" />');
            var close = $("<i class='close'>×</i>");
            $img.attr("src",src);
            lay.append($img,close);
            model.append(lay);
            $("body").append(model);
            $(".model").fadeIn();
            me.close();
        })(src);
    },
    close: function () {
        $(".model").one("click",function () {
            $(".model").fadeOut(function () {
                $(this).remove();
            })
        })
    }
};

$('.lat img').click(function () {
    layer.show($(this).parents("li").children("img").attr("src"));
})