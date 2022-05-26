import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: '#00000040',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginHorizontal: 0,
    },
    restaurantCard : {
        width: '100%',
        marginVertical: 16,
        backgroundColor: '#606060',
        color: '#acacac',
        borderRadius: 8,
    },
    restaurantsName: {
      marginHorizontal: 12,
      color: '#ffffff',
      fontSize: 28,
      marginVertical: 15
    },
    cuisine: {
        marginHorizontal: 12,
        fontSize: 16,
        fontWeight: '600',
        color: '#acacac',
    },
    address: {
        marginHorizontal: 12,
        fontSize: 14,
        fontWeight: '300',
        color: '#131313',
        marginBottom: 8,
    }
});
  