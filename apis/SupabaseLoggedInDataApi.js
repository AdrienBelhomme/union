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

export const getLoggedInUsersGET = Constants =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/user`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['access_token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetLoggedInUsersGET = () => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/user`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['access_token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
  });
};

export const FetchGetLoggedInUsersGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const refetch = () => {};
  const {
    isLoading: loading,
    data,
    error,
  } = useFetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/auth/v1/user`, {
    depends: [isFocused],
    headers: {
      Accept: 'application/json',
      Authorization: Constants['access_token'],
      'Content-Type': 'application/json',
      apikey: Constants['Api_Key_Header_Supa'],
    },
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

  return children({ loading, data, error, refetchGetLoggedInUsers: refetch });
};
