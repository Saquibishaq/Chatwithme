import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    // Use the MultiChatLogic hook to manage chat state
    const chatProps = useMultiChatLogic(
        '64d2f32b-e6b6-4aff-bf06-644906c0c365',  
        props.user.username,
        props.user.secret
    );

    return (
        <div style={{ height: '100vh' }}>
            {}
            <MultiChatSocket {...chatProps} />
            {}
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
        </div>
    );
}

export default ChatsPage;
