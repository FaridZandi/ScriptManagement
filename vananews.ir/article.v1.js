function isMobileUserAgent() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
var map_table = {};
function iframeContentWrapper(content) {
    var data = {
        name: content.name,
        id: content.id,
        id_with_prefix: content.id_prefix + "-" + content.id,
        nofollow: content.nofollow,
        orientation: content.orientation,
        media_queries: content.media_queries,
        custom_css: content.custom_css,
        custom_inner_css: content.custom_inner_css,
        base_url: (content.base_url) ? content.base_url : "https://cdn.yektanet.com/assets/templates/iframe/native.html",
        branding_label: content.branding_label || "پیشنهاد توسط",
        article_header: (isMobileUserAgent()) ? content.article_box_header_mobile : content.article_box_header,
        has_logo: (content.has_logo == undefined) ? true : content.has_logo,
        has_heading: (content.has_heading == undefined) ? true : content.has_heading,
        has_heading_title: (content.has_heading_title == undefined) ? true : content.has_heading_title,
        has_branding_label: (content.has_branding_label == undefined) ? true : content.has_branding_label,
        get_target_selectors: content.get_target_selectors,
        target_set_interval_id: null,
        targetPosition: null,
        extData: null,
        build: content.build,
        url_format: function () {
            var mq = getMediaQuery(data.media_queries);
            var orientation = mq.orientation ? mq.orientation : data.orientation;
            var url = data.base_url + "?format=json&id=" + data.id + "&name=" + data.name + "&o=" + orientation + "&c=" + mq.count + "&itir=" + mq.items_in_row + "&img=" + mq.image_type + "&h=" + data.article_header;
            if (data.nofollow) {
                url += "&nf=" + data.nofollow;
            }
            if (data.branding_label) {
                url += "&bl=" + data.branding_label;
            }
            if (data.has_logo === false) {
                url += "&logo=false";
            }
            if (data.has_heading === false) {
                url += "&show_h=false";
            }
            if (data.has_heading_title === false) {
                url += "&show_h_t=false";
            }
            if (data.has_branding_label === false) {
                url += "&show_bl=false";
            }
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
        is_in_viewport: function () { return IsElementInViewport(document.querySelector("#" + data.id_with_prefix)); },
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
    map_table[data.id_with_prefix] = data.custom_inner_css;
    contentsCount += 1;
    return data;
}
function getTargetIframeWrapper(content) {
    if (content.notExist()) {
        if (content.target_set_interval_id !== null) {
            var selectors = content.get_target_selectors();
            for (var i = 0; i < selectors.length; i++) {
                if (selectors[i][0] != null) {
                    console.log("Target selector found!");
                    clearInterval(content.target_set_interval_id);
                    content.target = selectors[i][0];
                    content.targetPosition = selectors[i][1];
                    content.build(content);
                    break;
                }
            }
        }
    }
    else {
        clearInterval(content.target_set_interval_id);
    }
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
function messageHandler(event) {
    if (event.data.get_style) {
        document.querySelector("#" + event.data.id_with_prefix + " iframe").contentWindow.postMessage({ "set_css": map_table[event.data.id_with_prefix], "id_with_prefix": event.data.id_with_prefix }, '*');
    }
    else if (event.data.height) {
        document.querySelector("#" + event.data.id_with_prefix).style.height = event.data.height + "px";
    }
    else if (event.data.close) {
        document.querySelector("#" + event.data.id_with_prefix).remove();
    }
}
window.addEventListener('message', messageHandler, false);
function IsElementInViewport(el) {
    try {
        var rect = el.getBoundingClientRect();
        var windowHeight_1 = (window.innerHeight || document.documentElement.clientHeight);
        var top_1 = rect.top;
        var bottom = rect.bottom;
        if (top_1 < 0)
            top_1 = 0;
        if (top_1 > windowHeight_1)
            top_1 = windowHeight_1;
        if (bottom < 0)
            bottom = 0;
        if (bottom > windowHeight_1)
            bottom = windowHeight_1;
        var ratio = ((bottom - top_1)) / ((rect.height));
        return (ratio >= 0.5);
    }
    catch (e) {
        return false;
    }
}
function getMediaQuery(media_queries) {
    var i = 0;
    var ans;
    while (windowWidth >= parseInt(Object.keys(media_queries)[i])) {
        ans = media_queries[Object.keys(media_queries)[i]];
        i++;
    }
    return ans;
}
function IframeappendToDOMWrapper(content) {
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
function IframeBuildWrapper(content) {
    if (content.notExist()) {
        var id = "#" + content.id_with_prefix;
        var base_css = {
            yektanet_div: "#" + content.id_with_prefix + " {position: relative;width:100%;height:auto;overflow:hidden;padding:0;font-family:inherit;}",
            iframe: "#" + content.id_with_prefix + " .yektanet_iframe {\n            position:relative;\n            margin:0;\n            overflow: hidden;\n            display:\"block\";\n            border:0;\n            outline: none;\n            opacity:1;\n            width:100%;height:100%;\n            overflow:hidden;\n            font-family:inherit;\n            }"
        };
        var all_css_parts = "";
        for (var key in base_css) {
            if (base_css.hasOwnProperty(key)) {
                all_css_parts += base_css[key];
            }
        }
        for (var key in content.custom_css) {
            if (content.custom_css.hasOwnProperty(key)) {
                all_css_parts += content.custom_css[key].replace(/{id}/gi, "#" + content.id_with_prefix);
            }
        }
        all_css_parts += "{" + id + " .grid{width:" + 100 / content.items_in_row + '%;} }';
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
        content.box_template = "<div class=\"" + content.id_with_prefix + " clearfix\" id=\"" + content.id_with_prefix + "\">";
        content.box_template += "<iframe class=\"yektanet_iframe\" scrolling=\"no\" src=\"" + content.url_format() + "\" ></iframe></div>";
        IframeappendToDOMWrapper(content);
        var is_in_vp_1 = setInterval(function () {
            if (content.is_in_viewport()) {
                clearInterval(is_in_vp_1);
                document.querySelector("#" + content.id_with_prefix + " iframe").contentWindow.postMessage({ "wrapper_is_in_viewport": true, "id_with_prefix": content.id_with_prefix }, '*');
            }
        }, 100);
    }
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
///<reference path="../../utils/iframe/constructor/constructor.ts" /> 
///<reference path="../../utils/iframe/get_target/get_target_iframe_wrapper.ts" /> 
///<reference path="../../utils/shared_functions/detect_screen/detect_screen.ts" /> 
///<reference path="../../utils/shared_functions/insert_after/insert_after.ts" /> 
///<reference path="../../utils/shared_functions/get_json/get_json.ts" /> 
///<reference path="../../utils/shared_functions/variables/variables.ts" /> 
///<reference path="../../utils/iframe/message_handler/message_handler.ts" /> 
///<reference path="../../utils/iframe/viewport/is_element_in_viewport.ts" /> 
///<reference path="../../utils/shared_functions/get_media_query/get_media_query.ts" /> 
///<reference path="../../utils/iframe/appender/append_to_dom.ts" /> 
///<reference path="../../utils/iframe/build/build.ts" /> 
///<reference path="../../utils/shared_functions/html_to_element/html_to_element.ts" /> 
///<reference path="../../utils/shared_functions/detect_mobile_os/detect_mobile_os.ts" /> 
isMobile = (isMobileUserAgent()) ? 1 : 0;
var content_box_1 = iframeContentWrapper({
    "id": 598,
    "id_prefix": "yektanet-iframes",
    "get_target_selectors": function () {
        return [
            [document.querySelector("#yektanet-pos-1"), "after"],
            [document.querySelector(".tags_container"), "after"],
        ];
    },
    "has_logo": true,
    "build": IframeBuildWrapper,
    "has_heading_title": true,
    "orientation": "vertical",
    "has_branding_label": true,
    "custom_inner_css": {
        yektanet_div: '{id}{color:#000000;background-color:#ffffff;border-color:#000000;}',
        heading: '{id} .yektanet-articles__heading{color:#000000;margin:0 5px 10px 0;background-color:#ffffff;border-width:0 0 3px 0;border-style:solid;border-color:#8b008b;height: 33px;}',
        heading_title: '{id} .yektanet-articles__heading-title{color:#ffffff;font-size:13px;padding:5px;background-color:#8b008b;border-color:#000000;}',
        item: '{id} .item{color:#000000;background-color:#ffffff;border-color:#000000;}',
        item_title: '{id} .item__title{color:#000000;font-size:13px;font-weight:600;background-color:#ffffff;border-color:#000000;}',
        custom_css: ''
    },
    "name": "vananews.ir",
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
            "items_in_row": 4,
            "count": 8,
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
        "yektanet_div": '{id} { position: relative; width:100%; overflow:hidden; margin:15px 0; padding:0; font-family:inherit;}'
    },
    "has_heading": true,
    "article_box_header": "مطالب پیشنهادی از سراسر وب",
    "nofollow": false,
    "base_url": "http://cdn.yektanet.com/assets/templates/iframe/image_content.html",
    "branding_label": "پیشنهاد توسط",
    "article_box_header_mobile": "مطالب پیشنهادی",
    "get_target": getTargetIframeWrapper
});
content_box_1.target_set_interval();
