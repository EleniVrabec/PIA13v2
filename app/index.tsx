import { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0 ))
  const reset = () => {
    setCount(0);
  }
  
  return (
    <SafeAreaView style={styles.safeArea}>
    <View
      style={styles.container}
    >
      <View style={styles.numberContainer}>
           <Text style={styles.number}>{count}</Text>
      </View>
      

      <View style={styles.btncontainer}>

      <TouchableOpacity 
      onPress={increment}
      style={styles.button}
      >
           <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <TouchableOpacity
      onPress={decrement}
      style={styles.button}
      >
           <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      </View>
      {count > 0 && (
          <View style={styles.resetContainer}>
            <TouchableOpacity onPress={reset} style={styles.resetButton}>
              <Text style={styles.buttonText}>RESET</Text>
            </TouchableOpacity>
          </View>
        )}
      
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
  },
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  numberContainer: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  },
  number:{
    fontWeight: 'bold',
    fontSize:80
  },
  btncontainer:{  
    flex:0,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "flex-end",
    width: '80%',
  },
  button:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 20,
    margin: 5,
    borderRadius: 5,
    width:100
  },
  resetContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  resetButton: {
    backgroundColor: "red",
    padding: 20,
    margin: 5,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  }

  }
)


