<template>
    <div class="top-banner">
        <div class="container">
            <h1>{{ SiteTitle }}</h1>
            <p>{{ SiteExplanation }}</p>
            <img src="../assets/banner.png" alt="アイコン" class="banner-img">
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
    margin-top: 55px;
    background-color: #6792c4;
    height: calc(100vh - 55px);
    display: flex;
    align-items: center;
    text-align: center;
    width: 100%;
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