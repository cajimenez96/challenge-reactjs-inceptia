import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Table';
import Filter from '../../components/Filter';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getClientReport, clientsSelector, isLoadingSelector, getClientDetailReport, clientDetailSelector } from '../../redux/slices/clientSlice';

interface Time {
  startDate: string;
  endDate: string;
}

const INITIAL_STATE = {
  startDate: "2021-03-01",
  endDate: "2022-03-25"
}

const Report = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const clients = useAppSelector(clientsSelector);
  const details = useAppSelector(clientDetailSelector);

  const [clientId, setClientId] = useState<number>(0);
  const [filterDate, setFilterDate] = useState<Time>(INITIAL_STATE);
  
  useEffect(() => {
    dispatch(getClientReport());
  }, []);

  useEffect(() => {
    const getDetails = async (id: number, filter: Time) => { 
      await dispatch(getClientDetailReport({id, from: filter.startDate, to: filter.endDate}));
    }

    if (clientId) getDetails(clientId, filterDate);
  }, [clientId, filterDate]);

  return (
    <Sidebar elements={clients} setElement={setClientId} loading={isLoading}>
      <section>
        <article className="mb-10 mt-5">
          <h3 className="uppercase">Reportes</h3>
        </article>
        <article className="mb-10 w-full">
          <div className="flex justify-end items-center gap-4">
            <div className="w-80">
              <Filter date={filterDate} setDate={setFilterDate} />
            </div>
          </div>
        </article>
        <article>
          <Table elements={details} loading={isLoading} />
        </article>
      </section>
    </Sidebar>
  )
}

export default Report;
