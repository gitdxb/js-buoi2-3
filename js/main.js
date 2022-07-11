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


// B2: Tính điểm trung bình
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

// B3: Đổi tiền
function doiTien() {
    var tyGiaUSD = 23500; // 1 USD = 23500 VND
    var soTienUSD = Number(document.getElementById("soTienUSD").value);
    if (soTienUSD > 0) {
        var soTienVND = soTienUSD * tyGiaUSD;
        document.getElementById("soTienVND").innerHTML =  Intl.NumberFormat('vn-VN').format(soTienVND);
    }
}
document.getElementById("btnDoiTien").onclick = doiTien;

// B4: Tính chu vi, diện tích HCN
var chuVi = 0;
var dienTich = 0;

function tinhHCN() {
    var chieuDai = Number(document.getElementById("chieuDai").value);
    var chieuRong = Number(document.getElementById("chieuRong").value);
    if (chieuDai > 0 && chieuRong > 0) {
        chuVi = (chieuDai + chieuRong) * 2;
        dienTich = chieuDai * chieuRong;
    }
    document.getElementById("kqChuVi").innerHTML = "Chu vi: " + chuVi + " cm2";
    document.getElementById("kqDienTich").innerHTML = " | Diện tích: " + dienTich + " cm2";
}
document.getElementById("btnHCN").onclick = tinhHCN;

// B5: Tính tổng 2 ký số
function tongSo(){
    var number = Number(document.getElementById("nhapSo").value);
    var soHangChuc = 0;
    var soHangDonVi = 0;
    var tong = 0;
    
    soHangChuc = Math.floor(number / 10);
    soHangDonVi = number % 10;
    tong = soHangChuc + soHangDonVi;

    document.getElementById("kq2ChuSo").innerHTML = tong;
}
    
    document.getElementById("btnTinhTong").onclick = tongSo;