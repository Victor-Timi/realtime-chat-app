import AddFriendButton from "@/components/AddFriendButton";
import { FunctionComponent } from "react";

interface pageProps {
    
}
 
const page: FunctionComponent<pageProps> = () => {
    return ( 
    <main>
        <h1 className="font-bold text-5xl mb-8">Add a Friend</h1>
        <AddFriendButton />
    </main> );
}
 
export default page;