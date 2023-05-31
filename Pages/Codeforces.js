import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native"

const Codeforces = () => {
  const [contests, setContests] = useState([])

  useEffect(() => {
    fetch('https://kontests.net/api/v1/codeforces')
  .then(response => response.json())
  .then(data => {
    const parsedContests = data.map(contest => {
      const startDateTime = new Date(contest.start_time);
      const endDateTime = new Date(contest.end_time);

      const startHours = String(startDateTime.getHours()).padStart(2, '0');
      const startMinutes = String(startDateTime.getMinutes()).padStart(2, '0');
      const startSeconds = String(startDateTime.getSeconds()).padStart(2, '0');
      const startTime = `${startHours}:${startMinutes}:${startSeconds}`;

      const startYear = startDateTime.getFullYear();
      const startMonth = String(startDateTime.getMonth() + 1).padStart(2, '0');
      const startDay = String(startDateTime.getDate()).padStart(2, '0');
      const startDate = `${startYear}-${startMonth}-${startDay}`;

      const endHours = String(endDateTime.getHours()).padStart(2, '0');
      const endMinutes = String(endDateTime.getMinutes()).padStart(2, '0');
      const endSeconds = String(endDateTime.getSeconds()).padStart(2, '0');
      const endTime = `${endHours}:${endMinutes}:${endSeconds}`;

      const endYear = endDateTime.getFullYear();
      const endMonth = String(endDateTime.getMonth() + 1).padStart(2, '0');
      const endDay = String(endDateTime.getDate()).padStart(2, '0');
      const endDate = `${endYear}-${endMonth}-${endDay}`;

      return {
        ...contest,
        start_time: startTime,
        duration: `${startDate}`,
      };
    });

    setContests(parsedContests);
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
                <Text style={styles.subText}>{contest.duration}</Text>
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