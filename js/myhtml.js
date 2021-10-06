function select1(){
    let str=wps.Application.InputBox("请选择你要输入的单元格：", undefined, undefined, undefined, undefined, undefined, undefined, 8)
    window.document.getElementById("input1").value=str.Address()
    var x=str.Row
    var y=str.Column
    var a=str.Cells.Item(1).Value2
    var b=str.Cells.Item(2).Value2
    var c=str.Cells.Item(3).Value2
    var d=str.Cells.Item(4).Value2
    let sht=wps.Application.ActiveSheet.Cells
    sht.Item(x,y+2).Formula=a+b
    sht.Item(x+1,y+2).Formula=c+d
    sht.Item(x+2,y).Formula=a+c
    sht.Item(x+2,y+1).Formula=b+d
    sht.Item(x+2,y+2).Formula=a+b+c+d
    sht.Item(x-1,y+3).Formula="χ2"
    sht.Item(x-1,y+4).Formula="P"
    wps.Application.ActiveSheet.Range(sht.Item(x-1,y-1),sht.Item(x+2,y+4)).Select()
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
    wps.Application.ActiveSheet.Range(sht.Item(x,y+3),sht.Item(x+2,y+3)).Merge()
    wps.Application.ActiveSheet.Range(sht.Item(x,y+4),sht.Item(x+2,y+4)).Merge()
    // //重定向 使用cmd生成结果文本；但是会出现管道缓冲区的问题；不能及时读取；导致后面读取还是读取的前一个数据；
    // // var cmdstr="/c Rscript %appdata%/kingsoft/wps/jsaddons/sdp_1.0.0/Rscript/chisq.R"+" "+a+" "+b+" "+c+" "+d+" "+">%appdata%/kingsoft/wps/jsaddons/result.txt"
    // //使用R脚本输出结果
    // var cmdstr="%appdata%/kingsoft/wps/jsaddons/sdp_1.0.0/Rscript/chisq.R"+" "+a+" "+b+" "+c+" "+d
    // wps.OAAssist.ShellExecute("Rscript.exe",cmdstr)
 
    var n=a+b+c+d
    var aa=(a+b)*(a+c)/n
    var bb=(a+b)*(b+d)/n
    var cc=(c+d)*(a+c)/n
    var dd=(b+d)*(c+d)/n
    var aaa=Math.abs(a-aa)
    var bbb=Math.abs(a-aa)
    var ccc=Math.abs(a-aa)
    var ddd=Math.abs(a-aa)
    if(n<40|aa<1|bb<1|cc<1|dd<1){
      var kk="fisher确切概率"
      var p=fishertest(a,b,c,d,n)
    }else if(aa<5|bb<5|cc<5|dd<5){    
      var kk=(aaa-0.5)(aaa-0.5)/aa+(bbb-0.5)(bbb-0.5)/bb+(ccc-0.5)(ccc-0.5)/cc+(ddd-0.5)(ddd-0.5)/dd
      var pstr="CHIDIST("+kk+",1)"
      var p=wps.Application.ExecuteExcel4Macro(pstr)
    }else{
      var kk=aaa*aaa/aa+bbb*bbb/bb+ccc*ccc/cc+ddd*ddd/dd
      var pstr="CHIDIST("+kk+",1)"
      var p=wps.Application.ExecuteExcel4Macro(pstr)
    }
    sht.Item(x,y+3).Formula=kk
    sht.Item(x,y+4).Formula=p
    // alert("ok")
    // window.close()
}

// function compute(){
//   // alert("ok")
//   var result=wps.FileSystem.readAsBinaryString("C:/Users/Administrator/AppData/Roaming/kingsoft/wps/jsaddons/result.txt")
//   var reg=/X-squared = (.*), df = 1, p-value = (.*)/;
//   var rng=wps.Application.Selection
//   if(result.match(reg)!=null){
//     rng.Cells.Item(2,5).Formula=result.match(reg)[1]
//     rng.Cells.Item(2,6).Formula=result.match(reg)[2]
//   }else{
//     // alert("使用Fisher确切概率法！")
//     var fisher_reg=/p-value = (.*)/;
//     rng.Cells.Item(2,5).Formula="Fisher确切概率法"
//     rng.Cells.Item(2,6).Formula=result.match(fisher_reg)[1]
//   }
  
// window.close()
// }

//fisher确切概率法实现
function fishertest(a,b,c,d,n){
  var prr=0
  var m=fact(a+b)*fact(a+c)*fact(c+d)*fact(b+d)
  var p0=m/(fact(a)*fact(b)*fact(c)*fact(d)*fact(n))
  var data=[a+b,b+d,a+c,b+d]
  data.sort()
  for(var i=0;i<data[0];i++){
    var m1=i
    var m2=data[0]-m1
    var m3=data[1]-m1
    var m4=data[3]-m3
    var pp=m/(fact(m1)*fact(m2)*fact(m3)*fact(m4)*fact(n))
    // alert(pp)
    if(pp<=p0){
      prr+=pp
    }
  }
  return prr
}

//求阶乘函数
function fact(n){
      return n > 1 ? n * fact(n-1) : 1;
}



