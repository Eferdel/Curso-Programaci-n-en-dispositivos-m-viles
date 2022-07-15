import {Dimensions} from "react-native";

const { width, height } = Dimensions.get("window")

const metrics = {
    screenWidth: width < height ? width : height,
    calc (size) {
        return metrics.screenWidth * (size / 365)
    }
}

export default metrics
