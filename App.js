import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  useColorScheme
} from 'react-native';
import getStyles from './styles';

const IMAGE_ONE = 'https://i.pravatar.cc/300?img=11';
const IMAGE_TWO = 'https://i.pravatar.cc/300?img=12';

export default function App() {
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState(IMAGE_ONE);
  const colorScheme = useColorScheme();

  const isDarkMode = colorScheme === 'dark';
  const styles = getStyles(isDarkMode);

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert('Erro', 'Por favor, insira um nome antes de salvar.');
      return;
    }
    Alert.alert('Perfil Salvo', `O nome "${name}" foi salvo com sucesso!`);
  };

  const toggleImage = () => {
    setProfileImage(profileImage === IMAGE_ONE ? IMAGE_TWO : IMAGE_ONE);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.card}>
            <Text style={styles.title}>Perfil Rápido</Text>

            <View style={styles.imageContainer}>
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
                resizeMode="cover"
              />
              <TouchableOpacity style={styles.toggleButton} onPress={toggleImage}>
                <Text style={styles.toggleButtonText}>Trocar Foto</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Seu Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: João Silva"
                placeholderTextColor={isDarkMode ? '#6B7280' : '#999'}
                value={name}
                onChangeText={setName}
              />
            </View>

            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
              <Text style={styles.saveButtonText}>Salvar Perfil</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
