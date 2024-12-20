let products = [
        {
            pic: "https://www.bhphotovideo.com/images/images2500x2500/Microsoft_MHC_00001_Wireless_Mobile_Mouse_6000_646288.jpg",
            id: 1,
            name: "Wireless Mouse",
            price: 25.99,
            category: "Electronics",
            rating: 4.5,
            stock: 120
        },
        {
            pic: "https://www.bhphotovideo.com/images/images2500x2500/beats_by_dr_dre_mx422ll_a_studio3_wireless_bluetooth_headphones_1407140.jpg",
            id: 2,
            name: "Bluetooth Headphones",
            price: 59.99,
            category: "Electronics",
            rating: 4.7,
            stock: 85
        },
        {
            pic: "https://i.etsystatic.com/31480998/r/il/c1d9cc/3266381652/il_fullxfull.3266381652_qlqq.jpg",
            id: 3,
            name: "Water Bottle",
            price: 15.99,
            category: "Home & Kitchen",
            rating: 4.3,
            stock: 200
        },
        {
            pic: "https://i5.walmartimages.com/asr/dc41d65c-2cf5-4cd9-9bf7-9fa57165e2e9_1.e8d4a7603c24fda3494e335b5c9c311f.jpeg",
            id: 4,
            name: "Notebook",
            price: 5.49,
            category: "Stationery",
            rating: 4.1,
            stock: 320
        },
        {
            pic: "https://th.bing.com/th/id/OIP.Fe4qZfZ1KwwDirwGsumOeQHaG1?rs=1&pid=ImgDetMain",
            id: 5,
            name: "Running Shoes",
            price: 45.00,
            category: "Footwear",
            rating: 4.8,
            stock: 50
        },
        {
            pic: "https://i5.walmartimages.com/asr/c16f30a6-d661-46d5-9fba-4d60d0cf1a5c.86fb2b28f5849ef6c62f000070ab11e2.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
            id: 6,
            name: "LED Desk Lamp",
            price: 30.00,
            category: "Home & Office",
            rating: 4.4,
            stock: 100
        },
        {
            pic: "https://www.igadgethelp.com/wp-content/uploads/2020/05/Ekrist-25000-mAh-Portable-Charger.jpg",
            id: 7,
            name: "Portable Charger",
            price: 19.99,
            category: "Electronics",
            rating: 4.2,
            stock: 150
        },
        {
            pic: "https://i5.walmartimages.com/asr/7194b717-6574-4f1b-9bc4-b78abda9fc5b_1.13371ceb48ae6d7c084827890f75235e.jpeg",
            id: 8,
            name: "Yoga Mat",
            price: 25.00,
            category: "Fitness",
            rating: 4.6,
            stock: 70
        },
        {
            pic: "https://i5.walmartimages.com/asr/acf1c66e-1d62-46a6-a4c8-8904f73acd29_1.3d30e5d28fe269a34fbc28e3d512a0d8.jpeg",
            id: 9,
            name: "Desk Organizer",
            price: 12.99,
            category: "Home & Office",
            rating: 4.3,
            stock: 130
        },
        {
            pic: "https://www.bhphotovideo.com/images/images2500x2500/samsonite_126364_1041_pro_standard_backpack_black_1509342.jpg",
            id: 10,
            name: "Backpack",
            price: 40.00,
            category: "Travel",
            rating: 4.5,
            stock: 95
        },
        {
            pic: "https://www.techpowerup.com/img/16-10-12/52c.jpg",
            id: 11,
            name: "Gaming Keyboard",
            price: 89.99,
            category: "Electronics",
            rating: 4.8,
            stock: 30
        },
        {
            pic: "https://i5.walmartimages.com/asr/4951cfe5-b949-435c-a4aa-8aa918d0752b.5b459bbce6b3752b5875a697023e03c8.jpeg",
            id: 12,
            name: "Smart Watch",
            price: 199.99,
            category: "Electronics",
            rating: 4.6,
            stock: 60
        },
        {
            pic: "https://m.media-amazon.com/images/I/81ME6PJQebL._SL1500_.jpg",
            id: 13,
            name: "Coffee Mug",
            price: 10.50,
            category: "Home & Kitchen",
            rating: 4.2,
            stock: 240
        },
        {
            pic: "https://i5.walmartimages.com/asr/718669ef-1dba-43a1-ad46-6cb14f1ad0a7.d101586991acf6fef90a194b302eea2f.jpeg",
            id: 14,
            name: "Laptop Stand",
            price: 35.00,
            category: "Electronics",
            rating: 4.4,
            stock: 100
        },
        {
            pic: "https://i5.walmartimages.com/asr/2dbc8e00-2573-41c9-aa2b-f8df72ca3735_1.b8c6b07359a9f7e194e78cefc7f523d5.jpeg",
            id: 15,
            name: "Sunglasses",
            price: 25.00,
            category: "Fashion",
            rating: 4.1,
            stock: 60
        },
        {
            pic: "https://i5.walmartimages.com/asr/cdaaab64-5ea7-4d8f-969f-cff666244723.ff62693361b001ebbaf41145d23c0f13.jpeg",
            id: 16,
            name: "Wireless Speaker",
            price: 49.99,
            category: "Electronics",
            rating: 4.7,
            stock: 80
        },
        {
            pic: "https://globalstoresupply.com/wp-content/uploads/2021/06/71f2HFDrjAL.jpg",
            id: 17,
            name: "Kitchen Knife Set",
            price: 60.00,
            category: "Home & Kitchen",
            rating: 4.3,
            stock: 55
        },
        {
            pic: "https://th.bing.com/th/id/OIP.Rf8WCzIgMhFC-ddB4Qj1BwHaHa?rs=1&pid=ImgDetMain",
            id: 18,
            name: "Hiking Boots",
            price: 95.99,
            category: "Footwear",
            rating: 4.8,
            stock: 45
        },
        {
            pic: "https://i5.walmartimages.com/asr/3831cb77-a080-44bf-bea6-48788eab2da5.253fb6964dcbb29028abe82b80c306b6.jpeg",
            id: 19,
            name: "Electric Toothbrush",
            price: 75.99,
            category: "Personal Care",
            rating: 4.7,
            stock: 120
        },
        {
            pic: "https://www.bhphotovideo.com/images/images2000x2000/encased_ps928bk_phantom_wallet_case_for_1599176.jpg",
            id: 20,
            name: "Smartphone Case",
            price: 15.99,
            category: "Accessories",
            rating: 4.4,
            stock: 300
        }
    ];


    let search = document.getElementById("search")

  search.addEventListener("keyup", function(e){
    let val = e.target.value.toUpperCase();
    
    let searchData = products.filter((ele) => !ele.name.toUpperCase().indexOf(val) || !ele.category.toUpperCase().indexOf(val))
 console.log(searchData)

    showData(searchData);

  })

  function del(id) {
    products = products.filter(ele => ele.id != id);
    showData(products);
}

 console.log(products)

 document.querySelector("#form").addEventListener("submit", function (e) {
    e.preventDefault();

    let pic1 = document.querySelector("#img").value;
    let name1 = document.querySelector("#name").value;
    let price1 = document.querySelector("#price").value;
    let category1 = document.querySelector("#category").value;
    let rating1 = document.querySelector("#rating").value;
    let stock1 = document.querySelector("#stock").value;

     if(!pic1){
        document.querySelector(".not").style.display = "block";
        document.querySelector(".not").innerHTML = `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2 alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter the image Url!</p>`;

        setTimeout(() => {
            document.querySelector(".not").style.display = "none";
            document.querySelector(".not").innerHTML = "";
        }, 2000);
        return;
    }
     else if(!name1){
        document.querySelector(".not").style.display = "block";
        document.querySelector(".not").innerHTML += `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter name!</p>
        `
        setTimeout(() => {
            document.querySelector(".not").style.display = "none";
            document.querySelector(".not").innerHTML = "";
        }, 2000);
        return;
     }
     else if(!price1){
        document.querySelector(".not").style.display = "block";
        document.querySelector(".not").innerHTML += `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter price!</p>
        `
        setTimeout(() => {
            document.querySelector(".not").style.display = "none";
            document.querySelector(".not").innerHTML = "";
        }, 2000);
        return;
     }
     else if(!category1){
        document.querySelector(".not").style.display = "block";
        document.querySelector(".not").innerHTML += `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter category!</p>
        `
        setTimeout(() => {
            document.querySelector(".not").style.display = "none";
            document.querySelector(".not").innerHTML = "";
        }, 2000);
        return;
     }
     else if(!rating1){
        document.querySelector(".not").style.display = "block";
        document.querySelector(".not").innerHTML += `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter rating!</p>
        `
        setTimeout(() => {
            document.querySelector(".not").style.display = "none";
            document.querySelector(".not").innerHTML = "";
        }, 2000);
        return;
     }
     else if(!stock1){
        document.querySelector(".not").style.display = "block";
        document.querySelector(".not").innerHTML += `
            <p class="position-fixed bg-danger m-2 text-white p-2 rounded-2  alert-danger top-0 end-0" style="transform:translate(-20px, 20px)">Please Enter stock!</p>
        `
        setTimeout(() => {
            document.querySelector(".not").style.display = "none";
            document.querySelector(".not").innerHTML = "";
        }, 2000);
        return;
     }
    else{

        let id = document.querySelector("#id").value;

     if(id){
       let updatedData =  products.map((ele) => {
            if(ele.id == id){
                ele.pic = document.querySelector("#img").value,
                ele.name = document.querySelector("#name").value,
                ele.price = document.querySelector("#price").value,
                ele.category = document.querySelector("#category").value,
                ele.rating = document.querySelector("#rating").value,
                ele.stock = document.querySelector("#stock").value
            }
            return ele;
         })
         showData(updatedData)
     }
     else {

        let pic1 = document.querySelector("#img").value
        let name1 = document.querySelector("#name").value
        let price1 = document.querySelector("#price").value
        let category1 = document.querySelector("#category").value
        let rating1 = document.querySelector("#rating").value
        let stock1 = document.querySelector("#stock").value

            let num = Math.random();
            let obj = {
                id : Math.round(num*1000),
                pic :pic1 ,
                name :name1 ,
                price : price1,
                category : category1,
                rating : rating1,
                stock : stock1
            }

            console.log(obj)
            products.push(obj);
            showData(products)
  
     }

   document.querySelector("#img").value = ""
   document.querySelector("#name").value = ""
   document.querySelector("#price").value = ""
   document.querySelector("#category").value = ""
   document.querySelector("#rating").value = ""
   document.querySelector("#stock").value = ""

    }

})

