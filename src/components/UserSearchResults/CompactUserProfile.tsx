import {getFlagUrl} from "@/assets/imageAssetPaths.ts";
import {CompactUser} from "@/api/searchApi.ts";

function CompactUserProfile({ user }: { user: CompactUser }) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-[hsl(333,10%,20%)] hover:bg-[hsl(333,10%,25%)]">
            <img src={user.avatarUrl} alt={`${user.username}'s avatar`} className="w-12 h-12 rounded-xl" />
            <img src={getFlagUrl(user.countryCode)} alt={`${user.username}'s country flag`} className="w-6 h-4" />
            <span className="font-semibold">{user.username}</span>
        </div>
    );
}

export default CompactUserProfile;