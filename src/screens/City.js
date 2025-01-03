import React from "react";
import { 
    SafeAreaView, 
    Text, 
    ImageBackground,
    StyleSheet, 
    StatusBar ,
    View
} from "react-native";
import { Feather } from '@expo/vector-icons'
import IconText from "../components/IconText";
import moment from "moment";

const City = ({ weatherData }) => {
    const { 
        container, 
        cityName, 
        cityText, 
        countryName,
        countryText, 
        populationWrapper, 
        populationText, 
        riseSetText, 
        riseSetWrapper,
        rowLayout,
        imageLayout 
    } = styles

    const { name, country, population, sunrise, sunset } = weatherData
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../assets/city-background.jpg')} 
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, countryText]}>{country}</Text>
            <View style={[populationWrapper, rowLayout]}>
                <IconText 
                    iconName={'user'} 
                    iconColor={'red'} 
                    bodyText={`Population: ${population}`}
                    bodyTextStyles={populationText}
                />
            </View>
            <View style={[riseSetWrapper, rowLayout]}>
                <IconText 
                    iconName={'sunrise'} 
                    iconColor={'white'} 
                    bodyText={moment(sunrise).format('h:mm:ss a')}
                    bodyTextStyles={riseSetText}
                />
                <IconText 
                    iconName={'sunset'} 
                    iconColor={'white'} 
                    bodyText={moment(sunset).format('h:mm:ss a')}
                    bodyTextStyles={riseSetText}
                />
            </View>
            </ImageBackground>
            {/* <Text>City</Text> */}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    countryText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red'
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white'
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default City