function tabletUserAgent() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
var screenWidth = screen.width;
var screenHeight = screen.height;
var get_doc = document.documentElement || document.body.parentNode || document.body;
var pageyoffset = window.pageYOffset !== undefined;
var mobile, targetDiv, targetDivfromTop, scroll_from_top, responsive_screen;
var logo_icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABdCAYAAADDhLr+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0QyMDhGRjkxQjRGMTFFN0I2QTc5NjFDOTQ2QkFFNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0QyMDhGRkExQjRGMTFFN0I2QTc5NjFDOTQ2QkFFNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRDIwOEZGNzFCNEYxMUU3QjZBNzk2MUM5NDZCQUU3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRDIwOEZGODFCNEYxMUU3QjZBNzk2MUM5NDZCQUU3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq33rQEAACsjSURBVHja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';
var logo_icon_text = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAA7CAYAAACddqPvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0QyMDhGRkQxQjRGMTFFN0I2QTc5NjFDOTQ2QkFFNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0QyMDhGRkUxQjRGMTFFN0I2QTc5NjFDOTQ2QkFFNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozRDIwOEZGQjFCNEYxMUU3QjZBNzk2MUM5NDZCQUU3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozRDIwOEZGQzFCNEYxMUU3QjZBNzk2MUM5NDZCQUU3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pll0vzkAAA6lSURBVHja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';
var total_aggregative_item_count = 0;
var aggregative_content_count = 0;
var aggregative_contents = [];
function getTargetDiv(content) {
    if (content.notExist()) {
        if (content.target_set_interval_id !== null) {
            if (mobileUserAgent() && !content.show_in_mobile_user_agent) {
                clearInterval(content.target_set_interval_id);
                if (content.is_aggregative)
                    aggregative_content_count -= 1;
                return false;
            }
            var selectors = content.get_targets_selector();
            for (var i = 0; i < selectors.length; i++) {
                if (selectors[i][0] != null) {
                    clearInterval(content.target_set_interval_id);
                    content.targetDiv = selectors[i][0];
                    content.targetDivPosition = selectors[i][1];
                    content.targetDivfromTop = Math.max(content.targetDiv.offsetTop, getOffset(content.targetDiv).top) + content.targetDiv.offsetHeight;
                    if (content.targetDiv) {
                        content.scroll_set_interval();
                    }
                    break;
                }
            }
        }
    }
    else {
        clearInterval(content.target_set_interval_id);
    }
}
function mobileOperationSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        return "Android";
    }
    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPhone|iPad|iPod/i.test(userAgent) && !window.MSStream) {
        return "iOS";
    }
    return "unknown";
}
function scrollify(content) {
    scroll_from_top = (pageyoffset) ? window.pageYOffset : get_doc.scrollTop;
    if (scroll_from_top + content.targetOffsetFromTop > content.targetDivfromTop) {
        clearInterval(content.scroll_set_interval_id);
        if (content.notExist()) {
            if (content.is_aggregative == null || content.is_aggregative === false) {
                getJSON(content.url_format(), function (a) {
                    content.extData = JSON.parse(a).data;
                    if (content.extData.length)
                        content.buildFunction(content);
                }, function (a) {
                });
            }
            else {
                aggregative_contents.push(content);
            }
        }
    }
}
function detectScreen() {
    var windowWidth = window.screen.width ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    if (windowWidth < 768) {
        return "mobile";
    }
    else if (windowWidth <= 991) {
        return "tablet";
    }
    else if (windowWidth < 1200) {
        return "Desktop";
    }
    else
        return "LargeDevice";
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
function getJsonNoCredentials(url, b, c) {
    var httpRequest = "undefined" != typeof XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
    httpRequest.open("GET", url, !0),
        httpRequest.onreadystatechange = function () {
            var a;
            4 == httpRequest.readyState && (a = httpRequest.status, 200 == a ? b && b(httpRequest.response) : c && c(a));
        };
    httpRequest.send();
}
function getOffset(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}
function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function get_card_type(modal, i) {
    var ct;
    if (modal.media_queries[i]["card_type"]) {
        if (modal.media_queries[i]["card_type"] === "random") {
            ct = (modal.random_vertical_horizontal) ? "horizontal" : "vertical";
        }
        else {
            ct = modal.media_queries[i]["card_type"];
        }
    }
    else if (modal.card_type) {
        ct = modal.card_type;
    }
    else {
        ct = (modal.random_vertical_horizontal) ? "horizontal" : "vertical";
    }
    return ct;
}
function get_from_media_query(modal, property_name) {
    var temp;
    var windowWidth = window.screen.width ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
    var ct;
    for (var i = 0; i < modal.media_queries.length; i++) {
        var min = modal.media_queries[i]["min-width"];
        var max = modal.media_queries[i]["max-width"];
        if (min && max) {
            if (windowWidth >= min && windowWidth <= max) {
                ct = get_card_type(modal, i);
                temp = (typeof modal.media_queries[i][property_name] === "number") ? modal.media_queries[i][property_name] : modal.media_queries[i][property_name][ct];
                break;
            }
        }
        else if (min) {
            if (windowWidth >= min) {
                ct = get_card_type(modal, i);
                temp = (typeof modal.media_queries[i][property_name] === "number") ? modal.media_queries[i][property_name] : modal.media_queries[i][property_name][ct];
                break;
            }
        }
        else if (max) {
            if (windowWidth <= max) {
                if (modal.media_queries[i]["card_type"]) {
                    if (modal.media_queries[i]["card_type"] === "random") {
                        ct = (modal.random_vertical_horizontal) ? "horizontal" : "vertical";
                    }
                    else {
                        ct = modal.media_queries[i]["card_type"];
                    }
                }
                else if (modal.card_type) {
                    ct = modal.card_type;
                }
                else {
                    ct = (modal.random_vertical_horizontal) ? "horizontal" : "vertical";
                }
                temp = (typeof modal.media_queries[i][property_name] === "number") ? modal.media_queries[i][property_name] : modal.media_queries[i][property_name][ct];
                break;
            }
        }
        else {
            ct = get_card_type(modal, i);
            temp = (typeof modal.media_queries[i][property_name] === "number") ? modal.media_queries[i][property_name] : modal.media_queries[i][property_name][ct];
            break;
        }
    }
    return [temp, ct];
}
function Content(content) {
    if (content) {
        if (responsive_screen == null || screenWidth == null || screenHeight == null || mobile == null) {
            responsive_screen = detectScreen();
            screenWidth = screen.width;
            screenHeight = screen.height;
            mobile = (mobileUserAgent()) ? 1 : 0;
        }
        var data_1 = {
            name: content.name,
            id: content.id,
            id_with_prefix: content.id_prefix + "-" + content.id,
            is_aggregative: content.is_aggregative,
            show_in_mobile_user_agent: (content.show_in_mobile_user_agent === false) ? content.show_in_mobile_user_agent : true,
            nofollow: content.nofollow,
            size_condition: content.size_condition,
            type_of_card: content.type_of_card || "card",
            card_type: content.card_type,
            random_vertical_horizontal: Math.round(Math.random()),
            media_queries: content.media_queries,
            addition_item: content.addition_item,
            item_count: get_from_media_query(content, 'count')[0],
            image_type: get_from_media_query(content, 'image_type')[0],
            base_url: (content.base_url) ? content.base_url : "https://fetch.yektanet.com",
            url_format: function () {
                var url = data_1.base_url + "/api/v1/load?format=json&id=" + data_1.id + "&pos=1&image-type=" + data_1.image_type + "&w=" + screenWidth + "&l=" + screenHeight + "&count=" + data_1.item_count + "&is-mobile=" + mobile;
                var os_conditions = {
                    "Android": "&android=1&ios=0",
                    "iOS": "&android=0&ios=1",
                    "unknown": "&android=0&ios=0"
                };
                url += os_conditions[mobileOperationSystem()];
                return url;
            },
            logo_text: content.logo_text,
            ArticleBoxHeader: (responsive_screen === "mobile") ? content.article_box_header_mobile : content.article_box_header,
            custom_css: content.custom_css,
            has_heading_and_logo: content.has_heading_and_logo,
            has_logo: content.has_logo,
            target_set_interval_id: null,
            scroll_set_interval_id: null,
            targetOffsetFromTop: content.size_condition[responsive_screen].topOffset,
            buildFunction: content.buildFunction,
            stickyFunction: content.stickyFunction,
            stickySetting: content.stickySetting,
            sidebar_body: content.sidebar_body,
            sidebar_parent: content.sidebar_parent,
            sidebar_footer: content.sidebar_footer,
            get_targets_selector: content.get_targets_selector,
            notExist: function () {
                return document.getElementById(data_1.id_with_prefix) == null;
            },
            get_target_div: function () {
                content.getTargetDivFunction(data_1);
            },
            target_set_interval: function () {
                data_1.target_set_interval_id = setInterval(data_1.get_target_div, 100);
            },
            scrollify: function () {
                content.scrollFunction(data_1);
            },
            scroll_set_interval: function () {
                data_1.scroll_set_interval_id = setInterval(data_1.scrollify, 100);
            },
            stickit: function () {
                if (content.stickyFunction) {
                    content.stickyFunction(data_1);
                }
            }
        };
        if (typeof content.base_url === "string") {
            data_1.base_url = content.base_url;
        }
        else if (typeof content.base_url != "undefined") {
            data_1.base_url = content.base_url[Math.floor(Math.random() * content.base_url.length)];
        }
        if (data_1.is_aggregative) {
            aggregative_content_count += 1;
            total_aggregative_item_count += data_1.item_count;
        }
        return data_1;
    }
    else
        console.log("constructor should call by an object");
}
function mobileUserAgent() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
            check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}
