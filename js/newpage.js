function newpage(stotal,page_name,epage,totalpage,tr) {
    var totalpage,pagesize,cpage,count,curcount,outstr;
    //初始化 
    cpage=$('#spage').val();
    pagesize = epage;
    totalpage = totalpage; 
    outstr = ""; 
    console.log(totalpage,'totalpage')
    $(document).on('click','.aa',function(){
        $("#role").html(tr);
        cpage = $(this).index();
        console.log(cpage,10)
        rolelist="";
        $.ajax({

            url: "http://192.168.1.67:8090/role/list/"+cpage+"/"+pagesize,
            dataType:'json',
            type : 'get',
            cache: false,
            contentType:"application/json",
            success: function(data) {
                ids=[];
                for( i=0;i<data.rows.length;i++){
                    rolelist +="<tr><td>"+data.rows[i].userName+"</td><td><a href='edHtid.html' class='compile' data-i='"+i+"'>编辑 </a><a href='#' class='delete' data-i='"+i+"'>删除 </a></td><td>"+data.rows[i].updateTime+"</td></tr>";
                    ids.push(data.rows[i].id)	    
                }	
                $("#role").append(rolelist);
                if(ids){ 
                    sessionStorage.setItem("data", ids); 
                }
            } 
        });
        setpage(); 	
    })
    function setpage() 
    { 
        if(totalpage){        //总页数小于十页 
            for (count=1;count<=totalpage;count++) 
            {   
                outstr = outstr + "<a href='#' class='aa'  style='background: none repeat scroll 0 0 #ffffff;border: 1px solid #cccccc;color: #666666;display: inline-block;height: 29px;line-height: 28px;margin-left: 2px;padding: 0 12px;margin-left:5px;margin-right:5px;margin-bottom:10px'>"+count+"</a>"; 
            } 
        } 
        document.getElementById("setpage").innerHTML = "<div id='setpage'><span style='font-size:12px;letter-spacing:10px;'>共"+totalpage+"页|第"+cpage+"页<\/span>" + outstr + "<\/div>"; 
        outstr = ""; 
    } 
    setpage();	
}