function edit(id){

//   let updateEle = data.find((ele) => ele.id == id);

  products.map((ele) => {

        if(ele.id == id){
            document.querySelector("#img").value = ele.pic
            document.querySelector("#name").value = ele.name
            document.querySelector("#price").value = ele.price
            document.querySelector("#category").value = ele.category
            document.querySelector("#rating").value = ele.rating
            document.querySelector("#stock").value = ele.stock
            document.querySelector("#id").value = ele.id  
        }
    })
  
    // showData(update)
}

function showMore(id){
    let eachData = products.filter((ele) => ele.id == id)
    console.log(eachData)

    showEachData(eachData)
}

 let offcanvas_body = document.querySelector(".offcanvas-body")

function showEachData(eaData){

    offcanvas_body.innerHTML = "";

    eaData.map((ele)=>{
        offcanvas_body.innerHTML =`
            <div class="card" style="width: 18rem;">
  <img src="${ele.pic}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${ele.name}</h5>
    <p class="card-number">${ele.price}</p>
    <p class="card-text">${ele.category}</p>
    <p class="card-number">${ele.rating}</p>
    <p class="card-number">${ele.stock}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    })

}

function showData(delData){

    tbody.innerHTML = "";
    delData.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.price}</td>
            <td>${ele.category}</td>
            <td>${ele.rating}</td>
            <td>${ele.stock}</td>
             <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
             <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button></td>
             <td>
            <button  onclick="showMore(${ele.id})" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More</button>
            </td>
            </tr>
    `
})

// console.log(data)

}

let tbody = document.querySelector("#tbody");

data.map((ele) => {
    
    tbody.innerHTML += `
        <tr >
            <td><img width="50px" class="img-fluid rounded-circle" src="${ele.pic}" /></td>
            <td>${ele.name}</td>
            <td>${ele.email}</td>
            <td>${ele.age}</td>
            <td><button class="btn btn-warning" onclick="edit(${ele.id})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="del(${ele.id})">Delete</button>
            </td>
                <td>
            <button  onclick="showMore(${ele.id})" class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">More</button>
            </td>
        </tr>
    `
})