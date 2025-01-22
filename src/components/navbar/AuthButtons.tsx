import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TranslatedContent } from "@/components/content/TranslatedContent";
import { User } from "@supabase/supabase-js";

interface AuthButtonsProps {
  user: User | null;
  onSignOut: () => void;
}

const AuthButtons = ({ user, onSignOut }: AuthButtonsProps) => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      {user ? (
        <>
          <Link to="/profile">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              <TranslatedContent translations={[]} contentKey="nav.profile" defaultValue="Profile" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={onSignOut}
          >
            <TranslatedContent translations={[]} contentKey="nav.signOut" defaultValue="Sign Out" />
          </Button>
        </>
      ) : (
        <Link to="/login">
          <Button variant="gradient" className="text-white">
            <TranslatedContent translations={[]} contentKey="nav.signIn" defaultValue="Sign In" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;