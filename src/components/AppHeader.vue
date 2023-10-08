<template>
    <div>
        <nav class="navbar fixed-top mobile-header">
            <div class="container-fluid">
                <button class="navbar-toggler-btn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list"
                        viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            stroke="#4b709a" />
                    </svg>
                </button>

                <div class="mx-auto">
                    <img src="../assets/logo.png" alt="" style="width: 40px; margin-right: 37px;">
                </div>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">メニュー</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link" href="#">トップ</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#">このサイトについて</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#projects">制作物</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#projects">お問い合わせ</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="#team">ブログ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light fixed-top pc-header">
            <div class="container" style="width: 950px;">
                <a class="navbar-brand" href="#">
                    <img src="../assets/logo.png" alt="" width="35">
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"></button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">トップ</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">このサイトについて</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#projects">制作物</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#projects">お問い合わせ</a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#team">ブログ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>


<script>
export default {
    name: 'AppHeader',
}
</script>

<style scoped>
.pc-header {
    background-color: #ffffff;
    height: 55px;
}

.mobile-header {
    background-color: #ffffff;
    height: 55px;
}

.mobile-header .navbar-toggler-btn {
    border: none;
    background-color: #ffffff;
}

/* モバイル */
@media (max-width: 767px) {
    .pc-header {
        display: none;
    }

    .mobile-header .offcanvas {
        width: 70%;
    }
}

/* タブレット */
@media (min-width: 768px) and (max-width: 991px) {
    .pc-header {
        display: none;
    }

    .mobile-header .offcanvas {
        width: 40%;
    }
}

/* デスクトップ */
@media (min-width: 992px) {
    .mobile-header {
        display: none;
    }


    a::after {
        position: absolute;
        left: 0;
        content: '';
        width: 100%;
        height: 2px;
        background: #000000;
        bottom: 2px;
        transform: scale(0, 1);
        transform-origin: center top;
        transition: transform 0.5s;
    }

    a:hover::after {
        transform: scale(1, 1);
    }
}
</style>