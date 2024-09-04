const myHeader = {
  template: `
    <header v-if="showAd" class="ad-banner text-center ">Welcom to Chimo! 
      <button v-on:click="closeAd" class="btn btn-outline-light btn-sm ms-2 ps-">X</button>
    </header>
    <header class="navbarA  pt-3 pb-2 border-bottom border-2">
       <a href="index.html"><img src="../images/LOGO.png" alt="Logo" height="60px" class="ps-5"></a>
       <div class="navLeft d-flex ">
        <button class="btn btn-lg ms-3 text-nowrap">分類▼</button>
        <form id="searchbar" class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="搜尋課程" aria-label="Search">
        </form>
       </div> 
       <template v-if="!isLoggedIn">
          <a class="headerLogin btn btn-md fw-bolder me-3" href="login.html">登入 | 註冊</a>
       </template> 

       <template v-if="isLoggedIn"> 
       <div class="dropdown">
          <button
            class="dropdown-toggle border-0 btn"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
             <img src="images/profilePic.png" alt="cart" class="img-fluid ">
          </button>
          <ul class="dropdown-menu mt-2 me-4">
            <li class="dropdown-item p-3 text-center">會員資料</li>
            <li class="dropdown-item p-3 text-center">儲值點數</li>
            <li class="dropdown-item p-3 text-center">我的課程</li>
            <li class="dropdown-item p-3 text-center">我的收藏</li>
            <li class="dropdown-item p-3 text-center">購買紀錄</li>
            <li class="dropdown-item p-3 text-center">登出</li>
         </ul>
       </div>
       </template>
    </header>`,
  setup() {
    const showAd = ref(true);
    const closeAd = () => {
      showAd.value = false;
    };

    const isLoggedIn = ref(false);

    // 模擬登入
    function login() {
      isLoggedIn.value = true;
    }

    // 模擬登出
    function logout() {
      isLoggedIn.value = false;
    }

    return {
      showAd,
      closeAd,
      isLoggedIn,
      login,
      logout,
    };
  },
};
