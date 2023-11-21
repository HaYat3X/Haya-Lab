<template>
    <div class="end-banner">
        <div class="container">
            <h2>{{ Message }}</h2>
        </div>
    </div>
</template>


<script>
export default {
    name: 'EndBanner',
    data() {
        return {
            Message: "Thank you for watching!"
        }
    },
}
</script>

<style scoped>
.end-banner {
    background-color: #6792c4;
    height: 50vh;
    display: flex;
    align-items: center;
    text-align: center;
}

.end-banner h2 {
    color: #ffffff;
    font-size: 28px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
}

/* タブレット/デスクトップ */
@media (min-width: 521px) {
    .end-banner h2 {
        font-size: 55px;
        font-weight: normal;
    }
}
</style>