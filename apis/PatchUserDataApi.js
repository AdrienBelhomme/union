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

export const patchUserFnamePATCH = (Constants, { fname, id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ name: fname }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'PATCH',
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

export const usePatchUserFnamePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => patchUserFnamePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userName', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userName');
        queryClient.invalidateQueries('userNames');
      },
    }
  );
};

export const fetchClassesGET = (Constants, { id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?id=eq.${id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
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

export const useFetchClassesGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?id=eq.${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
    }
  );
};

export const FetchFetchClassesGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
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
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?id=eq.${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
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

  return children({ loading, data, error, refetchFetchClasses: refetch });
};

export const historyGET = (Constants, { id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/classes_done?profile_id=eq.${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
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

export const useHistoryGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/classes_done?profile_id=eq.${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
    }
  );
};

export const FetchHistoryGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
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
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/classes_done?profile_id=eq.${
      id ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
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

  return children({ loading, data, error, refetchHistory: refetch });
};

export const newClassDonePOST = (Constants, { classid, profileid }) =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/classes_done`, {
    body: JSON.stringify({ class_id: classid, profile_id: profileid }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['AUTHORIZATION_HEADER'],
      'Content-Type': 'application/json',
      Prefer: 'return=representation',
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

export const useNewClassDonePOST = ({ classid, profileid }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/classes_done`,
    {
      body: JSON.stringify({ class_id: classid, profile_id: profileid }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'POST',
    }
  );
};

export const FetchNewClassDonePOST = ({
  children,
  onData = () => {},
  refetchInterval,
  classid,
  profileid,
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
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/classes_done`,
    {
      body: JSON.stringify({ class_id: classid, profile_id: profileid }),
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
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

  return children({ loading, data, error, refetchNewClassDone: refetch });
};

export const statisticsPATCH = (
  Constants,
  { coachname, duration, id, level, titleClass }
) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        classesDoneTitle: titleClass,
        classesDoneCoach: coachname,
        classesDoneLevel: level,
        classesDoneDuration: duration,
      }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'PATCH',
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

export const totalTimePATCH = (Constants, { id, value }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ TotalTime: value }),
      headers: {
        Accept: 'application/json',
        Authorization: Constants['AUTHORIZATION_HEADER'],
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        apikey: Constants['Api_Key_Header_Supa'],
      },
      method: 'PATCH',
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
