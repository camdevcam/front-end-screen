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
        string +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="ck"></div><div class="col-md-15 col-sm-4"><span class="folders">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
    };
    document.getElementsByClassName('update-data')[0].innerHTML =string

    document.getElementById('size').addEventListener('click', function () {
        json.sort(function(a, b) {
            return parseFloat(a.Size) - parseFloat(b.Size);
                for (i in json) {
                string +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="ck"></div><div class="col-md-15 col-sm-4"><span class="folders">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
            };    
        });
    });    

    function toggle(source) {
      checkboxes = document.getElementsByName('ck');
      for(var checkbox in checkboxes)
        checkbox.checked = source.checked;
    }

    function matchIt(input) {
      var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
      return json.filter(function(file) {
        if (file.match(reg)) {
          return file;
        }
      });
    }

    function changeInput(val) {
      var autoCompleteResult = matchIt(val);
      document.getElementById("result").innerHTML = autoCompleteResult;
    }

//
//    document.getElementById('size').addEventListener('click', function () {
//        json.sort(function)(a,b);
//    };    
