<script setup>

</script>

<template>
    <h1>
        <a href="https://www.jubo-health.com/">照護科技 Jubo</a>
    </h1>

    <h2>病患醫囑清單</h2>

    <ul class="patient">
        <li class="patient_list">
            <div class="patient_list_id">1</div>
            <div class="patient_list_name">大雄</div>
        </li>

        <li class="patient_list">
            <div class="patient_list_id">2</div>
            <div class="patient_list_name">靜香</div>
        </li>

        <li class="patient_list">
            <div class="patient_list_id">3</div>
            <div class="patient_list_name">小夫</div>
        </li>

        <li class="patient_list">
            <div class="patient_list_id">4</div>
            <div class="patient_list_name">胖虎</div>
        </li>

        <li class="patient_list">
            <div class="patient_list_id">5</div>
            <div class="patient_list_name">多拉a夢</div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    h1 {
        a {
            width: 349px;
            height: 71px;
            background: url("~@/assets/images/logo.png") no-repeat;
            border-radius: 0px 10px 10px 0;
            overflow: hidden;
            text-indent: 101%;
            white-space: nowrap;
        }
    }

    h2 {
        margin: 45px auto;
        font-size: 50px;
        text-align: center;
        color: white;
    }

    .patient {  // ul
        width: 50vw;
        height: auto;
        margin: 0 auto;
        padding: 2%;
        background-color: rgb(11, 241, 214);
        border-radius: 5px;

        .patient_list {  // li
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
            background-color: white;
            border-radius: 5px;

            & + li {
                margin-top: 10px;
            }

            &:hover {
                cursor: pointer;
                background-color:rgb(173, 248, 239);
                border: 1px solid grey;
            }
        }
    }
</style>