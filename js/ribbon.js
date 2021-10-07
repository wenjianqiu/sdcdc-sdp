
//这个函数在整个wps加载项中是第一个执行的
function OnAddinLoad(ribbonUI){
    if (typeof (wps.ribbonUI) != "object"){
		wps.ribbonUI = ribbonUI
    }
    
    if (typeof (wps.Enum) != "object") { // 如果没有内置枚举值
        wps.Enum = WPS_Enum
    }

 
    return true
}
//按钮图标显示
function btnImage(control){    
    var images= new Map([
        ["threeline","images/threeline.svg"],
        ["dishi","images/dao.svg"],
        ["myhtml","images/chisq.svg"],
        ["towncode","images/town2code.svg"],
         //文本处理区域
        ["insert","images/插入.svg"],
        ["textin","images/插入文本.svg"],
        ["inhead","images/inhead.svg"],
        ["incenter","images/incenter.svg"],
        ["infoot","images/infoot.svg"],

        ["textout","images/插入文本.svg"],
        ["outhead","images/inhead.svg"],
        ["outcenter","images/incenter.svg"],
        ["outfoot","images/infoot.svg"],
        //填充区域
        ["fill","images/填充.svg"],
        ["fill123","images/fill123.svg"],
        ["fillabc","images/fillabc.svg"],
        ["fillroman","images/fillroman.svg"],
        ["fillblank","images/fillblank.svg"],
        ["filldown","images/filldown.svg"],
        //删除区域  
        ["del_menu","images/del_blanksheet.svg"],
        ["del_blanksheet","images/del_blanksheet.svg"],
        ["del_blankrows","images/del_blankrows.svg"],
        ["del_blankspace","images/del_blankspace.svg"],
        ["del_zero","images/del_zero.svg"],
        ["del_ABC","images/del_ABC.svg"],
        //计算区域
        ["compute","images/compute.svg"],
        ["add","images/add.svg"],
        ["minus","images/minus.svg"],
        ["times","images/times.svg"],
        ["divide","images/divide.svg"],
        //格式修饰区域
        ["geshi","images/格式.svg"],
        ["upper","images/upper.svg"],
        ["lower","images/lower.svg"],
        ["trans_date","images/格式.svg"],
        //表格操作部分
        ["sheetjion","images/many2one.svg"],
        ["many2one","images/many2one.svg"],
        ["cells2one","images/cells2one.svg"],
        ["cells2sheet","images/cells2sheet.svg"],
        ["clone","images/clone.svg"],
        
        ["sheetdivde","images/one2many.svg"],
        ["one2many","images/one2many.svg"],
        ["range2sheets","images/range2sheets.svg"],
        //数据比对
        ["datamatch","images/cmatch.png"],
        ["cmatch","images/cmatch.png"],
        ["rangematch","images/cmatch.png"],
        //图表制作部分
        ["chart_format","images/chart_format.png"],
        ["chart","images/allcharts.svg"],
        ["timeline","images/timeline.svg"],
        ["linemove","images/linemove.svg"],
        ["meanCI","images/meanCI.svg"],
        ["sankey","images/meanCI.svg"],
        //地图部分
        ["shandong","images/shandong.svg"],
        ["sd_town","images/shandong.svg"],
        
        ["geosd","images/geosd.svg"],
        ["geosd_济南市","images/shandong.svg"],
        ["geosd_青岛市","images/shandong.svg"],
        ["geosd_淄博市","images/shandong.svg"],
        ["geosd_枣庄市","images/shandong.svg"],
        ["geosd_东营市","images/shandong.svg"],
        ["geosd_烟台市","images/shandong.svg"],
        ["geosd_潍坊市","images/shandong.svg"],
        ["geosd_济宁市","images/shandong.svg"],
        ["geosd_泰安市","images/shandong.svg"],
        ["geosd_威海市","images/shandong.svg"],
        ["geosd_日照市","images/shandong.svg"],
        ["geosd_临沂市","images/shandong.svg"],
        ["geosd_德州市","images/shandong.svg"],
        ["geosd_聊城市","images/shandong.svg"],
        ["geosd_滨州市","images/shandong.svg"],
        ["geosd_菏泽市","images/shandong.svg"],
        //统计分析部分
        ["stat","images/stat.svg"],
        ["stat1","images/stat1.svg"],
        ["stat_t_one","images/stat-t-one.svg"],
        ["stat_t_two","images/stat-t-two.svg"],
        ["stat_t_three","images/stat-t-three.svg"],
        ["stat_t_four","images/stat-t-four.svg"],
        ["stat_one","images/stat_one.svg"],
        ["stat_two","images/stat_two.svg"],
        ["stat_three","images/stat_three.svg"],
        ["stat_four","images/stat_four.svg"],
        ["stat_five","images/stat_five.svg"],
        ["stat_six","images/stat_six.svg"],
        ["stat_seven","images/stat_seven.svg"],
        ["eqtest","images/eqtest.svg"],
        ["stat_anova1","images/stat_anova1.svg"],
        ["stat_anova2","images/stat_anova2.svg"],
        ["stat_p","images/stat_p.svg"],
        //样本量计算
        ["stat2","images/stat2.svg"],
        ["sample1","images/sample1.svg"],
        ["sample2","images/sample2.svg"],
        ["sample3","images/sample3.svg"],
        ["sample4","images/sample4.svg"],
        ["sample5","images/sample5.svg"],
        //其他部分
        ["comment","images/comment.svg"],
        ["contact","images/contact.svg"],
        //在线浏览器工具
        ["drawio","images/drawio.svg"],
        ["geogebra","images/geogebra.svg"],
        ["svgdraw","images/svgdraw.svg"],
        ["onlinetools","images/onlinetools.png"],


    ])
   
    if(images.get(control.Id)){
        return images.get(control.Id)
    }else{
        return "images/newFromTemp.svg"
    }

  
}



