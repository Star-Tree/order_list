import { createStore } from 'vuex'
import { dataPatients } from "@/api/index.js";

export default createStore({
    state: {
        patientsArr: [],
    },

    actions: {
        handAllPatientsInit({commit}) {
            commit("allPatientsInit", dataPatients);
        },

        handPatientMessageInit({commit}, {patientMessage, id}) {
            commit("patientMessageInit", patientMessage, id);
        },
    },

    mutations: {
        allPatientsInit(state, dataPatients) {
            state.patientsArr = dataPatients;
        },

        patientMessageInit(state, {patientMessage, id}) {
            state.patientsArr[id].patientMessage = patientMessage;
        },
    },

    getters: {
        patientsArr: (state) => state.patientsArr,
    }
})
