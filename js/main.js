// Bài 1: Tính Lương
function tinhLuong(){
    var ngayCong = document.getElementById("ngayCong").value;
    var soNgayLam = document.getElementById("soNgayLam").value;
    
    
    var thanhTien = 0;
    thanhTien = Number(ngayCong) * Number(soNgayLam);
    
    
    document.getElementById("kqLuong").innerHTML = thanhTien;
    if(soNgayLam <= 0){
        document.getElementById("kqLuong").innerHTML = "số ngày lương không hợp lệ";
    }
    }
    document.getElementById("btnLuong").onclick = tinhLuong;


// Tính điểm trung bình
function tinhTrungBinh(){
    var number1 = document.getElementById("so1").value;
    var number2 = document.getElementById("so2").value;
    var number3 = document.getElementById("so3").value;
    var number4 = document.getElementById("so4").value;
    var number5 = document.getElementById("so5").value;
    var dtb = 0;
    
    
    dtb = (Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5))/5;
    
    document.getElementById("soTrungBinh").innerHTML = dtb;
    }
    document.getElementById("btnDTB").onclick = tinhTrungBinh;