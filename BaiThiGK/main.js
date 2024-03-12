   var arr = [];

        function save() {
            var a = {
                id: document.getElementById('id').value,
                product: document.getElementById('product').value,
                quantity: document.getElementById('quantity').value,
                price: document.getElementById('price').value,
                image: document.getElementById('image').files[0]  // Lấy file hình ảnh từ input
            }
            console.log(a);
            arr.push(a);
        }

        function show() {
            var html = '';
            for (i in arr) {
                var n = parseInt(i) + 1;
                html += "<tr>";
                html += "<td>" + n + "</td>";
                html += "<td>" + arr[i].id + "</td>";
                html += "<td>" + arr[i].product + "</td>";
                html += "<td>" + arr[i].quantity + "</td>";
                html += "<td>" + arr[i].price + "</td>";
                // Hiển thị hình ảnh
                if (arr[i].image) {
                    html += "<td><img src='" + URL.createObjectURL(arr[i].image) + "' style='max-width:100px;max-height:100px;'></td>";
                } else {
                    html += "<td>No Image</td>";
                }
                html += "<td>" + parseFloat(arr[i].quantity) * parseFloat(arr[i].price) + "</td>";
                html += "<td><button onclick='update(" + i + ")'>Cập nhật</button> <button onclick='remove(" + i + ")'>Xóa</button></td>";
                html += "</tr>";
            }
            document.getElementById('tbl').innerHTML = html;
        }

        function reset() {
            document.getElementById('id').value = '';
            document.getElementById('product').value = '';
            document.getElementById('quantity').value = '';
            document.getElementById('price').value = '';
            document.getElementById('image').value = '';  // Xóa giá trị của input file
        }

        function update(index) {
            var a = arr[index];
            document.getElementById('id').value = a.id;
            document.getElementById('product').value = a.product;
            document.getElementById('quantity').value = a.quantity;
            document.getElementById('price').value = a.price;
            document.getElementById('image').value = '';  // Xóa giá trị của input file
            arr.splice(index, 1);
            show();
        }

        function remove(index) {
            arr.splice(index, 1);
            show();
        }