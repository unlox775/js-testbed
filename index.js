#!/usr/local/bin/node



/////////////////////////////
///  From PODIUM-ANALYTICA-EVENTS

const MESSENGER_EVENTS = {
  conversation: {
    sendToExistingConversation: {
      action: 'send-to-existing-conversation',
      context: 'messenger',
      feature: 'conversation',
    },
    open: {
      action: 'open',
      context: 'messenger',
      feature: 'conversation',
    },
    close: {
      action: 'close',
      context: 'messenger',
      feature: 'conversation',
    },
  },
  conversationList: {
    assignToUser: {
      action: 'assign-to-user',
      context: 'messenger',
      feature: 'conversation-list',
    },
    setFilter: {
      action: 'set-filter',
      context: 'messenger',
      feature: 'conversation-list',
    },
    open: {
      action: 'open',
      context: 'messenger',
      feature: 'conversation-list',
    },
    close: {
      action: 'close',
      context: 'messenger',
      feature: 'conversation-list',
    },
  },
  messageComposer: {
    sendMessage: {
      action: 'send-message',
      context: 'messenger',
      feature: 'message-composer',
    },
    sendAndCloseMessage: {
      action: 'send-and-close-message',
      context: 'messenger',
      feature: 'message-composer',
    },
    consecutiveInviteError: {
      action: 'consecutive-invite-error',
      context: 'messenger',
      feature: 'message-composer',
    },
    sendAttachment: {
      action: 'send-attachment',
      context: 'messenger',
      feature: 'message-composer',
    },
    applyTemplate: {
      action: 'apply-template',
      context: 'messenger',
      feature: 'message-composer',
    },
    insertReviewLink: {
      action: 'insert-review-link',
      context: 'messenger',
      feature: 'message-composer',
    },
    applyAttachment: {
      action: 'apply-attachment',
      context: 'messenger',
      feature: 'message-composer',
    },
  },
  newConversation: {
    view: {
      action: 'view',
      context: 'messenger',
      feature: 'new-conversation',
    },
    selectExistingConversation: {
      action: 'select-existing-conversation',
      context: 'messenger',
      feature: 'new-conversation',
    },
  },
  sendInvite: {
    success: {
      action: 'success',
      context: 'messenger',
      feature: 'send-invite',
    },
    failure: {
      action: 'failure',
      context: 'messenger',
      feature: 'send-invite',
    },
  },
  messageComposerButton: {
    click: {
      action: 'click',
      context: 'messenger',
      feature: 'message-composer-button',
    },
  },
  notification: {
    error: {
      action: 'error',
      context: 'messenger',
      feature: 'notification',
    },
  },
  sendMessage: {
    success: {
      action: 'success',
      context: 'messenger',
      feature: 'send-message',
    },
    error: {
      action: 'error',
      context: 'messenger',
      feature: 'send-message',
    },
  },
};
const AUTHENTICATION_EVENTS = {
  login: {
    attempt: {
      action: 'attempt',
      context: 'authentication',
      feature: 'login',
    },
    success: {
      action: 'success',
      context: 'authentication',
      feature: 'login',
    },
    error: {
      action: 'error',
      context: 'authentication',
      feature: 'login',
    },
  },
  logout: {
    attempt: {
      action: 'attempt',
      context: 'authentication',
      feature: 'logout',
    },
    success: {
      action: 'success',
      context: 'authentication',
      feature: 'logout',
    },
  },
};
const MOBILE_EVENTS = {
  graphql: {
    error: {
      action: 'error',
      context: 'mobile',
      feature: 'graphql',
    },
  },
};
const SUPPORT_EVENTS = {
  intercom: {
    click: {
      action: 'click',
      context: 'support',
      feature: 'intercom',
    },
  },
  textPodiumSupport: {
    click: {
      action: 'click',
      context: 'support',
      feature: 'text-podium-support',
    },
  },
};
const TEAMCHAT_EVENTS = {
  pages: {
    chatView: {
      action: 'chat-view',
      context: 'teamchat',
      feature: 'pages',
    },
    createChatView: {
      action: 'create-chat-view',
      context: 'teamchat',
      feature: 'pages',
    },
    shareView: {
      action: 'share-view',
      context: 'teamchat',
      feature: 'pages',
    },
    selectUserView: {
      action: 'select-user-view',
      context: 'teamchat',
      feature: 'pages',
    },
  },
  createGroupChatModal: {
    error: {
      action: 'error',
      context: 'teamchat',
      feature: 'create-group-chat-modal',
    },
    success: {
      action: 'success',
      context: 'teamchat',
      feature: 'create-group-chat-modal',
    },
  },
  chat: {
    markAsRead: {
      action: 'mark-as-read',
      context: 'teamchat',
      feature: 'chat',
    },
    fetchError: {
      action: 'fetch-error',
      context: 'teamchat',
      feature: 'chat',
    },
  },
  createChat: {
    addMembersSelected: {
      action: 'add-members-selected',
      context: 'teamchat',
      feature: 'create-chat',
    },
    skipSelected: {
      action: 'skip-selected',
      context: 'teamchat',
      feature: 'create-chat',
    },
    nextSelected: {
      action: 'next-selected',
      context: 'teamchat',
      feature: 'create-chat',
    },
  },
  selectUser: {
    userSelected: {
      action: 'user-selected',
      context: 'teamchat',
      feature: 'select-user',
    },
    nextSelected: {
      action: 'next-selected',
      context: 'teamchat',
      feature: 'select-user',
    },
    searchSuccess: {
      action: 'search-success',
      context: 'teamchat',
      feature: 'select-user',
    },
    searchError: {
      action: 'search-error',
      context: 'teamchat',
      feature: 'select-user',
    },
  },
  share: {
    chatSelected: {
      action: 'chat-selected',
      context: 'teamchat',
      feature: 'share',
    },
    createChatSelected: {
      action: 'create-chat-selected',
      context: 'teamchat',
      feature: 'share',
    },
    createDirectMessageSuccess: {
      action: 'create-direct-message-success',
      context: 'teamchat',
      feature: 'share',
    },
    createDirectMessageError: {
      action: 'create-direct-message-error',
      context: 'teamchat',
      feature: 'share',
    },
    searchSuccess: {
      action: 'search-success',
      context: 'teamchat',
      feature: 'share',
    },
    searchError: {
      action: 'search-error',
      context: 'teamchat',
      feature: 'share',
    },
    shareSelectedSuccess: {
      action: 'share-selected-success',
      context: 'teamchat',
      feature: 'share',
    },
    shareSelectedError: {
      action: 'share-selected-error',
      context: 'teamchat',
      feature: 'share',
    },
  },
  chatComposer: {
    sendMessage: {
      action: 'send-message',
      context: 'teamchat',
      feature: 'chat-composer',
    },
    editMessage: {
      action: 'edit-message',
      context: 'teamchat',
      feature: 'chat-composer',
    },
  },
};


