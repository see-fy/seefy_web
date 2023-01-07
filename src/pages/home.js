import React from "react";
import Header from "../components/Header";
import Body from "../components/Body";
import { useSelector } from "react-redux";
import { selectUser } from "../slices/userSlice";

function Home() {
  const user = useSelector(selectUser);

  return (
    <div>
      {/* navbar */}
      <Header isLogged={user ? "true" : "false"} />
      {/* banner */}
      {/* movies in a row  */}
      <Body />
    </div>
  );
}

export default Home;

// function match(user1, user2) {
//   let compatibility = 0;

//   // Compare ages and assign points based on proximity
//   const ageDifference = Math.abs(user1.age - user2.age);
//   if (ageDifference <= 5) {
//     compatibility += 10;
//   } else if (ageDifference <= 10) {
//     compatibility += 5;
//   }

//   // Compare genders and assign points based on preference
//   if (user1.preferredGender === user2.gender) {
//     compatibility += 10;
//   }

//   // Compare interests and assign points for shared interests
//   for (const interest of user1.interests) {
//     if (user2.interests.includes(interest)) {
//       compatibility += 5;
//     }
//   }

//   // Compare relationship goals and assign points for shared goals
//   if (user1.relationshipGoal === user2.relationshipGoal) {
//     compatibility += 10;
//   }

//   // Compare personality traits and assign points for shared traits
//   for (const trait of user1.personalityTraits) {
//     if (user2.personalityTraits.includes(trait)) {
//       compatibility += 5;
//     }
//   }

//   // Compare physical attributes and assign points for shared attributes
//   if (user1.bodyType === user2.bodyType) {
//     compatibility += 5;
//   }
//   if (user1.height === user2.height) {
//     compatibility += 5;
//   }
//   if (user1.ethnicity === user2.ethnicity) {
//     compatibility += 5;
//   }

//   // Compare education and career and assign points for shared attributes
//   if (user1.education === user2.education) {
//     compatibility += 5;
//   }
//   if (user1.career === user2.career) {
//     compatibility += 5;
//   }
//   if (user1.income === user2.income) {
//     compatibility += 5;
//   }

//   // Compare communication style and assign points based on proximity
//   const responseTimeDifference = Math.abs(user1.averageResponseTime - user2.averageResponseTime);
//   if (responseTimeDifference <= 5) {
//     compatibility += 10;
//   } else if (responseTimeDifference <= 10) {
//     compatibility += 5;
//   }

//   // Compare past relationships and assign points based on shared experiences
//   if (user1.averageRelationshipLength === user2.averageRelationshipLength) {
//     compatibility += 5;
//   }
//   if (user1.commonBreakupReasons.some(reason => user2.commonBreakupReasons.includes(reason))) {
//     compatibility += 5;
//   }

//   // Use feedback from other users to adjust compatibility score
//   compatibility += user1.positiveFeedbackFromOthers * 2 - user1.negativeFeedbackFromOthers;
//   compatibility += user2.positiveFeedbackFromOthers * 2 - user2.negativeFeedbackFromOthers;

//   // Use machine learning to predict compatibility based on past user data
//   const prediction = predictCompatibility(user1, user2);
//   compatibility += prediction;

//   return compatibility;
// }

// function createGroupChat(userIds, options) {
//   // Generate a unique identifier for the group chat
//   const chatId = generateChatId();

//   // Create the group chat object
//   const chat = {
//     id: chatId,
//     type: 'group',
//     members: userIds,
//     messages: [],
//     media: options.media || [],
//     admins: options.admins || []
//   };

//   // Add the chat to the list of active chats
//   chats.push(chat);

//   // Notify all members that the chat has been created
//   for (const userId of userIds) {
//     sendNotification(userId, `You have been added to a new group chat: ${chatId}`);
//   }

//   return chatId;
// }

// function sendMessage(chatId, senderId, text, options) {
//   // Find the chat with the matching id
//   const chat = chats.find(chat => chat.id === chatId);

