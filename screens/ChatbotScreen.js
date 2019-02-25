import React from 'react'
import {GiftedChat} from 'react-native-gifted-chat'
import IconBot from '../assets/images/bot.png'
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {View , Platform, Animated} from 'react-native';
const link = "http://192.168.43.246:3000"
export default class ChatbotScreen extends React.Component {
  state = {
    messages: [],
  }

  prepareMessagesContainerHeight(value) {
    if (this.props.isAnimated === true) {
      return new Animated.Value(value);
    }
    return value;
  }

  onKeyboardWillShow(e) {
    this.setIsTypingDisabled(true);
    this.setKeyboardHeight(e.endCoordinates ? e.endCoordinates.height : e.end.height);
    this.setBottomOffset(this.props.bottomOffset);
    const newMessagesContainerHeight = this.getMessagesContainerHeightWithKeyboard();
    if (this.props.isAnimated === true) {
      Animated.timing(this.state.messagesContainerHeight, {
        toValue: newMessagesContainerHeight,
        duration: 210,
      }).start();
    } else {
      this.setState({
        messagesContainerHeight: newMessagesContainerHeight,
      });
    }
  }

  onKeyboardWillHide() {
    this.setIsTypingDisabled(true);
    this.setKeyboardHeight(0);
    this.setBottomOffset(0);
    const newMessagesContainerHeight = this.getBasicMessagesContainerHeight();
    if (this.props.isAnimated === true) {
      Animated.timing(this.state.messagesContainerHeight, {
        toValue: newMessagesContainerHeight,
        duration: 210,
      }).start();
    } else {
      this.setState({
        messagesContainerHeight: newMessagesContainerHeight,
      });
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello! Ask me and I will answer you.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Bot',
            avatar: IconBot,
          },
        },
      ],
    })
  }

  onSend(messages = []) {

    fetch(link,{
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      method:"post",
      body:JSON.stringify({ msg:messages[0].text})
    })
    .then(res=>res.json())
    .then(res=>{
      console.log()
      if(res.success)
      {
        let resp = res.data.output.text[0]
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
        messages[0].text = 
        console.log(res.data)
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, messages),
        }))
      }
      else{
        alert("Message not sent")
      }
    })
    .catch(err=>{
      alert("Error")
      console.log(err)
    })
  }

  render() {
    return (
      
      <View style={{flex: 1}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={newMessages => {this.onSend(newMessages);} }
          user={{
              _id: 1,
          }}
          renderAvatarOnTop={true}
          renderUsernameOnMessage={true}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer /> : null }
    </View>
     
      
    )
  }
}