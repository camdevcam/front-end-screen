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
                "Type": "Non-Directory",
                "DateModified": "6/26/2018 10:29:59",
                "Size": "6 KB",
            },{
                "Name": "software",
                "Type": "Directory",
                "DateModified": "3/16/2018 10:29:59",
                "Size": "16 KB",
            },{
                "Name": "mmm_data",
                "Type": "Directory",
                "DateModified": "6/27/2018 1:19:29",
                "Size": "3 KB",
            },{
                "Name": "jobs",
                "Type": "Directory",
                "DateModified": "4/27/2018 11:59:59",
                "Size": "3 KB",
            },
    ];

    var string ="";

    for (i in json) {
        string +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="chk[]"></div><div class="col-md-15 col-sm-4"><span class="folders"><img src="im/fd.png" class="ic">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
    };

    document.getElementsByClassName('update-data')[0].innerHTML =string
    document.getElementById("result").style.display="none"; 

    // Sort functions + outputs

    document.getElementById('size').addEventListener('click', function () {
        json.sort(function(a, b) {
            return parseFloat(a.Size) - parseFloat(b.Size);
        });

        var str ="";

        for (i in json) {
            str +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="ck"></div><div class="col-md-15 col-sm-4"><span class="folders"><img src="im/fd.png">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
        };

        document.getElementsByClassName('update-data')[0].innerHTML =str;
    }); 

    document.getElementById('dated').addEventListener('click', function () {
        json.sort(function(a, b) {
            return parseFloat(a.DateModified) - parseFloat(b.DateModified);
        });

        var str ="";

        for (i in json) {
            str +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="ck"></div><div class="col-md-15 col-sm-4"><span class="folders"><img src="im/fd.png" class="ic">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
        };

        document.getElementsByClassName('update-data')[0].innerHTML =str;
    }); 

    document.getElementById('named').addEventListener('click', function () {
        json.sort(function(a, b) {
            var textA = a.Name.toUpperCase();
            var textB = b.Name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        var str ="";

        for (i in json) {
            str +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="ck"></div><div class="col-md-15 col-sm-4"><span class="folders"><img src="im/fd.png" class="ic">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
        };

        document.getElementsByClassName('update-data')[0].innerHTML =str;
    }); 

    document.getElementById('type').addEventListener('click', function () {
        json.sort(function(a, b) {
            var textA = a.Type.toUpperCase();
            var textB = b.Type.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });

        var str ="";

        for (i in json) {
            str +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="chk[]"></div><div class="col-md-15 col-sm-4"><span class="folders"><img src="im/fd.png" class="ic">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
        };

        document.getElementsByClassName('update-data')[0].innerHTML =str;
    }); 

    function checkAll(checked){ 
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; i++) { 
            if (inputs[i].type == "checkbox") { 
                inputs[i].checked = checked; 

            }  
        }  
    }

    function matchIt(input) {
      var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
      return json.filter(file => !!file.Name.match(reg));
    }

    function changeInput(val) {
      if (val.length == 0) return;
      var autoCompleteResult = matchIt(val);
      document.getElementById("ac").innerHTML = autoCompleteResult.map(i => i.Name).join('<br>');
      document.getElementById("result").style.display="inline-block"; 
    
      startTimer()
    }

    function hideResult () {
        document.getElementById("result").style.display="none"; 
    }

    function startTimer() {
        var tim = window.setTimeout("hideResult()", 5000);
    }

    document.getElementById("changeDirectory").style.display="none";
    document.getElementById("addUpload").style.display="none";

    function newDirectory() {
        var x = document.getElementById("changeDirectory");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function addUpload() {
        var x = document.getElementById("addUpload");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    function Close() { 
        document.getElementById("changeDirectory").style.display = "none";
        document.getElementById("addUpload").style.display = "none";
    }

    function updateDir(){
        var userInput = document.getElementById('chDir').value;
        document.getElementById('crumb').innerHTML = userInput;
        document.getElementById("changeDirectory").style.display = "none";
    }

    document.querySelector("#submit").addEventListener('click', function () {
        document.getElementById("addUpload").style.display = "none";
        json.push({
            Name:document.querySelector("#name").value,
            Type:document.querySelector("select").value,
            DateModified:dateM.value,
            Size:sized.value
        });

//      output.innerText=JSON.stringify(json);
            var str ="";

        for (i in json) {
            str +='<div class="row"><div class="col-md-15 col-sm-1"><input type="checkbox" name="chk[]"></div><div class="col-md-15 col-sm-4"><span class="folders"><img src="im/fd.png" class="ic">'+json[i].Name+'</span></div><div class="col-md-15 col-sm-3"><span class="directory">'+json[i].Type+'</span></div><div class="col-md-15 col-sm-3"><span class="date-stamp">'+json[i].DateModified+'</span></div><div class="col-md-15 col-sm-1"><span class="date-size">'+json[i].Size+'</span></div></div>';
        };

        document.getElementsByClassName('update-data')[0].innerHTML =str;    
        
    });
