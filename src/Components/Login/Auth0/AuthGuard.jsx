import { withAuthenticationRequired } from "@auth0/auth0-react";
import { LoadingIndicator } from "../../../Components/PageElements/LoadingIndicator/LoadingIndicator";

export const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <LoadingIndicator />
      </div>
    ),
  });

  return <Component />;
};