<script setup>
    import { computed, onMounted, ref, watch } from "@vue/runtime-core";
    import { useStore } from "vuex";

    const store = useStore();

    const isOpenOrder = ref(false);
    const isEditOrder = ref(false);

    const storePatientsArr = computed(() => store.getters[`patientsArr`]);

    let order = {
        id: 0,
        patientName: "",
        patientMessage: "",
    };

    const toggleEditOrder = () => {
        isEditOrder.value = !isEditOrder.value;
    };

    const toggleDialog = (id, name, message) => {
        isOpenOrder.value = !isOpenOrder.value;

        order.id= id;
        order.patientName = name;
        order.patientMessage = message;
    };

    watch(() => order.patientMessage, (newtext, oldtext) => { // v-model for patientMessage
        // store.dispatch("handPatientMessageInit", patientMessage, order[id]);
    });

    const init = () => {
        store.dispatch("handAllPatientsInit");
    };

    onMounted(() => {
        init();
    });
</script>

<template>
    <div class="main">
        <h1>
            <a href="https://www.jubo-health.com/">照護科技 | Jubo</a>
        </h1>

        <h2>病患醫囑清單</h2>

        <ul class="patient">
            <li class="patient_list" v-for="(item) in storePatientsArr" :key="item.Id"
                @click.prevent="toggleDialog(item.Id, item.Name, item.Message)"
            >
                <div class="patient_list_id">{{ item.Id }}</div>
                <div class="patient_list_name">{{ item.Name }}</div>
            </li>
        </ul>

        <div class="order" v-show="isOpenOrder">
            <div class="order_name">{{ order.patientName }}</div>
            <div class="order_massage" v-show="!isEditOrder">{{ order.patientMessage }}</div>
            <input type="text" v-show="isEditOrder" v-model="order.patientMessage">

            <div class="edit-order" title="編輯醫囑" @click="toggleEditOrder(order.id)"></div>
            <div class="close-order" title="關閉視窗" @click="toggleDialog"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .main {
        position: relative;
    }

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
        background-color: #00b4bc;
        border-radius: 5px;
        z-index: 10;

        .patient_list {  // li
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5%;
            color: #00b4bc;
            background-color: #cdf2f4;
            border-radius: 5px;

            & + li {
                margin-top: 10px;
            }

            &:hover {
                cursor: pointer;
                color: #ffffff;
                background-color:#69ced2;
            }
        }
    }

    .order {
        width: 50vw;
        height: 50vh;
        padding: 1%;
        color: #00b4bc;
        background-color: #b4edef;
        border-radius: 5px;
        z-index: 11;
        position: absolute;
        top: 25%;
        left: 25%;

        .order_name {
            margin-bottom: 20px;
            font-size: 25px;
        }

        .order_massage {
            font-size: 18px;
            line-height: 22px;
        }

        input[type="text"] {  // edit order-text
            width: 100%;
            padding: 2%;
            font-size: 18px;
            line-height: 26px;
            border-radius: 5px;
            border-style: none;
            outline: 0;
            appearance: none;
        }

        .edit-order {
            @include logo(32px, 32px, "~@/assets/images/editButton.png");
            position: absolute;
            top: 5%;
            right: 10%;

            &:hover {
                cursor: pointer;
            }
        }

        .close-order {
            @include logo(32px, 32px, "~@/assets/images/closeButton.png");
            position: absolute;
            top: 5%;
            right: 2%;

            &:hover {
                cursor: pointer;
            }
        }
    }
</style>