function htmlToElement(html) {
    var template = document.createElement('div');
    template.innerHTML = html;
    return template.firstChild;
}
function build(content) {
    if (content.notExist()) {
        var yektanet_div = '{id}{width: 100%;display:table;} {id} a, {id} a:hover{text-decoration:none;font-family:inherit;}{id} a{color:rgba(0,0,0,0.87);}';
        var heading = '{id} .yektanet-articles__heading {color: rgba(0,0,0,0.87);font-family: inherit;font-size:inherit;position: relative;width: 100%;height: 50px;} {id} .yektanet-articles__heading.bottom{margin-bottom:10px}';
        var heading_title = '{id} .yektanet-articles__heading-title {font-weight: bold;right:10px;margin:0;font-family: inherit;position: absolute;line-height: 2em;font-size: 1em;}';
        var heading_branding = '{id} .yektanet-articles__heading-branding {position: absolute;left: 10px;width: 120px;} @media screen and (max-width:210px){{id} .yektanet-articles__heading-branding{display:none;} }';
        var heading_branding_img = '{id} .yektanet-articles__heading-branding-image {position: relative;float: left;width: 25px;height: 25px;text-align: center;overflow: hidden;z-index: 3; -webkit-transition: width 0.5s, background-color 0.5s;transition: width 0.5s, background-color 0.5s; {id} .yektanet-articles__heading-branding-image img {vertical-align: middle;object-fit: cover;}}';
        var heading_branding_icon_img = '{id} .yektanet-articles__heading-branding-icon-image {height:100%;position: absolute;left: 0;z-index: 2;} {id} .yektanet-articles__heading-branding-icon-image img {vertical-align:top;width: 25px;height: 25px;}';
        var heading_branding_text_img = '{id} .yektanet-articles__heading-branding-text-image {height:100%;position: absolute;left: 30px;visibility: hidden;opacity: 0; -webkit-transition: opacity 0.5s linear, visibility 0.5s;transition: opacity 0.5s linear, visibility 0.5s;z-index: 1;}   {id} .yektanet-articles__heading-branding-text-image img {height: 19px;position: relative;top: 2px;}';
        var heading_branding_label = '{id} .yektanet-articles__heading-branding-label {font-size: .8em;font-family: inherit;position: absolute;left: 30px;line-height: 25px;white-space: nowrap;transition:color 0.5s;-webkit-transition:color 0.5s;}  @media screen and (max-width:330px){{id} .yektanet-articles__heading-branding-label{display:none;} }';
        var heading_branding_hover = '@media screen and (max-width: 1024px){{id} .yektanet-articles__heading-branding-text-image{visibility:visible;opacity:1;left:0;}{id} .yektanet-articles__heading-branding-icon-image{display:none;}{id} .yektanet-articles__heading-branding-image{width:48px;}{id} .yektanet-articles__heading-branding{width:128px;}{id} .yektanet-articles__heading-branding-label{left:55px;}} @media screen and (min-width: 1025px){{id} .yektanet-articles__heading-branding:hover .yektanet-articles__heading-branding-label{color:transparent}  {id} .yektanet-articles__heading-branding:hover .yektanet-articles__heading-branding-image{width: 85px!important;} {id} .yektanet-articles__heading-branding:hover .yektanet-articles__heading-branding-text-image {opacity:1;visibility:visible;}}';
        var item = '{id} .item{position:relative;} {id} .item.horizontal{margin-bottom:5px;}';
        var item_image = '{id} .item.vertical .item__image {position:relative;width:100%;padding-top:66.66%;}' +
            ' {id} .item.vertical .item__image img {width: 100%;height: auto;object-fit: cover;vertical-align: middle;position:absolute;top:0;right:0;left:0;bottom:0;}' +
            ' {id} .item.horizontal .item__image{float:right;width:33%;}' +
            ' {id} .item.horizontal .item__image {min-height:50px;}' +
            ' {id} .item__image img {width: 100%;height: auto;object-fit: cover;vertical-align: middle;}';
        var item_body = '{id} .item__body {padding: 5px;}' +
            '{id} .item.horizontal .item__body{float:right;width:67%;padding:0 15px;} {id} .item.horizontal .item__body{padding: 0 5px 0 0;}';
        var item_title = '{id} .item__title {text-align:right;direction: rtl;color:rgba(0,0,0,0.87);font-family:inherit;font-size:1em;margin:0;line-height: 1.5em;height: 4.5em;overflow: hidden;text-align: right;}';
        var grid = '{id} .grid {padding-right: 5px;padding-left: 5px;float: right;} {id} .grid a:hover{text-decoration:none;} {id} .grid a:hover .item__title{color:#bc0c00;}';
        // general css class
        var stickit = '{id} .stickit{position:fixed; top:5px;}';
        var border_box = '.borderbox { -webkit-box-sizing: border-box; -moz-box-sizing: border-box;box-sizing: border-box;}';
        var content_section = '{id} .yektanet-articles__content{padding:0 15px;}';
        var content_wrapper = '{id} .yektanet-articles__content-wrapper {margin-right:-5px; margin-left:-5px;}';
        var vertical_align = '{id} .vertically-aligned {position: absolute;top: 50%; -webkit-transform: translateY(-50%);transform: translateY(-50%);}';
        var backface = '{id} .backface {backface-visibility: hidden; -webkit-backface-visibility: hidden;}';
        var clearfix = '{id} .clearfix:after,{id} .clearfix:before{content:" ";display:table;} {id} .clearfix:after{clear:both;} {id} .clearfix{zoom:1}';
        var media_queries = '';
        if (content.media_queries.length) {
            var items_in_row = void 0, ct = void 0;
            if (content.media_queries[0]["min-width"] == undefined && content.media_queries[0]["max-width"] == undefined) {
                ct = get_card_type(content, 0);
                items_in_row = (typeof content.media_queries[0]["item_in_row"] === "number") ? content.media_queries[0]["item_in_row"] : content.media_queries[0]["item_in_row"][ct];
                media_queries += '{id} .grid{width:' + 100 / items_in_row + '%;}';
            }
            else {
                for (var mq = 0; mq < content.media_queries.length; mq++) {
                    media_queries += '@media screen';
                    var min_width_q = content.media_queries[mq]["min-width"];
                    if (min_width_q != null) {
                        media_queries += ' and (min-width:' + min_width_q + "px" + ') ';
                    }
                    var max_width_q = content.media_queries[mq]["max-width"];
                    if (max_width_q != null) {
                        media_queries += ' and (max-width:' + max_width_q + "px" + ') ';
                    }
                    ct = get_card_type(content, mq);
                    items_in_row = (typeof content.media_queries[mq]["item_in_row"] === "number") ? content.media_queries[mq]["item_in_row"] : content.media_queries[mq]["item_in_row"][ct];
                    media_queries += '{{id} .grid{width:' + 100 / items_in_row + '%;} }';
                }
            }
        }
        var custom_css = '';
        for (var key in content.custom_css) {
            if (content.custom_css.hasOwnProperty(key)) {
                custom_css += content.custom_css[key];
            }
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');
        var all_css_parts = yektanet_div + heading + heading_title + heading_branding + heading_branding_img + heading_branding_icon_img + heading_branding_text_img + heading_branding_label + heading_branding_hover + item + item_image + item_body + item_title + grid + stickit + border_box + content_section + content_wrapper + vertical_align + backface + clearfix + media_queries + custom_css;
        all_css_parts = all_css_parts.replace(/{id}/gi, "#" + content.id_with_prefix);
        style.type = 'text/css';
        style.styleSheet ? style.styleSheet.cssText = all_css_parts : style.appendChild(document.createTextNode(all_css_parts));
        head.appendChild(style);
        //create html
        content.box_template = '' +
            '<div id="' + content.id_with_prefix + '" class="borderbox">';
        if (content.has_heading_and_logo) {
            content.box_template +=
                '<div class="yektanet-articles__heading">' +
                    '<p class="yektanet-articles__heading-title vertically-aligned">' + content.ArticleBoxHeader + '</p>';
            if (content.has_logo) {
                content.box_template +=
                    '<div class="yektanet-articles__heading-branding vertically-aligned">' +
                        '<a href="https://yektanet.com/?utm_source=' + content.name + '&utm_medium=widget" target="_blank" class="clearfix">' +
                        '<div class="yektanet-articles__heading-branding-image">' +
                        '<div class="yektanet-articles__heading-branding-icon-image vertically-aligned backface">' +
                        '<img src="' + logo_icon + '" class="backface">' +
                        '</div>' +
                        '<div class="yektanet-articles__heading-branding-text-image backface">' +
                        '<img src="' + logo_icon_text + '" class="backface">' +
                        '</div>' +
                        '</div>' +
                        '<span class="yektanet-articles__heading-branding-label vertically-aligned backface">' + content.logo_text + '</span>' +
                        '</a>' +
                        '</div>';
            }
            content.box_template += '</div>';
        }
        content.box_template +=
            '<div class="yektanet-articles__content">' +
                '<div class="yektanet-articles__content-wrapper clearfix">';
        var nofollow = void 0;
        var responsive_card_type = get_from_media_query(content, 'count')[1];
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
            if (content.type_of_card === "card") {
                content.box_template +=
                    '<div class="grid borderbox">' +
                        ("<a " + nofollow + " href=\"" + extra_url + "\" target=\"_blank\" class=\"clearfix\">");
                content.box_template +=
                    '<div class="item ' + responsive_card_type + ' yn-tk-item clearfix" data-id="' + h + '">' +
                        '<div class="item__image">' +
                        '<img alt="' + extra_title + '" src="' + extra_img + '">' +
                        '</div>' +
                        '<div class="item__body borderbox">' +
                        '<p class="item__title">' +
                        extra_title +
                        '</p>' +
                        '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>';
            }
            else if (content.type_of_card === "text") {
                content.box_template +=
                    '<div class="grid borderbox">' +
                        ("<a " + nofollow + " href=\"" + extra_url + "\" target=\"_blank\" class=\"clearfix\">");
                content.box_template +=
                    '<div class="item ' + responsive_card_type + ' text yn-tk-item clearfix" data-id="' + h + '">' +
                        '<div class="item__body borderbox">' +
                        '<p class="item__title">' +
                        extra_title +
                        '</p>' +
                        '</div>' +
                        '</div>' +
                        '</a>' +
                        '</div>';
            }
        }
        content.box_template += '</div></div></div>';
        var newDiv_1 = htmlToElement(content.box_template);
        var myTimer_1 = setInterval(function checkInterval() {
            if (content.targetDiv != null) {
                clearInterval(myTimer_1);
                if (content.targetDivPosition === "after") {
                    insertAfter(newDiv_1, content.targetDiv);
                }
                else if (content.targetDivPosition === "before") {
                    var parentNode = content.targetDiv.parentNode;
                    parentNode.insertBefore(newDiv_1, content.targetDiv);
                }
                else if (content.targetDivPosition === "append") {
                    content.targetDiv.appendChild(newDiv_1);
                }
                else {
                    console.log("handle error occured.");
                }
                if (content.stickit) {
                    if (!mobileUserAgent() && !tabletUserAgent() && responsive_screen != "mobile" && responsive_screen != "tablet") {
                        content.stickit();
                    }
                }
            }
        }, 100);
    }
}
///<reference path="../../utils/tabletUserAgent.ts" /> 
///<reference path="../../utils/variables.ts" /> 
///<reference path="../../utils/getTargetDiv.ts" /> 
///<reference path="../../utils/mobileOperationSystem.ts" /> 
///<reference path="../../utils/scrollify.ts" /> 
///<reference path="../../utils/detectScreen.ts" /> 
///<reference path="../../utils/getJSON.ts" /> 
///<reference path="../../utils/getOffset.ts" /> 
///<reference path="../../utils/insertAfter.ts" /> 
///<reference path="../../utils/constructor.ts" /> 
///<reference path="../../utils/mobileUserAgent.ts" /> 
///<reference path="../../utils/htmlToElement.ts" /> 
///<reference path="../../utils/build_function.ts" /> 
mobile = (mobileUserAgent()) ? 1 : 0;
responsive_screen = detectScreen();
var main_content_1 = Content({
    "nofollow": true,
    "get_targets_selector": function () {
        return [
            [document.querySelector("#frame > div:nth-child(9)"), "after"],
        ];
    },
    "custom_css": {
        custom_yektanet_div: '{id}{color:#000000;background-color:#ffffff;}',
        custom_heading: '{id} .yektanet-articles__heading{color:#000000;background-color:#ffffff;}',
        custom_heading_branding: '{id} .yektanet-articles__heading-branding{color:#000000;background-color:#ffffff;}',
        custom_item_title: '{id} .item__title{color:#000000;background-color:#ffffff;}',
        custom_content: '{id} .yektanet-articles__content{color:#000000;background-color:#ffffff;}',
        custom_css: '', custom_small_font: '@media screen and (max-width:349px){ {id} .item.vertical .item__body{padding: 10px 10px 0;}{id} .item.vertical .item__title{} {id} .item.horizontal .item__body{width:50%;}{id} .item.horizontal .item__image{width:50%;}}', custom_medium_font: '@media screen and (min-width:768px) and (max-width:991px){{id} .yektanet-articles__heading-title{}{id} .yektanet-articles__heading-branding-label{}{id} .item__title{} }', custom_large_font: '@media screen and (min-width:992px){{id} .yektanet-articles__heading-title{}{id} .yektanet-articles__heading-branding-label{}{id} .item__title{} }'
    },
    "logo_text": "پیشنهاد توسط",
    "has_heading_and_logo": true,
    "id_prefix": "yektanet-articles",
    "id": 484,
    "article_box_header_mobile": "مطالب پیشنهادی",
    "getTargetDivFunction": getTargetDiv,
    "name": "netnazar.com",
    "buildFunction": build,
    "has_logo": true,
    "media_queries": [
        {
            "min-width": 1921,
            "item_in_row": 5,
            "count": 10,
            "image_type": 1,
            "card_type": "vertical"
        },
        {
            "max-width": 1920,
            "min-width": 1200,
            "item_in_row": 4,
            "count": 8,
            "image_type": 1,
            "card_type": "vertical"
        },
        {
            "max-width": 1199,
            "min-width": 992,
            "item_in_row": 3,
            "count": 6,
            "image_type": 1,
            "card_type": "vertical"
        },
        {
            "max-width": 991,
            "min-width": 768,
            "item_in_row": 3,
            "count": 6,
            "image_type": 3,
            "card_type": "vertical"
        },
        {
            "max-width": 767,
            "min-width": 340,
            "item_in_row": 2,
            "count": 6,
            "image_type": 3,
            "card_type": "vertical"
        },
        {
            "max-width": 339,
            "item_in_row": 1,
            "count": 6,
            "image_type": 3,
            "card_type": "vertical"
        },
    ],
    "base_url": "http://fetch.yektanet.com/",
    "scrollFunction": scrollify,
    "size_condition": {
        "LargeDevice": {
            "topOffset": Infinity
        },
        "Desktop": {
            "topOffset": Infinity
        },
        "tablet": {
            "topOffset": Infinity
        },
        "mobile": {
            "topOffset": Infinity
        }
    },
    "article_box_header": "مطالب پیشنهادی از سراسر وب"
});
main_content_1.target_set_interval();
