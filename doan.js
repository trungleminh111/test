document.getElementById("showgiohang").style.display ="none";
var gioHang = new Array();
 
function addToCard(x){
    var boxSp = x.parentElement.children;
    var img = boxSp[0].src;
    var tensp = boxSp[1].innerText;
    var giasp = boxSp[2].children[0].innerText;
    var soluong = parseInt(boxSp[4].value);
    var product = new Array(img, tensp, giasp, soluong)

   
   console.log(gioHang);
   

   //kiem tra gio hang
   var kt = 0;
   for (let i = 0; i < gioHang.length; i++) {
        if(gioHang[i][[1]] == tensp){
            kt =1;
            soluong += parseInt(gioHang[i][3]);
            gioHang[i][3] = soluong;
            break
        }
       
   }
   if(kt == 0){
       //them moi- add to cart
       gioHang.push(product)
   }
   showcountsp();
   sessionStorage.setItem("gioHang",JSON.stringify(gioHang));
  
}
function showcountsp(){
    document.getElementById("soluonghang").innerHTML = gioHang.length;
}
function showMyCart(){
    var ttgh ="";
    var tong = 0;   
    for (let i = 0; i < gioHang.length; i++) {
        var thanhTien =parseInt(gioHang[i][2]) * parseInt(gioHang[i][3]);
        tong += thanhTien;
       ttgh +='<tr>'+
       '<td>'+(i + 1)+'</td>'+
       '<td><img src="'+gioHang[i][0]+'" alt=""></td>'+
       '<td>'+gioHang[i][1]+'</td>'+
       '<td>'+gioHang[i][2]+'</td>'+
       '<td>'+gioHang[i][3]+'</td>' +
       '<td>' +
           '<div>'+thanhTien+'</div>' +
       '</td>' +
       '<td>' +
           '<button id="delete" onclick="xoaSp(this)">Xoá</button>' +
       '</td>' +
        '</tr>';
   
        
    }
    ttgh +='<tr>' +
    '<th colspan="5">Tổng Đơn hàng</th>' +
    '<th>' +
        '<div>'+tong+'</div>' +
    '</th>' +
'</tr>';
document.getElementById("mycart").innerHTML = ttgh;
}
function xoaSp(x){
    //xoa tr
    var tr = x.parentElement.parentElement;
    var tensp = tr.children[2].innerText;
    tr.remove();
    for (let i = 0; i < gioHang.length; i++) {
        if(gioHang[i][1]==tensp){
            gioHang.splice(i, 1);

        }
        
    }
    showMyCart();
    showcountsp();
}
function xoatatca(){
    gioHang =[];
    showMyCart();
    showcountsp();

}
function showhidecart(){

    var x = document.getElementById("showgiohang");
    if (x.style.display == "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
        showMyCart();
    }
   
       

}
function showgiohang_trangthanhtoan(){
    var  gh = sessionStorage.getItem("gioHang",JSON.stringify(gioHang));
    var gioHang = JSON.parse(gh) ;
    var ttgh ="";
    var tong = 0;   
    for (let i = 0; i < gioHang.length; i++) {
        var thanhTien =parseInt(gioHang[i][2]) * parseInt(gioHang[i][3]);
        tong += thanhTien;
       ttgh +='<tr>'+
       '<td>'+(i + 1)+'</td>'+
       '<td><img src="'+gioHang[i][0]+'" alt=""></td>'+
       '<td>'+gioHang[i][1]+'</td>'+
       '<td>'+gioHang[i][2]+'</td>'+
       '<td>'+gioHang[i][3]+'</td>' +
       '<td>' +
           '<div>'+thanhTien+'</div>' +
       '</td>' +
        '</tr>';
    }
    ttgh +='<tr>' +
    '<th colspan="5">Tổng Đơn hàng</th>' +
    '<th>' +
        '<div>'+tong+'</div>' +
    '</th>' +
'</tr>';
    
document.getElementById("mycart").innerHTML = ttgh ;
}
function dongydathang(){
    var ttnh =document.getElementById("thongtinnhanhang").children;
    var hoten = ttnh[0].children[1].children[0].value;
    var diachi = ttnh[1].children[1].children[0].value;
    var sdt = ttnh[2].children[1].children[0].value;
    var email = ttnh[3].children[1].children[0].value;

    var nguoiNhan = new Array(hoten,diachi,sdt,email);

    sessionStorage.setItem("nguoiNhan",JSON.stringify(nguoiNhan));

    window.location.assign("donhang.html");
    
}
function showThongTinNguoiNhan(){
    var nguoiNhan = sessionStorage.getItem("nguoiNhan");
    var thongTin = JSON.parse(nguoiNhan);

    var tt = '<tr>'+
    '<td width="20%">HỌ TÊN</td>'+
    '<td>' + thongTin[0]+'</td>'+
    '</tr>'+
    '<tr>' +
        '<td>ĐỊA CHỈ</td>'+
        '<td>' + thongTin[1]+'</td>'+
    '</tr>' +
    '<tr>' +
        '<td>SỐ ĐIỆN THOẠI</td>' +
        '<td>' + thongTin[2]+'</td>'+
    '</tr>'+
    '<tr>'+
        '<td>EMAIL</td>'+
        '<td>' + thongTin[3]+'</td>'+
    '</tr>';
    document.getElementById("thongtinnhanhang").innerHTML = tt;
}