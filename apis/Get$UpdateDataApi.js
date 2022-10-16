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

export const allVideosGET = Constants =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?select=*`, {
    headers: {
      Accept: 'application/json',
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

export const useAllVideosGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['allcourses', args], () => allVideosGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchAllVideosGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useAllVideosGET(
    {},
    { refetchInterval }
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

  return children({ loading, data, error, refetchAllVideos: refetch });
};

export const getDetenteClassesGET = (Constants, { detente }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?detente=eq.${
      detente ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
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

export const useGetDetenteClassesGET = ({ detente }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?detente=eq.${
      detente ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
        apikey: Constants['Api_Key_Header_Supa'],
      },
    }
  );
};

export const FetchGetDetenteClassesGET = ({
  children,
  onData = () => {},
  refetchInterval,
  detente,
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
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?detente=eq.${
      detente ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
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

  return children({ loading, data, error, refetchGetDetenteClasses: refetch });
};

export const updateFormDataPATCH = (
  Constants,
  {
    dureeQuaranteCinq,
    dureeQuinze,
    dureeSoixante,
    dureeTrente,
    frequenceCinq,
    frequenceDeux,
    frequenceQuatre,
    frequenceSept,
    frequenceSix,
    frequenceTrois,
    frequenceUn,
    id,
  }
) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        frequenceUn: frequenceUn,
        frequenceDeux: frequenceDeux,
        frequenceTrois: frequenceTrois,
        frequenceQuatre: frequenceQuatre,
        frequenceCinq: frequenceCinq,
        frequenceSix: frequenceSix,
        frequenceSept: frequenceSept,
        dureeQuinze: dureeQuinze,
        dureeTrente: dureeTrente,
        dureeQuaranteCinq: dureeQuaranteCinq,
        dureeSoixante: dureeSoixante,
      }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateFormDataPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateFormDataPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('forminfo', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('forminfo');
        queryClient.invalidateQueries('forminfos');
      },
    }
  );
};

export const updateProfilUserPATCH = (
  Constants,
  {
    bandeResistance,
    blockYoga,
    cardio,
    chaise,
    cheville,
    coaching,
    corde,
    cou,
    danse,
    dos,
    epaule,
    genou,
    getAge,
    getDuree,
    getEmail,
    getFrequence,
    getGenre,
    getName,
    getNiveau,
    getObjectif,
    getPoids,
    haltere,
    id,
    kettlebell,
    pilates,
    poignet,
    toning,
    yoga,
  }
) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        name: getName,
        age: getAge,
        email: getEmail,
        genre: getGenre,
        poids: getPoids,
        niveau: getNiveau,
        objectif: getObjectif,
        frequence: getFrequence,
        duree: getDuree,
        yoga: yoga,
        danse: danse,
        pilates: pilates,
        cardio: cardio,
        toning: toning,
        coaching: coaching,
        cou: cou,
        epaule: epaule,
        dos: dos,
        poignet: poignet,
        genou: genou,
        cheville: cheville,
        kettlebell: kettlebell,
        haltere: haltere,
        chaise: chaise,
        bandeResistance: bandeResistance,
        corde: corde,
        blockYoga: blockYoga,
      }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateProfilUserPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateProfilUserPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('userdata', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('userdatum');
        queryClient.invalidateQueries('userdata');
      },
    }
  );
};

export const user$sDataGET = (Constants, { id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
        id: Constants['id'],
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

export const useUser$sDataGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['userdatum', args], () => user$sDataGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['userdata']),
  });
};

export const FetchUser$sDataGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useUser$sDataGET(
    { id },
    { refetchInterval }
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

  return children({ loading, data, error, refetchUser$sData: refetch });
};

export const arrayClassesGET = (Constants, { id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?id=eq.${id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
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

export const useArrayClassesGET = ({ id }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?id=eq.${id ?? ''}`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
    }
  );
};