//   // If the chat was found and the sender is a member of the chat, add the message to the chat
//   if (chat && chat.members.includes(senderId)) {
//     const message = {
//       sender: senderId,
//       text: text,
//       media: options.media || [],
//       timestamp: options.timestamp || Date.now()
//     };
//     chat.messages.push(message);

//     // Notify all members of the chat about the new message
//     for (const memberId of chat.members) {
//       if (memberId !== senderId) {
//         sendNotification(memberId, `New message in group chat ${chatId} from ${senderId}: ${text}`);
//       }
//     }
//   }
// }

// function editMessage(chatId, messageId, text, senderId) {
//   // Find the chat with the matching id
//   const chat = chats.find(chat => chat.id === chatId);

//   // If the chat was found, find the message with the matching id
//   if (chat) {
//     const messageIndex = chat.messages.findIndex(message => message.id === messageId);

//     // If the message was found, check if the sender has permission to edit it
//     if (messageIndex !== -1) {
//       const message = chat.messages[messageIndex];
//       if (message.sender === senderId || chat.admins.includes(senderId

// function joinGroupChat(chatId, userId, options) {
//   // Find the chat with the matching id
//   const chat = chats.find(chat => chat.id === chatId);

//   // If the chat was found and the user is not already a member, add the user to the chat
//   if (chat && !chat.members.includes(userId)) {
//     // Check if the user has the required permissions to join the chat
//     if (options.inviteLink || chat.admins.includes(options.inviterId)) {
//       chat.members.push(userId);

//       // Notify the user that they have joined the chat
//       sendNotification(userId, `You have joined group chat ${chatId}`);

//       // Notify all other members of the chat that a new member has joined
//       for (const memberId of chat.members) {
//         if (memberId !== userId) {
//           sendNotification(memberId, `${userId} has joined group chat ${chatId}`);
//         }
//       }
//     } else {
//       throw new Error(`User ${userId} does not have permission to join group chat ${chatId}`);
//     }
//   }
// }

// function leaveGroupChat(chatId, userId, options) {
//   // Find the chat with the matching id
//   const chat = chats.find(chat => chat.id === chatId);

//   // If the chat was found and the user is a member, remove the user from the chat
//   if (chat && chat.members.includes(userId)) {
//     // Check if the user has the required permissions to leave the chat
//     if (options.force || chat.admins.includes(userId) || chat.members.length === 1) {
//       chat.members = chat.members.filter(id => id !== userId);

//       // Notify the user that they have left the chat
//       sendNotification(userId, `You have left group chat ${chatId}`);

//       // Notify all other members of the chat that a member has left
//       for (const memberId of chat.members) {
//         sendNotification(memberId, `${userId} has left group chat ${chatId}`);
//       }
//     } else {
//       throw new Error(`User ${userId} does not have permission to leave group chat ${chatId}`);
//     }
//   }
// }

/**
 * 
 * 
 * import React, { useState, useEffect } from 'react';

function GroupVideoCall(props) {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStreams, setRemoteStreams] = useState([]);

  useEffect(() => {
    // Get the user's media stream and set it as the local stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        setLocalStream(stream);
      })
      .catch(error => {
        console.error('Error getting user media:', error);
      });
  }, []);

  useEffect(() => {
    // Connect to the signaling server
    const socket = io.connect(props.signalingServerUrl);

    // When a new member joins the call, add their stream to the list of remote streams
    socket.on('new member', stream => {
      setRemoteStreams(prevStreams => [...prevStreams, stream]);
    });

    // When a member leaves the call, remove their stream from the list of remote streams
    socket.on('member left', streamId => {
      setRemoteStreams(prevStreams => prevStreams.filter(stream => stream.id !== streamId));
    });

    // When the call is ended, disconnect from the signaling server
    return () => {
      socket.disconnect();
    };
  }, [props.signalingServerUrl]);

  return (
    <div className="group-video-call">
      {localStream && <Video stream={localStream} />}
      {remoteStreams.map(stream => (
        <Video key={stream.id} stream={stream} />
      ))}
    </div>
  );
}

function Video(props) {
  return (
    <video className="video" srcObject={props.stream} autoPlay />
  );
}

export default GroupVideoCall;

 */
