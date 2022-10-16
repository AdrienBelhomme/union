import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const loginPOST = (Constants, { loginEmail, loginPassword }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'POST',
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLoginPOST = ({ loginEmail, loginPassword }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'POST',
    }
  );
};

export const FetchLoginPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  loginEmail,
  loginPassword,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/token?grant_type=password`,
    {
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'POST',
    }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogin: refetch });
};

export const logoutPOST = Constants =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/logout`, {
    body: JSON.stringify({ key: 'value' }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['access_token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useLogoutPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => logoutPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('logout', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('logout');
        queryClient.invalidateQueries('logouts');
      },
    }
  );
};

export const FetchLogoutPOST = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useLogoutPOST({}, { refetchInterval });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchLogout: refetch });
};

export const signupMethodPOST = (Constants, { signUpEmail, signUpPass }) =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/signup`, {
    body: JSON.stringify({ email: signUpEmail, password: signUpPass }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useSignupMethodPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => signupMethodPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('newuser', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('newuser');
        queryClient.invalidateQueries('newusers');
      },
    }
  );
};

export const FetchSignupMethodPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  signUpEmail,
  signUpPass,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useSignupMethodPOST({ signUpEmail, signUpPass }, { refetchInterval });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchSignupMethod: refetch });
};

export const passrecoverPUT = (Constants, { email, password }) =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/user`, {
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      Accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjYxMzM1ODgzLCJzdWIiOiJkODZkNzM3MC02NWIxLTQ0YTktYTlkMC0xOGJmYjZlNTBkODIiLCJlbWFpbCI6ImJlbGhvbW1lYWRyaWVuQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.p_BgGtDIxblJd1Fv2bhtsM7qElDwzCUsq8YG3l0WEf0',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
    method: 'PUT',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const resetPasswordPOST = (Constants, { email }) =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/recover`, {
    body: JSON.stringify({ email: email }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useResetPasswordPOST = ({ email }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/recover`, {
    body: JSON.stringify({ email: email }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
    method: 'POST',
  });
};

export const FetchResetPasswordPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  email,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/recover`, {
    body: JSON.stringify({ email: email }),
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
    method: 'POST',
  });

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchResetPassword: refetch });
};