export const FetchArrayClassesGET = ({
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

  return children({ loading, data, error, refetchArrayClasses: refetch });
};

export const categoryDescriptionGetGET = (Constants, { category }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/category?category=eq.${
      category ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
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

export const useCategoryDescriptionGetGET = ({ category }) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();

  return useFetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/category?category=eq.${
      category ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        apikey: Constants['Api_Key_Header_Supa'],
      },
    }
  );
};

export const FetchCategoryDescriptionGetGET = ({
  children,
  onData = () => {},
  refetchInterval,
  category,
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
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/category?category=eq.${
      category ?? ''
    }`,
    {
      depends: [isFocused],
      headers: {
        Accept: 'application/json',
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

  return children({
    loading,
    data,
    error,
    refetchCategoryDescriptionGet: refetch,
  });
};

export const coachNotationPOST = (Constants, { coachnote, namecoach }) =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/notationcoach`, {
    body: JSON.stringify({ coachname: namecoach, note: coachnote }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['access_token'],
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

export const useCoachNotationPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => coachNotationPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('coachname', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('coachname');
        queryClient.invalidateQueries('coachnames');
      },
    }
  );
};

export const FetchCoachNotationPOST = ({
  children,
  onData = () => {},
  refetchInterval,
  coachnote,
  namecoach,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useCoachNotationPOST({ coachnote, namecoach }, { refetchInterval });

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

  return children({ loading, data, error, refetchCoachNotation: refetch });
};

export const coachsGET = (Constants, { name }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/coachs?name=eq.${
      name ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
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

export const useCoachsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['coach', args], () => coachsGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['coaches']),
  });
};

export const FetchCoachsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  name,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useCoachsGET(
    { name },
    { refetchInterval }
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

  return children({ loading, data, error, refetchCoachs: refetch });
};

export const getPopularClassGET = (Constants, { popular }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?populaire=eq.${
      popular ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
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

export const useGetPopularClassGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['popularclasses', args],
    () => getPopularClassGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetPopularClassGET = ({
  children,
  onData = () => {},
  refetchInterval,
  popular,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetPopularClassGET(
    { popular },
    { refetchInterval }
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

  return children({ loading, data, error, refetchGetPopularClass: refetch });
};

export const notationCoursePOST = (
  Constants,
  { coursename, monNiveau, note, tropDifficile, tropFacile }
) =>
  fetch(`https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/notationcourse`, {
    body: JSON.stringify({
      note: note,
      course: coursename,
      tropFacile: tropFacile,
      monNiveau: monNiveau,
      tropDifficile: tropDifficile,
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['access_token'],
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

export const useNotationCoursePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => notationCoursePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('coursenote', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('coursenote');
        queryClient.invalidateQueries('coursenotes');
      },
    }
  );
};

export const FetchNotationCoursePOST = ({
  children,
  onData = () => {},
  refetchInterval,
  coursename,
  monNiveau,
  note,
  tropDifficile,
  tropFacile,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    loading,
    data,
    error,
    mutate: refetch,
  } = useNotationCoursePOST(
    { coursename, monNiveau, note, tropDifficile, tropFacile },
    { refetchInterval }
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

  return children({ loading, data, error, refetchNotationCourse: refetch });
};

export const oneCourseGET = (Constants, { id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?id=eq.${id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
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

export const useOneCourseGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['course', args], () => oneCourseGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['courses']),
  });
};

export const FetchOneCourseGET = ({
  children,
  onData = () => {},
  refetchInterval,
  id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useOneCourseGET(
    { id },
    { refetchInterval }
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

  return children({ loading, data, error, refetchOneCourse: refetch });
};

export const updateAgePATCH = (Constants, { age, id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ age: age }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateAgePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateAgePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('age', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('age');
        queryClient.invalidateQueries('ages');
      },
    }
  );
};

export const updateEquipementPATCH = (
  Constants,
  { bandeResistance, blockYoga, chaise, corde, haltere, id, kettlebell }
) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        kettlebell: kettlebell,
        haltere: haltere,
        chaise: chaise,
        corde: corde,
        blockYoga: blockYoga,
        bandeResistance: bandeResistance,
      }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateEquipementPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateEquipementPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('equipement', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('equipement');
        queryClient.invalidateQueries('equipements');
      },
    }
  );
};

export const updateFnamePATCH = (Constants, { id, name }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ name: name }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateFnamePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateFnamePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('fname', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('fname');
        queryClient.invalidateQueries('fnames');
      },
    }
  );
};

