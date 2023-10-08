<template>
    <div class="my-works">
        <div class="container">
            <h2>Works</h2>
            <p>
                私が腕によりをかけて制作した、制作物をご覧ください。
            </p>

            <div class="works-item row">
                <div class="works-content">
                    <router-link to="/my_closet">
                        <img src="../assets/my_closet/visual.png" alt="MY CLOSET" class="works-img">
                    </router-link>

                    <p class="text-center mt-2">
                        <small>MY CLOSET</small>
                    </p>
                </div>

                <div class="works-content">
                    <router-link to="/my_closet">
                        <img src="../assets/my_closet/visual.png" alt="MY CLOSET" class="works-img">
                    </router-link>

                    <p class="text-center mt-1">
                        <small>MY CLOSET</small>
                    </p>
                </div>

                <div class="works-content">
                    <router-link to="/my_closet">
                        <img src="../assets/my_closet/visual.png" alt="MY CLOSET" class="works-img">
                    </router-link>

                    <p class="text-center mt-1">
                        <small>MY CLOSET</small>
                    </p>
                </div>

                <div class="works-content">
                    <router-link to="/my_closet">
                        <img src="../assets/my_closet/visual.png" alt="MY CLOSET" class="works-img">
                    </router-link>

                    <p class="text-center mt-1">
                        <small>MY CLOSET</small>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MyWorks',
}
</script>

<style scoped>
.my-works {
    padding: 40px 0;
    background-color: #e6e6e6;
}

.my-works h2 {
    font-size: 28px;
    margin-bottom: 15px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}

.my-works p {
    font-size: 16px;
    text-align: center;
}

.works-item {
    margin-top: 30px;
}

.works-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
}

/* タブレット */
@media (min-width: 768px) and (max-width: 991px) {
    .my-works {
        padding: 60px 0;
        background-color: #e6e6e6;
    }

    .my-works h2 {
        font-size: 50px;
    }


    .works-item {
        display: flex;
    }

    .works-content {
        width: 50%;
    }
}

/* デスクトップ */
@media (min-width: 992px) {
    .my-works {
        padding: 80px 0;
        background-color: #e6e6e6;
    }

    .my-works h2 {
        font-size: 50px;
    }

    .works-item {
        display: flex;
        width: 930px;
        margin: 0 auto;
    }

    .works-content {
        width: 33.3%;
    }
}
</style>