import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native"

const Codeforces = () => {
  const [contests, setContests] = useState([])

  useEffect(() => {
    fetch('https://kontests.net/api/v1/code_chef')
    .then(response => response.json())
    .then(data => {
        setContests(data)
    })
    .catch(error => {
        console.log(error);
    });
    }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Upcoming Contests</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {contests.map(contest => (
            <View style={styles.contestBox}>
                <Text style={styles.subText}>{contest.name}</Text>
                <Text style={styles.subText}>{contest.start_time}</Text>
            </View>
        ))}
       </ScrollView>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    contestBox: {
        flex: 1,
        backgroundColor: '#FFC512',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
        alignItems: 'center',
        width: 260,
        margin: 4,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 16,
    }, 
    subText: {
        fontSize: 18,
    }
});

export default Codeforces