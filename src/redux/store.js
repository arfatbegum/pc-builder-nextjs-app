import { configureStore } from "@reduxjs/toolkit";
import pcBuildReducer from "@/redux/features/pcBuilderSlice";

export default configureStore({
    reducer: {
        pcBuild: pcBuildReducer,
    },
});