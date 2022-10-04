import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ISessionInfo,
  handleIncomingRedirect,
  login as libraryLogin,
  getDefaultSession,
  logout as libraryLogout,
  fetch
} from "@inrupt/solid-client-authn-browser";

import { createGlobalHook } from "../util/createGlobalHook";

export const POST_LOGIN_REDIRECT = 'postLoginRedirect';

interface AuthGlobalHookReturn {
  runInitialAuthCheck: () => Promise<void>;
  login: (issuer: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (issuer: string) => Promise<void>;
  session: ISessionInfo;
  ranInitialAuthCheck: boolean;
  fetch: (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>
}

function useAuthGlobalHookFunc(): AuthGlobalHookReturn {
  const [session, setSession] = useState<ISessionInfo>(
    getDefaultSession().info
  );
  const [ranInitialAuthCheck, setRanInitialAuthCheck] = useState(false);

  const runInitialAuthCheck = useCallback(async () => {
    const postLoginRedirect = window.localStorage.getItem(POST_LOGIN_REDIRECT);
    if (!postLoginRedirect) {
      window.localStorage.setItem(POST_LOGIN_REDIRECT, window.location.href);
    }
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

  return useMemo(() => ({
      runInitialAuthCheck,
      login,
      logout,
      signUp,
      session,
      ranInitialAuthCheck,
      fetch
    }),
    [login, logout, ranInitialAuthCheck, runInitialAuthCheck, session, signUp]
  );
}

const authGlobalHook = createGlobalHook(useAuthGlobalHookFunc);

export const AuthContext = authGlobalHook.Context;
export const AuthProvider = authGlobalHook.Provider;
export const useAuth = authGlobalHook.useGlobal;