//////////////////////////////
///  From NAVI - analyticEventNames.js

const EVENTS = {
  uniposerOpenComposer: 'Messenger - Uniposer - Composer Opened',
  uniposerSendMessage: 'Messenger - Uniposer - New message sent',
  uniposerSendAndCloseMessage:
    'Messenger - Uniposer - New message sent and closed from Composer',
  uniposerSelectExistingConversation:
    'Messenger - Uniposer - Existing Conversation selected from Composer',
  uniposerSendToExistingConversation:
    'Messenger - Uniposer - Message sent to Existing Conversation selected from Composer',
};

//////////////////////////////
///  From NAVI - lib/types.js

const conversationFilters = Object.freeze({
  // Primary Filters (Groups)
  OPEN: 'open',
  CLOSED: 'closed',

  // Secondary Filters
  NO_REVIEW_INVITE: 'no-review-invite',
  NO_LINK_CLICKED: 'no-link-clicked',
  NO_REVIEW: 'no-review',
  LEFT_REVIEW: 'left-review',
  ALL: 'all',

  // Assigned filters
  UNASSIGNED: 'unassigned',
  OTHERS: 'others',
  ME: 'me',
});

//////////////////////////////
///  From NAVI - analytics.js

const { OPEN, CLOSED } = conversationFilters;

const trackToOrwellEventsMap = {
  [EVENTS.uniposerSendToExistingConversation]:
    MESSENGER_EVENTS.conversation.sendToExistingConversation,
  [EVENTS.uniposerSendAndCloseMessage]:
    MESSENGER_EVENTS.messageComposer.sendAndCloseMessage,
  [EVENTS.uniposerOpenComposer]: MESSENGER_EVENTS.newConversation.view,
  [EVENTS.uniposerSendMessage]: MESSENGER_EVENTS.messageComposer.sendMessage,
  [EVENTS.uniposerSelectExistingConversation]:
    MESSENGER_EVENTS.newConversation.selectExistingConversation,
  'Error Notification': MOBILE_EVENTS.graphql.error,
};

