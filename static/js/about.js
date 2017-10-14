var layer = {
    dom:null,
    show: function (src) {
        var me = this;
        (function (src) {
            var model = $('<div class="model"></div>');
            var lay = $('<div class="layer"></div>');
            var $img = $('<div class="flowplayer" data-swf="flowplayer.swf" data-ratio="0.4167">'+
                            '<video>'+
                                '<source type="video/mp4" src=" '+ src +' ">'+
                            '</video>'+
                        '</div>');
            var close = $("<i class='close'>×</i>");
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

$('.play').click(function () {
    console.log(123);
    layer.show($(this).next().attr("src"));
});