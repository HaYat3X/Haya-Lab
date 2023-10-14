<template>
    <div class="my-skill">
        <div class="container">
            <h2>{{ MySkill }}</h2>
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
    margin-bottom: 15px;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    text-align: center;
}
</style>