<template>
    <div class="my-works">
        <div class="container">
            <h2>Works</h2>
            <p>
                私が腕によりをかけて制作した、愛すべき制作物をご覧ください。
            </p>

            <div class="works-item">
                <div class="works-content">
                    <router-link to="/my_closet">
                        <img src="../assets/my_closet/visual.png" alt="MY CLOSET" class="works-img">
                    </router-link>

                    <p class="text-center mt-2">
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
</style>