//写按钮点下执行的命令
function OnAction(control) {
    const eleId = control.Id
    if(eleId.slice(0,5)=="geosd"){
        var geoname=eleId.slice(6)
        // alert(geoname)
        wps.PluginStorage.setItem("dsname",geoname)
        wps.ShowDialog(GetUrlPath() + "/ui/chart_dishi.html", "市级地图", 1200 * window.devicePixelRatio, 900 * window.devicePixelRatio, false)

    }
    
    
    switch (eleId) {
        case "btnShowMsg":
            wps.ShowDialog(GetUrlPath() + "/ui/geogebra.html", "几何绘图", 1000 * window.devicePixelRatio, 800 * window.devicePixelRatio, false)
            break;
      
        //图表chart格式化
        case "chart_format":
            var cht=wps.Application.ActiveChart
            //设置图表标题
            cht.HasTitle=false 
            cht.ChartArea.Border.LineStyle=-4142
            //设置坐标轴
            cht.Axes().Item(1).HasTitle = true
            cht.Axes().Item(1).AxisTitle.Caption="横轴标题"      
            cht.Axes().Item(2).HasTitle = true
            cht.Axes().Item(2).AxisTitle.Caption="坐标轴标题"
            cht.Axes().Item(2).AxisTitle.Orientation=-4166
            cht.Axes().Item(1).MajorTickMark=3
            cht.Axes().Item(1).Format.Line.ForeColor.Brightness=0
            //cht.Axes().Item(1).Format.Line.ForeColor.RGB=0
            cht.Axes().Item(1).Format.Line.ForeColor.ObjectThemeColor=13
            cht.Axes().Item(2).MajorTickMark=3
            cht.Axes().Item(2).HasMajorGridlines=false
            cht.Axes().Item(2).Format.Line.ForeColor.ObjectThemeColor=13
            break
        case "myhtml":
            wps.ShowDialog(GetUrlPath() + "/ui/myhtml.html", "卡方检验", 800 * window.devicePixelRatio, 350 * window.devicePixelRatio, false)
            break
      
        //图表制作
        case "timeline":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_timeline.html", "时间轴图", 900 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "linemove":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_moveline.html", "动态线图", 700 * window.devicePixelRatio, 420 * window.devicePixelRatio, false)
            break
        case "meanCI":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_mean_95CI.html", "可信区间图", 1070 * window.devicePixelRatio, 450 * window.devicePixelRatio, false)
            break
        case "boxplot":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_boxplot.html", "盒须图", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "sankey":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_sankey.html", "桑基图", 700 * window.devicePixelRatio, 420 * window.devicePixelRatio, false)
            break
        case "shandong":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_ShanDong.html", "山东地市图", 900 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "sd_town":
            wps.ShowDialog(GetUrlPath() + "/ui/chart_SD_town.html", "山东县区图", 1200 * window.devicePixelRatio, 800 * window.devicePixelRatio, false)
            break
        //弹出统计分析对话框
        case "stat_t_one":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_t_one.html", "样本均数与总体均数", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_t_two":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_t_two.html", "配对设计的均数比较", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_t_three":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_t_three.html", "成组设计的两样本均数比较", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_t_four":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_t_four.html", "成组设计的两样本几何均数比较", 800 * window.devicePixelRatio, 500 * window.devicePixelRatio, false)
            break
        case "stat_one":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_one.html", "估计频数分布-正态", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_two":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_two.html", "医学参考值-正态", 800 * window.devicePixelRatio, 500 * window.devicePixelRatio, false)
            break
        case "stat_three":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_three.html", "总体均数可信区间估计", 800 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "stat_four":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_four.html", "总体率可信区间估计", 800 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "stat_five":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_five.html", "等效检验-样本均数与总体均数", 800 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "stat_six":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_six.html", "等效检验-两样本均数", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_seven":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_seven.html", "等效检验-两样本率", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_anova1":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_anova1.html", "方差分析-完全随机设计", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_anova2":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_anova2.html", "方差分析-随机区组设计", 800 * window.devicePixelRatio, 600 * window.devicePixelRatio, false)
            break
        case "stat_p":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/stat_p.html", "单个总体率的假设检验", 800 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "sample1":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/sample1.html", "样本均数与总体均数", 1000 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "sample2":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/sample2.html", "两样本均数比较", 1000 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "sample3":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/sample3.html", "两样本率比较", 1000 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "sample4":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/sample4.html", "检验效能计算", 1000 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "sample5":
            wps.ShowDialog(GetUrlPath() + "/ui/stat/sample5.html", "抽样估计总体参数", 1000 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break


        //链接外网网络工具
        case "onlinetools":
            //在线工具
            var html_index="https://tool.lu/"
            wps.OAAssist.ShellExecute("explorer.exe",html_index)
            break
        case "drawio":
            //流程图工具
            var html_index="https://app.diagrams.net/"
            wps.OAAssist.ShellExecute("explorer.exe",html_index)
            break
        case "geogebra":
            //几何绘图工具
            var html_index="https://www.geogebra.org/classic"
            wps.OAAssist.ShellExecute("explorer.exe",html_index)
            break
        case "svgdraw":
            //几何绘图工具
            var html_index="https://c.runoob.com/more/svgeditor/"
            wps.OAAssist.ShellExecute("explorer.exe",html_index)
            break

            //使用说明
        case "comment":
            wps.ShowDialog(GetUrlPath() + "/ui/comment.html", "使用说明", 830 * window.devicePixelRatio, 700 * window.devicePixelRatio, false)
            break
        case "contact":
            wps.ShowDialog(GetUrlPath() + "/ui/contact.html", "联系方式", 400 * window.devicePixelRatio, 300 * window.devicePixelRatio, false)
            break
 

        case "dishi":
            {
                var city="济南青岛淄博枣庄东营烟台潍坊济宁泰安威海日照莱芜临沂德州聊城滨州菏泽"
                var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            var str=arr[i][j]
                            if(str==str*1){
                                arr[i][j]=city.substr((str-3701)*2,2)
                            }else{
                                // alert(typeof(str))
                                arr[i][j]=(city.indexOf(str)+2)/2+3700
                            }
                            
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            break
        case "towncode":
            {
                var town="历下区,槐荫区,天桥区,历城区,长清区,章丘区,济阳区,莱芜区,钢城区,平阴县,商河县,市南区,市北区,黄岛区,崂山区,李沧区,城阳区,即墨区,胶州市,平度市,莱西市,淄川区,张店区,博山区,临淄区,周村区,桓台县,高青县,沂源县,高新技术开发区,薛城区,峄城区,台儿庄区,山亭区,滕州市,东营区,河口区,垦利区,利津县,广饶县,芝罘区,福山区,牟平区,莱山区,长岛县,龙口市,莱阳市,莱州市,蓬莱市,招远市,栖霞市,海阳市,潍城区,寒亭区,坊子区,奎文区,临朐县,昌乐县,青州市,诸城市,寿光市,安丘市,高密市,昌邑市,任城区,兖州区,微山县,鱼台县,金乡县,嘉祥县,汶上县,泗水县,梁山县,曲阜市,邹城市,泰山区,岱岳区,宁阳县,东平县,新泰市,肥城市,环翠区,文登区,荣成市,乳山市,东港区,岚山区,五莲县,莒县,兰山区,罗庄区,河东区,沂南县,郯城县,沂水县,兰陵县,费县,平邑县,莒南县,蒙阴县,临沭县,德城区,陵城区,宁津县,庆云县,临邑县,齐河县,平原县,夏津县,武城县,乐陵市,禹城市,东昌府区,阳谷县,莘县,茌平县,东阿县,冠县,高唐县,临清市,滨城区,沾化区,惠民县,阳信县,无棣县,博兴县,邹平市,牡丹区,定陶区,曹县,单县,成武县,巨野县,郓城县,鄄城县,东明县"
                var code="370102,370104,370105,370112,370113,370114,370115,370116,370117,370124,370126,370202,370203,370211,370212,370213,370214,370215,370281,370283,370285,370302,370303,370304,370305,370306,370321,370322,370323,370390,370403,370404,370405,370406,370481,370502,370503,370505,370522,370523,370602,370611,370612,370613,370634,370681,370682,370683,370684,370685,370686,370687,370702,370703,370704,370705,370724,370725,370781,370782,370783,370784,370785,370786,370811,370812,370826,370827,370828,370829,370830,370831,370832,370881,370883,370902,370911,370921,370923,370982,370983,371002,371003,371082,371083,371102,371103,371121,371122,371302,371311,371312,371321,371322,371323,371324,371325,371326,371327,371328,371329,371402,371403,371422,371423,371424,371425,371426,371427,371428,371481,371482,371502,371521,371522,371523,371524,371525,371526,371581,371602,371603,371621,371622,371623,371625,371681,371702,371703,371721,371722,371723,371724,371725,371726,371728"
                var townlist=town.split(",")
                var codelist=code.split(",")
                var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            var str=arr[i][j]
                            if(str==str*1){
                                arr[i][j]=townlist[codelist.indexOf(str)]
                            }else{
                                // alert(typeof(str))
                                arr[i][j]=codelist[townlist.indexOf(str)]
                            }
                            
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            break
        //插入文本到选定区域的前中后
		case "inhead":
            {
                var str=wps.Application.InputBox("请输入:","在字符前加入：")
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            arr[i][j]=str+arr[i][j]
                        }
                    }
                    wps.Application.Selection.Formula=arr
                                    
                }
            }
            break
        case "incenter":
            {
                var index=wps.Application.InputBox("请输入:","在第几个字符后插入：")*1
                if(index!=null&&index!=""){
                    // alert(typeof(i))
                var str=wps.Application.InputBox("请输入:","要插入的字符：")
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            var tmp=arr[i][j]
                            arr[i][j]=tmp.slice(0,index)+str+tmp.slice(index)
                        }
                    }
                    wps.Application.Selection.Formula=arr
                                    
                }
                }
            }
            break
        case "infoot":
            {
                var str=wps.Application.InputBox("请输入:","在字符后加入：")
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            arr[i][j]=arr[i][j]+str
                        }
                    }
                    wps.Application.Selection.Formula=arr
                                    
                }
            }
            break
        case "outhead":
            {
                var index=wps.Application.InputBox("请输入:","左边数几个字符：")*1
                if(index!=null&&index!=""){
                    // alert(typeof(i))
                                    
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            var tmp=arr[i][j]
                            arr[i][j]=tmp.slice(0,index)
                        }
                    }
                    wps.Application.Selection.Formula=arr                                        
                
                }
            }
            break
        case "outcenter":
                {
                    var index=wps.Application.InputBox("请输入:","左边数第几个字符开始：")*1
                    if(index!=null&&index!=""){
                        // alert(typeof(i))
                    var str=wps.Application.InputBox("请输入:","需要的字符长度：")*1
                    if(str!=null&&str!=""){
                        var arr = wps.Application.Selection.Formula
                        for(var i =0;i<arr.length;i++){
                            for(var j=0;j<arr[i].length;j++){
                                var tmp=arr[i][j]
                                arr[i][j]=tmp.slice(index-1,index+str-1)
                            }
                        }
                        wps.Application.Selection.Formula=arr
                                        
                    }
                    }
                }
                break
        case "outfoot":
                {
                    var index=wps.Application.InputBox("请输入:","右边数几个字符：")*1
                    if(index!=null&&index!=""){
                        // alert(typeof(i))
                        var arr = wps.Application.Selection.Formula
                        for(var i =0;i<arr.length;i++){
                            for(var j=0;j<arr[i].length;j++){
                                var tmp=arr[i][j]
                                arr[i][j]=tmp.slice(tmp.length-index)
                            }
                        }
                        wps.Application.Selection.Formula=arr
                                        
                    
                    }
                }
                break
        
        //三个表格式制作
        case "threeline":
            {
                var rng=wps.Application.Selection.Rows
                rng.Borders.Value=0;
                rng.Item(1).Borders.Item(3).Weight=4
                rng.Item(1).Borders.Item(4).Weight=2
                rng.Item(rng.Count).Borders.Item(4).Weight=4
                rng.Font.Name="宋体"
                rng.Font.Name="Times New Roman"
                rng.Font.Size=11
                rng.HorizontalAlignment=3
                rng.VerticalAlignment=2
              
                
            }
            break
        //填充序列 数字和字母 以及罗马字符
        case "fill123":
            {
                var arr = wps.Application.Selection.Formula
                var n=1
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            arr[i][j]=n
                            n+=1
                        }
                    }
                    wps.Application.Selection.Formula=arr
                                    
               
            }
            break
        case "fillabc":
            {
                var arr = wps.Application.Selection.Formula
                var n =0
                var mylist=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            arr[i][j]=mylist[n]
                            n+=1
                            n=n%26
                        }
                    }
                    wps.Application.Selection.Formula=arr
            }
            break
        case "fillroman":
            {
                var arr = wps.Application.Selection.Formula
                var n =0
                var mylist=["Ⅰ","Ⅱ","Ⅲ","Ⅳ","Ⅴ","Ⅵ","Ⅷ","Ⅸ","Ⅺ","Ⅹ","Ⅺ","Ⅻ"]
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            arr[i][j]=mylist[n]
                            n+=1
                            n=n%12
                        }
                    }
                    wps.Application.Selection.Formula=arr
            }
            break
        case "fillblank":
            {
                var str=wps.Application.InputBox("请输入要在空单元格中填写的内容:","请输入：")
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            if(arr[i][j]==""){
                                arr[i][j]=str
                            }                           
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            }        
            break
        case "filldown":
            {
                var arr = wps.Application.Selection.Formula
                for(var i =1;i<arr.length;i++){
                        if(arr[i]==""){
                            arr[i]=arr[i-1]
                        }                           
                    
                }
                wps.Application.Selection.Formula=arr
                
            }        
            break
        //原地计算加减乘除
        case "add":
            {
                var str=wps.Application.InputBox("要增加的数量:","请输入：")*1
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            if(arr[i][j]==arr[i][j]*1){
                                arr[i][j]=str+arr[i][j]*1
                            }                           
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            }
            break
        case "minus":
            {
                var str=wps.Application.InputBox("要减少的数量:","请输入：")*1
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            if(arr[i][j]==arr[i][j]*1){
                                arr[i][j]=arr[i][j]*1-str
                            }                           
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            }
            break
        case "times":
            {
                var str=wps.Application.InputBox("要增加的倍数:","请输入：")*1
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            if(arr[i][j]==arr[i][j]*1){
                                arr[i][j]=arr[i][j]*1*str
                            }                           
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            }
            break
        case "divide":
            {
                var str=wps.Application.InputBox("请输入除数:","请输入：")*1
                if(str!=null&&str!=""){
                    var arr = wps.Application.Selection.Formula
                    for(var i =0;i<arr.length;i++){
                        for(var j=0;j<arr[i].length;j++){
                            if(arr[i][j]==arr[i][j]*1){
                                arr[i][j]=arr[i][j]*1/str
                            }                           
                        }
                    }
                    wps.Application.Selection.Formula=arr
                }
            }
            break
        //删除空白表和空行和空格

        case "del_blanksheet":
            {
                wps.Application.DisplayAlerts=false
                var shts=wps.Application.Worksheets
                for(var i=shts.Count;i>0;i--){

                    if(shts.Item(i).UsedRange.Value2==null){
                        
                        shts.Item(i).Delete()
                    }
                }
                wps.Application.DisplayAlerts=true
                                
            }
            break
        case "del_blankrows":
            {
                var flag=0
                var crr=[]
                var arr = wps.Application.Selection.Formula
                var brr = wps.Application.Selection.Formula
                for(var i =0;i<arr.length;i++){
                    for(var j=0;j<arr[i].length;j++){
                        if(arr[i][j]==""){
                            arr[i][j]=0
                        }else{
                            arr[i][j]=1
                        }
                        flag += arr[i][j]                           
                    }
                    if(flag!=0){
                        crr.push(brr[i])
                       
                    }
                    flag=0
                }
                wps.Application.Selection.Formula=crr               
            }
            break
        case "del_blankspace":
            {
               
                var arr = wps.Application.Selection.Formula
                for(var i =0;i<arr.length;i++){
                    for(var j=0;j<arr[i].length;j++){
                    
                        arr[i][j]=arr[i][j].trim()
                       
                    }
                }
                wps.Application.Selection.Formula=arr
                
            }
            break
        case "del_zero":
            {
                
                var arr = wps.Application.Selection.Formula
                for(var i =0;i<arr.length;i++){
                    for(var j=0;j<arr[i].length;j++){
                                             
                            //判断每一个字符，如果是数字则留下
                            if(arr[i][j]==0){
                               arr[i][j]=""
                            }    
                        }
                                             
                    }
                
                wps.Application.Selection.Formula=arr
                
            }
            break
        case "del_ABC":
            {
                var str=""
                var arr = wps.Application.Selection.Formula
                for(var i =0;i<arr.length;i++){
                    for(var j=0;j<arr[i].length;j++){
                        var tmp = arr[i][j].split("")
                        for(var x=0;x<tmp.length;x++){
                            //判断每一个字符，如果是数字则留下
                            if(tmp[x]==tmp[x]*1){
                                str+=tmp[x]
                            }    
                        }
                        arr[i][j]=str 
                        str=""    
                    }
                }
                wps.Application.Selection.Formula=arr
                
            }
            break
       
        //格式 大小写切换
        case "upper":
            {
                var str=""
                var arr = wps.Application.Selection.Formula
                for(var i =0;i<arr.length;i++){
                    for(var j=0;j<arr[i].length;j++){
                        var tmp = arr[i][j].split("")
                        for(var x=0;x<tmp.length;x++){
                            str+=tmp[x].toUpperCase()                        
                        }
                        arr[i][j]=str 
                        str=""    
                    }
                }
                wps.Application.Selection.Formula=arr
                                
            }
            break      
        case "lower":
            {
                var str=""
                var arr = wps.Application.Selection.Formula
                for(var i =0;i<arr.length;i++){
                    for(var j=0;j<arr[i].length;j++){
                        var tmp = arr[i][j].split("")
                        for(var x=0;x<tmp.length;x++){
                            str+=tmp[x].toLowerCase()                        
                        }
                        arr[i][j]=str 
                        str=""    
                    }
                }
                wps.Application.Selection.Formula=arr
                                
            }
            break

        //表格操作程序
        case "many2one":  //多表合并汇总
            {
                var fileselect = wps.Application.FileDialog(1)
                fileselect.AllowMultiSelect = true
                fileselect.Show()
                var files=fileselect.SelectedItems
                // alert(files.Count)
                var sumsheets=wps.Application.Workbooks.Add()                

                for (var i = 1; i < files.Count+1; i++) {
                    var tmpsheet=wps.Application.Workbooks.Open(files.Item(i))
                    tmpsheet.Worksheets.Copy(sumsheets.Worksheets.Item(1)) 
                    tmpsheet.Close()                   
                }
                
            }
            break
        case "cells2one":  //同格求和
            {
               
                var arr=[]
                var shts=wps.Application.Worksheets
                var address=wps.Application.Selection.Address()
                arr=shts.Item(1).Range(address).Formula 
                for(var i=2;i<shts.Count+1;i++){
                    var tmp=shts.Item(i).Range(address).Formula                    
                    arrayAdd(arr,tmp)
                }  
                wps.Application.Worksheets.Add()
                arrWritesheet(arr,wps.Application.ActiveSheet)
            }
            break
        case "cells2sheet"://同格汇表
            {
                var arr=[]
                var shts=wps.Application.Worksheets
                var address=wps.Application.Selection.Address()
                for(var i=1;i<shts.Count+1;i++){
                    var tmp=shts.Item(i).Range(address).Formula
                    tmp[0].unshift(shts.Item(i).Name)
                    arr.push(tmp[0])
                }               
                wps.Application.Worksheets.Add()
                arrWritesheet(arr,wps.Application.ActiveSheet)
            }
            break
        case "clone":
            {
                var n=wps.Application.InputBox("请输入要复制的数量:","请输入数量：")*1
                var sht=wps.Application.ActiveSheet;
                for(var i =0; i<n;i++){
                    sht.Copy(sht,null)
                }

            }
            break

        case "one2many":
            {
                var path=wps.Application.ActiveWorkbook.Path
                var sht=wps.Application.Worksheets
                for(var i =1;i<sht.Count+1;i++){
                    var name=sht.Item(i).Name
                    sht.Item(i).Copy()
                    wps.Application.ActiveWorkbook.SaveAs(path+"\\"+name)
                    wps.Application.ActiveWorkbook.Close()
                }
                alert("拆分完成，文件与此文件同一个目录！！")
            }
            break
        case "range2sheets":
            {
                var index=wps.Application.InputBox("请输入分表所有列的序号:","请输入用第几列：")*1
                var rng =wps.Application.Selection.Formula
                var arr=[]
                var brr=[]
                //获取筛选列的唯一列表
                for (var i = 1; i < rng.length; i++) {
                        const tmp = rng[i][index-1];
                        if(arr.indexOf(tmp)==-1){
                            arr.push(tmp)                       
                    }                    
                }
                arr.forEach(ar => {
                    brr.push(rng[0])
                    for(var i=0;i<rng.length;i++){
                        if(rng[i][index-1]==ar){
                            brr.push(rng[i])
                        }
                    }
                   
                    wps.Application.Worksheets.Add()
                    sht=wps.Application.ActiveSheet
                    sht.Name=ar
                    arrWritesheet(brr,sht)
                    brr=[]
                    
                });
             
            }
            break
        //数据对比
        case "cmatch":
            {
                //rng 为两列数的地址分别赋值给两个列表
                alert("需要将两列数据相邻排列，并提前选中")
                var rng=wps.Application.Selection.Formula
                
                var arr=[]
                var brr=[]
                for(var i=0;i<rng.length;i++){
                    arr.push(rng[i][0])
                    brr.push(rng[i][1])
                } 
                         
                // alert(rng.length)
                for(var j=0;j<rng.length;j++){

                    // alert(1)                  
                    if(!brr.includes(arr[j])&arr[j]!=""){
                        wps.Application.Selection.Cells.Item(j+1,1).Interior.Color=65500
                    }
                    if(!arr.includes(brr[j])&brr[j]!=""){                        
                        wps.Application.Selection.Cells.Item(j+1,2).Interior.Color=65535
                    }
                }

            }
            break
        //两区域比较
        case "rangematch":
                wps.ShowDialog(GetUrlPath() + "/ui/rangematch.html", "两区域比较", 800 * window.devicePixelRatio, 500 * window.devicePixelRatio, false)
             break

        default:
            break
    }
    return true
}



//将数组写回sheet表格中
function arrWritesheet(arr,sht){
    for(var i = 0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            sht.Cells.Item(i+1,j+1).Value2=arr[i][j]
        }
    }
}

//两个二维数组的加和，用
function arrayAdd(arr, arr2) {
    for(var i=0;i<arr.length;i++){        
        for(var j=0;j<arr[i].length;j++){
            arr[i][j]=arr[i][j]*1+arr2[i][j]*1
        }
    }
    
}