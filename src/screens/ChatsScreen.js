import { FlatList, StyleSheet } from 'react-native';
import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';

const ChatsScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={styles.bgWhite}
    />
  );
};

const styles = StyleSheet.create({
  bgWhite: { backgroundColor: 'white' },
});

export default ChatsScreen;
