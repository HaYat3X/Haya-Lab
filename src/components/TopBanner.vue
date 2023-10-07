<template>
    <div class="top-banner">
        <div class="container">
            <h1>{{ SiteTitle }}</h1>
            <p>{{ SiteExplanation }}</p>
            <img src="../assets/my_closet/test.png" alt="アイコン" class="banner-img">
        </div>
    </div>
</template>


<script>
export default {
    name: 'TopBanner',
    data() {
        return {
            SiteTitle: "Haya Lab!",
            SiteExplanation: "Hayate Engineering Laboratory",
        }
    },
}
</script>

<style scoped>
.top-banner {
    background-color: #4b709ae7;
    height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
}

.top-banner h1 {
    color: #ffffff;
    /* font-weight: bold; */
    font-size: 65px;
    font-family: 'Noto Sans JP', sans-serif;
}

.top-banner p {
    margin-top: 20px;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
    font-family: 'Noto Sans JP', sans-serif;

}

.top-banner .banner-img {
    width: 250px;
    height: auto;
    margin-top: 20px;
}
</style>