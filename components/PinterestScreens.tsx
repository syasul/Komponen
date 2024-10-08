import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard } from 'react-native';

// Example image data with local images
const imageData = [
    { id: 1, uri: require('../assets/images/image.png'), title: 'Image 1' },
    { id: 2, uri: require('../assets/images/image.png'), title: 'Image 2' },
    { id: 3, uri: require('../assets/images/image.png'), title: 'Image 3' },
    { id: 4, uri: require('../assets/images/image.png'), title: 'Image 4' },
    { id: 5, uri: require('../assets/images/image.png'), title: 'Image 5' },
    { id: 6, uri: require('../assets/images/image.png'), title: 'Image 6' },
    { id: 7, uri: require('../assets/images/image.png'), title: 'Image 7' },
    { id: 8, uri: require('../assets/images/image.png'), title: 'Image 8' },
];

const PinterestScreen = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* Search Bar */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    value={searchText}
                    onChangeText={setSearchText}
                    autoCapitalize="none"
                />

                {/* Scrollable Grid Layout */}
                <ScrollView
                    style={styles.scrollContainer}
                    contentContainerStyle={styles.gridContainer} // Use contentContainerStyle for the grid
                    keyboardShouldPersistTaps="handled"
                >
                    {imageData
                        .filter((image) =>
                            image.title.toLowerCase().includes(searchText.toLowerCase())
                        ) // Filter based on search
                        .map((image) => (
                            <View key={image.id} style={styles.imageContainer}>
                                <Image source={image.uri} style={styles.image} />
                                <Text style={styles.imageTitle}>{image.title}</Text>
                            </View>
                        ))}
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 10,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        // Ensure ScrollView fills available space
        width: '100%',
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
    imageContainer: {
        width: Dimensions.get('window').width / 2 - 15, // Set image container width dynamically
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    imageTitle: {
        textAlign: 'center',
        marginTop: 5,
        fontSize: 16,
    },
});

export default PinterestScreen;