const trackEventToOrwellEventsMap = {
  ConversationListItem: {
    'Open Conversation': MESSENGER_EVENTS.conversationList.open,
    'Close Conversation': MESSENGER_EVENTS.conversationList.close,
  },
  Settings: {
    'Text Podium Support': SUPPORT_EVENTS.textPodiumSupport.click,
    'Help (Intercom)': SUPPORT_EVENTS.intercom.click,
    logout: AUTHENTICATION_EVENTS.logout.attempt,
  },
  SendInvite: {
    Success: MESSENGER_EVENTS.sendInvite.success,
    Failure: MESSENGER_EVENTS.sendInvite.failure,
  },
  PodiumButton: {
    'button press': MESSENGER_EVENTS.messageComposerButton.click,
  },
  ConversationsList: {
    [`set filter to ${OPEN}`]: MESSENGER_EVENTS.conversationList.setFilter,
    [`set filter to ${CLOSED}`]: MESSENGER_EVENTS.conversationList.setFilter,
    'press assign to': MESSENGER_EVENTS.conversationList.assignToUser,
  },
  Conversation: {
    'Open Conversation': MESSENGER_EVENTS.conversation.open,
    'Close Conversation': MESSENGER_EVENTS.conversation.close,
  },
  Composer: {
    'add attachment': MESSENGER_EVENTS.messageComposer.applyAttachment,
    'apply template': MESSENGER_EVENTS.messageComposer.applyTemplate,
    'send and close message':
      MESSENGER_EVENTS.messageComposer.sendAndCloseMessage,
    'send message': MESSENGER_EVENTS.messageComposer.sendMessage,
    'send attachment': MESSENGER_EVENTS.messageComposer.sendAttachment,
    'consecutive invite error':
      MESSENGER_EVENTS.messageComposer.consecutiveInviteError,
  },
  Login: {
    'login fail': AUTHENTICATION_EVENTS.login.error,
    'login success': AUTHENTICATION_EVENTS.login.success,
    'login attempt': AUTHENTICATION_EVENTS.login.attempt,
  },
};


//////////////////////////////
///  Manually-found mapped tables

const manualExtractedEventsMap = {
  'Chat': {
    'Fetch Error' : TEAMCHAT_EVENTS.chat.fetchError,
    'MarkAsRead': TEAMCHAT_EVENTS.chat.markAsRead,
  },
  'ChatComposer': {
    'EditMessage': TEAMCHAT_EVENTS.chatComposer.editMessage,
    'SendMessage': TEAMCHAT_EVENTS.chatComposer.sendMessage,
  },
  'CreateChat': {
    'AddMembersSelected': TEAMCHAT_EVENTS.createChat.addMembersSelected,
    'NextSelected': TEAMCHAT_EVENTS.createChat.nextSelected,
    'SkipSelected': TEAMCHAT_EVENTS.createChat.skipSelected,
  },
  'CreateGroupChatModal': {
    'Error': TEAMCHAT_EVENTS.createGroupChatModal.error,
    'Success': TEAMCHAT_EVENTS.createGroupChatModal.success,
  },
  'Pages': {
    'chatView': TEAMCHAT_EVENTS.pages.chatView,
    'SelectUserView': TEAMCHAT_EVENTS.pages.selectUserView,
    'ShareView': TEAMCHAT_EVENTS.pages.shareView,
  },
  'SelectUser': {
    'NextSelected': TEAMCHAT_EVENTS.selectUser.nextSelected,
    'SearchError': TEAMCHAT_EVENTS.selectUser.searchError,
    'SearchSuccess': TEAMCHAT_EVENTS.selectUser.searchSuccess,
    'UserSelected': TEAMCHAT_EVENTS.selectUser.userSelected,
  },
  'Share': {
    'ChatSelected': TEAMCHAT_EVENTS.share.chatSelected,
    'CreateChatSelected': TEAMCHAT_EVENTS.share.createChatSelected,
    'SearchError': TEAMCHAT_EVENTS.share.searchError,
    'SearchSuccess': TEAMCHAT_EVENTS.share.searchSuccess,
    // 'ShareModalShareChat': TEAMCHAT_EVENTS.share.shareModalShareChat,
    'ShareSelectedSuccess': TEAMCHAT_EVENTS.share.shareSelectedSuccess,
  }
};

///////////////////////////////
///  Main Runtime (I'd code-editor-collapse all the above structs)

mapTableNames(trackToOrwellEventsMap);
mapTableNames(trackEventToOrwellEventsMap);
mapTableNames(manualExtractedEventsMap);

function mapTableNames(obj) {
  console.log("\n\n\n\n");
  console.log(obj);
  for ( let key in obj ) {
    let redshift_table_name, orwell_table_name;
    // console.log([obj[key], typeof obj[key].context]);
    if ( typeof obj[key].context == 'undefined' ) {
      let subobj = obj[key];
      for ( let subkey in subobj ) {
        redshift_table_name = toTableName(`${key} - ${subkey}`);
        orwell_table_name = toTableName(`${subobj[subkey].context}_${subobj[subkey].feature}`);
    console.log(`      '${redshift_table_name}' => ['${orwell_table_name}','${subobj[subkey].action}'],`);
      }
    }
    else {
      redshift_table_name = toTableName(key);
      orwell_table_name = toTableName(`${obj[key].context}_${obj[key].feature}`);
      console.log(`      '${redshift_table_name}' => ['${orwell_table_name}','${obj[key].action}'],`);
    }
  }
}


function toTableName(str) {
  return str
      .replace(/([a-z])([A-Z]+)/g,'$1 $2')
      .toLowerCase()
      .replace(/\W+/g,'_')
      .replace(/(^_+|_+$)/,'')
}
