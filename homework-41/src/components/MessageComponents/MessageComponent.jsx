import { use } from 'react';

function MessageComponent({ messagePromise }) { 

    const userInfo = use(messagePromise);

    return(
        <div className="m-5 flex flex-col gap-3 w-md border-2 p-3">
            <p
                className=""
            >ID: {userInfo.id}</p>
            <p>User ID: {userInfo.userId}</p>
            <p>Title: {userInfo.title}</p>
            <p>Body: {userInfo.body}</p>
        </div>
    );
};

export default MessageComponent;