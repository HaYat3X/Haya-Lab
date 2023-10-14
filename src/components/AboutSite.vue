<template>
    <div class="about-site">
        <div class="container">
            <h2>{{ AboutSite }}</h2>
            <p>
                {{ explanation }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutSite',
    data() {
        return {
            AboutSite: "About this site",
            explanation: "ようこそHayateのポートフォリオサイトへ。このサイトには、これまで私が手がけたプロジェクトや身につけたスキルがまとめて掲載されています。お茶でも片手に、のんびりとサイトを巡ってみてくださいね。",
        }
    },
}
</script>

<style scoped>
.about-site {
    background-color: #e6e6e6;
    height: 100vh;
    display: flex;
    align-items: center;
}

.about-site h2 {
    font-size: 28px;
    margin-bottom: 50px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}

.about-site p {
    font-size: 16px;
}

/* タブレット/デスクトップ */
@media (min-width: 521px) {
    .about-site h2 {
        font-size: 50px;
    }

    .about-site p {
        width: 450px;
        margin: 0 auto;
    }
}
</style>