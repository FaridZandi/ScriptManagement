function isMobileUserAgent() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function scriptDetectScreen() {
    var windowWidth = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (windowWidth < 768) {
        return "mobile";
    }
    else if (windowWidth <= 991) {
        return "tablet";
    }
    else if (windowWidth < 1200) {
        return "desktop";
    }
    else
        return "largeDevice";
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function scriptGetTarget(content) {
    if (content.notExist()) {
        if (content.target_set_interval_id !== null) {
            var selectors = content.get_target_selectors();
            for (var i = 0; i < selectors.length; i++) {
                if (selectors[i][0] != null) {
                    console.log("Target selector found!");
                    clearInterval(content.target_set_interval_id);
                    content.target = selectors[i][0];
                    content.targetPosition = selectors[i][1];
                    getJSON(content.url_format(), function (a) {
                        content.extData = JSON.parse(a).data;
                        if (content.extData.length)
                            content.build(content);
                        else
                            console.log("Response Is Empty!");
                    }, function (a) {
                        console.log("Request Error!");
                        contentsCompleted += 1;
                    });
                    break;
                }
            }
        }
    }
    else {
        clearInterval(content.target_set_interval_id);
    }
}
function callViewport() {
    var now = new Date();
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    var exist_script = document.querySelector("#yn_viewport-script");
    if (exist_script) {
        exist_script.remove();
    }
    script.id = 'yn_viewport-script';
    script.async = true;
    var script_address = 'https://cdn.yektanet.com/vp_woebegone/viewport.js';
    script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() +
        '0' + now.getHours();
    if (document.getElementById("yn_viewport-script") == null)
        head.appendChild(script);
}
var viewport_interval_limit = 0;
var viewport_interval = setInterval(function () {
    if (viewport_interval_limit < 3000 && contentsCount != 0 && contentsCount === contentsCompleted) {
        clearInterval(viewport_interval);
        callViewport();
    }
    else {
        viewport_interval_limit += 1;
    }
}, 100);
function getJSON(url, b, c) {
    var httpRequest = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    httpRequest.open("GET", url, !0),
        httpRequest.withCredentials = !0,
        httpRequest.onreadystatechange = function () {
            var a;
            4 == httpRequest.readyState && (a = httpRequest.status, 200 == a ? b && b(httpRequest.response) : c && c(a));
        };
    httpRequest.send();
}
var windowWidth = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
var windowHeight = window.innerHeight ||
    document.documentElement.clientHeight;
var screenWidth = window.screen.width ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
var screenHeight = window.screen.height ||
    document.documentElement.clientHeight;
var isMobile, site_name;
var contentsCount = 0;
var contentsCompleted = 0;
function getMediaQuery(media_queries) {
    var i = 0;
    var ans;
    while (windowWidth >= parseInt(Object.keys(media_queries)[i])) {
        ans = media_queries[Object.keys(media_queries)[i]];
        i++;
    }
    return ans;
}
function scriptAppendToDOM(content) {
    if (content.notExist()) {
        var newDiv = htmlToElement(content.box_template);
        if (content.targetPosition === "after") {
            insertAfter(newDiv, content.target);
        }
        else if (content.targetPosition === "before") {
            var parentNode = content.target.parentNode;
            parentNode.insertBefore(newDiv, content.target);
        }
        else if (content.targetPosition === "append") {
            content.target.appendChild(newDiv);
        }
        else {
            console.log("Target position error occurred.");
        }
        contentsCompleted += 1;
        if (content.stickit) {
            if (!isMobileUserAgent() && (scriptDetectScreen() === "desktop" || scriptDetectScreen() === "largeDevice")) {
                content.stickit();
            }
        }
    }
}
function scriptBuild(content) {
    if (content.notExist()) {
        var id = "#" + content.id_with_prefix;
        var base_css = {
            yektanet_div: id + "{width: 100%;display:table;font-family:inherit;} " + id + " a, " + id + " a:hover{text-decoration:none;}" + id + " a{color:rgba(0,0,0,0.87);font-family:inherit;}",
            heading: id + " .yektanet-articles__heading {color: rgba(0,0,0,0.87);font-family: inherit;font-size:inherit;position: relative;width: 100%;height: 40px;}",
            heading_title: id + " .yektanet-articles__heading-title {padding: 0;margin: 0;font-weight: bold;right:5px;margin:0;font-family: inherit;position: absolute;font-size: 1.1em;}",
            heading_branding: id + " .yektanet-articles__heading-branding {position: absolute;left: 5px;width: 120px;} @media screen and (max-width:300px){" + id + " .yektanet-articles__heading-branding{display:none;} }",
            heading_branding_img: id + " .yektanet-articles__heading-branding-image {position: relative;float: left;width: 25px;height: 25px;text-align: center;overflow: hidden;z-index: 3; -webkit-transition: width 0.5s, background-color 0.5s;transition: width 0.5s, background-color 0.5s;} " + id + " .yektanet-articles__heading-branding-image img {vertical-align: middle;}",
            heading_branding_icon_img: id + " .yektanet-articles__heading-branding-icon-image {height:100%;position: absolute;left: 0;z-index: 2;} " + id + " .yektanet-articles__heading-branding-icon-image img {vertical-align:top;width: 25px;height: 25px;}",
            heading_branding_text_img: id + " .yektanet-articles__heading-branding-text-image {height:100%;position: absolute;left: 30px;visibility: hidden;opacity: 0; -webkit-transition: opacity 0.5s linear, visibility 0.5s;transition: opacity 0.5s linear, visibility 0.5s;z-index: 1;}   " + id + " .yektanet-articles__heading-branding-text-image img {height: 19px;width: auto;margin: 3px 0;}",
            heading_branding_label: id + " .yektanet-articles__heading-branding-label {font-size: .8em;font-family: inherit;position: absolute;left: 30px;line-height: 25px;white-space: nowrap;transition:color 0.5s;-webkit-transition:color 0.5s;}  @media screen and (max-width:330px){" + id + " .yektanet-articles__heading-branding-label{display:none;} }",
            heading_branding_hover: "@media screen and (max-width: 1024px){" + id + " .yektanet-articles__heading-branding-text-image{visibility:visible;opacity:1;left:0;}" + id + " .yektanet-articles__heading-branding-icon-image{display:none;}" + id + " .yektanet-articles__heading-branding-image{width:48px;}" + id + " .yektanet-articles__heading-branding{width:128px;}" + id + " .yektanet-articles__heading-branding-label{left:55px;}} @media screen and (min-width: 1025px){" + id + " .yektanet-articles__heading-branding:hover .yektanet-articles__heading-branding-label{color:transparent}  " + id + " .yektanet-articles__heading-branding:hover .yektanet-articles__heading-branding-image{width: 85px!important;} " + id + " .yektanet-articles__heading-branding:hover .yektanet-articles__heading-branding-text-image {opacity:1;visibility:visible;}}",
            item: id + " .item{position:relative;} \n                     " + id + " .item.horizontal{margin-bottom:5px;}",
            item_image: "\n                        " + id + " .item.vertical .item__image {position:relative;width:100%;padding-top:66.66%;}\n                        " + id + " .item.vertical .item__image img {width: 100%;height: auto;object-fit: cover;vertical-align: middle;position:absolute;top:0;right:0;left:0;bottom:0;}\n                        " + id + " .item.horizontal .item__image{float:right;width:33%;}\n                        " + id + " .item.horizontal .item__image {min-height:50px;}\n                        " + id + " .item__image img {width: 100%;height: auto;object-fit: cover;vertical-align: middle;}",
            item_body: "\n                        " + id + " .item__body {padding: 5px;}\n                        " + id + " .item.horizontal .item__body{float:right;width:67%;padding:0 15px;}\n                        " + id + " .item.horizontal .item__body{padding: 0 5px 0 0;}",
            grid: "\n                 " + id + " .grid {padding-right: 5px;padding-left: 5px;float: right;} \n                 " + id + " .grid a:hover .item__title{color:#bc0c00;}",
            content_section: id + " .yektanet-articles__content{padding:0 5px;}",
            content_wrapper: id + " .yektanet-articles__content-wrapper {margin-right:-5px; margin-left:-5px;}",
            border_box: ".borderbox { -webkit-box-sizing: border-box; -moz-box-sizing: border-box;box-sizing: border-box;}",
            vertical_align: id + " .vertically-aligned {position: absolute;top: 50%; -webkit-transform: translateY(-50%);transform: translateY(-50%);}",
            backface: id + " .backface {backface-visibility: hidden; -webkit-backface-visibility: hidden;}",
            clearfix: id + " .clearfix:after," + id + " .clearfix:before{content:\" \";display:table;} " + id + " .clearfix:after{clear:both;} " + id + " .clearfix{zoom:1}"
        };
        if (content.content_type === "text") {
            base_css["yn_globe"] = id + " .yn-globe{width: 20px;height:20px;position: absolute;right: 0;top: 0;}";
            base_css["item_title"] = id + " .item__title {padding-right: 30px;text-align:right;direction: rtl;color:rgba(0,0,0,0.87);font-family:inherit;font-size:1em;margin:0;line-height: 1.5em;height: auto;}";
        }
        else if (content.content_type === "article") {
            base_css["item_image"] = "\n                        " + id + " .item.vertical .item__image {position:relative;width:100%;padding-top:66.66%;}\n                        " + id + " .item.vertical .item__image img {width: 100%;height: auto;object-fit: cover;vertical-align: middle;position:absolute;top:0;right:0;left:0;bottom:0;}\n                        " + id + " .item.horizontal .item__image{float:right;width:33%;}\n                        " + id + " .item.horizontal .item__image {min-height:50px;}\n                        " + id + " .item__image img {width: 100%;height: auto;object-fit: cover;vertical-align: middle;}";
            base_css["item_body"] = "\n                        " + id + " .item__body {padding: 5px;}\n                        " + id + " .item.horizontal .item__body{float:right;width:67%;padding:0 15px;}\n                        " + id + " .item.horizontal .item__body{padding: 0 5px 0 0;}";
            base_css["item_title"] = "\n                     " + id + " .item__title {text-align:right;direction: rtl;color:rgba(0,0,0,0.87);font-family:inherit;font-size:1em;margin:0;line-height: 1.5em;height: 4.5em;overflow: hidden;text-align: right;}";
        }
        var all_css_parts = "";
        for (var key in base_css) {
            if (base_css.hasOwnProperty(key)) {
                all_css_parts += base_css[key];
            }
        }
        var items_in_row = void 0;
        for (var i = 0; i < Object.keys(content.media_queries).length; i++) {
            if (Object.keys(content.media_queries).length - 1 == i) {
                all_css_parts += '@media screen';
                all_css_parts += ' and (min-width:' + Object.keys(content.media_queries)[i] + "px" + ') ';
                items_in_row = content.media_queries[Object.keys(content.media_queries)[i]].items_in_row;
                all_css_parts += "{" + id + " .grid{width:" + 100 / items_in_row + '%;} }';
            }
            else {
                all_css_parts += '@media screen';
                all_css_parts += ' and (min-width:' + parseInt(Object.keys(content.media_queries)[i]) + "px" + ') ';
                all_css_parts += ' and (max-width:' + (parseInt(Object.keys(content.media_queries)[i + 1]) - 1) + "px" + ') ';
                items_in_row = content.media_queries[Object.keys(content.media_queries)[i]].items_in_row;
                all_css_parts += "{" + id + " .grid{width:" + 100 / items_in_row + '%;} }';
            }
        }
        for (var key in content.custom_css) {
            if (content.custom_css.hasOwnProperty(key)) {
                all_css_parts += content.custom_css[key].replace(/{id}/gi, "#" + content.id_with_prefix);
            }
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        var exist_style = document.querySelector("#" + content.id_with_prefix + "-style");
        if (exist_style) {
            exist_style.remove();
        }
        style.id = content.id_with_prefix + "-style";
        style.type = 'text/css';
        style.styleSheet ? style.styleSheet.cssText = all_css_parts : style.appendChild(document.createTextNode(all_css_parts));
        head.appendChild(style);
        //create html
        content.box_template = "<div id=\"" + content.id_with_prefix + "\" class=\"borderbox\">";
        if (content.has_heading) {
            content.box_template +=
                '<div class="yektanet-articles__heading">';
            if (content.has_heading_title) {
                content.box_template += '<p class="yektanet-articles__heading-title vertically-aligned">' + content.article_header + '</p>';
            }
            if (content.has_logo) {
                content.box_template +=
                    '<div class="yektanet-articles__heading-branding vertically-aligned">' +
                        '<a href="https://yektanet.com/?utm_source=' + content.name + '&utm_medium=widget" target="_blank">' +
                        '<div class="yektanet-articles__heading-branding-image">' +
                        '<div class="yektanet-articles__heading-branding-icon-image vertically-aligned backface">' +
                        '<img src="https://cdn.yektanet.com/assets/images/yektanet-logo.png" class="backface">' +
                        '</div>' +
                        '<div class="yektanet-articles__heading-branding-text-image vertically-aligned backface">' +
                        '<img src="https://cdn.yektanet.com/assets/images/yektanet-logo-txt.png" class="backface">' +
                        '</div>' +
                        '</div>';
                if (content.has_branding_label) {
                    content.box_template += '<span class="yektanet-articles__heading-branding-label vertically-aligned backface">' + content.branding_label + '</span>';
                }
                content.box_template +=
                    '</a>' +
                        '</div>';
            }
            content.box_template += '</div>';
        }
        content.box_template +=
            '<div class="yektanet-articles__content">' +
                '<div class="yektanet-articles__content-wrapper clearfix">';
        var nofollow = void 0;
        var orientation_1 = getMediaQuery(content.media_queries).orientation ? getMediaQuery(content.media_queries).orientation : content.orientation;
        for (var h = 0; h < content.extData.length; h++) {
            var extra_title = content.extData[h].title, extra_img = content.extData[h].image, extra_url = content.extData[h].url, extra_follow = content.extData[h].allow_bots_follow;
            if (content.nofollow != null) {
                if (content.nofollow === true)
                    nofollow = 'rel="nofollow"';
                else if (content.nofollow === false)
                    nofollow = "";
            }
            else
                nofollow = (extra_follow) ? "" : 'rel="nofollow"';
            if (content.content_type === "article") {
                content.box_template += "<div class=\"grid borderbox\">\n                <a " + nofollow + " href=\"" + extra_url + "\" target=\"_blank\">\n                    <div class=\"item " + orientation_1 + " yn-tk-item clearfix\" data-id=\"{h}\">\n                        <div class=\"item__image\">\n                            <img alt=\"" + extra_title + "\" src=\"" + extra_img + "\">\n                        </div>\n                        <div class=\"item__body borderbox\">\n                            <p class=\"item__title\">\n                                " + extra_title + " \n                            </p>\n                        </div>\n                    </div>\n                </a>\n                </div>";
            }
            else if (content.content_type === "text") {
                var globe_icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%" viewBox="0 0 46.304 46.305" xml:space="preserve">\n' +
                    '<g>\n' +
                    '\t\t<path d="M2.113,13.369v0.722c0.253-0.59,0.531-1.164,0.829-1.727L2.113,13.369z"/>\n' +
                    '\t\t<polygon points="16.459,11.71 16.251,11.93 16.531,12.164 16.814,11.93   "/>\n' +
                    '\t\t<path d="M3.904,11.196l-0.023-0.261l-0.014-0.159c-0.329,0.517-0.638,1.045-0.925,1.588l0.31-0.376L3.904,11.196z"/>\n' +
                    '\t\t<polygon points="11.191,5.751 11.191,5.389 10.363,5.389 10.319,5.563 9.814,5.563 9.814,5.606 9.814,6.067 10.953,6.067   "/>\n' +
                    '\t\t<path d="M45.949,17.831l-0.073,0.085l0.164,0.308C46.01,18.092,45.98,17.961,45.949,17.831z"/>\n' +
                    '\t\t<path d="M15.024,12.548l0.433-0.081l0.346-0.223v-0.461h-0.778C15.024,11.854,15.024,12.548,15.024,12.548z"/>\n' +
                    '\t\t<path d="M44.583,13.779c-0.171-0.384-0.351-0.763-0.543-1.136l-0.146,0.165v1.021l0.449-0.061L44.583,13.779z"/>\n' +
                    '\t\t<path d="M11.172,7.15c0,0,0.043-0.505,0-0.505s-0.549,0.086-0.549,0.086L9.814,6.962l0.217,0.26L11.172,7.15z"/>\n' +
                    '\t\t<path d="M40.941,9.257l0.453-0.678c-0.363-0.448-0.746-0.881-1.143-1.301l-0.004,1.128L39.252,8.91l0.099,0.331L40.941,9.257z"/>\n' +
                    '\t\t<polygon points="13.105,9.228 12.556,9.096 11.951,9.386 12.324,10.152 12.917,9.965   "/>\n' +
                    '\t\t<polygon points="15.414,11.046 15.414,11.594 15.89,11.48   "/>\n' +
                    '\t\t<polygon points="14.056,10.844 13.393,11.118 13.263,11.451 13.783,11.594 15.167,11.594 15.167,11.118 14.966,11.118     14.966,10.844   "/>\n' +
                    '\t\t<polygon points="13.175,12.935 13.582,13.153 14.562,11.783 13.797,11.783 13.263,12.36   "/>\n' +
                    '\t\t<polygon points="15.991,12.288 15.991,12.705 16.193,12.995 16.929,12.995 16.929,12.548 16.048,12.288   "/>\n' +
                    '\t\t<polygon points="15.024,12.951 14.677,12.98 14.562,13.485 15.298,13.485 15.631,13.153 15.631,12.705 15.096,12.778   "/>\n' +
                    '\t\t<path d="M43.798,14.812l-0.605-0.664l-0.115-1.067l-0.619,0.338l-0.334,1.307l-0.895-0.953l-0.037-0.9l-0.863-0.744l-0.319-0.316    h-1.003l0.318,0.894l1.205,0.672l0.209,0.223l-0.26,0.131l0.01,0.707l-0.588,0.245l-0.5-0.11l-0.314-0.445l0.814,0.045    l0.221-0.297l-1.807-1.219l-0.138-0.521l-0.735,0.664l-0.744-0.153l-1.133,1.474L35.342,14.7l-0.726,0.066l-1.072,0.006    l-0.641-0.299l-0.188-1.274l0.229-0.606l1.092-0.239l1.189,0.239l0.146-0.659l-0.507-0.119l0.175-1.025l1.196-0.188l0.838-1.183    l0.863-0.146l0.781,0.116h0.287l-0.157-1.111L37.9,8.661l-0.334-0.83l-0.551-0.079l-0.104-0.57l0.449-0.489l1.067-0.418    l0.274-0.491c-3.032-2.673-6.77-4.563-10.891-5.36c-0.094-0.017-0.186-0.034-0.279-0.05c-0.426-0.077-0.858-0.129-1.293-0.182    C25.312,0.079,24.375,0,23.417,0c-5.08,0-9.78,1.649-13.603,4.434l0.197-0.001l0.97-0.008l0.521,0.288l0.98,0.211l0.076,0.386    l1.56,0.057l-0.212-0.499l-1.385-0.039l0.326-0.308l-0.114-0.365h-1.251l1.365-1.021h1.309l0.615,0.848l1.021,0.057l0.615-0.597    l0.462,0.231l-0.847,0.827c0,0-1.173,0.02-1.116,0.02c0.059,0,0.098,0.808,0.098,0.808l1.422-0.039l0.154-0.384l0.981-0.059    l0.115-0.575l-0.576-0.098l0.192-0.52l0.441-0.135l1.539,0.076l-0.848,0.771l0.137,0.596l0.885,0.135l-0.058-1.076l0.847-0.443    l1.501-0.174l2.175,0.963v0.828l0.691,0.172l-0.347,0.654h-0.979l-0.292,0.75l-2.244-0.528l1.764-0.939l-0.672-0.571l-1.52,0.192    l-0.135,0.138l-0.005-0.002L20.152,5.09l-0.438,0.454l-0.723,0.062l0.058,0.361l0.253,0.104l-0.01,0.119l-0.589,0.084L18.66,6.616    l-0.563,0.029l-0.102-0.678l-1.011,0.307l-2.063,1.209l0.23,0.85l0.576,0.376l1.155,0.159v1.313l0.532-0.087l0.492-1.024    l1.228-0.389V7.107l0.683-0.515l1.65,0.39l-0.117,1.039h0.443l1.212-0.596l0.059,1.365l0.884,0.539l-0.037,0.809l-0.847,0.288    l0.058,0.268l1.019,0.465l-0.019,0.557l-0.297,0.025c0-0.009-0.002-0.016-0.002-0.016l-1.288-0.396l-0.055-0.414H22.48    l0.376-0.258v-0.376l-0.404-0.101l-0.1,0.347l-0.711,0.109l-0.07-0.024v0.036l-0.245,0.037l-0.2-0.404l-0.232-0.101h-0.505    l-0.229,0.188v0.418l0.432,0.145l0.428,0.059l-0.096,0.043l-0.391,0.431l-0.17-0.216l-0.377-0.099l-1.025,0.965l0.135,0.11    l-1.515,0.837l-1.425,1.482l-0.097,0.659l-1.427,0.938l-0.706,0.712l0.078,1.424l-0.981-0.458l0.007-0.832l-2.73,0.001    l-1.415,0.716l-0.613,1.132l-0.244,0.897l0.398,0.871l1.113,0.136l1.771-1.185l0.154,0.587l-0.54,1.021l1.349,0.229l0.135,2.081    l0.17,0.029l0.016,0.002l1.662,0.283l1.172-1.356l1.425,0.289l0.499,0.696l1.367-0.081l0.037-0.403l0.752,0.364l0.846,1.326    l1.462,0.021l0.54,0.943l0.076,1.152l1.617,0.617l2.039,0.02l0.597,0.979l0.903,0.291l-0.172,0.809l-0.992,1.259l-0.289,2.786    l-0.896,0.708l-1.325-0.041l-0.444,0.771l0.329,1.443l-1.443,1.848l-0.463,0.848l-1.376,0.66l-0.903,0.139l-0.039,0.384    l0.636,0.183l-0.079,0.412L19.564,41.4l0.346,0.436l0.684,0.02l-0.039,0.528l-0.182,0.521l-0.057,0.422l1.012,0.854l-0.136,0.441    l-1.378-0.024l-1.371-1.198l-1.067-1.877l0.149-1.812l-0.809-1.077l0.327-1.827l-0.479-0.136v-3.963c0,0-1.348-1.021-1.424-1.021    c-0.078,0-0.713-0.172-0.713-0.172l-0.134-0.751l-1.752-2.192l0.173-0.789l0.059-1.289l1.211-0.848l-0.172-1.443l-1.77-0.133    l-1.387-1.579l-0.98-0.269l-0.635-0.116l0.076-0.576l-0.809-0.116v0.327l-2.02-0.5l-0.814-1.244l0.282-0.511l-0.334-0.004    l-0.098-0.324l0.237-0.12l-1.035-1.511L4.304,16.16h-0.52l0.174,1.327l0.885,1.366l-0.097,0.54l-0.751-0.115l-0.922-1.574v-1.832    L2.11,15.409v-1.116v-0.202c-0.542,1.271-0.969,2.604-1.277,3.979l0.054-0.011l0.318-0.064l0.188,0.903l0.396,0.641l0.264,0.302    l0.479,0.188l-0.451,0.536L1.208,20.65H0.548l0.074-0.78l0.547-0.113L1.123,19.39l-0.453-0.286l-0.037-0.026    c-0.236,1.324-0.367,2.684-0.367,4.073c0,0.041,0.003,0.082,0.003,0.123c0.067,12.71,10.425,23.031,23.15,23.031    c7.237,0,13.708-3.341,17.957-8.559h-0.763v-1.539l-0.885-1.189v-1.853l-0.675-0.671l-0.058-0.771l0.854-1.636l-1.623-2.866    l0.191-1.945l-1.461-0.15l-0.539-0.539h-0.982l-0.5,0.462h-1.729l-0.06,0.153h-0.963l-2.211-2.521l0.018-1.963l0.365-0.135    l0.137-0.751h-0.52l-0.213-0.789l2.559-1.847v-1.308l1.254-0.696l0.506,0.052h1.031l0.808-0.434l2.598-0.203v1.328l2.05,0.521    l0.403,0.288h0.377v-0.722l1.183-0.115l1.125,0.837H45.5l0.129-0.118c-0.183-0.623-0.392-1.234-0.626-1.836L43.798,14.812z"/>\n' +
                    '\t</g>\n' +
                    '</svg>';
                if ((h) % ((getMediaQuery(content.media_queries).count / getMediaQuery(content.media_queries).items_in_row)) == 0) {
                    content.box_template += '<div class="grid borderbox">';
                }
                content.box_template += "<a " + nofollow + " href=\"" + extra_url + "\" target=\"_blank\">";
                content.box_template +=
                    '<div class="item ' + orientation_1 + ' yn-tk-item clearfix" data-id="' + h + '">' +
                        ("<div class=\"yn-globe\">" + globe_icon + "</div>") +
                        '<p class="item__title">' +
                        extra_title +
                        '</p>' +
                        '</div>' +
                        '</a>';
                if ((h + 1) % ((getMediaQuery(content.media_queries).count / getMediaQuery(content.media_queries).items_in_row)) == 0) {
                    content.box_template += '</div>';
                }
            }
        }
        content.box_template += '</div></div></div>';
        scriptAppendToDOM(content);
    }
}
function alWoebegone(name) {
    var now = new Date();
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    var exist_script = document.querySelector("#yn_alwoebegone-script");
    if (exist_script) {
        exist_script.remove();
    }
    script.id = 'yn_alwoebegone-script';
    script.type = 'text/javascript';
    script.async = true;
    var script_address = 'https://cdn.yektanet.com/al_woebegone/' + name;
    script.src = script_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() +
        '0' + now.getHours();
    if (document.getElementById("yn_alwoebegone-script") == null)
        head.appendChild(script);
}
function scriptContent(content) {
    var data = {
        name: content.name,
        id: content.id,
        id_with_prefix: content.id_prefix + "-" + content.id,
        nofollow: content.nofollow,
        content_type: content.content_type || "article",
        orientation: content.orientation,
        media_queries: content.media_queries,
        base_url: (content.base_url) ? content.base_url : "https://fetch.yektanet.com",
        branding_label: content.branding_label || "پیشنهاد توسط",
        custom_css: content.custom_css,
        article_header: (isMobileUserAgent()) ? content.article_box_header_mobile : content.article_box_header,
        has_logo: (content.has_logo == undefined) ? true : content.has_logo,
        has_heading: (content.has_heading == undefined) ? true : content.has_heading,
        has_heading_title: (content.has_heading_title == undefined) ? true : content.has_heading_title,
        has_branding_label: (content.has_branding_label == undefined) ? true : content.has_branding_label,
        get_target_selectors: content.get_target_selectors,
        target_set_interval_id: null,
        extData: null,
        build: content.build,
        url_format: function () {
            var url = data.base_url + "/api/v1/load?format=json&id=" + data.id + "&image-type=" + getMediaQuery(data.media_queries).image_type + "&w=" + windowWidth + "&l=" + windowHeight + "&count=" + getMediaQuery(data.media_queries).count + "&is-mobile=" + isMobile;
            var os_conditions = {
                "Android": "&android=1&ios=0",
                "iOS": "&android=0&ios=1",
                "unknown": "&android=0&ios=0"
            };
            url += os_conditions[detectMobileOs()];
            return url;
        },
        notExist: function () {
            return document.getElementById(data.id_with_prefix) == null;
        },
        get_target: function () {
            content.get_target(data);
        },
        target_set_interval: function () {
            data.target_set_interval_id = setInterval(data.get_target, 100);
        },
        //for sidebar
        sticky_func: content.sticky_func,
        sticky_settings: content.sticky_settings,
        sticky_adjacent_selectors: content.sticky_adjacent_selectors,
        sticky_parent_selectors: content.sticky_parent_selectors,
        sticky_footer_selectors: content.sticky_footer_selectors,
        stickit: function () {
            if (content.sticky_func) {
                content.sticky_func(data);
            }
        }
    };
    contentsCount += 1;
    return data;
}
function htmlToElement(html) {
    var template = document.createElement('div');
    template.innerHTML = html;
    return template.firstChild;
}
function detectMobileOs() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    if (/iPhone|iPad|iPod/i.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}
///<reference path="../../utils/shared_functions/check_mobile_user_agent/check_mobile_user_agent.ts" /> 
///<reference path="../../utils/shared_functions/detect_screen/detect_screen.ts" /> 
///<reference path="../../utils/shared_functions/insert_after/insert_after.ts" /> 
///<reference path="../../utils/script/get_target/get_target.ts" /> 
///<reference path="../../utils/script/viewport/log_viewport.ts" /> 
///<reference path="../../utils/shared_functions/get_json/get_json.ts" /> 
///<reference path="../../utils/shared_functions/variables/variables.ts" /> 
///<reference path="../../utils/shared_functions/get_media_query/get_media_query.ts" /> 
///<reference path="../../utils/script/appender/append_to_dom.ts" /> 
///<reference path="../../utils/script/build/build.ts" /> 
///<reference path="../../utils/shared_functions/al_woebegone/al_woebegone.ts" /> 
///<reference path="../../utils/script/constructor/constructor.ts" /> 
///<reference path="../../utils/shared_functions/html_to_element/html_to_element.ts" /> 
///<reference path="../../utils/shared_functions/detect_mobile_os/detect_mobile_os.ts" /> 
isMobile = (isMobileUserAgent()) ? 1 : 0;
var content_box_1 = scriptContent({
    "id": 593,
    "id_prefix": "yektanet-articles",
    "get_target_selectors": function () {
        return [
            [document.querySelector("#yektanet-pos-1"), "after"],
        ];
    },
    "has_logo": true,
    "build": scriptBuild,
    "has_heading_title": true,
    "orientation": "vertical",
    "has_branding_label": true,
    "name": "iranart.ir",
    "media_queries": {
        1921: {
            "items_in_row": 5,
            "count": 10,
            "image_type": 3,
            "orientation": "vertical"
        },
        1200: {
            "items_in_row": 4,
            "count": 8,
            "image_type": 3,
            "orientation": "vertical"
        },
        992: {
            "items_in_row": 3,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        },
        768: {
            "items_in_row": 3,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        },
        321: {
            "items_in_row": 2,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        },
        0: {
            "items_in_row": 1,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        }
    },
    "custom_css": {
        yektanet_div: '{id}{color:#000000;background-color:#ffffff;border-color:#000000;}',
        heading: '{id} .yektanet-articles__heading{color:#000000;margin:0 5px 10px 0;background-color:#ffffff;border-width:0 0 3px 0;border-style:solid;border-color:#8b008b;height: 33px;}',
        heading_title: '{id} .yektanet-articles__heading-title{color:#ffffff;font-size:13px;padding:5px;background-color:#8b008b;border-color:#000000;}',
        item: '{id} .item{color:#000000;background-color:#ffffff;border-color:#000000;}',
        item_title: '{id} .item__title{color:#000000;font-size:13px;font-weight:600;background-color:#ffffff;border-color:#000000;}',
        custom_css: ''
    },
    "has_heading": true,
    "article_box_header": "مطالب پیشنهادی از سراسر وب",
    "nofollow": false,
    "base_url": "https://fetch.yektanet.com",
    "branding_label": "پیشنهاد توسط",
    "article_box_header_mobile": "مطالب پیشنهادی",
    "get_target": scriptGetTarget
});
content_box_1.target_set_interval();
var content_box_2 = scriptContent({
    "id": 597,
    "id_prefix": "yektanet-articles",
    "get_target_selectors": function () {
        return [
            [document.querySelector("#yektanet-pos-1"), "after"],
        ];
    },
    "has_logo": true,
    "build": scriptBuild,
    "has_heading_title": true,
    "orientation": "vertical",
    "has_branding_label": true,
    "name": "iranart.ir",
    "media_queries": {
        1921: {
            "items_in_row": 5,
            "count": 10,
            "image_type": 3,
            "orientation": "vertical"
        },
        1200: {
            "items_in_row": 4,
            "count": 8,
            "image_type": 3,
            "orientation": "vertical"
        },
        992: {
            "items_in_row": 3,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        },
        768: {
            "items_in_row": 3,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        },
        321: {
            "items_in_row": 2,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        },
        0: {
            "items_in_row": 1,
            "count": 6,
            "image_type": 3,
            "orientation": "vertical"
        }
    },
    "custom_css": {
        yektanet_div: '{id}{color:#000000;background-color:#ffffff;border-color:#000000;}',
        heading: '{id} .yektanet-articles__heading{color:#000000;margin:0 5px 10px 0;background-color:#ffffff;border-width:0 0 3px 0;border-style:solid;border-color:#8b008b;height: 33px;}',
        heading_title: '{id} .yektanet-articles__heading-title{color:#ffffff;font-size:13px;padding:5px;background-color:#8b008b;border-color:#000000;}',
        item: '{id} .item{color:#000000;background-color:#ffffff;border-color:#000000;}',
        item_title: '{id} .item__title{color:#000000;font-size:13px;font-weight:600;background-color:#ffffff;border-color:#000000;}',
        custom_css: ''
    },
    "has_heading": true,
    "article_box_header": "مطالب پیشنهادی از سراسر وب",
    "nofollow": false,
    "base_url": "https://fetch.yektanet.com",
    "branding_label": "پیشنهاد توسط",
    "article_box_header_mobile": "مطالب پیشنهادی",
    "get_target": scriptGetTarget
});
content_box_2.target_set_interval();
alWoebegone('shit');
