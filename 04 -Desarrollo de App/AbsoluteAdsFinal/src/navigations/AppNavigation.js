import { NavigationContainer } from "@react-navigation/native"
import AuthNavigation from "./AuthNavigation";
import AdsNavigation from "./AdsNavigation";

const AppNavigation = ({ userToken }) => {
    return (
        <NavigationContainer>
            { userToken == null ? <AuthNavigation /> : <AdsNavigation />}
        </NavigationContainer>
    )
}

export default AppNavigation
