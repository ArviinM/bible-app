import {SafeAreaView} from "react-native-safe-area-context";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import {useFetchBibleChapter} from "@/hooks/useFetchBibleChapter";
import {VerseText} from "@/components/VerseText";

export default function HomeScreen() {

    const fetchBibleChapter = useFetchBibleChapter()

    if (fetchBibleChapter.isLoading) {
        return null;
    }

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#ffffff"}} edges={['left', 'right']}>
            <ScrollView scrollEventThrottle={5}>
                {fetchBibleChapter.data && (
                    <>
                        {/*  Chapter name with chapter number  */}
                        <View style={styles.container}>
                            <Text style={styles.chapter}>{fetchBibleChapter.data.name}</Text>
                        </View>
                        {/*  Chapter text or verses  */}
                        {fetchBibleChapter.data.verses.map((bible, index) => {
                            return (
                                <View key={`${bible.name}-${index}`} style={styles.containerVerse}>
                                    <VerseText>{bible.verse} {bible.text}</VerseText>
                                </View>
                            )
                        })}
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 8,

    },
    chapter: {
        fontFamily: 'SatoshiBlack',
        fontSize: 22,
        textAlign: 'center',
    },
    containerVerse: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})
