import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ISessionInfo,
  handleIncomingRedirect,
  login as libraryLogin,
  getDefaultSession,
  logout as libraryLogout,
} from "@inrupt/solid-client-authn-browser";

import { createGlobalHook } from "../util/createGlobalHook";

interface AuthGlobalHookReturn {
  runInitialAuthCheck: () => Promise<void>;
  login: (issuer: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (issuer: string) => Promise<void>;
  session: ISessionInfo;
  ranInitialAuthCheck: boolean;
}

function useAuthGlobalHookFunc(): AuthGlobalHookReturn {
  const [session, setSession] = useState<ISessionInfo>(
    getDefaultSession().info
  );
  const [ranInitialAuthCheck, setRanInitialAuthCheck] = useState(false);

  const runInitialAuthCheck = useCallback(async () => {
    await handleIncomingRedirect({
      restorePreviousSession: true,
    });
    setSession({ ...getDefaultSession().info });
    setRanInitialAuthCheck(true);
  }, []);

  const login = useCallback(async (issuer: string) => {
    await libraryLogin({
      oidcIssuer: issuer,
      redirectUrl: window.location.href,
      clientName: "OKH Solid",
    });
    setSession({ ...getDefaultSession().info });
  }, []);

  const logout = useCallback(async () => {
    await libraryLogout();
    setSession({ ...getDefaultSession().info });
  }, []);

  const signUp = useCallback(async (issuer: string) => {
    /* Do nothing for now */
    console.log(`Signup Pressed with issuer ${issuer}`);
  }, []);

  useEffect(() => {
    runInitialAuthCheck();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useMemo(
    () => ({
      runInitialAuthCheck,
      login,
      logout,
      signUp,
      session,
      ranInitialAuthCheck,
    }),
    [login, logout, ranInitialAuthCheck, runInitialAuthCheck, session, signUp]
  );
}

const authGlobalHook = createGlobalHook(useAuthGlobalHookFunc);

export const AuthContext = authGlobalHook.Context;
export const AuthProvider = authGlobalHook.Provider;
export const useAuth = authGlobalHook.useGlobal;