export const updateGenePATCH = (
  Constants,
  { cheville, cou, dos, epaule, genou, id, poignet }
) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        cheville: cheville,
        cou: cou,
        poignet: poignet,
        epaule: epaule,
        dos: dos,
        genou: genou,
      }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateGenePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateGenePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('genes', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('gene');
        queryClient.invalidateQueries('genes');
      },
    }
  );
};

export const updateGenrePATCH = (Constants, { genre, id }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ genre: genre }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateGenrePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateGenrePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('genre', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('genre');
        queryClient.invalidateQueries('genres');
      },
    }
  );
};

export const updateNiveauPATCH = (Constants, { id, niveau }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ niveau: niveau }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateNiveauPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateNiveauPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('niveau', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('niveau');
        queryClient.invalidateQueries('niveaus');
      },
    }
  );
};

export const updateObjectifPATCH = (Constants, { id, objectif }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ objectif: objectif }),
      headers: {
        Accept: 'application/json',
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

export const useUpdateObjectifPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updateObjectifPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('objectif', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('objectif');
        queryClient.invalidateQueries('objectifs');
      },
    }
  );
};

export const updatePoidsPATCH = (Constants, { id, poids }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ poids: poids }),
      headers: {
        Accept: 'application/json',
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

export const useUpdatePoidsPATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updatePoidsPATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('poids', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('poid');
        queryClient.invalidateQueries('poids');
      },
    }
  );
};

export const updatePreferencePATCH = (
  Constants,
  { cardio, coaching, danse, id, pilates, toning, yoga }
) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({
        danse: danse,
        yoga: yoga,
        pilates: pilates,
        cardio: cardio,
        toning: toning,
        coaching: coaching,
      }),
      headers: {
        Accept: 'application/json',
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

export const useUpdatePreferencePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => updatePreferencePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('preference', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('preference');
        queryClient.invalidateQueries('preferences');
      },
    }
  );
};

export const uploadProfilImagePATCH = (Constants, { id, profilPicture }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/profile?id=eq.${
      id ?? ''
    }`,
    {
      body: JSON.stringify({ profilPicture: profilPicture }),
      headers: {
        Accept: 'application/json',
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

export const useUploadProfilImagePATCH = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => uploadProfilImagePATCH(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('imageprofil', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('imageprofil');
        queryClient.invalidateQueries('imageprofils');
      },
    }
  );
};

export const videosGET = (Constants, { category }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?category=eq.${
      category ?? ''
    }&select=*`,
    {
      headers: {
        Accept: 'application/json',
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

export const useVideosGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['videos', args], () => videosGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchVideosGET = ({
  children,
  onData = () => {},
  refetchInterval,
  category,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useVideosGET(
    { category },
    { refetchInterval }
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

  return children({ loading, data, error, refetchVideos: refetch });
};

export const videosByLevelGET = (Constants, { level }) =>
  fetch(
    `https://gekmdtnnnrfjgnaadnra.supabase.co/rest/v1/videos?level=eq.${
      level ?? ''
    }&select=*`,
    {
      headers: {
        Accept: 'application/json',
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

export const useVideosByLevelGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['levelvideos', args],
    () => videosByLevelGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchVideosByLevelGET = ({
  children,
  onData = () => {},
  refetchInterval,
  level,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useVideosByLevelGET(
    { level },
    { refetchInterval }
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

  return children({ loading, data, error, refetchVideosByLevel: refetch });
};
