<template>
    <div class="my-skill">
        <div class="container">
            <h2>{{ MySkill }}</h2>

            <p>
                私がこれまで学習したスキルをグラフ形式でまとめました。かなり幅広く技術を学習してきたので、フロントエンドからバックエンドまで幅広く対応できます。しかし、まだ実務を経験したことがないので、入社後は実務経験を積み、着実に自身のスキルを高めていこうと考えています。
            </p>
            <br>
            <p>
                ※グラフの見方としては「1: 軽く使用」、「2: 小規模なアプリやサービスを開発」、「3: 大規模なアプリやサービスを開発」、「4: 複雑な機能や処理を実装できる」、「4:
                実務レベルで問題なく使用可能」という感じのレベル感を想定しています。
            </p>

            <div class="skills-item row g-5">
                <div class="skills-content">
                    <img src="../assets/skill/1.png" alt="" width="100%" style="border-radius: 5px;">
                </div>

                <div class="skills-content">
                    <img src="../assets/skill/2.png" alt="" width="100%" style="border-radius: 5px;">
                </div>

                <div class="skills-content">
                    <img src="../assets/skill/3.png" alt="" width="100%" style="border-radius: 5px;">
                </div>

                <div class="skills-content">
                    <img src="../assets/skill/4.png" alt="" width="100%" style="border-radius: 5px;">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'MyWorks',
    data() {
        return {
            MySkill: "My Skill",
        }
    },
}
</script>

<style scoped>
.my-skill {
    padding: 40px 0;
    background-color: #f6f6f6;
}

.my-skill h2 {
    font-size: 28px;
    margin-bottom: 50px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}


/* タブレット */
@media (min-width: 768px) and (max-width: 991px) {
    .my-skill {
        padding: 60px 0;
        background-color: #f6f6f6;
    }

    .my-skill h2 {
        font-size: 50px;
    }

    .skills-content img {
        border-radius: 50px;
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
    .my-skill {
        padding: 80px 0;
        background-color: #f6f6f6;
    }

    .my-skill h2 {
        font-size: 50px;
    }

    .my-skill p {
        width: 930px;
        margin: 0 auto;
    }


    .skills-item {
        display: flex;
        width: 930px;
        margin: 0 auto;
    }

    .skills-content {
        width: 50%;
    }
}
</style>