var str = new Array();
            for(let i=0;i<23;i++){//生成33条数据
                str[i] = "第"+i+"个字符串";
            }
            
            var currentData = 0;//当前页面生成的数据的序号
            var currentPage = 0;//当前页号
            var totalPages = 0;//总页数
            var eachPage = 7;//每一页最多显示的数据条数
            //页面初始化时，在第一页生成eachPage条数据（如果总数据有这么多条）
            
            for(let i=0,j=0;j<eachPage;i++,j++){
                if(currentData>=str.length){//如果当前的数据序号等于总数据条数，就停止生成
                    //alert("没有信息");
                }else{
                    $("#content").append("<p>"+str[i]+"</p>");//动态生成一条数据
                    currentData++;
                }
            }
            currentPage++;//令当前为第一页
            //计算一共有多少页
            if(str.length%eachPage==0){//如果最后一页刚好填满
                totalPages = str.length/eachPage;
            }else{//最后一页不能填满
                totalPages = Math.floor(str.length/eachPage)+1;
            }
            $("#currentPage").text("第"+currentPage+"页");
            $("#totalPage").text("共"+totalPages+"页");

            //上一页方法
            function toPrePage(num){
                if(num-eachPage<=0){//如果当前是第一页
                    return;
                }else{
                    $("#content").empty();//首先清空div块内的所有数据
                    currentData = (currentPage-2)*eachPage;//即(currentPage*eachPage-2*eachPage),令currentData指向上一页的第一条数据
                    for(let i=currentData,j=0;j<eachPage;i++,j++){
                        $("#content").append("<p>"+str[i]+"</p>");
                        $("p").css({
                            "border":"solid 1px red",
                            "marginLeft":"auto",
                            "marginRight":"auto",
                            "width":"400px",
                            "height":"50px"
                        });
                        currentData++;
                    }
                    currentPage--;//页号减一
                }
                $("#currentPage").text("第"+currentPage+"页");
            }

            //下一页方法
            function toNextPage(num){
                if(num==str.length){//如果这已经是最后一页
                    return;
                }else{
                    $("#content").empty();//清空div块内的所有数据
                    for(let i=currentData,j=0;j<7;i++,j++){
                        //下面的if语句处理最后一页的最后一条数据，如果这条数据不是刚好填满最后一页
                        if(currentData==str.length){//如果已经是最后一页的最后一条数据
                            currentPage++;
                            //alert(currentPage);
                            $("#currentPage").text("第"+currentPage+"页");
                            return;
                        }else{
                            $("#content").append("<p>"+str[i]+"</p>");
                            $("p").css({
                            "border":"solid 1px red",
                            "marginLeft":"auto",
                            "marginRight":"auto",
                            "width":"400px",
                            "height":"50px"
                        });
                        currentData++;
                            //下面的if语句处理本页的最后一条数据，即这条数据刚好填满本页。因为当j=6时循环结束，不会执行上面的if语句了，所以这里重复这部分内容
                            if(currentData==(currentPage+1)*eachPage){//如果已经是本页的最后一条数据
                                currentPage++;
                                $("#currentPage").text("第"+currentPage+"页");
                                return;
                            }
                        }
                    }
                }  
            }
            
            $("#prePage").click(function(){
                toPrePage(currentData);
            });
            $("#nextPage").click(function(){
                toNextPage(currentData);
            });