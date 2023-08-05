import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    processor: {},
    motherboard: {},
    ram: {},
    psu: {},
    storage: {},
    monitor: {},
};

const pcBuildSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        handlePcBuild: (state, action) => {
            const { category, ...productData } = action.payload;
            if (category === "CPU / Processor") {
                state.processor = productData;
            } else if (category === "Motherboard") {
                state.motherboard = productData;
            } else if (category === "RAM") {
                state.ram = productData;
            } else if (category === "PSU(Power Supply Unit)") {
                state.psu = productData;
            } else if (category === "Storage Device") {
                state.storage = productData;
            } else if (category === "Monitor") {
                state.monitor = productData;
            }
        },
    },
});

export const { handlePcBuild } = pcBuildSlice.actions;

export default pcBuildSlice.reducer;