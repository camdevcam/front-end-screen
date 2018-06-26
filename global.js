//window.addEventListener('load', function() {

    var json =[{
                "Name": "zips",
                "Type": "Directory",
                "DateModified": "6/14/2018 17:22:50",
                "Size": "5 KB",
            }, {
                "Name": "presets",
                "Type": "Directory",
                "DateModified": "5/11/2018 7:32:10",
                "Size": "2 KB",
            }, {
                "Name": "workflow",
                "Type": "Directory",
                "DateModified": "6/26/2018 10:29:59",
                "Size": "6 KB",
            },
    ];

    var string ="";

    for (i in json) {
        string +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" id="all" name="all" value="all"></div><div class="col-md-15 col-sm-4"><span class="folders">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
    };
    document.getElementsByClassName('update-data')[0].innerHTML =string

    json.sort(function(a, b) {
        return parseFloat(a.Size) - parseFloat(b.Size);
    });
    
//    document.getElementById('size').addEventListener('click', function () {
//        json.sort(function)(a,b);
//    });    
